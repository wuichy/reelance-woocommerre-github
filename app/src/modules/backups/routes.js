const express = require('express');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const service = require('./service');
const activitySvc = require('../analytics/service');

// Rate limit por TENANT en POST /api/backups — anti-DoS.
// 5 backups manuales por hora por tenant. Generoso, pero suficiente para
// detener un admin loco o un script atacante con token comprometido.
function _tenantKey(req) {
  return `tenant:${req.tenantId || 'unknown'}`;
}
const createLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: _tenantKey,
  message: { error: 'Demasiados respaldos en poco tiempo. Espera ~1 hora antes de crear más.', code: 'BACKUPS_RATE_LIMITED' },
});
// Rate limit más generoso para delete/download — 30/hora por tenant.
const mutateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: _tenantKey,
  message: { error: 'Demasiadas operaciones. Espera unos minutos.', code: 'BACKUPS_RATE_LIMITED' },
});

// Helper: registrar en activity_log con IP del cliente
function _audit(db, req, kind, backupId, extraMeta = {}) {
  try {
    const ip = req.ip || req.headers['x-forwarded-for']?.split(',')[0]?.trim() || null;
    const ua = req.headers['user-agent'] || null;
    activitySvc.log(db, {
      tenantId: req.tenantId,
      kind,
      advisorId: req.advisor?.id || null,
      targetType: 'backup',
      targetId: backupId,
      meta: { ip, ua: ua ? ua.slice(0, 200) : null, ...extraMeta },
    });
  } catch (e) {
    console.warn('[backups] audit log failed:', e.message);
  }
}

module.exports = function createBackupsRouter(db) {
  const router = express.Router();

  // GET /api/backups → lista los backups del tenant (lectura — sin rate limit)
  router.get('/', (req, res, next) => {
    try {
      const items = service.listTenantBackups(db, req.tenantId);
      const counts = {
        manual: items.filter(i => i.type === 'manual').length,
        monthly: items.filter(i => i.type === 'monthly').length,
      };
      res.json({
        items,
        limits: { manual: service.MAX_PER_TYPE, monthly: service.MAX_PER_TYPE },
        counts,
      });
    } catch (e) { next(e); }
  });

  // POST /api/backups → crea uno nuevo (manual) — rate limited
  router.post('/', createLimiter, async (req, res, next) => {
    try {
      if (req.advisor?.role !== 'admin') {
        _audit(db, req, 'backup_denied', null, { reason: 'not_admin', action: 'create' });
        return res.status(403).json({ error: 'Solo administradores pueden crear respaldos' });
      }
      const result = await service.createTenantBackup(db, req.tenantId, {
        type: 'manual',
        advisorId: req.advisor.id,
      });
      _audit(db, req, 'backup_created', result.id, {
        filename: result.filename,
        sizeBytes: result.sizeBytes,
        backupType: 'manual',
      });
      res.json({ item: result });
    } catch (e) {
      console.error('[backups] create error:', e.message);
      _audit(db, req, 'backup_failed', null, { action: 'create', error: e.message });
      res.status(500).json({ error: e.message });
    }
  });

  // GET /api/backups/:id/download → descarga el archivo .gpg (rate limited)
  router.get('/:id/download', mutateLimiter, (req, res, next) => {
    try {
      if (req.advisor?.role !== 'admin') {
        _audit(db, req, 'backup_denied', null, { reason: 'not_admin', action: 'download' });
        return res.status(403).json({ error: 'Solo administradores pueden descargar respaldos' });
      }
      const id = parseInt(req.params.id, 10);
      if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ error: 'ID inválido' });
      }
      const found = service.getBackupPath(db, req.tenantId, id);
      if (!found) return res.status(404).json({ error: 'Respaldo no encontrado' });
      _audit(db, req, 'backup_downloaded', id, { filename: found.filename });
      res.setHeader('Content-Type', 'application/octet-stream');
      const safeName = String(found.filename).replace(/["\r\n\\]/g, '_');
      res.setHeader('Content-Disposition', `attachment; filename="${safeName}"`);
      const stream = fs.createReadStream(found.path);
      stream.on('error', (err) => {
        console.error('[backups] download stream error:', err.message);
        if (!res.headersSent) res.status(500).json({ error: 'Error leyendo archivo' });
        else res.destroy(err);
      });
      stream.pipe(res);
    } catch (e) { next(e); }
  });

  // DELETE /api/backups/:id (rate limited)
  router.delete('/:id', mutateLimiter, (req, res, next) => {
    try {
      if (req.advisor?.role !== 'admin') {
        _audit(db, req, 'backup_denied', null, { reason: 'not_admin', action: 'delete' });
        return res.status(403).json({ error: 'Solo administradores pueden eliminar respaldos' });
      }
      const id = parseInt(req.params.id, 10);
      if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ error: 'ID inválido' });
      }
      const ok = service.deleteTenantBackup(db, req.tenantId, id);
      if (!ok) return res.status(404).json({ error: 'Respaldo no encontrado' });
      _audit(db, req, 'backup_deleted', id);
      res.json({ ok: true });
    } catch (e) { next(e); }
  });

  return router;
};
