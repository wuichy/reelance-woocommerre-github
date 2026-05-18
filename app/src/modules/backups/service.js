// Backups por tenant — encriptados, listables, descargables y borrables.
// Cada backup contiene SOLO los datos del tenant solicitante (no otros).
//
// Pipeline de creación:
//   1. db.backup() → copia atómica del SQLite completo a /tmp
//   2. Abrir la copia, DELETE FROM cada tabla con tenant_id != X, VACUUM
//   3. Encrypt con GPG AES-256 usando el system passphrase (/root/.wapi101/backup-passphrase)
//   4. Mover .gpg a /root/.wapi101/tenant-backups/tenant-{id}/
//   5. Insertar metadata en tabla tenant_backups
//   6. Aplicar retention (max 3 de cada tipo)

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const BACKUPS_ROOT     = '/root/.wapi101/tenant-backups';
const PASSPHRASE_FILE  = '/root/.wapi101/backup-passphrase';
const SOURCE_DB_PATH   = process.env.WAPI101_DB_PATH || '/root/.wapi101/data/wapi101.sqlite';
const MAX_PER_TYPE     = 3; // 3 manuales + 3 mensuales = 6 máx por tenant

// Tablas globales que NO tienen tenant_id pero contienen secretos / datos de
// otros tenants. Las purgamos completamente del backup para evitar fugas.
// (Ej: super_admins tiene hashes de las credenciales de Luis — un cliente NO
// debe poder bajarse eso en su propio backup).
const GLOBAL_SECRET_TABLES = [
  'super_admins',
  'super_admin_sessions',
  'system_settings',
];

// Tablas que dependen de integration_id — filtramos al tenant por JOIN.
const INTEGRATION_BOUND_TABLES = [
  'email_imap_state',     // integration_id PRIMARY KEY
  'tiktok_video_state',   // integration_id + video_id
];

// Tablas que mantenemos completas (catálogo / metadata necesarias para restore).
// _migrations, sqlite_sequence, marketplace_apps — no contienen datos del cliente.

function _validateTenantId(tenantId) {
  // Aceptamos solo enteros positivos. Tenants negativos, strings, undefined,
  // null, floats — todos rechazados antes de tocar el filesystem.
  if (typeof tenantId !== 'number' || !Number.isInteger(tenantId) || tenantId <= 0) {
    throw new Error(`tenantId inválido: ${JSON.stringify(tenantId)} (debe ser entero positivo)`);
  }
}

function _tenantDir(tenantId) {
  _validateTenantId(tenantId);
  const dir = path.join(BACKUPS_ROOT, `tenant-${tenantId}`);
  fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
  // Asegura permisos restrictivos aunque ya existiera
  try { fs.chmodSync(dir, 0o700); } catch (_) {}
  return dir;
}

function _ts() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19); // 2026-05-17T12-34-56
}

function _ensurePassphrase() {
  if (!fs.existsSync(PASSPHRASE_FILE)) {
    throw new Error(`Passphrase file not found: ${PASSPHRASE_FILE}. Corre /root/wapi101/scripts/backup.sh una vez para generarlo.`);
  }
}

