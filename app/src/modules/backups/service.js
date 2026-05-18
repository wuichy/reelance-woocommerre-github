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

function _tenantDir(tenantId) {
  const dir = path.join(BACKUPS_ROOT, `tenant-${tenantId}`);
  fs.mkdirSync(dir, { recursive: true });
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
  _ensurePassphrase();
  const dir = _tenantDir(tenantId);
  const ts = _ts();
  const tmpSqlite     = path.join('/tmp', `tenant-${tenantId}-${ts}-${process.pid}.sqlite`);
  const tmpSqliteWal  = `${tmpSqlite}-wal`;
  const tmpSqliteShm  = `${tmpSqlite}-shm`;
  const encryptedName = `tenant-${tenantId}-${type}-${ts}.sqlite.gpg`;
  const encryptedPath = path.join(dir, encryptedName);

  try {
    // 1. Backup atómico de la DB completa (sqlite3 .backup vía CLI — más confiable que db.backup() en builds antiguos)
    const cp = spawnSync('sqlite3', [SOURCE_DB_PATH, `.backup '${tmpSqlite}'`], { stdio: 'pipe' });
    if (cp.status !== 0) throw new Error(`sqlite backup falló: ${cp.stderr?.toString() || 'unknown'}`);

    // 2. Filtrar al tenant pedido — DELETE de otros tenants en cada tabla con tenant_id
    const copy = new Database(tmpSqlite);
    try {
      const tablesWithTenantId = copy.prepare(`
        SELECT DISTINCT m.name AS name
          FROM sqlite_master m, pragma_table_info(m.name) p
         WHERE m.type='table' AND p.name='tenant_id'
      `).all().map(r => r.name);

      copy.transaction(() => {
        for (const tbl of tablesWithTenantId) {
          // Quoteo del nombre por si acaso (debería ser identifier limpio igual)
          copy.prepare(`DELETE FROM "${tbl}" WHERE tenant_id != ?`).run(tenantId);
        }
        // Borrar también la tabla tenant_backups (no queremos meta-info de otros)
        try { copy.prepare("DELETE FROM tenant_backups WHERE tenant_id != ?").run(tenantId); } catch (_) {}
      })();

      // VACUUM para reducir el tamaño del archivo (libera páginas borradas)
      copy.exec('VACUUM');
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
    if (gpg.status !== 0) throw new Error(`gpg encrypt falló: ${gpg.stderr?.toString() || 'unknown'}`);

    const size = fs.statSync(encryptedPath).size;

    // 4. Registrar en tabla tenant_backups
    const result = db.prepare(`
      INSERT INTO tenant_backups (tenant_id, type, filename, size_bytes, created_by)
      VALUES (?, ?, ?, ?, ?)
    `).run(tenantId, type, encryptedName, size, advisorId);

    // 5. Aplicar retention (borrar viejos si excedemos MAX_PER_TYPE)
    enforceRetention(db, tenantId, type);

    return {
      id: result.lastInsertRowid,
      tenantId, type, filename: encryptedName,
      sizeBytes: size,
      createdAt: Math.floor(Date.now() / 1000),
    };
  } finally {
    // Cleanup de archivos temporales (plaintext)
    for (const f of [tmpSqlite, tmpSqliteWal, tmpSqliteShm]) {
      try { if (fs.existsSync(f)) fs.unlinkSync(f); } catch (_) {}
    }
  }
}

// Lista backups del tenant (ambos tipos)
function listTenantBackups(db, tenantId) {
  return db.prepare(`
    SELECT id, type, filename, size_bytes, created_at, created_by
      FROM tenant_backups
     WHERE tenant_id = ?
     ORDER BY created_at DESC
  `).all(tenantId).map(r => ({
    id: r.id,
    type: r.type,
    filename: r.filename,
    sizeBytes: r.size_bytes,
    createdAt: r.created_at,
    createdBy: r.created_by,
  }));
}

// Devuelve la ruta absoluta del archivo si pertenece al tenant
function getBackupPath(db, tenantId, backupId) {
  const row = db.prepare(`
    SELECT filename FROM tenant_backups
     WHERE id = ? AND tenant_id = ?
  `).get(backupId, tenantId);
  if (!row) return null;
  const filePath = path.join(_tenantDir(tenantId), row.filename);
  if (!fs.existsSync(filePath)) return null;
  return { path: filePath, filename: row.filename };
}

function deleteTenantBackup(db, tenantId, backupId) {
  const row = db.prepare(`
    SELECT filename FROM tenant_backups
     WHERE id = ? AND tenant_id = ?
  `).get(backupId, tenantId);
  if (!row) return false;
  const filePath = path.join(_tenantDir(tenantId), row.filename);
  try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch (_) {}
  db.prepare(`DELETE FROM tenant_backups WHERE id = ? AND tenant_id = ?`).run(backupId, tenantId);
  return true;
}

// Borra los backups del tenant que excedan MAX_PER_TYPE del mismo tipo
function enforceRetention(db, tenantId, type) {
  const rows = db.prepare(`
    SELECT id, filename FROM tenant_backups
     WHERE tenant_id = ? AND type = ?
     ORDER BY created_at DESC
  `).all(tenantId, type);
  if (rows.length <= MAX_PER_TYPE) return;
  const toDelete = rows.slice(MAX_PER_TYPE);
  for (const r of toDelete) {
    const filePath = path.join(_tenantDir(tenantId), r.filename);
    try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch (_) {}
    db.prepare(`DELETE FROM tenant_backups WHERE id = ?`).run(r.id);
  }
}

// Cron mensual — crea un backup tipo 'monthly' para cada tenant activo
async function runMonthlyBackupsForAllTenants(db) {
  const tenants = db.prepare(`SELECT id FROM tenants WHERE status != 'cancelled'`).all();
  const results = [];
  for (const t of tenants) {
    try {
      const r = await createTenantBackup(db, t.id, { type: 'monthly', advisorId: null });
      results.push({ tenantId: t.id, ok: true, backupId: r.id, size: r.sizeBytes });
    } catch (e) {
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
