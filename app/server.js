const express = require('express');
const path = require('path');
const fs = require('fs');

// ─── Carga de .env (parser mínimo, sin dependencias) ───
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

// ─── Config ───
const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3001,
  host: process.env.HOST || '127.0.0.1',
  appBaseUrl: process.env.APP_BASE_URL || 'http://localhost:3001',
  dbPath: path.resolve(__dirname, process.env.DB_PATH || './data/wapi101.sqlite'),
  uploadsDir: path.resolve(__dirname, process.env.UPLOADS_DIR || './data/uploads'),
  ai: {
    provider: process.env.AI_PROVIDER || 'anthropic',
    maxTokens: Number(process.env.AI_MAX_TOKENS) || 2048,
    temperature: Number(process.env.AI_TEMPERATURE) || 0.7,
    anthropic: { apiKey: process.env.ANTHROPIC_API_KEY || '', model: process.env.ANTHROPIC_MODEL || 'claude-opus-4-7' },
    openai:    { apiKey: process.env.OPENAI_API_KEY || '', model: process.env.OPENAI_MODEL || 'gpt-4o-mini', baseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1' },
    google:    { apiKey: process.env.GOOGLE_API_KEY || '', model: process.env.GOOGLE_MODEL || 'gemini-1.5-flash' },
    ollama:    { baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434', model: process.env.OLLAMA_MODEL || 'gemma2:9b' },
    custom:    { baseUrl: process.env.CUSTOM_AI_BASE_URL || '', apiKey: process.env.CUSTOM_AI_API_KEY || '', model: process.env.CUSTOM_AI_MODEL || '' }
  }
};

// ─── DB (corre migraciones automáticamente) ───
const { getDb } = require('./src/db');
const db = getDb(config.dbPath);

// ─── WhatsApp Web (Baileys): conectar handlers + restaurar sesiones ───
try {
  require('./src/modules/integrations/whatsapp-web/bootstrap').init(db);
  console.log('[wa-web] bootstrap inicializado');
} catch (err) {
  console.error('[wa-web] bootstrap error:', err.message);
}

// ─── Asesores: garantizar admin inicial ───
const advisorSvc = require('./src/modules/advisors/service');
advisorSvc.ensureFirstAdmin(db, {
  name:     process.env.ADMIN_NAME     || 'Administrador',
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin1234',
});

// ─── Super-admin: garantizar admin inicial si está configurado en .env ───
const superSvc = require('./src/modules/super/service');
superSvc.ensureFirstSuperAdmin(db);

// ─── Mailer: conectar DB para leer mail_config en caliente ───
require('./src/modules/mailer/transactional').setDb(db);

// ─── Cron: aviso de trial por terminar (corre cada 24h) ──────────────────────
// Revisa tenants con trial y envía aviso a 7 y 1 día(s) antes de vencer.
// Usa un flag simple en system_settings para no mandar el mismo email dos veces.
(function _scheduleTrialWarnings() {
  const INTERVALS_DAYS = [7, 1];
  async function checkTrials() {
    try {
      const mailer = require('./src/modules/mailer/transactional');
      const now    = Math.floor(Date.now() / 1000);
      const rows   = db.prepare(`
        SELECT t.id, t.display_name, t.plan, t.subscription_period_end
          FROM tenants t
         WHERE t.subscription_status = 'trialing'
           AND t.subscription_period_end IS NOT NULL
      `).all();

      for (const tenant of rows) {
        const daysLeft = Math.ceil((tenant.subscription_period_end - now) / 86400);
        if (!INTERVALS_DAYS.includes(daysLeft)) continue;

        const flagKey = `trial_warn_${tenant.id}_${daysLeft}d`;
        const already = db.prepare("SELECT 1 FROM system_settings WHERE key = ?").get(flagKey);
        if (already) continue; // ya enviado

        const admin = db.prepare(
          "SELECT name, email FROM advisors WHERE tenant_id = ? AND role = 'admin' AND active = 1 ORDER BY id LIMIT 1"
        ).get(tenant.id);
        if (!admin?.email) continue;

        await mailer.sendTrialEnding({
          to:          admin.email,
          name:        admin.name,
          companyName: tenant.display_name,
          plan:        tenant.plan,
          daysLeft,
          upgradeUrl:  `${(process.env.APP_BASE_URL || 'https://wapi101.com').replace(/\/$/, '')}/app`,
        });
        // Marcar como enviado (expira a los 8 días — no necesario pero limpio)
        db.prepare("INSERT OR IGNORE INTO system_settings (key, value) VALUES (?, ?)").run(flagKey, String(now));
        console.log(`[trial-warn] enviado tenant=${tenant.id} daysLeft=${daysLeft}`);
      }
    } catch (e) {
      console.error('[trial-warn] error:', e.message);
    }
  }
  // Primera corrida a los 5 min del arranque, luego cada 24h
  setTimeout(() => { checkTrials(); setInterval(checkTrials, 24 * 60 * 60 * 1000); }, 5 * 60 * 1000);
})();

// ─── App ───
const app = express();

// Helper: monta un router con try/catch para que un módulo roto no tumbe a los demás
function mountSafe(mountPath, factory) {
  try {
    app.use(mountPath, factory(db));
    console.log(`[mount] ${mountPath}`);
  } catch (err) {
    console.error(`[mount] error en ${mountPath}:`, err.message);
  }
}

// ─── Webhooks PRIMERO: necesitan body crudo (HMAC). Cada handler usa express.raw() internamente.
mountSafe('/webhooks', require('./src/modules/integrations/webhooks'));
// Stripe webhook va en su propio mount porque necesita raw body para verificar
// la firma. NO se debe poner detrás de express.json() global.
mountSafe('/webhooks/stripe', require('./src/modules/billing/webhook'));
// WooCommerce webhook (autenticado por token en header, no necesita auth middleware)
const { webhookRouter: wooWebhookRouter, checkWooInactivity } = require('./src/modules/woo/routes');
app.use('/webhooks/woo', wooWebhookRouter(db));
// Check de inactividad WooCommerce cada hora (arranca 5min después del boot)
setTimeout(() => { checkWooInactivity(db); setInterval(() => checkWooInactivity(db), 60 * 60 * 1000); }, 5 * 60 * 1000);

// ─── Cache-busting de assets ─────────────────────────────────────────────
// Problema: en cada deploy, navegadores (especialmente iOS Safari, Cloudflare,
// SW PWA) sirven app.js/styles.css cacheados → la app aparece en blanco o con
// JS incompatible con el HTML nuevo. ETag/no-cache no es suficiente en
// entornos reales con proxies.
//
// Solución: pegar ?v=<BUILD_VERSION> a cada <script>/<link> servido. La URL
// cambia en cada deploy (cada reinicio del proceso) → cache key cambia →
// browser y SW descargan fresco automáticamente.
const BUILD_VERSION = String(Date.now());
const HTML_FILES = ['index.html', 'login.html', 'super.html', 'signup.html', 'landing.html', 'privacy.html', 'terms.html'];
const _htmlCache = {};
function _injectVersion(html) {
  return html
    .replace(/(<script\b[^>]*?\bsrc\s*=\s*["'])([^"'?]+\.js)(["'])/gi, `$1$2?v=${BUILD_VERSION}$3`)
    .replace(/(<link\b[^>]*?\bhref\s*=\s*["'])([^"'?]+\.css)(["'])/gi, `$1$2?v=${BUILD_VERSION}$3`);
}
for (const file of HTML_FILES) {
  try {
    const content = fs.readFileSync(path.join(__dirname, 'public', file), 'utf8');
    _htmlCache[file] = _injectVersion(content);
  } catch (err) {
    console.warn(`[boot] No se pudo precargar ${file}: ${err.message}`);
  }
}
console.log(`[boot] BUILD_VERSION=${BUILD_VERSION} (${Object.keys(_htmlCache).length} HTMLs versionados)`);

// Endpoint público (no requiere auth) para que el cliente detecte si hay
// versión nueva en el server y prompt al usuario para recargar.
app.get('/api/version', (_req, res) => {
  // Headers explícitos para Cloudflare — no-store + CDN bypass
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Surrogate-Control', 'no-store');
  res.json({ version: BUILD_VERSION });
});

// Sirve la página HTML del super-admin ANTES de montar el router (sino el
// authMiddleware del router intercepta la GET /super y devuelve 401).
app.get('/super', (_req, res) => {
  res.set('Cache-Control', 'no-cache, must-revalidate');
  if (_htmlCache['super.html']) return res.type('html').send(_htmlCache['super.html']);
  res.sendFile(path.join(__dirname, 'public', 'super.html'));
});

// Páginas legales (públicas, sin auth). Servidas como rutas explícitas para
// que aparezcan limpio en URL (sin .html) y para que Meta/Cloudflare las
// puedan crawlear sin issue.
app.get('/privacy', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'privacy.html')));
app.get('/terms',   (_req, res) => res.sendFile(path.join(__dirname, 'public', 'terms.html')));

