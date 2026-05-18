// Helper para subir un archivo a Cloudflare R2 (S3-compatible).
//
// Activación: si existe /root/.wapi101/r2.env con las 4 variables
//   CF_R2_ACCOUNT_ID, CF_R2_ACCESS_KEY, CF_R2_SECRET_KEY, CF_R2_BUCKET
// La función uploadToR2 lee ese archivo y sube el .gpg al bucket.
// Si el archivo .env no existe, retorna { skipped: true } sin error.
//
// Usa AWS Signature V4 con openssl + curl (sin dependencia npm de AWS SDK).
//
// Estructura en R2: tenant-backups/tenant-{id}/<filename>.gpg

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const { spawnSync } = require('child_process');

const R2_ENV_FILE = process.env.WAPI101_R2_ENV || '/root/.wapi101/r2.env';

function _readR2Env() {
  if (!fs.existsSync(R2_ENV_FILE)) return null;
  const txt = fs.readFileSync(R2_ENV_FILE, 'utf8');
  const env = {};
  for (const line of txt.split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2];
  }
  const required = ['CF_R2_ACCOUNT_ID', 'CF_R2_ACCESS_KEY', 'CF_R2_SECRET_KEY', 'CF_R2_BUCKET'];
  for (const k of required) if (!env[k]) return null;
  return env;
}

function _hmacSha256(keyBufOrStr, data) {
  return crypto.createHmac('sha256', keyBufOrStr).update(data).digest();
}

/**
 * Sube un archivo a R2 vía AWS SigV4 + curl.
 * @param {string} filePath  Ruta local del archivo a subir
 * @param {string} objectKey Key en el bucket (ej: "tenant-backups/tenant-1/foo.gpg")
 * @returns {{ok:boolean, skipped?:boolean, status?:number, error?:string}}
 */
async function uploadToR2(filePath, objectKey) {
  const env = _readR2Env();
  if (!env) return { ok: false, skipped: true, reason: 'r2_not_configured' };
  if (!fs.existsSync(filePath)) return { ok: false, error: 'file_not_found' };

  const region = 'auto';
  const service = 's3';
  const host = `${env.CF_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
  const endpoint = `https://${host}`;

  // Hash SHA256 del contenido del archivo (para X-Amz-Content-Sha256)
  const fileBuf = fs.readFileSync(filePath);
  const shaHex = crypto.createHash('sha256').update(fileBuf).digest('hex');

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, ''); // YYYYMMDDTHHMMSSZ
  const dateStamp = amzDate.slice(0, 8);

  const canonicalUri = `/${env.CF_R2_BUCKET}/${objectKey}`;
  const canonicalQuery = '';
  const canonicalHeaders =
    `host:${host}\n` +
    `x-amz-content-sha256:${shaHex}\n` +
    `x-amz-date:${amzDate}\n`;
  const signedHeaders = 'host;x-amz-content-sha256;x-amz-date';
  const canonicalRequest = [
    'PUT', canonicalUri, canonicalQuery, canonicalHeaders, signedHeaders, shaHex,
  ].join('\n');
  const crHash = crypto.createHash('sha256').update(canonicalRequest).digest('hex');

  const scope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = ['AWS4-HMAC-SHA256', amzDate, scope, crHash].join('\n');

  const kDate    = _hmacSha256('AWS4' + env.CF_R2_SECRET_KEY, dateStamp);
  const kRegion  = _hmacSha256(kDate, region);
  const kService = _hmacSha256(kRegion, service);
  const kSigning = _hmacSha256(kService, 'aws4_request');
  const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');

  const authorization =
    `AWS4-HMAC-SHA256 Credential=${env.CF_R2_ACCESS_KEY}/${scope}, ` +
    `SignedHeaders=${signedHeaders}, Signature=${signature}`;

  // Ejecutamos PUT con curl
  const cp = spawnSync('curl', [
    '-sS', '-w', '%{http_code}',
    '-o', '/dev/null',
    '-X', 'PUT', `${endpoint}/${env.CF_R2_BUCKET}/${objectKey}`,
    '-H', `Host: ${host}`,
    '-H', `X-Amz-Date: ${amzDate}`,
    '-H', `X-Amz-Content-Sha256: ${shaHex}`,
    '-H', `Authorization: ${authorization}`,
    '--data-binary', `@${filePath}`,
    '--max-time', '120',
  ], { stdio: 'pipe' });

  if (cp.error) return { ok: false, error: `curl error: ${cp.error.message}` };
  const httpCode = parseInt(cp.stdout?.toString().trim() || '0', 10);
  if (httpCode >= 200 && httpCode < 300) {
    return { ok: true, status: httpCode };
  }
  return { ok: false, status: httpCode, error: cp.stderr?.toString()?.slice(0, 300) || `HTTP ${httpCode}` };
}

function isR2Configured() {
  return _readR2Env() !== null;
}

module.exports = { uploadToR2, isR2Configured };
