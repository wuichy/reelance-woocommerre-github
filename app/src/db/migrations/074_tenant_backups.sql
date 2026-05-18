-- Respaldos por tenant. Cada tenant tiene su propia colección de backups
-- (solo sus datos, no mezclados con otros tenants). Encriptados con GPG.
--
-- type='manual'   → creado por el usuario desde la UI (max 3)
-- type='monthly'  → creado automáticamente el día 1 de cada mes (max 3)
CREATE TABLE IF NOT EXISTS tenant_backups (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  tenant_id    INTEGER NOT NULL,
  type         TEXT NOT NULL CHECK (type IN ('manual', 'monthly')),
  filename     TEXT NOT NULL,
  size_bytes   INTEGER NOT NULL DEFAULT 0,
  created_at   INTEGER NOT NULL DEFAULT (unixepoch()),
  created_by   INTEGER REFERENCES advisors(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_tenant_backups_tenant_type
  ON tenant_backups(tenant_id, type, created_at DESC);