// Crea un backup encriptado y devuelve metadata insertada en tenant_backups
async function createTenantBackup(db, tenantId, { type = 'manual', advisorId = null } = {}) {
  _validateTenantId(tenantId);
  if (type !== 'manual' && type !== 'monthly') {
    throw new Error(`type inválido: ${type} (debe ser 'manual' o 'monthly')`);
  }
  _ensurePassphrase();
  const dir = _tenantDir(tenantId);
  const ts = _ts();
  // Incluimos PID + nonce aleatorio para evitar colisiones aunque dos backups
  // se creen en el mismo segundo desde procesos distintos (cron + server, etc).
  const nonce = require('crypto').randomBytes(4).toString('hex');
  const tmpSqlite     = path.join('/tmp', `tenant-${tenantId}-${ts}-${process.pid}-${nonce}.sqlite`);
  const tmpSqliteWal  = `${tmpSqlite}-wal`;
  const tmpSqliteShm  = `${tmpSqlite}-shm`;
  const tmpJournal    = `${tmpSqlite}-journal`;
  const encryptedName = `tenant-${tenantId}-${type}-${ts}-${nonce}.sqlite.gpg`;
  const encryptedPath = path.join(dir, encryptedName);

  try {
    // 1. Backup atómico de la DB completa (sqlite3 .backup vía CLI — más confiable que db.backup() en builds antiguos)
    const cp = spawnSync('sqlite3', [SOURCE_DB_PATH, `.backup '${tmpSqlite}'`], { stdio: 'pipe' });
    if (cp.error) throw new Error(`sqlite3 no se pudo ejecutar: ${cp.error.message} (¿está instalado?)`);
    if (cp.status !== 0) throw new Error(`sqlite backup falló (exit ${cp.status}): ${cp.stderr?.toString().trim() || 'sin stderr'}`);

    // Restringimos permisos del .sqlite plaintext ANTES de tocarlo — contiene
    // datos sensibles de TODOS los tenants hasta el paso 2.
    try { fs.chmodSync(tmpSqlite, 0o600); } catch (_) {}

    // 2. Filtrar al tenant pedido — DELETE de otros tenants en cada tabla con tenant_id
    const copy = new Database(tmpSqlite);
    try {
      const tablesWithTenantId = copy.prepare(`
        SELECT DISTINCT m.name AS name
          FROM sqlite_master m, pragma_table_info(m.name) p
         WHERE m.type='table' AND p.name='tenant_id'
      `).all().map(r => r.name);

      // Desactivar FKs durante la limpieza — vamos a borrar filas en orden
      // arbitrario y no necesitamos consistencia entre tenants (estamos
      // aislando los datos de UN tenant; las FKs internas del tenant se mantienen
      // porque todo lo que queda referencia entre sí dentro de ese tenant).
      copy.pragma('foreign_keys = OFF');
      copy.transaction(() => {
        // 2a. Tablas con tenant_id directa
        for (const tbl of tablesWithTenantId) {
          copy.prepare(`DELETE FROM "${tbl}" WHERE tenant_id != ?`).run(tenantId);
        }
        // 2b. tenant_backups — filtra por tenant_id (puede no existir en backups muy viejos)
        try { copy.prepare("DELETE FROM tenant_backups WHERE tenant_id != ?").run(tenantId); } catch (_) {}

        // 2c. Tabla 'tenants' — solo dejar la fila del tenant solicitante.
        //     De lo contrario filtramos slug/display_name/stripe_customer_id
        //     de TODOS los demás clientes.
        try { copy.prepare("DELETE FROM tenants WHERE id != ?").run(tenantId); } catch (_) {}

        // 2d. Tablas globales con secretos — purga total.
        //     super_admins contiene hashes de la cuenta-root del SaaS.
        //     system_settings puede tener API keys globales.
        for (const tbl of GLOBAL_SECRET_TABLES) {
          try { copy.prepare(`DELETE FROM "${tbl}"`).run(); } catch (_) {}
        }

        // 2e. Tablas atadas a integration_id — filtrar por integraciones del tenant
        for (const tbl of INTEGRATION_BOUND_TABLES) {
          try {
            copy.prepare(`
              DELETE FROM "${tbl}"
               WHERE integration_id NOT IN (SELECT id FROM integrations WHERE tenant_id = ?)
            `).run(tenantId);
          } catch (_) {}
        }
      })();

      // VACUUM para reducir el tamaño del archivo (libera páginas borradas)
      copy.exec('VACUUM');
      copy.pragma('foreign_keys = ON');
    } finally {
      copy.close();
    }

    // 3. Encrypt con GPG (AES-256 simétrico)
    const gpg = spawnSync('gpg', [
      '--batch', '--yes',
      '--passphrase-file', PASSPHRASE_FILE,
      '--symmetric', '--cipher-algo', 'AES256', '--compress-algo', 'zip',
      '-o', encryptedPath, tmpSqlite,
    ], { stdio: 'pipe' });
    if (gpg.error) {
      try { if (fs.existsSync(encryptedPath)) fs.unlinkSync(encryptedPath); } catch (_) {}
      throw new Error(`gpg no se pudo ejecutar: ${gpg.error.message} (¿está instalado?)`);
    }
    if (gpg.status !== 0) {
      // Si gpg falla, asegúrate de NO dejar un .gpg parcial encriptado en el dir
      try { if (fs.existsSync(encryptedPath)) fs.unlinkSync(encryptedPath); } catch (_) {}
      throw new Error(`gpg encrypt falló (exit ${gpg.status}): ${gpg.stderr?.toString().trim() || 'sin stderr'}`);
    }

    // Permisos restrictivos del archivo cifrado
    try { fs.chmodSync(encryptedPath, 0o600); } catch (_) {}

    const size = fs.statSync(encryptedPath).size;

    // 4. Registrar en tabla tenant_backups
    const result = db.prepare(`
      INSERT INTO tenant_backups (tenant_id, type, filename, size_bytes, created_by)
      VALUES (?, ?, ?, ?, ?)
    `).run(tenantId, type, encryptedName, size, advisorId);

    // 5. Aplicar retention (borrar viejos si excedemos MAX_PER_TYPE)
    enforceRetention(db, tenantId, type);

    // 6. Offsite a Cloudflare R2 si está configurado (no bloquea si falla)
    let r2 = { skipped: true };
    try {
      const { uploadToR2, isR2Configured } = require('./r2-upload');
      if (isR2Configured()) {
        const objectKey = `tenant-backups/tenant-${tenantId}/${encryptedName}`;
        r2 = await uploadToR2(encryptedPath, objectKey);
        if (r2.ok) {
          console.log(`[backups] R2 upload OK: ${objectKey}`);
        } else if (!r2.skipped) {
          console.warn(`[backups] R2 upload FALLÓ: ${r2.error || r2.status}`);
        }
      }
    } catch (e) {
      console.warn(`[backups] R2 upload error: ${e.message}`);
      r2 = { ok: false, error: e.message };
    }

    return {
      id: result.lastInsertRowid,
      tenantId, type, filename: encryptedName,
      sizeBytes: size,
      createdAt: Math.floor(Date.now() / 1000),
      offsite: r2.ok ? 'uploaded' : (r2.skipped ? 'not_configured' : 'failed'),
    };
  } finally {
    // Cleanup de archivos temporales (plaintext). SIEMPRE — aunque haya error.
    for (const f of [tmpSqlite, tmpSqliteWal, tmpSqliteShm, tmpJournal]) {
      try { if (fs.existsSync(f)) fs.unlinkSync(f); } catch (_) {}
    }
  }
}

