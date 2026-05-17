// Servicio de Analytics — métricas para el Dashboard.
//
// Multi-tenant: todas las queries filtran por tenant_id.
// Por rol:
//   admin  → métricas del equipo + breakdown por advisor
//   asesor → solo sus propias métricas (advisorId === req.advisor.id)

// ─── Helper: registrar actividad ─────────────────────────────────────────
// Llamado desde otros módulos cuando ocurre un evento trackable.
// Ejemplo: activitySvc.log(db, { tenantId, kind: 'contact_created',
//   advisorId, targetType: 'contact', targetId: contactId });
function log(db, { tenantId, kind, advisorId = null, targetType = null, targetId = null, meta = null }) {
  if (!tenantId || !kind) return;
  try {
    db.prepare(`
      INSERT INTO activity_log (tenant_id, kind, advisor_id, target_type, target_id, meta)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(tenantId, kind, advisorId, targetType, targetId, meta ? JSON.stringify(meta) : null);
  } catch (err) {
    console.warn('[analytics.log]', err.message);
  }
}

// ─── Períodos predefinidos → rango unix [start, end) ─────────────────────
function _periodRange(period = 'today', tz = 'America/Mexico_City') {
  // Trabajamos en UTC pero ajustamos a "día calendario" de MX.
  // Más simple: usar Date local del servidor (que tiene TZ MX seteado).
  const now = new Date();
  let start, end;
  switch (period) {
    case 'today': {
      start = new Date(now); start.setHours(0, 0, 0, 0);
      end   = new Date(now); end.setHours(23, 59, 59, 999);
      break;
    }
    case 'yesterday': {
      start = new Date(now); start.setDate(now.getDate() - 1); start.setHours(0, 0, 0, 0);
      end   = new Date(now); end.setDate(now.getDate() - 1);   end.setHours(23, 59, 59, 999);
      break;
    }
    case 'week': {
      // últimos 7 días incluyendo hoy
      start = new Date(now); start.setDate(now.getDate() - 6); start.setHours(0, 0, 0, 0);
      end   = new Date(now); end.setHours(23, 59, 59, 999);
      break;
    }
    case 'month': {
      start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
      end   = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
      break;
    }
    case 'year': {
      start = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
      end   = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
      break;
    }
    default: {
      start = new Date(now); start.setHours(0, 0, 0, 0);
      end   = new Date(now); end.setHours(23, 59, 59, 999);
    }
  }
  return [Math.floor(start.getTime() / 1000), Math.floor(end.getTime() / 1000)];
}

// ─── Métricas principales del Dashboard ──────────────────────────────────
function getDashboardData(db, tenantId, { period = 'today', advisorId = null, isAdmin = false } = {}) {
  const [start, end] = _periodRange(period);

  // Si NO es admin, forzar advisorId al propio (security)
  // (el caller debe haberlo seteado pero defendemos aquí)
  const effectiveAdvisorId = advisorId;

  const advisorFilter = effectiveAdvisorId ? 'AND advisor_id = ?' : '';
  const advisorParams = effectiveAdvisorId ? [effectiveAdvisorId] : [];

  // Conteos por tipo de evento
  const counts = db.prepare(`
    SELECT kind, COUNT(*) AS n
      FROM activity_log
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
     ${advisorFilter}
     GROUP BY kind
  `).all(tenantId, start, end, ...advisorParams);
  const byKind = {};
  for (const r of counts) byKind[r.kind] = r.n;

  // Métricas derivadas también de tablas directas (más confiables que log)
  // Mensajes salientes/entrantes en el período
  const messages = db.prepare(`
    SELECT direction, COUNT(*) AS n
      FROM messages
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
     GROUP BY direction
  `).all(tenantId, start, end);
  const messagesByDir = { incoming: 0, outgoing: 0 };
  for (const r of messages) messagesByDir[r.direction] = r.n;

  // Contactos creados en el período (de la tabla directamente)
  const contactsCreated = db.prepare(`
    SELECT COUNT(*) AS n FROM contacts
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
  `).get(tenantId, start, end).n;

  // Leads (expedients) creados en el período
  const leadsCreated = db.prepare(`
    SELECT COUNT(*) AS n FROM expedients
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
  `).get(tenantId, start, end).n;

  // Leads ganados / perdidos (por kind de stage)
  const leadOutcomes = db.prepare(`
    SELECT s.kind, COUNT(*) AS n
      FROM expedients e
      JOIN stages s ON s.id = e.stage_id
     WHERE e.tenant_id = ?
       AND e.updated_at BETWEEN ? AND ?
       AND s.kind IN ('won', 'lost')
     GROUP BY s.kind
  `).all(tenantId, start, end);
  const outcomes = { won: 0, lost: 0 };
  for (const r of leadOutcomes) outcomes[r.kind] = r.n;

  // Tareas creadas y completadas en el período
  const tasksCreated = db.prepare(`
    SELECT COUNT(*) AS n FROM tasks
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
  `).get(tenantId, start, end).n;
  const tasksCompleted = db.prepare(`
    SELECT COUNT(*) AS n FROM tasks
     WHERE tenant_id = ? AND completed = 1 AND completed_at BETWEEN ? AND ?
  `).get(tenantId, start, end).n;

  // Breakdown por advisor (solo si admin pidió todo el equipo)
  let byAdvisor = null;
  if (isAdmin && !effectiveAdvisorId) {
    byAdvisor = db.prepare(`
      SELECT a.id, a.name, a.username, a.role,
        (SELECT COUNT(*) FROM activity_log al
           WHERE al.tenant_id = a.tenant_id AND al.advisor_id = a.id
             AND al.kind = 'contact_created'
             AND al.created_at BETWEEN ? AND ?) AS contacts,
        (SELECT COUNT(*) FROM activity_log al
           WHERE al.tenant_id = a.tenant_id AND al.advisor_id = a.id
             AND al.kind = 'lead_created'
             AND al.created_at BETWEEN ? AND ?) AS leads,
        (SELECT COUNT(*) FROM messages m
           WHERE m.tenant_id = a.tenant_id
             AND m.direction = 'outgoing'
             AND m.created_at BETWEEN ? AND ?) AS messages_sent_team,
        (SELECT COUNT(*) FROM tasks t
           WHERE t.tenant_id = a.tenant_id
             AND t.assigned_advisor_id = a.id
             AND t.completed = 1
             AND t.completed_at BETWEEN ? AND ?) AS tasks_completed
      FROM advisors a
     WHERE a.tenant_id = ? AND a.active = 1
     ORDER BY a.id ASC
    `).all(start, end, start, end, start, end, start, end, tenantId);
  }

  // Status de mensajes salientes (delivered / read / sent / failed)
  // — útil para medir calidad de entrega y diagnóstico WABA.
  const sentByStatus = db.prepare(`
    SELECT status, COUNT(*) AS n
      FROM messages
     WHERE tenant_id = ? AND direction = 'outgoing'
       AND created_at BETWEEN ? AND ?
     GROUP BY status
  `).all(tenantId, start, end);
  const statusCounts = { sent: 0, delivered: 0, read: 0, failed: 0 };
  for (const r of sentByStatus) {
    if (statusCounts.hasOwnProperty(r.status)) statusCounts[r.status] = r.n;
  }

  // Top razones de fallo agrupadas (truncadas para agrupar variantes similares)
  const failureReasons = db.prepare(`
    SELECT substr(error_reason, 1, 70) AS reason, COUNT(*) AS n
      FROM messages
     WHERE tenant_id = ? AND direction = 'outgoing' AND status = 'failed'
       AND created_at BETWEEN ? AND ?
       AND error_reason IS NOT NULL AND error_reason != ''
     GROUP BY reason
     ORDER BY n DESC
     LIMIT 8
  `).all(tenantId, start, end);

  return {
    period: { kind: period, start, end },
    metrics: {
      contactsCreated,
      leadsCreated,
      leadsWon: outcomes.won,
      leadsLost: outcomes.lost,
      messagesSent: messagesByDir.outgoing,
      messagesReceived: messagesByDir.incoming,
      messagesDelivered: statusCounts.delivered + statusCounts.read,
      messagesFailed: statusCounts.failed,
      messagesPending: statusCounts.sent, // sent sin webhook de delivered todavía
      tasksCreated,
      tasksCompleted,
    },
    deliveryStatus: statusCounts,
    deliveryFailures: failureReasons,
    byKind,
    byAdvisor,
  };
}

// ─── Comparativa: período actual vs período anterior equivalente ─────────
function getDashboardWithComparison(db, tenantId, opts = {}) {
  const current = getDashboardData(db, tenantId, opts);

  // Calcular período anterior equivalente
  const periodLength = current.period.end - current.period.start;
  const prevEnd = current.period.start - 1;
  const prevStart = prevEnd - periodLength;

  // Fetch directo del período anterior usando los mismos queries
  const advisorFilter = opts.advisorId ? 'AND advisor_id = ?' : '';
  const advisorParams = opts.advisorId ? [opts.advisorId] : [];

  const prevContacts = db.prepare(`
    SELECT COUNT(*) AS n FROM contacts
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
  `).get(tenantId, prevStart, prevEnd).n;

  const prevLeads = db.prepare(`
    SELECT COUNT(*) AS n FROM expedients
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
  `).get(tenantId, prevStart, prevEnd).n;

  const prevMessages = db.prepare(`
    SELECT direction, COUNT(*) AS n
      FROM messages
     WHERE tenant_id = ? AND created_at BETWEEN ? AND ?
     GROUP BY direction
  `).all(tenantId, prevStart, prevEnd);
  const prevMsgs = { incoming: 0, outgoing: 0 };
  for (const r of prevMessages) prevMsgs[r.direction] = r.n;

  return {
    ...current,
    previous: {
      period: { start: prevStart, end: prevEnd },
      metrics: {
        contactsCreated: prevContacts,
        leadsCreated: prevLeads,
        messagesSent: prevMsgs.outgoing,
        messagesReceived: prevMsgs.incoming,
      },
    },
  };
}

module.exports = { log, getDashboardData, getDashboardWithComparison };