// Catálogo público de planes (lo necesita la landing y la página /pricing).
// Se monta ANTES del authMiddleware. Delega a billing/routes para mantener una sola fuente de verdad.
app.get('/api/public/plans', (_req, res) => {
  const { getPlans } = require('./src/modules/billing/routes');
  res.json({ plans: getPlans() });
});

// ─── Super-admin API: monta ANTES del authMiddleware (/api). Tiene su propio
// flujo de auth con tokens sa_*. NO usa req.tenantId ni filtros multi-tenant.
mountSafe('/super', require('./src/modules/super/routes'));

// ─── Headers de seguridad globales (helmet) ───
// Protege contra clickjacking, MIME sniffing, downgrade HTTP, etc.
// CSP relajada porque la SPA usa scripts inline y eval para algunas operaciones —
// si en el futuro removemos eso, se puede tightening.
const helmet = require('helmet');
app.use(helmet({
  contentSecurityPolicy: false, // Desactivado: la SPA usa scripts inline/eval. Reactivar tras refactor.
  crossOriginEmbedderPolicy: false, // Permite cargar recursos de Meta/Stripe/etc.
  crossOriginResourcePolicy: { policy: 'cross-origin' }, // Permite que webhook URLs reciban POSTs externos
}));

// JSON parser global para el resto.
// 150mb para soportar adjuntos de chat (PDFs hasta 100MB → ~133MB en base64).
// Imágenes y videos pequeños caben holgadamente. La expansión base64 es 4/3.
app.use(express.json({ limit: '150mb' }));

// VAPID public key — público (cliente lo necesita para suscribirse antes de login)
app.get('/api/push/vapid-public-key', (_req, res) => {
  res.json({ publicKey: process.env.VAPID_PUBLIC_KEY || null });
});

// ─── Login endpoints (públicos, no requieren sesión) ───
const { authMiddleware, loadTenant } = require('./src/middleware/auth');

// Rate limiting para login: 10 intentos por IP cada 15 min.
// Si el atacante usa rotación de IPs hay menos prevención (necesitaríamos fail2ban
// o capto de captcha tras N fallos por usuario), pero esto bloquea el brute force
// trivial desde una sola IP.
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  // Trust proxy (Cloudflare) → usa X-Forwarded-For
  keyGenerator: (req) => req.ip || req.connection?.remoteAddress || 'unknown',
  message: { error: 'Demasiados intentos. Espera 15 minutos.', code: 'RATE_LIMITED' },
});
// Habilitar trust proxy para que req.ip sea la IP real del cliente vía Cloudflare
app.set('trust proxy', 1);