// Lista backups del tenant (ambos tipos)
function listTenantBackups(db, tenantId) {
  _validateTenantId(tenantId);
  return db.prepare(`
    SELECT id, type, filename, size_bytes, created_at, created_by
      FROM tenant_backups
     WHERE tenant_id = ?
     ORDER BY created_at DESC, id DESC
  `).all(tenantId).map(r => ({
    id: r.id,
    type: r.type,
    filename: r.filename,
    sizeBytes: r.size_bytes,
    createdAt: r.created_at,
    createdBy: r.created_by,
  }));
}

// Defensa contra path traversal — el filename SOLO puede ser un nombre simple.
function _safeFilename(filename) {
  if (typeof filename !== 'string' || !filename) return false;
  // Sin separadores, sin '..', sin nulls
  if (filename.includes('/') || filename.includes('\\') || filename.includes('\0')) return false;
  if (filename === '.' || filename === '..') return false;
  return true;
}

// Devuelve la ruta absoluta del archivo si pertenece al tenant
function getBackupPath(db, tenantId, backupId) {
  _validateTenantId(tenantId);
  if (!Number.isInteger(backupId) || backupId <= 0) return null;
  const row = db.prepare(`
    SELECT filename FROM tenant_backups
     WHERE id = ? AND tenant_id = ?
  `).get(backupId, tenantId);
  if (!row || !_safeFilename(row.filename)) return null;
  const dir = _tenantDir(tenantId);
  const filePath = path.join(dir, row.filename);
  // Defensa adicional contra path traversal: el path resuelto debe estar dentro del dir
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(dir) + path.sep)) return null;
  if (!fs.existsSync(resolved)) return null;
  return { path: resolved, filename: row.filename };
}

// Helper: borra del bucket R2 (best-effort, no falla la operación si R2 falla)
async function _deleteFromR2(tenantId, filename) {
  try {
    const { isR2Configured } = require('./r2-upload');
    if (!isR2Configured()) return;
    const r2env = require('fs').readFileSync('/root/.wapi101/r2.env', 'utf8');
    const env = {};
    for (const line of r2env.split('\n')) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (m) env[m[1]] = m[2];
    }
    const objectKey = `tenant-backups/tenant-${tenantId}/${filename}`;
    const cryptoMod = require('crypto');
    const host = `${env.CF_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
    const now = new Date();
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
    const dateStamp = amzDate.slice(0, 8);
    const emptyHash = cryptoMod.createHash('sha256').update('').digest('hex');
    const canonicalReq = ['DELETE', `/${env.CF_R2_BUCKET}/${objectKey}`, '',
      `host:${host}\nx-amz-content-sha256:${emptyHash}\nx-amz-date:${amzDate}\n`,
      'host;x-amz-content-sha256;x-amz-date', emptyHash].join('\n');
    const crHash = cryptoMod.createHash('sha256').update(canonicalReq).digest('hex');
    const scope = `${dateStamp}/auto/s3/aws4_request`;
    const stringToSign = ['AWS4-HMAC-SHA256', amzDate, scope, crHash].join('\n');
    const kDate    = cryptoMod.createHmac('sha256', 'AWS4' + env.CF_R2_SECRET_KEY).update(dateStamp).digest();
    const kRegion  = cryptoMod.createHmac('sha256', kDate).update('auto').digest();
    const kService = cryptoMod.createHmac('sha256', kRegion).update('s3').digest();
    const kSigning = cryptoMod.createHmac('sha256', kService).update('aws4_request').digest();
    const sig = cryptoMod.createHmac('sha256', kSigning).update(stringToSign).digest('hex');
    const auth = `AWS4-HMAC-SHA256 Credential=${env.CF_R2_ACCESS_KEY}/${scope}, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=${sig}`;
    const { spawnSync } = require('child_process');
    spawnSync('curl', ['-sS', '-X', 'DELETE', `https://${host}/${env.CF_R2_BUCKET}/${objectKey}`,
      '-H', `Host: ${host}`, '-H', `X-Amz-Date: ${amzDate}`,
      '-H', `X-Amz-Content-Sha256: ${emptyHash}`, '-H', `Authorization: ${auth}`,
      '--max-time', '30'], { stdio: 'pipe' });
  } catch (e) {
    console.warn(`[backups] R2 delete error: ${e.message}`);
  }
}