app.post('/api/auth/login', loginLimiter, (req, res) => {
  const { username, password, tenantSlug, remember } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'Usuario y contraseña requeridos' });
  const result = advisorSvc.login(db, username.trim(), password, tenantSlug ? String(tenantSlug).trim() : null);
  if (result.error === 'SLUG_REQUIRED') {
    return res.status(400).json({
      error: 'Hay múltiples cuentas con ese usuario. Indica el slug del workspace.',
      code: 'TENANT_SLUG_REQUIRED',
    });
  }
  if (result.error || !result.advisor) {
    return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }
  const advisor = result.advisor;
  // Validar tenant del advisor — si está suspendido/cancelado, no emitir token.
  const tenant = loadTenant(db, advisor.tenant_id);
  if (!tenant)                          return res.status(403).json({ error: 'Tenant inexistente', code: 'TENANT_NOT_FOUND' });
  if (tenant.status === 'suspended')    return res.status(403).json({ error: 'Cuenta suspendida — contacta soporte', code: 'TENANT_SUSPENDED' });
  if (tenant.status === 'cancelled')    return res.status(403).json({ error: 'Cuenta cancelada', code: 'TENANT_CANCELLED' });
  const token = advisorSvc.createSession(db, advisor.id, remember === true);
  res.json({
    token,
    advisor: { id: advisor.id, name: advisor.name, username: advisor.username, role: advisor.role,
               permissions: JSON.parse(advisor.permissions || '{}'),
               tenantId: advisor.tenant_id },
    tenant: { slug: tenant.slug, displayName: tenant.display_name, plan: tenant.plan },
  });
});

app.post('/api/auth/logout', (req, res) => {
  const auth = req.headers['authorization'] || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : null;
  if (token) advisorSvc.deleteSession(db, token);
  res.json({ ok: true });
});

// ─── Forgot Password — pide reset por email ───────────────────────────
// Siempre devuelve 200 (no revela si el email existe — evita enumeration).
const _forgotAttempts = new Map();
function _forgotRateLimit(ip) {
  const now = Date.now();
  const entry = _forgotAttempts.get(ip) || { count: 0, resetAt: now + 60*60*1000 };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + 60*60*1000; }
  entry.count++;
  _forgotAttempts.set(ip, entry);
  return entry.count <= 5;
}

app.post('/api/auth/forgot-password', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
  if (!_forgotRateLimit(ip)) {
    return res.status(429).json({ error: 'Demasiados intentos. Intenta más tarde.' });
  }
  const { email } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }
  try {
    const userAgent = req.headers['user-agent'] || null;
    const result = advisorSvc.requestPasswordReset(db, email, ip, userAgent);
    // Si el email existe, mandamos correo. Si no, igual devolvemos 200.
    if (result && result.plainToken) {
      const baseUrl = (process.env.APP_BASE_URL || 'https://wapi101.com').replace(/\/$/, '');
      const resetUrl = `${baseUrl}/reset-password?token=${encodeURIComponent(result.plainToken)}`;
      try {
        const mailer = require('./src/modules/mailer/transactional');
        await mailer.sendPasswordReset({ to: result.advisor.email, name: result.advisor.name, resetUrl });
      } catch (mailErr) {
        console.error('[forgot-password] error enviando email:', mailErr.message);
        // No revelar al cliente que falló — sigue 200 para no leak existencia
      }
    }
  } catch (err) {
    console.error('[forgot-password] error inesperado:', err.message);
  }
  res.json({ ok: true, message: 'Si el email existe en nuestro sistema, recibirás un correo con instrucciones.' });
});

// ─── Reset Password — consume token y actualiza ───────────────────────
app.post('/api/auth/reset-password', (req, res) => {
  const { token, password } = req.body || {};
  if (!token) return res.status(400).json({ error: 'Token requerido' });
  if (!password || password.length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  }
  const result = advisorSvc.applyPasswordReset(db, token, password);
  if (result.error === 'INVALID_TOKEN') {
    return res.status(400).json({ error: 'El link expiró o ya fue usado. Solicita uno nuevo.' });
  }
  if (result.error === 'WEAK_PASSWORD') {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  }
  res.json({ ok: true, message: 'Contraseña actualizada. Inicia sesión con tu nueva contraseña.' });
});

// ─── Verificar validez de token (para mostrar form o "expirado") ──────
app.get('/api/auth/reset-password/verify', (req, res) => {
  const token = String(req.query.token || '');
  const verified = advisorSvc.verifyResetToken(db, token);
  if (!verified) return res.status(400).json({ valid: false });
  res.json({ valid: true, email: verified.advisor.email });
});

// ─── Signup público — crea tenant + admin + auto-login ─────────────────
// Sin auth. Registra rate-limit básico por IP en memoria (5 intentos / 10 min)
// para mitigar bots; el rate limit "real" se hace después con Redis o similar.
const _signupAttempts = new Map();
function _signupRateLimit(ip) {
  const now = Date.now();
  const entry = _signupAttempts.get(ip) || { count: 0, resetAt: now + 10*60*1000 };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + 10*60*1000; }
  entry.count++;
  _signupAttempts.set(ip, entry);
  return entry.count <= 5;
}
function _slugify(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
}

app.post('/api/auth/signup', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
  if (!_signupRateLimit(ip)) {
    return res.status(429).json({ error: 'Demasiados intentos. Espera 10 minutos.' });
  }

  const { companyName, adminName, email, password, plan: planParam } = req.body || {};
  if (!companyName || !companyName.trim()) return res.status(400).json({ error: 'Nombre de la empresa requerido' });
  if (!adminName || !adminName.trim())     return res.status(400).json({ error: 'Tu nombre es requerido' });
  if (!email || !email.includes('@'))      return res.status(400).json({ error: 'Email inválido' });
  if (!password || password.length < 8)    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  const VALID_PAID = ['basico', 'pro', 'ultra'];
  const plan = VALID_PAID.includes(planParam) ? planParam : 'free';

  // Auto-generar slug y username
  let slug = _slugify(companyName);
  if (!slug || slug.length < 2) return res.status(400).json({ error: 'El nombre de la empresa genera un slug inválido' });
  // Si el slug existe, agregar sufijo numérico
  let attempt = 0, finalSlug = slug;
  while (db.prepare('SELECT id FROM tenants WHERE slug = ?').get(finalSlug)) {
    attempt++;
    finalSlug = slug + '-' + attempt;
    if (attempt > 99) return res.status(409).json({ error: 'No se pudo generar un slug único, intenta otro nombre' });
  }
  const username = email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');

  try {
    const superSvc = require('./src/modules/super/service');
    const result = superSvc.createTenant(db, {
      slug: finalSlug,
      displayName: companyName.trim(),
      plan,
      adminName: adminName.trim(),
      adminUsername: username,
      adminEmail: email.trim(),
      adminPassword: password,
    });

    // Auto-login: crear session inmediato
    const advisor = result.tenant && db.prepare(
      "SELECT * FROM advisors WHERE tenant_id = ? AND role = 'admin' AND active = 1 ORDER BY id DESC LIMIT 1"
    ).get(result.tenant.id);
    if (!advisor) throw new Error('No se pudo crear el admin');
    const token = advisorSvc.createSession(db, advisor.id);

    // Para planes de pago: crear checkout Stripe con trial 14 días
    let checkoutUrl = null;
    if (VALID_PAID.includes(plan)) {
      try {
        const { getPlans } = require('./src/modules/billing/routes');
        const planObj = getPlans().find(p => p.key === plan);
        const priceId = planObj?.priceIdMonthly;
        if (priceId) {
          const billingSvc = require('./src/modules/billing/service');
          const baseUrl = (process.env.APP_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
          const sess = await billingSvc.createCheckoutSession(db, result.tenant.id, priceId, {
            successUrl: `${baseUrl}/app?billing=success`,
            cancelUrl:  `${baseUrl}/app?billing=cancelled`,
          });
          checkoutUrl = sess.url;
        }
      } catch (err) {
        console.warn('[signup] no se pudo crear checkout session:', err.message);
      }
    }

    // Notificar a admin (luis@wapi101.com) + bienvenida al nuevo tenant — fire-and-forget
    try {
      const mailer = require('./src/modules/mailer/transactional');
      const baseUrl = (process.env.APP_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
      mailer.sendSignupNotification({
        tenantName: result.tenant.display_name,
        adminName:  advisor.name,
        adminEmail: advisor.email || email,
        plan,
        slug:       result.tenant.slug,
      }).catch(err => console.error('[signup] error notif email:', err.message));
      mailer.sendWelcome({
        to:          advisor.email || email,
        name:        advisor.name,
        companyName: result.tenant.display_name,
        plan,
        appUrl:      `${baseUrl}/app`,
      }).catch(err => console.error('[signup] error welcome email:', err.message));
    } catch (e) {
      console.warn('[signup] no se pudo cargar mailer:', e.message);
    }

    res.json({
      token,
      checkoutUrl,
      advisor: {
        id: advisor.id,
        name: advisor.name,
        username: advisor.username,
        role: advisor.role,
        permissions: JSON.parse(advisor.permissions || '{}'),
        tenantId: advisor.tenant_id,
      },
      tenant: {
        slug: result.tenant.slug,
        displayName: result.tenant.display_name,
        plan: result.tenant.plan,
      },
    });
  } catch (err) {
    // Mensajes de error legibles para el frontend
    const msg = err.message || 'Error al crear la cuenta';
    const code = /Email|UNIQUE/i.test(msg) ? 409 : 400;
    res.status(code).json({ error: msg });
  }
});

// ─── Cache-Control para TODAS las respuestas /api/* ───
// Las respuestas de la API son dinámicas (leads, pedidos, contactos, etc.).
// Sin estos headers, Safari y Cloudflare las cachean libremente y muestran
// datos viejos aunque el server ya tenga la versión nueva.
app.use('/api', (_req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
});

// ─── Proteger todas las rutas /api/* con auth ───
app.use('/api', authMiddleware(db));

// API básica (protegida)
app.get('/api/me', (req, res) => res.json({ advisor: req.advisor }));

// ─── OAuth prepare: stashea tenant_id en oauth_states ANTES de abrir el
//      popup OAuth. Necesario porque /auth/{meta,tiktok}/start son GETs
//      que abren popups sin headers Authorization, así que no pueden saber
//      el tenantId del advisor logueado. El frontend llama este endpoint
//      con su Bearer token, recibe un state pre-creado, y abre el popup
//      con ?state=<existing-state>.
const crypto = require('crypto');
const VALID_OAUTH_PROVIDERS = ['messenger', 'instagram', 'facebook', 'whatsapp-lite', 'tiktok', 'threads', 'gmail', 'outlook'];
app.post('/api/auth/oauth/prepare', (req, res) => {
  const { provider } = req.body || {};
  if (!VALID_OAUTH_PROVIDERS.includes(provider)) {
    return res.status(400).json({ error: 'Provider inválido' });
  }
  // Limpieza de states viejos (>1h)
  db.prepare("DELETE FROM oauth_states WHERE created_at < unixepoch() - 3600").run();
  const state = crypto.randomBytes(20).toString('hex');
  db.prepare("INSERT INTO oauth_states (state, provider, tenant_id) VALUES (?, ?, ?)")
    .run(state, provider, req.tenantId);
  res.json({ state });
});

// Perfil de cuenta — por tenant. La tabla app_settings tiene UNIQUE(key) global,
// pero como solo Lucho (tenant 1) la usa, el upsert por key+tenant funciona.
// Cuando se onboarde el 2do tenant se hará UNIQUE(tenant_id, key) en migración.
app.get('/api/settings/profile', (req, res) => {
  const row = db.prepare("SELECT value FROM app_settings WHERE key = 'profile' AND tenant_id = ?").get(req.tenantId);
  res.json({ profile: row ? JSON.parse(row.value) : {} });
});
app.patch('/api/settings/profile', (req, res) => {
  // Upsert manual ya que el ON CONFLICT clause necesita la columna unique.
  const existing = db.prepare("SELECT id FROM app_settings WHERE key = 'profile' AND tenant_id = ?").get(req.tenantId);
  if (existing) {
    db.prepare("UPDATE app_settings SET value = ?, updated_at = unixepoch() WHERE id = ?")
      .run(JSON.stringify(req.body), existing.id);
  } else {
    db.prepare("INSERT INTO app_settings (tenant_id, key, value, updated_at) VALUES (?, 'profile', ?, unixepoch())")
      .run(req.tenantId, JSON.stringify(req.body));
  }
  res.json({ profile: req.body });
});

// GET /api/settings/split
app.get('/api/settings/split', (req, res) => {
  const row = db.prepare("SELECT value FROM app_settings WHERE key = 'chat_split' AND tenant_id = ?").get(req.tenantId);
  res.json(row ? JSON.parse(row.value) : { enabled: false });
});

// PATCH /api/settings/split
app.patch('/api/settings/split', (req, res) => {
  const val = JSON.stringify(req.body);
  db.prepare(`
    INSERT INTO app_settings (tenant_id, key, value, updated_at) VALUES (?, 'chat_split', ?, unixepoch())
    ON CONFLICT(tenant_id, key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
  `).run(req.tenantId, val);
  res.json({ ok: true });
});
// /healthz — público, lo pinguea UptimeRobot. Devuelve 503 si algo está mal.
//   - Server vivo + DB accesible → 200
//   - Alguna integración marcada como 'connected' en DB pero el manager dice
//     'disconnected' o 'error' → 503 (alerta UptimeRobot)
// SEGURIDAD: respuesta NO expone IDs ni nombres de integraciones de tenants
// (sólo conteo agregado) para no dar info útil a atacantes haciendo recon.
// Detalles completos requieren token (HEALTHZ_TOKEN env var).
const healthzStats = { hits: 0, last: null };
app.get('/healthz', (req, res) => {
  healthzStats.hits++;
  healthzStats.last = Date.now();
  try {
    db.prepare('SELECT 1').get();
  } catch (err) {
    return res.status(503).json({ ok: false, reason: 'db_error' });
  }
  const issues = [];
  try {
    const waMgr = require('./src/modules/integrations/whatsapp-web/manager');
    const rows = db.prepare(
      "SELECT id, display_name FROM integrations WHERE provider = 'whatsapp-lite' AND status = 'connected'"
    ).all();
    for (const row of rows) {
      const live = waMgr.getStatus(row.id);
      if (live.status !== 'connected' && live.status !== 'connecting' && live.status !== 'qr') {
        issues.push({ kind: 'whatsapp-lite', id: row.id, name: row.display_name, liveStatus: live.status, error: live.error });
      }
    }
  } catch (_) {}
  // Permite detalles completos si se pasa el HEALTHZ_TOKEN configurado en .env.
  // Sin token → respuesta mínima sin info sensible (solo ok/issues count).
  const token = req.headers['x-healthz-token'] || req.query.token;
  const showDetails = process.env.HEALTHZ_TOKEN && token === process.env.HEALTHZ_TOKEN;
  if (issues.length) {
    return res.status(503).json(showDetails
      ? { ok: false, reason: 'integration_unhealthy', issues, ts: Date.now() }
      : { ok: false, issueCount: issues.length });
  }
  res.json(showDetails ? { ok: true, env: config.env, ts: Date.now() } : { ok: true });
});
app.get('/api/ai/info', (_req, res) => {
  const p = config.ai.provider;
  const model = (config.ai[p] && config.ai[p].model) || null;
  res.json({ provider: p, model });
});

// ─── AI Settings (por tenant) ───
const DEFAULT_MODELS = { anthropic: 'claude-opus-4-7', openai: 'gpt-4o-mini', google: 'gemini-1.5-flash', ollama: 'gemma2:9b' };

app.get('/api/settings/ai', (req, res) => {
  const row = db.prepare("SELECT value FROM app_settings WHERE key = 'ai_settings' AND tenant_id = ?").get(req.tenantId);
  const saved = row ? JSON.parse(row.value) : {};
  const provider = saved.provider || config.ai.provider;
  res.json({
    provider,
    model:       saved.model       ?? DEFAULT_MODELS[provider] ?? '',
    hasApiKey:   !!saved.apiKey,
    baseUrl:     saved.baseUrl     ?? (config.ai[provider]?.baseUrl || ''),
    temperature: saved.temperature ?? config.ai.temperature,
    maxTokens:   saved.maxTokens   ?? config.ai.maxTokens,
    mode:        saved.mode        || 'suggest',
  });
});

app.patch('/api/settings/ai', (req, res) => {
  const row = db.prepare("SELECT value FROM app_settings WHERE key = 'ai_settings' AND tenant_id = ?").get(req.tenantId);
  const current = row ? JSON.parse(row.value) : {};
  const b = req.body || {};
  const updated = { ...current };
  if (b.provider)     updated.provider    = b.provider;
  if (b.model !== undefined) updated.model = b.model;
  if (b.baseUrl !== undefined) updated.baseUrl = b.baseUrl;
  if (b.temperature !== undefined) updated.temperature = Number(b.temperature);
  if (b.maxTokens !== undefined)   updated.maxTokens   = Number(b.maxTokens);
  if (b.mode)         updated.mode        = b.mode;
  if (b.clearApiKey) { delete updated.apiKey; }
  else if (b.apiKey && !b.apiKey.startsWith('•')) updated.apiKey = b.apiKey;
  db.prepare(`
    INSERT INTO app_settings (tenant_id, key, value, updated_at) VALUES (?, 'ai_settings', ?, unixepoch())
    ON CONFLICT(tenant_id, key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
  `).run(req.tenantId, JSON.stringify(updated));
  res.json({ ok: true });
});

app.post('/api/settings/ai/test', async (req, res) => {
  const row = db.prepare("SELECT value FROM app_settings WHERE key = 'ai_settings' AND tenant_id = ?").get(req.tenantId);
  const saved = row ? JSON.parse(row.value) : {};
  const provider = saved.provider || config.ai.provider;
  const apiKey   = saved.apiKey   || config.ai[provider]?.apiKey || '';
  const model    = saved.model    || DEFAULT_MODELS[provider] || '';
  const baseUrl  = saved.baseUrl  || config.ai[provider]?.baseUrl || '';

  try {
    if (provider === 'anthropic') {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
        body: JSON.stringify({ model, max_tokens: 10, messages: [{ role: 'user', content: 'hi' }] }),
      });
      if (!r.ok) { const e = await r.json().catch(() => ({})); return res.status(400).json({ ok: false, error: e.error?.message || `HTTP ${r.status}` }); }
    } else if (provider === 'openai') {
      const base = baseUrl || 'https://api.openai.com/v1';
      const r = await fetch(`${base}/models`, { headers: { Authorization: `Bearer ${apiKey}` } });
      if (!r.ok) return res.status(400).json({ ok: false, error: `HTTP ${r.status}` });
    } else if (provider === 'google') {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      if (!r.ok) { const e = await r.json().catch(() => ({})); return res.status(400).json({ ok: false, error: e.error?.message || `HTTP ${r.status}` }); }
    } else if (provider === 'ollama') {
      const base = baseUrl || 'http://localhost:11434';
      const r = await fetch(`${base}/api/tags`);
      if (!r.ok) return res.status(400).json({ ok: false, error: `HTTP ${r.status}` });
    } else {
      return res.status(400).json({ ok: false, error: 'Proveedor no soportado' });
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

// ─── Copiloto IA ───
const DEFAULT_COPILOT_CONFIG = { canMoveStage: true, canAssign: true, canAddTag: true, canAddNote: true, context: '', model: '' };

app.get('/api/copilot/config', (req, res) => {
  const row = db.prepare("SELECT value FROM app_settings WHERE key = 'copilot_config' AND tenant_id = ?").get(req.tenantId);
  res.json(row ? { ...DEFAULT_COPILOT_CONFIG, ...JSON.parse(row.value) } : DEFAULT_COPILOT_CONFIG);
});

app.patch('/api/copilot/config', (req, res) => {
  const val = JSON.stringify({ ...DEFAULT_COPILOT_CONFIG, ...(req.body || {}) });
  db.prepare(`INSERT INTO app_settings (tenant_id, key, value, updated_at) VALUES (?, 'copilot_config', ?, unixepoch())
    ON CONFLICT(tenant_id, key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`).run(req.tenantId, val);
  res.json({ ok: true });
});

app.post('/api/copilot/chat', async (req, res) => {
  try {
    const copilot = require('./src/modules/ai/copilot');
    const configRow = db.prepare("SELECT value FROM app_settings WHERE key = 'copilot_config' AND tenant_id = ?").get(req.tenantId);
    const config = { ...DEFAULT_COPILOT_CONFIG, ...(configRow ? JSON.parse(configRow.value) : {}) };
    const { message, history = [] } = req.body || {};
    if (!message) return res.status(400).json({ error: 'message requerido' });
    const result = await copilot.chat(db, req.tenantId, history, message, config);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── AI Suggest (genera borrador de respuesta para el chat) ───
app.post('/api/conversations/:id/ai-suggest', async (req, res) => {
  try {
    const aiSvc = require('./src/modules/ai/service');
    const settings = aiSvc.getSettings(db, req.tenantId);
    if (!settings.apiKey && settings.provider !== 'ollama') {
      return res.status(400).json({ error: 'Configura el API Key de IA en Ajustes → IA antes de usar esta función.' });
    }
    const convoId = Number(req.params.id);
    const convo = db.prepare('SELECT * FROM conversations WHERE id = ? AND tenant_id = ?').get(convoId, req.tenantId);
    if (!convo) return res.status(404).json({ error: 'Conversación no encontrada' });

    const knowledge = aiSvc.getKnowledgeContext(db, req.tenantId);
    const history   = aiSvc.getConversationHistory(db, req.tenantId, convoId, 15);
    if (!history.length) return res.status(400).json({ error: 'No hay mensajes en la conversación todavía.' });

    const profileRow = db.prepare("SELECT value FROM app_settings WHERE key = 'profile' AND tenant_id = ?").get(req.tenantId);
    const profile = profileRow ? JSON.parse(profileRow.value) : {};
    const companyName = profile.businessName || profile.name || 'nuestra empresa';

    const systemPrompt = [
      `Eres un asesor de ventas de ${companyName}. Responde de forma profesional, amigable y concisa en el mismo idioma que usa el cliente. No uses markdown.`,
      knowledge ? `Fuentes de conocimiento:\n${knowledge}` : '',
    ].filter(Boolean).join('\n\n');

    const suggestion = await aiSvc.callAI(settings, systemPrompt, history);
    res.json({ suggestion });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── Auth (OAuth callbacks) ───
mountSafe('/auth', require('./src/modules/auth/routes'));

// ─── Módulos de API ───
mountSafe('/api/contacts',           require('./src/modules/customers/routes'));
mountSafe('/api/pipelines',          require('./src/modules/pipelines/routes'));
mountSafe('/api/expedients',         require('./src/modules/expedients/routes'));
mountSafe('/api/integrations',       require('./src/modules/integrations/routes'));
mountSafe('/api/integration-votes',  require('./src/modules/integration-votes/routes'));
mountSafe('/api/outgoing-webhooks',  require('./src/modules/outgoing-webhooks/routes'));
mountSafe('/api/bot',                require('./src/modules/bot/routes'));
mountSafe('/api/bot-tags',           require('./src/modules/bot-tags/routes'));
mountSafe('/api/template-tags',      require('./src/modules/template-tags/routes'));
mountSafe('/api/machine-tokens',     require('./src/modules/machine-tokens/routes'));
mountSafe('/api/admin',              require('./src/modules/admin/routes'));
mountSafe('/api/conversations',      require('./src/modules/conversations/routes'));
mountSafe('/api/personal-chat',      require('./src/modules/personal-chat/routes'));
mountSafe('/api/templates',          require('./src/modules/templates/routes'));
mountSafe('/api/stats',              require('./src/modules/stats/routes'));
mountSafe('/api/advisors',           require('./src/modules/advisors/routes'));
mountSafe('/api/trash',              require('./src/modules/trash/routes'));
mountSafe('/api/reports',            require('./src/modules/reports/routes'));
mountSafe('/api/push',               require('./src/modules/notifications/routes'));
mountSafe('/api/notifications',      require('./src/modules/notifications/routes'));
mountSafe('/api/billing',            require('./src/modules/billing/routes'));
mountSafe('/api/tasks',              require('./src/modules/tasks/routes'));
mountSafe('/api/ai-knowledge',       require('./src/modules/ai-knowledge/routes'));
mountSafe('/api/analytics',          require('./src/modules/analytics/routes'));
mountSafe('/api/business',           require('./src/modules/business/routes'));
mountSafe('/api/appointments',       require('./src/modules/appointments/routes'));
mountSafe('/api/apps',               require('./src/modules/apps/routes'));
mountSafe('/api/jobs',               require('./src/modules/jobs/routes'));
mountSafe('/api/backups',            require('./src/modules/backups/routes'));
const { authRouter: wooAuthRouter }  = require('./src/modules/woo/routes');
app.use('/api/apps/woo', wooAuthRouter(db));

// Arrancar el worker de bulk jobs (corre cada 1s en background).
// Si el server se reinicia con jobs 'running', los re-encola al boot.
try { require('./src/modules/jobs/runner').start(db); }
catch (e) { console.error('[jobs-worker] start failed:', e.message); }

// Manejador global de errores
app.use((err, _req, res, _next) => {
  console.error('[error]', err);
  res.status(500).json({ error: err.message || 'Error inesperado' });
});

// ─── No-cache para app.js y styles.css (en todos los entornos) ───
// Cloudflare ignora el query-string (?v=...) como cache key por defecto
// → sirve el JS/CSS viejo aunque el HTML referencie una versión nueva.
// La solución es decirle explícitamente que nunca cachee estos dos archivos.
app.use((req, res, next) => {
  if (/^\/(app|styles)(\.[\w]+)?\.js|styles\.css/.test(req.path) ||
      req.path === '/app.js' || req.path === '/styles.css') {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
  }
  next();
});
if (config.env !== 'production') {
  app.use((_req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    next();
  });
}
// Ruta /chat — sirve la SPA con marker para que el frontend active "modo personal"
// (chat-only, vista personal por asesor con hides + tags propios).
//
// Importante: inyectamos manifest-chat.json + apple-mobile-web-app-title="Chat"
// para que iOS guarde el shortcut como app SEPARADA del CRM completo. Sin esto
// el "Add to Home Screen" desde /chat redirigia a /app porque ambos compartian
// el manifest principal con start_url:"/app".
app.get('/chat', (_req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  const fs = require('fs');
  let html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
  html = html
    .replace('href="/manifest.json"', 'href="/manifest-chat.json"')
    .replace(
      /<title>[^<]*<\/title>/,
      '<title>Wapi101 Chat</title>'
    )
    .replace(
      /<meta name="apple-mobile-web-app-title" content="[^"]*"/,
      '<meta name="apple-mobile-web-app-title" content="Wapi101 Chat"'
    )
    .replace(
      /<meta name="application-name" content="[^"]*"/,
      '<meta name="application-name" content="Wapi101 Chat"'
    );
  res.type('html').send(html);
});


// Sirve archivos subidos (media de plantillas, etc.) bajo /uploads.
// Cache normal — los archivos no cambian (cada upload genera nombre único).
app.use('/uploads', express.static(config.uploadsDir, {
  maxAge: '1d',
  index: false,
}));

// ─── Routing del producto SaaS ───
// /            → Landing pública (con auto-detect: si hay token, redirige a /app)
// /login       → Pantalla de login del CRM
// /signup      → Form de signup público (crea tenant + admin + auto-login)
// /app, /app/* → CRM SPA (index.html)
//
// Estas rutas se montan ANTES del express.static general para que ganen
// precedencia sobre los archivos HTML correspondientes que serían servidos
// con el path por default.

const _sendFile = (file) => (_req, res) => {
  // SPA HTML: no-store evita que browsers/Cloudflare retengan HTML stale
  // (la pelea con cache que veniamos teniendo). El HTML es chico, asi que
  // re-fetch en cada navegación no impacta perf.
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  if (_htmlCache[file]) return res.type('html').send(_htmlCache[file]);
  res.sendFile(path.join(__dirname, 'public', file));
};

app.get('/',                _sendFile('landing.html'));
app.get('/login',           _sendFile('login.html'));
app.get('/signup',          _sendFile('signup.html'));
app.get('/forgot-password', _sendFile('forgot-password.html'));
app.get('/reset-password',  _sendFile('reset-password.html'));
app.get('/app',             _sendFile('index.html'));
// Express 5 requiere wildcards con nombre (no '*' suelto). '*splat' captura
// cualquier subpath bajo /app y lo manda al index.html del SPA.
app.get('/app/*splat', _sendFile('index.html'));

// Páginas de marketing/SEO: comparaciones vs competidores y páginas temáticas.
// Sirven HTML server-side renderizado para wapi101.com/vs/* y nichos como
// /crm-whatsapp-business, /mejor-crm-latam, etc. También expone /sitemap.xml y /robots.txt.
mountSafe('/', require('./src/modules/marketing/routes'));

// /reset — endpoint de "borra todo lo cacheado" para usuarios atrapados con
// service workers o cache stale. Manda Clear-Site-Data header que el browser
// honra borrando cache+cookies+storage+SW para todo el origen, y luego
// redirige al login. Util para desbloquear bugs de cache sin tener que
// explicarle a usuarios cómo abrir DevTools.
app.get('/reset', (_req, res) => {
  res.set('Clear-Site-Data', '"cache", "storage", "executionContexts"');
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.type('html').send(`<!doctype html>
<html lang="es"><head>
<meta charset="utf-8"/>
<title>Limpiando…</title>
<meta http-equiv="refresh" content="2;url=/login">
<style>body{font:14px/1.5 system-ui,sans-serif;max-width:480px;margin:80px auto;padding:0 20px;color:#0f172a;text-align:center}h1{font-size:18px;color:#dc2626}p{color:#64748b}</style>
</head><body>
<h1>🧹 Limpiando caché del navegador…</h1>
<p>Esto borra cookies, cache y service workers de Wapi101.<br>Te redirige al login en 2 segundos.</p>
<script>
(async () => {
  try { if ('caches' in window) { const k = await caches.keys(); await Promise.all(k.map(x => caches.delete(x))); } } catch(_) {}
  try { if ('serviceWorker' in navigator) { const r = await navigator.serviceWorker.getRegistrations(); await Promise.all(r.map(x => x.unregister())); } } catch(_) {}
  try { localStorage.clear(); sessionStorage.clear(); } catch(_) {}
  setTimeout(() => location.replace('/login'), 1500);
})();
</script>
</body></html>`);
});

// Estáticos — HTML/CSS/JS sin caché agresivo (always revalidate via ETag).
// Imágenes/fonts mantienen el comportamiento default de express.static.
// Esto evita que Safari/Cloudflare retengan versiones viejas tras un deploy:
// el browser pregunta cada vez "¿sigue siendo válido?" y el server devuelve
// 304 si no cambió, 200 con el archivo nuevo si sí.
// IMPORTANTE: index:false para que express.static NO sirva index.html en /
// (la ruta '/' ya la maneja el handler de landing arriba).
app.use(express.static(path.join(__dirname, 'public'), {
  index: false,
  setHeaders: (res, filePath) => {
    if (/\.(html|css|js|json|map)$/i.test(filePath)) {
      // no-store: nunca guardar — fuerza re-download en cada visit. Es la
      // única forma de garantizar que un deploy se vea inmediato sin pelear
      // con browsers que ignoran no-cache+ETag (Safari, mobile webviews).
      // Como app.js es ~600KB minified pasa por gzip de Cloudflare a ~120KB,
      // un re-download por sesión es aceptable.
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
    }
  },
}));

// POST /api/mail/compose — enviar nuevo correo (email manual o Gmail OAuth)
app.post('/api/mail/compose', async (req, res) => {
  const { to, subject, body, integrationId } = req.body || {};
  if (!to || !body) return res.status(400).json({ error: 'Faltan campos' });
  try {
    const { decryptJson } = require('./src/security/crypto');
    const nodemailer = require('nodemailer');
    const row = db.prepare("SELECT * FROM integrations WHERE id = ? AND tenant_id = ? AND provider IN ('email','gmail','outlook')")
      .get(integrationId, req.tenantId);
    if (!row) return res.status(404).json({ error: 'Integración no encontrada' });
    const creds = decryptJson(row.credentials_enc);
    let transporter;
    if (creds.refreshToken) {
      if (row.provider === 'outlook') {
        const outlookProv = require('./src/modules/integrations/providers/outlook');
        const accessToken = await outlookProv.refreshMicrosoftToken(creds.refreshToken);
        transporter = nodemailer.createTransport({
          host: 'smtp.office365.com', port: 587, secure: false,
          auth: { type: 'OAuth2', user: creds.email, accessToken },
        });
      } else {
        const gmailProv = require('./src/modules/integrations/providers/gmail');
        const accessToken = await gmailProv.refreshGoogleToken(creds.refreshToken);
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { type: 'OAuth2', user: creds.email, accessToken },
        });
      }
    } else {
      const port = Number(creds.smtpPort) || 587;
      transporter = nodemailer.createTransport({
        host: creds.smtpHost, port, secure: port === 465,
        auth: { user: creds.username, pass: creds.password },
      });
    }
    const fromEmail = creds.email || creds.fromEmail || creds.username;
    const fromName  = creds.fromName || creds.name || 'Wapi101';
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to, subject: subject || '(Sin asunto)', text: body,
    });
    const convoSvc = require('./src/modules/conversations/service');
    const provider = row.provider;
    const convo = convoSvc.findOrCreate(db, req.tenantId, {
      provider, externalId: to,
      integrationId, contactPhone: null, contactName: to,
    });
    convoSvc.addMessage(db, req.tenantId, convo.id, {
      direction: 'outgoing', provider,
      body: `📧 ${subject}\n\n${body}`, status: 'sent',
    });
    res.json({ ok: true, convoId: convo.id });
  } catch(e) {
    console.error('[mail/compose]', e.message);
    res.status(500).json({ error: e.message });
  }
});


app.listen(config.port, config.host, () => {
  console.log(`Wapi101 App → http://${config.host}:${config.port}  (env: ${config.env})`);
  console.log(`DB          → ${config.dbPath}`);
  console.log(`AI provider → ${config.ai.provider}`);
  // Iniciar poller que cada 60s resume waits expirados (rama on_timeout)
  try { require('./src/modules/bot/engine').startWaitTimeoutPoller(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar wait timeout poller:', err.message);
  }
  // Iniciar poller que cada 60s busca conversaciones sin respuesta y dispara
  // bots con trigger_type='no_response'.
  try { require('./src/modules/bot/engine').startNoResponsePoller(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar no-response poller:', err.message);
  }
  // Iniciar poller que cada 60s evalúa los disparadores programados
  // (scheduled_one_time / scheduled_daily / scheduled_field).
  try { require('./src/modules/bot/engine').startScheduledPoller(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar scheduled poller:', err.message);
  }
  // Iniciar poller IMAP para integraciones de email
  try { require('./src/modules/email/poller').start(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar email poller:', err.message);
  }
  // Iniciar poller de comentarios TikTok
  try { require('./src/modules/tiktok/poller').start(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar tiktok poller:', err.message);
  }
  // Iniciar poller de recordatorios de citas
  try { require('./src/modules/bot/reminders').startAppointmentReminderPoller(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar appointment reminder poller:', err.message);
  }
  // Iniciar poller de reminder_timer jobs (step nuevo)
  try { require('./src/modules/bot/engine').startReminderJobPoller(db); } catch (err) {
    console.warn('[boot] no se pudo iniciar reminder job poller:', err.message);
  }
});

module.exports = { app, config, db };