function deleteTenantBackup(db, tenantId, backupId) {
  _validateTenantId(tenantId);
  if (!Number.isInteger(backupId) || backupId <= 0) return false;
  const row = db.prepare(`
    SELECT filename FROM tenant_backups
     WHERE id = ? AND tenant_id = ?
  `).get(backupId, tenantId);
  if (!row) return false;
  if (_safeFilename(row.filename)) {
    const dir = _tenantDir(tenantId);
    const filePath = path.join(dir, row.filename);
    const resolved = path.resolve(filePath);
    if (resolved.startsWith(path.resolve(dir) + path.sep)) {
      try { if (fs.existsSync(resolved)) fs.unlinkSync(resolved); } catch (_) {}
    }
    // Eliminar también del offsite (R2) — async fire-and-forget
    _deleteFromR2(tenantId, row.filename).catch(() => {});
  }
  db.prepare(`DELETE FROM tenant_backups WHERE id = ? AND tenant_id = ?`).run(backupId, tenantId);
  return true;
}

// Borra los backups del tenant que excedan MAX_PER_TYPE del mismo tipo.
// El tiebreaker `id DESC` evita comportamiento indefinido si dos backups
// terminaron en el mismo segundo (ambos comparten created_at).
function enforceRetention(db, tenantId, type) {
  _validateTenantId(tenantId);
  const rows = db.prepare(`
    SELECT id, filename FROM tenant_backups
     WHERE tenant_id = ? AND type = ?
     ORDER BY created_at DESC, id DESC
  `).all(tenantId, type);
  if (rows.length <= MAX_PER_TYPE) return;
  const toDelete = rows.slice(MAX_PER_TYPE);
  for (const r of toDelete) {
    if (_safeFilename(r.filename)) {
      const dir = _tenantDir(tenantId);
      const filePath = path.join(dir, r.filename);
      const resolved = path.resolve(filePath);
      if (resolved.startsWith(path.resolve(dir) + path.sep)) {
        try { if (fs.existsSync(resolved)) fs.unlinkSync(resolved); } catch (_) {}
      }
      // Eliminar del offsite también
      _deleteFromR2(tenantId, r.filename).catch(() => {});
    }
    db.prepare(`DELETE FROM tenant_backups WHERE id = ?`).run(r.id);
  }
}

// Cron mensual — crea un backup tipo 'monthly' para cada tenant activo.
// Si un tenant individual falla, los demás siguen procesándose.
async function runMonthlyBackupsForAllTenants(db) {
  // status NOT NULL siempre en este schema, pero protegemos contra futuros nulls
  const tenants = db.prepare(`
    SELECT id FROM tenants
     WHERE (status IS NULL OR status != 'cancelled')
     ORDER BY id
  `).all();
  const results = [];
  for (const t of tenants) {
    try {
      const r = await createTenantBackup(db, t.id, { type: 'monthly', advisorId: null });
      results.push({ tenantId: t.id, ok: true, backupId: r.id, size: r.sizeBytes });
    } catch (e) {
      // Log explícito en stderr para que systemd-cat lo capture
      console.error(`[monthly-backup] tenant ${t.id} ERROR:`, e.message, e.stack);
      results.push({ tenantId: t.id, ok: false, error: e.message });
    }
  }
  return results;
}

module.exports = {
  createTenantBackup,
  listTenantBackups,
  getBackupPath,
  deleteTenantBackup,
  enforceRetention,
  runMonthlyBackupsForAllTenants,
  MAX_PER_TYPE,
};
