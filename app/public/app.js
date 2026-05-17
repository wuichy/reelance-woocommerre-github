// ═══════ Helpers ═══════
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ═══════ i18n — internacionalización ═══════
// Diccionario de traducciones. Solo cubre los strings más visibles del UI:
// nav, ajustes, configuración, botones principales y toasts comunes.
// El resto del UI sigue en español hasta que se traduzca progresivamente.
const I18N_TRANSLATIONS = {
  'es-MX': {
    // Nav sidebar
    'nav.inicio': 'Analíticas',
    'nav.chats': 'Chats',
    'nav.pipelines': 'Pipelines',
    'nav.expedientes': 'Leads',
    'nav.contactos': 'Contactos',
    'nav.plantillas': 'Plantillas',
    'nav.integraciones': 'Integraciones',
    'nav.bot': 'Bot',
    'nav.ajustes': 'Configuración',
    'nav.collapse': 'Colapsar menú',
    'nav.expand': 'Expandir menú',
    // Ajustes — tabs
    'settings.tab.usuarios': 'Asesores',
    'settings.tab.ia': 'IA',
    'settings.tab.notificaciones': 'Notificaciones',
    'settings.tab.aplicaciones': 'Apps',
    'settings.tab.papelera': 'Papelera',
    'settings.tab.configuraciones': 'Ajustes',
    'settings.tab.reportes': 'Reportes',
    'settings.tab.tokens': 'Tokens de máquina',
    // Configuraciones
    'config.title': 'Configuraciones',
    'config.subtitle': 'Preferencias generales de la aplicación.',
    'config.lang.title': 'Idioma',
    'config.lang.desc': 'Idioma de la interfaz. Los cambios se aplican al instante. Algunas partes del UI pueden seguir en español hasta que estén traducidas.',
    'config.alarms.section': 'Pipelines',
    'config.alarms.title': 'Mostrar alarmas de leads estancados',
    'config.alarms.desc': 'Activa el botón rojo de alarma al pie de cada columna del tablero. Apaga este switch para ocultar tanto el botón como los rojos sin borrar la configuración guardada en cada etapa.',
    'config.appointments.section': 'Citas',
    'config.appointments.title': 'Habilitar módulo de Citas',
    'config.appointments.desc': 'Activa la sección de Citas en el menú y los nodos del bot para agendar y enviar recordatorios. Apágalo si todavía no usas citas para ocultar la UI.',
    // Botones comunes
    'btn.save': 'Guardar',
    'btn.cancel': 'Cancelar',
    'btn.delete': 'Eliminar',
    'btn.edit': 'Editar',
    'btn.create': 'Crear',
    'btn.close': 'Cerrar',
    'btn.send': 'Enviar',
    'btn.confirm': 'Confirmar',
    'btn.back': 'Atrás',
    'btn.next': 'Siguiente',
    'btn.add': 'Agregar',
    'btn.search': 'Buscar',
    'btn.import': 'Importar',
    'btn.export': 'Exportar',
    'btn.refresh': 'Actualizar',
    'btn.new': 'Nuevo',
    'btn.update': 'Actualizar cambios',
    // Acciones del header de chat
    'chat.placeholder': 'Escribe un mensaje…',
    'chat.placeholder.closed': 'Ventana 24h cerrada — solo plantillas aprobadas',
    'chat.window.closed.title': 'Ventana de 24h cerrada',
    'chat.window.closed.desc': 'Han pasado más de 24 horas desde el último mensaje del lead. Solo puedes enviar plantillas aprobadas por Meta.',
    'chat.window.closed.send': '📋 Enviar plantilla',
    'chat.search.placeholder': 'Buscar usuario, teléfono, mensaje...',
    'chat.attach.image': 'Imagen',
    'chat.attach.video': 'Video',
    'chat.attach.audio': 'Audio',
    'chat.attach.recordAudio': 'Grabar audio',
    'chat.attach.document': 'Documento',
    // Login
    'login.title': 'Iniciar sesión',
    'login.username': 'Usuario',
    'login.password': 'Contraseña',
    'login.submit': 'Entrar',
    // Toasts / mensajes comunes
    'toast.saved': 'Guardado',
    'toast.deleted': 'Eliminado',
    'toast.created': 'Creado',
    'toast.updated': 'Actualizado',
    'toast.error': 'Error',
    'toast.copied': 'Copiado al portapapeles',
    'toast.window.closed': '⏰ Ventana 24h cerrada — solo puedes enviar plantillas aprobadas',
    // Calendario / Tareas — topbar
    'cal.view.list': 'Lista',
    'cal.view.month': 'Mes',
    'cal.new.task': '+ Nueva tarea',
    'cal.search.placeholder': 'Buscar tareas…',
    // Apps tabs
    'apps.tab.installed': 'Instaladas',
    'apps.tab.available': 'Disponibles',
    'apps.empty.title': 'Sin integraciones instaladas',
    'apps.empty.desc': 'Aún no tienes ninguna integración activa. Explora las disponibles en la pestaña Disponibles.',
    'apps.market.title': 'Marketplace próximamente',
    'apps.market.desc': 'Estamos preparando integraciones con Zapier, Google Sheets, HubSpot y más.',
    'apps.market.cta': '¿Necesitas una integración específica? Escríbenos a',
    // Tareas — modal
    'task.new': 'Nueva tarea',
    'task.edit': 'Editar tarea',
    'task.field.title': 'Título',
    'task.field.title.ph': 'Ej. Llamar a María a las 3pm',
    'task.field.desc': 'Descripción',
    'task.field.optional': '(opcional)',
    'task.field.due': 'Fecha y hora',
    'task.field.duration': 'Duración',
    'task.field.assign': 'Asignar a',
    'task.field.assign.none': '— Ninguno (sin asignar) —',
    'task.field.lead': 'Lead vinculado',
    'task.duration.none': 'Sin duración',
    'task.duration.15': '15 minutos',
    'task.duration.30': '30 minutos',
    'task.duration.45': '45 minutos',
    'task.duration.60': '1 hora',
    'task.duration.90': '1 hora 30 min',
    'task.duration.120': '2 horas',
    'task.duration.180': '3 horas',
    'task.duration.480': 'Día completo (8 h)',
    // OAuth
    // Negocio
    'settings.tab.negocio': 'Negocio',
    'settings.tab.suscripcion': 'Suscripción',
    'biz.profile.title': 'Perfil del negocio',
    'biz.field.name': 'Nombre del negocio',
    'biz.field.slug': 'URL del CRM (slug)',
    'biz.field.website': 'Sitio web',
    'biz.field.phone': 'Teléfono',
    'biz.field.address': 'Domicilio',
    'biz.profile.save': 'Guardar perfil del negocio',
    'biz.hours.title': 'Horario del negocio',
    'biz.hours.save': 'Guardar horario',
    'biz.advisor.hours.title': 'Horarios por asesor',
    'biz.advisor.hours.save': 'Guardar horario del asesor',
    // Suscripción
    'billing.title': 'Suscripción',
    'billing.monthly': 'Mensual',
    'billing.semester': 'Semestral',
    'billing.semester.save': '1 mes gratis',
    'billing.annual': 'Anual',
    'billing.annual.save': '3 meses gratis',
    'billing.loading': 'Cargando planes…',
    'billing.manage.btn': 'Administrar suscripción (cambiar tarjeta, ver facturas, cancelar)',
    'oauth.connect.facebook': 'Conectar con Facebook',
    'oauth.connect.instagram': 'Conectar con Instagram',
    'oauth.connect.tiktok': 'Conectar con TikTok',
    'oauth.connect.more': '+ Conectar otra cuenta',
    'oauth.connected.ok': 'Cuenta conectada correctamente',
    // Billing — plan gratuito
    'billing.free.active.title': 'Plan Gratis activo',
    'billing.free.active.desc': '1 usuario, 500 contactos. Actualiza cuando quieras para crecer sin límites.',
    'billing.plan.try': 'Probar {n} gratis 14 días',
    'billing.plan.current': 'Plan actual',
    'billing.plan.base': 'Plan base incluido',
    // Signup
    'signup.free.title': 'Crea tu cuenta gratis',
    'signup.free.subtitle': 'Plan Gratis para siempre · Sin tarjeta de crédito.',
    'signup.free.banner.title': '🎁 Plan Gratis para siempre',
    'signup.free.banner.desc': '1 usuario, 500 contactos, todas las funciones. Sin tarjeta.',

    // Nav extras
    'nav.calendario': 'Calendario',
    'nav.aplicaciones': 'Aplicaciones',
    'nav.mail': 'Mail',
    'nav.cache.title': 'Forzar actualización (limpia caché y recarga)',
    'nav.logout': 'Cerrar sesión',
    // Pipeline controls
    'pl.view.kanban': 'Tablero',
    'pl.view.list': 'Lista',
    'pl.view.list.title': 'Lista con selección múltiple',
    'pl.manage': 'Gestionar',
    'pl.new': '+ Pipeline',
    'pl.create': '+ Crear pipeline',
    'pl.delete': 'Eliminar pipeline',
    'pl.manage.title': 'Gestionar pipeline',
    'pl.field.name': 'Nombre del pipeline',
    'pl.field.color': 'Color',
    'pl.field.icon': 'Icono',
    'pl.stages': 'Etapas',
    'pl.add_stage': '+ Etapa',
    'pl.empty.desc': 'No tienes pipelines aún. Crea el primero para organizar tus contactos.',
    // Stage kinds
    'stage.kind.in_progress': 'En progreso',
    'stage.kind.won': 'Ganado',
    'stage.kind.lost': 'Perdido',
    // Sort options
    'sort.newest': 'Más reciente',
    'sort.last_activity': 'Última actividad',
    'sort.name_az': 'Nombre A–Z',
    'sort.name_za': 'Nombre Z–A',
    // Chat filters
    'chat.filter.all': 'Todos',
    'chat.filter.unread': 'No leídos',
    'chat.filter.pinned': 'Fijados',
    'chat.push.cta': 'Activar notificaciones',
    'chat.quick_reply': '+ Respuesta rápida',
    'chat.show_hidden': 'Mostrar chats ocultos',
    'chat.info.title': 'Información',
    // Attach preview
    'attach.preview.title': 'Vista previa',
    'attach.caption': 'Mensaje (opcional)',
    // Bot stats
    'bot.stats.title': 'Estadísticas del bot',
    'bot.stats.tab.summary': 'Resumen',
    'bot.stats.tab.history': 'Historial',
    'bot.stats.chart.label': 'Ejecuciones (últimos 14 días)',
    // Alarm
    'alarm.title': 'Alarmas de etapa',
    'alarm.add': '+ Agregar alarma',
    // Dashboard
    'dash.title': 'Analíticas',
    'dash.advisor.label': 'Asesor:',
    'dash.advisor.all': 'Todo el equipo',
    'dash.compare': 'Comparar con período anterior',
    'dash.card.received': 'Mensajes recibidos',
    'dash.card.sent': 'Mensajes enviados',
    'dash.card.convos': 'Conversaciones',
    'dash.card.contacts': 'Contactos',
    'dash.card.leads': 'Leads',
    'dash.card.total': 'en total',
    'dash.chart.title': 'Actividad últimos 7 días',
    'dash.legend.received': 'Recibidos',
    'dash.legend.sent': 'Enviados',
    'dash.team.title': 'Productividad del equipo',
    'dash.team.sub': 'Métricas por asesor en el período seleccionado.',
    'dash.th.advisor': 'Asesor',
    'dash.th.contacts': 'Contactos',
    'dash.th.leads': 'Leads',
    'dash.th.messages': 'Mensajes (equipo)',
    'dash.th.tasks': 'Tareas hechas',
    // Period labels
    'period.today': 'Hoy',
    'period.yesterday': 'Ayer',
    'period.week': 'Esta semana',
    'period.month': 'Este mes',
    'period.year': 'Este año',
    // Expedientes
    'exp.th.name': 'Nombre del lead',
    'exp.th.contact': 'Contacto',
    'exp.th.email': 'Email',
    'exp.th.pipeline_stage': 'Pipeline › Etapa',
    'exp.th.advisor': 'Asesor',
    'exp.th.tags': 'Etiquetas',
    'exp.th.created': 'Creado',
    'exp.empty': 'No hay leads aún',
    'exp.create_first': '+ Crear primer lead',
    'exp.new': '+ Nuevo lead',
    'exp.delete': 'Eliminar lead',
    'exp.no_convos': 'Sin conversaciones aún.',
    'exp.modal.new_title': 'Nuevo lead',
    'exp.field.name': 'Nombre del lead',
    'exp.field.contact': 'Contacto',
    'exp.field.pipeline': 'Pipeline',
    'exp.field.stage': 'Etapa',
    'exp.field.tags': 'Etiquetas',
    'exp.select_pipeline': 'Selecciona pipeline...',
    'exp.select_stage': 'Selecciona etapa...',
    'exp.create_contact': '+ Crear contacto',
    // Quick contact
    'qc.title': 'Nuevo contacto',
    'qc.save': 'Crear y seleccionar',
    // Custom fields
    'fields.title': 'Campos personalizados',
    'fields.subtitle': 'Se muestran en todos los leads',
    'fields.empty': 'No hay campos personalizados aún',
    'fields.add': '+ Agregar campo',
    'fields.add_field_btn': 'Agregar campo',
    'fields.field.name': 'Nombre del campo',
    'fields.field.type': 'Tipo',
    'fields.field.options': 'Opciones (una por línea)',
    'field.type.text': 'Texto',
    'field.type.number': 'Número',
    'field.type.toggle': 'Interruptor',
    'field.type.select': 'Selección',
    'field.type.multi_select': 'Multi-selección',
    'field.type.date': 'Día',
    'field.type.url': 'URL',
    'field.type.long_text': 'Texto largo',
    'field.type.birthday': 'Cumpleaños',
    'field.type.datetime': 'Fecha y hora',
    // Import
    'imp.leads.title': 'Importar leads',
    'imp.contacts.title': 'Importar contactos',
    'imp.preview': 'Vista previa',
    'imp.process': 'Procesar',
    'imp.tab.paste': 'Pegar texto',
    'imp.tab.file': 'Subir archivo',
    'imp.dropzone.title': 'Click para elegir o arrastra un archivo aquí',
    'imp.dropzone.sub': 'CSV, TXT — máximo 5 MB',
    'imp.bulk_tag': 'Etiquetar todos los importados (opcional):',
    'imp.dupe_policy': 'Si un contacto ya existe (mismo teléfono o email):',
    'imp.dupe.skip': 'Omitir',
    'imp.dupe.update': 'Actualizar datos',
    'imp.dupe.create': 'Crear duplicado igual',
    // Table headers (generic)
    'th.name': 'Nombre',
    'th.lastname': 'Apellido',
    'th.phone': 'Teléfono',
    'th.email': 'Email',
    'th.tags': 'Etiquetas',
    'th.leads': 'Leads',
    'th.created': 'Creado',
    'th.status': 'Estado',
    'th.advisor': 'Asesor',
    'th.access': 'Acceso',
    'th.role': 'Rol',
    'th.permissions': 'Permisos',
    'th.ip': 'IP',
    'paginator.show': 'Mostrar',
    // Contacts
    'contact.new': '+ Nuevo contacto',
    'contact.modal.new': 'Nuevo contacto',
    'contact.save': 'Guardar contacto',
    'contact.leads_section': 'Leads',
    'contact.add_lead': '+ Agregar lead',
    'contact.delete.title': 'Eliminar contacto',
    'contact.delete.leads': 'Leads asociados',
    'contact.delete.no_leads': 'Este contacto no tiene leads.',
    'contact.delete.confirm': 'Eliminar definitivamente',
    // Templates
    'tpl.new': '+ Nueva plantilla',
    'tpl.tab.free': 'Libres',
    'tpl.empty': 'No hay plantillas todavía.',
    'tpl.modal.new': 'Nueva plantilla',
    'tpl.field.type': 'Tipo de plantilla',
    'tpl.type.wa_api': 'WhatsApp API',
    'tpl.type.free': 'Libre',
    'tpl.field.display_name': 'Nombre para mostrar',
    'tpl.field.body': 'Cuerpo del mensaje',
    'tpl.field.footer': 'Pie de página',
    'tpl.hint.footer_optional': '(opcional, máx 60 chars)',
    'tpl.field.buttons': 'Botones',
    'tpl.hint.buttons_optional': '(opcional, máx 3 — todos QUICK_REPLY o hasta 2 CTA)',
    'tpl.add_button': '+ Agregar botón',
    'tpl.field.tags': 'Etiquetas',
    'tpl.hint.tags': '(para organizar y filtrar — no se envían a Meta)',
    'tpl.save': 'Guardar plantilla',
    'tpl.send.title': 'Enviar plantilla',
    'tpl.tags.title': 'Etiquetas de plantillas',
    // Integrations
    'int.tab.connected': 'Mis integraciones',
    'int.tab.vote': 'Solicitar integración',
    'int.vote.suggest': 'Sugerir y votar',
    'int.connect': 'Conectar',
    'int.disconnect': 'Desconectar',
    'routing.title': '¿Dónde llegan los mensajes?',
    'routing.pipeline': 'Pipeline',
    'routing.stage': 'Etapa inicial',
    'routing.skip': 'Usar predeterminado',
    'wh.modal.title': 'Agregar Webhook',
    // Bot builder
    'bot.create': '+ Crear bot',
    'bot.empty.desc': 'Aún no tienes bots. Crea el primero para automatizar tus conversaciones.',
    'bot.tags.title': 'Etiquetas de bots',
    'bot.builder.labels': 'ETIQUETAS',
    'bot.builder.trigger': 'DISPARADOR',
    'bot.builder.active': 'Activo',
    'bot.add_step': 'Agregar paso',
    'bot.trigger.keyword': 'Palabra clave en mensaje',
    'bot.trigger.new_contact': 'Nuevo contacto creado',
    'bot.trigger.pipeline_stage': 'Lead entra a etapa',
    'bot.trigger.pipeline_stage_leave': 'Lead sale de etapa',
    'bot.trigger.tag_added': 'Etiqueta agregada al lead',
    'bot.trigger.assignee_changed': 'Cambio de asesor responsable',
    'bot.trigger.always': 'Cualquier mensaje entrante',
    'bot.trigger.no_response': 'Sin respuesta en X tiempo',
    'bot.trigger.message_read': 'Mensaje saliente leído',
    'bot.trigger.scheduled_one_time': 'Una sola vez (fecha + hora)',
    'bot.trigger.scheduled_daily': 'Diariamente a una hora',
    'bot.trigger.scheduled_field': 'Antes/después de un campo de fecha',
    'bot.step.message': 'Enviar mensaje',
    'bot.step.template': 'Enviar plantilla (WhatsApp API)',
    'bot.step.timer': 'Temporizador',
    'bot.step.condition': 'Condición',
    'bot.step.stage': 'Cambiar etapa',
    'bot.step.tag': 'Agregar etiqueta',
    'bot.step.assign': 'Asignar responsable',
    'bot.step.ai_reply': 'Respuesta IA',
    'bot.step.wait_response': 'Esperar respuesta del lead',
    'bot.step.stop_bot': 'Parar bot',
    'bot.step.stop_and_start': 'Parar este e iniciar otro bot',
    'bot.step.book_appointment': 'Agendar Cita',
    'bot.step.cancel_appointment': 'Cancelar Cita',
    'bot.step.reschedule_appointment': 'Reagendar Cita',
    // Advisors
    'advisor.new': '+ Nuevo asesor',
    'advisor.modal.new': 'Nuevo asesor',
    'advisor.section.access': 'Datos de acceso',
    'advisor.section.role': 'Rol',
    'advisor.section.perms': 'Permisos del asesor',
    'advisor.delete': 'Eliminar asesor',
    'advisor.empty': 'No hay asesores aún.',
    'role.admin': 'Administrador',
    'role.admin.desc': 'Acceso total al sistema',
    'role.advisor': 'Asesor',
    'role.advisor.desc': 'Acceso según permisos',
    'perm.write.name': 'Escribir y editar',
    'perm.write.desc': 'Enviar mensajes, editar leads y contactos',
    'perm.delete.name': 'Eliminar registros',
    'perm.delete.desc': 'Borrar leads, contactos y conversaciones',
    'perm.reports.name': 'Ver reportes',
    'perm.reports.desc': 'Acceder al dashboard e historial de actividad',
    'perm.advisors.name': 'Gestionar asesores',
    'perm.advisors.desc': 'Crear, editar y desactivar otros asesores',
    // IA
    'ia.title': 'Inteligencia artificial',
    'ia.provider': 'Proveedor',
    'ia.knowledge': 'Fuentes de conocimiento',
    'ia.add_source': '+ Nueva fuente',
    'ia.behavior': 'Comportamiento',
    'ia.save': 'Guardar cambios',
    'ia.test': 'Probar conexión',
    // Notifications
    'notif.log.title': 'Bitácora reciente',
    // Trash
    'trash.empty_all': 'Vaciar papelera',
    'trash.filter.all': 'Todo',
    'trash.filter.contacts': 'Contactos',
    'trash.filter.leads': 'Leads',
    'trash.filter.pipelines': 'Pipelines',
    'trash.filter.stages': 'Etapas',
    'trash.filter.bots': 'Bots',
    'trash.empty': 'La papelera está vacía',
    // Config: lead value
    'config.lead_value.section': 'Valor de lead',
    'config.lead_value.title': 'Habilitar valor de lead',
    'config.lead_value.desc': 'Agrega un campo de valor monetario (MXN) a cada lead. Muestra el total por etapa en el kanban y el valor acumulado del pipeline completo.',
    // Reports
    'report.new': '+ Nuevo reporte',
    'report.filter.all': 'Todos',
    'report.filter.open': 'Abiertos',
    'report.filter.in_progress': 'En progreso',
    'report.filter.resolved': 'Resueltos',
    'report.filter.wontfix': 'No se hará',
    'report.modal.new': 'Nuevo reporte',
    'report.submit': 'Enviar reporte',
    // Machine tokens
    'mt.new': '+ Generar token',
    'mt.revoke_all': 'Revocar todos',
    'mt.show_revoked': 'Mostrar revocados',
    'mt.th.prefix': 'Prefijo',
    'mt.th.last_used': 'Último uso',
    'mt.empty': 'No hay tokens generados.',
    'mt.token.title': 'Token generado',
    'mt.new.title': 'Nuevo token',
    'mt.device_name': 'Nombre del dispositivo',
    'mt.generate': 'Generar',
    'mt.done': 'Listo',
    // Calendar
    'cal.tab.overdue': 'Vencidas',
    'cal.tab.today': 'Hoy',
    'cal.tab.upcoming': 'Próximas',
    'cal.tab.completed': 'Completadas',
    'cal.today': 'Hoy',
    'cal.foot': 'Click en un día para ver/agregar tareas. Click en una tarea para editarla.',
    // Account
    'account.personal_info': 'Información personal',
    'account.save_profile': 'Guardar cambios',
    'account.change_password': 'Cambiar contraseña',
    'account.save_password': 'Cambiar contraseña',
    // Mail
    'mail.compose': 'Redactar',
    'mail.inbox': 'Recibidos',
    'mail.sent': 'Enviados',
    'mail.all': 'Todo',
    'mail.accounts': 'Cuentas',
    'mail.new_message': 'Nuevo mensaje',
    'mail.to': 'Para',
    'mail.subject': 'Asunto',
    'mail.from': 'Desde',
    'mail.discard': 'Descartar',
    'mail.select_email': 'Selecciona un correo',
    'mail.loading_email': 'Cargando correo…',
    'mail.loading': 'Cargando...',
    'mail.no_emails': 'Sin correos',
    'mail.no_results': 'Sin resultados',
    'mail.no_subject_paren': '(Sin asunto)',
    'mail.unknown_sender': 'Desconocido',
    'mail.you': 'Tú',
    'mail.reply_to': 'Responder a {name}',
    'mail.reply_placeholder': 'Escribe tu respuesta...',
    'mail.reply_send': 'Enviar respuesta',
    'mail.all_accounts': 'Todas las cuentas',
    'mail.sent_ok': 'Correo enviado',
    'mail.send_error': 'Error al enviar: {msg}',
    'mail.compose_send': 'Enviar',
    'mail.compose_to_placeholder': 'destinatario@ejemplo.com',
    'mail.compose_subject_placeholder': 'Asunto',
    'mail.compose_body_placeholder': 'Escribe tu mensaje aquí...',
    'mail.compose_validate': 'Escribe el destinatario y el mensaje',
    'mail.error_prefix': 'Error: {msg}',
    // Bot — template picker hint en modo bot-message
    'bot.tpl.basic_hint': '💡 Solo se muestran plantillas <strong>básicas</strong>. El bot las enviará como TEXTO (solo funciona dentro de la ventana de 24h). Para enviar una plantilla aprobada por WhatsApp API (sirve fuera 24h), usa el step <strong>"Enviar plantilla"</strong>.',
    // Errores de entrega Meta — mapeo desde error_reason del backend
    'error.wa.131047': 'Pasaron más de 24h sin respuesta del lead — solo plantillas aprobadas pasan (mandaste texto plano).',
    // Buttons extra
    'btn.copy': 'Copiar',
    'btn.fields': 'Campos',
    // Business profile
    'biz.field.logo': 'Logo',


    // Greetings
    'greeting.morning': 'Buenos días',
    'greeting.afternoon': 'Buenas tardes',
    'greeting.evening': 'Buenas noches',
    // Connection status
    'conn.offline': 'Sin conexión con el servidor — reintentando…',
    'conn.degraded': 'Conexión inestable — verificando…',
    'conn.recovered': 'Conexión restaurada ✓',
    // Bot list table
    'bot.th.steps': 'Pasos',
    // Advisor modal edit  
    'advisor.modal.edit': 'Editar asesor',
    // Contact modal edit
    'contact.modal.edit': 'Editar contacto',

    'signup.free.btn': 'Crear cuenta gratis',

    // Bot list — filter empty states
    'bot.filter.no_match': 'No hay bots que coincidan con "{q}".',
    'bot.filter.no_errors': '🎉 Ningún bot tiene errores. Todo en orden.',
    'bot.filter.no_warns': '✨ Ningún bot tiene avisos.',
    'bot.filter.no_tag': 'Ningún bot tiene esta etiqueta.',
    // Bot list — row metadata
    'bot.row.created': 'Creado {date}',
    'bot.row.step': 'paso',
    'bot.row.steps': 'pasos',
    // Bot drag handle
    'bot.drag.title': 'Arrastra para reordenar',
    // Bot status toggle
    'bot.status.paused': 'Bot pausado',
    'bot.status.active': 'Bot activo',
    // Bot name placeholder
    'bot.name.placeholder': 'Nombre del bot',
    // Chat — no messages
    'chat.no_messages': 'No hay mensajes todavía.',
    // Integration modal
    'int.modal.edit': 'Editar {name}',
    'int.modal.connect': 'Conectar {name}',
    'int.how_to_connect': 'Cómo conectar',
    // Webhook modal edit title
    'wh.modal.edit': 'Editar Webhook',
    // Pipeline modal titles
    'pl.modal.edit': 'Editar pipeline',
    'pl.modal.new': 'Nuevo pipeline',
    // Lead modal edit title
    'exp.modal.edit_title': 'Editar lead',
    // Placeholders
    'stage.name.placeholder': 'Nombre de etapa',
    'pl.name.placeholder': 'Ej. Ventas',
    'mail.search.placeholder': 'Buscar correos...',
  },
  'en': {
    // Nav sidebar
    'nav.inicio': 'Analytics',
    'nav.chats': 'Chats',
    'nav.pipelines': 'Pipelines',
    'nav.expedientes': 'Leads',
    'nav.contactos': 'Contacts',
    'nav.plantillas': 'Templates',
    'nav.integraciones': 'Integrations',
    'nav.bot': 'Bot',
    'nav.ajustes': 'Settings',
    'nav.collapse': 'Collapse menu',
    'nav.expand': 'Expand menu',
    // Settings — tabs
    'settings.tab.usuarios': 'Agents',
    'settings.tab.ia': 'AI',
    'settings.tab.notificaciones': 'Notifications',
    'settings.tab.aplicaciones': 'Apps',
    'settings.tab.papelera': 'Trash',
    'settings.tab.configuraciones': 'Settings',
    'settings.tab.reportes': 'Reports',
    'settings.tab.tokens': 'Machine tokens',
    // Preferences
    'config.title': 'Preferences',
    'config.subtitle': 'General application preferences.',
    'config.lang.title': 'Language',
    'config.lang.desc': 'Interface language. Changes apply instantly. Some parts of the UI may still be in Spanish until they are translated.',
    'config.alarms.section': 'Pipelines',
    'config.alarms.title': 'Show stale lead alarms',
    'config.alarms.desc': 'Activates the red alarm button at the bottom of each column on the board. Turn this off to hide both the button and the red highlights without deleting the configuration saved on each stage.',
    'config.appointments.section': 'Appointments',
    'config.appointments.title': 'Enable Appointments module',
    'config.appointments.desc': 'Turn on the Appointments section in the menu and the bot nodes for scheduling and sending reminders. Keep it off until you start using appointments to hide the UI.',
    // Common buttons
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    'btn.delete': 'Delete',
    'btn.edit': 'Edit',
    'btn.create': 'Create',
    'btn.close': 'Close',
    'btn.send': 'Send',
    'btn.confirm': 'Confirm',
    'btn.back': 'Back',
    'btn.next': 'Next',
    'btn.add': 'Add',
    'btn.search': 'Search',
    'btn.import': 'Import',
    'btn.export': 'Export',
    'btn.refresh': 'Refresh',
    'btn.new': 'New',
    'btn.update': 'Update',
    // Chat header actions
    'chat.placeholder': 'Write a message…',
    'chat.placeholder.closed': '24h window closed — approved templates only',
    'chat.window.closed.title': '24h window closed',
    'chat.window.closed.desc': 'More than 24 hours have passed since the lead\'s last message. You can only send templates approved by Meta.',
    'chat.window.closed.send': '📋 Send template',
    'chat.search.placeholder': 'Search by name, phone, message...',
    'chat.attach.image': 'Image',
    'chat.attach.video': 'Video',
    'chat.attach.audio': 'Audio',
    'chat.attach.recordAudio': 'Record audio',
    'chat.attach.document': 'Document',
    // Login
    'login.title': 'Sign in',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.submit': 'Log in',
    // Toasts / common messages
    'toast.saved': 'Saved',
    'toast.deleted': 'Deleted',
    'toast.created': 'Created',
    'toast.updated': 'Updated',
    'toast.error': 'Error',
    'toast.copied': 'Copied to clipboard',
    'toast.window.closed': '⏰ 24h window closed — you can only send approved templates',
    // Calendar / Tasks — topbar
    'cal.view.list': 'List',
    'cal.view.month': 'Month',
    'cal.new.task': '+ New task',
    'cal.search.placeholder': 'Search tasks…',
    // Apps tabs
    'apps.tab.installed': 'Installed',
    'apps.tab.available': 'Available',
    'apps.empty.title': 'No installed integrations',
    'apps.empty.desc': 'You have no active integrations yet. Browse the Available tab.',
    'apps.market.title': 'Marketplace coming soon',
    'apps.market.desc': 'We\'re preparing integrations with Zapier, Google Sheets, HubSpot and more.',
    'apps.market.cta': 'Need a specific integration? Write to us at',
    // Tasks — modal
    'task.new': 'New task',
    'task.edit': 'Edit task',
    'task.field.title': 'Title',
    'task.field.title.ph': 'e.g. Call Maria at 3pm',
    'task.field.desc': 'Description',
    'task.field.optional': '(optional)',
    'task.field.due': 'Date & time',
    'task.field.duration': 'Duration',
    'task.field.assign': 'Assign to',
    'task.field.assign.none': '— None (unassigned) —',
    'task.field.lead': 'Linked lead',
    'task.duration.none': 'No duration',
    'task.duration.15': '15 minutes',
    'task.duration.30': '30 minutes',
    'task.duration.45': '45 minutes',
    'task.duration.60': '1 hour',
    'task.duration.90': '1h 30 min',
    'task.duration.120': '2 hours',
    'task.duration.180': '3 hours',
    'task.duration.480': 'Full day (8 h)',
    // OAuth
    // Business
    'settings.tab.negocio': 'Business',
    'settings.tab.suscripcion': 'Subscription',
    'biz.profile.title': 'Business Profile',
    'biz.field.name': 'Business name',
    'biz.field.slug': 'CRM URL (slug)',
    'biz.field.website': 'Website',
    'biz.field.phone': 'Phone',
    'biz.field.address': 'Address',
    'biz.profile.save': 'Save business profile',
    'biz.hours.title': 'Business hours',
    'biz.hours.save': 'Save hours',
    'biz.advisor.hours.title': 'Agent hours',
    'biz.advisor.hours.save': 'Save agent hours',
    // Subscription
    'billing.title': 'Subscription',
    'billing.monthly': 'Monthly',
    'billing.semester': 'Biannual',
    'billing.semester.save': '1 month free',
    'billing.annual': 'Annual',
    'billing.annual.save': '3 months free',
    'billing.loading': 'Loading plans…',
    'billing.manage.btn': 'Manage subscription (change card, view invoices, cancel)',
    'oauth.connect.facebook': 'Connect with Facebook',
    'oauth.connect.instagram': 'Connect with Instagram',
    'oauth.connect.tiktok': 'Connect with TikTok',
    'oauth.connect.more': '+ Connect another account',
    'oauth.connected.ok': 'Account connected',
    // Billing — free plan
    'billing.free.active.title': 'Free Plan active',
    'billing.free.active.desc': '1 user, 500 contacts. Upgrade any time to grow without limits.',
    'billing.plan.try': 'Try {n} free for 14 days',
    'billing.plan.current': 'Current plan',
    'billing.plan.base': 'Base plan included',
    // Signup
    'signup.free.title': 'Create your free account',
    'signup.free.subtitle': 'Free forever · No credit card required.',
    'signup.free.banner.title': '🎁 Free plan forever',
    'signup.free.banner.desc': '1 user, 500 contacts, all features. No credit card.',

    // Nav extras
    'nav.calendario': 'Calendar',
    'nav.aplicaciones': 'Apps',
    'nav.mail': 'Mail',
    'nav.cache.title': 'Force refresh (clears cache and reloads)',
    'nav.logout': 'Log out',
    // Pipeline controls
    'pl.view.kanban': 'Board',
    'pl.view.list': 'List',
    'pl.view.list.title': 'List with multi-select',
    'pl.manage': 'Manage',
    'pl.new': '+ Pipeline',
    'pl.create': '+ Create pipeline',
    'pl.delete': 'Delete pipeline',
    'pl.manage.title': 'Manage pipeline',
    'pl.field.name': 'Pipeline name',
    'pl.field.color': 'Color',
    'pl.field.icon': 'Icon',
    'pl.stages': 'Stages',
    'pl.add_stage': '+ Stage',
    'pl.empty.desc': 'No pipelines yet. Create the first one to organize your contacts.',
    // Stage kinds
    'stage.kind.in_progress': 'In progress',
    'stage.kind.won': 'Won',
    'stage.kind.lost': 'Lost',
    // Sort options
    'sort.newest': 'Most recent',
    'sort.last_activity': 'Last activity',
    'sort.name_az': 'Name A–Z',
    'sort.name_za': 'Name Z–A',
    // Chat filters
    'chat.filter.all': 'All',
    'chat.filter.unread': 'Unread',
    'chat.filter.pinned': 'Pinned',
    'chat.push.cta': 'Enable notifications',
    'chat.quick_reply': '+ Quick reply',
    'chat.show_hidden': 'Show hidden chats',
    'chat.info.title': 'Information',
    // Attach preview
    'attach.preview.title': 'Preview',
    'attach.caption': 'Caption (optional)',
    // Bot stats
    'bot.stats.title': 'Bot statistics',
    'bot.stats.tab.summary': 'Summary',
    'bot.stats.tab.history': 'History',
    'bot.stats.chart.label': 'Executions (last 14 days)',
    // Alarm
    'alarm.title': 'Stage alarms',
    'alarm.add': '+ Add alarm',
    // Dashboard
    'dash.title': 'Analytics',
    'dash.advisor.label': 'Agent:',
    'dash.advisor.all': 'Whole team',
    'dash.compare': 'Compare with previous period',
    'dash.card.received': 'Messages received',
    'dash.card.sent': 'Messages sent',
    'dash.card.convos': 'Conversations',
    'dash.card.contacts': 'Contacts',
    'dash.card.leads': 'Leads',
    'dash.card.total': 'total',
    'dash.chart.title': 'Activity last 7 days',
    'dash.legend.received': 'Received',
    'dash.legend.sent': 'Sent',
    'dash.team.title': 'Team productivity',
    'dash.team.sub': 'Metrics per agent in the selected period.',
    'dash.th.advisor': 'Agent',
    'dash.th.contacts': 'Contacts',
    'dash.th.leads': 'Leads',
    'dash.th.messages': 'Messages (team)',
    'dash.th.tasks': 'Tasks done',
    // Period labels
    'period.today': 'Today',
    'period.yesterday': 'Yesterday',
    'period.week': 'This week',
    'period.month': 'This month',
    'period.year': 'This year',
    // Expedientes
    'exp.th.name': 'Lead name',
    'exp.th.contact': 'Contact',
    'exp.th.email': 'Email',
    'exp.th.pipeline_stage': 'Pipeline › Stage',
    'exp.th.advisor': 'Agent',
    'exp.th.tags': 'Tags',
    'exp.th.created': 'Created',
    'exp.empty': 'No leads yet',
    'exp.create_first': '+ Create first lead',
    'exp.new': '+ New lead',
    'exp.delete': 'Delete lead',
    'exp.no_convos': 'No conversations yet.',
    'exp.modal.new_title': 'New lead',
    'exp.field.name': 'Lead name',
    'exp.field.contact': 'Contact',
    'exp.field.pipeline': 'Pipeline',
    'exp.field.stage': 'Stage',
    'exp.field.tags': 'Tags',
    'exp.select_pipeline': 'Select pipeline...',
    'exp.select_stage': 'Select stage...',
    'exp.create_contact': '+ Create contact',
    // Quick contact
    'qc.title': 'New contact',
    'qc.save': 'Create and select',
    // Custom fields
    'fields.title': 'Custom fields',
    'fields.subtitle': 'Shown on all leads',
    'fields.empty': 'No custom fields yet',
    'fields.add': '+ Add field',
    'fields.add_field_btn': 'Add field',
    'fields.field.name': 'Field name',
    'fields.field.type': 'Type',
    'fields.field.options': 'Options (one per line)',
    'field.type.text': 'Text',
    'field.type.number': 'Number',
    'field.type.toggle': 'Toggle',
    'field.type.select': 'Select',
    'field.type.multi_select': 'Multi-select',
    'field.type.date': 'Date',
    'field.type.url': 'URL',
    'field.type.long_text': 'Long text',
    'field.type.birthday': 'Birthday',
    'field.type.datetime': 'Date & time',
    // Import
    'imp.leads.title': 'Import leads',
    'imp.contacts.title': 'Import contacts',
    'imp.preview': 'Preview',
    'imp.process': 'Process',
    'imp.tab.paste': 'Paste text',
    'imp.tab.file': 'Upload file',
    'imp.dropzone.title': 'Click to choose or drag a file here',
    'imp.dropzone.sub': 'CSV, TXT — max 5 MB',
    'imp.bulk_tag': 'Tag all imported (optional):',
    'imp.dupe_policy': 'If a contact already exists (same phone or email):',
    'imp.dupe.skip': 'Skip',
    'imp.dupe.update': 'Update data',
    'imp.dupe.create': 'Create duplicate',
    // Table headers (generic)
    'th.name': 'Name',
    'th.lastname': 'Last name',
    'th.phone': 'Phone',
    'th.email': 'Email',
    'th.tags': 'Tags',
    'th.leads': 'Leads',
    'th.created': 'Created',
    'th.status': 'Status',
    'th.advisor': 'Agent',
    'th.access': 'Access',
    'th.role': 'Role',
    'th.permissions': 'Permissions',
    'th.ip': 'IP',
    'paginator.show': 'Show',
    // Contacts
    'contact.new': '+ New contact',
    'contact.modal.new': 'New contact',
    'contact.save': 'Save contact',
    'contact.leads_section': 'Leads',
    'contact.add_lead': '+ Add lead',
    'contact.delete.title': 'Delete contact',
    'contact.delete.leads': 'Associated leads',
    'contact.delete.no_leads': 'This contact has no leads.',
    'contact.delete.confirm': 'Delete permanently',
    // Templates
    'tpl.new': '+ New template',
    'tpl.tab.free': 'Free-form',
    'tpl.empty': 'No templates yet.',
    'tpl.modal.new': 'New template',
    'tpl.field.type': 'Template type',
    'tpl.type.wa_api': 'WhatsApp API',
    'tpl.type.free': 'Free',
    'tpl.field.display_name': 'Display name',
    'tpl.field.body': 'Message body',
    'tpl.field.footer': 'Footer',
    'tpl.hint.footer_optional': '(optional, max 60 chars)',
    'tpl.field.buttons': 'Buttons',
    'tpl.hint.buttons_optional': '(optional, max 3 — all QUICK_REPLY or up to 2 CTA)',
    'tpl.add_button': '+ Add button',
    'tpl.field.tags': 'Tags',
    'tpl.hint.tags': '(to organize and filter — not sent to Meta)',
    'tpl.save': 'Save template',
    'tpl.send.title': 'Send template',
    'tpl.tags.title': 'Template tags',
    // Integrations
    'int.tab.connected': 'My integrations',
    'int.tab.vote': 'Request integration',
    'int.vote.suggest': 'Suggest and vote',
    'int.connect': 'Connect',
    'int.disconnect': 'Disconnect',
    'routing.title': 'Where do messages land?',
    'routing.pipeline': 'Pipeline',
    'routing.stage': 'Initial stage',
    'routing.skip': 'Use default',
    'wh.modal.title': 'Add Webhook',
    // Bot builder
    'bot.create': '+ Create bot',
    'bot.empty.desc': 'No bots yet. Create the first one to automate your conversations.',
    'bot.tags.title': 'Bot tags',
    'bot.builder.labels': 'TAGS',
    'bot.builder.trigger': 'TRIGGER',
    'bot.builder.active': 'Active',
    'bot.add_step': 'Add step',
    'bot.trigger.keyword': 'Keyword in message',
    'bot.trigger.new_contact': 'New contact created',
    'bot.trigger.pipeline_stage': 'Lead enters stage',
    'bot.trigger.pipeline_stage_leave': 'Lead leaves stage',
    'bot.trigger.tag_added': 'Tag added to lead',
    'bot.trigger.assignee_changed': 'Lead assignee changed',
    'bot.trigger.always': 'Any incoming message',
    'bot.trigger.no_response': 'No response in X time',
    'bot.trigger.message_read': 'Outgoing message read',
    'bot.trigger.scheduled_one_time': 'One-time (date + time)',
    'bot.trigger.scheduled_daily': 'Daily at a time',
    'bot.trigger.scheduled_field': 'Before/after a date field',
    'bot.step.message': 'Send message',
    'bot.step.template': 'Send template (WhatsApp API)',
    'bot.step.timer': 'Timer',
    'bot.step.condition': 'Condition',
    'bot.step.stage': 'Change stage',
    'bot.step.tag': 'Add tag',
    'bot.step.assign': 'Assign agent',
    'bot.step.ai_reply': 'AI Reply',
    'bot.step.wait_response': 'Wait for lead reply',
    'bot.step.stop_bot': 'Stop bot',
    'bot.step.stop_and_start': 'Stop this bot and start another',
    'bot.step.book_appointment': 'Book appointment',
    'bot.step.cancel_appointment': 'Cancel appointment',
    'bot.step.reschedule_appointment': 'Reschedule appointment',
    // Advisors
    'advisor.new': '+ New agent',
    'advisor.modal.new': 'New agent',
    'advisor.section.access': 'Access credentials',
    'advisor.section.role': 'Role',
    'advisor.section.perms': 'Agent permissions',
    'advisor.delete': 'Delete agent',
    'advisor.empty': 'No agents yet.',
    'role.admin': 'Administrator',
    'role.admin.desc': 'Full system access',
    'role.advisor': 'Agent',
    'role.advisor.desc': 'Access per permissions',
    'perm.write.name': 'Write & edit',
    'perm.write.desc': 'Send messages, edit leads and contacts',
    'perm.delete.name': 'Delete records',
    'perm.delete.desc': 'Delete leads, contacts and conversations',
    'perm.reports.name': 'View reports',
    'perm.reports.desc': 'Access the dashboard and activity history',
    'perm.advisors.name': 'Manage agents',
    'perm.advisors.desc': 'Create, edit and deactivate other agents',
    // IA
    'ia.title': 'Artificial intelligence',
    'ia.provider': 'Provider',
    'ia.knowledge': 'Knowledge sources',
    'ia.add_source': '+ New source',
    'ia.behavior': 'Behavior',
    'ia.save': 'Save changes',
    'ia.test': 'Test connection',
    // Notifications
    'notif.log.title': 'Recent log',
    // Trash
    'trash.empty_all': 'Empty trash',
    'trash.filter.all': 'All',
    'trash.filter.contacts': 'Contacts',
    'trash.filter.leads': 'Leads',
    'trash.filter.pipelines': 'Pipelines',
    'trash.filter.stages': 'Stages',
    'trash.filter.bots': 'Bots',
    'trash.empty': 'Trash is empty',
    // Config: lead value
    'config.lead_value.section': 'Lead value',
    'config.lead_value.title': 'Enable lead value',
    'config.lead_value.desc': 'Adds a monetary value field (MXN) to each lead. Shows the total per stage on the kanban and the cumulative value of the full pipeline.',
    // Reports
    'report.new': '+ New report',
    'report.filter.all': 'All',
    'report.filter.open': 'Open',
    'report.filter.in_progress': 'In progress',
    'report.filter.resolved': 'Resolved',
    'report.filter.wontfix': "Won't fix",
    'report.modal.new': 'New report',
    'report.submit': 'Submit report',
    // Machine tokens
    'mt.new': '+ Generate token',
    'mt.revoke_all': 'Revoke all',
    'mt.show_revoked': 'Show revoked',
    'mt.th.prefix': 'Prefix',
    'mt.th.last_used': 'Last used',
    'mt.empty': 'No tokens generated.',
    'mt.token.title': 'Token generated',
    'mt.new.title': 'New token',
    'mt.device_name': 'Device name',
    'mt.generate': 'Generate',
    'mt.done': 'Done',
    // Calendar
    'cal.tab.overdue': 'Overdue',
    'cal.tab.today': 'Today',
    'cal.tab.upcoming': 'Upcoming',
    'cal.tab.completed': 'Completed',
    'cal.today': 'Today',
    'cal.foot': 'Click a day to view/add tasks. Click a task to edit it.',
    // Account
    'account.personal_info': 'Personal information',
    'account.save_profile': 'Save changes',
    'account.change_password': 'Change password',
    'account.save_password': 'Change password',
    // Mail
    'mail.compose': 'Compose',
    'mail.inbox': 'Inbox',
    'mail.sent': 'Sent',
    'mail.all': 'All',
    'mail.accounts': 'Accounts',
    'mail.new_message': 'New message',
    'mail.to': 'To',
    'mail.subject': 'Subject',
    'mail.from': 'From',
    'mail.discard': 'Discard',
    'mail.select_email': 'Select an email',
    'mail.loading_email': 'Loading email…',
    'mail.loading': 'Loading...',
    'mail.no_emails': 'No emails',
    'mail.no_results': 'No results',
    'mail.no_subject_paren': '(No subject)',
    'mail.unknown_sender': 'Unknown',
    'mail.you': 'You',
    'mail.reply_to': 'Reply to {name}',
    'mail.reply_placeholder': 'Type your reply...',
    'mail.reply_send': 'Send reply',
    'mail.all_accounts': 'All accounts',
    'mail.sent_ok': 'Email sent',
    'mail.send_error': 'Send error: {msg}',
    'mail.compose_send': 'Send',
    'mail.compose_to_placeholder': 'recipient@example.com',
    'mail.compose_subject_placeholder': 'Subject',
    'mail.compose_body_placeholder': 'Type your message here...',
    'mail.compose_validate': 'Enter the recipient and message',
    'mail.error_prefix': 'Error: {msg}',
    // Bot — template picker hint in bot-message mode
    'bot.tpl.basic_hint': '💡 Only <strong>basic</strong> templates are shown. The bot will send them as PLAIN TEXT (only works inside the 24h window). To send a WhatsApp API approved template (works outside 24h), use the <strong>"Send template"</strong> step.',
    // Meta delivery errors — map from backend error_reason
    'error.wa.131047': "More than 24h since the lead's last reply — only approved templates work outside the window (you sent plain text).",
    // Buttons extra
    'btn.copy': 'Copy',
    'btn.fields': 'Fields',
    // Business profile
    'biz.field.logo': 'Logo',


    // Greetings
    'greeting.morning': 'Good morning',
    'greeting.afternoon': 'Good afternoon',
    'greeting.evening': 'Good evening',
    // Connection status
    'conn.offline': 'No server connection — retrying…',
    'conn.degraded': 'Unstable connection — checking…',
    'conn.recovered': 'Connection restored ✓',
    // Bot list table
    'bot.th.steps': 'Steps',
    // Advisor modal edit
    'advisor.modal.edit': 'Edit agent',
    // Contact modal edit
    'contact.modal.edit': 'Edit contact',

    'signup.free.btn': 'Create free account',

    // Bot list — filter empty states
    'bot.filter.no_match': 'No bots match "{q}".',
    'bot.filter.no_errors': '🎉 No bot has errors. All good.',
    'bot.filter.no_warns': '✨ No bot has warnings.',
    'bot.filter.no_tag': 'No bot has this tag.',
    // Bot list — row metadata
    'bot.row.created': 'Created {date}',
    'bot.row.step': 'step',
    'bot.row.steps': 'steps',
    // Bot drag handle
    'bot.drag.title': 'Drag to reorder',
    // Bot status toggle
    'bot.status.paused': 'Bot paused',
    'bot.status.active': 'Bot active',
    // Bot name placeholder
    'bot.name.placeholder': 'Bot name',
    // Chat — no messages
    'chat.no_messages': 'No messages yet.',
    // Integration modal
    'int.modal.edit': 'Edit {name}',
    'int.modal.connect': 'Connect {name}',
    'int.how_to_connect': 'How to connect',
    // Webhook modal edit title
    'wh.modal.edit': 'Edit Webhook',
    // Pipeline modal titles
    'pl.modal.edit': 'Edit pipeline',
    'pl.modal.new': 'New pipeline',
    // Lead modal edit title
    'exp.modal.edit_title': 'Edit lead',
    // Placeholders
    'stage.name.placeholder': 'Stage name',
    'pl.name.placeholder': 'e.g. Sales',
    'mail.search.placeholder': 'Search emails...',
  },
};

let _locale = (() => {
  try {
    const stored = localStorage.getItem('locale');
    if (stored && I18N_TRANSLATIONS[stored]) return stored;
    // Auto-detect from browser language — Spanish → es-MX, everything else → en
    const nav = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    return nav.startsWith('es') ? 'es-MX' : 'en';
  } catch { return 'es-MX'; }
})();

// Devuelve el string traducido para la clave en el locale actual.
// Cae a español si no hay traducción; si tampoco existe, devuelve la clave o el fallback.
function t(key, fallback) {
  return I18N_TRANSLATIONS[_locale]?.[key]
      || I18N_TRANSLATIONS['es-MX']?.[key]
      || fallback
      || key;
}

function getLocale() { return _locale; }

function setLocale(loc) {
  if (!I18N_TRANSLATIONS[loc]) loc = 'es-MX';
  _locale = loc;
  try { localStorage.setItem('locale', loc); } catch {}
  document.documentElement.lang = loc.split('-')[0];
  applyTranslationsToDOM();
}

// Recorre el DOM y reemplaza textos en elementos con data-i18n / data-i18n-placeholder /
// data-i18n-title / data-i18n-aria-label. Se llama al cambiar idioma y al boot.
function applyTranslationsToDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = t(key);
    // Si el elemento solo tiene texto, reemplazar. Si tiene hijos (svg+span),
    // buscar el primer text-node (span) y reemplazar ahí.
    const span = el.querySelector('span:not([class*="icon"]):not([class*="dot"])');
    if (span && span.children.length === 0) span.textContent = txt;
    else if (el.children.length === 0) el.textContent = txt;
    else el.setAttribute('aria-label', txt); // fallback
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
}

// ─── Auth helpers ───
// El token puede estar en localStorage (si "Recuerda mi sesión" estaba activo),
// sessionStorage (sesión de una sola pestaña), o en una cookie httpless
// (iOS: Safari y el PWA standalone comparten cookies pero NO localStorage).
function _getCookie(name) {
  const m = document.cookie.match('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)');
  return m ? decodeURIComponent(m[1]) : '';
}
function _setCookie(name, value, maxAgeSecs) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSecs}; SameSite=Lax`;
}
function _clearCookie(name) {
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}
function getToken() {
  return localStorage.getItem('rh_token') || sessionStorage.getItem('rh_token') || _getCookie('rh_token') || '';
}
function getAdvisor() {
  try {
    return JSON.parse(
      localStorage.getItem('rh_advisor') || sessionStorage.getItem('rh_advisor') || 'null'
    );
  } catch { return null; }
}
function logout() {
  const token = getToken();
  if (token) fetch('/api/auth/logout', { method: 'POST', headers: { Authorization: `Bearer ${token}` } }).catch(() => {});
  localStorage.removeItem('rh_token');
  localStorage.removeItem('rh_advisor');
  sessionStorage.removeItem('rh_token');
  sessionStorage.removeItem('rh_advisor');
  _clearCookie('rh_token');
  window.location.href = '/login';
}

// ═══════ Estado de conexión global ═══════
const connState = {
  fails: 0,
  isOffline: false,
  banner: null,
  recoveryTimer: null,
};
const CONN_FAIL_THRESHOLD = 3;     // 3 fallos seguidos → marcamos offline
const CONN_RECOVERY_BANNER_MS = 4000;

function setConnBanner(kind, text) {
  const el = document.getElementById("connBanner");
  if (!el) return;
  if (!kind) { el.hidden = true; el.className = "conn-banner"; return; }
  el.className = `conn-banner is-${kind}`;
  el.textContent = text;
  el.hidden = false;
}

function markConnFailure() {
  connState.fails++;
  if (!connState.isOffline && connState.fails >= CONN_FAIL_THRESHOLD) {
    connState.isOffline = true;
    if (connState.recoveryTimer) { clearTimeout(connState.recoveryTimer); connState.recoveryTimer = null; }
    setConnBanner("offline", t('conn.offline'));
  } else if (!connState.isOffline) {
    setConnBanner("degraded", t('conn.degraded'));
  }
}

function markConnSuccess() {
  const wasOffline = connState.isOffline;
  connState.fails = 0;
  connState.isOffline = false;
  if (wasOffline) {
    setConnBanner("recovered", t('conn.recovered'));
    if (connState.recoveryTimer) clearTimeout(connState.recoveryTimer);
    connState.recoveryTimer = setTimeout(() => setConnBanner(null), CONN_RECOVERY_BANNER_MS);
  } else if (connState.fails === 0) {
    setConnBanner(null);
  }
}

// ═══════ Global loader — barra arriba mientras hay requests en vuelo ═══════
let _pendingRequests = 0;
let _loaderShowTimer = null;
function _trackRequestStart() {
  _pendingRequests++;
  // Mostrar después de 200ms — evita parpadeo en requests rápidas (<200ms).
  if (_pendingRequests === 1 && !_loaderShowTimer) {
    _loaderShowTimer = setTimeout(() => {
      document.getElementById('globalLoader')?.classList.add('is-active');
      _loaderShowTimer = null;
    }, 200);
  }
}
function _trackRequestEnd() {
  _pendingRequests = Math.max(0, _pendingRequests - 1);
  if (_pendingRequests === 0) {
    if (_loaderShowTimer) { clearTimeout(_loaderShowTimer); _loaderShowTimer = null; }
    document.getElementById('globalLoader')?.classList.remove('is-active');
  }
}

async function api(method, url, body) {
  // cache:'no-store' fuerza al browser a NO usar copias cacheadas (Safari es agresivo).
  // Combina con Cache-Control: no-store del backend para garantía total.
  const opts = {
    method,
    headers: { Authorization: `Bearer ${getToken()}`, 'Cache-Control': 'no-cache' },
    cache: 'no-store',
  };
  if (body !== undefined) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(body);
  }
  _trackRequestStart();
  let res;
  try {
    res = await fetch(url, opts);
  } catch (err) {
    // Fallo de red (sin respuesta)
    _trackRequestEnd();
    markConnFailure();
    throw err;
  }
  _trackRequestEnd();
  if (res.status >= 500 && res.status !== 503) markConnFailure();
  else markConnSuccess();
  if (res.status === 401) { logout(); return; }
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

// ═══════ Toast system ═══════
function toast(message, kind = "info", duration = 3500) {
  const root = document.getElementById("toastContainer");
  if (!root) return;
  const el = document.createElement("div");
  el.className = `toast toast--${kind}`;
  const icon = kind === "success" ? "✓" : kind === "error" ? "✕" : "i";
  el.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${escapeHtml(message)}</span>
    <button class="toast-close" aria-label="Cerrar">×</button>
  `;
  const remove = () => {
    el.classList.add("is-leaving");
    setTimeout(() => el.remove(), 200);
  };
  el.querySelector(".toast-close").addEventListener("click", remove);
  root.appendChild(el);
  if (duration > 0) setTimeout(remove, duration);
}

// ═══════ Chats — conectado al backend ═══════
let CONVERSATIONS = [];
let ACTIVE_CONVO_ID = null;
let CHAT_MESSAGES = [];
let CHAT_FILTER_PROVIDER = '';
let CHAT_FILTER_UNREAD = false;
let CHAT_FILTER_PINNED = false;
let CHAT_SEARCH = '';
let _chatPollTimer = null;
let SPLIT_CONFIG = { enabled: false };
let SPLIT_ACTIVE_COMPANY = 'a';
let SPLIT_ACTIVE_MAIL_COMPANY = 'a';
let CHAT_PIPELINE_FILTER = [];
let CHAT_SPLIT_ORPHANS   = false;

const PROVIDER_LABEL = { whatsapp: 'WhatsApp Business API', 'whatsapp-lite': 'WhatsApp Lite', messenger: 'Messenger', instagram: 'Instagram', telegram: 'Telegram', tiktok: 'TikTok' };

// Formatea timestamp para pie de burbuja: si es hoy → "14:32", si no → "15 abr · 14:32"
function fmtMsgTime(ts) {
  if (!ts) return '';
  const d = new Date(ts * 1000);
  const now = new Date();
  const time = d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  if (d.toDateString() === now.toDateString()) return time;
  const date = d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
  return `${date} · ${time}`;
}

// Returns 24h countdown pill HTML — inline inside the badges row.
// Solo aplica a WhatsApp Business API ('whatsapp'). Cuando la ventana de 24h
// se cierra, el pill cambia a "Caducada" en rojo más oscuro en vez de desaparecer.
function wa24Html(provider, lastIncomingAt) {
  if (provider !== 'whatsapp' || !lastIncomingAt) return '';
  const deadlineMs = lastIncomingAt * 1000 + 24 * 60 * 60 * 1000;
  const diffMs = deadlineMs - Date.now();
  if (diffMs <= 0) {
    return `<span class="rh-wa24-pill is-expired" data-deadline="${deadlineMs}" title="Han pasado más de 24h desde el último mensaje del lead. Solo puedes enviar plantillas aprobadas.">Caducada</span>`;
  }
  const h  = Math.floor(diffMs / 3_600_000);
  const m  = Math.floor((diffMs % 3_600_000) / 60_000);
  const s  = Math.floor((diffMs % 60_000) / 1_000);
  const hh = String(h).padStart(2, '0');
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return `<span class="rh-wa24-pill" data-deadline="${deadlineMs}">24h · ${hh}:${mm}:${ss}</span>`;
}

// Ticker global — actualiza todos los pills visibles cada segundo.
// Cuando el countdown llega a cero el pill se convierte en "Caducada" (no se quita).
setInterval(() => {
  document.querySelectorAll('.rh-wa24-pill[data-deadline]').forEach(el => {
    const deadlineMs = Number(el.dataset.deadline);
    const diffMs = deadlineMs - Date.now();
    if (diffMs <= 0) {
      if (!el.classList.contains('is-expired')) {
        el.classList.add('is-expired');
        el.textContent = 'Caducada';
        el.title = 'Han pasado más de 24h desde el último mensaje del lead. Solo puedes enviar plantillas aprobadas.';
      }
      return;
    }
    const h  = Math.floor(diffMs / 3_600_000);
    const m  = Math.floor((diffMs % 3_600_000) / 60_000);
    const s  = Math.floor((diffMs % 60_000) / 1_000);
    el.textContent = `24h · ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  });
}, 1000);

async function loadConversations() {
  try {
    let data;
    if (window.PERSONAL_MODE) {
      // /chat — vista personal del asesor, con hides propios
      const params = new URLSearchParams();
      if (window.PERSONAL_SHOW_HIDDEN) params.set('showHidden', '1');
      params.set('limit', '200');
      if (CHAT_PIPELINE_FILTER && CHAT_PIPELINE_FILTER.length > 0) params.set('pipelineIds', CHAT_PIPELINE_FILTER.join(','));
      if (CHAT_SPLIT_ORPHANS) params.set('includeOrphans', '1');
      data = await api('GET', `/api/personal-chat/conversations?${params}`);
      // El endpoint personal devuelve campos planos — normalizar a la forma esperada por renderChatList
      data.items = (data.items || []).map(r => ({
        id: r.id,
        provider: r.provider,
        externalId: r.external_id,
        contactId: r.contact_id,
        contactName: [r.contact_first_name, r.contact_last_name].filter(Boolean).join(' ').trim() || null,
        name: [r.contact_first_name, r.contact_last_name].filter(Boolean).join(' ').trim() || r.contact_phone || '—',
        contactPhone: r.contact_phone,
        phone: r.contact_phone || '',
        lastMessage: r.last_message,
        lastMessageAt: r.last_message_at,
        lastIncomingAt: r.last_incoming_at,  // ← para el badge 24h de WhatsApp Business API
        time: r.last_message_at ? new Date(r.last_message_at * 1000).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : '',
        unreadCount: r.unread_count || 0,
        botPaused: !!r.bot_paused,
        _personalHidden: !!r.hidden_at,
      }));
    } else {
      const params = new URLSearchParams();
      if (CHAT_SEARCH) params.set('q', CHAT_SEARCH);
      if (CHAT_FILTER_PROVIDER) params.set('provider', CHAT_FILTER_PROVIDER);
      if (CHAT_FILTER_UNREAD) params.set('unread', '1');
      if (CHAT_PIPELINE_FILTER && CHAT_PIPELINE_FILTER.length > 0) params.set('pipelineIds', CHAT_PIPELINE_FILTER.join(','));
      if (CHAT_SPLIT_ORPHANS) params.set('includeOrphans', '1');
      data = await api('GET', `/api/conversations?${params}`);
    }
    const EMAIL_PROVIDERS_SET = new Set(['email', 'gmail', 'outlook', 'icloud_mail', 'yahoo_mail']);
    CONVERSATIONS = (data.items || []).filter(c => !EMAIL_PROVIDERS_SET.has(c.provider));
    renderChatList();
    // Conteos solo de convos de mensajería (sin email)
    const totalUnread = CONVERSATIONS.filter(c => (c.unreadCount || 0) > 0).length;
    const elAll    = document.getElementById('pillCountAll');
    const elUnread = document.getElementById('pillCountUnread');
    if (elAll) {
      elAll.textContent = CONVERSATIONS.length || '';
      elAll.style.display = CONVERSATIONS.length ? '' : 'none';
    }
    if (elUnread) {
      elUnread.textContent = totalUnread || '';
      elUnread.style.display = totalUnread ? '' : 'none';
    }
    // Badge en la nav lateral — suma de las convos cargadas (lo que el usuario realmente ve)
    updateChatsNavBadge(CONVERSATIONS.reduce((s, c) => s + (c.unreadCount || 0), 0));
  } catch (err) {
    console.error('loadConversations', err);
  }
}

// ─── Chat/Mail Split ───

async function loadSplitConfig() {
  try {
    SPLIT_CONFIG = await api('GET', '/api/settings/split');
  } catch (_) { SPLIT_CONFIG = { enabled: false }; }
  applySplitUI();
  applyChatSplitFilter();
  // Sincroniza el toggle de Configuración con el estado real
  const toggleEl = document.getElementById('cfgSplitEnabled');
  const panelEl  = document.getElementById('cfgSplitPanel');
  if (toggleEl) toggleEl.checked = !!SPLIT_CONFIG.enabled;
  if (panelEl)  panelEl.style.display = SPLIT_CONFIG.enabled ? '' : 'none';
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0,2), 16);
  const g = parseInt(h.slice(2,4), 16);
  const b = parseInt(h.slice(4,6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function applySplitUI() {
  const chatSwitcher = document.getElementById('chatSplitSwitcher');
  const mailSwitcher = document.getElementById('mailSplitSwitcher');
  const sidebarEl    = document.querySelector('.rh-sidebar');
  const mainEl       = document.querySelector('.rh-main');

  if (!SPLIT_CONFIG.enabled) {
    if (chatSwitcher) chatSwitcher.style.display = 'none';
    if (mailSwitcher) mailSwitcher.style.display = 'none';
    if (mainEl)    mainEl.style.background    = '';
    if (sidebarEl) sidebarEl.style.background = '';
    CHAT_PIPELINE_FILTER = [];
    CHAT_SPLIT_ORPHANS   = false;
    return;
  }
  const nameA = SPLIT_CONFIG.nameA || 'Empresa A';
  const nameB = SPLIT_CONFIG.nameB || 'Empresa B';
  if (chatSwitcher) {
    chatSwitcher.style.display = 'flex';
    const btnA = document.getElementById('splitChatBtnA');
    const btnB = document.getElementById('splitChatBtnB');
    if (btnA) btnA.textContent = nameA;
    if (btnB) btnB.textContent = nameB;
  }
  if (mailSwitcher) {
    mailSwitcher.style.display = 'flex';
    const btnA = document.getElementById('splitMailBtnA');
    const btnB = document.getElementById('splitMailBtnB');
    if (btnA) btnA.textContent = nameA;
    if (btnB) btnB.textContent = nameB;
  }
  const rawColor = SPLIT_ACTIVE_COMPANY === 'a'
    ? (SPLIT_CONFIG.colorA || '')
    : (SPLIT_CONFIG.colorB || '');
  const tintColor = rawColor ? hexToRgba(rawColor, 0.2) : '';
  if (mainEl)    mainEl.style.background    = tintColor;
  if (sidebarEl) sidebarEl.style.background = tintColor;
}

function applyChatSplitFilter() {
  if (!SPLIT_CONFIG.enabled) {
    CHAT_PIPELINE_FILTER = [];
    CHAT_SPLIT_ORPHANS   = false;
  } else {
    const ids = SPLIT_ACTIVE_COMPANY === 'a'
      ? (SPLIT_CONFIG.pipelinesA || [])
      : (SPLIT_CONFIG.pipelinesB || []);
    CHAT_PIPELINE_FILTER = ids;
    CHAT_SPLIT_ORPHANS   = SPLIT_ACTIVE_COMPANY === 'a';
  }
  loadConversations();
}

function _setupSplitListeners() {
  ['splitChatBtnA', 'splitChatBtnB'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      SPLIT_ACTIVE_COMPANY = btn.dataset.company;
      document.getElementById('splitChatBtnA')?.classList.toggle('split-btn--active', SPLIT_ACTIVE_COMPANY === 'a');
      document.getElementById('splitChatBtnB')?.classList.toggle('split-btn--active', SPLIT_ACTIVE_COMPANY === 'b');
      const rawColor = SPLIT_ACTIVE_COMPANY === 'a'
        ? (SPLIT_CONFIG.colorA || '')
        : (SPLIT_CONFIG.colorB || '');
      const tintColor = rawColor ? hexToRgba(rawColor, 0.2) : '';
      const mainEl    = document.querySelector('.rh-main');
      const sidebarEl = document.querySelector('.rh-sidebar');
      if (mainEl)    mainEl.style.background    = tintColor;
      if (sidebarEl) sidebarEl.style.background = tintColor;
      applyChatSplitFilter();
    });
  });

  ['splitMailBtnA', 'splitMailBtnB'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      SPLIT_ACTIVE_MAIL_COMPANY = btn.dataset.company;
      document.getElementById('splitMailBtnA')?.classList.toggle('split-btn--active', SPLIT_ACTIVE_MAIL_COMPANY === 'a');
      document.getElementById('splitMailBtnB')?.classList.toggle('split-btn--active', SPLIT_ACTIVE_MAIL_COMPANY === 'b');
      renderMailList();
    });
  });
}

function _populateSplitPanel() {
  const pipelines = PIPELINES || [];
  const EMAIL_PROVIDERS = ['email', 'gmail', 'outlook', 'icloud_mail', 'yahoo_mail'];
  const mailIntegrations = EMAIL_PROVIDERS.flatMap(key => {
    const prov = (INTEGRATIONS || []).find(p => p.key === key);
    return (prov?.integrations || []).filter(i => i.status === 'connected').map(i => ({ ...i, _provider: key }));
  });

  // Solo Company B tiene checklists — A recibe todo lo que no esté en B
  const savedPlB   = SPLIT_CONFIG.pipelinesB || [];
  const savedMailB = SPLIT_CONFIG.mailsB     || [];

  const plB = document.getElementById('splitPipelinesB');
  if (plB) {
    plB.innerHTML = pipelines.map(p => `
      <label>
        <input type="checkbox" data-split-pl-b value="${p.id}" ${savedPlB.includes(p.id) ? 'checked' : ''} />
        ${escapeHtml(p.name || String(p.id))}
      </label>`).join('') || '<span style="font-size:12px;color:var(--text-muted)">Sin pipelines</span>';
  }

  const mailB = document.getElementById('splitMailB');
  if (mailB) {
    mailB.innerHTML = mailIntegrations.map(i => `
      <label>
        <input type="checkbox" data-split-mail-b value="${i.id}" ${savedMailB.includes(i.id) ? 'checked' : ''} />
        ${escapeHtml(i.display_name || String(i.id))}
      </label>`).join('') || '<span style="font-size:12px;color:var(--text-muted)">Sin cuentas de correo conectadas</span>';
  }
}

function _setupSplitSettings() {
  const toggle = document.getElementById('cfgSplitEnabled');
  const panel  = document.getElementById('cfgSplitPanel');
  if (!toggle || !panel) return;

  toggle.checked = !!SPLIT_CONFIG.enabled;
  if (SPLIT_CONFIG.enabled) panel.style.display = '';

  const nameA  = document.getElementById('splitNameA');
  const nameB  = document.getElementById('splitNameB');
  const colorA = document.getElementById('splitColorA');
  const colorB = document.getElementById('splitColorB');
  if (nameA)  nameA.value  = SPLIT_CONFIG.nameA  || '';
  if (nameB)  nameB.value  = SPLIT_CONFIG.nameB  || '';
  if (colorA) colorA.value = SPLIT_CONFIG.colorA || '#e8f4fd';
  if (colorB) colorB.value = SPLIT_CONFIG.colorB || '#fdf0e8';

  toggle.addEventListener('change', async () => {
    panel.style.display = toggle.checked ? '' : 'none';
    if (toggle.checked) {
      _populateSplitPanel();
    } else {
      // Al desactivar, guardar de inmediato (no hay nada que configurar)
      try {
        await api('PATCH', '/api/settings/split', { ...SPLIT_CONFIG, enabled: false });
        await loadSplitConfig();
        toast('Split desactivado', 'success');
      } catch (err) {
        toast('Error al desactivar: ' + err.message, 'error');
        toggle.checked = true; // revertir si falla
        panel.style.display = '';
      }
    }
  });

  if (SPLIT_CONFIG.enabled) _populateSplitPanel();

  document.getElementById('cfgSplitSave')?.addEventListener('click', async () => {
    const pipelinesB = [...document.querySelectorAll('[data-split-pl-b]:checked')].map(el => Number(el.value));
    const mailsB     = [...document.querySelectorAll('[data-split-mail-b]:checked')].map(el => Number(el.value));

    if (toggle.checked && pipelinesB.length === 0) {
      toast('Debes asignar al menos un pipeline a Empresa B para activar el split.', 'error');
      return;
    }

    // Empresa A recibe todos los pipelines que no estén en B
    const allPipelineIds = (PIPELINES || []).map(p => p.id);
    const pipelinesA = allPipelineIds.filter(id => !pipelinesB.includes(id));

    const EMAIL_PROVIDERS = ['email', 'gmail', 'outlook', 'icloud_mail', 'yahoo_mail'];
    const allMailIds = EMAIL_PROVIDERS.flatMap(key => {
      const prov = (INTEGRATIONS || []).find(p => p.key === key);
      return (prov?.integrations || []).filter(i => i.status === 'connected').map(i => i.id);
    });
    const mailsA = allMailIds.filter(id => !mailsB.includes(id));

    const payload = {
      enabled:    toggle.checked,
      nameA:      nameA?.value.trim() || 'Empresa A',
      nameB:      nameB?.value.trim() || 'Empresa B',
      colorA:     colorA?.value || '#e8f4fd',
      colorB:     colorB?.value || '#fdf0e8',
      pipelinesA,
      pipelinesB,
      mailsA,
      mailsB,
    };
    try {
      await api('PATCH', '/api/settings/split', payload);
      await loadSplitConfig();
      toast('Configuración guardada', 'success');
    } catch (err) {
      toast('Error al guardar: ' + err.message, 'error');
    }
  });
}

// Actualiza el círculo rojo en la nav lateral del item "Chats" con el
// número de mensajes sin leer. Se oculta si es 0.
function updateChatsNavBadge(count) {
  const badge = document.getElementById('navChatsBadge');
  if (!badge) return;
  const n = Number(count) || 0;
  badge.textContent = n > 0 ? (n > 99 ? '99+' : String(n)) : '';
  badge.style.display = n > 0 ? '' : 'none';
}

function decrementUnreadBadge(convoId) {
  const convo = CONVERSATIONS.find(c => c.id === convoId);
  if (!convo || !convo.unreadCount) return;
  convo.unreadCount = 0;
  const el = document.getElementById('pillCountUnread');
  if (el) {
    const cur = parseInt(el.textContent) || 0;
    const next = Math.max(0, cur - 1);
    el.textContent = next || '';
    el.style.display = next ? '' : 'none';
  }
  // Recalcular el badge de la nav lateral con el total actualizado
  const totalUnread = CONVERSATIONS.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
  updateChatsNavBadge(totalUnread);
}

// Hash mínimo de la lista de mensajes para detectar si cambió algo entre polls.
// Sin esto, el poll de 5s re-renderiza idénticamente y resetea el scroll cuando
// hay imágenes cargando (scrollHeight crece al cargar la imagen → "salto").
function _msgsSignature(arr) {
  if (!arr?.length) return '0';
  const last = arr[arr.length - 1];
  return `${arr.length}:${last.id}:${last.status || ''}:${last.body?.length || 0}`;
}
let _lastMsgsSignature = null;

async function loadMessages(convoId) {
  try {
    const data = await api('GET', `/api/conversations/${convoId}/messages`);
    const next = data.items || [];
    const sig = _msgsSignature(next);
    const same = sig === _lastMsgsSignature;
    CHAT_MESSAGES = next;
    if (!same) {
      _lastMsgsSignature = sig;
      renderMessages();
    }
  } catch (err) {
    console.error('loadMessages', err);
  }
}

function renderChatList() {
  const root = document.getElementById("rhChatList");
  if (!root) return;

  // Filtros aplicados localmente. Los filtros de servidor (search, unread,
  // provider) ya vienen pre-filtrados en CONVERSATIONS; pinned se filtra acá
  // porque el backend no expone ?pinned=1 todavía.
  const list = CHAT_FILTER_PINNED ? CONVERSATIONS.filter(c => c.pinned) : CONVERSATIONS;

  // Actualizar contador de pill "Fijados"
  const pillPinned = document.getElementById('pillCountPinned');
  if (pillPinned) {
    const n = CONVERSATIONS.filter(c => c.pinned).length;
    pillPinned.textContent = n || '';
    pillPinned.style.display = n ? '' : 'none';
  }

  if (!list.length) {
    const msg = CHAT_FILTER_PINNED
      ? 'No tienes chats fijados.<br>Click derecho sobre un chat → Fijar.'
      : (CHAT_FILTER_UNREAD ? 'No hay chats sin leer 🎉' :
         CHAT_FILTER_PROVIDER ? `Sin chats de ${CHAT_FILTER_PROVIDER}.` :
         CHAT_SEARCH ? `Sin resultados para "${escapeHtml(CHAT_SEARCH)}".` :
         'No hay conversaciones aún.<br>Los mensajes entrantes aparecerán aquí.');
    root.innerHTML = `<p class="rh-chat-empty">${msg}</p>`;
    return;
  }

  root.innerHTML = list.map((c) => {
    const personalAction = '';
    const unread = c.unreadCount > 0;
    const unreadBadge = unread
      ? (c.unreadCount > 1
          ? `<span class="rh-chat-unread-count">${c.unreadCount > 99 ? '99+' : c.unreadCount}</span>`
          : `<span class="rh-chat-unread-dot"></span>`)
      : '';
    const pinIcon = c.pinned ? `<span class="rh-chat-pin-icon" title="Fijado">📌</span>` : '';
    const mutedIcon = (c.mutedUntil && c.mutedUntil * 1000 > Date.now()) ? `<span class="rh-chat-muted-icon" title="Silenciado">🔇</span>` : '';
    // Avatar: foto real si existe, si no iniciales
    const _avInitials = (c.name || c.contactName || '?').split(/\s+/).slice(0,2).map(s => s[0]?.toUpperCase() || '').join('') || '?';
    const _avContent = c.contactAvatarUrl
      ? `<img src="${escapeHtml(c.contactAvatarUrl)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#64748b">${escapeHtml(_avInitials)}</span>`
      : escapeHtml(_avInitials);
    return `
    <div role="button" tabindex="0" class="rh-chat-item ${c.id === ACTIVE_CONVO_ID ? "rh-active" : ""} ${unread ? 'is-unread' : ''} ${c.pinned ? 'is-pinned' : ''}" data-id="${c.id}">
      ${personalAction}
      <div class="rh-chat-av">${_avContent}</div>
      <div class="rh-chat-body">
        <div class="rh-chat-item-top">
          <strong class="rh-chat-name">${pinIcon}${mutedIcon}${escapeHtml(c.name || c.contactName || '—')}</strong>
          <span class="rh-chat-meta-right">
            <span class="rh-chat-time">${escapeHtml(c.time || '')}</span>
            ${unreadBadge}
          </span>
        </div>
        <p class="rh-chat-phone">${escapeHtml(c.phone || c.contactPhone || '')}</p>
        <p class="rh-chat-preview">${escapeHtml(c.lastMessage || '')}</p>
        <div class="rh-chat-badges">
          <span class="rh-chat-origin">
            <span class="rh-channel-badge">
              <span class="rh-channel-dot rh-channel-${c.provider}"></span>
              ${escapeHtml(PROVIDER_LABEL[c.provider] || c.provider)}
            </span>
          </span>
          ${wa24Html(c.provider, c.lastIncomingAt)}
        </div>
      </div>
    </div>
  `;
  }).join("");

  root.querySelectorAll(".rh-chat-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      // Si clic fue en el botón de hide/unhide del modo personal, no abrir conversación
      const action = e.target.closest('[data-personal-action]');
      if (action) {
        e.preventDefault();
        e.stopPropagation();
        const id = Number(action.dataset.id);
        const kind = action.dataset.personalAction;
        handlePersonalChatAction(id, kind);
        return;
      }
      openConversation(Number(el.dataset.id));
    });
  });
}

async function handlePersonalChatAction(convoId, kind) {
  try {
    if (kind === 'hide') {
      await api('POST', `/api/personal-chat/conversations/${convoId}/hide`);
      toast('Chat ocultado de tu vista', 'success');
    } else if (kind === 'unhide') {
      await api('POST', `/api/personal-chat/conversations/${convoId}/unhide`);
      toast('Chat desocultado', 'success');
    }
    await loadConversations();
  } catch (err) {
    toast(err.message || 'Error', 'error');
  }
}

async function openConversation(convoId) {
  ACTIVE_CONVO_ID = convoId;
  _lastMsgsSignature = null; // forzar render al cambiar de chat
  const convo = CONVERSATIONS.find((c) => c.id === convoId);

  // Salir del empty state
  document.getElementById('rhConvPanel')?.classList.remove('rh-empty');

  // Si el panel de info está abierto, actualizarlo con el nuevo contacto
  const infoPanel = document.getElementById('rhChatInfoPanel');
  if (infoPanel && !infoPanel.hidden) {
    renderChatInfoPanel();
  }

  // Marcar activa en la lista
  document.querySelectorAll(".rh-chat-item").forEach((x) => {
    x.classList.toggle("rh-active", Number(x.dataset.id) === convoId);
  });

  // Actualizar header
  if (convo) {
    // Avatar en header
    const avWrap = document.getElementById('rhHeaderAvatar');
    if (avWrap) {
      const _initials = (convo.name || '?').split(/\s+/).slice(0,2).map(s => s[0]?.toUpperCase() || '').join('') || '?';
      if (convo.contactAvatarUrl) {
        avWrap.innerHTML = `<img src="${escapeHtml(convo.contactAvatarUrl)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block" onerror="this.outerHTML='<span class=&quot;rh-header-av-initials&quot;>${escapeHtml(_initials)}</span>'" />`;
      } else {
        avWrap.innerHTML = `<span class="rh-header-av-initials">${escapeHtml(_initials)}</span>`;
      }
    }
    const titleEl = document.getElementById("rhChatTitle");
    if (titleEl) {
      titleEl.textContent = convo.name;
      titleEl.classList.add('is-clickable');
      titleEl.title = 'Ver ficha del contacto';
      titleEl.onclick = () => openContactCardFromChat(convo.contactId);
    }
    const metaEl = document.querySelector(".rh-conversation-meta");
    if (metaEl) {
      // Buscar el expediente abierto del contacto (preferir in_progress, sino el más reciente)
      const expedients = PL_EXP_CACHE.filter(e => e.contactId === convo.contactId);
      const inProgress = expedients.find(e => e.stageKind === 'in_progress' || !e.stageKind);
      const exp = inProgress || expedients[0] || null;

      const pipelinePill = exp ? `
        <button type="button" class="rh-pipeline-pill" data-open-exp="${exp.id}" title="Ver lead">
          <span class="rh-pipeline-pill-name" style="background:${exp.pipelineColor || '#94a3b8'}24;border-color:${exp.pipelineColor || '#94a3b8'}55">
            <span class="rh-pipeline-pill-dot" style="background:${exp.pipelineColor || '#94a3b8'}"></span>
            ${escapeHtml(exp.pipelineName || 'Pipeline')}
          </span>
          <span class="rh-pipeline-pill-arrow">→</span>
          <span class="rh-pipeline-pill-stage" style="background:${exp.stageColor || '#94a3b8'}24;border-color:${exp.stageColor || '#94a3b8'}55">
            <span class="rh-pipeline-pill-dot" style="background:${exp.stageColor || '#94a3b8'}"></span>
            ${escapeHtml(exp.stageName || 'Etapa')}
          </span>
        </button>
      ` : '';

      const failure = convo.deliveryFailure;
      const failureBadge = failure
        ? `<button type="button" class="rh-delivery-error-badge ${classifyDeliveryError(failure.reason)}" data-show-delivery-error title="Click para ver detalle">
            ${deliveryErrorIconSvg(classifyDeliveryError(failure.reason))}
            <span class="rh-delivery-error-label">${escapeHtml(deliveryErrorShortLabel(classifyDeliveryError(failure.reason)))}</span>
          </button>`
        : '';

      metaEl.innerHTML = `
        <span>${escapeHtml(convo.phone)}</span>
        <span class="rh-conversation-origin">
          <span class="rh-channel-badge">
            <span class="rh-channel-dot rh-channel-${convo.provider}"></span>
            ${escapeHtml(PROVIDER_LABEL[convo.provider] || convo.provider)}
          </span>
        </span>
        ${failureBadge}
        ${pipelinePill}
      `;
      // Click en pipeline pill → abre el expediente
      metaEl.querySelector('[data-open-exp]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(e.currentTarget.dataset.openExp);
        openExpDetail(id, 'chats');
      });
      // Click en badge de error → modal con detalle
      metaEl.querySelector('[data-show-delivery-error]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        showDeliveryErrorModal(convo);
      });
    }
    openChatContact({ id: convo.contactId, botPaused: convo.botPaused, convoId });
  }

  // Marcar leída + cargar mensajes
  api('PATCH', `/api/conversations/${convoId}/read`).then(() => decrementUnreadBadge(convoId)).catch(() => {});
  await loadMessages(convoId);

  // Habilitar form de respuesta + evaluar ventana 24h
  const form = document.querySelector('.rh-reply-form');
  if (form) form.dataset.convoId = convoId;
  refreshReplyFormState();
}

// Clasifica el motivo de error en una de varias categorías para mostrar
// icono específico. Más específico = mejor; el resto cae a 'other'.
function classifyDeliveryError(reason) {
  const r = String(reason || '').toLowerCase();
  if (r.includes('bloqueó') || r.includes('blocked') || r.includes('blocked tus mensajes')) return 'blocked';
  if (r.includes('sin whatsapp') || r.includes('no registrado') || r.includes('not on whatsapp')) return 'no_whatsapp';
  if (r.includes('no es válido') || r.includes('no válido') || r.includes('formato')) return 'invalid_number';
  if (r.includes('suspendid') || r.includes('pausada')) return 'suspended';
  if (r.includes('no acepta') || r.includes('privacy')) return 'privacy';
  if (r.includes('plantilla') || r.includes('template')) return 'template';
  if (r.includes('24 hora') || r.includes('ventana') || r.includes('window')) return 'window_closed';
  if (r.includes('rate limit') || r.includes('too many')) return 'rate_limit';
  return 'other';
}

// Etiqueta corta para el badge (cabe poco). Click abre detalle.
function deliveryErrorShortLabel(category) {
  return ({
    blocked:        'Bloqueado',
    no_whatsapp:    'Sin WhatsApp',
    invalid_number: 'Número inválido',
    suspended:      'Suspendido',
    privacy:        'Privacidad',
    template:       'Plantilla',
    window_closed:  '24h cerrada',
    rate_limit:     'Rate limit',
    other:          'Error envío',
  })[category] || 'Error';
}

// Icono SVG por categoría — todos en stroke currentColor para tomar el color del badge.
function deliveryErrorIconSvg(category) {
  const svgs = {
    blocked: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><circle cx="10" cy="10" r="7"/><line x1="5" y1="5" x2="15" y2="15"/></svg>`,
    no_whatsapp: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M5 11a5 5 0 0 1 10 0v3a2 2 0 0 1-2 2h-1v-4h2"/><path d="M5 11v3a2 2 0 0 0 2 2h1v-4H6"/><line x1="3" y1="3" x2="17" y2="17"/></svg>`,
    invalid_number: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M5 4h2l2 4-2 1a8 8 0 0 0 4 4l1-2 4 2v2a2 2 0 0 1-2 2A12 12 0 0 1 3 6a2 2 0 0 1 2-2z"/><line x1="3" y1="3" x2="17" y2="17"/></svg>`,
    suspended: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><circle cx="10" cy="10" r="7"/><line x1="8" y1="8" x2="8" y2="12"/><line x1="12" y1="8" x2="12" y2="12"/></svg>`,
    privacy: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><rect x="5" y="9" width="10" height="8" rx="1"/><path d="M7 9V6a3 3 0 0 1 6 0v3"/></svg>`,
    template: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><rect x="3" y="3" width="14" height="14" rx="2"/><line x1="3" y1="8" x2="17" y2="8"/></svg>`,
    window_closed: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><circle cx="10" cy="11" r="6"/><polyline points="10 7 10 11 13 13"/></svg>`,
    rate_limit: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="6" x2="11" y2="6"/><line x1="3" y1="14" x2="13" y2="14"/></svg>`,
    other: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><polygon points="10 2 18 17 2 17 10 2"/><line x1="10" y1="8" x2="10" y2="12"/><circle cx="10" cy="14.5" r="0.6" fill="currentColor"/></svg>`,
  };
  return svgs[category] || svgs.other;
}

// Texto largo + sugerencias de acción según categoría.
function deliveryErrorDetail(category, reason, provider) {
  const providerLabel = (PROVIDER_LABEL && PROVIDER_LABEL[provider]) || provider || 'el canal';
  const map = {
    blocked: {
      title: '🚫 El lead te bloqueó',
      desc: 'El destinatario te bloqueó en ' + providerLabel + ', así que no recibe tus mensajes.',
      action: 'Marca este lead como "Perdido" o intenta contactarlo por otro canal (llamada, email, otra red social).',
    },
    no_whatsapp: {
      title: '📵 Número sin WhatsApp',
      desc: 'Este número no tiene una cuenta activa de WhatsApp. Posiblemente nunca lo instaló o lo desinstaló.',
      action: 'Verifica que el número tenga el código de país correcto (ej: +52 1 33...). Si sigue fallando, usa otro canal.',
    },
    invalid_number: {
      title: '⚠ Número con formato inválido',
      desc: 'El número del destinatario no pasa la validación de ' + providerLabel + '. Probablemente le falta el código de país o tiene caracteres raros.',
      action: 'Edita el contacto y arregla el número (formato +52 1 33 1234 5678 para México).',
    },
    suspended: {
      title: '⛔ Cuenta del lead suspendida',
      desc: 'La cuenta del destinatario fue suspendida por ' + providerLabel + ' o está temporalmente pausada.',
      action: 'No puedes hacer nada hasta que el lead reactive su cuenta. Mantenlo en seguimiento manual.',
    },
    privacy: {
      title: '🔒 Lead bloquea mensajes de empresa',
      desc: 'El destinatario tiene activada una opción de privacidad que bloquea mensajes de cuentas de WhatsApp Business.',
      action: 'Contáctalo por otro canal y pídele que añada tu número a contactos para poder recibirte.',
    },
    template: {
      title: '📋 Problema con plantilla',
      desc: 'La plantilla que se intentó enviar no fue aceptada por Meta. Puede estar pendiente de aprobación, rechazada o eliminada.',
      action: 'Ve a Plantillas y revisa el estado de la que estabas usando. Considera cambiar el bot a otra plantilla aprobada.',
    },
    window_closed: {
      title: '⏰ Ventana de 24h cerrada',
      desc: 'Han pasado más de 24 horas desde el último mensaje del lead. WhatsApp Business API solo permite mensajes libres dentro de 24h.',
      action: 'Solo puedes enviar plantillas aprobadas por Meta. Espera a que el lead te escriba para reabrir la ventana.',
    },
    rate_limit: {
      title: '🐢 Límite de envío alcanzado',
      desc: 'Meta limitó tu cuenta por enviar demasiados mensajes en poco tiempo.',
      action: 'Espera 5-10 minutos y vuelve a intentar. Si pasa seguido, tu calidad de cuenta puede haber bajado.',
    },
    other: {
      title: '⚠ Error de entrega',
      desc: reason || 'Hubo un problema al entregar el mensaje pero no pudimos clasificar el motivo exacto.',
      action: 'Revisa los logs del server o intenta enviar otra vez. Si pasa seguido, contacta a soporte.',
    },
  };
  return map[category] || map.other;
}

function showDeliveryErrorModal(convo) {
  const failure = convo.deliveryFailure;
  if (!failure) return;
  const cat = classifyDeliveryError(failure.reason);
  const det = deliveryErrorDetail(cat, failure.reason, convo.provider);
  const when = new Date(failure.at * 1000).toLocaleString('es-MX', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  // Modal sencillo construido al vuelo
  const existing = document.getElementById('rhDelivErrModal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.id = 'rhDelivErrModal';
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:480px">
      <header class="modal-header">
        <h2>${escapeHtml(det.title)}</h2>
        <button class="modal-close" data-close-deliv-err>×</button>
      </header>
      <div class="modal-body">
        <div class="rh-deliv-err-icon ${cat}">${deliveryErrorIconSvg(cat)}</div>
        <p class="rh-deliv-err-desc">${escapeHtml(det.desc)}</p>
        <div class="rh-deliv-err-action">
          <strong>¿Qué puedo hacer?</strong>
          <p>${escapeHtml(det.action)}</p>
        </div>
        <div class="rh-deliv-err-meta">
          <div><strong>Detalle técnico:</strong> ${escapeHtml(failure.reason)}</div>
          <div><strong>Cuándo:</strong> ${when}</div>
          ${failure.provider ? `<div><strong>Canal:</strong> ${escapeHtml(PROVIDER_LABEL[failure.provider] || failure.provider)}</div>` : ''}
        </div>
      </div>
      <footer class="modal-footer">
        <button class="btn btn--ghost" data-close-deliv-err>Cerrar</button>
      </footer>
    </div>`;
  document.body.appendChild(modal);
  modal.querySelectorAll('[data-close-deliv-err]').forEach(el => el.addEventListener('click', () => modal.remove()));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}

// Abre la ficha del contacto desde el header del chat. Busca primero en
// CUSTOMERS (cache) y si no lo halla, lo trae por API.
async function openContactCardFromChat(contactId) {
  if (!contactId) return;
  let customer = CUSTOMERS.find(c => c.id === contactId);
  if (!customer) {
    try {
      const data = await api('GET', `/api/customers/${contactId}`);
      customer = data.item || data;
    } catch (err) {
      toast(err.message || 'No se pudo abrir el contacto', 'error');
      return;
    }
  }
  openCustomerModal(customer);
}

// ── Bot toggle in chat header ──
let _chatContactId = null;
let _chatBotPaused = false;
let _chatConvoId   = null;

function openChatContact({ id, botPaused, convoId }) {
  _chatContactId = id;
  _chatBotPaused = !!botPaused;
  _chatConvoId   = convoId || null;
  updateBotToggleUI();
  // En modo personal, cargar mis etiquetas asignadas a este contacto
  if (window.PERSONAL_MODE && id) {
    loadPersonalTagsForContact(id).then(() => renderPersonalTagsPopover());
  }
}

function updateBotToggleUI() {
  const btn = document.getElementById('rhBotToggle');
  if (!btn) return;
  btn.hidden = false;
  btn.classList.toggle('is-paused', _chatBotPaused);
  btn.querySelector('.rh-bot-toggle-label').textContent = _chatBotPaused ? t('bot.status.paused') : t('bot.status.active');
  btn.title = _chatBotPaused ? 'Reanudar bot para este contacto' : 'Parar bot para este contacto';
}

// Mapea un error_reason en español (lo que persistió el backend) al locale
// actual cuando coincide con un mensaje conocido. Si no hay match, devuelve
// el texto tal cual.
const _ERROR_REASON_I18N_MAP = {
  'Pasaron más de 24h sin respuesta del lead — solo plantillas aprobadas pasan (mandaste texto plano).': 'error.wa.131047',
};
// Textos en inglés que Meta devuelve como fallback cuando no hay código mapeado
const _ERROR_REASON_EN_MAP = {
  'This message was not delivered to maintain healthy ecosystem engagement.': 'Meta bloqueó la entrega — causa más probable: lead bloqueó el número o baja calidad del WABA',
  'User\'s number is part of an experiment':                                  'Meta bloqueó el reenganche — el lead no ha respondido recientemente (posible baja calidad del número)',
  'Re-engagement message':                                                    'Meta bloqueó el reenganche — el lead no ha respondido recientemente (posible baja calidad del número)',
  'Message failed to send because more than 24 hours have passed since the customer last replied to this number': 'Ventana de 24h cerrada — el lead no ha respondido en más de 24h, solo puedes enviar plantillas aprobadas',
};
function translateErrorReason(reason) {
  if (!reason) return reason;
  const i18nKey = _ERROR_REASON_I18N_MAP[reason];
  if (i18nKey) return t(i18nKey);
  const enTranslation = _ERROR_REASON_EN_MAP[reason];
  if (enTranslation) return enTranslation;
  return reason;
}

// Iconos para los 4 estados de un mensaje saliente (estilo WhatsApp).
// sent      → ✓ gris claro
// delivered → ✓✓ gris
// read      → ✓✓ azul
// failed    → ⚠ rojo + tooltip con la razón
function msgStatusHtml(m) {
  if (m.direction !== 'outgoing') return '';
  const status = m.status || 'sent';
  if (status === 'failed') {
    const reason = translateErrorReason(m.errorReason) || 'No se pudo entregar el mensaje';
    return `<span class="rh-msg-status rh-failed" title="${escapeHtml(reason)}">⚠</span>`;
  }
  // ✓ y ✓✓ con SVG
  const single = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 6"/></svg>`;
  const double = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/><polyline points="23 11 16 18 13 15" style="opacity:.7"/></svg>`;
  if (status === 'read')      return `<span class="rh-msg-status rh-read" title="Leído">${double}</span>`;
  if (status === 'delivered') return `<span class="rh-msg-status rh-delivered" title="Entregado">${double}</span>`;
  return `<span class="rh-msg-status rh-sent" title="Enviado">${single}</span>`;
}

// Cache para detectar transiciones a failed y avisar al usuario una sola vez.
let _lastSeenFailedIds = new Set();

// Margen (px) para considerar que el usuario está "al fondo" del chat. Si no,
// preservamos su scroll en lugar de saltar hacia abajo cada vez que renderizamos.
const _CHAT_BOTTOM_THRESHOLD = 120;

function _isChatAtBottom(root) {
  if (!root) return true;
  return (root.scrollHeight - root.scrollTop - root.clientHeight) < _CHAT_BOTTOM_THRESHOLD;
}

function renderMessages() {
  const root = document.getElementById("rhMessages");
  if (!root) return;

  // Capturar posición de scroll antes de renderizar.
  const wasAtBottom = _isChatAtBottom(root);
  const prevTop     = root.scrollTop;
  const prevHeight  = root.scrollHeight;

  if (!CHAT_MESSAGES.length) {
    root.innerHTML = `<p class="rh-messages-empty">${t('chat.no_messages')}</p>`;
    return;
  }

  const activeConvo = CONVERSATIONS.find(c => c.id === ACTIVE_CONVO_ID);
  const isWhatsapp = activeConvo?.provider === 'whatsapp';
  const lastIncomingIdx = CHAT_MESSAGES.reduce((acc, m, i) => m.direction === 'incoming' ? i : acc, -1);

  // Detectar mensajes que cambiaron a failed para mostrar toast (solo nuevos)
  for (const m of CHAT_MESSAGES) {
    if (m.direction !== 'outgoing' || m.status !== 'failed') continue;
    if (_lastSeenFailedIds.has(m.id)) continue;
    _lastSeenFailedIds.add(m.id);
    const reason = translateErrorReason(m.errorReason) || 'No se pudo entregar';
    const contactName = activeConvo?.name || 'el lead';
    toast(`⚠ Mensaje a ${contactName} no se entregó: ${reason}`, 'error');
  }

  root.innerHTML = CHAT_MESSAGES.map((m, idx) => {
    const dir = m.direction === 'incoming' ? 'incoming' : 'outgoing';
    const isLastIncoming = dir === 'incoming' && idx === lastIncomingIdx;
    const footExtra = isLastIncoming && isWhatsapp ? wa24Html('whatsapp', m.createdAt) : '';
    const statusIco = msgStatusHtml(m);
    const footContent = dir === 'incoming'
      ? `Contacto · <span class="rh-message-meta">${fmtMsgTime(m.createdAt)}</span>${footExtra}`
      : `<span class="rh-message-meta">${fmtMsgTime(m.createdAt)}${statusIco ? ' ' + statusIco : ''}</span>`;
    const bubbleClass = (dir === 'outgoing' && m.status === 'failed') ? 'rh-bubble is-failed' : 'rh-bubble';
    const errLine = (dir === 'outgoing' && m.status === 'failed' && m.errorReason)
      ? `<div class="rh-msg-error">⚠ ${escapeHtml(translateErrorReason(m.errorReason))}</div>` : '';
    // Render del media (si lo trae). Detecta tipo por extensión.
    let mediaHtml = '';
    if (m.mediaUrl) {
      const url = m.mediaUrl;
      const isImg = /\.(jpe?g|png|gif|webp)$/i.test(url);
      const isVideo = /\.(mp4|3gp|mov|webm)$/i.test(url);
      const isAudio = /\.(mp3|ogg|m4a|aac|opus|wav)$/i.test(url);
      const isPdfOrDoc = /\.(pdf|docx?|xlsx?|pptx?|txt)$/i.test(url);
      if (isImg) {
        mediaHtml = `<a href="${escapeHtml(url)}" target="_blank" class="rh-msg-media-img"><img src="${escapeHtml(url)}" alt="adjunto" loading="lazy" /></a>`;
      } else if (isVideo) {
        mediaHtml = `<video src="${escapeHtml(url)}" controls class="rh-msg-media-video" preload="metadata"></video>`;
      } else if (isAudio) {
        mediaHtml = `<audio src="${escapeHtml(url)}" controls class="rh-msg-media-audio" preload="metadata"></audio>`;
      } else if (isPdfOrDoc) {
        const filename = url.split('/').pop() || 'documento';
        const ext = (filename.match(/\.([a-zA-Z0-9]{1,8})$/)?.[1] || 'doc').toUpperCase();
        mediaHtml = `<a href="${escapeHtml(url)}" target="_blank" class="rh-msg-media-doc"><span class="rh-msg-media-icon">📎</span><span class="rh-msg-media-meta"><span class="rh-msg-media-name">${escapeHtml(filename)}</span><span class="rh-msg-media-ext">${ext}</span></span></a>`;
      } else {
        mediaHtml = `<a href="${escapeHtml(url)}" target="_blank" class="rh-msg-media-doc"><span class="rh-msg-media-icon">📁</span><span class="rh-msg-media-name">${escapeHtml(url.split('/').pop() || 'archivo')}</span></a>`;
      }
    }
    const bodyText = m.body ? `<div class="rh-bubble-text">${escapeHtml(m.body).replace(/\n/g, "<br/>")}</div>` : '';
    const bubbleInner = mediaHtml + bodyText;
    return `
      <article class="rh-message rh-${dir}">
        <div class="${bubbleClass} ${mediaHtml ? 'has-media' : ''}">${bubbleInner || escapeHtml(m.body).replace(/\n/g, "<br/>")}</div>
        ${errLine}
        <div class="rh-message-foot${dir === 'outgoing' ? ' rh-foot-out' : ''}">${footContent}</div>
      </article>`;
  }).join("");

  if (wasAtBottom) {
    // Si estaba al fondo, mantenerlo al fondo. Re-anclar también cuando cada
    // imagen termine de cargar (su altura cambia el scrollHeight).
    root.scrollTop = root.scrollHeight;
    root.querySelectorAll('img').forEach(img => {
      if (img.complete) return;
      img.addEventListener('load',  () => { if (_isChatAtBottom(root)) root.scrollTop = root.scrollHeight; }, { once: true });
      img.addEventListener('error', () => { /* no-op */ }, { once: true });
    });
  } else {
    // Preservar la posición visual del usuario: ajustar scroll por la diferencia
    // de altura del contenido (mensajes nuevos arriba o adjuntos cargados).
    const newHeight = root.scrollHeight;
    root.scrollTop = prevTop + (newHeight - prevHeight);
  }
}

// ═══════ Contactos (conectado al backend) ═══════
const TAG_COLORS = ["amber", "green", "purple", "blue"];
let CUSTOMERS = [];
let PIPELINES = [];
let CURRENT_TAGS = [];
let CUSTOMER_FILTER = "";
let CUSTOMER_PAGE = 1;
let CUSTOMER_PAGE_SIZE = 50;
let CUSTOMER_TOTAL = 0;
let CUSTOMER_TOTAL_PAGES = 1;
let CUSTOMER_SORT_BY = "createdAt";
let CUSTOMER_SORT_DIR = "desc";
let editingCustomerId = null;
let EDIT_EXPEDIENTS = [];          // estado mutable de expedientes en el modal
let ORIGINAL_EXPEDIENTS = [];      // snapshot para diff al guardar
let EDIT_EXP_TMP = 0;              // contador para IDs temporales de expedientes nuevos

function getInitials(c) {
  return ((c.firstName?.[0] || "") + (c.lastName?.[0] || "")).toUpperCase() || "?";
}
function tagColor(tag) {
  let h = 0;
  for (let i = 0; i < tag.length; i++) h = (h * 31 + tag.charCodeAt(i)) | 0;
  return TAG_COLORS[Math.abs(h) % TAG_COLORS.length];
}

// Color real del stage. Usa stageColor de la BD (configurado en pipelines).
// Fallback: colores por kind si la BD no devuelve color (compat).
function stageColor(exp) {
  if (exp.stageColor) return exp.stageColor;
  if (exp.stageKind === "won") return "#10b981";
  if (exp.stageKind === "lost") return "#ef4444";
  return "#94a3b8";
}

function renderExpedientChips(expedients) {
  if (!expedients || !expedients.length) return '<span class="exp-chip-empty">—</span>';
  return expedients.map((e) => {
    const sColor = stageColor(e);
    const pColor = e.pipelineColor || '#64748b';
    return `
    <span class="exp-chip exp-chip--clickable" data-exp-id="${e.id}" title="${escapeHtml(e.name || "")} · $${e.value || 0} — clic para abrir">
      <span class="exp-chip-pipeline" style="background:${escapeHtml(pColor)}24;border-color:${escapeHtml(pColor)}55">
        <span class="exp-chip-dot" style="background:${escapeHtml(pColor)}"></span>${escapeHtml(e.pipelineName)}
      </span>
      <span class="exp-chip-arrow">→</span>
      <span class="exp-chip-stage" style="background:${escapeHtml(sColor)}24;border-color:${escapeHtml(sColor)}55">
        <span class="exp-chip-dot" style="background:${escapeHtml(sColor)}"></span>${escapeHtml(e.stageName)}
      </span>
    </span>
  `;
  }).join("");
}

async function loadCustomers() {
  try {
    const params = new URLSearchParams();
    if (CUSTOMER_FILTER) params.set("q", CUSTOMER_FILTER);
    params.set("page", CUSTOMER_PAGE);
    params.set("pageSize", CUSTOMER_PAGE_SIZE);
    params.set("sortBy", CUSTOMER_SORT_BY);
    params.set("sortDir", CUSTOMER_SORT_DIR);
    const data = await api("GET", `/api/contacts?${params}`);
    CUSTOMERS = data.items;
    CUSTOMER_TOTAL = data.total;
    CUSTOMER_TOTAL_PAGES = data.totalPages;
    if (CUSTOMER_PAGE > CUSTOMER_TOTAL_PAGES) {
      CUSTOMER_PAGE = CUSTOMER_TOTAL_PAGES;
      return loadCustomers();
    }
    renderCustomers();
    renderPaginator();
    renderSortHeaders();
  } catch (err) {
    toast(`Error cargando contactos: ${err.message}`, "error");
  }
}

// ─── Sort dropdown ───
function updateSortLabel() {
  const active = document.querySelector(`#sortDropdown .sort-option[data-sort-by="${CUSTOMER_SORT_BY}"][data-sort-dir="${CUSTOMER_SORT_DIR}"]`);
  const label = document.getElementById("sortLabel");
  if (active && label) label.textContent = active.dataset.label;
  document.querySelectorAll("#sortDropdown .sort-option").forEach((opt) => {
    opt.classList.toggle("is-active",
      opt.dataset.sortBy === CUSTOMER_SORT_BY && opt.dataset.sortDir === CUSTOMER_SORT_DIR);
  });
}
function renderSortHeaders() { updateSortLabel(); }

// ─── Formateo de fecha amigable ───
function formatDate(unixSeconds) {
  if (!unixSeconds) return "—";
  const d = new Date(unixSeconds * 1000);
  const now = new Date();
  const diffMs = now - d;
  const diffMin = Math.floor(diffMs / 60000);
  const diffH = Math.floor(diffMs / 3600000);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startOfYesterday = startOfToday - 86400000;
  const t = d.getTime();

  const time = d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });

  if (diffMin < 1) return "Ahora";
  if (diffMin < 60) return `Hace ${diffMin} min`;
  if (t >= startOfToday) return `Hoy ${time}`;
  if (t >= startOfYesterday) return `Ayer ${time}`;
  if (diffH < 24 * 7) {
    const days = Math.floor(diffH / 24);
    return `Hace ${days} día${days === 1 ? "" : "s"}`;
  }
  // Misma año → "12 mar"; año anterior → "12 mar 2025"
  const sameYear = d.getFullYear() === now.getFullYear();
  return d.toLocaleDateString("es-MX", sameYear
    ? { day: "numeric", month: "short" }
    : { day: "numeric", month: "short", year: "numeric" });
}

// ─── Paginador ───
// Construye el rango de páginas a mostrar con elipsis estilo: 1 … 4 5 [6] 7 8 … 20
function buildPageRange(current, total) {
  const range = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) range.push(i);
    return range;
  }
  range.push(1);
  if (current > 4) range.push("…");
  const from = Math.max(2, current - 1);
  const to = Math.min(total - 1, current + 1);
  for (let i = from; i <= to; i++) range.push(i);
  if (current < total - 3) range.push("…");
  range.push(total);
  return range;
}

function renderPaginator() {
  const root = document.getElementById("customersPaginator");
  const summary = document.getElementById("customersSummary");
  const pages = document.getElementById("customersPages");
  if (!root) return;

  if (CUSTOMER_TOTAL === 0) {
    root.hidden = true;
    return;
  }
  root.hidden = false;

  const from = (CUSTOMER_PAGE - 1) * CUSTOMER_PAGE_SIZE + 1;
  const to = Math.min(CUSTOMER_PAGE * CUSTOMER_PAGE_SIZE, CUSTOMER_TOTAL);
  summary.textContent = `${from}–${to} de ${CUSTOMER_TOTAL}`;

  // Asegurar que el select refleje el page size actual
  const sel = document.getElementById("customersPageSize");
  if (sel && Number(sel.value) !== CUSTOMER_PAGE_SIZE) sel.value = String(CUSTOMER_PAGE_SIZE);

  const range = buildPageRange(CUSTOMER_PAGE, CUSTOMER_TOTAL_PAGES);
  const arrow = (dir) => dir === "left"
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>';
  const dArrow = (dir) => dir === "left"
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>';

  pages.innerHTML = `
    <button class="page-btn" data-page="1"           ${CUSTOMER_PAGE === 1 ? "disabled" : ""} title="Primera">${dArrow("left")}</button>
    <button class="page-btn" data-page="${CUSTOMER_PAGE - 1}" ${CUSTOMER_PAGE === 1 ? "disabled" : ""} title="Anterior">${arrow("left")}</button>
    ${range.map((p) => p === "…"
      ? `<span class="page-btn page-btn--ellipsis">…</span>`
      : `<button class="page-btn ${p === CUSTOMER_PAGE ? "is-active" : ""}" data-page="${p}">${p}</button>`
    ).join("")}
    <button class="page-btn" data-page="${CUSTOMER_PAGE + 1}" ${CUSTOMER_PAGE >= CUSTOMER_TOTAL_PAGES ? "disabled" : ""} title="Siguiente">${arrow("right")}</button>
    <button class="page-btn" data-page="${CUSTOMER_TOTAL_PAGES}" ${CUSTOMER_PAGE >= CUSTOMER_TOTAL_PAGES ? "disabled" : ""} title="Última">${dArrow("right")}</button>
  `;

  pages.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = Number(btn.dataset.page);
      if (!p || p === CUSTOMER_PAGE) return;
      CUSTOMER_PAGE = Math.max(1, Math.min(CUSTOMER_TOTAL_PAGES, p));
      loadCustomers();
    });
  });
}

async function loadPipelines() {
  try {
    const data = await api("GET", "/api/pipelines");
    PIPELINES = data.items;
  } catch (err) {
    console.error("Error cargando pipelines:", err);
  }
}

function renderCustomers() {
  const root = document.getElementById("customersList");
  if (!root) return;

  if (!CUSTOMERS.length) {
    root.innerHTML = `<div class="customers-empty">No hay contactos${CUSTOMER_FILTER ? ` que coincidan con "${escapeHtml(CUSTOMER_FILTER)}"` : ""}.</div>`;
    return;
  }

  root.innerHTML = CUSTOMERS.map((c) => `
    <div class="customers-row" data-id="${c.id}">
      <div class="customer-cell-name customer-cell-name--clickable" data-action="edit">
        <div class="customer-avatar">${getInitials(c)}</div>
        <div>
          <div class="customer-name">${escapeHtml(c.firstName)} ${escapeHtml(c.lastName || "")}</div>
        </div>
      </div>
      <div>${escapeHtml(c.phone || "—")}</div>
      <div>${escapeHtml(c.email || "—")}</div>
      <div class="customer-tags">
        ${c.tags.length
          ? c.tags.map((t) => `<span class="tag tag--${tagColor(t)}">${escapeHtml(t)}</span>`).join("")
          : '<span style="color:var(--text-muted)">—</span>'}
      </div>
      <div class="customer-expedients">${renderExpedientChips(c.expedients)}</div>
      <div class="customer-date" title="${new Date((c.createdAt || 0) * 1000).toLocaleString("es-MX")}">${formatDate(c.createdAt)}</div>
      <div class="customer-row-actions">
        <button class="icon-btn icon-btn--ghost" data-action="edit" aria-label="Editar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="icon-btn icon-btn--ghost" data-action="delete" aria-label="Eliminar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join("");

  root.querySelectorAll("[data-action='edit']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.closest(".customers-row").dataset.id);
      const c = CUSTOMERS.find((x) => x.id === id);
      if (c) openCustomerModal(c);
    });
  });
  root.querySelectorAll("[data-action='delete']").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = Number(e.currentTarget.closest(".customers-row").dataset.id);
      const c = CUSTOMERS.find((x) => x.id === id);
      if (!c) return;
      openContactDeleteModal(c);
    });
  });
  root.querySelectorAll(".exp-chip--clickable").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      e.stopPropagation();
      const expId = Number(chip.dataset.expId);
      if (expId) openExpDetail(expId, 'contactos');
    });
  });
}

// ─── Modal de borrado de contacto con preview de leads ───
let _contactDeletePending = null;

async function openContactDeleteModal(contact) {
  const modal = document.getElementById('contactDeleteModal');
  if (!modal) return;
  _contactDeletePending = contact;
  document.getElementById('cdelName').textContent = `${contact.firstName || ''} ${contact.lastName || ''}`.trim() || `#${contact.id}`;
  const list = document.getElementById('cdelLeadsList');
  const empty = document.getElementById('cdelLeadsEmpty');
  const title = document.getElementById('cdelLeadsTitle');
  list.innerHTML = '<div class="cdel-loading">Cargando leads asociados…</div>';
  empty.hidden = true;
  modal.hidden = false;

  try {
    const data = await api('GET', `/api/contacts/${contact.id}/leads-preview`);
    const items = data.items || [];
    title.textContent = items.length ? `Leads asociados (${items.length})` : 'Leads asociados';
    if (!items.length) {
      list.innerHTML = '';
      empty.hidden = false;
    } else {
      list.innerHTML = items.map(l => {
        const sColor = l.stageColor || '#94a3b8';
        const pColor = l.pipelineColor || '#64748b';
        const dt = l.createdAt ? new Date(l.createdAt * 1000).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
        return `
          <div class="cdel-lead-row">
            <div class="cdel-lead-name">${escapeHtml(l.name || 'Sin nombre')}</div>
            <div class="cdel-lead-meta">
              <span class="cdel-lead-pipeline" style="color:${pColor}">${escapeHtml(l.pipelineName || '')}</span>
              <span class="cdel-lead-arrow">→</span>
              <span class="cdel-lead-stage" style="background:${sColor}1a;color:${sColor};border:1px solid ${sColor}66">${escapeHtml(l.stageName || '')}</span>
              ${dt ? `<span class="cdel-lead-date">${dt}</span>` : ''}
            </div>
          </div>`;
      }).join('');
    }
  } catch (err) {
    list.innerHTML = `<div class="cdel-error">No se pudo cargar la lista de leads: ${escapeHtml(err.message)}</div>`;
  }
}

function closeContactDeleteModal() {
  const modal = document.getElementById('contactDeleteModal');
  if (modal) modal.hidden = true;
  _contactDeletePending = null;
}

async function confirmContactDelete() {
  const c = _contactDeletePending;
  if (!c) return;
  const btn = document.getElementById('cdelConfirmBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Eliminando…'; }
  try {
    await api('DELETE', `/api/contacts/${c.id}`);
    closeContactDeleteModal();
    await loadCustomers();
    toast('Contacto eliminado', 'success');
  } catch (err) {
    toast(`Error: ${err.message}`, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Eliminar definitivamente'; }
  }
}

(function setupContactDeleteModal() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-close-cdel]').forEach(el => el.addEventListener('click', closeContactDeleteModal));
    document.getElementById('cdelConfirmBtn')?.addEventListener('click', confirmContactDelete);
  });
})();

// ─── Modal de contacto ───
function renderTagChips() {
  const root = document.getElementById("tagInputChips");
  root.innerHTML = CURRENT_TAGS.map((t, i) => `
    <span class="tag-chip">${escapeHtml(t)}<button type="button" class="tag-chip-remove" data-i="${i}">×</button></span>
  `).join("");
  root.querySelectorAll(".tag-chip-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      CURRENT_TAGS.splice(Number(e.currentTarget.dataset.i), 1);
      renderTagChips();
    });
  });
}

async function openCustomerModal(customer = null) {
  editingCustomerId = customer?.id || null;
  document.getElementById("customerModalTitle").textContent = customer ? t('contact.modal.edit') : t('contact.modal.new');
  const form = document.getElementById("customerForm");
  form.firstName.value = customer?.firstName || "";
  form.lastName.value = customer?.lastName || "";
  form.phone.value = customer?.phone || "";
  form.email.value = customer?.email || "";
  CURRENT_TAGS = customer ? [...customer.tags] : [];
  renderTagChips();
  document.getElementById("tagInputField").value = "";

  // Asegurar que las definiciones de campos custom estén cargadas
  // (para mostrar sus inputs en cada fila de expediente)
  if (!EXP_FIELD_DEFS.length) {
    try { await loadExpFieldDefs(); } catch (_) {}
  }

  // Expedientes: snapshot para diff al guardar + estado mutable
  ORIGINAL_EXPEDIENTS = customer?.expedients ? customer.expedients.map((e) => ({ ...e })) : [];
  EDIT_EXPEDIENTS = customer?.expedients ? customer.expedients.map((e) => ({ ...e })) : [];
  renderEditExpedients();

  // Si no hay pipelines cargados, ocultar la sección
  document.getElementById("expedientsSection").hidden = PIPELINES.length === 0;

  document.getElementById("customerModal").hidden = false;
  setTimeout(() => form.firstName.focus(), 50);
}
function closeCustomerModal() {
  document.getElementById("customerModal").hidden = true;
  editingCustomerId = null;
  CURRENT_TAGS = [];
  EDIT_EXPEDIENTS = [];
  ORIGINAL_EXPEDIENTS = [];
}

// ─── Expedientes dentro del modal ───
function renderEditExpedients() {
  const root = document.getElementById("editExpedientsList");
  const emptyNote = document.getElementById("expedientsEmptyNote");
  const count = document.getElementById("expedientsSectionCount");
  if (!root) return;

  count.textContent = EDIT_EXPEDIENTS.length ? `(${EDIT_EXPEDIENTS.length})` : "";
  emptyNote.hidden = EDIT_EXPEDIENTS.length > 0;

  // Filtrar campos custom que aplican a expedientes
  const customFieldDefs = (EXP_FIELD_DEFS || []).filter(d => d.entity === 'expedient' || !d.entity);

  root.innerHTML = EDIT_EXPEDIENTS.map((exp, idx) => {
    const pipelineId = exp.pipelineId || PIPELINES[0]?.id;
    const pipeline = PIPELINES.find((p) => p.id === pipelineId) || PIPELINES[0];
    const stages = pipeline?.stages || [];
    const stageId = exp.stageId && stages.some((s) => s.id === exp.stageId) ? exp.stageId : stages[0]?.id;
    const currentStage = stages.find((s) => s.id === stageId);
    const pipelineColor = pipeline?.color || '#94a3b8';
    const stageColor = currentStage?.color || '#94a3b8';

    // Construir un mapa de los valores actuales por field_id
    const fieldValueMap = {};
    (exp.fieldValues || []).forEach(fv => { fieldValueMap[fv.fieldId] = fv.value; });

    // Renderizar inputs de campos personalizados (después del Valor MXN)
    const customFieldsHtml = customFieldDefs.map(fd => {
      const v = fieldValueMap[fd.id] != null ? fieldValueMap[fd.id] : '';
      const inputId = `efr-${idx}-${fd.id}`;
      let inputHtml;
      switch (fd.field_type) {
        case 'number':
          inputHtml = `<input type="number" id="${inputId}" data-cf-id="${fd.id}" value="${escapeHtml(v)}" />`;
          break;
        case 'date': case 'birthday':
          inputHtml = `<input type="date" id="${inputId}" data-cf-id="${fd.id}" value="${escapeHtml(v)}" />`;
          break;
        case 'datetime':
          inputHtml = `<input type="datetime-local" id="${inputId}" data-cf-id="${fd.id}" value="${escapeHtml(v)}" />`;
          break;
        case 'url':
          inputHtml = `<input type="url" id="${inputId}" data-cf-id="${fd.id}" value="${escapeHtml(v)}" placeholder="https://" />`;
          break;
        case 'select':
          inputHtml = `<select id="${inputId}" data-cf-id="${fd.id}"><option value="">—</option>${
            (fd.options || []).map(o => `<option value="${escapeHtml(o)}" ${o === v ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('')
          }</select>`;
          break;
        case 'checkbox':
          inputHtml = `<input type="checkbox" id="${inputId}" data-cf-id="${fd.id}" ${v === 'true' || v === true ? 'checked' : ''} />`;
          break;
        case 'textarea':
          inputHtml = `<textarea id="${inputId}" data-cf-id="${fd.id}" rows="2">${escapeHtml(v)}</textarea>`;
          break;
        default: // text
          inputHtml = `<input type="text" id="${inputId}" data-cf-id="${fd.id}" value="${escapeHtml(v)}" />`;
      }
      return `<label><span>${escapeHtml(fd.label)}</span>${inputHtml}</label>`;
    }).join('');

    return `
      <div class="edit-exp-row ${exp._isNew ? "is-new" : ""}" data-idx="${idx}">
        <label>
          <span>Nombre del lead</span>
          <input type="text" data-field="name" value="${escapeHtml(exp.name || "")}" placeholder="Ej: Serum Facial" />
        </label>
        <label>
          <span>Pipeline</span>
          <div class="edit-exp-select-wrap">
            <span class="edit-exp-color-dot" style="background:${escapeHtml(pipelineColor)}" data-color-for="pipelineId"></span>
            <select data-field="pipelineId">
              ${PIPELINES.map((p) => `<option value="${p.id}" data-color="${escapeHtml(p.color || '#94a3b8')}" ${p.id === pipelineId ? "selected" : ""}>${escapeHtml(p.name)}</option>`).join("")}
            </select>
          </div>
        </label>
        <label>
          <span>Etapa</span>
          <div class="edit-exp-select-wrap">
            <span class="edit-exp-color-dot" style="background:${escapeHtml(stageColor)}" data-color-for="stageId"></span>
            <select data-field="stageId">
              ${stages.map((s) => `<option value="${s.id}" data-color="${escapeHtml(s.color || '#94a3b8')}" ${s.id === stageId ? "selected" : ""}>${escapeHtml(s.name)}</option>`).join("")}
            </select>
          </div>
        </label>
        ${isLeadValueEnabled() ? `<label>
          <span>Valor (MXN) <span class="edit-exp-optional">opcional</span></span>
          <input type="number" data-field="value" value="${exp.value || ''}" step="1" min="0" placeholder="0" />
        </label>` : ''}
        ${customFieldsHtml}
        <div class="edit-exp-actions">
          ${!exp._isNew && exp.id ? `
            <button type="button" class="edit-exp-open" data-action="open-exp" data-exp-id="${exp.id}" title="Abrir detalle completo (etiquetas, campos, actividad, chat)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M9 18l6-6-6-6"/></svg>
              Abrir detalle
            </button>` : ''}
          <button type="button" class="edit-exp-delete" data-action="remove-exp" title="Eliminar lead">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Listeners por fila
  root.querySelectorAll(".edit-exp-row").forEach((row) => {
    const idx = Number(row.dataset.idx);
    // Listener para campos personalizados (data-cf-id) — guarda en fieldValuesMap
    if (!EDIT_EXPEDIENTS[idx].fieldValuesMap) {
      EDIT_EXPEDIENTS[idx].fieldValuesMap = {};
      (EDIT_EXPEDIENTS[idx].fieldValues || []).forEach(fv => {
        EDIT_EXPEDIENTS[idx].fieldValuesMap[fv.fieldId] = fv.value;
      });
    }
    row.querySelectorAll("[data-cf-id]").forEach((el) => {
      const onChange = () => {
        const fid = Number(el.dataset.cfId);
        const v = el.type === 'checkbox' ? String(el.checked) : el.value;
        EDIT_EXPEDIENTS[idx].fieldValuesMap[fid] = v;
      };
      el.addEventListener('change', onChange);
      el.addEventListener('input', onChange);
    });
    row.querySelectorAll("[data-field]").forEach((el) => {
      el.addEventListener("change", () => {
        const field = el.dataset.field;
        let v = el.value;
        if (field === "pipelineId" || field === "stageId") v = Number(v);
        else if (field === "value") v = Number(v) || 0;
        EDIT_EXPEDIENTS[idx][field] = v;

        // Actualizar el puntito de color sin re-renderizar (más fluido)
        if (field === "pipelineId" || field === "stageId") {
          const opt = el.options[el.selectedIndex];
          const newColor = opt?.dataset.color || '#94a3b8';
          const dot = row.querySelector(`[data-color-for="${field}"]`);
          if (dot) dot.style.background = newColor;
        }

        // Si cambió pipeline, resetear stage al primero del nuevo pipeline
        if (field === "pipelineId") {
          const p = PIPELINES.find((p) => p.id === v);
          EDIT_EXPEDIENTS[idx].stageId = p?.stages?.[0]?.id || null;
          renderEditExpedients();
        }
      });
    });
    row.querySelector('[data-action="remove-exp"]').addEventListener("click", () => {
      const exp = EDIT_EXPEDIENTS[idx];
      const label = exp.name || `lead #${idx + 1}`;
      if (exp._isNew || confirm(`¿Eliminar el lead "${label}"?`)) {
        EDIT_EXPEDIENTS.splice(idx, 1);
        renderEditExpedients();
      }
    });
    // Abrir detalle completo del expediente — cierra el modal del contacto y navega
    row.querySelector('[data-action="open-exp"]')?.addEventListener("click", () => {
      const expId = Number(row.querySelector('[data-action="open-exp"]').dataset.expId);
      if (!expId) return;
      // Cerrar modal del contacto antes de navegar
      const modal = document.getElementById('customerModal');
      if (modal) modal.hidden = true;
      openExpDetail(expId, 'contactos');
    });
  });
}

function addEmptyExpedient() {
  if (!PIPELINES.length) {
    toast("No hay pipelines configurados todavía", "error");
    return;
  }
  const p = PIPELINES[0];
  EDIT_EXPEDIENTS.push({
    id: null,
    _isNew: true,
    _tmpId: ++EDIT_EXP_TMP,
    name: "",
    pipelineId: p.id,
    stageId: p.stages[0]?.id || null,
    value: 0
  });
  renderEditExpedients();
}
function commitTagInput() {
  const input = document.getElementById("tagInputField");
  const v = input.value.trim().replace(/,$/, "").trim();
  if (v && !CURRENT_TAGS.includes(v)) {
    CURRENT_TAGS.push(v);
    renderTagChips();
  }
  input.value = "";
}

function setupCustomers() {
  document.getElementById("newCustomerBtn")?.addEventListener("click", () => openCustomerModal());

  document.getElementById("topbarSearchInput")?.addEventListener("input", (e) => {
    if (document.body.dataset.viewActive !== 'contactos') return;
    CUSTOMER_FILTER = e.target.value;
    CUSTOMER_PAGE = 1; // al filtrar, volver a la primera página
    clearTimeout(setupCustomers._t);
    setupCustomers._t = setTimeout(loadCustomers, 200);
  });

  document.getElementById("customersPageSize")?.addEventListener("change", (e) => {
    CUSTOMER_PAGE_SIZE = Number(e.target.value) || 50;
    CUSTOMER_PAGE = 1;
    loadCustomers();
  });

  // Sort dropdown
  const sortToggle = document.getElementById("sortToggle");
  const sortDropdown = document.getElementById("sortDropdown");

  sortToggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !sortDropdown.hidden;
    sortDropdown.hidden = isOpen;
    sortToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Click fuera cierra el dropdown
  document.addEventListener("click", (e) => {
    if (!sortDropdown || sortDropdown.hidden) return;
    if (!sortDropdown.contains(e.target) && e.target !== sortToggle && !sortToggle.contains(e.target)) {
      sortDropdown.hidden = true;
      sortToggle?.setAttribute("aria-expanded", "false");
    }
  });

  // Selección de orden (scoped solo al dropdown de contactos)
  document.querySelectorAll("#sortDropdown .sort-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      CUSTOMER_SORT_BY = opt.dataset.sortBy;
      CUSTOMER_SORT_DIR = opt.dataset.sortDir;
      CUSTOMER_PAGE = 1;
      sortDropdown.hidden = true;
      sortToggle?.setAttribute("aria-expanded", "false");
      loadCustomers();
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeCustomerModal));

  const tagField = document.getElementById("tagInputField");
  tagField?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commitTagInput();
    } else if (e.key === "Backspace" && !tagField.value && CURRENT_TAGS.length) {
      CURRENT_TAGS.pop();
      renderTagChips();
    }
  });
  tagField?.addEventListener("blur", commitTagInput);
  document.getElementById("tagInputBox")?.addEventListener("click", () => tagField?.focus());

  document.getElementById("addExpedientBtn")?.addEventListener("click", addEmptyExpedient);

  document.getElementById("customerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    commitTagInput();
    const fd = new FormData(e.target);
    const payload = {
      firstName: fd.get("firstName").trim(),
      lastName: fd.get("lastName").trim(),
      phone: fd.get("phone").trim(),
      email: fd.get("email").trim(),
      tags: [...CURRENT_TAGS]
    };
    if (!payload.firstName) {
      toast("El nombre es obligatorio", "error");
      return;
    }

    try {
      // 1. Crear o actualizar contacto
      let contactId;
      if (editingCustomerId) {
        await api("PATCH", `/api/contacts/${editingCustomerId}`, payload);
        contactId = editingCustomerId;
      } else {
        const data = await api("POST", "/api/contacts", payload);
        contactId = data.item.id;
      }

      // 2. Diff de expedientes (incluye fieldValues custom)
      const currentIds = new Set(EDIT_EXPEDIENTS.filter((e) => e.id).map((e) => e.id));
      const toDelete = ORIGINAL_EXPEDIENTS.filter((e) => !currentIds.has(e.id)).map((e) => e.id);
      const toCreate = EDIT_EXPEDIENTS.filter((e) => !e.id);
      // Detecta si los fieldValues cambiaron comparando el map editado vs el original
      const fieldValuesDiffers = (e, orig) => {
        const editedMap = e.fieldValuesMap || {};
        const origMap = {};
        (orig.fieldValues || []).forEach(fv => { origMap[fv.fieldId] = fv.value; });
        const allKeys = new Set([...Object.keys(editedMap), ...Object.keys(origMap)]);
        for (const k of allKeys) {
          if (String(editedMap[k] || '') !== String(origMap[k] || '')) return true;
        }
        return false;
      };
      const toUpdate = EDIT_EXPEDIENTS.filter((e) => {
        if (!e.id) return false;
        const orig = ORIGINAL_EXPEDIENTS.find((o) => o.id === e.id);
        if (!orig) return false;
        return orig.name !== e.name
            || orig.pipelineId !== e.pipelineId
            || orig.stageId !== e.stageId
            || Number(orig.value) !== Number(e.value)
            || fieldValuesDiffers(e, orig);
      });

      // 3. Aplicar cambios en paralelo
      await Promise.all([
        ...toDelete.map((id) => api("DELETE", `/api/expedients/${id}`)),
        ...toCreate.map((e) => api("POST", "/api/expedients", {
          contactId,
          pipelineId: e.pipelineId,
          stageId: e.stageId,
          name: e.name,
          value: e.value,
          fieldValues: e.fieldValuesMap || {},
        })),
        ...toUpdate.map((e) => api("PATCH", `/api/expedients/${e.id}`, {
          pipelineId: e.pipelineId,
          stageId: e.stageId,
          name: e.name,
          value: e.value,
          fieldValues: e.fieldValuesMap || {},
        }))
      ]);

      const summary = [];
      if (editingCustomerId) summary.push("Contacto actualizado");
      else summary.push("Contacto creado");
      const expChanged = toDelete.length + toCreate.length + toUpdate.length;
      if (expChanged) summary.push(`${expChanged} lead${expChanged === 1 ? "" : "s"} actualizado${expChanged === 1 ? "" : "s"}`);

      closeCustomerModal();
      await loadCustomers();
      toast(summary.join(" · "), "success");
    } catch (err) {
      toast(`Error: ${err.message}`, "error");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const cm = document.getElementById("customerModal");
      const im = document.getElementById("importModal");
      if (cm && !cm.hidden) closeCustomerModal();
      if (im && !im.hidden) closeImportModal();
    }
  });
}

// ═══════ Importar contactos ═══════
let IMPORT_PARSED = [];
const HEADER_HINTS = ["nombre", "name", "first", "apellido", "last", "correo", "email", "mail", "telefono", "teléfono", "phone", "tel", "celular", "movil", "móvil", "mobile"];

function looksLikeHeader(parts) {
  return parts.some((p) => HEADER_HINTS.some((h) => p.toLowerCase().includes(h)));
}
function smartSplit(line) {
  const seps = [",", ";", "\t", "|"];
  let best = [line];
  for (const s of seps) {
    const parts = splitWithQuotes(line, s);
    if (parts.length > best.length) best = parts;
  }
  return best.map((p) => p.trim());
}
function splitWithQuotes(line, sep) {
  const out = [];
  let cur = "", inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { inQuotes = !inQuotes; continue; }
    if (c === sep && !inQuotes) { out.push(cur); cur = ""; continue; }
    cur += c;
  }
  out.push(cur);
  return out;
}
function normalizePhone(raw) {
  if (!raw) return "";
  const digits = String(raw).replace(/[^\d+]/g, "");
  if (!digits) return "";
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10) return `+52${digits}`;
  if (digits.length >= 11 && digits.startsWith("52")) return `+${digits}`;
  return digits;
}
function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function findLocalDuplicate(row) {
  const phone = normalizePhone(row.phone);
  const email = (row.email || "").trim().toLowerCase();
  return CUSTOMERS.find((c) => {
    if (phone && c.phone && c.phone === phone) return true;
    if (email && c.email && c.email.toLowerCase() === email) return true;
    return false;
  });
}

function parseImportText(text) {
  const rawLines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (!rawLines.length) return [];
  const firstParts = smartSplit(rawLines[0]);
  const startIdx = looksLikeHeader(firstParts) ? 1 : 0;

  const rows = [];
  for (let i = startIdx; i < rawLines.length; i++) {
    const parts = smartSplit(rawLines[i]);
    const [firstName = "", lastName = "", email = "", phone = ""] = parts;
    const row = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: normalizePhone(phone.trim()),
      lineNumber: i + 1
    };

    // Validación
    if (!row.firstName && !row.lastName) {
      row.status = "err";
      row.message = "Sin nombre";
    } else {
      const dupe = findLocalDuplicate(row);
      if (dupe) {
        row.status = "dupe";
        row.message = `Ya existe: ${dupe.firstName} ${dupe.lastName || ""}`.trim();
        row.duplicateId = dupe.id;
      } else {
        const warnings = [];
        if (row.email && !isValidEmail(row.email)) warnings.push("email raro");
        if (row.phone && row.phone.replace(/\D/g, "").length < 7) warnings.push("teléfono corto");
        if (!row.email && !row.phone) warnings.push("sin contacto");
        row.status = warnings.length ? "warn" : "ok";
        row.message = warnings.join(", ");
      }
    }
    rows.push(row);
  }
  return rows;
}

function getDupePolicy() {
  const r = document.querySelector('input[name="dupePolicy"]:checked');
  return r ? r.value : "skip";
}

function renderImportPreview() {
  const preview = document.getElementById("importPreview");
  const summary = document.getElementById("importSummary");
  const body = document.getElementById("importPreviewBody");
  const confirmBtn = document.getElementById("importConfirmBtn");

  if (!IMPORT_PARSED.length) {
    preview.hidden = true;
    confirmBtn.disabled = true;
    return;
  }
  preview.hidden = false;

  const okCount = IMPORT_PARSED.filter((r) => r.status === "ok").length;
  const warnCount = IMPORT_PARSED.filter((r) => r.status === "warn").length;
  const dupeCount = IMPORT_PARSED.filter((r) => r.status === "dupe").length;
  const errCount = IMPORT_PARSED.filter((r) => r.status === "err").length;

  const policy = getDupePolicy();
  // Filas que se procesarán según política
  const willImport = IMPORT_PARSED.filter((r) => {
    if (r.status === "err") return false;
    if (r.status === "dupe" && policy === "skip") return false;
    return true;
  }).length;

  summary.innerHTML = `
    <strong>${IMPORT_PARSED.length}</strong> filas detectadas:
    ${okCount} ✅ válidas · ${warnCount} ⚠️ advertencias · ${dupeCount} 🔄 duplicadas · ${errCount} ❌ inválidas
  `;

  body.innerHTML = IMPORT_PARSED.map((r) => `
    <div class="import-preview-row ${r.status === "err" ? "import-preview-row--err" : ""}">
      <div>${escapeHtml(r.firstName) || "—"}</div>
      <div>${escapeHtml(r.lastName) || "—"}</div>
      <div>${escapeHtml(r.email) || "—"}</div>
      <div>${escapeHtml(r.phone) || "—"}</div>
      <div>
        <span class="import-status import-status--${r.status}" title="${escapeHtml(r.message || "")}">
          ${r.status === "ok" ? "OK" : r.status === "warn" ? "⚠" : r.status === "dupe" ? "🔄" : "✕"}
        </span>
      </div>
    </div>
  `).join("");

  confirmBtn.disabled = willImport === 0;
  confirmBtn.textContent = willImport ? `Importar ${willImport} contacto${willImport === 1 ? "" : "s"}` : "Importar";
}

function openImportModal() {
  IMPORT_PARSED = [];
  document.getElementById("importTextarea").value = "";
  document.getElementById("importFileName").hidden = true;
  document.getElementById("importBulkTag").value = "";
  document.querySelectorAll('input[name="dupePolicy"]').forEach((r, i) => { r.checked = i === 0; });
  renderImportPreview();
  document.querySelectorAll(".import-tab").forEach((t, i) => t.classList.toggle("is-active", i === 0));
  document.querySelectorAll(".import-pane").forEach((p, i) => p.classList.toggle("is-active", i === 0));
  document.getElementById("importModal").hidden = false;
}
function closeImportModal() {
  document.getElementById("importModal").hidden = true;
  IMPORT_PARSED = [];
}

function setupImport() {
  document.getElementById("importCustomersBtn")?.addEventListener("click", openImportModal);
  document.querySelectorAll("[data-close-import]").forEach((el) => el.addEventListener("click", closeImportModal));

  document.querySelectorAll(".import-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.importTab;
      document.querySelectorAll(".import-tab").forEach((t) => t.classList.toggle("is-active", t === tab));
      document.querySelectorAll(".import-pane").forEach((p) => p.classList.toggle("is-active", p.dataset.pane === target));
    });
  });

  document.getElementById("importPasteBtn")?.addEventListener("click", () => {
    const text = document.getElementById("importTextarea").value;
    IMPORT_PARSED = parseImportText(text);
    renderImportPreview();
  });

  // Cambio de política recalcula el contador
  document.querySelectorAll('input[name="dupePolicy"]').forEach((r) => {
    r.addEventListener("change", renderImportPreview);
  });

  // Subir archivo
  const fileInput = document.getElementById("importFileInput");
  const dropzone = document.getElementById("importDropzone");
  const fileName = document.getElementById("importFileName");

  function handleFile(file) {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast("El archivo es demasiado grande (máx 5 MB)", "error");
      return;
    }
    fileName.textContent = `📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    fileName.hidden = false;
    const reader = new FileReader();
    reader.onload = (e) => {
      IMPORT_PARSED = parseImportText(e.target.result);
      renderImportPreview();
    };
    reader.readAsText(file, "utf-8");
  }

  fileInput?.addEventListener("change", (e) => handleFile(e.target.files?.[0]));
  ["dragenter", "dragover"].forEach((ev) => {
    dropzone?.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add("is-dragover"); });
  });
  ["dragleave", "drop"].forEach((ev) => {
    dropzone?.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove("is-dragover"); });
  });
  dropzone?.addEventListener("drop", (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files?.[0]);
  });

  // Confirmar
  document.getElementById("importConfirmBtn")?.addEventListener("click", async () => {
    const dupePolicy = getDupePolicy();
    const importable = IMPORT_PARSED.filter((r) => {
      if (r.status === "err") return false;
      if (r.status === "dupe" && dupePolicy === "skip") return false;
      return true;
    });
    if (!importable.length) return;

    const bulkTag = document.getElementById("importBulkTag").value.trim() || null;

    try {
      const result = await api("POST", "/api/contacts/import", {
        rows: importable.map((r) => ({
          firstName: r.firstName,
          lastName: r.lastName,
          phone: r.phone,
          email: r.email
        })),
        dupePolicy,
        bulkTag
      });
      closeImportModal();
      await loadCustomers();
      const parts = [];
      if (result.created)  parts.push(`${result.created} creados`);
      if (result.updated)  parts.push(`${result.updated} actualizados`);
      if (result.skipped)  parts.push(`${result.skipped} omitidos`);
      if (result.errors)   parts.push(`${result.errors} con error`);
      toast(`✅ Importación lista: ${parts.join(" · ")}`, "success", 5000);
    } catch (err) {
      toast(`Error en importación: ${err.message}`, "error");
    }
  });
}

// ═══════ Asesores ═══════

let _advisors = [];
let _advisorEditId = null;

const PERM_DEFS = [
  { key: 'write',           elId: 'permWrite' },
  { key: 'delete',          elId: 'permDelete' },
  { key: 'view_reports',    elId: 'permReports' },
  { key: 'manage_advisors', elId: 'permManageAdvisors' },
];

async function loadAdvisors() {
  try {
    _advisors = await api('GET', '/api/advisors');
    renderAdvisors();
  } catch (e) {
    if (e?.message?.includes('403')) return; // no tiene permiso
    console.error('loadAdvisors', e);
  }
}

function renderAdvisors() {
  const table  = document.getElementById('advisorsTable');
  const empty  = document.getElementById('advisorsEmpty');
  if (!table) return;

  // Quitar filas anteriores (dejar header y empty)
  table.querySelectorAll('.advisors-row:not(.advisors-row--head)').forEach(r => r.remove());

  const me = getAdvisor();

  if (!_advisors.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const PERM_LABELS = {
    write:           'Escribir',
    delete:          'Eliminar',
    view_reports:    'Reportes',
    manage_advisors: 'Asesores',
  };

  _advisors.forEach(a => {
    const isMe   = me?.id === a.id;
    const isAdmin = a.role === 'admin';
    const perms  = isAdmin
      ? '<span class="adv-perm-tag adv-perm-tag--all">Todo</span>'
      : Object.entries(a.permissions || {})
          .filter(([, v]) => v)
          .map(([k]) => `<span class="adv-perm-tag">${PERM_LABELS[k] || k}</span>`)
          .join('') || '<span class="adv-perm-tag adv-perm-tag--none">Ninguno</span>';

    const initials = (a.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const statusClass = a.active ? 'adv-status--active' : 'adv-status--inactive';
    const statusLabel = a.active ? 'Activo' : 'Inactivo';

    const row = document.createElement('div');
    row.className = 'advisors-row';
    row.innerHTML = `
      <div class="adv-cell-user">
        <div class="adv-avatar">${initials}</div>
        <div>
          <div class="adv-cell-name">${escapeHtml(a.name)}${isMe ? ' <span class="adv-you">Tú</span>' : ''}</div>
          <div class="adv-cell-sub">${escapeHtml(a.username)}</div>
        </div>
      </div>
      <div class="adv-cell-email">${escapeHtml(a.email || '—')}</div>
      <div><span class="chip ${isAdmin ? 'chip--admin' : 'chip--asesor'}">${isAdmin ? 'Admin' : 'Asesor'}</span></div>
      <div class="adv-perms-row">${perms}</div>
      <div class="adv-actions">
        ${!isMe ? `<button class="adv-toggle-btn ${a.active ? 'is-active' : 'is-paused'}" data-id="${a.id}" data-active="${a.active ? '1' : '0'}" title="${a.active ? 'Pausar asesor' : 'Activar asesor'}">
          <span class="adv-toggle-track"><span class="adv-toggle-thumb"></span></span>
          <span class="adv-toggle-label">${a.active ? 'Activo' : 'Pausado'}</span>
        </button>` : ''}
        <button class="icon-btn icon-btn--ghost adv-edit-btn" data-id="${a.id}" title="Editar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
      </div>`;
    table.appendChild(row);
  });

  table.querySelectorAll('.adv-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => openAdvisorModal(Number(btn.dataset.id)));
  });

  table.querySelectorAll('.adv-toggle-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = Number(btn.dataset.id);
      const newActive = btn.dataset.active !== '1';
      try {
        await api('PATCH', `/api/advisors/${id}`, { active: newActive ? 1 : 0 });
        const adv = _advisors.find(a => a.id === id);
        if (adv) adv.active = newActive ? 1 : 0;
        renderAdvisors();
      } catch (e) { toast('Error al actualizar asesor', 'error'); }
    });
  });
}

function openAdvisorModal(id = null) {
  _advisorEditId = id;
  const modal    = document.getElementById('advisorModal');
  const title    = document.getElementById('advisorModalTitle');
  const errEl    = document.getElementById('advisorModalError');
  const delBtn   = document.getElementById('advisorDeleteBtn');
  const passLabel = document.getElementById('advPasswordLabel');

  errEl.hidden = true;

  if (id) {
    const a = _advisors.find(x => x.id === id);
    if (!a) return;
    title.textContent = t('advisor.modal.edit');
    document.getElementById('advName').value     = a.name     || '';
    document.getElementById('advUsername').value = a.username || '';
    document.getElementById('advEmail').value    = a.email    || '';
    document.getElementById('advPassword').value = '';
    passLabel.innerHTML = 'Nueva contraseña <span style="color:var(--text-muted);font-weight:400">(opcional)</span>';
    document.querySelector(`input[name="advRole"][value="${a.role}"]`).checked = true;
    PERM_DEFS.forEach(p => {
      document.getElementById(p.elId).checked = !!a.permissions?.[p.key];
    });
    const me = getAdvisor();
    delBtn.hidden = (me?.id === id); // no puede borrarse a sí mismo
  } else {
    title.textContent = t('advisor.modal.new');
    ['advName','advUsername','advEmail','advPassword'].forEach(id => document.getElementById(id).value = '');
    passLabel.innerHTML = 'Contraseña <span class="int-field-required">*</span>';
    document.querySelector('input[name="advRole"][value="asesor"]').checked = true;
    PERM_DEFS.forEach(p => {
      document.getElementById(p.elId).checked = p.key === 'write';
    });
    delBtn.hidden = true;
  }

  _syncPermsVisibility();
  modal.hidden = false;
}

function _syncPermsVisibility() {
  const role = document.querySelector('input[name="advRole"]:checked')?.value;
  document.getElementById('advPermsSection').style.display = role === 'admin' ? 'none' : '';
}

function setupAdvisors() {
  // Abrir modal nuevo
  document.getElementById('advisorNewBtn')?.addEventListener('click', () => openAdvisorModal());

  // Cerrar modal (X o backdrop). Usamos closest porque el click puede caer en
  // el <svg> o <line> dentro del botón, no en el botón mismo.
  document.getElementById('advisorModal')?.addEventListener('click', e => {
    if (e.target.closest('[data-close-advisor]')) {
      document.getElementById('advisorModal').hidden = true;
    }
  });

  // Cambio de rol → mostrar/ocultar permisos
  document.querySelectorAll('input[name="advRole"]').forEach(r => {
    r.addEventListener('change', _syncPermsVisibility);
  });

  // Guardar
  document.getElementById('advisorSaveBtn')?.addEventListener('click', async () => {
    const errEl = document.getElementById('advisorModalError');
    errEl.hidden = true;

    const name     = document.getElementById('advName').value.trim();
    const username = document.getElementById('advUsername').value.trim();
    const email    = document.getElementById('advEmail').value.trim();
    const password = document.getElementById('advPassword').value;
    const role     = document.querySelector('input[name="advRole"]:checked')?.value || 'asesor';

    if (!name || !username) { showAdvError('Nombre y usuario son obligatorios'); return; }
    if (!_advisorEditId && !password) { showAdvError('La contraseña es obligatoria'); return; }
    if (password && password.length < 6) { showAdvError('La contraseña debe tener al menos 6 caracteres'); return; }

    const permissions = {};
    PERM_DEFS.forEach(p => { permissions[p.key] = document.getElementById(p.elId).checked; });

    const body = { name, username, email: email || null, role, permissions };
    if (password) body.password = password;

    try {
      if (_advisorEditId) {
        await api('PATCH', `/api/advisors/${_advisorEditId}`, body);
      } else {
        await api('POST', '/api/advisors', body);
      }
      document.getElementById('advisorModal').hidden = true;
      await loadAdvisors();
      toast(_advisorEditId ? 'Asesor actualizado' : 'Asesor creado', 'success');
    } catch (e) {
      showAdvError(e.message);
    }
  });

  // Eliminar
  document.getElementById('advisorDeleteBtn')?.addEventListener('click', async () => {
    if (!_advisorEditId) return;
    const a = _advisors.find(x => x.id === _advisorEditId);
    if (!confirm(`¿Eliminar al asesor "${a?.name}"? Esta acción no se puede deshacer.`)) return;
    try {
      await api('DELETE', `/api/advisors/${_advisorEditId}`);
      document.getElementById('advisorModal').hidden = true;
      await loadAdvisors();
      toast('Asesor eliminado', 'success');
    } catch (e) {
      showAdvError(e.message);
    }
  });
}

function showAdvError(msg) {
  const el = document.getElementById('advisorModalError');
  el.textContent = msg;
  el.hidden = false;
}

// ═══════ Tokens de máquina (admin only) ═══════
let _machineTokens = [];

function relTime(ts) {
  if (!ts) return '—';
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (diff < 60) return 'ahora';
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 86400 * 30) return `hace ${Math.floor(diff / 86400)} d`;
  return new Date(ts * 1000).toLocaleDateString();
}

async function loadMachineTokens() {
  try {
    const data = await api('GET', '/api/machine-tokens');
    _machineTokens = data.items || [];
    renderMachineTokens();
  } catch (err) {
    console.error('loadMachineTokens', err);
    toast(err.message || 'Error cargando tokens', 'error');
  }
}

function renderMachineTokens() {
  const table = document.getElementById('mtTable');
  const empty = document.getElementById('mtEmpty');
  if (!table) return;

  table.querySelectorAll('.mt-row:not(.mt-row--head)').forEach(r => r.remove());

  const showRevoked = document.getElementById('mtShowRevoked')?.checked;
  const items = _machineTokens.filter(t => showRevoked || !t.revoked_at);

  if (!items.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  items.forEach(t => {
    const row = document.createElement('div');
    row.className = 'mt-row' + (t.revoked_at ? ' mt-row--revoked' : '');
    const status = t.revoked_at
      ? `<span class="mt-status mt-status--revoked">Revocado</span>`
      : `<span class="mt-status mt-status--active">Activo</span>`;
    const revokeBtn = t.revoked_at
      ? ''
      : `<button class="btn btn--sm btn--danger-ghost" data-mt-revoke="${t.id}">Revocar</button>`;
    row.innerHTML = `
      <div class="mt-name">${escapeHtml(t.name)}</div>
      <div class="mt-prefix"><code>${escapeHtml(t.prefix)}…</code></div>
      <div class="mt-lastuse">${relTime(t.last_used_at)}</div>
      <div class="mt-ip">${escapeHtml(t.last_used_ip || '—')}</div>
      <div>${status}</div>
      <div class="mt-actions-cell">${revokeBtn}</div>
    `;
    table.appendChild(row);
  });
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function setupMachineTokens() {
  const newBtn       = document.getElementById('mtNewBtn');
  const newModal     = document.getElementById('mtNewModal');
  const newName      = document.getElementById('mtNewName');
  const newCreate    = document.getElementById('mtNewCreate');
  const tokenModal   = document.getElementById('mtTokenModal');
  const tokenPlain   = document.getElementById('mtTokenPlain');
  const copyBtn      = document.getElementById('mtCopyBtn');
  const revokeAllBtn = document.getElementById('mtRevokeAllBtn');
  const showRevoked  = document.getElementById('mtShowRevoked');
  const table        = document.getElementById('mtTable');

  if (!newBtn) return;

  newBtn.addEventListener('click', () => {
    if (newName) newName.value = '';
    newModal.hidden = false;
    setTimeout(() => newName?.focus(), 50);
  });

  document.querySelectorAll('[data-close-mt-new]').forEach(el => {
    el.addEventListener('click', () => { newModal.hidden = true; });
  });

  document.querySelectorAll('[data-close-mt-token]').forEach(el => {
    el.addEventListener('click', () => { tokenModal.hidden = true; });
  });

  newCreate.addEventListener('click', async () => {
    const name = (newName.value || '').trim();
    if (!name) { toast('Nombre requerido', 'error'); return; }
    try {
      const r = await api('POST', '/api/machine-tokens', { name });
      newModal.hidden = true;
      tokenPlain.textContent = r.token;
      tokenModal.hidden = false;
      await loadMachineTokens();
    } catch (err) {
      toast(err.message || 'Error generando token', 'error');
    }
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(tokenPlain.textContent);
      toast('Copiado al portapapeles', 'success');
    } catch (_) {
      toast('No se pudo copiar — selecciónalo manualmente', 'error');
    }
  });

  table.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-mt-revoke]');
    if (!btn) return;
    const id = Number(btn.dataset.mtRevoke);
    const tok = _machineTokens.find(t => t.id === id);
    if (!confirm(`¿Revocar el token "${tok?.name || id}"? Las requests con este token recibirán 401.`)) return;
    try {
      await api('DELETE', `/api/machine-tokens/${id}`);
      await loadMachineTokens();
      toast('Token revocado', 'success');
    } catch (err) {
      toast(err.message || 'Error al revocar', 'error');
    }
  });

  revokeAllBtn.addEventListener('click', async () => {
    if (!confirm('Esto va a invalidar TODOS los tokens activos. ¿Continuar?')) return;
    try {
      const r = await api('POST', '/api/machine-tokens/revoke-all');
      await loadMachineTokens();
      toast(`${r.revoked} token(s) revocados`, 'success');
    } catch (err) {
      toast(err.message || 'Error al revocar todos', 'error');
    }
  });

  showRevoked?.addEventListener('change', renderMachineTokens);
}

// ═══════ Dashboard / Inicio ═══════

// ═══════ DASHBOARD ANALYTICS ═══════
let _dashPeriod = 'today';
let _dashAdvisorId = '';
let _dashCompare = false;

const PERIOD_LABELS = {
  get today()     { return t('period.today').toLowerCase(); },
  get yesterday() { return t('period.yesterday').toLowerCase(); },
  get week()      { return t('period.week').toLowerCase(); },
  get month()     { return t('period.month').toLowerCase(); },
  get year()      { return t('period.year').toLowerCase(); },
};

async function loadDashboard() {
  const subtitle = document.getElementById('dashSubtitle');
  if (subtitle) {
    const now = new Date();
    const h = now.getHours();
    const greeting = h < 12 ? t('greeting.morning') : h < 19 ? t('greeting.afternoon') : t('greeting.evening');
    const advisor = _profile?.firstName || _profile?.name || _advisor?.name || '';
    subtitle.textContent = `${greeting}${advisor ? ', ' + advisor : ''} · Analíticas de ${PERIOD_LABELS[_dashPeriod] || _dashPeriod}`;
  }

  try {
    // Cargar advisors para selector (solo si admin y aún no cargados)
    if (_advisor?.role === 'admin') {
      const filter = document.getElementById('dashAdvisorFilter');
      if (filter) filter.hidden = false;
      const select = document.getElementById('dashAdvisorSelect');
      if (select && !select.dataset.loaded) {
        try {
          const r = await api('GET', '/api/analytics/advisors');
          select.innerHTML = '<option value="">Todo el equipo</option>'
            + (r.items || []).map(a => `<option value="${a.id}">${escapeHtml(a.name || a.username)}</option>`).join('');
          select.dataset.loaded = '1';
        } catch (_) {}
      }
    }

    const params = new URLSearchParams({ period: _dashPeriod });
    if (_dashAdvisorId) params.set('advisorId', _dashAdvisorId);
    if (_dashCompare) params.set('compare', '1');
    const d = await api('GET', '/api/analytics/dashboard?' + params.toString());
    renderDashboard(d);
  } catch (err) {
    console.error('loadDashboard', err);
  }
}

function _fmtPct(curr, prev) {
  if (!prev) return curr > 0 ? '+∞' : '—';
  const pct = ((curr - prev) / prev) * 100;
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(0)}%`;
}

function renderDashboard(d) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const fmt = n => (n ?? 0).toLocaleString('es-MX');
  const m = d.metrics || {};
  const prev = d.previous?.metrics || null;

  set('dashMsgReceived', fmt(m.messagesReceived));
  set('dashMsgReceivedToday', prev
    ? `${_fmtPct(m.messagesReceived, prev.messagesReceived)} vs período anterior (${fmt(prev.messagesReceived)})`
    : `${fmt(m.messagesReceived)} en ${PERIOD_LABELS[_dashPeriod]}`);

  set('dashMsgSent', fmt(m.messagesSent));
  set('dashMsgSentToday', prev
    ? `${_fmtPct(m.messagesSent, prev.messagesSent)} vs período anterior (${fmt(prev.messagesSent)})`
    : `${fmt(m.messagesSent)} en ${PERIOD_LABELS[_dashPeriod]}`);

  set('dashContacts', fmt(m.contactsCreated));
  set('dashContactsToday', prev
    ? `${_fmtPct(m.contactsCreated, prev.contactsCreated)} vs período anterior`
    : `nuevos en ${PERIOD_LABELS[_dashPeriod]}`);

  set('dashExps', fmt(m.leadsCreated));
  set('dashConvos', fmt(m.leadsWon || 0));
  set('dashConvosUnread', `${fmt(m.leadsLost || 0)} perdidos · ${fmt(m.tasksCompleted || 0)} tareas hechas`);

  // Calidad de entrega — solo si hubo envíos
  const status = d.deliveryStatus || {};
  const delivered = (status.delivered || 0) + (status.read || 0);
  const failed    = status.failed || 0;
  const pending   = status.sent || 0; // sent sin webhook delivered todavía
  const totalAttempted = delivered + failed + pending;
  const dCard = document.getElementById('dashDeliveryCard');
  if (dCard) {
    if (totalAttempted === 0) {
      dCard.hidden = true;
    } else {
      dCard.hidden = false;
      const successPct = totalAttempted > 0 ? Math.round((delivered / totalAttempted) * 100) : 0;
      set('dashDeliverySuccessRate', `${successPct}%`);
      set('dashDeliveryDelivered', fmt(delivered));
      set('dashDeliveryPending', fmt(pending));
      set('dashDeliveryFailed', fmt(failed));
      // Lista de razones de fallo
      const failures = Array.isArray(d.deliveryFailures) ? d.deliveryFailures : [];
      const failuresWrap = document.getElementById('dashDeliveryFailures');
      const failuresList = document.getElementById('dashDeliveryFailuresList');
      if (failuresWrap && failuresList) {
        if (failures.length === 0) {
          failuresWrap.hidden = true;
        } else {
          failuresWrap.hidden = false;
          failuresList.innerHTML = failures.map(f => {
            const pct = failed > 0 ? Math.round((f.n / failed) * 100) : 0;
            return `<li class="dash-delivery-failure-item">
              <div class="dash-delivery-failure-bar" style="--pct:${pct}%"></div>
              <div class="dash-delivery-failure-info">
                <span class="dash-delivery-failure-reason">${escapeHtml(f.reason)}</span>
                <span class="dash-delivery-failure-count">${fmt(f.n)} (${pct}%)</span>
              </div>
            </li>`;
          }).join('');
        }
      }
    }
  }

  // Breakdown por advisor (solo admin sin filtro)
  const teamCard = document.getElementById('dashTeamCard');
  const teamBody = document.getElementById('dashTeamTbody');
  if (teamCard && teamBody) {
    if (d.byAdvisor && d.byAdvisor.length) {
      teamCard.hidden = false;
      teamBody.innerHTML = d.byAdvisor.map(a => `
        <tr data-advisor-id="${a.id}">
          <td>
            <div class="dash-team-name">${escapeHtml(a.name || a.username)}</div>
            <div class="dash-team-role">${a.role === 'admin' ? 'Admin' : 'Asesor'}</div>
          </td>
          <td>${fmt(a.contacts || 0)}</td>
          <td>${fmt(a.leads || 0)}</td>
          <td>${fmt(a.messages_sent_team || 0)}</td>
          <td>${fmt(a.tasks_completed || 0)}</td>
        </tr>
      `).join('');
      // Click en fila → filtrar por ese advisor
      teamBody.querySelectorAll('tr[data-advisor-id]').forEach(tr => {
        tr.style.cursor = 'pointer';
        tr.addEventListener('click', () => {
          _dashAdvisorId = tr.dataset.advisorId;
          const sel = document.getElementById('dashAdvisorSelect');
          if (sel) sel.value = _dashAdvisorId;
          loadDashboard();
        });
      });
    } else {
      teamCard.hidden = true;
    }
  }

  // Gráfica semanal: si tenemos period=week genera con datos diarios.
  // Por simplicidad, generamos un placeholder de 7 días con los conteos
  // del período actual (no daily breakdown del backend aún).
  renderDashChart([]);
}

function renderDashChart(daily) {
  const chartEl  = document.getElementById('dashChart');
  const labelsEl = document.getElementById('dashChartLabels');
  if (!chartEl || !labelsEl) return;

  // Fill missing days in the last 7
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const found = daily.find(r => r.day === key);
    days.push({ key, sent: found?.sent || 0, received: found?.received || 0 });
  }

  const maxVal = Math.max(...days.map(d => Math.max(d.sent, d.received)), 1);
  const BAR_W = 14;
  const GAP   = 6;
  const H     = 60;
  const PAIR  = BAR_W * 2 + GAP;
  const GROUP = PAIR + 14;
  const W     = GROUP * 7 + 4;

  const bars = days.map((d, i) => {
    const x0 = i * GROUP + 2;
    const hR  = Math.round((d.received / maxVal) * H);
    const hS  = Math.round((d.sent     / maxVal) * H);
    return `
      <rect x="${x0}"            y="${H - hR}" width="${BAR_W}" height="${hR}" rx="3" fill="var(--dash-received)" opacity=".85"/>
      <rect x="${x0 + BAR_W + GAP}" y="${H - hS}" width="${BAR_W}" height="${hS}" rx="3" fill="var(--dash-sent)"     opacity=".85"/>`;
  }).join('');

  chartEl.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="width:100%;height:${H}px;display:block;">${bars}</svg>`;

  const DAY_LABELS = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  labelsEl.innerHTML = days.map(d => {
    const label = DAY_LABELS[new Date(d.key + 'T12:00:00').getDay()];
    return `<span>${label}</span>`;
  }).join('');
}

function setupDashboard() {
  document.getElementById('dashRefreshBtn')?.addEventListener('click', loadDashboard);
  // Pills de período
  document.querySelectorAll('#dashPeriodPills .dash-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      _dashPeriod = pill.dataset.period;
      document.querySelectorAll('#dashPeriodPills .dash-pill').forEach(p => p.classList.toggle('is-active', p === pill));
      loadDashboard();
    });
  });
  // Selector de advisor
  document.getElementById('dashAdvisorSelect')?.addEventListener('change', (e) => {
    _dashAdvisorId = e.target.value;
    loadDashboard();
  });
  // Toggle comparativa
  document.getElementById('dashCompareToggle')?.addEventListener('change', (e) => {
    _dashCompare = e.target.checked;
    loadDashboard();
  });
}

// ═══════ Navegación ═══════
const NAV_VIEWS = new Set(['inicio','chats','pipelines','expedientes','contactos','plantillas','integraciones','bot','ajustes','cuenta','suscripcion','calendario','mail','copiloto','comentarios','pedidos']);

// Filtro de búsqueda de la vista Aplicaciones (topbar)
let _appsSearch = '';
function filterAppsList(q) {
  const term = (q || '').trim().toLowerCase();
  const panes = document.querySelectorAll('.apps-tab-pane');
  panes.forEach(pane => {
    const cards = pane.querySelectorAll('[data-app-name]');
    let visibles = 0;
    cards.forEach(card => {
      const name = (card.dataset.appName || '').toLowerCase();
      const tags = (card.dataset.appTags || '').toLowerCase();
      const match = !term || name.includes(term) || tags.includes(term);
      card.hidden = !match;
      if (match) visibles++;
    });
    const noResults = pane.querySelector('.apps-no-results');
    if (cards.length && term && visibles === 0) {
      if (!noResults) {
        const div = document.createElement('div');
        div.className = 'apps-no-results';
        div.style.cssText = 'padding:24px;text-align:center;color:var(--muted,#64748b);font-size:13px';
        div.textContent = 'Sin resultados para tu búsqueda.';
        pane.appendChild(div);
      } else {
        noResults.hidden = false;
      }
    } else if (noResults) {
      noResults.hidden = true;
    }
  });
}
// ═════════════════════════════════════════════════════════════════
// ROUTER — historial del navegador (back/forward funcionan dentro de la app)
// Hash-based: #/pipelines, #/lead/123, #/bot/45
// ═════════════════════════════════════════════════════════════════
const ROUTER = {
  _suppress: false,  // mientras restauramos desde popstate, no queremos hacer push otra vez

  // parsea location.hash → { type, ...props }
  parse(hash) {
    const h = String(hash || '').replace(/^#\/?/, '');
    if (!h) return null;
    const parts = h.split('/').filter(Boolean);
    if (!parts.length) return null;
    if (parts[0] === 'lead' && parts[1]) return { type: 'lead', id: Number(parts[1]) };
    if (parts[0] === 'bot' && parts[1])  return { type: 'bot',  id: Number(parts[1]) };
    return { type: 'view', view: parts[0] };
  },

  // construye un hash desde el state
  build(state) {
    if (!state) return '';
    if (state.type === 'lead') return `#/lead/${state.id}`;
    if (state.type === 'bot')  return `#/bot/${state.id}`;
    if (state.type === 'view') return `#/${state.view}`;
    return '';
  },

  push(state) {
    if (this._suppress) return;
    const url = this.build(state);
    if (!url) return;
    // Evitar duplicados (ej. clicks repetidos en la misma vista)
    if (history.state && history.state.type === state.type && history.state.view === state.view && history.state.id === state.id) return;
    try { history.pushState(state, '', url); } catch (_) {}
  },

  replace(state) {
    if (this._suppress) return;
    const url = this.build(state);
    if (!url) return;
    try { history.replaceState(state, '', url); } catch (_) {}
  },

  // Llamado en popstate o en boot inicial — restaura la vista sin re-pushear
  async restore(state) {
    if (!state) return false;
    this._suppress = true;
    try {
      if (state.type === 'view') {
        showView(state.view || 'chats');
      } else if (state.type === 'lead') {
        await openExpDetail(state.id, state.from || 'pipelines');
      } else if (state.type === 'bot' && typeof openBotBuilder === 'function') {
        openBotBuilder(state.id);
      }
      return true;
    } catch (_) {
      return false;
    } finally {
      this._suppress = false;
    }
  },
};

// Listener global de back/forward — restaura la vista guardada en el state.
window.addEventListener('popstate', (e) => {
  const state = e.state || ROUTER.parse(location.hash);
  if (state) ROUTER.restore(state);
  // Si no hay state ni hash, dejamos que el navegador maneje (probablemente sale de la app)
});

function showView(viewName) {
  // 'recordatorios' es alias legacy — redirige a calendario en sub-vista lista
  if (viewName === 'recordatorios') {
    showView('calendario');
    switchCalSubView('list');
    return;
  }
  const navItems = document.querySelectorAll(".nav-item");
  const views = document.querySelectorAll(".view");
  const title = document.getElementById("topbarTitle");
  navItems.forEach((n) => {
    n.classList.toggle("is-active", n.dataset.view === viewName);
  });
  views.forEach((v) => { v.hidden = v.dataset.view !== viewName; });
  document.body.dataset.viewActive = viewName;
  if (NAV_VIEWS.has(viewName)) localStorage.setItem('lastView', viewName);
  const labels = { cuenta: "Mi cuenta" };
  const matchingNav = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  title.textContent = labels[viewName] || matchingNav?.querySelector("span")?.textContent || viewName;

  // Toggle pipeline-specific topbar controls
  const searchInput = document.getElementById('topbarSearchInput');
  const plExtras = document.getElementById('topbarPlExtras');
  const topbarActions = document.getElementById('topbarActions');
  if (viewName === 'pipelines') {
    if (searchInput) { searchInput.placeholder = 'Buscar lead…'; searchInput.value = PL_FILTERS.q || ''; }
    if (plExtras) plExtras.hidden = false;
    renderPipelineViewSwitch();
    renderPipelinesBoard();
  } else if (viewName === 'integraciones') {
    // Integraciones ahora vive dentro de Ajustes — redirigir
    showView('ajustes');
    setTimeout(() => {
      document.querySelector('.settings-tab[data-settings="integraciones"]')?.click();
    }, 0);
    return;
  } else if (viewName === 'bot') {
    if (searchInput) { searchInput.placeholder = 'Buscar bots, plantilla, pipeline o etapa…'; searchInput.value = _botSearch || ''; }
    if (plExtras) plExtras.hidden = true;
  } else if (viewName === 'contactos') {
    if (searchInput) { searchInput.placeholder = 'Buscar por nombre, teléfono o email...'; searchInput.value = CUSTOMER_FILTER || ''; }
    if (plExtras) plExtras.hidden = true;
  } else if (viewName === 'expedientes') {
    if (searchInput) { searchInput.placeholder = 'Buscar lead…'; searchInput.value = (EXP_FILTERS && EXP_FILTERS.q) || ''; }
    if (plExtras) plExtras.hidden = true;
  } else if (viewName === 'plantillas') {
    if (searchInput) { searchInput.placeholder = 'Buscar plantilla…'; searchInput.value = (typeof _tplFilter !== 'undefined' ? _tplFilter : '') || ''; }
    if (plExtras) plExtras.hidden = true;
  } else if (viewName === 'pedidos') {
    if (searchInput) { searchInput.placeholder = 'Buscar por #pedido, cliente, domicilio, fecha...'; searchInput.value = ''; }
    if (plExtras) plExtras.hidden = true;
  } else {
    if (searchInput) { searchInput.placeholder = 'Buscar conversaciones...'; searchInput.value = ''; }
    if (plExtras) plExtras.hidden = true;
  }
  const cleanTopbar = (viewName === 'contactos');
  if (title) title.hidden = cleanTopbar;
  const hideActions = cleanTopbar || viewName === 'expedientes' || viewName === 'integraciones' || viewName === 'pipelines' || viewName === 'inicio' || viewName === 'calendario' || viewName === 'plantillas' || viewName === 'bot' || viewName === 'mail' || viewName === 'copiloto' || viewName === 'pedidos';
  if (topbarActions) topbarActions.hidden = hideActions;
  const topbarEl = document.querySelector('.topbar');
  if (topbarEl) topbarEl.hidden = (viewName === 'ajustes' || viewName === 'cuenta' || viewName === 'copiloto');
  const customersExtras = document.getElementById('topbarCustomersExtras');
  if (customersExtras) customersExtras.hidden = (viewName !== 'contactos');
  const expExtras = document.getElementById('topbarExpExtras');
  if (expExtras) expExtras.hidden = (viewName !== 'expedientes');
  const calExtras = document.getElementById('topbarCalExtras');
  if (calExtras) calExtras.hidden = (viewName !== 'calendario');
  const tplExtras = document.getElementById('topbarTplExtras');
  if (tplExtras) tplExtras.hidden = (viewName !== 'plantillas');
  const botExtras = document.getElementById('topbarBotExtras');
  if (botExtras) botExtras.hidden = (viewName !== 'bot');
  const pedidosExtras = document.getElementById('topbarPedidosExtras');
  if (pedidosExtras) pedidosExtras.hidden = (viewName !== 'pedidos');

  if (viewName === 'calendario') {
    if (searchInput) { searchInput.placeholder = t('cal.search.placeholder'); searchInput.value = _tasksSearch; }
  } else {
    _tasksSearch = '';
  }
  if (viewName === 'chats') loadConversations();
  if (viewName === 'inicio') loadDashboard();
  if (viewName === 'mail') { loadMailView(); initMailView(); }
  if (viewName === 'copiloto')   initCopiloto();
  if (viewName === 'comentarios') initComments();
  if (viewName === 'pedidos') { loadPedidosView(); startPedidosPoller(); }
  else stopPedidosPoller();
  if (viewName === 'pipelines') startKanbanWooPoller();
  else stopKanbanWooPoller();

  // Empujar al historial del navegador (no si estamos restaurando vía popstate).
  // 'exp-detail' lo maneja openExpDetail con su propio state (incluye id).
  if (viewName !== 'exp-detail') {
    ROUTER.push({ type: 'view', view: viewName });
  }
}

function setupNav() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      showView(item.dataset.view);
    });
  });

  // Sidebar collapse toggle
  const collapseBtn = document.getElementById('navCollapseBtn');
  const isCollapsed = localStorage.getItem('navCollapsed') === '1';
  if (isCollapsed) document.body.classList.add('nav-collapsed');
  else document.body.classList.add('nav-expanded');

  collapseBtn?.addEventListener('click', () => {
    const collapsed = document.body.classList.toggle('nav-collapsed');
    document.body.classList.toggle('nav-expanded', !collapsed);
    localStorage.setItem('navCollapsed', collapsed ? '1' : '0');
  });
}

// ═══════ Tabs Ajustes ═══════
function setupSettingsTabs() {
  const tabs = document.querySelectorAll(".settings-tab");
  const panes = document.querySelectorAll(".settings-pane");
  const shell = document.querySelector('.settings-shell');
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.settings;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panes.forEach((p) => p.classList.toggle("is-active", p.dataset.settings === target));
      // En mobile: cambiar a vista de detalle (oculta lista, muestra contenido)
      if (shell) shell.classList.add('is-detail-mode');
      if (target === 'papelera') loadTrash();
      if (target === 'tokens-maquina') loadMachineTokens();
      if (target === 'reportes') loadReports();
      if (target === 'negocio') loadBusinessHours();
      if (target === 'suscripcion') loadBilling();
      if (target === 'ia') loadAISettings();
      if (target === 'integraciones') loadIntegrations();
      if (target === 'aplicaciones') loadAppsSection();
    });
  });
  // Botón "Volver" para mobile — vuelve al listado de categorías
  document.getElementById('settingsMobileBack')?.addEventListener('click', () => {
    if (shell) shell.classList.remove('is-detail-mode');
    tabs.forEach((t) => t.classList.remove('is-active'));
    panes.forEach((p) => p.classList.remove('is-active'));
  });

  const AI_DEFAULT_MODELS = { anthropic: 'claude-opus-4-7', openai: 'gpt-4o-mini', google: 'gemini-1.5-flash', ollama: 'gemma2:9b' };
  const AI_KEY_PLACEHOLDERS = { anthropic: 'sk-ant-...', openai: 'sk-...', google: 'AIza...', ollama: '(sin API key)' };

  let _savedAIState = { provider: null, hasKey: false };

  function applyAIProviderUI(provider) {
    document.querySelectorAll('.ai-provider').forEach(el => el.classList.remove('is-selected'));
    const radio = document.querySelector(`.ai-provider input[value="${provider}"]`);
    if (radio) { radio.checked = true; radio.closest('.ai-provider').classList.add('is-selected'); }
    const urlField = document.getElementById('aiBaseUrl');
    const keyField = document.getElementById('aiApiKey');
    if (urlField) urlField.disabled = (provider !== 'ollama');
    if (keyField) keyField.placeholder = AI_KEY_PLACEHOLDERS[provider] || 'API Key';
    if (provider === 'ollama' && urlField && !urlField.value) urlField.value = 'http://localhost:11434';
    updateAIConnectionUI();
  }

  function renderConnectedBadges() {
    document.querySelectorAll('.ai-provider-connected-badge').forEach(b => b.remove());
    if (!_savedAIState.hasKey || !_savedAIState.provider) return;
    const label = document.querySelector(`.ai-provider input[value="${_savedAIState.provider}"]`)?.closest('.ai-provider');
    if (label) {
      const badge = document.createElement('span');
      badge.className = 'ai-provider-connected-badge';
      badge.textContent = '✓ Conectado';
      label.appendChild(badge);
    }
  }

  function updateAIConnectionUI() {
    const selected = document.querySelector('.ai-provider input:checked')?.value;
    const disconnBtn = document.getElementById('btnDisconnectAI');
    const isCurrentSavedAndConnected = !!selected && selected === _savedAIState.provider && _savedAIState.hasKey;
    if (disconnBtn) disconnBtn.hidden = !isCurrentSavedAndConnected;
    const keyEl = document.getElementById('aiApiKey');
    if (keyEl) {
      if (isCurrentSavedAndConnected && !keyEl.value) {
        keyEl.placeholder = '••••••••••••';
      } else {
        keyEl.placeholder = AI_KEY_PLACEHOLDERS[selected] || 'API Key';
      }
    }
    renderConnectedBadges();
  }

  document.querySelectorAll('.ai-provider input').forEach(input => {
    input.addEventListener('change', () => {
      applyAIProviderUI(input.value);
      const modelEl = document.getElementById('aiModel');
      if (modelEl && !modelEl.dataset.userEdited) modelEl.value = AI_DEFAULT_MODELS[input.value] || '';
      const keyEl = document.getElementById('aiApiKey');
      if (keyEl) keyEl.value = '';
    });
  });
  document.getElementById('aiModel')?.addEventListener('input', function() { this.dataset.userEdited = '1'; });

  async function loadAISettings() {
    try {
      const s = await api('GET', '/api/settings/ai');
      _savedAIState = { provider: s.provider, hasKey: !!s.hasApiKey || s.provider === 'ollama' };
      applyAIProviderUI(s.provider);
      const modelEl = document.getElementById('aiModel');
      if (modelEl) { modelEl.value = s.model || AI_DEFAULT_MODELS[s.provider] || ''; modelEl.dataset.userEdited = ''; }
      const urlEl = document.getElementById('aiBaseUrl');
      if (urlEl) urlEl.value = s.baseUrl || '';
      const modeEl = document.getElementById('aiMode');
      if (modeEl) modeEl.value = s.mode || 'suggest';
      const tempEl = document.getElementById('aiTemperature');
      if (tempEl) tempEl.value = s.temperature ?? 0.7;
      const tokEl = document.getElementById('aiMaxTokens');
      if (tokEl) tokEl.value = s.maxTokens ?? 2048;
      updateAIConnectionUI();
    } catch(e) { console.error('loadAISettings', e); }
  }

  document.getElementById('btnDisconnectAI')?.addEventListener('click', async () => {
    if (!confirm('¿Eliminar el API key guardado? Tendrás que volver a conectar la IA.')) return;
    const btn = document.getElementById('btnDisconnectAI');
    btn.disabled = true; btn.textContent = 'Desconectando…';
    try {
      await api('PATCH', '/api/settings/ai', { clearApiKey: true });
      const keyEl = document.getElementById('aiApiKey');
      const statusEl = document.getElementById('aiTestStatus');
      if (keyEl) keyEl.value = '';
      if (statusEl) { statusEl.style.color = 'var(--text-muted)'; statusEl.textContent = 'API key eliminado'; setTimeout(() => { statusEl.textContent = ''; }, 2000); }
      _savedAIState = { provider: _savedAIState.provider, hasKey: false };
      updateAIConnectionUI();
      applyAIConditionalVisibility();
    } catch(e) {
      alert('Error: ' + e.message);
    } finally {
      btn.disabled = false; btn.textContent = 'Desconectar';
    }
  });

  document.getElementById('btnSaveAI')?.addEventListener('click', async () => {
    const btn = document.getElementById('btnSaveAI');
    const statusEl = document.getElementById('aiTestStatus');
    btn.disabled = true; btn.textContent = 'Guardando…';
    try {
      const provider = document.querySelector('.ai-provider input:checked')?.value || 'anthropic';
      const apiKeyVal = document.getElementById('aiApiKey')?.value || '';
      const body = {
        provider,
        model:       document.getElementById('aiModel')?.value || '',
        baseUrl:     document.getElementById('aiBaseUrl')?.value || '',
        mode:        document.getElementById('aiMode')?.value || 'suggest',
        temperature: document.getElementById('aiTemperature')?.value,
        maxTokens:   document.getElementById('aiMaxTokens')?.value,
      };
      if (apiKeyVal && !apiKeyVal.startsWith('•')) body.apiKey = apiKeyVal;
      await api('PATCH', '/api/settings/ai', body);
      btn.textContent = 'Guardado ✓';
      if (statusEl) { statusEl.textContent = ''; }
      const hasKeyNow = (apiKeyVal && !apiKeyVal.startsWith('•')) || provider === 'ollama' || _savedAIState.hasKey && _savedAIState.provider === provider;
      _savedAIState = { provider, hasKey: !!hasKeyNow };
      updateAIConnectionUI();
      applyAIConditionalVisibility();
      setTimeout(() => { btn.textContent = 'Guardar cambios'; btn.disabled = false; }, 1800);
    } catch(e) {
      btn.textContent = 'Guardar cambios'; btn.disabled = false;
      if (statusEl) { statusEl.style.color = '#ef4444'; statusEl.textContent = 'Error: ' + e.message; }
    }
  });

  document.getElementById('btnTestAI')?.addEventListener('click', async () => {
    const btn = document.getElementById('btnTestAI');
    const saveBtn = document.getElementById('btnSaveAI');
    const statusEl = document.getElementById('aiTestStatus');
    btn.disabled = true; btn.textContent = 'Guardando…';
    if (statusEl) { statusEl.textContent = ''; }
    try {
      // Guardar primero
      const provider = document.querySelector('.ai-provider input:checked')?.value || 'anthropic';
      const apiKeyVal = document.getElementById('aiApiKey')?.value || '';
      const body = {
        provider,
        model:       document.getElementById('aiModel')?.value || '',
        baseUrl:     document.getElementById('aiBaseUrl')?.value || '',
        mode:        document.getElementById('aiMode')?.value || 'suggest',
        temperature: document.getElementById('aiTemperature')?.value,
        maxTokens:   document.getElementById('aiMaxTokens')?.value,
      };
      if (apiKeyVal && !apiKeyVal.startsWith('•')) body.apiKey = apiKeyVal;
      await api('PATCH', '/api/settings/ai', body);
      if (saveBtn) { saveBtn.textContent = 'Guardado ✓'; setTimeout(() => { saveBtn.textContent = 'Guardar cambios'; }, 1800); }
      // Luego probar
      btn.textContent = 'Probando…';
      await api('POST', '/api/settings/ai/test', {});
      if (statusEl) { statusEl.style.color = '#22c55e'; statusEl.textContent = '✓ Conexión exitosa'; }
    } catch(e) {
      if (statusEl) { statusEl.style.color = '#ef4444'; statusEl.textContent = '✗ ' + (e.message || 'Error de conexión'); }
    } finally {
      btn.textContent = 'Probar conexión'; btn.disabled = false;
    }
  });

  // Switch: mostrar alarmas de leads estancados en pipelines
  const alarmsToggle = document.getElementById('cfgPlAlarmsEnabled');
  if (alarmsToggle) {
    const enabled = (() => { try { return localStorage.getItem('plAlarmsEnabled') !== '0'; } catch { return true; } })();
    alarmsToggle.checked = enabled;
    alarmsToggle.addEventListener('change', () => {
      try { localStorage.setItem('plAlarmsEnabled', alarmsToggle.checked ? '1' : '0'); } catch {}
      // Re-renderizar el tablero si está visible para reflejar el cambio
      if (document.body.dataset.viewActive === 'pipelines') renderPipelinesBoard();
    });
  }

  // Switch: habilitar módulo de Citas (oculta/muestra la sección)
  const apptToggle = document.getElementById('cfgAppointmentsEnabled');
  if (apptToggle) {
    apptToggle.checked = isAppointmentsEnabled();
    apptToggle.addEventListener('change', () => {
      try { localStorage.setItem('appointmentsEnabled', apptToggle.checked ? '1' : '0'); } catch {}
      applyAppointmentsVisibility();
    });
  }

  // Switch: habilitar valor de lead
  const lvToggle = document.getElementById('cfgLeadValueEnabled');
  if (lvToggle) {
    lvToggle.checked = isLeadValueEnabled();
    lvToggle.addEventListener('change', () => {
      try { localStorage.setItem('leadValueEnabled', lvToggle.checked ? '1' : '0'); } catch {}
      applyLeadValueVisibility();
    });
  }

  // Selector de idioma
  const localeSelect = document.getElementById('cfgLocaleSelect');
  if (localeSelect) {
    localeSelect.value = getLocale();
    localeSelect.addEventListener('change', () => {
      setLocale(localeSelect.value);
      // Re-render de listas dinámicas que tengan strings traducibles
      try { if (typeof renderChatList === 'function' && CONVERSATIONS?.length) renderChatList(); } catch (_) {}
      try { if (typeof renderBotList === 'function' && sbBots?.length) renderBotList(); } catch (_) {}
      const langName = localeSelect.options[localeSelect.selectedIndex].text;
      toast(`✓ ${langName}`, 'success');
    });
  }

  _setupSplitSettings();
}

// ═══════ Integraciones ═══════

const PROVIDER_ICONS = {
  'whatsapp': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.6 8.6 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L2 21l1.658-6.054a9.84 9.84 0 0 1-1.323-4.918C2.338 5.387 7.277.448 13.28.448c2.916 0 5.656 1.137 7.712 3.199 2.055 2.063 3.188 4.805 3.187 7.722-.003 6.027-4.943 10.967-10.968 10.967z"/></svg>`,

  'whatsapp-lite': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a8.6 8.6 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L2 21l1.658-6.054a9.84 9.84 0 0 1-1.323-4.918C2.338 5.387 7.277.448 13.28.448c2.916 0 5.656 1.137 7.712 3.199 2.055 2.063 3.188 4.805 3.187 7.722-.003 6.027-4.943 10.967-10.968 10.967z"/></svg>`,

  'messenger': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 4.973 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.973 18.627 0 12 0zm1.194 14.963-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.26 5.957-3.26-6.628 6.963z"/></svg>`,

  'instagram': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,

  'telegram': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,

  'tiktok': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.5V6.73a4.85 4.85 0 0 1-1-.04z"/></svg>`,

  'woocommerce': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M2.2 2.6C1 2.6 0 3.6 0 4.8v11.6c0 1.2 1 2.2 2.2 2.2h5l2.8 2.8 2.8-2.8H21.8c1.2 0 2.2-1 2.2-2.2V4.8c0-1.2-1-2.2-2.2-2.2zm3 4.6c.5 0 .9.3 1 .9l.9 4.2 1-3.2c.2-.5.5-.8.9-.8.4 0 .7.3.9.8l1 3.2.9-4.2c.1-.6.5-.9 1-.9.5.1.8.5.7 1l-1.4 5.2c-.1.6-.5.9-1.1.9-.4 0-.7-.2-.9-.7l-1-3.2-1 3.2c-.2.5-.5.7-.9.7-.6 0-1-.3-1.1-.9L3.5 8.2c-.1-.5.2-.9.7-1zm10.8 0c1.6 0 2.7 1.2 2.7 2.8S17.6 12.8 16 12.8s-2.7-1.2-2.7-2.8 1.1-2.8 2.7-2.8zm0 1.3c-.9 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5 1.5-.7 1.5-1.5-.6-1.5-1.5-1.5zm5.3-.9v2.3c0 1 .7 1.8 1.6 1.8v1.3c-1.6 0-2.8-1.3-2.8-2.9v-.8l-.5-.1v-1l.5-.1V7.6h1.2z"/></svg>`,

  'shopify': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M15.337.009s-.137-.009-.273-.009c-.092 0-.23.025-.368.057C14.397.092 13.5.46 13.5.46s-.57-.156-1.24-.156C9.48.304 7.963 2.15 7.41 4.097c-.781.24-1.33.41-1.347.416C5.38 4.826 5.354 4.851 5.34 5.547L4.154 19.4l9.614 1.603L18.846 19.4 17.66 5.547c-.014-.696-.04-.721-.714-.914-.017-.006-.55-.17-1.347-.416C15.044 1.27 15.2.734 15.337.009zM13.774 1.04l-.005.094c-.48.146-.988.3-1.506.46l-.008-.028c.016-.008.033-.017.051-.026.235-.123.484-.247.74-.363.236-.11.49-.155.728-.137zm-1.514 1.378c.048.166.096.333.148.499-.6.183-1.252.382-1.916.585.16-.58.45-1.095.85-1.48.29-.276.616-.476.918-.572zm2.49-.79c-.11.37-.268.8-.49 1.235l-.245.075c-.063-.215-.126-.43-.194-.643.17-.092.345-.176.527-.25.135-.054.268-.1.402-.137v-.28zm-3.786 9.944-.71-.067.06-.56.768.072.02-.2-.768-.072.054-.512.73.07.02-.2-.73-.07.055-.527 1.07.1-.02.2-1.07-.1v.528l1.01.095-.018.2-1.01-.096v.56l.77.072-.062.56-.77-.072v.2l.74.07.062.56-.74-.07.2 1.887-1.255.118-.2-1.887-.73.07-.062-.56.73-.07-.065-.6-.77.073-.062-.56.77-.073v-.528l-1.07.1-.02-.2 1.07-.1.056.527.73-.07.02.2-.73.07v.512l.768-.072.02.2-.768.072.018.2.71.067z"/></svg>`,

  'square': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 0h-11A6.5 6.5 0 0 0 0 6.5v11A6.5 6.5 0 0 0 6.5 24h11A6.5 6.5 0 0 0 24 17.5v-11A6.5 6.5 0 0 0 17.5 0zM16 16H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z"/></svg>`,
  'gmail': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
  'outlook': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72q.07.04.11.1.03.06.03.13zm-7.98-4.67-1.75 8.12h1.3l1.02-5.42 1.6 5.42h1.08l1.62-5.42 1 5.42h1.28L23.5 7.33h-1.37l-1.5 5.2-1.5-5.2h-1.11z"/></svg>`,
  'email': `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`,
};

let INTEGRATIONS = [];
let INT_EDIT = null;
let OUTGOING_WEBHOOKS = [];
let WH_EDIT = null;
let ROUTING_INTEGRATION_ID = null;
const ALL_WH_EVENTS = [
  { key: 'message.received',        label: 'Mensaje recibido' },
  { key: 'message.sent',            label: 'Mensaje enviado' },
  { key: 'contact.created',         label: 'Contacto creado' },
  { key: 'contact.updated',         label: 'Contacto actualizado' },
  { key: 'expedient.created',       label: 'Lead creado' },
  { key: 'expedient.stage_changed', label: 'Lead cambió de etapa' },
  { key: 'expedient.closed',        label: 'Lead cerrado' },
];

async function loadIntegrations() {
  try {
    const data = await api("GET", "/api/integrations");
    INTEGRATIONS = data.items;
    renderIntegrations();
    updateMailNavVisibility();
  } catch (err) {
    console.error("Error cargando integraciones:", err);
  }
}

async function loadOutgoingWebhooks() {
  try {
    const data = await api("GET", "/api/outgoing-webhooks");
    OUTGOING_WEBHOOKS = data.items;
    renderOutgoingWebhooks();
  } catch (err) {
    console.error("Error cargando webhooks salientes:", err);
  }
}

function oauthIcon(providerKey, hasExisting) {
  if (hasExisting) return t('oauth.connect.more');
  if (providerKey === 'outlook')   return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72q.07.04.11.1.03.06.03.13zm-7.98-4.67-1.75 8.12h1.3l1.02-5.42 1.6 5.42h1.08l1.62-5.42 1 5.42h1.28L23.5 7.33h-1.37l-1.5 5.2-1.5-5.2h-1.11z"/></svg> Conectar con Outlook`;
  if (providerKey === 'gmail')     return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> Conectar con Gmail`;
  if (providerKey === 'tiktok')    return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.78 1.5V6.73a4.85 4.85 0 0 1-1-.04z"/></svg> ${t('oauth.connect.tiktok')}`;
  if (providerKey === 'instagram') return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> ${t('oauth.connect.instagram')}`;
  return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.373 0 0 4.973 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.973 18.627 0 12 0zm1.194 14.963-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.26 5.957-3.26-6.628 6.963z"/></svg> ${t('oauth.connect.facebook')}`;
}

function renderIntegrations() {
  const root = document.getElementById("integrationsGrid");
  if (!root) return;

  const cards = INTEGRATIONS.map((p) => {
    const isOAuth = p.authType && p.authType.startsWith('oauth_');
    const connected = (p.integrations || []).filter((i) => i.status === "connected");
    const errored = (p.integrations || []).filter((i) => i.status === "error");
    const connecting = (p.integrations || []).filter((i) => i.status === "connecting" || i.status === "pending");
    const hasAny = connected.length + errored.length > 0;
    const dotClass = errored.length ? "is-error" : connected.length ? "is-connected" : connecting.length ? "is-connecting" : "";

    const icon = PROVIDER_ICONS[p.key] || escapeHtml(p.initial || p.name[0]);

    const accountsHtml = (p.integrations || []).map((inst) => {
      const routingLabel = inst.routing
        ? `${escapeHtml(inst.routing.pipelineName || '')} › ${escapeHtml(inst.routing.stageName || '')}`
        : 'Sin pipeline asignado';
      const isErr = inst.status === 'error';
      const isConnecting = inst.status === 'connecting' || inst.status === 'pending';
      const metaClass = isErr ? 'is-error' : isConnecting ? 'is-connecting' : '';
      const metaText = isErr ? '⚠ ' + escapeHtml(inst.lastError || 'Error')
                     : isConnecting ? '⏳ Esperando escaneo de QR…'
                     : routingLabel;
      return `
        <div class="int-account-row">
          <div class="int-account-avatar" style="background:${p.color}">${icon}</div>
          <div class="int-account-info">
            <div class="int-account-name">${escapeHtml(inst.displayName || p.name)}</div>
            <div class="int-account-meta ${metaClass}">${metaText}</div>
          </div>
          <div class="int-account-actions">
            <button class="btn btn--xs btn--ghost" data-action="routing" data-id="${inst.id}" title="Configurar pipeline">Pipeline</button>
            <button class="btn btn--xs btn--ghost" data-action="edit-instance" data-provider="${p.key}" data-id="${inst.id}" title="Editar">${isOAuth ? 'Ver' : 'Editar'}</button>
            <button class="btn btn--xs btn--danger-ghost" data-action="disconnect" data-id="${inst.id}" data-name="${escapeHtml(inst.displayName || p.name)}" title="Desconectar">✕</button>
          </div>
        </div>`;
    }).join("");

    const connectBtn = isOAuth
      ? `<button class="btn btn--ghost" data-action="oauth" data-provider="${p.key}" data-auth="${p.authType}">${connected.length ? '+ Conectar otra' : 'Conectar'}</button>`
      : `<button class="btn btn--ghost" data-action="manual" data-provider="${p.key}">${connected.length ? '+ Conectar otra' : 'Conectar'}</button>`;

    let badgeHtml;
    if (connected.length) badgeHtml = '<span class="int-badge-connected">Conectado</span>';
    else if (connecting.length) badgeHtml = '<span class="int-badge-connecting">Esperando QR…</span>';
    else badgeHtml = `<span class="int-status-dot ${dotClass}"></span>`;

    return `
      <div class="int-card${connected.length ? ' int-card--connected' : ''}${connecting.length && !connected.length ? ' int-card--connecting' : ''}">
        <div class="int-card-head">
          <span class="int-icon" style="background:${p.color}">${icon}</span>
          <div class="int-name">
            ${escapeHtml(p.name)}
            ${badgeHtml}
          </div>
        </div>
        <p class="int-desc">${escapeHtml(p.description)}</p>
        ${accountsHtml ? `<div class="int-accounts">${accountsHtml}</div>` : ''}
        <div class="int-card-actions">
          ${connectBtn}
        </div>
      </div>`;
  });

  root.innerHTML = cards.join("") + renderOutgoingWebhooksCard();
  bindIntegrationListeners(root);
  bindOutgoingWebhookCardListeners(root);
}

function bindIntegrationListeners(root) {
  root.querySelectorAll('[data-action="oauth"]').forEach((btn) => {
    btn.addEventListener("click", () => connectOAuth(btn.dataset.provider, btn.dataset.auth));
  });
  root.querySelectorAll('[data-action="manual"]').forEach((btn) => {
    btn.addEventListener("click", () => openIntegrationModal(btn.dataset.provider));
  });
  root.querySelectorAll('[data-action="edit-instance"]').forEach((btn) => {
    btn.addEventListener("click", () => openIntegrationModal(btn.dataset.provider, Number(btn.dataset.id)));
  });
  root.querySelectorAll('[data-action="routing"]').forEach((btn) => {
    btn.addEventListener("click", () => openRoutingModal(Number(btn.dataset.id)));
  });
  root.querySelectorAll('[data-action="disconnect"]').forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (!confirm(`¿Desconectar "${btn.dataset.name}"?`)) return;
      try {
        await api("DELETE", `/api/integrations/${btn.dataset.id}`);
        await loadIntegrations();
        // Re-evaluar visibilidad del nav 'Comentarios' (puede que se haya
        // desconectado la única integración FB/IG conectada)
        applySocialCommentsVisibility().catch(() => {});
        toast("Integración desconectada", "success");
      } catch (err) {
        toast(`Error: ${err.message}`, "error");
      }
    });
  });
}

// ─── Solicitar integración (votación) ───
const VOTE_CATALOG = [
  { key:'mailchimp',      name:'Mailchimp',        category:'Email',          color:'#FFE01B', textColor:'#222' },
  { key:'sendgrid',       name:'SendGrid',          category:'Email',          color:'#1A82E2', textColor:'#fff' },
  { key:'brevo',          name:'Brevo',             category:'Email',          color:'#0B996E', textColor:'#fff' },
  { key:'resend',         name:'Resend',            category:'Email',          color:'#000000', textColor:'#fff' },
  { key:'mandrill',       name:'Mandrill',          category:'Email',          color:'#F7C948', textColor:'#222' },
  { key:'postmark',       name:'Postmark',          category:'Email',          color:'#FFCC00', textColor:'#222' },
  { key:'mailjet',        name:'Mailjet',           category:'Email',          color:'#FF6600', textColor:'#fff' },
  { key:'mercadopago',    name:'MercadoPago',       category:'Pagos',          color:'#009EE3', textColor:'#fff' },
  { key:'paypal',         name:'PayPal',            category:'Pagos',          color:'#003087', textColor:'#fff' },
  { key:'conekta',        name:'Conekta',           category:'Pagos',          color:'#0066CC', textColor:'#fff' },
  { key:'clip',           name:'Clip',              category:'Pagos',          color:'#00B4F0', textColor:'#fff' },
  { key:'openpay',        name:'OpenPay',           category:'Pagos',          color:'#FF5A00', textColor:'#fff' },
  { key:'kueskipay',      name:'Kueski Pay',        category:'Pagos',          color:'#5B2D8E', textColor:'#fff' },
  { key:'twilio',         name:'Twilio',            category:'SMS',            color:'#F22F46', textColor:'#fff' },
  { key:'vonage',         name:'Vonage',            category:'SMS',            color:'#7B00D4', textColor:'#fff' },
  { key:'telnyx',         name:'Telnyx',            category:'SMS',            color:'#00C389', textColor:'#fff' },
  { key:'n8n',            name:'n8n',               category:'Automatización', color:'#EA4B71', textColor:'#fff' },
  { key:'make',           name:'Make',              category:'Automatización', color:'#6D00CC', textColor:'#fff' },
  { key:'zapier',         name:'Zapier',            category:'Automatización', color:'#FF4A00', textColor:'#fff' },
  { key:'activepieces',   name:'ActivePieces',      category:'Automatización', color:'#6E41E2', textColor:'#fff' },
  { key:'hubspot',        name:'HubSpot',           category:'CRM',            color:'#FF7A59', textColor:'#fff' },
  { key:'pipedrive',      name:'Pipedrive',         category:'CRM',            color:'#007BFF', textColor:'#fff' },
  { key:'zoho',           name:'Zoho CRM',          category:'CRM',            color:'#C8202F', textColor:'#fff' },
  { key:'salesforce',     name:'Salesforce',        category:'CRM',            color:'#00A1E0', textColor:'#fff' },
  { key:'tiendanube',     name:'Tiendanube',        category:'Ecommerce',      color:'#00C4CC', textColor:'#fff' },
  { key:'prestashop',     name:'PrestaShop',        category:'Ecommerce',      color:'#CB2027', textColor:'#fff' },
  { key:'vtex',           name:'VTEX',              category:'Ecommerce',      color:'#F71963', textColor:'#fff' },
  { key:'magento',        name:'Magento',           category:'Ecommerce',      color:'#F26322', textColor:'#fff' },
  { key:'google_sheets',  name:'Google Sheets',     category:'Productividad',  color:'#0F9D58', textColor:'#fff' },
  { key:'airtable',       name:'Airtable',          category:'Productividad',  color:'#18BFFF', textColor:'#fff' },
  { key:'notion',         name:'Notion',            category:'Productividad',  color:'#000000', textColor:'#fff' },
  { key:'trello',         name:'Trello',            category:'Productividad',  color:'#0052CC', textColor:'#fff' },
  { key:'google_calendar',name:'Google Calendar',   category:'Calendario',     color:'#4285F4', textColor:'#fff' },
  { key:'calendly',       name:'Calendly',          category:'Calendario',     color:'#006BFF', textColor:'#fff' },
  { key:'cal',            name:'Cal.com',           category:'Calendario',     color:'#111827', textColor:'#fff' },
  { key:'slack',          name:'Slack',             category:'Chat',           color:'#4A154B', textColor:'#fff' },
  { key:'discord',        name:'Discord',           category:'Chat',           color:'#5865F2', textColor:'#fff' },
];

let VOTE_STATE = null; // { votes, myLast, canVote, nextVoteAt }

async function loadVotes() {
  try {
    VOTE_STATE = await api('GET', '/api/integration-votes');
    renderVotes();
  } catch(e) { console.error('votes', e); }
}

function renderVotes() {
  if (!VOTE_STATE) return;
  const { votes, canVote, nextVoteAt, myLast } = VOTE_STATE;
  const voteMap = {};
  for (const v of votes) voteMap[v.integration_key] = (voteMap[v.integration_key] || 0) + v.total;

  // Status banner
  const statusEl = document.getElementById('voteStatus');
  if (statusEl) {
    if (canVote) {
      statusEl.innerHTML = `<span class="vote-badge vote-badge--ok">✓ Puedes votar ahora</span>`;
    } else {
      const d = new Date(nextVoteAt * 1000).toLocaleDateString('es-MX', { day:'numeric', month:'long' });
      const myName = myLast?.custom_name || VOTE_CATALOG.find(c => c.key === myLast?.integration_key)?.name || myLast?.integration_key || '';
      statusEl.innerHTML = `<span class="vote-badge vote-badge--wait">Votaste por <b>${escapeHtml(myName)}</b> — siguiente voto el ${d}</span>`;
    }
  }

  const query = (document.getElementById('voteSearch')?.value || '').toLowerCase();
  const sorted = [...VOTE_CATALOG]
    .map(c => ({ ...c, votes: voteMap[c.key] || 0 }))
    .filter(c => !query || c.name.toLowerCase().includes(query) || c.category.toLowerCase().includes(query))
    .sort((a, b) => b.votes - a.votes);

  const grid = document.getElementById('voteGrid');
  if (!grid) return;

  const maxVotes = sorted[0]?.votes || 0;
  grid.innerHTML = sorted.map((item, idx) => {
    const isTop = idx === 0 && item.votes > 0;
    const isMyVote = myLast?.integration_key === item.key;
    const initial = item.name.slice(0,2).toUpperCase();
    return `<div class="vote-card${isTop ? ' vote-card--top' : ''}${isMyVote ? ' vote-card--mine' : ''}">
      ${isTop ? '<div class="vote-card-crown">🏆 #1</div>' : ''}
      <div class="vote-icon" style="background:${item.color};color:${item.textColor}">${initial}</div>
      <div class="vote-info">
        <div class="vote-name">${escapeHtml(item.name)}</div>
        <div class="vote-cat">${escapeHtml(item.category)}</div>
      </div>
      <div class="vote-count-wrap">
        <div class="vote-bar-bg"><div class="vote-bar-fill" style="width:${maxVotes ? Math.round(item.votes/maxVotes*100) : 0}%"></div></div>
        <span class="vote-count">${item.votes} voto${item.votes !== 1 ? 's' : ''}</span>
      </div>
      ${canVote
        ? `<button class="btn btn--ghost btn--sm vote-btn" data-key="${item.key}">Votar</button>`
        : isMyVote
        ? `<span class="vote-badge vote-badge--mine">Mi voto</span>`
        : `<button class="btn btn--ghost btn--sm vote-btn" data-key="${item.key}" disabled>Votar</button>`
      }
    </div>`;
  }).join('');

  grid.querySelectorAll('.vote-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => castVote(btn.dataset.key));
  });

  // Custom vote button
  const customBtn = document.getElementById('voteCustomBtn');
  if (customBtn) customBtn.disabled = !canVote;
}

async function castVote(key, customName) {
  try {
    await api('POST', '/api/integration-votes', { key, customName });
    await loadVotes();
    toast('¡Voto registrado!', 'success');
  } catch(err) {
    toast(err.message || 'Error al votar', 'error');
  }
}

function initVoteTab() {
  document.getElementById('voteSearch')?.addEventListener('input', renderVotes);
  document.getElementById('voteCustomBtn')?.addEventListener('click', () => {
    const name = document.getElementById('voteCustomName')?.value?.trim();
    if (!name || name.length < 2) { toast('Escribe el nombre de la integración', 'error'); return; }
    castVote('custom', name);
  });
}

// ─── OAuth popup ───
async function connectOAuth(providerKey, authType) {
  // Multi-tenant: pre-creamos el state en backend (con auth) ANTES de abrir
  // el popup para que el callback sepa a qué tenant pertenece la integración.
  // El popup es un GET sin headers Auth, por eso el state debe venir pre-creado.
  const provider = authType === 'oauth_tiktok' ? 'tiktok'
                 : authType === 'oauth_threads' ? 'threads'
                 : authType === 'oauth_google' ? 'gmail'
                 : authType === 'oauth_microsoft' ? 'outlook'
                 : providerKey;
  let state;
  try {
    const r = await api('POST', '/api/auth/oauth/prepare', { provider });
    state = r.state;
  } catch (err) {
    toast('No se pudo iniciar la conexión OAuth: ' + err.message, 'error', 5000);
    return;
  }

  const oauthPath = authType === 'oauth_tiktok'
    ? `/auth/tiktok/start?state=${state}`
    : authType === 'oauth_threads'
    ? `/auth/threads/start?state=${state}`
    : authType === 'oauth_google'
    ? `/auth/google/start?state=${state}`
    : authType === 'oauth_microsoft'
    ? `/auth/microsoft/start?state=${state}`
    : `/auth/meta/start?state=${state}`;

  const w = 620, h = 700;
  const left = Math.round((screen.width - w) / 2);
  const top = Math.round((screen.height - h) / 2);
  const popup = window.open(oauthPath, 'oauth_connect',
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes`);

  if (!popup) {
    toast("El navegador bloqueó la ventana emergente. Permite pop-ups para este sitio.", "error", 5000);
    return;
  }

  const handler = async (e) => {
    if (e.data?.type === 'oauth_success') {
      window.removeEventListener('message', handler);
      await loadIntegrations();
      // Re-evaluar visibilidad del nav 'Comentarios' (puede que recién se
      // haya conectado FB Page o IG)
      applySocialCommentsVisibility().catch(() => {});
      toast("Conectado correctamente", "success");
      openRoutingModal(e.data.integrationId);
    } else if (e.data?.type === 'oauth_error') {
      window.removeEventListener('message', handler);
      toast(e.data.error || "Error al conectar", "error", 6000);
    }
  };
  window.addEventListener('message', handler);
}

// ─── Modal manual (Telegram, WhatsApp API, WooCommerce, Shopify, Square) ───
let QR_POLL_INTERVAL = null;
let QR_PENDING_ID = null;        // id de la integración en proceso de QR
let QR_CONFIRMED = false;        // se prendió cuando Baileys reportó 'connected'
function stopQrPolling() {
  if (QR_POLL_INTERVAL) { clearInterval(QR_POLL_INTERVAL); QR_POLL_INTERVAL = null; }
}

// Si el usuario cerró el modal sin completar el escaneo, abortar la sesión:
// llamar DELETE al backend para que detenga Baileys, borre auth files y elimine
// el row pendiente. Sin esto el row queda en 'connecting' y la sesión sigue
// generando QRs en background.
async function abortPendingQrIfNeeded() {
  if (!QR_PENDING_ID || QR_CONFIRMED) {
    QR_PENDING_ID = null;
    QR_CONFIRMED = false;
    return;
  }
  const id = QR_PENDING_ID;
  QR_PENDING_ID = null;
  QR_CONFIRMED = false;
  try {
    await api('DELETE', `/api/integrations/${id}`);
  } catch (err) {
    console.warn('[qr abort] no se pudo eliminar pending:', err.message);
  }
}

function openIntegrationModal(providerKey, instanceId = null) {
  const provider = INTEGRATIONS.find((p) => p.key === providerKey);
  if (!provider) return;
  const instance = instanceId ? provider.integrations.find((i) => i.id === instanceId) : null;
  INT_EDIT = { provider, instance };
  stopQrPolling();

  const modalIcon = document.getElementById("intModalIcon");
  const iconSvg = PROVIDER_ICONS[provider.key];
  if (iconSvg) { modalIcon.innerHTML = iconSvg; } else { modalIcon.textContent = provider.initial || provider.name[0]; }
  modalIcon.style.background = provider.color;
  document.getElementById("intModalTitle").textContent = instance ? t('int.modal.edit').replace('{name}', provider.name) : t('int.modal.connect').replace('{name}', provider.name);
  document.getElementById("intModalDesc").textContent = provider.description;

  // Setup steps (solo al conectar por primera vez, no al editar)
  const stepsBox = document.getElementById("intSetupSteps");
  const steps = provider.setupSteps || [];
  if (stepsBox) {
    if (!instance && steps.length) {
      stepsBox.innerHTML = `<p class="int-steps-title">${t('int.how_to_connect')}</p><ol class="int-steps-list">${
        steps.map(s => `<li>${s}</li>`).join('')
      }</ol>`;
      stepsBox.hidden = false;
    } else {
      stepsBox.hidden = true;
    }
  }

  const isOAuthProvider = provider.authType && provider.authType.startsWith('oauth_');
  const fields = document.getElementById("intFormFields");
  const values = instance?.credentials || {};

  if (isOAuthProvider && instance) {
    // OAuth con cuenta ya conectada: mostrar info de cuenta, sin form manual
    fields.innerHTML = `<div class="int-oauth-connected">
      <div class="int-oauth-connected-name">✓ ${escapeHtml(instance.displayName || provider.name)}</div>
      <div class="int-oauth-connected-sub">${t('oauth.connected.ok')}</div>
      <button type="button" class="btn btn--ghost" id="intReconnectOAuthBtn" style="margin-top:10px">${oauthIcon(provider.key, false)}</button>
    </div>`;
    setTimeout(() => {
      document.getElementById('intReconnectOAuthBtn')?.addEventListener('click', () => {
        closeIntegrationModal();
        connectOAuth(provider.key, provider.authType);
      });
    }, 0);
  } else if (isOAuthProvider && !instance) {
    // OAuth sin cuenta conectada: campo vacío, el botón Conectar dispara OAuth
    fields.innerHTML = '';
  } else {
    const normalFields   = (provider.fields || []).filter(f => !f.advanced);
    const advancedFields = (provider.fields || []).filter(f =>  f.advanced);
    const hasAdvanced    = advancedFields.length > 0;
    // Si ya hay valores guardados en campos avanzados, mostrarlos abiertos
    const advancedHasValues = advancedFields.some(f => values[f.key]);

    const renderField = (f) => {
      const val = values[f.key] || "";
      const inputType = f.type === "textarea" ? "textarea" : (f.type === "password" ? "password" : "text");
      const req  = f.required ? '<span class="int-field-required">*</span>' : '';
      const help = f.help ? `<div class="int-field-help">${escapeHtml(f.help)}</div>` : "";
      if (inputType === "textarea") return `<div class="int-field"><label>${escapeHtml(f.label)}${req}</label><textarea name="${f.key}" rows="3">${escapeHtml(val)}</textarea>${help}</div>`;
      return `<div class="int-field"><label>${escapeHtml(f.label)}${req}</label><input type="${inputType}" name="${f.key}" value="${escapeHtml(val)}" autocomplete="off" />${help}</div>`;
    };

    fields.innerHTML = normalFields.map(renderField).join("") + (hasAdvanced ? `
      <div class="int-advanced-toggle" id="intAdvancedToggle">
        <span>⚙ Configuración avanzada</span>
      </div>
      <div class="int-advanced-fields" id="intAdvancedFields" style="display:${advancedHasValues ? 'block' : 'none'}">
        ${advancedFields.map(renderField).join("")}
      </div>` : '');

    if (hasAdvanced) {
      setTimeout(() => {
        const toggle = document.getElementById('intAdvancedToggle');
        const panel  = document.getElementById('intAdvancedFields');
        if (toggle && panel) {
          toggle.addEventListener('click', () => {
            const open = panel.style.display !== 'none';
            panel.style.display = open ? 'none' : 'block';
            toggle.classList.toggle('int-advanced-open', !open);
          });
          if (advancedHasValues) toggle.classList.add('int-advanced-open');
        }
      }, 0);
    }
  }

  // Webhook URL — mostrar siempre (al conectar usa la URL del provider, al editar usa la de la instancia)
  const webhookBox = document.getElementById("intWebhookBox");
  const baseUrl = window.location.origin;
  const webhookUrl = instance?.webhookUrl || `${baseUrl}/webhooks/${provider.key}`;
  document.getElementById("intWebhookUrl").textContent = webhookUrl;
  const evts = provider.webhooks?.events?.join(", ");
  document.getElementById("intWebhookEvents").textContent = evts ? `Eventos: ${evts}` : "";
  // Para Telegram no hay webhook manual (se registra automático), ocultamos la caja
  webhookBox.hidden = provider.key === 'telegram';
  document.getElementById("intWebhookBox").querySelector("h4").textContent =
    provider.key === 'messenger' || provider.key === 'instagram'
      ? "URL del Webhook — pégala en Meta for Developers"
      : "URL del Webhook";

  document.getElementById("intError").hidden = true;
  document.getElementById("intDocsLink").href = provider.docsUrl || "#";
  document.getElementById("intDocsLink").hidden = !provider.docsUrl;
  document.getElementById("intDisconnectBtn").hidden = !instance;
  document.getElementById("intSubmitBtn").textContent = instance ? t('btn.save') : t('int.connect');
  // OAuth providers con cuenta ya conectada: ocultar botón submit (no hay form que enviar)
  if (isOAuthProvider && instance) document.getElementById("intSubmitBtn").hidden = true;

  // ─── Modo QR (whatsapp-lite): oculta form y webhook box ───
  const qrBox = document.getElementById("intQrBox");
  const isQrProvider = provider.authType === 'qr';
  const isQrConnect = isQrProvider && !instance;
  if (qrBox) {
    qrBox.hidden = !isQrProvider;
    if (isQrProvider) {
      document.getElementById("intFormFields").hidden = true;
      document.getElementById("intWebhookBox").hidden = true;
      const refreshBtn = document.getElementById("intQrRefreshBtn");
      if (isQrConnect) {
        document.getElementById("intSubmitBtn").textContent = "Generar QR";
        document.getElementById("intSubmitBtn").hidden = false;
        if (refreshBtn) refreshBtn.style.display = "none";
        document.getElementById("intQrStatus").textContent = 'Click "Generar QR" para empezar';
        document.getElementById("intQrStatus").className = "int-qr-status";
        // Sin spinner ni QR hasta que el usuario haga click en el botón
        const wrap = document.getElementById("intQrImageWrap");
        wrap.innerHTML = '<div style="font-size:48px;opacity:.3">📱</div>';
        wrap.style.background = "#f8fafc";
      } else {
        // Ya conectado: mostrar estado, sin QR ni botón submit
        document.getElementById("intSubmitBtn").hidden = true;
        if (refreshBtn) refreshBtn.style.display = "inline-flex";
        const phone = instance.externalId || '';
        document.getElementById("intQrStatus").textContent = phone ? `✓ Conectado como +${phone}` : '✓ Conectado';
        document.getElementById("intQrStatus").className = "int-qr-status is-ok";
        document.getElementById("intQrImageWrap").innerHTML = '<div style="font-size:64px">📱</div>';
      }
    } else {
      document.getElementById("intFormFields").hidden = false;
      if (!(isOAuthProvider && instance)) document.getElementById("intSubmitBtn").hidden = false;
    }
  }

  document.getElementById("integrationModal").hidden = false;
}

function closeIntegrationModal() {
  stopQrPolling();
  // Si había un QR pendiente sin confirmar, abortar (limpia row + sesión backend)
  abortPendingQrIfNeeded().then(() => loadIntegrations()).catch(() => {});
  document.getElementById("integrationModal").hidden = true;
  INT_EDIT = null;
}

// ─── Flujo QR para whatsapp-lite ───
async function startQrFlow() {
  if (!INT_EDIT) return;
  const provider = INT_EDIT.provider;
  const statusEl = document.getElementById("intQrStatus");
  const imgWrap  = document.getElementById("intQrImageWrap");
  const submitBtn = document.getElementById("intSubmitBtn");
  const errBox = document.getElementById("intError");

  errBox.hidden = true;
  submitBtn.disabled = true;
  submitBtn.textContent = "Iniciando…";
  statusEl.textContent = "Iniciando sesión de WhatsApp Web…";
  statusEl.className = "int-qr-status";
  imgWrap.innerHTML = '<div class="int-qr-spinner"></div>';

  let integrationId = null;
  try {
    const res = await api("POST", `/api/integrations/${provider.key}/connect`, {});
    integrationId = res?.item?.id;
    if (!integrationId) throw new Error("No se obtuvo el ID de la integración");
    INT_EDIT.instance = res.item; // recordar para refrescar al conectar
    QR_PENDING_ID = integrationId;
    QR_CONFIRMED = false;
  } catch (err) {
    errBox.textContent = err.message; errBox.hidden = false;
    submitBtn.disabled = false;
    submitBtn.textContent = "Generar QR";
    statusEl.textContent = "Error al iniciar";
    statusEl.classList.add("is-error");
    return;
  }

  submitBtn.textContent = "Esperando escaneo…";
  let polls = 0;
  const MAX_POLLS = 100; // ~150s
  stopQrPolling();
  QR_POLL_INTERVAL = setInterval(async () => {
    polls++;
    if (polls > MAX_POLLS) {
      stopQrPolling();
      statusEl.textContent = "Tiempo agotado. Click \"Generar QR nuevo\".";
      statusEl.classList.add("is-error");
      submitBtn.disabled = false;
      submitBtn.textContent = "Generar QR";
      return;
    }
    try {
      const s = await api("GET", `/api/integrations/${integrationId}/qr-status`);
      if (s.liveStatus === 'qr' && s.qrDataUrl) {
        statusEl.textContent = "Escanea el QR desde tu WhatsApp";
        statusEl.className = "int-qr-status";
        const cur = imgWrap.querySelector("img");
        if (!cur || cur.src !== s.qrDataUrl) {
          imgWrap.innerHTML = `<img src="${s.qrDataUrl}" alt="QR de WhatsApp" />`;
        }
      } else if (s.liveStatus === 'connecting') {
        statusEl.textContent = "Conectando…";
      } else if (s.liveStatus === 'connected') {
        stopQrPolling();
        QR_CONFIRMED = true;          // ya escaneó — no abortar al cerrar modal
        statusEl.textContent = `✓ Conectado como +${s.phoneNumber || '?'}`;
        statusEl.classList.add("is-ok");
        toast(`WhatsApp Lite conectado +${s.phoneNumber || ''}`, "success");
        setTimeout(async () => {
          closeIntegrationModal();
          await loadIntegrations();
          openRoutingModal(integrationId);
        }, 800);
      } else if (s.liveStatus === 'disconnected' || s.liveStatus === 'error' || s.liveStatus === 'not_started') {
        stopQrPolling();
        statusEl.textContent = s.lastError || "Sesión desconectada. Genera un QR nuevo.";
        statusEl.classList.add("is-error");
        submitBtn.disabled = false;
        submitBtn.textContent = "Generar QR";
      }
    } catch (err) {
      console.warn("[qr poll] err:", err.message);
    }
  }, 1500);
}

// ─── Modal de routing (pipeline / etapa) ───
function openRoutingModal(integrationId) {
  ROUTING_INTEGRATION_ID = integrationId;

  // Poblar select de pipelines
  const pipelineSel = document.getElementById("routingPipelineSelect");
  pipelineSel.innerHTML = PIPELINES.map((p) =>
    `<option value="${p.id}">${escapeHtml(p.name)}</option>`
  ).join("");

  function updateStages() {
    const pid = Number(pipelineSel.value);
    const pipeline = PIPELINES.find((p) => p.id === pid);
    const stageSel = document.getElementById("routingStageSelect");
    stageSel.innerHTML = (pipeline?.stages || []).map((s) =>
      `<option value="${s.id}">${escapeHtml(s.name)}</option>`
    ).join("");
  }
  pipelineSel.onchange = updateStages;
  updateStages();

  // Pre-seleccionar routing actual si existe
  const allInst = INTEGRATIONS.flatMap((p) => p.integrations || []);
  const inst = allInst.find((i) => i.id === integrationId);
  if (inst?.routing?.pipelineId) {
    pipelineSel.value = inst.routing.pipelineId;
    updateStages();
    const stageSel = document.getElementById("routingStageSelect");
    stageSel.value = inst.routing.stageId;
  }

  document.getElementById("routingModal").hidden = false;
}

function closeRoutingModal() {
  document.getElementById("routingModal").hidden = true;
  ROUTING_INTEGRATION_ID = null;
}

async function saveRouting(skip = false) {
  if (!ROUTING_INTEGRATION_ID) { closeRoutingModal(); return; }

  if (skip) {
    closeRoutingModal();
    toast("Se usará el primer pipeline disponible por defecto", "info", 3000);
    return;
  }

  const pipelineSel = document.getElementById("routingPipelineSelect");
  const stageSel = document.getElementById("routingStageSelect");
  const pipelineId = Number(pipelineSel.value);
  const stageId = Number(stageSel.value);
  const pipeline = PIPELINES.find((p) => p.id === pipelineId);
  const stage = pipeline?.stages?.find((s) => s.id === stageId);

  try {
    await api("PATCH", `/api/integrations/${ROUTING_INTEGRATION_ID}/routing`, {
      pipelineId, stageId,
      pipelineName: pipeline?.name || '',
      stageName: stage?.name || '',
    });
    await loadIntegrations();
    closeRoutingModal();
    toast("Pipeline configurado correctamente", "success");
  } catch (err) {
    toast(`Error: ${err.message}`, "error");
  }
}

// ─── Outgoing webhooks card + modal ───
function renderOutgoingWebhooksCard() {
  const whIcon = `<svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" stroke-width="1.5" fill="none"/></svg>`;
  const listHtml = OUTGOING_WEBHOOKS.map((wh) => `
    <div class="int-account-row wh-row" data-wh-id="${wh.id}">
      <div class="wh-active-dot ${wh.active ? 'is-on' : ''}"></div>
      <div class="int-account-info">
        <div class="int-account-name">${escapeHtml(wh.name)}</div>
        <div class="int-account-meta wh-url">${escapeHtml(wh.url)}</div>
      </div>
      <button class="btn btn--xs btn--ghost" data-action="edit-wh" data-id="${wh.id}">Editar</button>
    </div>`).join("");

  return `
    <div class="int-card int-card--webhooks">
      <div class="int-card-head">
        <span class="int-icon int-icon--webhook">${whIcon}</span>
        <div class="int-name">Webhooks salientes</div>
      </div>
      <p class="int-desc">Notifica URLs externas (Zapier, Make, tu propio servidor) cuando ocurren eventos en Wapi101.</p>
      ${listHtml ? `<div class="int-accounts" id="whList">${listHtml}</div>` : ''}
      <div class="int-card-actions">
        <button class="btn btn--ghost" data-action="add-wh">+ Agregar webhook</button>
      </div>
    </div>`;
}

function renderOutgoingWebhooks() {
  const root = document.getElementById("integrationsGrid");
  if (!root) return;
  // Re-render solo el card de webhooks si ya existe
  const existing = root.querySelector('.int-card--webhooks');
  if (existing) {
    existing.outerHTML = renderOutgoingWebhooksCard();
    bindOutgoingWebhookCardListeners(root);
  }
}

function bindOutgoingWebhookCardListeners(root) {
  root.querySelector('[data-action="add-wh"]')?.addEventListener("click", () => openWebhookModal(null));
  root.querySelectorAll('[data-action="edit-wh"]').forEach((btn) => {
    btn.addEventListener("click", () => openWebhookModal(Number(btn.dataset.id)));
  });
}

function openWebhookModal(whId) {
  WH_EDIT = whId ? OUTGOING_WEBHOOKS.find((w) => w.id === whId) : null;

  document.getElementById("whModalTitle").textContent = WH_EDIT ? t('wh.modal.edit') : t('wh.modal.title');
  document.getElementById("whName").value = WH_EDIT?.name || "";
  document.getElementById("whUrl").value = WH_EDIT?.url || "";
  document.getElementById("whSecret").value = "";
  document.getElementById("whDeleteBtn").hidden = !WH_EDIT;
  document.getElementById("whError").hidden = true;

  const selectedEvents = WH_EDIT?.events || ['message.received'];
  document.getElementById("whEvents").innerHTML = ALL_WH_EVENTS.map((ev) => `
    <label class="wh-event-check">
      <input type="checkbox" name="events" value="${ev.key}" ${selectedEvents.includes(ev.key) ? 'checked' : ''}/>
      ${escapeHtml(ev.label)}
    </label>`).join("");

  document.getElementById("whModal").hidden = false;
}

function closeWebhookModal() {
  document.getElementById("whModal").hidden = true;
  WH_EDIT = null;
}

function setupIntegrations() {
  document.querySelectorAll("[data-close-int]").forEach((el) => el.addEventListener("click", closeIntegrationModal));
  document.querySelectorAll("[data-close-routing]").forEach((el) => el.addEventListener("click", closeRoutingModal));
  document.querySelectorAll("[data-close-wh]").forEach((el) => el.addEventListener("click", closeWebhookModal));

  document.getElementById("intWebhookCopy")?.addEventListener("click", async () => {
    const url = document.getElementById("intWebhookUrl").textContent;
    try { await navigator.clipboard.writeText(url); toast("URL copiada", "success", 2000); }
    catch (_) { toast("No pude copiar", "error"); }
  });

  document.getElementById("integrationForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!INT_EDIT) return;
    // Modo QR
    if (INT_EDIT.provider.authType === 'qr' && !INT_EDIT.instance) {
      return startQrFlow();
    }
    // Modo OAuth nueva conexión
    if (INT_EDIT.provider.authType?.startsWith('oauth_') && !INT_EDIT.instance) {
      closeIntegrationModal();
      return connectOAuth(INT_EDIT.provider.key, INT_EDIT.provider.authType);
    }
    const fd = new FormData(e.target);
    const payload = {};
    for (const f of INT_EDIT.provider.fields) {
      const v = fd.get(f.key);
      if (v != null) payload[f.key] = String(v).trim();
    }
    const errBox = document.getElementById("intError");
    const submitBtn = document.getElementById("intSubmitBtn");
    errBox.hidden = true;
    submitBtn.disabled = true;
    const orig = submitBtn.textContent;
    submitBtn.textContent = "Validando…";
    try {
      if (INT_EDIT.instance) {
        await api("PATCH", `/api/integrations/${INT_EDIT.instance.id}`, payload);
        closeIntegrationModal();
        await loadIntegrations();
        toast(`${INT_EDIT.provider.name} actualizado`, "success");
      } else {
        const res = await api("POST", `/api/integrations/${INT_EDIT.provider.key}/connect`, payload);
        closeIntegrationModal();
        await loadIntegrations();
        toast(`${INT_EDIT.provider.name} conectado`, "success");
        if (res?.item?.id) openRoutingModal(res.item.id);
      }
    } catch (err) {
      errBox.textContent = err.message;
      errBox.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = orig;
    }
  });

  document.getElementById("intQrRefreshBtn")?.addEventListener("click", () => startQrFlow());

  document.getElementById("intDisconnectBtn")?.addEventListener("click", async () => {
    if (!INT_EDIT?.instance) return;
    if (!confirm(`¿Desconectar ${INT_EDIT.instance.displayName || INT_EDIT.provider.name}?`)) return;
    try {
      await api("DELETE", `/api/integrations/${INT_EDIT.instance.id}`);
      closeIntegrationModal();
      await loadIntegrations();
      toast("Integración desconectada", "success");
    } catch (err) { toast(`Error: ${err.message}`, "error"); }
  });

  document.getElementById("routingSaveBtn")?.addEventListener("click", () => saveRouting(false));
  document.getElementById("routingSkipBtn")?.addEventListener("click", () => saveRouting(true));

  document.getElementById("whForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("whName").value.trim();
    const url = document.getElementById("whUrl").value.trim();
    const secret = document.getElementById("whSecret").value.trim();
    const events = [...document.querySelectorAll('#whEvents input[type=checkbox]:checked')].map((cb) => cb.value);
    const errBox = document.getElementById("whError");
    const btn = document.getElementById("whSubmitBtn");
    errBox.hidden = true;
    btn.disabled = true;
    btn.textContent = "Guardando…";
    try {
      if (WH_EDIT) {
        await api("PATCH", `/api/outgoing-webhooks/${WH_EDIT.id}`, { name, url, events, secret: secret || undefined });
        toast("Webhook actualizado", "success");
      } else {
        await api("POST", "/api/outgoing-webhooks", { name, url, events, secret: secret || undefined });
        toast("Webhook agregado", "success");
      }
      closeWebhookModal();
      await loadOutgoingWebhooks();
    } catch (err) {
      errBox.textContent = err.message;
      errBox.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = "Guardar";
    }
  });

  document.getElementById("whDeleteBtn")?.addEventListener("click", async () => {
    if (!WH_EDIT || !confirm(`¿Eliminar webhook "${WH_EDIT.name}"?`)) return;
    try {
      await api("DELETE", `/api/outgoing-webhooks/${WH_EDIT.id}`);
      closeWebhookModal();
      await loadOutgoingWebhooks();
      toast("Webhook eliminado", "success");
    } catch (err) { toast(`Error: ${err.message}`, "error"); }
  });
}

// ═══════ Expedientes ═══════

let EXP_STATE = { page: 1, pageSize: 50, search: '', sortBy: 'createdAt', sortDir: 'desc', total: 0 };
let EXP_EDIT = null;        // expediente en edición (null = nuevo)
let EXP_TAGS = [];          // tags del modal actual
let EXP_CONTACT_ID = null;  // contacto seleccionado en el modal
let EXP_FIELD_DEFS = [];    // definiciones de campos personalizados

function fmtDate(ts) {
  if (!ts) return '—';
  return new Date(ts * 1000).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
}

async function loadExpedients() {
  const { page, pageSize, sortBy, sortDir } = EXP_STATE;
  const params = new URLSearchParams({ page, pageSize, sortBy, sortDir });
  // Text search — routed through EXP_FILTERS
  const effectiveSearch = EXP_FILTERS.q || EXP_STATE.search || '';
  if (effectiveSearch) params.set('search', effectiveSearch);
  if (EXP_FILTERS.tags.length) EXP_FILTERS.tags.forEach(t => params.append('tags', t));
  const nonEmptyFields = Object.fromEntries(Object.entries(EXP_FILTERS.fieldValues).filter(([, v]) => v !== ''));
  if (Object.keys(nonEmptyFields).length) params.set('fieldFilters', JSON.stringify(nonEmptyFields));
  try {
    const data = await api('GET', `/api/expedients?${params}`);
    EXP_STATE.total = data.total;
    EXP_STATE.totalPages = data.totalPages;
    renderExpedientRows(data.items);
    renderExpPaginator(data);
  } catch (err) { console.error('Error cargando expedientes:', err); }
}

async function loadExpFieldDefs() {
  try {
    const data = await api('GET', '/api/expedients/field-defs');
    EXP_FIELD_DEFS = data.items;
  } catch (err) { console.error('Error cargando campos:', err); }
}

function renderExpedientRows(items) {
  const tbody = document.getElementById('expTableBody');
  const empty = document.getElementById('expEmpty');
  const paginator = document.getElementById('expPaginator');
  if (!tbody) return;
  if (!items.length) {
    tbody.innerHTML = '';
    empty.hidden = false;
    paginator.hidden = true;
    return;
  }
  empty.hidden = true;
  paginator.hidden = false;
  tbody.innerHTML = items.map((exp) => {
    const tagsHtml = exp.tags.map((t) => `<span class="exp-tag">${escapeHtml(t)}</span>`).join('') || '—';
    // Usar los colores reales de la BD; fallback a kind si no llegan.
    const sColor = exp.stageColor || (exp.stageKind === 'won' ? '#10b981' : exp.stageKind === 'lost' ? '#ef4444' : '#94a3b8');
    const pColor = exp.pipelineColor || '#64748b';
    const emailHtml = exp.contactEmail
      ? `<a href="mailto:${escapeHtml(exp.contactEmail)}" class="exp-contact-email" onclick="event.stopPropagation()">${escapeHtml(exp.contactEmail)}</a>`
      : '<span class="exp-contact-email is-empty">—</span>';
    return `
      <tr data-exp-id="${exp.id}" style="cursor:pointer">
        <td>
          <div class="exp-name${exp.nameIsAuto ? ' is-auto-name' : ''}">${escapeHtml(exp.name || 'Sin nombre')}</div>
        </td>
        <td><div class="exp-contact">${escapeHtml(exp.contactName || '—')}</div></td>
        <td>${emailHtml}</td>
        <td>
          <span class="exp-pipeline-badge-wrap">
            <span class="exp-pipeline-pill" style="background:${pColor}24;border-color:${pColor}55">
              <span class="exp-stage-dot" style="background:${pColor}"></span>
              ${escapeHtml(exp.pipelineName || '')}
            </span>
            <span class="exp-pipeline-arrow">→</span>
            <span class="exp-stage-pill" style="background:${sColor}24;border-color:${sColor}55">
              <span class="exp-stage-dot" style="background:${sColor}"></span>
              ${escapeHtml(exp.stageName || '')}
            </span>
          </span>
        </td>
        <td>${exp.assignedAdvisorName ? `<span class="exp-assignee">👤 ${escapeHtml(exp.assignedAdvisorName)}</span>` : '<span class="exp-assignee is-empty">Sin asignar</span>'}</td>
        <td>${tagsHtml}</td>
        <td><span class="exp-date">${fmtDate(exp.createdAt)}</span></td>
        <td>
          <div class="exp-actions">
            <button class="btn btn--xs btn--ghost" data-action="edit-exp" data-id="${exp.id}">Editar</button>
          </div>
        </td>
      </tr>`;
  }).join('');

  tbody.querySelectorAll('tr[data-exp-id]').forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="edit-exp"]')) return;
      openExpDetail(Number(row.dataset.expId));
    });
  });
  tbody.querySelectorAll('[data-action="edit-exp"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openExpModal(Number(btn.dataset.id));
    });
  });
}

function renderExpPaginator({ page, pageSize, total, totalPages }) {
  document.getElementById('expPageInfo').textContent = `${(page-1)*pageSize+1}–${Math.min(page*pageSize,total)} de ${total}`;
  const prev = document.getElementById('expPagePrev');
  const next = document.getElementById('expPageNext');
  prev.disabled = page <= 1;
  next.disabled = page >= totalPages;
  prev.onclick = () => { EXP_STATE.page--; loadExpedients(); };
  next.onclick = () => { EXP_STATE.page++; loadExpedients(); };
  // Números de página
  const pages = document.getElementById('expPageNumbers');
  const nums = [];
  for (let i = Math.max(1, page-2); i <= Math.min(totalPages, page+2); i++) nums.push(i);
  pages.innerHTML = nums.map((n) => `<button class="paginator-page${n===page?' is-active':''}" data-p="${n}">${n}</button>`).join('');
  pages.querySelectorAll('[data-p]').forEach((btn) => {
    btn.addEventListener('click', () => { EXP_STATE.page = Number(btn.dataset.p); loadExpedients(); });
  });
}

// ═══════ Detalle de expediente ═══════
let EXP_DETAIL = null;          // expedient actual en el detalle
let EXP_DETAIL_CONVOS = [];     // conversaciones del contacto
let EXP_DETAIL_CONVO_ID = null; // conversación activa en el detalle
let EXP_DETAIL_MSGS = [];       // mensajes de la convo activa
let EXP_DETAIL_ACTIVITY = [];   // actividad del expediente
let _chatSearchQuery = '';      // búsqueda activa en el chat del expediente
let EXP_DETAIL_FROM = 'expedientes'; // vista desde la que se abrió

async function openExpDetail(id, from = 'expedientes') {
  try {
    const [expData] = await Promise.all([
      api('GET', `/api/expedients/${id}`),
      loadExpFieldDefs(),
    ]);
    EXP_DETAIL = expData.item;
    EXP_DETAIL_FROM = from;
  } catch (err) { toast('Error cargando lead', 'error'); return; }

  // Persist so page refresh restores this view
  localStorage.setItem('lastView', 'exp-detail');
  localStorage.setItem('lastExpDetailId', id);
  localStorage.setItem('lastExpDetailFrom', from);

  // Update back button label
  const backLbl = document.querySelector('.exp-detail-back-label');
  if (backLbl) {
    backLbl.textContent = from === 'pipelines' ? 'Pipeline'
                        : from === 'contactos' ? 'Contactos'
                        : from === 'chats' ? 'Chats'
                        : 'Leads';
  }

  showView('exp-detail');
  renderExpDetailInfo();
  renderExpDetailBots();
  renderExpLeadTagsBar();
  await loadExpDetailConvos();

  // Empujar al historial con el id del lead (para que back/forward funcionen)
  ROUTER.push({ type: 'lead', id: Number(id), from });
}

function renderExpDetailInfo() {
  const exp = EXP_DETAIL;
  if (!exp) return;
  const root = document.getElementById('expDetailInfo');
  if (!root) return;

  const savedValues = {};
  (exp.fieldValues || []).forEach((fv) => { savedValues[fv.fieldId] = fv.value; });

  const customFields = (EXP_FIELD_DEFS || []).filter((d) => d.entity === 'expedient' || !d.entity);

  // Build pipeline + stage selects
  const pipelineOptions = PIPELINES.map((p) =>
    `<option value="${p.id}" ${p.id === exp.pipelineId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`
  ).join('');
  const currentPipeline = PIPELINES.find((p) => p.id === exp.pipelineId) || PIPELINES[0];
  const stageOptions = (currentPipeline?.stages || []).map((s) =>
    `<option value="${s.id}" ${s.id === exp.stageId ? 'selected' : ''}>${escapeHtml(s.name)}</option>`
  ).join('');

  const customFieldsHtml = customFields.map((def) => {
    const val = savedValues[def.id] ?? '';
    const displayVal = val ? escapeHtml(val) : '<span class="edf-empty">—</span>';

    let inputHtml;
    if (def.fieldType === 'date' || def.fieldType === 'birthday') {
      inputHtml = `<input class="edf-input" type="date" value="${escapeHtml(val)}" data-original="${escapeHtml(val)}" />`;
    } else if (def.fieldType === 'datetime') {
      inputHtml = `<input class="edf-input" type="datetime-local" value="${escapeHtml(val)}" data-original="${escapeHtml(val)}" />`;
    } else if (def.fieldType === 'number') {
      inputHtml = `<input class="edf-input" type="number" value="${escapeHtml(val)}" data-original="${escapeHtml(val)}" />`;
    } else if (def.fieldType === 'select' && def.options?.length) {
      const opts = def.options.map(o => `<option value="${escapeHtml(o)}" ${o === val ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('');
      inputHtml = `<select class="edf-input edf-select" data-original="${escapeHtml(val)}">${opts}</select>`;
    } else {
      inputHtml = `<input class="edf-input" type="text" value="${escapeHtml(val)}" data-original="${escapeHtml(val)}" />`;
    }

    return `
    <div class="exp-detail-field editable-field" data-field-id="${def.id}" data-field-type="custom">
      <span class="exp-detail-field-label">${escapeHtml(def.label)}</span>
      <div class="edf-cell">
        <span class="exp-detail-field-value edf-display">${displayVal}</span>
        ${inputHtml}
      </div>
    </div>`;
  }).join('');

  // Stage options with color dots rendered via JS after insert (select can't have colored options cross-browser)
  // We'll use a custom stage selector instead
  const stageOptionsHtml = (currentPipeline?.stages || []).map((s) =>
    `<option value="${s.id}" data-color="${s.color}" ${s.id === exp.stageId ? 'selected' : ''}>${escapeHtml(s.name)}</option>`
  ).join('');

  root.innerHTML = `
    <div class="exp-detail-section">
      <div class="exp-detail-section-title">Lead</div>
      <div class="exp-detail-field editable-field" data-field-id="name" data-field-type="builtin">
        <span class="exp-detail-field-label">Nombre</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display${exp.nameIsAuto ? ' is-auto-name' : ''}">${escapeHtml(exp.name || '—')}</span>
          <input class="edf-input" type="text" value="${escapeHtml(exp.nameIsAuto ? '' : exp.name || '')}" placeholder="Nombre del lead" data-original="${escapeHtml(exp.nameIsAuto ? '' : exp.name || '')}" />
        </div>
      </div>
      <div class="exp-detail-field editable-field" data-field-id="pipeline" data-field-type="builtin">
        <span class="exp-detail-field-label">Pipeline</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">
            <span class="exp-detail-stage-badge">
              <span class="edf-stage-dot" style="background:${exp.pipelineColor || '#94a3b8'}"></span>
              ${escapeHtml(exp.pipelineName || '—')}
            </span>
          </span>
          <select class="edf-input edf-select" id="edfPipelineSel" data-original="${exp.pipelineId}">${pipelineOptions}</select>
        </div>
      </div>
      <div class="exp-detail-field editable-field" data-field-id="stage" data-field-type="builtin">
        <span class="exp-detail-field-label">Etapa</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">
            <span class="exp-detail-stage-badge">
              <span class="edf-stage-dot" style="background:${exp.stageColor || '#94a3b8'}"></span>
              ${escapeHtml(exp.stageName || '—')}
            </span>
          </span>
          <select class="edf-input edf-select edf-stage-sel" id="edfStageSel" data-original="${exp.stageId}">${stageOptionsHtml}</select>
        </div>
      </div>
      <div class="exp-detail-field editable-field" data-field-id="assignedAdvisor" data-field-type="builtin">
        <span class="exp-detail-field-label">Asesor asignado</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">${exp.assignedAdvisorName ? `<span class="exp-assignee">👤 ${escapeHtml(exp.assignedAdvisorName)}</span>` : '<span class="exp-assignee is-empty">Sin asignar</span>'}</span>
          <select class="edf-input edf-select" id="edfAssigneeSel" data-original="${exp.assignedAdvisorId || ''}">
            <option value="">— Sin asignar —</option>
            ${(window._minAdvisorsCache || []).map(a => `<option value="${a.id}" ${a.id === exp.assignedAdvisorId ? 'selected' : ''}>${escapeHtml(a.name || a.username || ('#' + a.id))}</option>`).join('')}
          </select>
        </div>
      </div>
      ${isLeadValueEnabled() ? `
      <div class="exp-detail-field editable-field" data-field-id="value" data-field-type="builtin">
        <span class="exp-detail-field-label">Valor</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">${exp.value > 0 ? `<span class="edf-value-badge">$${Number(exp.value).toLocaleString('es-MX')} MXN</span>` : '<span class="edf-empty">—</span>'}</span>
          <input class="edf-input" type="number" min="0" step="1" value="${exp.value || ''}" placeholder="0" data-original="${exp.value || ''}" />
        </div>
      </div>` : ''}
    </div>

    <div class="exp-detail-section">
      <div class="exp-detail-section-title">Contacto</div>
      <div class="exp-detail-field editable-field" data-field-id="contactFirstName" data-field-type="builtin">
        <span class="exp-detail-field-label">Nombre(s)</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">${escapeHtml(exp.contactFirstName || '—')}</span>
          <input class="edf-input" type="text" value="${escapeHtml(exp.contactFirstName || '')}" data-original="${escapeHtml(exp.contactFirstName || '')}" />
        </div>
      </div>
      <div class="exp-detail-field editable-field" data-field-id="contactLastName" data-field-type="builtin">
        <span class="exp-detail-field-label">Apellido(s)</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">${escapeHtml(exp.contactLastName || '—')}</span>
          <input class="edf-input" type="text" value="${escapeHtml(exp.contactLastName || '')}" data-original="${escapeHtml(exp.contactLastName || '')}" />
        </div>
      </div>
      <div class="exp-detail-field editable-field" data-field-id="contactPhone" data-field-type="builtin">
        <span class="exp-detail-field-label">Teléfono</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">${escapeHtml(exp.contactPhone || '—')}</span>
          <input class="edf-input" type="tel" value="${escapeHtml(exp.contactPhone || '')}" data-original="${escapeHtml(exp.contactPhone || '')}" />
        </div>
      </div>
      <div class="exp-detail-field editable-field" data-field-id="contactEmail" data-field-type="builtin">
        <span class="exp-detail-field-label">Email</span>
        <div class="edf-cell">
          <span class="exp-detail-field-value edf-display">${escapeHtml(exp.contactEmail || '—')}</span>
          <input class="edf-input" type="email" value="${escapeHtml(exp.contactEmail || '')}" data-original="${escapeHtml(exp.contactEmail || '')}" />
        </div>
      </div>
    </div>

    ${customFields.length ? `
    <div class="exp-detail-section">
      <div class="exp-detail-section-title">Campos personalizados</div>
      ${customFieldsHtml}
    </div>` : ''}

    <div class="exp-detail-actions-bar" id="expDetailActionsBar" hidden>
      <button class="btn btn--primary btn--sm" id="expDetailSaveBtn">Guardar</button>
      <button class="btn btn--ghost btn--sm" id="expDetailCancelBtn">Cancelar</button>
    </div>`;

  setupExpDetailEditing();
}

let _botRunsTimer = null;

function _stopBotRunsPolling() {
  if (_botRunsTimer) { clearInterval(_botRunsTimer); _botRunsTimer = null; }
}

async function renderExpDetailBots() {
  const root = document.getElementById('expDetailBots');
  if (!root || !EXP_DETAIL) return;

  // Construye el map a partir del registry — un solo lugar de mantenimiento
  const TRIGGER_LABEL = {};
  for (const [type, def] of Object.entries(BOT_TRIGGER_REGISTRY)) {
    TRIGGER_LABEL[type] = def.shortLabel || type;
  }

  function fmtDuration(startedAt, finishedAt) {
    const secs = (finishedAt || Math.floor(Date.now() / 1000)) - startedAt;
    if (secs < 60) return `${secs}s`;
    if (secs < 3600) return `${Math.floor(secs / 60)}m ${secs % 60}s`;
    return `${Math.floor(secs / 3600)}h ${Math.floor((secs % 3600) / 60)}m`;
  }

  function fmtRelTime(ts) {
    if (!ts) return '';
    const secs = Math.floor(Date.now() / 1000) - ts;
    if (secs < 60) return 'hace un momento';
    if (secs < 3600) return `hace ${Math.floor(secs / 60)} min`;
    if (secs < 86400) return `hace ${Math.floor(secs / 3600)} h`;
    return new Date(ts * 1000).toLocaleDateString('es-MX', { day: '2-digit', month: 'short' });
  }

  async function refresh() {
    const expId = EXP_DETAIL?.id;
    if (!expId) { _stopBotRunsPolling(); return; }
    // Si el usuario tiene abierto el editor del timer, no rebuildeamos el DOM —
    // sino se cierra solo cada 1.5s y no le da chance de escribir.
    if (document.querySelector('.exp-run-wait-editor:not([hidden])')) return;

    try {
      const runsData = await api('GET', `/api/expedients/${expId}/bot-runs`);
      const runs = runsData.items || [];
      const activeRuns = runs.filter(r => r.status === 'running' || r.status === 'paused');
      const hasRunning  = activeRuns.length > 0;

      // Auto-poll mientras haya bots activos; detener cuando terminen
      if (hasRunning && !_botRunsTimer) {
        _botRunsTimer = setInterval(refresh, 1500);
      } else if (!hasRunning && _botRunsTimer) {
        _stopBotRunsPolling();
      }

      // Si no hay nada activo, ocultar la sección
      if (!hasRunning) {
        root.innerHTML = '';
        return;
      }

      const pctOf = r => r.total_steps ? Math.round((r.current_step / r.total_steps) * 100) : 0;

      // ── Helpers para distinguir pausa natural vs manual y mostrar info del wait ──
      function fmtRemaining(seconds) {
        if (seconds == null || seconds < 0) return '';
        if (seconds < 60)    return `${seconds}s`;
        if (seconds < 3600)  return `${Math.floor(seconds / 60)}m`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
        return `${Math.floor(seconds / 86400)}d ${Math.floor((seconds % 86400) / 3600)}h`;
      }
      function runVisualState(r) {
        const isManual = !!r.paused_manually;
        // El wait_step_type viene del API si hay un bot_run_waits activo.
        // Esto detecta wait independiente del status (que puede estar desincronizado
        // por código viejo que no contemplaba waits naturales).
        const inWait   = !!r.wait_step_type;
        if (isManual)               return { color: 'manual',  showPlay: true,  label: '⏸ Pausado manualmente' };
        if (inWait) {
          const now = Math.floor(Date.now() / 1000);
          const remaining = (r.wait_paused_remaining != null) ? r.wait_paused_remaining : (r.wait_expires_at ? r.wait_expires_at - now : null);
          const remTxt = remaining != null ? fmtRemaining(remaining) : '';
          if (r.wait_step_type === 'timer')         return { color: 'running', showPlay: false, label: remTxt ? `⏱ Espera ${remTxt}`         : '⏱ Esperando timer' };
          if (r.wait_step_type === 'wait_response') return { color: 'running', showPlay: false, label: remTxt ? `💬 Espera respuesta · ${remTxt}` : '💬 Esperando respuesta' };
          if (r.wait_step_type === 'no_response')   return { color: 'running', showPlay: false, label: remTxt ? `⏳ ${remTxt}`               : '⏳ Esperando' };
          return { color: 'running', showPlay: false, label: '⏳ Esperando' };
        }
        return { color: 'running', showPlay: false, label: '' };
      }

      root.innerHTML = `
        <div class="exp-detail-section exp-bots-section">
          <div class="exp-detail-section-title">Corriendo ahora</div>
          ${activeRuns.map(r => {
            const vis = runVisualState(r);
            const isManualPause = vis.color === 'manual';
            const editable = !!r.wait_step_type && !isManualPause; // solo timers/waits naturales son ajustables
            return `
            <div class="exp-run-row exp-run-running" data-run-id="${r.id}">
              <div class="exp-run-header">
                <span class="exp-run-pulse${isManualPause ? ' exp-run-pulse--paused' : ''}"></span>
                <span class="exp-run-name">${escapeHtml(r.bot_name || 'Bot')}</span>
                <span class="exp-run-meta">paso ${r.current_step}/${r.total_steps}</span>
                <div class="exp-run-actions">
                  <button class="exp-run-btn exp-run-btn--pause" data-run-id="${r.id}" data-paused="${vis.showPlay ? '1' : '0'}" title="${vis.showPlay ? 'Reanudar' : 'Pausar'}">
                    ${vis.showPlay
                      ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>'
                      : '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'}
                  </button>
                  <button class="exp-run-btn exp-run-btn--kill" data-run-id="${r.id}" title="Terminar bot">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
              </div>
              ${vis.label ? `
              <div class="exp-run-wait-row" data-run-id="${r.id}">
                <span class="exp-run-wait-badge${isManualPause ? ' exp-run-wait-badge--manual' : ''}${editable ? ' is-editable' : ''}" ${editable ? `title="Click para ajustar timer (solo este lead)"` : ''}>${escapeHtml(vis.label)}${editable ? ' <span class="exp-run-wait-edit">✎</span>' : ''}</span>
              </div>
              <div class="exp-run-wait-editor" data-run-id="${r.id}" hidden>
                <input class="exp-run-wait-num"  type="number" min="0" step="1" placeholder="0" value="" />
                <select class="exp-run-wait-unit">
                  <option value="60">minutos</option>
                  <option value="3600" selected>horas</option>
                  <option value="86400">días</option>
                </select>
                <button class="btn btn--primary btn--xs exp-run-wait-save" data-run-id="${r.id}">Guardar</button>
                <button class="btn btn--ghost btn--xs exp-run-wait-cancel" data-run-id="${r.id}">✕</button>
              </div>` : ''}
              <div class="exp-run-bar-wrap">
                <div class="exp-run-bar${isManualPause ? ' exp-run-bar--paused' : ''}" style="width:${pctOf(r)}%"></div>
              </div>
            </div>`;
          }).join('')}
        </div>`;

      // Click en badge editable → mostrar editor
      root.querySelectorAll('.exp-run-wait-badge.is-editable').forEach(badge => {
        badge.addEventListener('click', () => {
          const row = badge.closest('.exp-run-row');
          const editor = row?.querySelector('.exp-run-wait-editor');
          const waitRow = row?.querySelector('.exp-run-wait-row');
          if (!editor) return;
          editor.hidden = false;
          if (waitRow) waitRow.hidden = true;
          editor.querySelector('.exp-run-wait-num')?.focus();
        });
      });
      root.querySelectorAll('.exp-run-wait-cancel').forEach(btn => {
        btn.addEventListener('click', () => {
          const row = btn.closest('.exp-run-row');
          row?.querySelector('.exp-run-wait-editor').setAttribute('hidden', '');
          row?.querySelector('.exp-run-wait-row')?.removeAttribute('hidden');
        });
      });
      root.querySelectorAll('.exp-run-wait-save').forEach(btn => {
        btn.addEventListener('click', async () => {
          const runId = btn.dataset.runId;
          const row = btn.closest('.exp-run-row');
          const num  = Number(row.querySelector('.exp-run-wait-num').value);
          const unit = Number(row.querySelector('.exp-run-wait-unit').value);
          if (!Number.isFinite(num) || num < 0) return toast('Valor inválido', 'error');
          const seconds = Math.floor(num * unit);
          btn.disabled = true;
          try {
            await api('POST', `/api/bot/runs/${runId}/adjust-wait`, { seconds });
            toast('Timer ajustado', 'success');
            await Promise.all([reloadActivity(), refresh()]);
          } catch (e) { toast(e.message, 'error'); }
          finally { btn.disabled = false; }
        });
      });

      async function reloadActivity() {
        if (!EXP_DETAIL) return;
        try {
          const actData = await api('GET', `/api/expedients/${EXP_DETAIL.id}/activity`);
          EXP_DETAIL_ACTIVITY = actData.items || [];
          renderExpDetailMessages();
        } catch (_) {}
      }

      // Bind kill/pause buttons
      root.querySelectorAll('.exp-run-btn--kill').forEach(btn => {
        btn.addEventListener('click', async () => {
          const runId = btn.dataset.runId;
          btn.disabled = true;
          try { await api('POST', `/api/bot/runs/${runId}/kill`); } catch (_) {}
          await Promise.all([reloadActivity(), refresh()]);
        });
      });
      root.querySelectorAll('.exp-run-btn--pause').forEach(btn => {
        btn.addEventListener('click', async () => {
          const runId = btn.dataset.runId;
          const isPaused = btn.dataset.paused === '1';
          btn.disabled = true;
          try {
            await api('POST', `/api/bot/runs/${runId}/${isPaused ? 'resume' : 'pause'}`);
          } catch (_) {}
          await Promise.all([reloadActivity(), refresh()]);
        });
      });

    } catch (err) {
      // silencioso si falla
    }
  }

  _stopBotRunsPolling();
  await refresh();
}

function updateStageDot(stageSel) {
  if (!stageSel) return;
  const selected = stageSel.options[stageSel.selectedIndex];
  const color = selected?.dataset.color || '#94a3b8';
  // Actualiza el dot del badge en display mode en tiempo real
  const displayDot = stageSel.closest('.edf-cell')?.querySelector('.edf-stage-dot');
  if (displayDot) displayDot.style.background = color;
}

// ── Picker modal genérico (pipeline / etapa) ──
function openOptionPicker({ title, options, currentValue, onSelect }) {
  const modal = document.getElementById('optionPickerModal');
  const titleEl = document.getElementById('optionPickerTitle');
  const listEl = document.getElementById('optionPickerList');
  if (!modal || !titleEl || !listEl) return;

  titleEl.textContent = title || 'Selecciona';
  listEl.innerHTML = options.map((o) => `
    <button type="button" class="option-picker-row${String(o.value) === String(currentValue) ? ' is-selected' : ''}" data-val="${escapeHtml(String(o.value))}">
      ${o.color ? `<span class="option-picker-dot" style="background:${escapeHtml(o.color)}"></span>` : ''}
      <span class="option-picker-label">${escapeHtml(o.label)}</span>
      ${String(o.value) === String(currentValue) ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16" class="option-picker-check"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
    </button>
  `).join('');

  const close = () => {
    modal.hidden = true;
    listEl.innerHTML = '';
    modal.querySelectorAll('[data-close-picker]').forEach(el => el.removeEventListener('click', close));
    listEl.removeEventListener('click', onRowClick);
    document.removeEventListener('keydown', onKey);
  };
  const onRowClick = (e) => {
    const row = e.target.closest('.option-picker-row');
    if (!row) return;
    const val = row.dataset.val;
    close();
    onSelect(val);
  };
  const onKey = (e) => { if (e.key === 'Escape') close(); };

  modal.querySelectorAll('[data-close-picker]').forEach(el => el.addEventListener('click', close));
  listEl.addEventListener('click', onRowClick);
  document.addEventListener('keydown', onKey);
  modal.hidden = false;
}

function openPipelinePicker() {
  const sel = document.getElementById('edfPipelineSel');
  if (!sel) return;
  openOptionPicker({
    title: 'Selecciona un pipeline',
    options: PIPELINES.map(p => ({ value: p.id, label: p.name, color: p.color || '#94a3b8' })),
    currentValue: sel.value,
    onSelect: (val) => {
      if (String(val) === String(sel.value)) return;
      sel.value = val;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      const p = PIPELINES.find(x => String(x.id) === String(val));
      const display = document.querySelector('.editable-field[data-field-id="pipeline"] .edf-display');
      if (display && p) {
        display.innerHTML = `<span class="exp-detail-stage-badge"><span class="edf-stage-dot" style="background:${p.color || '#94a3b8'}"></span>${escapeHtml(p.name)}</span>`;
      }
      // Al cambiar de pipeline, la etapa anterior ya no aplica → forzar
      // que el usuario elija una etapa del pipeline nuevo. setTimeout para
      // que el modal del pipeline termine de cerrar antes de abrir el otro.
      setTimeout(() => openStagePicker(), 100);
    }
  });
}

function openStagePicker() {
  const stageSel = document.getElementById('edfStageSel');
  const pipelineSel = document.getElementById('edfPipelineSel');
  if (!stageSel || !pipelineSel) { console.warn('[stage-picker] selects no encontrados'); return; }
  let pipeline = PIPELINES.find(p => String(p.id) === String(pipelineSel.value));
  if (!pipeline) pipeline = PIPELINES.find(p => Array.isArray(p.stages) && p.stages.length) || PIPELINES[0];
  if (!pipeline) { console.warn('[stage-picker] no hay pipelines cargados'); return; }
  const stages = Array.isArray(pipeline.stages) ? pipeline.stages : [];
  if (!stages.length) { console.warn('[stage-picker] el pipeline no tiene etapas', pipeline); return; }
  openOptionPicker({
    title: `Etapa de "${pipeline.name}"`,
    options: stages.map(s => ({ value: s.id, label: s.name, color: s.color || '#94a3b8' })),
    currentValue: stageSel.value,
    onSelect: (val) => {
      if (String(val) === String(stageSel.value)) return;
      stageSel.value = val;
      stageSel.dispatchEvent(new Event('change', { bubbles: true }));
      const stage = stages.find(s => String(s.id) === String(val));
      const display = document.querySelector('.editable-field[data-field-id="stage"] .edf-display');
      if (display && stage) {
        display.innerHTML = `<span class="exp-detail-stage-badge"><span class="edf-stage-dot" style="background:${stage.color || '#94a3b8'}"></span>${escapeHtml(stage.name)}</span>`;
      }
    }
  });
}

function setupExpDetailEditing() {
  const root = document.getElementById('expDetailInfo');
  if (!root) return;

  const actionsBar = document.getElementById('expDetailActionsBar');

  // Update dot when stage select changes
  const stageSel = document.getElementById('edfStageSel');
  stageSel?.addEventListener('change', () => updateStageDot(stageSel));

  // Track which fields have pending changes
  function checkForChanges() {
    let hasChanges = false;
    root.querySelectorAll('.edf-input').forEach(input => {
      if (String(input.value) !== String(input.dataset.original || '')) hasChanges = true;
    });
    if (actionsBar) actionsBar.hidden = !hasChanges;
  }

  // Pipeline changes → reload stage options with colors
  const pipelineSel = document.getElementById('edfPipelineSel');
  pipelineSel?.addEventListener('change', () => {
    const pid = Number(pipelineSel.value);
    const pipeline = PIPELINES.find((p) => p.id === pid);
    const stageSel = document.getElementById('edfStageSel');
    if (stageSel && pipeline) {
      stageSel.innerHTML = pipeline.stages.map((s) =>
        `<option value="${s.id}" data-color="${s.color}">${escapeHtml(s.name)}</option>`
      ).join('');
      stageSel.value = '';
      updateStageDot(stageSel);
    }
    checkForChanges();
  });

  // Click on a field → enter edit mode (pipeline & stage open a picker modal instead)
  root.querySelectorAll('.editable-field').forEach((field) => {
    field.addEventListener('click', (e) => {
      if (e.target.closest('.edf-input') || e.target.closest('.exp-detail-actions-bar')) return;
      const fieldId = field.dataset.fieldId;
      if (fieldId === 'pipeline') { openPipelinePicker(); return; }
      if (fieldId === 'stage')    { openStagePicker();    return; }
      const cell = field.querySelector('.edf-cell');
      if (!cell) return;
      cell.classList.add('is-editing');
      const input = field.querySelector('.edf-input');
      if (input?.tagName === 'INPUT') { input.focus(); input.select(); }
    });
  });

  // Watch for actual value changes on all inputs/selects
  root.querySelectorAll('.edf-input').forEach(input => {
    input.addEventListener('input', checkForChanges);
    input.addEventListener('change', checkForChanges);
  });

  // Save button
  document.getElementById('expDetailSaveBtn')?.addEventListener('click', saveExpDetailEdits);

  // Cancel button
  document.getElementById('expDetailCancelBtn')?.addEventListener('click', () => {
    root.querySelectorAll('.edf-cell').forEach(cell => cell.classList.remove('is-editing'));
    root.querySelectorAll('.edf-input').forEach(input => { input.value = input.dataset.original || ''; });
    if (actionsBar) actionsBar.hidden = true;
  });

}

async function saveExpDetailEdits() {
  const exp = EXP_DETAIL;
  if (!exp) return;
  const root = document.getElementById('expDetailInfo');
  if (!root) return;

  const patch = {};

  // Built-in fields
  root.querySelectorAll('.editable-field[data-field-type="builtin"]').forEach((field) => {
    const fieldId = field.dataset.fieldId;
    const input = field.querySelector('.edf-input');
    if (!input) return;
    // Only include if value changed
    if (String(input.value) === String(input.dataset.original || '')) return;
    const val = input.value.trim();
    if (fieldId === 'name') patch.name = val;
    else if (fieldId === 'pipeline') patch.pipelineId = Number(input.value);
    else if (fieldId === 'stage') patch.stageId = Number(input.value);
    else if (fieldId === 'contactFirstName') patch.contactFirstName = val;
    else if (fieldId === 'contactLastName')  patch.contactLastName  = val;
    else if (fieldId === 'contactName') patch.contactName = val;
    else if (fieldId === 'contactPhone') patch.contactPhone = val;
    else if (fieldId === 'contactEmail') patch.contactEmail = val;
    else if (fieldId === 'assignedAdvisor') patch.assignedAdvisorId = input.value ? Number(input.value) : null;
    else if (fieldId === 'value') patch.value = input.value !== '' ? (Number(input.value) || 0) : 0;
  });

  // Custom fields — only changed ones
  const fieldValues = {};
  root.querySelectorAll('.editable-field[data-field-type="custom"]').forEach((field) => {
    const input = field.querySelector('.edf-input');
    if (!input) return;
    if (String(input.value) === String(input.dataset.original || '')) return;
    fieldValues[field.dataset.fieldId] = input.value.trim();
  });
  if (Object.keys(fieldValues).length) patch.fieldValues = fieldValues;

  if (!Object.keys(patch).length) {
    document.getElementById('expDetailActionsBar').hidden = true;
    return;
  }

  // Validación: si se cambió el pipeline, OBLIGAR a que también haya stageId válido.
  // Sin esto, el lead quedaría en el pipeline nuevo pero apuntando a un stage
  // del pipeline viejo (foreign key inválida).
  if (patch.pipelineId && (!patch.stageId || patch.stageId === 0)) {
    toast('Cambiar de pipeline requiere elegir también una etapa', 'error');
    openStagePicker();
    return;
  }

  // Si cambió la etapa, preguntar qué hacer si hay un bot con run activo
  if (patch.stageId && patch.stageId !== exp.stageId) {
    try {
      const targetPl = (PIPELINES || []).find(p => p.id === (patch.pipelineId || exp.pipelineId));
      const targetStage = targetPl?.stages?.find(s => s.id === patch.stageId);
      const decision = await checkBotCollision(exp.id, patch.stageId, exp.name || exp.contactName, targetStage?.name);
      if (decision === 'cancel') return;
      if (decision === 'restart') patch.botCollisionPolicy = 'restart';
    } catch (_) {}
  }

  try {
    const data = await api('PATCH', `/api/expedients/${exp.id}`, patch);
    EXP_DETAIL = data.item;
    toast('Guardado', 'success');
    renderExpDetailInfo();
  } catch (err) { toast(err.message, 'error'); }
}

async function loadExpDetailConvos() {
  const exp = EXP_DETAIL;
  if (!exp?.contactId) return;
  try {
    const data = await api('GET', `/api/conversations?contactId=${exp.contactId}`);
    EXP_DETAIL_CONVOS = data.items || [];
  } catch (err) { EXP_DETAIL_CONVOS = []; }
  renderExpDetailConvoTabs();
  if (EXP_DETAIL_CONVOS.length) {
    await selectExpDetailConvo(EXP_DETAIL_CONVOS[0].id);
  } else {
    // Limpiar mensajes del lead anterior para no mostrar chat equivocado
    EXP_DETAIL_MSGS     = [];
    EXP_DETAIL_ACTIVITY = [];
    EXP_DETAIL_CONVO_ID = null;
    const msgRoot = document.getElementById('expDetailMessages');
    if (msgRoot) msgRoot.innerHTML = '';
  }
}

// ── Tags bar en header del chat ──────────────────────────────────────────────
function renderExpLeadTagsBar() {
  const bar = document.getElementById('expLeadTagsBar');
  if (!bar || !EXP_DETAIL) return;
  const tags = EXP_DETAIL.tags || [];

  bar.innerHTML = tags.map(t => `
    <span class="exp-tag-pill" data-tag="${escapeHtml(t)}">
      ${escapeHtml(t)}
      <button class="exp-tag-pill-del" data-tag="${escapeHtml(t)}" title="Eliminar etiqueta">×</button>
    </span>
  `).join('') + `
    <button class="exp-tag-add-btn" id="expTagAddBtn" title="Añadir etiqueta">＋</button>
    <span class="exp-tag-input-wrap" id="expTagInputWrap" hidden>
      <input class="exp-tag-input" id="expTagInput" placeholder="Nueva etiqueta…" maxlength="40" autocomplete="off">
    </span>`;

  // Eliminar tag
  bar.querySelectorAll('.exp-tag-pill-del').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const tag = btn.dataset.tag;
      const newTags = (EXP_DETAIL.tags || []).filter(t => t !== tag);
      await _saveExpLeadTags(newTags);
    });
  });

  // Editar tag al hacer click en la pastilla (excepto en el ×)
  bar.querySelectorAll('.exp-tag-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      if (e.target.classList.contains('exp-tag-pill-del')) return;
      const tag = pill.dataset.tag;
      const wrap = document.getElementById('expTagInputWrap');
      const inp  = document.getElementById('expTagInput');
      if (!wrap || !inp) return;
      wrap.hidden = false;
      inp.value = tag;
      inp.dataset.editing = tag;
      inp.focus();
      inp.select();
    });
  });

  // Añadir tag
  document.getElementById('expTagAddBtn')?.addEventListener('click', () => {
    const wrap = document.getElementById('expTagInputWrap');
    const inp  = document.getElementById('expTagInput');
    if (!wrap || !inp) return;
    wrap.hidden = false;
    inp.value = '';
    delete inp.dataset.editing;
    inp.focus();
  });

  // Confirmar con Enter / cancelar con Escape
  document.getElementById('expTagInput')?.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = e.target.value.trim();
      const editing = e.target.dataset.editing;
      if (val) {
        let newTags = [...(EXP_DETAIL.tags || [])];
        if (editing) newTags = newTags.map(t => t === editing ? val : t);
        else if (!newTags.includes(val)) newTags.push(val);
        await _saveExpLeadTags(newTags);
      } else {
        document.getElementById('expTagInputWrap').hidden = true;
      }
    } else if (e.key === 'Escape') {
      document.getElementById('expTagInputWrap').hidden = true;
    }
  });

  // Cerrar al perder foco
  document.getElementById('expTagInput')?.addEventListener('blur', () => {
    setTimeout(() => {
      const wrap = document.getElementById('expTagInputWrap');
      if (wrap) wrap.hidden = true;
    }, 150);
  });
}

async function _saveExpLeadTags(newTags) {
  if (!EXP_DETAIL) return;
  try {
    await api('PATCH', `/api/expedients/${EXP_DETAIL.id}`, { tags: newTags });
    EXP_DETAIL = { ...EXP_DETAIL, tags: newTags };
    renderExpLeadTagsBar();
  } catch (e) { toast(e.message, 'error'); }
}

function renderExpDetailConvoTabs() {
  const root = document.getElementById('expDetailConvoTabs');
  if (!root) return;
  if (!EXP_DETAIL_CONVOS.length) {
    root.innerHTML = '<span style="color:#64748b;font-size:12px">Sin conversaciones</span>';
    return;
  }
  root.innerHTML = EXP_DETAIL_CONVOS.map((c) => `
    <button class="exp-detail-convo-tab ${c.id === EXP_DETAIL_CONVO_ID ? 'is-active' : ''}" data-convo-id="${c.id}">
      <span class="rh-channel-dot rh-channel-${c.provider}"></span>
      ${escapeHtml(PROVIDER_LABEL[c.provider] || c.provider)}
      ${c.unreadCount ? `<span class="rh-chat-unread-dot"></span>` : ''}
    </button>
  `).join('');
  root.querySelectorAll('.exp-detail-convo-tab').forEach((btn) => {
    btn.addEventListener('click', () => selectExpDetailConvo(Number(btn.dataset.convoId)));
  });
}

async function selectExpDetailConvo(convoId) {
  EXP_DETAIL_CONVO_ID = convoId;
  _chatSearchQuery = '';
  const si = document.getElementById('expChatSearchInput');
  if (si) si.value = '';
  renderExpDetailConvoTabs();
  updateExpDetailBotToggle(null);

  // Mark read
  api('PATCH', `/api/conversations/${convoId}/read`).catch(() => {});

  try {
    const [msgData, actData] = await Promise.all([
      api('GET', `/api/conversations/${convoId}/messages`),
      EXP_DETAIL ? api('GET', `/api/expedients/${EXP_DETAIL.id}/activity`) : Promise.resolve({ items: [] }),
    ]);
    EXP_DETAIL_MSGS     = msgData.items || [];
    EXP_DETAIL_ACTIVITY = actData.items || [];
  } catch (err) { EXP_DETAIL_MSGS = []; EXP_DETAIL_ACTIVITY = []; }

  renderExpDetailMessages();

  // Hook reply form + evaluar ventana 24h
  const form = document.getElementById('expDetailReplyForm');
  if (form) form.dataset.convoId = convoId;
  refreshExpDetailReplyState();
}

function updateExpDetailBotToggle(_convo) { /* removed — replaced by chat search */ }

const ACT_ICON = {
  created:             '🗂',
  stage_change:        '↗',
  pipeline_change:     '⇄',
  bot_start:           '▶',
  bot_done:            '✓',
  bot_error:           '✕',
  bot_killed:          '✕',
  bot_paused_manual:   '⏸',
  bot_resumed:         '▶',
  name_change:         '✎',
  contact_name_change: '✎',
  phone_change:        '✎',
  email_change:        '✎',
  tag_add:             '＋',
  tag_remove:          '－',
};

function highlightText(rawText, query) {
  const escaped = escapeHtml(rawText);
  if (!query) return escaped;
  const escapedQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escaped.replace(new RegExp(escapedQuery, 'gi'), m => `<mark class="rh-chat-hl">${m}</mark>`);
}

function _matchesSearch(item, q) {
  if (!q) return true;
  const lq = q.toLowerCase();
  if (item._kind === 'msg') {
    const body  = (item.body || '').toLowerCase();
    const tStr  = new Date(item.createdAt * 1000)
      .toLocaleString('es-MX', { day:'2-digit', month:'long', hour:'2-digit', minute:'2-digit', hourCycle: 'h23' })
      .toLowerCase();
    return body.includes(lq) || tStr.includes(lq);
  }
  if (item._kind === 'act') {
    return (item.description || '').toLowerCase().includes(lq) ||
           (item.advisor_name || '').toLowerCase().includes(lq) ||
           (item.type || '').toLowerCase().includes(lq);
  }
  return false;
}

function renderExpDetailMessages() {
  const root = document.getElementById('expDetailMessages');
  if (!root) return;
  const checkSvg = `<span class="rh-msg-status rh-read"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/><polyline points="23 11 16 18 13 15" style="opacity:.7"/></svg></span>`;

  // Mezclar mensajes y actividad por timestamp
  const msgs = (EXP_DETAIL_MSGS || []).map(m => ({ _kind: 'msg', _ts: m.createdAt, ...m }));
  const acts = (EXP_DETAIL_ACTIVITY || []).map(a => ({ _kind: 'act', _ts: a.created_at, ...a }));
  const timeline = [...msgs, ...acts].sort((a, b) => a._ts !== b._ts ? a._ts - b._ts : (a._kind === 'act' ? -1 : 1));

  const q = _chatSearchQuery.trim();
  const visible = q ? timeline.filter(i => _matchesSearch(i, q)) : timeline;

  // Update search count badge
  const clearBtn = document.getElementById('expChatSearchClear');
  if (clearBtn) clearBtn.hidden = !q;
  const searchWrap = document.getElementById('expChatSearchWrap');
  if (searchWrap) {
    searchWrap.classList.toggle('has-results', q && visible.length > 0);
    searchWrap.classList.toggle('no-results', q && visible.length === 0);
    const badge = searchWrap.querySelector('.exp-chat-search-count');
    if (badge) badge.remove();
    if (q) {
      const b = document.createElement('span');
      b.className = 'exp-chat-search-count';
      b.textContent = visible.length ? `${visible.length}` : '0';
      searchWrap.appendChild(b);
    }
  }

  if (!visible.length) {
    root.innerHTML = q
      ? `<p class="rh-messages-empty">Sin resultados para "<em>${escapeHtml(q)}</em>".</p>`
      : `<p class="rh-messages-empty">${t('chat.no_messages')}</p>`;
    return;
  }

  const expConvo = EXP_DETAIL_CONVOS.find(c => c.id === EXP_DETAIL_CONVO_ID);
  const isWhatsappExp = expConvo?.provider === 'whatsapp';
  const lastIncomingItem = timeline.reduce((acc, item) =>
    (item._kind === 'msg' && item.direction === 'incoming') ? item : acc, null);

  root.innerHTML = visible.map((item) => {
    if (item._kind === 'act') {
      const icon = ACT_ICON[item.type] || '·';
      const time = item.created_at ? new Date(item.created_at * 1000).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }) : '';
      const byLine = item.advisor_name ? `<span class="rh-act-by">${escapeHtml(item.advisor_name)}</span>` : '';
      return `<div class="rh-act-event" data-type="${item.type}">
        <span class="rh-act-icon">${icon}</span>
        <span class="rh-act-text">${highlightText(item.description, q)}${byLine}</span>
        <span class="rh-act-time">${time}</span>
      </div>`;
    }
    const dir = item.direction === 'incoming' ? 'incoming' : 'outgoing';
    const isLastIncoming = item === lastIncomingItem;
    const footExtra = isLastIncoming && isWhatsappExp ? wa24Html('whatsapp', item.createdAt) : '';
    const statusIco = msgStatusHtml(item);
    const footContent = dir === 'incoming'
      ? `Contacto · <span class="rh-message-meta">${fmtMsgTime(item.createdAt)}</span>${footExtra}`
      : `<span class="rh-message-meta">${fmtMsgTime(item.createdAt)}${statusIco ? ' ' + statusIco : ''}</span>`;
    const bubbleClass = (dir === 'outgoing' && item.status === 'failed') ? 'rh-bubble is-failed' : 'rh-bubble';
    const errLine = (dir === 'outgoing' && item.status === 'failed' && item.errorReason)
      ? `<div class="rh-msg-error">⚠ ${escapeHtml(translateErrorReason(item.errorReason))}</div>` : '';
    return `
      <article class="rh-message rh-${dir}">
        <div class="${bubbleClass}">${highlightText(item.body, q).replace(/\n/g, '<br/>')}</div>
        ${errLine}
        <div class="rh-message-foot${dir === 'outgoing' ? ' rh-foot-out' : ''}">${footContent}</div>
      </article>`;
  }).join('');

  if (!q) root.scrollTop = root.scrollHeight;
}

function setupExpDetail() {
  // Back button: usa history.back() para que back/forward del navegador
  // queden sincronizados. Si no hay historial previo (deep link), fallback a EXP_DETAIL_FROM.
  document.getElementById('expDetailBack')?.addEventListener('click', () => {
    _stopBotRunsPolling();
    localStorage.removeItem('lastExpDetailId');
    localStorage.setItem('lastView', EXP_DETAIL_FROM);
    // Si el history.state previo es de wapi101 → history.back() funciona.
    // Si llegamos por deep link directo → no hay back interno, hacemos showView manual.
    if (history.length > 1 && history.state && history.state.type) {
      history.back();
    } else {
      showView(EXP_DETAIL_FROM);
    }
  });

  // Delete button (lives in the static HTML, wired once)
  document.getElementById('expDetailDeleteBtn')?.addEventListener('click', async () => {
    if (!EXP_DETAIL) return;
    if (!confirm(`¿Eliminar el expediente "${EXP_DETAIL.name}"? Esta acción no se puede deshacer.`)) return;
    try {
      await api('DELETE', `/api/expedients/${EXP_DETAIL.id}`);
      toast('Lead eliminado', 'success');
      showView(EXP_DETAIL_FROM);
      EXP_DETAIL = null;
      if (EXP_DETAIL_FROM === 'expedientes') await loadExpedients();
      else if (EXP_DETAIL_FROM === 'pipelines') await loadPipelinesKanban();
    } catch (err) { toast(err.message, 'error'); }
  });

  // Chat search
  const searchInput = document.getElementById('expChatSearchInput');
  const searchClear = document.getElementById('expChatSearchClear');
  searchInput?.addEventListener('input', () => {
    _chatSearchQuery = searchInput.value;
    renderExpDetailMessages();
  });
  searchClear?.addEventListener('click', () => {
    _chatSearchQuery = '';
    if (searchInput) searchInput.value = '';
    renderExpDetailMessages();
  });

  // Reply form
  const form = document.getElementById('expDetailReplyForm');
  const textarea = document.getElementById('expDetailReplyText');
  let isSendingExpDetail = false;
  textarea?.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  });
  textarea?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isSendingExpDetail) return;
      form?.requestSubmit();
    }
  });
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSendingExpDetail) return;
    const convoId = Number(form.dataset.convoId);
    if (!convoId) { toast('Selecciona una conversación', 'warning'); return; }
    // Bloquear si ventana 24h cerrada (WhatsApp Business API)
    const convo = EXP_DETAIL_CONVOS.find((c) => c.id === convoId);
    if (isWaWindowClosed(convo)) {
      toast('⏰ Ventana 24h cerrada — solo puedes enviar plantillas aprobadas', 'warning');
      return;
    }
    const body = textarea?.value.trim();
    if (!body) return;
    isSendingExpDetail = true;
    if (textarea) { textarea.value = ''; textarea.style.height = 'auto'; }
    try {
      const msg = await api('POST', `/api/conversations/${convoId}/messages`, { body });
      EXP_DETAIL_MSGS.push(msg);
      renderExpDetailMessages();
      // Reflect in convo list
      if (convo) { convo.lastMessage = body; }
    } catch (err) {
      toast(err.message, 'error');
      if (textarea) { textarea.value = body; }
    } finally {
      isSendingExpDetail = false;
    }
  });

  // Adjuntos en el chat del expediente — reusa el flujo del chat principal
  setupExpDetailAttachMenu();
}

// Configuración del menú adjuntar dentro del detalle del expediente.
// Reusa _rhPendingAttachment + showAttachPreview pero con su propio convoId source.
function setupExpDetailAttachMenu() {
  const btn = document.getElementById('expDetailAttachBtn');
  const menu = document.getElementById('expDetailAttachMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    // Bloquear si ventana 24h cerrada
    const convoId = Number(document.getElementById('expDetailReplyForm')?.dataset.convoId);
    const convo = EXP_DETAIL_CONVOS.find(c => c.id === convoId);
    if (isWaWindowClosed(convo)) {
      toast('⏰ Ventana 24h cerrada — no puedes enviar archivos, solo plantillas aprobadas', 'warning');
      return;
    }
    // Filtrar opciones según provider
    const supported = PROVIDER_MEDIA_SUPPORT[convo?.provider] || PROVIDER_MEDIA_SUPPORT.whatsapp;
    menu.querySelectorAll('[data-attach]').forEach(opt => {
      opt.hidden = !supported.has(opt.dataset.attach);
    });
    menu.hidden = !menu.hidden;
  });
  document.addEventListener('click', (e) => {
    if (menu.hidden) return;
    if (!menu.contains(e.target) && e.target !== btn) menu.hidden = true;
  });
  menu.querySelectorAll('[data-attach]').forEach(opt => {
    opt.addEventListener('click', () => {
      menu.hidden = true;
      const type = opt.dataset.attach;
      // Abrimos un picker dedicado por tipo
      const tmp = document.createElement('input');
      tmp.type = 'file';
      tmp.style.display = 'none';
      if (type === 'image')         tmp.accept = 'image/jpeg,image/png';
      else if (type === 'video')    tmp.accept = 'video/mp4,video/3gpp,.mp4,.3gp';
      else if (type === 'audio')    tmp.accept = 'audio/mpeg,audio/mp3,audio/ogg,audio/aac,audio/mp4,.mp3,.ogg,.aac,.m4a';
      else if (type === 'document') tmp.accept = 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.pdf,.doc,.docx,.xls,.xlsx,.txt';
      else if (type === 'record-audio') { startVoiceRecording(); _rhAttachOriginConvoId = Number(document.getElementById('expDetailReplyForm')?.dataset.convoId); return; }
      tmp.addEventListener('change', () => {
        // Marcar el origen como expediente para que sendAttachmentNow use ese convoId
        _rhAttachOriginConvoId = Number(document.getElementById('expDetailReplyForm')?.dataset.convoId);
        onAttachFileSelected(tmp.files?.[0], type);
      });
      tmp.click();
    });
  });
}

// Refresca el estado del reply form del detalle de expediente (banner 24h, disabled)
function refreshExpDetailReplyState() {
  const form = document.getElementById('expDetailReplyForm');
  if (!form) return;
  const convoId = Number(form.dataset.convoId);
  const convo = EXP_DETAIL_CONVOS.find((c) => c.id === convoId);
  updateReplyFormStateGeneric(form, convo);
}

// Versión genérica que recibe el form como parámetro (reutiliza la lógica de
// updateReplyFormState pero apuntando a un form específico).
function updateReplyFormStateGeneric(form, convo) {
  if (!form) return;
  const textarea = form.querySelector('textarea');
  const sendBtn  = form.querySelector('.rh-send-button');
  const closed = isWaWindowClosed(convo);
  form.classList.toggle('is-window-closed', closed);
  if (textarea) {
    textarea.disabled = closed;
    textarea.placeholder = closed
      ? 'Ventana 24h cerrada — solo plantillas aprobadas'
      : 'Escribe un mensaje…';
  }
  if (sendBtn) sendBtn.disabled = closed;
  let banner = form.querySelector('.rh-window-closed-banner');
  if (closed) {
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'rh-window-closed-banner';
      banner.innerHTML = `
        <span class="rh-wcb-icon">⏰</span>
        <div class="rh-wcb-text">
          <strong>Ventana de 24h cerrada</strong>
          <span>Han pasado más de 24 horas desde el último mensaje del lead. Solo puedes enviar <em>plantillas aprobadas</em> por Meta.</span>
        </div>
        <button type="button" class="rh-wcb-btn" data-rh-wcb-tpl>📋 Enviar plantilla</button>`;
      form.prepend(banner);
      banner.querySelector('[data-rh-wcb-tpl]')?.addEventListener('click', () => {
        document.getElementById('expDetailTplTrigger')?.click();
      });
    }
    banner.hidden = false;
  } else if (banner) {
    banner.remove();
  }
}

// ─── Modal de expediente ───
async function openExpModal(idOrNull = null) {
  EXP_EDIT = null;
  EXP_TAGS = [];
  EXP_CONTACT_ID = null;

  await loadExpFieldDefs();

  if (idOrNull) {
    try {
      const data = await api('GET', `/api/expedients/${idOrNull}`);
      EXP_EDIT = data.item;
    } catch (err) { toast('Error cargando lead', 'error'); return; }
  }

  const exp = EXP_EDIT;
  document.getElementById('expModalTitle').textContent = exp ? t('exp.modal.edit_title') : t('exp.modal.new_title');
  document.getElementById('expName').value = exp?.name || '';
  document.getElementById('expDeleteBtn').hidden = !exp;
  document.getElementById('expModalError').hidden = true;

  // Contacto
  setExpContact(exp?.contactId, exp?.contactName);

  // Pipeline / Stage
  populateExpPipelineStage(exp?.pipelineId, exp?.stageId);

  // Tags
  EXP_TAGS = exp?.tags ? [...exp.tags] : [];
  renderExpTags();

  // Valor del lead
  const expValueRow = document.getElementById('expValueRow');
  if (expValueRow) {
    expValueRow.hidden = !isLeadValueEnabled();
    const expValueInput = document.getElementById('expValue');
    if (expValueInput) expValueInput.value = (exp?.value && exp.value > 0) ? exp.value : '';
  }

  // Campos personalizados
  renderCustomFieldInputs(exp);

  document.getElementById('expModal').hidden = false;
  document.getElementById('expContactSearch').focus();
}

function closeExpModal() {
  document.getElementById('expModal').hidden = true;
  EXP_EDIT = null;
}

function setExpContact(contactId, contactName) {
  EXP_CONTACT_ID = contactId || null;
  const searchInput = document.getElementById('expContactSearch');
  const selected = document.getElementById('expContactSelected');
  const selectedName = document.getElementById('expContactSelectedName');
  const results = document.getElementById('expContactResults');

  if (contactId && contactName) {
    searchInput.hidden = true;
    results.hidden = true;
    selectedName.textContent = contactName;
    selected.hidden = false;
    document.getElementById('expContactId').value = contactId;
  } else {
    searchInput.hidden = false;
    searchInput.value = '';
    selected.hidden = true;
    results.hidden = true;
    document.getElementById('expContactId').value = '';
  }
}

function populateExpPipelineStage(pipelineId, stageId) {
  const pSel = document.getElementById('expPipeline');
  pSel.innerHTML = '<option value="">Selecciona pipeline...</option>' +
    PIPELINES.map((p) => `<option value="${p.id}" ${p.id === pipelineId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('');

  function updateStages() {
    const pid = Number(pSel.value);
    const pipeline = PIPELINES.find((p) => p.id === pid);
    const sSel = document.getElementById('expStage');
    sSel.innerHTML = '<option value="">Selecciona etapa...</option>' +
      (pipeline?.stages || []).map((s) => `<option value="${s.id}" ${s.id === stageId ? 'selected' : ''}>${escapeHtml(s.name)}</option>`).join('');
  }
  pSel.onchange = updateStages;
  updateStages();
}

function renderExpTags() {
  const chips = document.getElementById('expTagsChips');
  chips.innerHTML = EXP_TAGS.map((t) => `
    <span class="exp-tag-chip">${escapeHtml(t)}
      <button type="button" data-rm-tag="${escapeHtml(t)}">×</button>
    </span>`).join('');
  chips.querySelectorAll('[data-rm-tag]').forEach((btn) => {
    btn.addEventListener('click', () => {
      EXP_TAGS = EXP_TAGS.filter((t) => t !== btn.dataset.rmTag);
      renderExpTags();
    });
  });
}

function renderCustomFieldInputs(exp) {
  const container = document.getElementById('expCustomFields');
  if (!EXP_FIELD_DEFS.length) {
    container.innerHTML = `<div class="exp-form-custom-title">Campos personalizados</div>
      <div class="exp-form-custom-empty">Sin campos aún.<br><a onclick="openFieldsModal()">Configurar campos →</a></div>`;
    return;
  }
  const values = {};
  (exp?.fieldValues || []).forEach((fv) => { values[fv.fieldId] = fv.value; });

  container.innerHTML = `<div class="exp-form-custom-title">Campos personalizados</div>` +
    EXP_FIELD_DEFS.map((fd) => {
      const val = values[fd.id] ?? '';
      return `<div class="int-field">
        <label>${escapeHtml(fd.label)}</label>
        <div class="custom-field-input">${renderFieldInput(fd, val)}</div>
      </div>`;
    }).join('');
}

function renderFieldInput(fd, val) {
  const id = `cf_${fd.id}`;
  switch (fd.fieldType) {
    case 'text':    return `<input type="text" id="${id}" data-field-id="${fd.id}" value="${escapeHtml(val)}" autocomplete="off" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit" />`;
    case 'number':  return `<input type="number" id="${id}" data-field-id="${fd.id}" value="${escapeHtml(val)}" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit" />`;
    case 'url':     return `<input type="url" id="${id}" data-field-id="${fd.id}" value="${escapeHtml(val)}" placeholder="https://" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit" />`;
    case 'date':
    case 'birthday':return `<input type="date" id="${id}" data-field-id="${fd.id}" value="${escapeHtml(val)}" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit" />`;
    case 'datetime':return `<input type="datetime-local" id="${id}" data-field-id="${fd.id}" value="${escapeHtml(val)}" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit" />`;
    case 'long_text':return `<textarea id="${id}" data-field-id="${fd.id}" rows="3" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit;resize:vertical">${escapeHtml(val)}</textarea>`;
    case 'toggle':
      return `<div class="custom-field-toggle">
        <label class="toggle-switch">
          <input type="checkbox" id="${id}" data-field-id="${fd.id}" ${val === 'true' ? 'checked' : ''} />
          <span class="toggle-track"></span>
        </label>
        <span style="font-size:13px">${val === 'true' ? 'Sí' : 'No'}</span>
      </div>`;
    case 'select': {
      const opts = fd.options.map((o) => `<option value="${escapeHtml(o)}" ${o===val?'selected':''}>${escapeHtml(o)}</option>`).join('');
      return `<select id="${id}" data-field-id="${fd.id}"><option value="">— Sin selección —</option>${opts}</select>`;
    }
    case 'multi_select': {
      return fd.options.map((o) =>
        `<label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;padding:3px 0">
          <input type="checkbox" data-field-id="${fd.id}" data-ms-val="${escapeHtml(o)}" ${(val||'').split(',').includes(o)?'checked':''} />
          ${escapeHtml(o)}
        </label>`).join('');
    }
    default: return `<input type="text" id="${id}" data-field-id="${fd.id}" value="${escapeHtml(val)}" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;box-sizing:border-box;font-family:inherit" />`;
  }
}

function collectCustomFieldValues() {
  const values = {};
  EXP_FIELD_DEFS.forEach((fd) => {
    if (fd.fieldType === 'toggle') {
      const el = document.querySelector(`[data-field-id="${fd.id}"][type="checkbox"]:not([data-ms-val])`);
      values[fd.id] = el ? String(el.checked) : 'false';
    } else if (fd.fieldType === 'multi_select') {
      const checked = [...document.querySelectorAll(`[data-field-id="${fd.id}"][data-ms-val]:checked`)].map((cb) => cb.dataset.msVal);
      values[fd.id] = checked.join(',');
    } else {
      const el = document.getElementById(`cf_${fd.id}`);
      values[fd.id] = el ? el.value.trim() : '';
    }
  });
  return values;
}

// ─── Guardar expediente ───
async function saveExpedient(e) {
  e.preventDefault();
  const errBox = document.getElementById('expModalError');
  const saveBtn = document.getElementById('expSaveBtn');
  errBox.hidden = true;

  const contactId = EXP_CONTACT_ID;
  const pipelineId = Number(document.getElementById('expPipeline').value) || null;
  const stageId = Number(document.getElementById('expStage').value) || null;
  const name = document.getElementById('expName').value.trim();
  const rawValue = document.getElementById('expValue')?.value;
  const value = isLeadValueEnabled() && rawValue !== '' ? (Number(rawValue) || 0) : undefined;
  const fieldValues = collectCustomFieldValues();

  if (!contactId) { errBox.textContent = 'Selecciona un contacto'; errBox.hidden = false; return; }
  if (!pipelineId) { errBox.textContent = 'Selecciona un pipeline'; errBox.hidden = false; return; }
  if (!stageId) { errBox.textContent = 'Selecciona una etapa'; errBox.hidden = false; return; }

  saveBtn.disabled = true;
  saveBtn.textContent = 'Guardando…';
  try {
    if (EXP_EDIT) {
      await api('PATCH', `/api/expedients/${EXP_EDIT.id}`, { contactId, pipelineId, stageId, name, tags: EXP_TAGS, fieldValues, ...(value !== undefined ? { value } : {}) });
      toast('Lead actualizado', 'success');
    } else {
      await api('POST', '/api/expedients', { contactId, pipelineId, stageId, name, tags: EXP_TAGS, fieldValues, ...(value !== undefined ? { value } : {}) });
      toast('Lead creado', 'success');
    }
    closeExpModal();
    await loadExpedients();
  } catch (err) {
    errBox.textContent = err.message;
    errBox.hidden = false;
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Guardar';
  }
}

// ─── Modal de campos personalizados ───
function openFieldsModal() {
  renderFieldDefs();
  document.getElementById('expFieldsModal').hidden = false;
  document.getElementById('fieldsNewForm').hidden = true;
}
function closeFieldsModal() { document.getElementById('expFieldsModal').hidden = true; }

function renderFieldDefs() {
  const list = document.getElementById('fieldDefsList');
  const empty = document.getElementById('fieldDefsEmpty');
  const typeLabels = {
    text: 'Texto', number: 'Número', toggle: 'Interruptor', select: 'Selección',
    multi_select: 'Multi-selección', date: 'Día', url: 'URL', long_text: 'Texto largo',
    birthday: 'Cumpleaños', datetime: 'Fecha y hora',
  };
  if (!EXP_FIELD_DEFS.length) {
    list.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.innerHTML = EXP_FIELD_DEFS.map((fd) => `
    <div class="field-def-row">
      <span class="field-def-label">${escapeHtml(fd.label)}</span>
      <span class="field-def-type">${typeLabels[fd.fieldType] || fd.fieldType}</span>
      <div class="field-def-actions">
        <button class="btn btn--xs btn--ghost" data-action="edit-field" data-id="${fd.id}" data-label="${escapeHtml(fd.label)}">Editar</button>
        <button class="btn btn--xs btn--danger-ghost" data-action="del-field" data-id="${fd.id}">Eliminar</button>
      </div>
    </div>`).join('');

  list.querySelectorAll('[data-action="edit-field"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const fd = EXP_FIELD_DEFS.find(f => String(f.id) === btn.dataset.id);
      if (!fd) return;
      // Ocultar formulario de nuevo campo si estaba abierto
      document.getElementById('fieldsNewForm').hidden = true;
      document.getElementById('fieldsAddRow').hidden = false;
      // Poblar y mostrar formulario de edición
      document.getElementById('editFieldLabel').value = fd.label;
      const radio = document.querySelector(`input[name="editFieldType"][value="${fd.fieldType}"]`);
      if (radio) radio.checked = true;
      document.getElementById('fieldsEditError').hidden = true;
      document.getElementById('fieldsEditSave').dataset.id = fd.id;
      const editForm = document.getElementById('fieldsEditForm');
      editForm.hidden = false;
      editForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      document.getElementById('editFieldLabel').focus();
    });
  });

  list.querySelectorAll('[data-action="del-field"]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      if (!confirm('¿Eliminar este campo? Se perderán todos los valores guardados.')) return;
      try {
        await api('DELETE', `/api/expedients/field-defs/${btn.dataset.id}`);
        await loadExpFieldDefs();
        renderFieldDefs();
        toast('Campo eliminado', 'success');
      } catch (err) { toast(err.message, 'error'); }
    });
  });
}

// ─── Búsqueda de contactos en el modal ───
let _contactSearchTimer = null;
function setupExpContactSearch() {
  const input = document.getElementById('expContactSearch');
  const results = document.getElementById('expContactResults');
  if (!input) return;

  input.addEventListener('input', () => {
    clearTimeout(_contactSearchTimer);
    const q = input.value.trim();
    if (!q) { results.hidden = true; return; }
    _contactSearchTimer = setTimeout(async () => {
      try {
        const data = await api('GET', `/api/expedients/contacts-search?q=${encodeURIComponent(q)}`);
        if (!data.items.length) {
          results.innerHTML = '<div class="exp-contact-result-item" style="color:var(--text-muted)">Sin resultados</div>';
        } else {
          results.innerHTML = data.items.map((c) => `
            <div class="exp-contact-result-item" data-id="${c.id}" data-name="${escapeHtml(c.name)}">
              <div class="exp-contact-result-name">${escapeHtml(c.name)}</div>
              <div class="exp-contact-result-meta">${escapeHtml(c.phone || c.email || '')}</div>
            </div>`).join('');
          results.querySelectorAll('[data-id]').forEach((item) => {
            item.addEventListener('click', () => {
              setExpContact(Number(item.dataset.id), item.dataset.name);
            });
          });
        }
        results.hidden = false;
      } catch (_) {}
    }, 250);
  });

  document.getElementById('expContactClear')?.addEventListener('click', () => setExpContact(null, null));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.exp-contact-search')) results.hidden = true;
  });

  // ─── Crear contacto rápido ───
  const quickForm = document.getElementById('expQuickContact');
  const newContactBtn = document.getElementById('expNewContactBtn');

  newContactBtn?.addEventListener('click', () => {
    const isOpen = !quickForm.hidden;
    if (isOpen) {
      quickForm.hidden = true;
      newContactBtn.textContent = '+ Crear contacto';
    } else {
      quickForm.hidden = false;
      newContactBtn.textContent = '✕ Cancelar';
      document.getElementById('qcFirstName').focus();
      // Limpiar
      document.getElementById('qcFirstName').value = '';
      document.getElementById('qcLastName').value = '';
      document.getElementById('qcPhone').value = '';
      document.getElementById('qcEmail').value = '';
      document.getElementById('qcError').hidden = true;
    }
  });

  document.getElementById('qcCancelBtn')?.addEventListener('click', () => {
    quickForm.hidden = true;
    newContactBtn.textContent = '+ Crear contacto';
  });

  document.getElementById('qcSaveBtn')?.addEventListener('click', async () => {
    const firstName = document.getElementById('qcFirstName').value.trim();
    const lastName  = document.getElementById('qcLastName').value.trim();
    const phone     = document.getElementById('qcPhone').value.trim();
    const email     = document.getElementById('qcEmail').value.trim();
    const errBox    = document.getElementById('qcError');
    const saveBtn   = document.getElementById('qcSaveBtn');

    if (!firstName) {
      errBox.textContent = 'El nombre es obligatorio';
      errBox.hidden = false;
      document.getElementById('qcFirstName').focus();
      return;
    }

    errBox.hidden = true;
    saveBtn.disabled = true;
    saveBtn.textContent = 'Creando…';

    try {
      const data = await api('POST', '/api/contacts', { firstName, lastName, phone, email });
      const contact = data.item;
      const fullName = [contact.firstName || contact.first_name, contact.lastName || contact.last_name].filter(Boolean).join(' ');
      setExpContact(contact.id, fullName);
      quickForm.hidden = true;
      newContactBtn.textContent = '+ Crear contacto';
      toast(`Contacto "${fullName}" creado y seleccionado`, 'success');
    } catch (err) {
      errBox.textContent = err.message;
      errBox.hidden = false;
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Crear y seleccionar';
    }
  });
}

// ─── Import de expedientes ───
let EXP_IMPORT_PARSED = [];

function openExpImportModal() {
  document.getElementById('expImportText').value = '';
  document.getElementById('expImportPreview').innerHTML = '';
  document.getElementById('expImportSaveBtn').disabled = true;
  EXP_IMPORT_PARSED = [];
  document.getElementById('expImportModal').hidden = false;
}
function closeExpImportModal() { document.getElementById('expImportModal').hidden = true; }

function parseExpImport() {
  const raw = document.getElementById('expImportText').value;
  const preview = document.getElementById('expImportPreview');
  const saveBtn = document.getElementById('expImportSaveBtn');
  EXP_IMPORT_PARSED = [];

  const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
  if (!lines.length) { preview.innerHTML = '<p style="color:var(--text-muted);font-size:13px">Pega al menos una línea.</p>'; return; }

  const rows = lines.map((line) => {
    const parts = line.split(',').map((p) => p.trim());
    return {
      name:     parts[0] || '',
      contact:  parts[1] || '',
      pipeline: parts[2] || '',
      stage:    parts[3] || '',
    };
  });

  EXP_IMPORT_PARSED = rows;
  const thead = `<tr><th>Nombre</th><th>Contacto</th><th>Pipeline</th><th>Etapa</th></tr>`;
  const tbody = rows.map((r) => `<tr>
    <td>${escapeHtml(r.name || '—')}</td>
    <td>${escapeHtml(r.contact)}</td>
    <td>${escapeHtml(r.pipeline)}</td>
    <td>${escapeHtml(r.stage)}</td>
  </tr>`).join('');
  preview.innerHTML = `<table class="exp-table" style="margin-top:0"><thead>${thead}</thead><tbody>${tbody}</tbody></table>`;
  saveBtn.disabled = false;
}

async function importExpedients() {
  if (!EXP_IMPORT_PARSED.length) return;
  const btn = document.getElementById('expImportSaveBtn');
  btn.disabled = true;
  btn.textContent = 'Importando…';
  let ok = 0, fail = 0;

  for (const row of EXP_IMPORT_PARSED) {
    try {
      // Buscar contacto por nombre o teléfono
      const contactData = await api('GET', `/api/expedients/contacts-search?q=${encodeURIComponent(row.contact)}`);
      const contact = contactData.items[0];
      if (!contact) { fail++; continue; }

      // Buscar pipeline
      const pipeline = PIPELINES.find((p) => p.name.toLowerCase().includes((row.pipeline || '').toLowerCase()));
      if (!pipeline) { fail++; continue; }

      // Buscar etapa
      const stage = pipeline.stages.find((s) => s.name.toLowerCase().includes((row.stage || '').toLowerCase()));
      if (!stage) { fail++; continue; }

      await api('POST', '/api/expedients', {
        contactId: contact.id,
        pipelineId: pipeline.id,
        stageId: stage.id,
        name: row.name || null,
        tags: [],
      });
      ok++;
    } catch (_) { fail++; }
  }

  closeExpImportModal();
  await loadExpedients();
  btn.disabled = false;
  btn.textContent = 'Importar';
  toast(`Importados: ${ok} correctos${fail ? `, ${fail} no encontrados` : ''}`, ok ? 'success' : 'error');
}

function setupExpedients() {
  // Buscar (text — syncs with EXP_FILTERS via topbar search when on expedientes view)
  let _expSearchTimer = null;
  document.getElementById('topbarSearchInput')?.addEventListener('input', (e) => {
    if (document.body.dataset.viewActive !== 'expedientes') return;
    clearTimeout(_expSearchTimer);
    _expSearchTimer = setTimeout(() => {
      EXP_FILTERS.q = e.target.value.trim();
      EXP_STATE.search = EXP_FILTERS.q;
      EXP_STATE.page = 1;
      updateFilterBadge('exp');
      loadExpedients();
    }, 320);
  });

  // Sort dropdown
  const sortBtn = document.getElementById('expSortBtn');
  const sortDrop = document.getElementById('expSortDropdown');
  sortBtn?.addEventListener('click', (e) => { e.stopPropagation(); sortDrop.hidden = !sortDrop.hidden; });
  document.addEventListener('click', (e) => { if (!e.target.closest('.sort-wrapper')) sortDrop && (sortDrop.hidden = true); });
  document.querySelectorAll('#expSortDropdown .sort-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      EXP_STATE.sortBy  = btn.dataset.expSort;
      EXP_STATE.sortDir = btn.dataset.expDir;
      EXP_STATE.page = 1;
      document.getElementById('expSortLabel').textContent = btn.dataset.label;
      document.querySelectorAll('#expSortDropdown .sort-option').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      sortDrop.hidden = true;
      loadExpedients();
    });
  });

  // Tamaño de página
  document.getElementById('expPageSize')?.addEventListener('change', (e) => {
    EXP_STATE.pageSize = Number(e.target.value);
    EXP_STATE.page = 1;
    loadExpedients();
  });

  // Botones add
  document.getElementById('expAddBtn')?.addEventListener('click', () => openExpModal());
  document.getElementById('expAddBtnEmpty')?.addEventListener('click', () => openExpModal());

  // Import
  document.getElementById('expImportBtn')?.addEventListener('click', openExpImportModal);
  document.querySelectorAll('[data-close-exp-import]').forEach((el) => el.addEventListener('click', closeExpImportModal));
  document.getElementById('expImportParseBtn')?.addEventListener('click', parseExpImport);
  document.getElementById('expImportSaveBtn')?.addEventListener('click', importExpedients);

  // Modal expediente
  document.querySelectorAll('[data-close-exp]').forEach((el) => el.addEventListener('click', closeExpModal));
  document.getElementById('expForm')?.addEventListener('submit', saveExpedient);
  document.getElementById('expDeleteBtn')?.addEventListener('click', async () => {
    if (!EXP_EDIT || !confirm(`¿Eliminar el lead "${EXP_EDIT.name || 'sin nombre'}"?`)) return;
    try {
      await api('DELETE', `/api/expedients/${EXP_EDIT.id}`);
      closeExpModal();
      await loadExpedients();
      toast('Lead eliminado', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Tags input
  document.getElementById('expTagsField')?.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ',') && !e.shiftKey) {
      e.preventDefault();
      const val = e.target.value.trim().replace(/,$/, '');
      if (val && !EXP_TAGS.includes(val)) { EXP_TAGS.push(val); renderExpTags(); }
      e.target.value = '';
    }
  });
  document.getElementById('expTagsInput')?.addEventListener('click', () => {
    document.getElementById('expTagsField').focus();
  });

  // Campos personalizados
  document.getElementById('expFieldsBtn')?.addEventListener('click', async () => {
    await loadExpFieldDefs();
    openFieldsModal();
  });
  document.querySelectorAll('[data-close-fields]').forEach((el) => el.addEventListener('click', closeFieldsModal));

  const fieldsAddBtn = document.getElementById('fieldsAddBtn');
  const fieldsNewForm = document.getElementById('fieldsNewForm');
  fieldsAddBtn?.addEventListener('click', () => {
    fieldsNewForm.hidden = false;
    fieldsAddBtn.hidden = true;
    document.getElementById('newFieldLabel').focus();
  });
  document.getElementById('fieldsNewCancel')?.addEventListener('click', () => {
    fieldsNewForm.hidden = true;
    fieldsAddBtn.hidden = false;
    document.getElementById('fieldsNewError').hidden = true;
    document.getElementById('newFieldLabel').value = '';
  });

  // Mostrar/ocultar opciones según tipo
  document.querySelectorAll('input[name="newFieldType"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const needsOptions = ['select', 'multi_select'].includes(radio.value);
      document.getElementById('fieldOptionsWrap').hidden = !needsOptions;
    });
  });

  // ── Editar campo existente ──
  document.getElementById('fieldsEditCancel')?.addEventListener('click', () => {
    document.getElementById('fieldsEditForm').hidden = true;
    document.getElementById('fieldsEditError').hidden = true;
  });

  document.getElementById('fieldsEditSave')?.addEventListener('click', async () => {
    const id = document.getElementById('fieldsEditSave').dataset.id;
    const label = document.getElementById('editFieldLabel').value.trim();
    const fieldType = document.querySelector('input[name="editFieldType"]:checked')?.value || 'text';
    const errBox = document.getElementById('fieldsEditError');
    errBox.hidden = true;
    if (!label) { errBox.textContent = 'El nombre es obligatorio'; errBox.hidden = false; return; }
    try {
      await api('PATCH', `/api/expedients/field-defs/${id}`, { label, fieldType });
      await loadExpFieldDefs();
      renderFieldDefs();
      document.getElementById('fieldsEditForm').hidden = true;
      toast('Campo actualizado', 'success');
    } catch (err) { errBox.textContent = err.message; errBox.hidden = false; }
  });

  document.getElementById('fieldsNewSave')?.addEventListener('click', async () => {
    const label = document.getElementById('newFieldLabel').value.trim();
    const fieldType = document.querySelector('input[name="newFieldType"]:checked')?.value || 'text';
    const optionsRaw = document.getElementById('newFieldOptions').value.trim();
    const options = ['select', 'multi_select'].includes(fieldType)
      ? optionsRaw.split('\n').map((o) => o.trim()).filter(Boolean)
      : [];
    const errBox = document.getElementById('fieldsNewError');
    errBox.hidden = true;
    try {
      await api('POST', '/api/expedients/field-defs', { entity: 'expedient', label, fieldType, options });
      await loadExpFieldDefs();
      renderFieldDefs();
      document.getElementById('fieldsNewForm').hidden = true;
      document.getElementById('fieldsAddBtn').hidden = false;
      document.getElementById('newFieldLabel').value = '';
      document.getElementById('newFieldOptions').value = '';
      toast('Campo agregado', 'success');
    } catch (err) {
      errBox.textContent = err.message;
      errBox.hidden = false;
    }
  });

  setupExpContactSearch();
}

// ════════════════════════════════
// BOT BUILDER
// ════════════════════════════════
let sbBots = [];
let sbCurrentId = null;   // null = nuevo
let sbCurrentIssues = [];  // issues del bot abierto (referencias rotas)
let sbSteps = [];         // steps del bot en edición
let sbStepCounter = 0;
let sbTagIds = [];        // tag IDs asignados al bot en edición
let _botTags = [];
let _botTagFilter = null; // null = todos, number = id de tag
let _botSearch = '';      // texto de búsqueda en lista de bots

// Verifica si un bot matchea el query (case-insensitive). Busca en:
// - nombre del bot
// - texto del disparador (keyword, etc.)
// - nombre del pipeline + etapa cuando trigger es pipeline_stage
// - nombres de etiquetas asignadas
// - tipos de step (mensaje, plantilla, etapa, etc.)
function _botMatchesQuery(bot, q) {
  if ((bot.name || '').toLowerCase().includes(q)) return true;
  if ((bot.trigger_value || '').toLowerCase().includes(q)) return true;
  // Trigger pipeline_stage / pipeline_stage_leave → resolver pipeline + stage
  if ((bot.trigger_type === 'pipeline_stage' || bot.trigger_type === 'pipeline_stage_leave') && bot.trigger_value) {
    const stageId = Number(bot.trigger_value);
    const info = _resolveStage(stageId);
    if (info) {
      const text = `${info.pipelineName} ${info.stageName}`.toLowerCase();
      if (text.includes(q)) return true;
    }
  }
  // Etiquetas
  if (Array.isArray(bot.tags) && bot.tags.some(t => (t.name || '').toLowerCase().includes(q))) return true;
  // Pipelines y etapas dentro de los steps
  if (Array.isArray(bot.steps)) {
    for (const step of bot.steps) {
      const c = step.config || {};
      // Step "stage" → buscar pipeline y etapa
      if (step.type === 'stage') {
        if ((c.stageName || '').toLowerCase().includes(q)) return true;
        const pl = (PIPELINES || []).find(p => p.id == c.pipelineId);
        if (pl && (pl.name || '').toLowerCase().includes(q)) return true;
      }
      // Step "template" → buscar nombre de plantilla
      if (step.type === 'template') {
        const tpl = (_tplItems || []).find(t => t.id == c.templateId);
        if (tpl && ((tpl.displayName || tpl.name || '').toLowerCase().includes(q))) return true;
      }
      // Step "tag" → contenido del tag
      if (step.type === 'tag' && (c.tag || '').toLowerCase().includes(q)) return true;
      // Step "message" → cuerpo
      if (step.type === 'message' && (c.text || '').toLowerCase().includes(q)) return true;
    }
  }
  return false;
}
// Recuperar preferencia de orden persistida
let _botSort = (() => { try { return localStorage.getItem('botSort') || 'manual'; } catch { return 'manual'; } })();
// Persistir cambios de orden
function _persistBotSort(v) { try { localStorage.setItem('botSort', v); } catch {} }

function formatBotDate(ts) {
  if (!ts) return '';
  const d = new Date(ts * 1000);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
}

function sortBots(bots) {
  const arr = bots.slice();
  switch (_botSort) {
    case 'manual':
      // Respetar el orden que ya viene del backend (ORDER BY sort_order ASC).
      // Si el bot no tiene sort_order, queda al final por created_at desc (lo hace el backend).
      return arr;
    case 'name_asc':  return arr.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'es', { sensitivity: 'base' }));
    case 'name_desc': return arr.sort((a, b) => (b.name || '').localeCompare(a.name || '', 'es', { sensitivity: 'base' }));
    case 'date_asc':  return arr.sort((a, b) => (a.created_at || 0) - (b.created_at || 0));
    case 'tag': return arr.sort((a, b) => {
      const ta = (a.tags && a.tags[0] && a.tags[0].name) || '￿';
      const tb = (b.tags && b.tags[0] && b.tags[0].name) || '￿';
      const c = ta.localeCompare(tb, 'es', { sensitivity: 'base' });
      return c !== 0 ? c : (b.created_at || 0) - (a.created_at || 0);
    });
    case 'date_desc':
    default: return arr.sort((a, b) => (b.created_at || 0) - (a.created_at || 0));
  }
}

// Misma paleta que TPL_TAG_PALETTE (15 colores con contraste auto vía
// tplTagPillStyle). Incluye negro con texto blanco y amarillo brillante.
const BOT_TAG_PALETTE = [
  '#94a3b8', // gris
  '#3b82f6', // azul
  '#10b981', // verde
  '#f59e0b', // ámbar
  '#ef4444', // rojo
  '#8b5cf6', // violeta
  '#ec4899', // rosa
  '#14b8a6', // teal
  '#f97316', // naranja
  '#0f172a', // negro (texto blanco automático)
  '#facc15', // amarillo brillante
  '#84cc16', // lima
  '#06b6d4', // cian
  '#d946ef', // fucsia
  '#92400e', // café
];

async function loadBotTags() {
  try {
    const data = await api('GET', '/api/bot-tags');
    _botTags = data.items || [];
  } catch (e) {
    _botTags = [];
    console.error('loadBotTags', e);
  }
}

// ═══════════════════════════════════════════════════════════════════
// BOT STEP REGISTRY — fuente única de verdad de los pasos del bot.
// Para agregar un step nuevo:
//   1. Agrega la entrada aquí (label/icon/group/summary)
//   2. Agrega su HTML de configuración en buildStepBody() (switch case)
//   3. Implementa el ejecutor en src/modules/bot/engine.js (case en execute())
// El picker, las traducciones, el ícono y el resumen se generan automático
// desde este objeto.
// ═══════════════════════════════════════════════════════════════════

// El icon es solo el "cuerpo" del SVG (paths, circles, etc.); el wrapper
// <svg viewBox="0 0 20 20" ... width=X height=X> se agrega por stepIcon().
const BOT_STEP_REGISTRY = {
  // ─── Comunicación ───
  ai_reply: {
    group: 'Comunicación',
    label:   { es: 'Respuesta IA', en: 'AI Reply' },
    icon:    '<path d="M10 2 C9.6 6.3 6.3 9.6 2 10 C6.3 10.4 9.6 13.7 10 18 C10.4 13.7 13.7 10.4 18 10 C13.7 9.6 10.4 6.3 10 2 Z"/>',
    summary: (step) => {
      const c = step.config || {};
      return c.instruction
        ? `"${c.instruction.slice(0,50)}${c.instruction.length>50?'…':''}"`
        : 'Responde con IA usando el historial del chat';
    },
  },
  message: {
    group: 'Comunicación',
    label:   { es: 'Enviar mensaje', en: 'Send message' },
    icon:    '<path d="M3 4h14a1 1 0 011 1v9a1 1 0 01-1 1H5l-3 3V5a1 1 0 011-1z"/>',
    summary: (step) => {
      const c = step.config || {};
      const preview = c.text ? `"${c.text.slice(0, 40)}${c.text.length > 40 ? '…' : ''}"` : 'Sin texto';
      if (c.channelId && c.channelId !== 'auto' && typeof INTEGRATIONS !== 'undefined') {
        const inst = INTEGRATIONS.flatMap(p => p.integrations || []).find(i => i.id == c.channelId);
        const chanName = inst ? inst.name || inst.providerKey : `Canal ${c.channelId}`;
        return `${preview} · vía ${chanName}`;
      }
      return preview;
    },
  },
  template: {
    group: 'Comunicación',
    label:   { es: 'Enviar plantilla (WhatsApp API)', en: 'Send template (WhatsApp API)' },
    icon:    '<rect x="3" y="3" width="14" height="14" rx="2"/><path d="M3 8h14"/><path d="M7 12h6"/>',
    summary: (step) => {
      const c = step.config || {};
      if (!c.templateId) return 'Sin plantilla seleccionada';
      const tpl = (typeof _tplItems !== 'undefined' ? _tplItems : []).find(t => t.id == c.templateId);
      if (!tpl) return `Plantilla #${c.templateId} (no encontrada)`;
      const status = tpl.waStatus === 'approved' ? '✓' : `⚠ ${tpl.waStatus}`;
      return `📋 ${tpl.displayName || tpl.name} · ${status}`;
    },
  },
  // ─── Flujo / control ───
  timer: {
    group: 'Flujo',
    label:   { es: 'Temporizador', en: 'Timer' },
    icon:    '<circle cx="10" cy="11" r="7"/><path d="M10 7v4l2.5 2.5"/><path d="M8 2h4"/>',
    summary: (step) => {
      const c = step.config || {};
      if (c.days !== undefined || c.hours !== undefined || c.minutes !== undefined || c.seconds !== undefined) {
        const parts = [];
        if (Number(c.days) > 0)    parts.push(`${c.days}d`);
        if (Number(c.hours) > 0)   parts.push(`${c.hours}h`);
        if (Number(c.minutes) > 0) parts.push(`${c.minutes}m`);
        if (Number(c.seconds) > 0) parts.push(`${c.seconds}s`);
        return parts.length ? `Esperar ${parts.join(' ')}` : 'Sin duración';
      }
      return c.amount ? `Esperar ${c.amount} ${c.unit || 'minutos'}` : 'Sin duración';
    },
  },
  condition: {
    hidden: true, // obsoleto — redirige a branch v2
    label:   { es: 'Condición', en: 'Condition' },
    icon:    '<path d="M10 3v14M3 10h14"/><circle cx="10" cy="10" r="3"/>',
    summary: (step) => {
      const c = step.config || {};
      const n = Array.isArray(c.cases) ? c.cases.length : 0;
      if (!n) return c.field ? `Si ${c.field} = "${c.value || ''}"` : 'Sin condiciones';
      return `${n} rama${n !== 1 ? 's' : ''}${Array.isArray(c.default) && c.default.length ? ' + default' : ''}`;
    },
  },
  branch: {
    group: 'Flujo',
    label:   { es: 'Condición', en: 'Condition' },
    icon:    '<path d="M10 3v14M3 10h14"/><circle cx="10" cy="10" r="3"/>',
    summary: (step) => {
      const c = step.config || {};
      const n = Array.isArray(c.cases) ? c.cases.length : 0;
      const hasDefault = Array.isArray(c.default) && c.default.length > 0;
      if (!n && !hasDefault) return 'Sin condiciones';
      return `${n} rama${n !== 1 ? 's' : ''}${hasDefault ? ' + default' : ''}`;
    },
  },
  wait_response: {
    group: 'Flujo',
    label:   { es: 'Esperar respuesta del lead', en: 'Wait for lead reply' },
    icon:    '<circle cx="10" cy="10" r="7"/><polyline points="10 5 10 10 13 12"/><path d="M3 10a7 7 0 0 1 1-3.5"/>',
    summary: (step) => {
      const c = step.config || {};
      const t = Number(c.timeoutMinutes || 2880);
      let dur;
      if (t >= 1440 && t % 1440 === 0)   dur = `${t / 1440} día${t/1440===1?'':'s'}`;
      else if (t >= 60 && t % 60 === 0)  dur = `${t / 60}h`;
      else if (t >= 1)                   dur = `${t}min`;
      else                                dur = `${Math.round(t * 60)}s`;
      const action = c.onTimeout === 'stop' ? 'terminar bot' : 'continuar';
      return `Espera ${dur} · al timeout: ${action}`;
    },
  },
  stop_bot: {
    group: 'Flujo',
    label:   { es: 'Parar bot', en: 'Stop bot' },
    icon:    '<rect x="4" y="4" width="12" height="12" rx="2"/>',
    summary: () => 'El bot deja de responder a este contacto',
  },
  handover: {
    group: 'Flujo',
    label:   { es: 'Asignar a humano', en: 'Hand over to human' },
    icon:    '<path d="M3 11a7 7 0 0 1 14 0v3a2 2 0 0 1-2 2h-2v-5h4M3 11v3a2 2 0 0 0 2 2h2v-5H3"/>',
    summary: (step) => {
      const c = step.config || {};
      const parts = [];
      if (c.assignToAdvisorId) {
        const adv = (typeof _advisors !== 'undefined' && _advisors) ? _advisors.find(a => Number(a.id) === Number(c.assignToAdvisorId)) : null;
        parts.push(`→ ${adv?.name || `asesor #${c.assignToAdvisorId}`}`);
      }
      if (c.addTag) parts.push(`#${c.addTag}`);
      if (!parts.length) return 'Pausa el bot y notifica al equipo';
      return `Pausa bot · ${parts.join(' · ')}`;
    },
  },
  create_task: {
    group: 'Lead',
    label:   { es: 'Crear tarea / recordatorio', en: 'Create task / reminder' },
    icon:    '<rect x="3" y="4" width="14" height="13" rx="2"/><line x1="3" y1="8" x2="17" y2="8"/><polyline points="7 12 9 14 13 10"/>',
    summary: (step) => {
      const c = step.config || {};
      if (!c.title) return 'Sin título';
      const title = c.title.length > 30 ? c.title.slice(0, 27) + '…' : c.title;
      const amt  = Number(c.offsetAmount || 1);
      const unit = c.offsetUnit || 'h';
      const unitLabel = unit === 'd' ? 'día' : unit === 'h' ? 'hora' : 'min';
      const plural = (amt !== 1 && unit !== 'm') ? 's' : '';
      return `"${title}" · en ${amt} ${unitLabel}${plural}`;
    },
  },
  update_field: {
    group: 'Lead',
    label:   { es: 'Actualizar campo del lead', en: 'Update lead field' },
    icon:    '<rect x="3" y="3" width="14" height="14" rx="2"/><line x1="3" y1="9" x2="17" y2="9"/><line x1="9" y1="13" x2="14" y2="13"/><circle cx="6" cy="13" r="1" fill="currentColor" stroke="none"/>',
    summary: (step) => {
      const c = step.config || {};
      if (!c.fieldId) return 'Sin campo seleccionado';
      const fd = (typeof EXP_FIELD_DEFS !== 'undefined' ? EXP_FIELD_DEFS : []).find(f => Number(f.id) === Number(c.fieldId));
      const label = fd?.label || `Campo #${c.fieldId}`;
      const val = c.value
        ? `"${c.value.length > 25 ? c.value.slice(0, 22) + '…' : c.value}"`
        : '(vacío)';
      return `${label} = ${val}`;
    },
  },
  // ─── Integraciones ───
  http: {
    group: 'Integraciones',
    label:   { es: 'Webhook / HTTP request', en: 'Webhook / HTTP request' },
    icon:    '<polyline points="7 6 3 10 7 14"/><polyline points="13 6 17 10 13 14"/><line x1="9" y1="14" x2="11" y2="6"/>',
    summary: (step) => {
      const c = step.config || {};
      const url = (c.url || '').trim();
      if (!url) return 'Sin URL configurada';
      const method = (c.method || 'POST').toUpperCase();
      const shortUrl = url.length > 40 ? url.slice(0, 37) + '…' : url;
      return `${method} → ${shortUrl}`;
    },
  },
  stop_and_start: {
    group: 'Flujo',
    label:   { es: 'Parar este e iniciar otro bot', en: 'Stop and start another bot' },
    icon:    '<rect x="3" y="3" width="6" height="6" rx="1"/><polygon points="11 14 17 11 17 17"/><path d="M9 17h2"/>',
    summary: (step) => {
      const c = step.config || {};
      const target = (typeof sbBots !== 'undefined' ? sbBots : []).find(b => b.id === Number(c.targetBotId));
      return target ? `Termina y arranca: ${target.name}` : 'Sin bot destino';
    },
  },
  // ─── Lead / CRM ───
  stage: {
    group: 'Lead',
    label:   { es: 'Cambiar etapa', en: 'Change stage' },
    icon:    '<rect x="2" y="5" width="16" height="12" rx="2"/><path d="M2 9h16"/><circle cx="6" cy="14" r="1" fill="currentColor" stroke="none"/>',
    summary: (step) => {
      const c = step.config || {};
      return c.stageName ? `→ ${c.stageName}` : 'Sin etapa';
    },
  },
  tag: {
    group: 'Lead',
    label:   { es: 'Agregar etiqueta', en: 'Add tag' },
    icon:    '<path d="M3 3h7l7 7-7 7-7-7V3z"/><circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none"/>',
    summary: (step) => {
      const c = step.config || {};
      const list = String(c.tag || '').split(',').map(t => t.trim()).filter(Boolean);
      return list.length ? list.map(t => `#${t}`).join(' ') : 'Sin etiqueta';
    },
  },
  assign: {
    group: 'Lead',
    label:   { es: 'Asignar responsable', en: 'Assign advisor' },
    icon:    '<circle cx="10" cy="7" r="3.5"/><path d="M3 17a7 7 0 0114 0"/>',
    summary: (step) => {
      const v = String(step.config?.assignee || '').trim();
      if (!v) return 'Sin asignar';
      // Si es numérico, resolver al nombre del asesor del cache
      if (/^\d+$/.test(v) && typeof _advisors !== 'undefined' && _advisors) {
        const adv = _advisors.find(a => Number(a.id) === Number(v));
        return adv?.name ? `→ ${adv.name}` : `→ Asesor #${v}`;
      }
      return `→ ${v}`;
    },
  },
  // ─── Citas (gated por feature 'appointments') ───
  book_appointment: {
    group: 'Citas',
    feature: 'appointments',
    label:   { es: 'Agendar Cita', en: 'Book appointment' },
    icon:    '<rect x="2" y="3" width="16" height="15" rx="2"/><path d="M2 8h16"/><path d="M6 1v4M14 1v4"/><path d="M6 12h4m-2-2v4"/>',
    summary: () => 'Notifica al asesor · abre modal de cita',
  },
  cancel_appointment: {
    group: 'Citas',
    feature: 'appointments',
    label:   { es: 'Cancelar Cita', en: 'Cancel appointment' },
    icon:    '<rect x="2" y="3" width="16" height="15" rx="2"/><path d="M2 8h16"/><path d="M6 1v4M14 1v4"/><path d="M7 13l6-2m0 2l-6-2"/>',
    summary: (step) => {
      const c = step.config || {};
      return c.message ? `"${c.message.slice(0,35)}${c.message.length>35?'…':''}"` : 'Cancela la cita activa del lead';
    },
  },
  reschedule_appointment: {
    group:   'Citas',
    feature: 'appointments',
    label:   { es: 'Reagendar Cita 🚧', en: 'Reschedule appointment 🚧' },
    icon:    '<rect x="2" y="3" width="16" height="15" rx="2"/><path d="M2 8h16"/><path d="M6 1v4M14 1v4"/><path d="M7 14a3 3 0 0 1 3-3m0 0l-1.5-1.5M10 11l1.5-1.5"/>',
    summary: () => '🚧 En construcción',
  },
  reminder_timer: {
    group:   'Citas',
    feature: 'appointments',
    label:   { es: 'Temporizador de Recordatorio', en: 'Reminder Timer' },
    icon:    '<circle cx="10" cy="10" r="7"/><path d="M10 6v4l2.5 2.5"/><path d="M3.5 3.5l13 13" opacity=".3"/>',
    summary: (step) => {
      const rems = step.config?.reminders || [];
      if (!rems.length) return 'Sin recordatorios';
      return `${rems.length} recordatorio${rems.length > 1 ? 's' : ''}`;
    },
  },
};

// Renderiza el ícono de un step a un tamaño dado (default 17px para cards,
// 20px para el picker). Wrapper SVG común con stroke-width consistente.
function stepIcon(type, size = 17) {
  const body = BOT_STEP_REGISTRY[type]?.icon || '<circle cx="10" cy="10" r="6"/>';
  return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="${size}" height="${size}">${body}</svg>`;
}

// Construye el HTML del picker de pasos auto-generado desde el registry.
function buildBotStepPickerHTML() {
  const lang = _botRegistryLang();
  return Object.entries(BOT_STEP_REGISTRY).map(([type, def]) => {
    if (def.hidden) return ''; // ocultar tipos obsoletos del picker
    const featureAttr = def.feature ? ` data-feature="${escHtml(def.feature)}" hidden` : '';
    const label = (def.label?.[lang] || def.label?.es || type);
    return `<button class="sb-step-type-btn" data-type="${escHtml(type)}"${featureAttr}>
      ${stepIcon(type, 20)}
      <span>${escHtml(label)}</span>
    </button>`;
  }).join('');
}

// Re-poblar el picker cuando se abre el builder (idempotente).
function rebuildBotStepPicker() {
  const picker = document.getElementById('sbStepPicker');
  if (!picker) return;
  picker.innerHTML = buildBotStepPickerHTML();
  // Si la feature 'appointments' está activa, mostrar los steps gated
  if (typeof isAppointmentsEnabled === 'function' && isAppointmentsEnabled()) {
    picker.querySelectorAll('[data-feature="appointments"]').forEach(b => b.hidden = false);
  }
  // Re-aplicar visibilidad condicional por IA (oculta ai_reply si no hay IA conectada)
  if (typeof applyAIConditionalVisibility === 'function') {
    applyAIConditionalVisibility().catch?.(() => {});
  }
}

// ─── SB_STEP_LABELS ahora deriva del registry ───
const SB_STEP_LABELS = new Proxy({}, {
  get(_, type) {
    const def = BOT_STEP_REGISTRY[type];
    if (!def) return type;
    const lang = _botRegistryLang();
    return (def.label && (def.label[lang] || def.label.es)) || type;
  },
});

const SB_BRANCH_LABELS = {
  on_button_click:  'Hace clic en un botón',
  on_text_reply:    'Responde con texto',
  on_timeout:       'No responde (timeout)',
  on_delivery_fail: 'No le llegó el mensaje',
};
// ═══════════════════════════════════════════════════════════════════
// BOT TRIGGER REGISTRY — fuente única de verdad de los disparadores.
// Para agregar uno nuevo:
//   1. Implementa la función trigger en src/modules/bot/engine.js
//   2. Hookea su llamada (route handler / poller / webhook)
//   3. Agrega una entrada aquí con su config
// El dropdown, traducciones, render bonito, save/load — TODO se genera
// automáticamente desde este objeto.
// ═══════════════════════════════════════════════════════════════════
const BOT_TRIGGER_REGISTRY = {
  // ─── Mensajes ───
  keyword: {
    group: 'Mensajes',
    label:      { es: 'Palabra clave en mensaje', en: 'Keyword in message' },
    shortLabel: 'Palabra clave',
    widget:     'text',
    valuePlaceholder: 'p.ej. "precio", "hola", "info"',
    summaryHtml: (bot) => bot.trigger_value ? `: "${escHtml(bot.trigger_value)}"` : '',
  },
  always: {
    group: 'Mensajes',
    label:      { es: 'Cualquier mensaje entrante', en: 'Any incoming message' },
    shortLabel: 'Cualquier mensaje',
    widget:     null,
  },
  no_response: {
    group: 'Mensajes',
    label:      { es: 'Sin respuesta en X tiempo', en: 'No response in X time' },
    shortLabel: 'Sin respuesta',
    widget:     'no_response',
    serialize() {
      const amt  = document.getElementById('sbTriggerNoRespAmount')?.value;
      const unit = document.getElementById('sbTriggerNoRespUnit')?.value;
      return String(noRespToMinutes(amt, unit));
    },
    deserialize(val) {
      const { amount, unit } = noRespFromMinutes(Number(val || 1440));
      const amtEl  = document.getElementById('sbTriggerNoRespAmount');
      const unitEl = document.getElementById('sbTriggerNoRespUnit');
      if (amtEl)  amtEl.value  = amount;
      if (unitEl) unitEl.value = unit;
    },
    summaryHtml(bot) {
      if (!bot.trigger_value) return '';
      const { amount, unit } = noRespFromMinutes(Number(bot.trigger_value));
      const unitLabel = unit === 'd' ? 'día' : unit === 'h' ? 'hora' : 'min';
      const plural = (amount !== 1 && unit !== 'm') ? 's' : '';
      return `: ${amount} ${unitLabel}${plural}`;
    },
  },
  message_read: {
    group: 'Mensajes',
    label:      { es: 'Mensaje saliente leído', en: 'Outgoing message read' },
    shortLabel: 'Mensaje leído',
    widget:     null,
  },
  // ─── Contactos ───
  new_contact: {
    group: 'Contactos',
    label:      { es: 'Nuevo contacto creado', en: 'New contact created' },
    shortLabel: 'Nuevo contacto',
    widget:     null,
  },
  // ─── Pipeline ───
  pipeline_stage: {
    group: 'Pipeline',
    label:      { es: 'Lead entra a etapa', en: 'Lead enters stage' },
    shortLabel: 'Entra a etapa',
    widget:     'stage',
    serialize:  () => document.getElementById('sbTriggerStage')?.value || '',
    deserialize(val) {
      const stageId = Number(val);
      const pl = (PIPELINES || []).find(p => p.stages?.some(s => s.id === stageId));
      if (pl) populateTriggerPipelines(pl.id, stageId);
    },
    summaryHtml(bot) {
      const info = _resolveStage(bot.trigger_value);
      if (info) {
        return `: <span class="bot-row-pipeline-pill"><span class="bot-row-pipeline-name" style="background:${escHtml(info.pipelineColor)}24;border-color:${escHtml(info.pipelineColor)}55"><span class="bot-row-stage-dot" style="background:${escHtml(info.pipelineColor)}"></span>${escHtml(info.pipelineName)}</span><span class="bot-row-pipeline-arrow">→</span><span class="bot-row-stage-pill" style="background:${escHtml(info.color)}24;border-color:${escHtml(info.color)}55"><span class="bot-row-stage-dot" style="background:${escHtml(info.color)}"></span>${escHtml(info.stageName)}</span></span>`;
      }
      return `: stage #${escHtml(bot.trigger_value)} (no encontrada)`;
    },
  },
  pipeline_stage_leave: {
    group: 'Pipeline',
    label:      { es: 'Lead sale de etapa', en: 'Lead leaves stage' },
    shortLabel: 'Sale de etapa',
    widget:     'stage',
    serialize:  () => document.getElementById('sbTriggerStage')?.value || '',
    deserialize(val) {
      const stageId = Number(val);
      const pl = (PIPELINES || []).find(p => p.stages?.some(s => s.id === stageId));
      if (pl) populateTriggerPipelines(pl.id, stageId);
    },
    summaryHtml(bot) {
      const info = _resolveStage(bot.trigger_value);
      if (info) {
        return `: <span class="bot-row-pipeline-pill"><span class="bot-row-pipeline-name" style="background:${escHtml(info.pipelineColor)}24;border-color:${escHtml(info.pipelineColor)}55"><span class="bot-row-stage-dot" style="background:${escHtml(info.pipelineColor)}"></span>${escHtml(info.pipelineName)}</span><span class="bot-row-pipeline-arrow">→</span><span class="bot-row-stage-pill" style="background:${escHtml(info.color)}24;border-color:${escHtml(info.color)}55"><span class="bot-row-stage-dot" style="background:${escHtml(info.color)}"></span>${escHtml(info.stageName)}</span></span>`;
      }
      return `: stage #${escHtml(bot.trigger_value)} (no encontrada)`;
    },
  },
  // ─── Lead ───
  tag_added: {
    group: 'Lead',
    label:      { es: 'Etiqueta agregada al lead', en: 'Tag added to lead' },
    shortLabel: 'Etiqueta agregada',
    widget:     'text',
    valuePlaceholder: 'Etiqueta exacta (ej: "VIP"). Vacío = cualquier etiqueta',
    summaryHtml: (bot) => bot.trigger_value ? `: "${escHtml(bot.trigger_value)}"` : '',
  },
  assignee_changed: {
    group: 'Lead',
    label:      { es: 'Cambio de asesor responsable', en: 'Lead assignee changed' },
    shortLabel: 'Cambio de asesor',
    widget:     'text',
    valuePlaceholder: 'ID de asesor (opcional). Vacío = cualquier cambio',
    summaryHtml(bot) {
      if (!bot.trigger_value) return '';
      const adv = (typeof ADVISORS !== 'undefined' ? ADVISORS : []).find(a => Number(a.id) === Number(bot.trigger_value));
      return `: → ${escHtml(adv?.name || `asesor #${bot.trigger_value}`)}`;
    },
  },
  // ─── Programado ───
  scheduled_one_time: {
    group: 'Programado',
    label:      { es: 'Una sola vez (fecha + hora)', en: 'One-time (date + time)' },
    shortLabel: 'Programado una vez',
    widget:     'one_time',
    serialize() {
      const d  = document.getElementById('sbTriggerOneTimeDate')?.value;
      const tt = document.getElementById('sbTriggerOneTimeTime')?.value || '09:00';
      if (!d) throw new Error('Selecciona la fecha del disparador');
      return JSON.stringify({ datetime: `${d}T${tt}` });
    },
    deserialize(val) {
      try {
        const cfg = JSON.parse(val);
        if (cfg.datetime) {
          const [date, time] = cfg.datetime.split('T');
          const dEl = document.getElementById('sbTriggerOneTimeDate');
          const tEl = document.getElementById('sbTriggerOneTimeTime');
          if (dEl) dEl.value = date || '';
          if (tEl) tEl.value = (time || '09:00').slice(0,5);
        }
      } catch {}
    },
    summaryHtml(bot) {
      if (!bot.trigger_value) return '';
      try {
        const cfg = JSON.parse(bot.trigger_value);
        return `: ${escHtml((cfg.datetime || '').replace('T', ' '))}`;
      } catch { return ''; }
    },
  },
  scheduled_daily: {
    group: 'Programado',
    label:      { es: 'Diariamente a una hora', en: 'Daily at a time' },
    shortLabel: 'Programado diario',
    widget:     'daily',
    serialize() {
      const hour = document.getElementById('sbTriggerDailyTime')?.value || '09:00';
      const weekdays = [0,1,2,3,4,5,6].map(d => {
        const cb = document.querySelector(`#sbTriggerDailyWrap input[data-weekday="${d}"]`);
        return cb?.checked ? 1 : 0;
      });
      if (weekdays.every(x => !x)) throw new Error('Selecciona al menos un día de la semana');
      return JSON.stringify({ hour, weekdays });
    },
    deserialize(val) {
      try {
        const cfg = JSON.parse(val);
        const tEl = document.getElementById('sbTriggerDailyTime');
        if (tEl) tEl.value = cfg.hour || '09:00';
        const wd = Array.isArray(cfg.weekdays) ? cfg.weekdays : [1,1,1,1,1,1,1];
        document.querySelectorAll('#sbTriggerDailyWrap input[data-weekday]').forEach(cb => {
          cb.checked = !!wd[Number(cb.dataset.weekday)];
        });
      } catch {}
    },
    summaryHtml(bot) {
      if (!bot.trigger_value) return '';
      try {
        const cfg = JSON.parse(bot.trigger_value);
        const dayLabels = ['L','M','X','J','V','S','D'];
        const days = (cfg.weekdays || []).map((on, i) => on ? dayLabels[i] : '').filter(Boolean).join(',');
        return `: ${escHtml(cfg.hour || '')} (${days || 'todos'})`;
      } catch { return ''; }
    },
  },
  scheduled_field: {
    group: 'Programado',
    label:      { es: 'Antes/después de un campo de fecha', en: 'Before/after a date field' },
    shortLabel: 'Programado por campo',
    widget:     'field',
    serialize() {
      const fieldId = Number(document.getElementById('sbTriggerFieldId')?.value || 0);
      const amt     = Number(document.getElementById('sbTriggerFieldAmount')?.value || 0);
      const unit    = document.getElementById('sbTriggerFieldUnit')?.value || 'h';
      const dir     = document.getElementById('sbTriggerFieldDir')?.value || 'before';
      const sign    = dir === 'before' ? -1 : 1;
      const offsetMinutes = sign * noRespToMinutes(amt, unit);
      if (!fieldId) throw new Error('Selecciona un campo de fecha');
      return JSON.stringify({ fieldId, offsetMinutes });
    },
    deserialize(val) {
      try {
        const cfg = JSON.parse(val);
        populateTriggerDateFields(cfg.fieldId);
        const off = Number(cfg.offsetMinutes) || 0;
        const abs = Math.abs(off);
        const dir = off < 0 ? 'before' : 'after';
        const dirEl = document.getElementById('sbTriggerFieldDir');
        if (dirEl) dirEl.value = dir;
        const { amount, unit } = noRespFromMinutes(abs);
        const aEl = document.getElementById('sbTriggerFieldAmount');
        const uEl = document.getElementById('sbTriggerFieldUnit');
        if (aEl) aEl.value = abs ? amount : 24;
        if (uEl) uEl.value = abs ? unit   : 'h';
      } catch {}
    },
    summaryHtml(bot) {
      if (!bot.trigger_value) return '';
      try {
        const cfg = JSON.parse(bot.trigger_value);
        const off = Number(cfg.offsetMinutes) || 0;
        const { amount, unit } = noRespFromMinutes(Math.abs(off));
        const unitLabel = unit === 'd' ? 'día' : unit === 'h' ? 'hora' : 'min';
        const plural = (amount !== 1 && unit !== 'm') ? 's' : '';
        const dir = off < 0 ? 'antes' : 'después';
        return `: ${amount} ${unitLabel}${plural} ${dir} (campo #${escHtml(String(cfg.fieldId || '?'))})`;
      } catch { return ''; }
    },
  },
};

// Helper para obtener idioma actual con fallback a español.
function _botRegistryLang() {
  return (typeof CURRENT_LANG !== 'undefined' && CURRENT_LANG) ? CURRENT_LANG : 'es';
}

// ─── Helpers derivados del registry — usados por los consumidores ───

// Genera el HTML de las <option> del dropdown agrupadas por `group`.
function buildBotTriggerDropdownOptions() {
  const groups = {};
  for (const [type, def] of Object.entries(BOT_TRIGGER_REGISTRY)) {
    const g = def.group || 'Otros';
    if (!groups[g]) groups[g] = [];
    groups[g].push({ type, def });
  }
  let html = '';
  for (const [groupName, items] of Object.entries(groups)) {
    html += `<optgroup label="${escHtml(groupName)}">`;
    for (const { type, def } of items) {
      const lang = _botRegistryLang();
      const label = (def.label && (def.label[lang] || def.label.es)) || type;
      html += `<option value="${type}">${escHtml(label)}</option>`;
    }
    html += '</optgroup>';
  }
  return html;
}

// Re-poblar el select del builder cuando se abre o cuando cambia el idioma.
function rebuildBotTriggerDropdown() {
  const sel = document.getElementById('sbTriggerType');
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = buildBotTriggerDropdownOptions();
  if (current && BOT_TRIGGER_REGISTRY[current]) sel.value = current;
}

// ─── SB_TRIGGER_LABELS ahora deriva del registry ───
const SB_TRIGGER_LABELS = new Proxy({}, {
  get(_, type) {
    const def = BOT_TRIGGER_REGISTRY[type];
    if (!def) return type;
    const lang = _botRegistryLang();
    return (def.label && (def.label[lang] || def.label.es)) || type;
  },
});

async function loadSalsbots() {
  try {
    await loadBotTags();
    const data = await api('GET', '/api/bot');
    sbBots = data.items || [];
    renderBotList();
  } catch (e) { console.error('loadSalsbots', e); }
}

// Layout de la lista de bots — fijado en 'v1' (el user eligió quedarse con
// el layout compacto). El CSS de v2 sigue disponible por si se quiere
// re-experimentar en el futuro, pero no hay UI para cambiarlo ahora.
const _botListLayout = 'v1';
try { localStorage.removeItem('botListLayout'); } catch {}

function renderBotTagFilters() {
  const root = document.getElementById('botTagFilters');
  if (!root) return;
  const allActive = _botTagFilter === null ? 'is-active' : '';
  // Conteos para los pills de filtro:
  //   - Errores: severity='error' (algo roto, el bot fallará)
  //   - Avisos:  severity='warn'  (sospechoso pero funcional)
  // Solo cuentan bots únicos (un bot con varias issues cuenta una vez)
  const errorBotsCount = (sbBots || []).filter(b =>
    Array.isArray(b.issues) && b.issues.some(i => i.severity === 'error')
  ).length;
  const warnBotsCount = (sbBots || []).filter(b =>
    Array.isArray(b.issues) &&
    b.issues.some(i => i.severity === 'warn') &&
    !b.issues.some(i => i.severity === 'error') // no doble-contar si ya tiene error
  ).length;
  const errorActive = _botTagFilter === '__errors__' ? 'is-active' : '';
  const warnActive  = _botTagFilter === '__warns__'  ? 'is-active' : '';
  const errorPill = errorBotsCount > 0
    ? `<button type="button" class="bot-tag-filter is-error-pill ${errorActive}" data-bot-tag-filter="__errors__" title="Bots con referencias rotas que harán fallar la ejecución (plantilla, etapa, pipeline o bot destino eliminado)">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="12" height="12"><path d="M10 2a5 5 0 0 0-5 5v3l-2 3h14l-2-3V7a5 5 0 0 0-5-5z"/><path d="M8 16a2 2 0 0 0 4 0"/></svg>
        Errores
        <span class="bot-tag-filter-count">${errorBotsCount}</span>
      </button>`
    : '';
  const warnPill = warnBotsCount > 0
    ? `<button type="button" class="bot-tag-filter is-warn-pill ${warnActive}" data-bot-tag-filter="__warns__" title="Bots con configuración sospechosa pero que SÍ se ejecutan (mensaje vacío, timer en 0, etiquetas faltantes, bot destino desactivado, etc.)">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="12" height="12"><polygon points="10 2 18 17 2 17 10 2" stroke-linejoin="round"/><line x1="10" y1="8" x2="10" y2="12"/><circle cx="10" cy="14.5" r="0.6" fill="currentColor"/></svg>
        Avisos
        <span class="bot-tag-filter-count">${warnBotsCount}</span>
      </button>`
    : '';
  const tagPills = _botTags.map(t => `
    <button type="button" class="bot-tag-filter ${_botTagFilter === t.id ? 'is-active' : ''}" data-bot-tag-filter="${t.id}">
      <span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>
      ${escHtml(t.name)}
    </button>
  `).join('');
  root.innerHTML = `
    <button type="button" class="bot-tag-filter ${allActive}" data-bot-tag-filter="">Todos</button>
    ${errorPill}
    ${warnPill}
    ${tagPills}
    <select id="botSortSelect" class="bot-sort-select" title="Ordenar bots">
      <option value="manual"${_botSort === 'manual' ? ' selected' : ''}>Manual (arrastrar)</option>
      <option value="date_desc"${_botSort === 'date_desc' ? ' selected' : ''}>Más nuevo</option>
      <option value="date_asc"${_botSort === 'date_asc' ? ' selected' : ''}>Más viejo</option>
      <option value="name_asc"${_botSort === 'name_asc' ? ' selected' : ''}>A → Z</option>
      <option value="name_desc"${_botSort === 'name_desc' ? ' selected' : ''}>Z → A</option>
      <option value="tag"${_botSort === 'tag' ? ' selected' : ''}>Por etiqueta</option>
    </select>
    <button type="button" class="bot-tag-manage-btn" id="botTagManageBtn" title="Gestionar etiquetas">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><circle cx="10" cy="10" r="3"/><path d="M10 2v2m0 12v2M4.2 4.2l1.4 1.4m8.8 8.8l1.4 1.4M2 10h2m12 0h2M4.2 15.8l1.4-1.4m8.8-8.8l1.4-1.4"/></svg>
      Etiquetas
    </button>`;
}

// Resuelve un stage_id a { pipelineName, stageName, color } usando el global PIPELINES
function _resolveStage(stageId) {
  const sid = Number(stageId);
  if (!sid || !Array.isArray(PIPELINES)) return null;
  for (const p of PIPELINES) {
    if (!Array.isArray(p.stages)) continue;
    const stage = p.stages.find(s => Number(s.id) === sid);
    if (stage) return {
      pipelineName: p.name,
      stageName: stage.name,
      color: stage.color || '#94a3b8',
      pipelineColor: p.color || '#94a3b8',
    };
  }
  return null;
}

// Construye el texto del trigger de un bot. La lógica de cada tipo está
// declarada en BOT_TRIGGER_REGISTRY[type].summaryHtml(bot).
function botTriggerHtml(bot) {
  const def   = BOT_TRIGGER_REGISTRY[bot.trigger_type];
  const label = def ? (def.label?.[_botRegistryLang()] || def.label?.es) : bot.trigger_type;
  let suffix  = '';
  try { suffix = def?.summaryHtml ? def.summaryHtml(bot) : ''; } catch (e) { console.warn('botTriggerHtml summaryHtml error', e); }
  return `${escHtml(label || '')}${suffix || ''}`;
}

// Badge "⚠ N errores" si el bot tiene referencias rotas (plantilla/etapa/bot
// destino eliminados, etc). Tooltip muestra los primeros mensajes para que se
// vea sin tener que abrir el bot.
function botIssuesBadgeHtml(bot) {
  const issues = Array.isArray(bot.issues) ? bot.issues : [];
  if (!issues.length) return '';
  const errors = issues.filter(i => i.severity === 'error');
  const warns  = issues.filter(i => i.severity === 'warn');
  const cls = errors.length ? 'is-error' : 'is-warn';
  const ico = errors.length ? '⚠' : '⚡';
  const n = errors.length || warns.length;
  const word = errors.length ? (errors.length === 1 ? 'error' : 'errores')
                              : (warns.length === 1 ? 'aviso' : 'avisos');
  const tooltip = issues.slice(0, 5).map(i => `• ${i.message}`).join('\n');
  return `<span class="bot-row-issues ${cls}" title="${escHtml(tooltip)}">${ico} ${n} ${word}</span>`;
}

function botRowTagsHtml(bot) {
  if (!Array.isArray(bot.tags) || !bot.tags.length) return '';
  return `<span class="bot-row-tags">${bot.tags.map(t => `<span class="bot-tag-pill" style="--tag-color:${escHtml(t.color)};${tplTagPillStyle(t.color)}"><span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>${escHtml(t.name)}</span>`).join('')}</span>`;
}

function renderBotList() {
  const list = document.getElementById('botList');
  const empty = document.getElementById('botEmpty');
  if (!list) return;

  renderBotTagFilters();

  // 1. Filtro por etiqueta o por errores/avisos (sentinels)
  let filteredBots;
  if (_botTagFilter === null) filteredBots = sbBots;
  else if (_botTagFilter === '__errors__') {
    filteredBots = sbBots.filter(b =>
      Array.isArray(b.issues) && b.issues.some(i => i.severity === 'error')
    );
  } else if (_botTagFilter === '__warns__') {
    // Solo avisos puros (sin errores) — los que tienen error van al filtro de error
    filteredBots = sbBots.filter(b =>
      Array.isArray(b.issues) &&
      b.issues.some(i => i.severity === 'warn') &&
      !b.issues.some(i => i.severity === 'error')
    );
  } else {
    filteredBots = sbBots.filter(b => Array.isArray(b.tags) && b.tags.some(t => t.id === _botTagFilter));
  }
  // 2. Filtro por búsqueda — busca por nombre, etiquetas, trigger y nombre
  //    legible del pipeline/etapa (cuando trigger es pipeline_stage).
  const q = (_botSearch || '').trim().toLowerCase();
  if (q) {
    filteredBots = filteredBots.filter(b => _botMatchesQuery(b, q));
  }
  const visibleBots = sortBots(filteredBots);

  if (!sbBots.length) {
    list.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  if (!visibleBots.length) {
    let reason;
    if (q) reason = t('bot.filter.no_match').replace('{q}', escHtml(q));
    else if (_botTagFilter === '__errors__') reason = t('bot.filter.no_errors');
    else if (_botTagFilter === '__warns__')  reason = t('bot.filter.no_warns');
    else reason = t('bot.filter.no_tag');
    list.innerHTML = `<div class="bot-list-empty-filter">${reason}</div>`;
    return;
  }

  // Aplica la clase del layout actual (v1 compacto o v2 cards)
  list.classList.toggle('bot-cards-v2', _botListLayout === 'v2');
  list.classList.toggle('bot-cards-v1', _botListLayout === 'v1');

  list.innerHTML = `
    <div class="bot-list-table">
      <div class="bot-list-head">
        <div>${t('th.name')}</div>
        <div>${t('bot.builder.trigger')}</div>
        <div>${t('bot.th.steps')}</div>
        <div>${t('bot.builder.active')}</div>
        <div></div>
      </div>
      ${visibleBots.map(b => `
        <div class="bot-list-row" data-bot-id="${b.id}" ${_botSort === 'manual' ? 'draggable="true"' : ''}>
          ${_botSort === 'manual' ? `
            <span class="bot-row-drag-handle" title="${t('bot.drag.title')}">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.5"/><circle cx="7.5" cy="2.5" r="1.5"/><circle cx="2.5" cy="7" r="1.5"/><circle cx="7.5" cy="7" r="1.5"/><circle cx="2.5" cy="11.5" r="1.5"/><circle cx="7.5" cy="11.5" r="1.5"/></svg>
            </span>` : ''}
          <div class="bot-row-name-wrap">
            <div class="bot-row-name">${escHtml(b.name)}${botRowTagsHtml(b)}${botIssuesBadgeHtml(b)}</div>
            ${b.created_at ? `<div class="bot-row-date">${t('bot.row.created').replace('{date}', escHtml(formatBotDate(b.created_at)))}</div>` : ''}
          </div>
          <div class="bot-row-trigger">${botTriggerHtml(b)}</div>
          <div class="bot-row-steps">${b.steps.length} ${t(b.steps.length !== 1 ? 'bot.row.steps' : 'bot.row.step')}</div>
          <div>
            <label class="sb-toggle" onclick="event.stopPropagation()">
              <input type="checkbox" class="sb-enabled-toggle" data-id="${b.id}" ${b.enabled ? 'checked' : ''} />
              <span class="sb-thumb"></span>
            </label>
          </div>
          <div class="bot-row-actions">
            <button class="icon-btn icon-btn--ghost sb-stats-btn" data-id="${b.id}" aria-label="Estadísticas" title="Ver estadísticas">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><line x1="3" y1="17" x2="3" y2="11"/><line x1="9" y1="17" x2="9" y2="5"/><line x1="15" y1="17" x2="15" y2="13"/></svg>
            </button>
            <button class="icon-btn icon-btn--ghost sb-clone-btn" data-id="${b.id}" aria-label="Clonar bot" title="Clonar bot">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M3 13V5a2 2 0 0 1 2-2h8"/></svg>
            </button>
            <button class="icon-btn icon-btn--ghost sb-del-btn" data-id="${b.id}" aria-label="Eliminar">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><polyline points="3 6 17 6"/><path d="M8 6V4h4v2"/><rect x="5" y="6" width="10" height="11" rx="1"/><line x1="8" y1="9" x2="8" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/></svg>
            </button>
          </div>
        </div>
      `).join('')}
    </div>`;
}

// _botBuilderReturnTo: contexto desde el cual se abrió el builder, para que
// el botón "←" sepa a dónde volver. Valores:
//   null/undefined → volver a la lista de bots (default)
//   'pipelines'    → volver a la vista de pipelines (kanban)
//   'templates'    → volver a la vista de plantillas
//   'expedientes'  → volver al modal de expediente (si lo abrieron desde ahí)
let _botBuilderReturnTo = null;

function openBotBuilder(bot, returnTo = null) {
  _botBuilderReturnTo = returnTo;
  // Ajustar texto del botón "←" según el origen
  const backBtn = document.getElementById('botBackBtn');
  if (backBtn) {
    const labels = { pipelines: 'Pipelines', templates: t('nav.plantillas'), expedientes: t('nav.expedientes') };
    const label = labels[returnTo] || t('nav.bot');
    // Mantener el SVG y solo cambiar el texto
    const svg = backBtn.querySelector('svg');
    backBtn.innerHTML = '';
    if (svg) backBtn.appendChild(svg);
    backBtn.appendChild(document.createTextNode(' ' + label));
  }

  sbCurrentId = bot ? bot.id : null;
  sbCurrentIssues = bot && Array.isArray(bot.issues) ? bot.issues : [];
  sbSteps = bot
    ? JSON.parse(JSON.stringify(bot.steps)).map((s, i) => {
        sbStepCounter = Math.max(sbStepCounter, i + 1);
        return { ...s, _id: s._id || `s${i}` };
      })
    : [];
  // Ajustar sbStepCounter al máximo ID encontrado en TODO el árbol (top-level + sub-steps
  // anidados en cases/default/reminders). Sin esto, al recargar la página sbStepCounter
  // se basaba solo en el conteo de top-level steps y el siguiente ID podía colisionar
  // con un sub-step guardado, causando data-body-sid duplicados en el DOM.
  const _maxNestedStepNum = (steps) => {
    let m = 0;
    for (const s of (steps || [])) {
      const n = parseInt(String(s._id || '').replace(/^s/, ''), 10);
      if (n > 0 && n > m) m = n;
      for (const cs of (s.config?.cases || [])) m = Math.max(m, _maxNestedStepNum(cs.steps));
      m = Math.max(m, _maxNestedStepNum(s.config?.default));
      for (const rem of (s.config?.reminders || [])) m = Math.max(m, _maxNestedStepNum(rem.steps));
    }
    return m;
  };
  sbStepCounter = Math.max(sbStepCounter, _maxNestedStepNum(sbSteps));
  // Garantizar _id en sub-steps anidados (bots guardados antes de este feature)
  const _ensureSubStepIds = (steps) => {
    for (const s of (steps || [])) {
      if (!s._id) { sbStepCounter++; s._id = `s${sbStepCounter}`; }
      for (const cs of (s.config?.cases || [])) {
        if (!Array.isArray(cs.steps)) cs.steps = Array.isArray(cs.branch) ? cs.branch : [];
        _ensureSubStepIds(cs.steps);
      }
      _ensureSubStepIds(s.config?.default);
      for (const rem of (s.config?.reminders || [])) _ensureSubStepIds(rem.steps);
      for (const arr of Object.values(s.config?.branches || {})) _ensureSubStepIds(arr);
    }
  };
  _ensureSubStepIds(sbSteps);
  sbTagIds = bot && Array.isArray(bot.tags) ? bot.tags.map(t => t.id) : [];

  document.getElementById('botListView').hidden = true;
  document.getElementById('botBuilder').hidden = false;
  const _bce = document.getElementById('topbarBotExtras'); if (_bce) _bce.hidden = true;
  renderBotBuilderTags();

  // Mostrar botón Eliminar solo cuando se edita un bot existente
  const delBtn = document.getElementById('botBuilderDelete');
  if (delBtn) delBtn.hidden = !bot;

  document.getElementById('botBuilderName').value = bot ? bot.name : '';
  document.getElementById('botBuilderEnabled').checked = bot ? bot.enabled : false;
  document.getElementById('sbTriggerType').value = bot ? bot.trigger_type : 'keyword';
  document.getElementById('sbTriggerValue').value = bot ? (bot.trigger_value || '') : '';

  // Reset a vista Lista al abrir el builder (la vista Código es read-only y confunde si se queda activa)
  document.querySelectorAll('#botBuilderViewTabs .bb-view-tab').forEach(t => {
    t.classList.toggle('is-active', t.dataset.view === 'list');
  });
  document.querySelectorAll('.bb-view-content').forEach(c => {
    c.hidden = c.dataset.view !== 'list';
  });

  // Reconstruye el dropdown y el step picker desde los registries
  rebuildBotTriggerDropdown();
  rebuildBotStepPicker();
  if (bot?.trigger_type) {
    document.getElementById('sbTriggerType').value = bot.trigger_type;
  }
  updateTriggerValueVisibility();

  // Si el trigger tiene valor guardado, deserializa al widget según el registry
  if (bot?.trigger_type && bot.trigger_value !== undefined && bot.trigger_value !== null) {
    const def = BOT_TRIGGER_REGISTRY[bot.trigger_type];
    if (def?.deserialize) {
      try { def.deserialize(bot.trigger_value); }
      catch (e) { console.warn('deserialize trigger error:', e); }
    } else if (def?.widget === 'text') {
      const v = document.getElementById('sbTriggerValue');
      if (v) v.value = bot.trigger_value || '';
    }
  }
  renderStepsFlow();
}

function closeBotBuilder() {
  document.getElementById('botBuilder').hidden = true;
  document.getElementById('botListView').hidden = false;
  const _bce = document.getElementById('topbarBotExtras'); if (_bce) _bce.hidden = false;
}

// Mapeo widget → ID del wrapper. Cada disparador declara qué widget usa
// en el registry; este mapa solo dice qué elemento DOM corresponde.
const _BOT_TRIGGER_WIDGET_WRAPS = {
  text:        null, // usa #sbTriggerValue (input genérico)
  stage:       'sbTriggerStageWrap',
  no_response: 'sbTriggerNoResponseWrap',
  one_time:    'sbTriggerOneTimeWrap',
  daily:       'sbTriggerDailyWrap',
  field:       'sbTriggerFieldWrap',
};

function updateTriggerValueVisibility() {
  const type = document.getElementById('sbTriggerType')?.value;
  const def  = BOT_TRIGGER_REGISTRY[type];
  const valInput = document.getElementById('sbTriggerValue');
  const widget = def?.widget || null;

  // Mostrar/ocultar el input genérico de texto
  if (valInput) {
    valInput.hidden = (widget !== 'text');
    valInput.placeholder = def?.valuePlaceholder || 'p.ej. "precio", "hola", "info"';
  }

  // Mostrar el wrapper del widget activo, ocultar todos los demás
  for (const [w, wrapId] of Object.entries(_BOT_TRIGGER_WIDGET_WRAPS)) {
    if (!wrapId) continue;
    const el = document.getElementById(wrapId);
    if (el) el.hidden = (widget !== w);
  }

  // Side effects específicos al activar ciertos widgets
  if (widget === 'stage') populateTriggerPipelines();
  if (widget === 'field') populateTriggerDateFields();
}

// Carga campos custom de tipo fecha en el dropdown del trigger scheduled_field
async function populateTriggerDateFields(selectedFieldId) {
  const sel = document.getElementById('sbTriggerFieldId');
  if (!sel) return;
  try {
    const data = await api('GET', '/api/expedients/field-defs');
    const dateTypes = new Set(['date', 'datetime', 'birthday']);
    const items = (data?.items || []).filter(f => dateTypes.has(f.field_type));
    sel.innerHTML = '<option value="">— Selecciona campo —</option>' +
      items.map(f => `<option value="${f.id}" ${selectedFieldId == f.id ? 'selected' : ''}>${escHtml(f.label)}</option>`).join('');
  } catch (e) {
    console.error('populateTriggerDateFields', e);
    sel.innerHTML = '<option value="">— Error cargando campos —</option>';
  }
}

// Convierte (amount, unit) → minutos. unit: m=minutos, h=horas, d=días.
function noRespToMinutes(amount, unit) {
  const n = Math.max(1, Number(amount) || 0);
  if (unit === 'd') return n * 1440;
  if (unit === 'h') return n * 60;
  return n;
}
// Convierte minutos → {amount, unit} preservando la unidad más natural.
function noRespFromMinutes(minutes) {
  const m = Number(minutes) || 0;
  if (m && m % 1440 === 0) return { amount: m / 1440, unit: 'd' };
  if (m && m % 60   === 0) return { amount: m / 60,   unit: 'h' };
  return { amount: m || 24*60, unit: m ? 'm' : 'h' };
}

function populateTriggerPipelines(selectedPipelineId, selectedStageId) {
  const plSel = document.getElementById('sbTriggerPipeline');
  const stageSel = document.getElementById('sbTriggerStage');
  if (!plSel || !stageSel) return;
  plSel.innerHTML = '<option value="">— Pipeline —</option>' +
    (PIPELINES || []).map(p =>
      `<option value="${p.id}" ${p.id == selectedPipelineId ? 'selected' : ''}>${escHtml(p.name)}</option>`
    ).join('');
  updateTriggerStageOptions(selectedPipelineId, selectedStageId);
}

function updateTriggerStageOptions(pipelineId, selectedStageId) {
  const stageSel = document.getElementById('sbTriggerStage');
  if (!stageSel) return;
  const pl = (PIPELINES || []).find(p => p.id == pipelineId);
  if (!pl?.stages?.length) {
    stageSel.innerHTML = '<option value="">— Primero elige pipeline —</option>';
    updateTriggerStageDot(null);
    return;
  }
  stageSel.innerHTML = pl.stages.map(s =>
    `<option value="${s.id}" data-color="${s.color || ''}" ${s.id == selectedStageId ? 'selected' : ''}>${escHtml(s.name)}</option>`
  ).join('');
  updateTriggerStageDot(stageSel.options[stageSel.selectedIndex]);
}

function updateTriggerStageDot(opt) {
  const dot = document.getElementById('sbTriggerStageDot');
  if (!dot) return;
  const color = opt?.dataset?.color || '';
  dot.style.background = color || 'transparent';
}

function connectedIntegrationOptions(selectedId) {
  const all = INTEGRATIONS.flatMap(p => (p.integrations || []).map(inst => ({
    id: inst.id,
    label: `${p.name}${inst.name ? ` — ${inst.name}` : ''}`,
  })));
  if (!all.length) return '<option value="">— Sin integraciones conectadas —</option>';
  return all.map(inst =>
    `<option value="${inst.id}" ${inst.id == selectedId ? 'selected' : ''}>${escHtml(inst.label)}</option>`
  ).join('');
}

const _EMAIL_PROVIDERS_SET = new Set(['email', 'gmail', 'outlook', 'icloud_mail', 'yahoo_mail']);
function _isEmailIntegration(channelId) {
  if (!channelId || channelId === 'auto') return false;
  const inst = INTEGRATIONS.flatMap(p => (p.integrations || []).map(i => ({ id: i.id, providerKey: p.key })))
    .find(i => i.id == channelId);
  return inst ? _EMAIL_PROVIDERS_SET.has(inst.providerKey) : false;
}

// ── Step rendering ──
// Resumen del step — delega a la función summary() declarada en BOT_STEP_REGISTRY.
function stepSummary(step) {
  const def = BOT_STEP_REGISTRY[step.type];
  if (!def?.summary) return '';
  try { return def.summary(step) || ''; }
  catch (e) { console.warn('stepSummary error', step.type, e); return ''; }
}

// Wrapper para retrocompatibilidad — delega a stepIcon() que lee del registry.
function stepIconSvg(type) {
  return stepIcon(type, 17);
}

function buildStepBody(step) {
  const c = step.config || {};
  const sid = step._id;
  switch (step.type) {
    case 'message': {
      const _isEmailCh = _isEmailIntegration(c.channelId);
      return `
        <label>Canal de envío</label>
        <select data-field="channelId" data-sid="${sid}" class="sb-channel-sel">
          <option value="auto" ${(!c.channelId || c.channelId === 'auto') ? 'selected' : ''}>Automático (mismo canal del contacto)</option>
          ${connectedIntegrationOptions(c.channelId)}
        </select>
        <p class="sb-channel-hint" style="font-size:11px;color:var(--text-muted);margin-top:3px;margin-bottom:0">
          "Automático" responde por el canal donde llegó el mensaje.
        </p>
        <div class="sb-msg-subject-row" style="margin-top:8px;display:${_isEmailCh ? 'block' : 'none'}">
          <label>Asunto del correo</label>
          <input type="text" data-field="subject" data-sid="${sid}" value="${escHtml(c.subject || '')}" placeholder="Asunto del correo…" style="width:100%;box-sizing:border-box" />
        </div>
        <div class="sb-msg-label-row">
          <label>Mensaje</label>
          <button type="button" class="sb-tpl-insert-btn" data-sid="${sid}" title="Inserta el cuerpo de una plantilla básica">📋 Usar plantilla básica</button>
        </div>
        <textarea data-field="text" data-sid="${sid}" rows="4" placeholder="Escribe el mensaje aquí…">${escHtml(c.text || '')}</textarea>
        ${(() => {
          // Si el texto vino de una plantilla básica (insertada con el botón),
          // mostramos un hint del origen. Si la plantilla fue eliminada, lo
          // dice también para que el user sepa por qué hay un aviso en este step.
          const fromId = Number(c.fromTemplateId || 0);
          if (!fromId) return '';
          const tpl = (_tplItems || []).find(t => t.id === fromId);
          const label = tpl ? (tpl.displayName || tpl.name) : `Plantilla #${fromId} (eliminada)`;
          return `<div class="sb-msg-from-tpl">
            📋 Texto de plantilla: <strong>${escHtml(label)}</strong>
            ${tpl ? `<button type="button" class="sb-msg-from-tpl-clear" data-sid="${sid}" title="Quitar referencia a la plantilla origen">×</button>` : ''}
          </div>`;
        })()}
        <input type="hidden" data-field="fromTemplateId" data-sid="${sid}" value="${escHtml(c.fromTemplateId || '')}" />
        <p style="font-size:11px;color:var(--text-muted);margin-top:4px">Variables: {nombre} {apellido} {telefono} {email} · Para plantillas WhatsApp API aprobadas usa el step "Enviar plantilla".</p>`;
    }
    case 'template': {
      // Solo plantillas wa_api APROBADAS por Meta — las demás no se pueden enviar.
      const waApproved = (_tplItems || []).filter(t => t.type === 'wa_api' && t.waStatus === 'approved');
      const tplOpts = waApproved.map(t =>
        `<option value="${t.id}" ${c.templateId == t.id ? 'selected' : ''}>${escHtml(t.displayName || t.name)}</option>`
      ).join('');
      const tpl = (_tplItems || []).find(t => t.id == c.templateId);
      let phsHtml = '';
      if (tpl) {
        const max = [...(tpl.body || '').matchAll(/\{\{(\d+)\}\}/g)]
          .map(m => Number(m[1]))
          .reduce((a, b) => Math.max(a, b), 0);
        if (max > 0) {
          const phs = tpl.bodyPlaceholders || [];
          const mv = c.manualValues || [];
          const rows = [];
          for (let i = 0; i < max; i++) {
            const ph = phs[i] || {};
            if (ph.contactField) {
              rows.push(`
                <div class="sb-tpl-ph-row">
                  <span class="sb-tpl-ph-num">{{${i + 1}}}</span>
                  <span class="sb-tpl-ph-auto">${escHtml(ph.label || '(sin nombre)')} → auto del contacto (${escHtml(ph.contactField)})</span>
                </div>`);
            } else {
              rows.push(`
                <div class="sb-tpl-ph-row">
                  <span class="sb-tpl-ph-num">{{${i + 1}}}</span>
                  <input class="sb-tpl-manual" data-sid="${sid}" data-i="${i}" value="${escHtml(mv[i] || '')}" placeholder="${escHtml(ph.label || ph.example || `Valor para {{${i + 1}}}`)}" />
                </div>`);
            }
          }
          phsHtml = `
            <label style="margin-top:12px">Valores fijos (los Manual del template)</label>
            <p style="font-size:11px;color:var(--text-muted);margin:0 0 6px">Los placeholders mapeados al contacto se rellenan solos al enviar.</p>
            <div class="sb-tpl-phs">${rows.join('')}</div>`;
        }
      }
      const noApproved = !waApproved.length
        ? '<p style="font-size:12px;color:#dc2626;margin-top:6px">No tienes plantillas wa_api aprobadas todavía. Ve a Plantillas → crear → Enviar a Meta.</p>'
        : '';
      return `
        <label>Plantilla aprobada por Meta</label>
        <select data-field="templateId" data-sid="${sid}">
          <option value="">— Selecciona —</option>
          ${tplOpts}
        </select>
        ${noApproved}
        ${tpl ? `<div class="sb-tpl-preview">${escHtml((tpl.body || '').slice(0, 200))}${(tpl.body || '').length > 200 ? '…' : ''}</div>` : ''}
        ${phsHtml}`;
    }
    case 'timer': {
      // Backward compat: convert old {amount, unit} to new multi-field format for display
      let _d = Number(c.days) || 0, _h = Number(c.hours) || 0, _m = Number(c.minutes) || 0, _s = Number(c.seconds) || 0;
      if (c.amount && !c.days && !c.hours && !c.minutes && !c.seconds) {
        const amt = Number(c.amount) || 5;
        if (c.unit === 'segundos') _s = amt;
        else if (c.unit === 'horas') _h = amt;
        else if (c.unit === 'días') _d = amt;
        else _m = amt;
      }
      return `
        <label>Tiempo de espera</label>
        <div class="sb-timer-grid">
          <div class="sb-timer-unit">
            <input type="number" data-field="days" data-sid="${sid}" min="0" value="${_d}" />
            <span>días</span>
          </div>
          <div class="sb-timer-unit">
            <input type="number" data-field="hours" data-sid="${sid}" min="0" max="23" value="${_h}" />
            <span>horas</span>
          </div>
          <div class="sb-timer-unit">
            <input type="number" data-field="minutes" data-sid="${sid}" min="0" max="59" value="${_m}" />
            <span>min</span>
          </div>
          <div class="sb-timer-unit">
            <input type="number" data-field="seconds" data-sid="${sid}" min="0" max="59" value="${_s}" />
            <span>seg</span>
          </div>
        </div>`;
    }
    case 'condition':
      return _renderBranchEditor(sid, c);
    case 'stage': {
      const _curPl = (PIPELINES || []).find(p => p.id == c.pipelineId);
      const _curStage = _curPl?.stages?.find(s => s.id == c.stageId);
      const _curStageColor = _curStage?.color || '';
      const _curPlColor = _curPl?.color || '';
      const _plLabel = _curPl ? escHtml(_curPl.name) : '— Selecciona pipeline —';
      const _stLabel = _curStage ? escHtml(_curStage.name) : (c.pipelineId ? '— Selecciona etapa —' : '— Primero elige pipeline —');
      return `
        <label>Pipeline</label>
        <button type="button" class="sb-picker-btn sb-pipeline-btn" data-sid="${sid}">
          <span class="sb-picker-dot" data-pl-dot-sid="${sid}" style="background:${_curPlColor || 'transparent'}"></span>
          <span class="sb-picker-label" data-pl-label-sid="${sid}">${_plLabel}</span>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14" class="sb-picker-chev"><polyline points="6 8 10 12 14 8"/></svg>
        </button>
        <select data-field="pipelineId" data-sid="${sid}" class="sb-pipeline-sel" hidden>
          <option value="">—</option>
          ${(PIPELINES || []).map(p => `<option value="${p.id}" ${c.pipelineId==p.id?'selected':''}>${escHtml(p.name)}</option>`).join('')}
        </select>
        <label>Etapa</label>
        <button type="button" class="sb-picker-btn sb-stage-btn" data-sid="${sid}">
          <span class="sb-picker-dot" data-dot-sid="${sid}" style="background:${_curStageColor || 'transparent'}"></span>
          <span class="sb-picker-label" data-st-label-sid="${sid}">${_stLabel}</span>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14" class="sb-picker-chev"><polyline points="6 8 10 12 14 8"/></svg>
        </button>
        <select data-field="stageId" data-sid="${sid}" class="sb-stage-sel" hidden>
          ${buildStageOptionsWithColor(c.pipelineId, c.stageId)}
        </select>`;
    }
    case 'tag': {
      // c.tag se almacena como string separado por comas (ej. "interesado,vip,cotizado").
      // El input visual con chips agrupa varias etiquetas; el hidden con data-field="tag"
      // mantiene el string para que collectStepConfig lo recoja sin cambios.
      const tagsArr = String(c.tag || '').split(',').map(t => t.trim()).filter(Boolean);
      const chipsHtml = tagsArr.map((t, i) => `
        <span class="sb-tag-chip">
          ${escHtml(t)}
          <button type="button" class="sb-tag-chip-x" data-remove-step-tag="${i}" data-sid="${sid}" aria-label="Quitar">×</button>
        </span>`).join('');
      return `
        <label>Etiqueta(s) — teclea "," para añadir varias</label>
        <div class="sb-tag-chip-wrap" data-tag-wrap-sid="${sid}">
          ${chipsHtml}
          <input type="text" class="sb-tag-chip-add" data-tag-add-sid="${sid}" placeholder="${tagsArr.length ? 'Añadir otra…' : 'Ej. interesado'}" />
        </div>
        <input type="hidden" data-field="tag" data-sid="${sid}" value="${escHtml(c.tag || '')}" />`;
    }
    case 'assign': {
      const list = (typeof _advisors !== 'undefined' && _advisors) ? _advisors : [];
      // Retrocompat: bots viejos guardaban el nombre del asesor como string.
      // Si el valor actual no es numérico, intentamos pre-seleccionar por nombre.
      const cur = String(c.assignee || '').trim();
      let preSelected = '';
      if (cur && /^\d+$/.test(cur)) preSelected = cur;
      else if (cur) {
        const match = list.find(a => (a.name || '').toLowerCase() === cur.toLowerCase());
        if (match) preSelected = String(match.id);
      }
      const opts = list.map(a => `<option value="${a.id}" ${preSelected === String(a.id) ? 'selected' : ''}>${escHtml(a.name || `Asesor #${a.id}`)}</option>`).join('');
      return `
        <label>Responsable</label>
        <select data-field="assignee" data-sid="${sid}" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px">
          <option value="">— Selecciona asesor —</option>
          ${opts}
        </select>
        ${cur && !preSelected ? `<p style="font-size:11px;color:var(--warning,#f59e0b);margin:6px 0 0">⚠ El asesor "${escHtml(cur)}" guardado anteriormente no se encontró. Selecciona uno nuevo.</p>` : ''}`;
    }
    case 'ai_reply':
      return `
        <p style="font-size:12px;color:var(--text-muted);margin:4px 0 8px;line-height:1.5">
          La IA lee el historial de la conversación y tus fuentes de conocimiento para generar y enviar una respuesta automáticamente.<br>
          Deja la instrucción vacía para usar el tono por defecto configurado en Ajustes → IA.
        </p>
        <label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Instrucción personalizada (opcional)</label>
        <textarea data-field="instruction" data-sid="${sid}" rows="3" style="width:100%;resize:vertical;font-size:13px;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg);color:var(--text);box-sizing:border-box" placeholder="Ej: Responde como un experto en soporte técnico, sé breve y directo.">${c.instruction || ''}</textarea>`;
    case 'stop_bot':
      return `
        <p style="font-size:13px;color:var(--text-muted);margin:10px 0 4px;line-height:1.5">
          A partir de este paso el bot <strong>dejará de responder</strong> a este contacto.<br>
          Un agente podrá reanudarlo manualmente desde la conversación.
        </p>`;
    case 'create_task': {
      const advisorOptions = (() => {
        const list = (typeof _advisors !== 'undefined' && _advisors) ? _advisors : [];
        const opts = list.map(a => `<option value="${a.id}" ${Number(c.assignToAdvisorId) === a.id ? 'selected' : ''}>${escHtml(a.name || `Asesor #${a.id}`)}</option>`).join('');
        return `<option value="">— Asesor del lead (default) —</option>${opts}`;
      })();
      const ofAmt  = Number(c.offsetAmount || 1);
      const ofUnit = c.offsetUnit || 'h';
      return `
        <p style="font-size:12px;color:var(--text-muted);margin:6px 0 8px;line-height:1.5">
          Crea una tarea automáticamente en el módulo Recordatorios. Útil para programar follow-ups, llamadas o revisiones.
        </p>
        <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Título *</label>
        <input type="text" data-field="title" data-sid="${sid}" value="${escHtml(c.title || '')}" placeholder="Ej: Llamar a {{nombre}} para seguimiento" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:8px;box-sizing:border-box" />

        <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Descripción (opcional)</label>
        <textarea data-field="description" data-sid="${sid}" rows="2" placeholder="Notas adicionales para el asesor" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;resize:vertical;box-sizing:border-box;font-family:inherit;margin-bottom:8px">${escHtml(c.description || '')}</textarea>

        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap">
          <span style="font-size:12px;color:var(--text-muted)">Vence en</span>
          <input type="number" data-field="offsetAmount" data-sid="${sid}" value="${ofAmt}" min="1" style="width:80px;padding:6px 8px;border:1px solid var(--border);border-radius:6px;font-size:13px" />
          <select data-field="offsetUnit" data-sid="${sid}" style="padding:6px 8px;border:1px solid var(--border);border-radius:6px;font-size:13px">
            <option value="m" ${ofUnit==='m'?'selected':''}>minutos</option>
            <option value="h" ${ofUnit==='h'?'selected':''}>horas</option>
            <option value="d" ${ofUnit==='d'?'selected':''}>días</option>
          </select>
          <span style="font-size:12px;color:var(--text-muted)">desde ahora</span>
        </div>

        <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Asignar a</label>
        <select data-field="assignToAdvisorId" data-sid="${sid}" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:8px">
          ${advisorOptions}
        </select>

        <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Duración (min)</label>
        <input type="number" data-field="durationMinutes" data-sid="${sid}" value="${escHtml(String(c.durationMinutes ?? 30))}" min="1" style="width:100px;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px" />

        <p style="font-size:11px;color:var(--text-muted);margin:8px 0 0;line-height:1.4">
          Soporta variables: <code>{{nombre}}</code>, <code>{{phone}}</code>, etc.
        </p>`;
    }
    case 'update_field': {
      const fieldDefs = (typeof EXP_FIELD_DEFS !== 'undefined' && EXP_FIELD_DEFS) ? EXP_FIELD_DEFS.filter(f => f.entity === 'expedient' || !f.entity) : [];
      const fieldOpts = fieldDefs.length
        ? fieldDefs.map(f => `<option value="${f.id}" ${Number(c.fieldId) === f.id ? 'selected' : ''}>${escHtml(f.label)} (${escHtml(f.field_type)})</option>`).join('')
        : '';
      return `
        <p style="font-size:12px;color:var(--text-muted);margin:6px 0 8px;line-height:1.5">
          Actualiza un campo personalizado del lead. Útil para guardar información que el cliente envía o que el bot extrae con IA.
        </p>
        <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Campo *</label>
        <select data-field="fieldId" data-sid="${sid}" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:8px">
          <option value="">— Selecciona un campo —</option>
          ${fieldOpts || '<option disabled>Sin campos personalizados — créalos en Leads → Campos</option>'}
        </select>
        <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Nuevo valor</label>
        <input type="text" data-field="value" data-sid="${sid}" value="${escHtml(c.value || '')}" placeholder='Ej: "presupuesto medio" o {{messageBody}}' style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;box-sizing:border-box" />
        <p style="font-size:11px;color:var(--text-muted);margin:8px 0 0;line-height:1.4">
          Soporta variables: <code>{{nombre}}</code>, <code>{{phone}}</code>, <code>{{email}}</code>, etc.
        </p>`;
    }
    case 'http': {
      const methods = ['POST','GET','PUT','PATCH','DELETE'];
      const methodOpts = methods.map(m =>
        `<option value="${m}" ${(c.method || 'POST') === m ? 'selected' : ''}>${m}</option>`
      ).join('');
      return `
        <p style="font-size:12px;color:var(--text-muted);margin:6px 0 8px;line-height:1.5">
          Llama a una URL externa con los datos del lead. Funciona con <strong>Zapier</strong>, <strong>Make</strong>, <strong>n8n</strong>, Google Sheets (Apps Script) o tu propio backend.
        </p>
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <select data-field="method" data-sid="${sid}" style="padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;width:100px">
            ${methodOpts}
          </select>
          <input type="url" data-field="url" data-sid="${sid}" value="${escHtml(c.url || '')}" placeholder="https://api.tuservicio.com/webhook" style="flex:1;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;box-sizing:border-box" />
        </div>
        <details style="margin-bottom:6px">
          <summary style="font-size:12px;cursor:pointer;color:var(--text-muted);user-select:none">Opciones avanzadas (headers, body custom, timeout)</summary>
          <div style="padding:10px 0 4px">
            <label style="font-size:12px;font-weight:600;display:block;margin:4px 0 4px">Headers (uno por línea, formato <code>Key: Value</code>)</label>
            <textarea data-field="headers" data-sid="${sid}" rows="2" placeholder="Authorization: Bearer xxx&#10;X-Custom-Header: value" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:12px;font-family:ui-monospace,Menlo,Consolas,monospace;resize:vertical;box-sizing:border-box">${escHtml(c.headers || '')}</textarea>

            <label style="font-size:12px;font-weight:600;display:block;margin:10px 0 4px">Body (vacío = JSON automático con contact + lead + message)</label>
            <textarea data-field="body" data-sid="${sid}" rows="4" placeholder='Vacío → envía JSON con todos los datos del lead automáticamente.&#10;O personaliza: {"name": "{{nombre}}", "phone": "{{phone}}"}' style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:12px;font-family:ui-monospace,Menlo,Consolas,monospace;resize:vertical;box-sizing:border-box">${escHtml(c.body || '')}</textarea>

            <label style="font-size:12px;font-weight:600;display:block;margin:10px 0 4px">Timeout (segundos, máx 30)</label>
            <input type="number" data-field="timeoutSec" data-sid="${sid}" value="${escHtml(String(c.timeoutSec || 10))}" min="1" max="30" style="width:100px;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px" />
          </div>
        </details>
        <p style="font-size:11px;color:var(--text-muted);margin:6px 0 0;line-height:1.4">
          ⚡ Es <em>fire-and-forget</em>: el bot no espera la respuesta para seguir con el siguiente paso. Errores se loggean en Logs del bot.
        </p>`;
    }
    case 'handover': {
      const advisorOptions = (() => {
        const list = (typeof _advisors !== 'undefined' && _advisors) ? _advisors : [];
        const opts = list.map(a => `<option value="${a.id}" ${Number(c.assignToAdvisorId) === a.id ? 'selected' : ''}>${escHtml(a.name || `Asesor #${a.id}`)}</option>`).join('');
        return `<option value="">— Cualquier asesor (no reasigna) —</option>${opts}`;
      })();
      return `
        <p style="font-size:12px;color:var(--text-muted);margin:6px 0 10px;line-height:1.5">
          El bot <strong>se detiene</strong> y opcionalmente reasigna el lead, le agrega una etiqueta y registra una nota interna para que el humano sepa qué pasó.
        </p>
        <label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Asignar a asesor (opcional)</label>
        <select data-field="assignToAdvisorId" data-sid="${sid}" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:10px">
          ${advisorOptions}
        </select>
        <label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Etiqueta a agregar (opcional)</label>
        <input type="text" data-field="addTag" data-sid="${sid}" value="${escHtml(c.addTag || '')}" placeholder='Ej: "necesita-humano", "VIP-urgente"' style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:10px;box-sizing:border-box" />
        <label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Nota interna (opcional)</label>
        <textarea data-field="note" data-sid="${sid}" rows="2" placeholder="Ej: Cliente necesita cotización personalizada por >$50k" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-size:13px;resize:vertical;box-sizing:border-box;font-family:inherit">${escHtml(c.note || '')}</textarea>`;
    }
    case 'stop_and_start': {
      // Excluir el bot actual (no se puede auto-disparar)
      const others = (sbBots || []).filter(b => b.id !== sbCurrentId);
      const opts = others.length
        ? others.map(b => `<option value="${b.id}" ${Number(c.targetBotId) === b.id ? 'selected' : ''}>${escHtml(b.name)}</option>`).join('')
        : '<option value="">— No hay otros bots —</option>';
      return `
        <label>Bot a iniciar después</label>
        <select data-field="targetBotId" data-sid="${sid}">
          <option value="">— Selecciona un bot —</option>
          ${opts}
        </select>
        <p style="font-size:12px;color:var(--text-muted);margin:8px 0 4px;line-height:1.5">
          Este bot terminará y se ejecutará el bot seleccionado para el mismo contacto, en su mismo lead.
        </p>`;
    }
    case 'branch':
      return _renderBranchEditor(sid, c);
    case 'wait_response': {
      const tMin = Number(c.timeoutMinutes || 2880);
      let amount, unit;
      if (tMin >= 1440 && tMin % 1440 === 0)      { amount = tMin / 1440; unit = 'd'; }
      else if (tMin >= 60 && tMin % 60 === 0)     { amount = tMin / 60;   unit = 'h'; }
      else if (tMin >= 1)                         { amount = tMin;        unit = 'min'; }
      else                                         { amount = Math.round(tMin * 60); unit = 'sec'; }
      const onTimeout = c.onTimeout === 'stop' ? 'stop' : 'continue';
      return `
        <label>Esperar máximo</label>
        <div class="sb-timer-grid">
          <div class="sb-timer-unit">
            <input type="number" data-field="waitAmount" data-sid="${sid}" min="1" value="${amount}" style="width:80px" />
            <select data-field="waitUnit" data-sid="${sid}">
              <option value="sec" ${unit==='sec'?'selected':''}>segundos</option>
              <option value="min" ${unit==='min'?'selected':''}>minutos</option>
              <option value="h"   ${unit==='h'  ?'selected':''}>horas</option>
              <option value="d"   ${unit==='d'  ?'selected':''}>días</option>
            </select>
          </div>
        </div>
        <p style="font-size:11px;color:var(--text-muted);margin:4px 0 12px">
          El bot pausa aquí y espera al siguiente mensaje del lead. Si no responde en este tiempo, ejecuta la acción de abajo.
        </p>
        <label style="margin-bottom:6px">Si pasa el tiempo sin respuesta:</label>
        <div class="sb-wait-ontimeout">
          <label class="sb-radio-row">
            <input type="radio" name="ontimeout-${sid}" data-field="onTimeout" data-sid="${sid}" value="continue" ${onTimeout==='continue'?'checked':''} />
            <span>Continuar al siguiente paso</span>
          </label>
          <label class="sb-radio-row">
            <input type="radio" name="ontimeout-${sid}" data-field="onTimeout" data-sid="${sid}" value="stop" ${onTimeout==='stop'?'checked':''} />
            <span>Terminar bot</span>
          </label>
        </div>`;
    }
    case 'book_appointment':
      return `
        <div class="sb-info-box">
          <p>📅 <strong>Agendar Cita</strong></p>
          <p style="margin-top:6px;font-size:12px;color:var(--text-secondary)">
            Cuando el bot llega a este paso, envía una notificación al asesor asignado para que abra el
            modal de agendado. El asesor elige fecha, hora y duración directamente en la interfaz.
            No se requiere configuración adicional aquí.
          </p>
        </div>`;
    case 'cancel_appointment':
      return `
        <label>Mensaje de cancelación</label>
        <textarea data-field="message" data-sid="${sid}" rows="3" placeholder="Tu cita del {fecha_cita} a las {hora_cita} ha sido cancelada.">${escHtml(c.message || '')}</textarea>
        <p class="sb-hint">Variables: {nombre} {fecha_cita} {hora_cita}. Cancela la cita activa más reciente del lead.</p>`;
    case 'reschedule_appointment': {
      const advisorOpts = (_advisors || []).map(a =>
        `<option value="${a.id}" ${Number(c.advisorId) === a.id ? 'selected' : ''}>${escHtml(a.name)}</option>`
      ).join('');
      return `
        <div class="sb-appt-grid">
          <div>
            <label>Días desde hoy</label>
            <input type="number" data-field="offsetDays" data-sid="${sid}" min="0" max="365" value="${Number(c.offsetDays ?? 1)}" />
          </div>
          <div>
            <label>Hora (HH:MM)</label>
            <input type="time" data-field="time" data-sid="${sid}" value="${escHtml(c.time || '10:00')}" />
          </div>
          <div>
            <label>Duración (min)</label>
            <input type="number" data-field="durationMin" data-sid="${sid}" min="5" max="480" value="${Number(c.durationMin || 30)}" />
          </div>
        </div>
        <label style="margin-top:10px">Asesor asignado (opcional)</label>
        <select data-field="advisorId" data-sid="${sid}">
          <option value="">— Sin asignar —</option>
          ${advisorOpts}
        </select>
        <label style="margin-top:10px">Mensaje de confirmación de reagenda</label>
        <textarea data-field="message" data-sid="${sid}" rows="3" placeholder="Tu cita ha sido reagendada para el {fecha_cita} a las {hora_cita}.">${escHtml(c.message || '')}</textarea>
        <p class="sb-hint">Variables: {nombre} {fecha_cita} {hora_cita}</p>`;
    }
    case 'reminder_timer':
      return _renderReminderTimerEditor(sid, c);
    default: return '';
  }
}

function buildStageOptions(pipelineId, selectedStageId) {
  if (!pipelineId) return '<option value="">— Primero elige pipeline —</option>';
  const pl = (PIPELINES || []).find(p => p.id == pipelineId);
  if (!pl || !pl.stages) return '<option value="">Sin etapas</option>';
  return pl.stages.map(s =>
    `<option value="${s.id}" ${s.id==selectedStageId?'selected':''}>${escHtml(s.name)}</option>`
  ).join('');
}

function buildStageOptionsWithColor(pipelineId, selectedStageId) {
  if (!pipelineId) return '<option value="">— Primero elige pipeline —</option>';
  const pl = (PIPELINES || []).find(p => p.id == pipelineId);
  if (!pl || !pl.stages) return '<option value="">Sin etapas</option>';
  return pl.stages.map(s =>
    `<option value="${s.id}" data-color="${s.color || ''}" ${s.id==selectedStageId?'selected':''}>${escHtml(s.name)}</option>`
  ).join('');
}

let _sbInsertAfter     = null; // sid tras el cual insertar en flujo principal, null = al final
let _reminderStepCtx  = null; // { parentSid, rid } cuando se añade un step a una rama reminder
let _visualBranchCtx  = null; // { targetArr, parentSid } para añadir step a rama desde visual
let _branchCaseStepCtx = null; // { parentSid, caseId } para añadir step a una rama branch
let _bbSubInsertCtx   = null; // { targetArr, afterIdx } insertar entre sub-steps desde visual
let _branchSubInsertCtx = null; // { parentSid, caseId, afterStepId } insertar entre sub-steps en lista

// Busca el step con _id=sid en cualquier nivel del árbol (sbSteps, branch.cases.steps,
// branch.default, reminder_timer.reminders.steps, wait_response.branches[k]).
// Devuelve { parentArr, idx, depthInfo: [...] } o null. depthInfo describe
// la cadena de padres (para mostrar badges tipo "Rama 1").
function _findStepLocation(steps, sid, depthInfo = []) {
  if (!Array.isArray(steps)) return null;
  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    if (s._id === sid) return { parentArr: steps, idx: i, depthInfo };
    if (s.type === 'branch' || s.type === 'condition') {
      const cases = Array.isArray(s.config?.cases) ? s.config.cases : [];
      for (let ci = 0; ci < cases.length; ci++) {
        const r = _findStepLocation(cases[ci].steps, sid, [...depthInfo, { parentStep: s, label: `Rama ${ci + 1}` }]);
        if (r) return r;
      }
      const defR = _findStepLocation(s.config?.default, sid, [...depthInfo, { parentStep: s, label: 'Default' }]);
      if (defR) return defR;
    }
    if (s.type === 'reminder_timer') {
      const rems = Array.isArray(s.config?.reminders) ? s.config.reminders : [];
      for (const rem of rems) {
        const r = _findStepLocation(rem.steps, sid, [...depthInfo, { parentStep: s, label: `Recordatorio` }]);
        if (r) return r;
      }
    }
    if (s.type === 'wait_response') {
      const branches = s.config?.branches || {};
      for (const [bk, arr] of Object.entries(branches)) {
        const r = _findStepLocation(arr, sid, [...depthInfo, { parentStep: s, label: bk }]);
        if (r) return r;
      }
    }
  }
  return null;
}

// Aplana sbSteps en orden de renderizado para el list view, incluyendo
// sub-pasos de cada rama de un branch (con depth y label de "Rama X").
// Returns array of { step, depth, branchLabel, parentArr, idx }.
function _flattenStepsForList(steps, depth = 0, branchLabel = null) {
  const out = [];
  if (!Array.isArray(steps)) return out;
  steps.forEach((step, idx) => {
    out.push({ step, depth, branchLabel, parentArr: steps, idx });
  });
  return out;
}

function renderStepsFlow() {
  const flow = document.getElementById('sbStepsFlow');
  if (!flow) return;

  const hasStopBot = sbSteps.some(s => s.type === 'stop_bot' || s.type === 'stop_and_start');
  const lastIsTerminal = sbSteps.length > 0 && (sbSteps[sbSteps.length - 1].type === 'stop_bot' || sbSteps[sbSteps.length - 1].type === 'stop_and_start');

  // Ocultar el contenedor entero de "Agregar módulo" si el último paso es
  // terminal (stop_bot o stop_and_start). No tiene sentido añadir pasos
  // después de uno que termina la ejecución.
  const addWrap = document.querySelector('.sb-add-step-wrap');
  if (addWrap) addWrap.hidden = lastIsTerminal;

  // Banner de issues del trigger (no asociadas a ningún step)
  const triggerIssues = sbCurrentIssues.filter(i => i.stepId === null);
  const triggerBanner = triggerIssues.length
    ? `<div class="sb-trigger-issue">
        <span class="sb-issue-ico">⚠</span>
        <div>${triggerIssues.map(i => `<div>${escHtml(i.message)}</div>`).join('')}</div>
      </div>`
    : '';

  // Aplanar árbol completo: incluye top-level + sub-pasos de cada rama de cada
  // Condición. Cada entry tiene { step, depth, branchLabel, parentArr, idx }.
  const flatList = _flattenStepsForList(sbSteps);

  flow.innerHTML = triggerBanner + flatList.map((entry, listIdx) => {
    const { step, depth, branchLabel } = entry;
    const prev = listIdx > 0 ? flatList[listIdx - 1] : null;
    const prevIsStop = prev && (prev.step.type === 'stop_bot' || prev.step.type === 'stop_and_start');
    const prevIsBranchTop = prev && depth === 0 && prev.depth === 0 && (prev.step.type === 'branch' || prev.step.type === 'condition');
    const insertAfterTarget = !prev ? '__top__' : prev.step._id;
    const showInsert = !prev || !prevIsStop;
    const isNested = depth > 0;
    // Solo top-level pueden mostrar el fallback (el aviso aplica al "después" del branch top-level)
    const fallbackNote = prevIsBranchTop && depth === 0
      ? `<div class="sb-fallback-note" title="Estos pasos solo se ejecutan si ninguna rama del paso anterior matcheó. Para que un paso se ejecute cuando matchea una rama, agrégalo dentro de la rama desde el flujo visual.">
          <span class="sb-fallback-arrow">↳</span> Si ninguna rama matcheó, continúa aquí
        </div>`
      : '';
    // Badge "↳ Rama X" cuando el step es nested (dentro de una rama)
    const branchBadge = (isNested && branchLabel)
      ? `<span class="sb-step-branch-badge">↳ ${escHtml(branchLabel)}</span>`
      : '';
    // Issues específicas de este step (matchean por stepId === step._id)
    const stepIssues = sbCurrentIssues.filter(it => it.stepId === step._id);
    const errors = stepIssues.filter(it => it.severity === 'error');
    const warns  = stepIssues.filter(it => it.severity === 'warn');
    const issueClass = errors.length ? 'has-error' : (warns.length ? 'has-warn' : '');
    const issuesPanel = stepIssues.length
      ? `<div class="sb-step-issues ${errors.length ? 'is-error' : 'is-warn'}">
          ${stepIssues.map(it => `
            <div class="sb-step-issue-line">
              <span class="sb-issue-ico">${it.severity === 'error' ? '⚠' : '⚡'}</span>
              <div>
                <div class="sb-issue-msg">${escHtml(it.message)}</div>
                ${it.hint ? `<div class="sb-issue-hint">${escHtml(it.hint)}</div>` : ''}
              </div>
            </div>`).join('')}
        </div>`
      : '';
    const wrapClass = isNested ? `sb-step-wrap sb-step-wrap--nested sb-step-wrap--depth-${Math.min(depth, 4)}` : 'sb-step-wrap';
    return `
    <div class="${wrapClass}">
      ${fallbackNote}
      <div class="sb-step-connector">
        ${showInsert ? `<button class="sb-insert-between" data-insert-after="${insertAfterTarget}" title="Insertar módulo aquí">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
        </button>` : ''}
      </div>
      <div class="sb-step-card ${issueClass}" data-sid="${step._id}">
        <div class="sb-step-header" data-toggle-sid="${step._id}">
          <div class="sb-step-icon type-${step.type}">${stepIconSvg(step.type)}</div>
          <div class="sb-step-info">
            <div class="sb-step-title">${branchBadge}${SB_STEP_LABELS[step.type] || step.type}${errors.length ? ' <span class="sb-step-error-pill">⚠ Error</span>' : (warns.length ? ' <span class="sb-step-warn-pill">⚡ Aviso</span>' : '')}</div>
            <div class="sb-step-summary">${stepSummary(step)}</div>
          </div>
          <button class="sb-step-del" data-del-sid="${step._id}" aria-label="Eliminar paso">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></svg>
          </button>
        </div>
        ${issuesPanel}
        <div class="sb-step-body" data-body-sid="${step._id}">
          ${buildStepBody(step)}
        </div>
      </div>
    </div>`;
  }).join('');

  flow.querySelectorAll('.sb-step-body').forEach(b => b.classList.add('is-open'));
}

function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Helpers para chips del step "Agregar etiqueta" — manipulan c.tag (string CSV)
function _getStepTagsArray(sid) {
  const step = sbSteps.find(s => s._id === sid);
  if (!step) return { step: null, tags: [] };
  const cfg = step.config || (step.config = {});
  const tags = String(cfg.tag || '').split(',').map(t => t.trim()).filter(Boolean);
  return { step, cfg, tags };
}
function _setStepTagsArray(sid, tags) {
  const step = sbSteps.find(s => s._id === sid);
  if (!step) return;
  step.config = step.config || {};
  step.config.tag = tags.join(',');
  // Re-render solo el body de este step para que los chips se actualicen
  const body = document.querySelector(`[data-body-sid="${sid}"]`);
  if (body) {
    body.innerHTML = buildStepBody(step);
    // Volver a enfocar el input chip-add para encadenar
    setTimeout(() => document.querySelector(`.sb-tag-chip-add[data-tag-add-sid="${sid}"]`)?.focus(), 0);
  }
  // Actualizar summary
  const card = document.querySelector(`.sb-step-card[data-sid="${sid}"]`);
  const sumEl = card?.querySelector('.sb-step-summary');
  if (sumEl) sumEl.textContent = stepSummary(step);
}
function _addStepTag(sid, name) {
  const trimmed = String(name || '').trim();
  if (!trimmed) return;
  const { tags } = _getStepTagsArray(sid);
  if (tags.includes(trimmed)) return;
  _setStepTagsArray(sid, [...tags, trimmed]);
}
function _removeStepTagAt(sid, idx) {
  const { tags } = _getStepTagsArray(sid);
  tags.splice(idx, 1);
  _setStepTagsArray(sid, tags);
}
function _removeLastStepTag(sid) {
  const { tags } = _getStepTagsArray(sid);
  if (!tags.length) return;
  _setStepTagsArray(sid, tags.slice(0, -1));
}

// Resolver el body element del step. Cuando el editor visual está abierto
// y editando este step, su body tiene prioridad sobre el del linear builder
// (porque ambos comparten data-body-sid y querySelector devolvería el linear
// que no es el que el usuario está viendo).
function _resolveStepBody(sid) {
  const bbEditor = document.getElementById('bbVisualEditor');
  if (bbEditor && !bbEditor.hidden) {
    const bbBody = document.getElementById('bbVisualEditorBody');
    if (bbBody && bbBody.dataset.bodySid === sid) return bbBody;
  }
  return document.querySelector(`[data-body-sid="${sid}"]`);
}

// Búsqueda recursiva de un step por _id en cualquier nivel de anidamiento
// (top-level, dentro de cases.steps, default, o reminders.steps).
function _findStepDeep(steps, sid) {
  if (!Array.isArray(steps)) return null;
  for (const s of steps) {
    if (s._id === sid) return s;
    if (s.config?.cases) {
      for (const cs of s.config.cases) {
        const f = _findStepDeep(cs.steps || [], sid);
        if (f) return f;
      }
    }
    if (s.config?.default) {
      const f = _findStepDeep(s.config.default, sid);
      if (f) return f;
    }
    if (s.config?.reminders) {
      for (const rem of s.config.reminders) {
        const f = _findStepDeep(rem.steps || [], sid);
        if (f) return f;
      }
    }
  }
  return null;
}

function collectStepConfig(sid, bodyEl) {
  const body = bodyEl || _resolveStepBody(sid);
  if (!body) return {};
  const cfg = {};
  body.querySelectorAll('[data-field]').forEach(el => {
    cfg[el.dataset.field] = el.value;
  });
  // Attach stage name for display
  if (cfg.stageId) {
    const stageEl = body.querySelector('.sb-stage-sel');
    cfg.stageName = stageEl ? stageEl.options[stageEl.selectedIndex]?.text : '';
  }
  // Template steps — manualValues array indexed por placeholder
  const mvInputs = body.querySelectorAll('.sb-tpl-manual');
  if (mvInputs.length) {
    cfg.manualValues = [];
    mvInputs.forEach(inp => {
      const i = Number(inp.dataset.i);
      cfg.manualValues[i] = inp.value;
    });
  }
  // wait_response (nuevo shape simple): timeoutMinutes + onTimeout
  const waitAmtEl  = body.querySelector('[data-field="waitAmount"]');
  const waitUnitEl = body.querySelector('[data-field="waitUnit"]');
  if (waitAmtEl && waitUnitEl) {
    const amt = Math.max(1, Number(waitAmtEl.value) || 1);
    const unit = waitUnitEl.value;
    const factor = unit === 'd' ? 1440 : unit === 'h' ? 60 : unit === 'sec' ? (1 / 60) : 1;
    cfg.timeoutMinutes = amt * factor;
    const checked = body.querySelector(`input[type="radio"][data-field="onTimeout"]:checked`);
    cfg.onTimeout = checked?.value === 'stop' ? 'stop' : 'continue';
    // Limpiar keys auxiliares que el loop genérico de [data-field] dejó en cfg
    delete cfg.waitAmount;
    delete cfg.waitUnit;
  }

  // branch step v2 — recolectar solo condiciones; sub-steps se gestionan desde el flujo visual
  // Solo los casos que pertenecen a ESTE body, no a branches anidados
  const branchCasesV2 = [...body.querySelectorAll('.sb-branch-case-v2[data-case-id]')]
    .filter(el => el.closest('[data-body-sid]') === body);
  // Detectar si este body pertenece a un step branch (filtra add-buttons que pertenezcan a este body)
  const hasOwnAddCaseBtn = [...body.querySelectorAll('.sb-branch-add-case-v2')]
    .some(el => el.closest('[data-body-sid]') === body);
  if (branchCasesV2.length || hasOwnAddCaseBtn) {
    // Buscar el step en cualquier nivel (top-level o anidado) para preservar su estado
    const existingStep = (typeof sbSteps !== 'undefined' ? _findStepDeep(sbSteps, sid) : null);
    const existingCases = existingStep?.config?.cases || [];
    cfg.cases = [];
    branchCasesV2.forEach(caseEl => {
      const caseId = caseEl.dataset.caseId;
      // Solo rules de ESTE caso, no de branches anidados dentro de sus sub-steps
      const ruleEls = [...caseEl.querySelectorAll('.sb-branch-rule[data-rule-idx]')]
        .filter(el => el.closest('[data-body-sid]') === body);
      const rules = [];
      ruleEls.forEach(ruleEl => {
        const field = ruleEl.querySelector('.sb-branch-rule-field')?.value || 'message';
        const op    = ruleEl.querySelector('.sb-branch-rule-op')?.value    || 'contains';
        const valEl = ruleEl.querySelector('.sb-branch-rule-value');
        let value = '';
        if (valEl?.dataset?.pills === '1') {
          // Pills: extraer cada pill + texto pendiente del input final
          const pills = [...valEl.querySelectorAll('.sb-branch-pill')].map(p => p.dataset.pill || '').filter(Boolean);
          const pending = valEl.querySelector('.sb-branch-pill-input')?.value?.trim();
          if (pending) pills.push(pending);
          value = pills.join(',');
        } else {
          value = valEl?.value?.trim() || '';
        }
        rules.push({ field, op, value });
      });
      const rulesOpEl = [...caseEl.querySelectorAll('.sb-branch-rules-op')]
        .find(el => el.closest('[data-body-sid]') === body);
      const rules_op  = rulesOpEl?.value || 'and';
      // Sub-steps: buscar el body dentro del caseEl (evita encontrar un cuerpo
      // duplicado stale en el editor visual) y pasar ese body a collectStepConfig
      // para que use la lógica completa (incluyendo cases de branches anidados).
      const existingCase = existingCases.find(c => c.id === caseId);
      const steps = (existingCase?.steps || []).map(subStep => {
        const subBody = caseEl.querySelector(`[data-body-sid="${subStep._id}"]`);
        const newConfig = subBody ? collectStepConfig(subStep._id, subBody) : subStep.config;
        return { ...subStep, config: newConfig };
      });
      cfg.cases.push({ id: caseId, rules_op, rules, steps });
    });
    // Default steps: misma lógica que cs.steps — releer del DOM si está visible
    cfg.default = (existingStep?.config?.default || []).map(subStep => {
      const subBody = body.querySelector(`[data-body-sid="${subStep._id}"]`);
      const newConfig = subBody ? collectStepConfig(subStep._id, subBody) : subStep.config;
      return { ...subStep, config: newConfig };
    });
  }

  // reminder_timer — recolectar reminders[]
  const reminderBranches = body.querySelectorAll('.sb-reminder-branch[data-rid]');
  if (reminderBranches.length) {
    cfg.reminders = [];
    reminderBranches.forEach(branch => {
      const rid  = branch.dataset.rid;
      const mode = branch.querySelector(`select[data-field="rem_mode"]`)?.value || 'before';
      const val  = Number(branch.querySelector(`[data-field="rem_value"]`)?.value) || 30;
      const unit = branch.querySelector(`select[data-field="rem_unit"]`)?.value || 'min';
      const time = branch.querySelector(`input[data-field="rem_time"]`)?.value || '20:00';
      // Sub-steps: leer config de cada sub-step del DOM
      const steps = [];
      branch.querySelectorAll('[data-substep-id]').forEach(ssEl => {
        const subSid = ssEl.dataset.substepId;
        const type   = ssEl.dataset.substepType || 'message';
        steps.push({ _id: subSid, type, config: collectStepConfig(subSid) });
      });
      cfg.reminders.push(mode === 'day_before_at'
        ? { id: rid, mode, value: val, time, steps }
        : { id: rid, mode, value: val, unit, steps }
      );
    });
  }

  return cfg;
}

function collectAllSteps() {
  return sbSteps.map(step => {
    const config = collectStepConfig(step._id);
    // Auto-migrar condition viejo → branch cuando ya tiene el formato v2
    const type = (step.type === 'condition' && Array.isArray(config.cases)) ? 'branch' : step.type;
    return { ...step, type, config };
  });
}

function setupBot() {
  // Back button — devuelve al contexto desde el que se abrió el builder
  document.getElementById('botBackBtn')?.addEventListener('click', () => {
    const returnTo = _botBuilderReturnTo;
    closeBotBuilder();
    if (returnTo === 'pipelines') {
      showView('pipelines');
      // showView('pipelines') ya re-renderiza los kanbans, no hace falta más
    } else if (returnTo === 'templates') {
      showView('plantillas');
    } else if (returnTo === 'expedientes') {
      showView('expedientes');
    } else {
      loadSalsbots();
    }
    _botBuilderReturnTo = null;
  });

  // Búsqueda en la lista de bots (la barra del topbar cuando estamos en /bot)
  let _botSearchDebounce;
  document.getElementById('topbarSearchInput')?.addEventListener('input', (e) => {
    if (document.body.dataset.viewActive !== 'bot') return;
    clearTimeout(_botSearchDebounce);
    _botSearchDebounce = setTimeout(() => {
      _botSearch = e.target.value;
      renderBotList();
    }, 200);
  });

  // Create buttons
  ['botCreateBtn', 'botCreateBtn2'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => openBotBuilder(null));
  });

  // ─── Galería de plantillas de bot ───
  // Cada plantilla es un bot completo (name, trigger, steps) que se carga
  // en el editor. El usuario puede modificarlo antes de guardar (sin id =
  // insert nuevo). Cero acoplamiento con DB — son plain JSON.
  const BOT_TEMPLATES = [
    {
      id: 'welcome',
      icon: '👋',
      name: 'Bienvenida nuevo contacto',
      desc: 'Saluda y pregunta el motivo de contacto cuando alguien escribe por primera vez.',
      categories: ['Bienvenida'],
      bot: {
        name: 'Bienvenida',
        enabled: 0,
        trigger_type: 'new_contact',
        trigger_value: '',
        steps: [
          { type: 'message', config: { text: '¡Hola {{nombre}}! 👋 Gracias por escribirnos. Para atenderte mejor, ¿qué te trajo aquí hoy?' } },
          { type: 'wait_response', config: { timeoutMinutes: 1440, branches: { on_text_reply: [], on_button_click: [], on_timeout: [], on_delivery_fail: [] } } },
          { type: 'tag', config: { tag: 'nuevo-lead' } },
        ],
      },
    },
    {
      id: 'followup_quote',
      icon: '📋',
      name: 'Follow-up de cotización',
      desc: 'Secuencia de 3 mensajes en 7 días tras enviar una cotización para que el lead no se enfríe.',
      categories: ['Seguimiento'],
      bot: {
        name: 'Follow-up cotización',
        enabled: 0,
        trigger_type: 'no_response',
        trigger_value: String(48 * 60), // 48 horas
        steps: [
          { type: 'message', config: { text: 'Hola {{nombre}}, sigo a tus órdenes con la cotización que te envié. ¿Hay algo que te frene para avanzar?' } },
          { type: 'timer',   config: { days: 3, hours: 0, minutes: 0, seconds: 0 } },
          { type: 'message', config: { text: '{{nombre}}, ¿pudiste revisar la propuesta? Me encantaría resolverte cualquier duda.' } },
          { type: 'timer',   config: { days: 4, hours: 0, minutes: 0, seconds: 0 } },
          { type: 'message', config: { text: '{{nombre}}, último mensaje de mi parte. ¿Sigues interesado o cerramos el caso por ahora?' } },
          { type: 'tag',     config: { tag: 'reactivacion-fallida' } },
        ],
      },
    },
    {
      id: 'reactivation',
      icon: '🔥',
      name: 'Reactivación lead frío',
      desc: 'Para leads que no responden hace tiempo: secuencia de 3 mensajes con tono distinto cada uno.',
      categories: ['Reactivación'],
      bot: {
        name: 'Reactivación lead frío',
        enabled: 0,
        trigger_type: 'tag_added',
        trigger_value: 'frio',
        steps: [
          { type: 'message', config: { text: 'Hola {{nombre}} 👋 Hace tiempo no platicamos. ¿Sigues interesado en lo que platicamos?' } },
          { type: 'wait_response', config: { timeoutMinutes: 4320, branches: { on_text_reply: [{ type: 'tag', config: { tag: 'caliente' } }], on_button_click: [], on_timeout: [{ type: 'message', config: { text: 'Te dejo este beneficio especial 🎁: ¿te gustaría hablar?' } }], on_delivery_fail: [] } } },
        ],
      },
    },
    {
      id: 'appointment_reminder',
      icon: '📅',
      name: 'Recordatorio de cita 24h antes',
      desc: 'Envía recordatorio automático un día antes de cualquier cita en el campo "fecha_cita".',
      categories: ['Recordatorios'],
      bot: {
        name: 'Recordatorio cita 24h',
        enabled: 0,
        trigger_type: 'scheduled_field',
        // El usuario tendrá que seleccionar el campo en el editor
        trigger_value: '',
        steps: [
          { type: 'message', config: { text: 'Hola {{nombre}}, te recuerdo que tienes cita mañana. Confirma con un 👍 o reagenda escribiendo "reagendar".' } },
          { type: 'wait_response', config: { timeoutMinutes: 720, branches: { on_text_reply: [], on_button_click: [], on_timeout: [], on_delivery_fail: [] } } },
        ],
      },
    },
    {
      id: 'post_sale_nps',
      icon: '⭐',
      name: 'Post-venta / NPS',
      desc: 'Envía encuesta de satisfacción cuando un lead llega a la etapa "Ganado".',
      categories: ['Post-venta'],
      bot: {
        name: 'Encuesta post-venta',
        enabled: 0,
        trigger_type: 'pipeline_stage',
        // El usuario debe seleccionar la etapa "Ganado" en el editor
        trigger_value: '',
        steps: [
          { type: 'timer',   config: { days: 1, hours: 0, minutes: 0, seconds: 0 } },
          { type: 'message', config: { text: '¡Gracias por confiar en nosotros, {{nombre}}! 🙌 ¿Del 1 al 10, qué tan probable es que nos recomiendes?' } },
          { type: 'wait_response', config: { timeoutMinutes: 4320, branches: { on_text_reply: [], on_button_click: [], on_timeout: [], on_delivery_fail: [] } } },
        ],
      },
    },
    {
      id: 'capture_info',
      icon: '📝',
      name: 'Captura de info inicial',
      desc: 'Pregunta nombre/empresa/presupuesto en una conversación. Útil para leads de marketing.',
      categories: ['Captura'],
      bot: {
        name: 'Captura info inicial',
        enabled: 0,
        trigger_type: 'keyword',
        trigger_value: 'info',
        steps: [
          { type: 'message', config: { text: '¡Perfecto! Te paso info en un momento. Para personalizarlo, ¿podrías decirme tu empresa?' } },
          { type: 'wait_response', config: { timeoutMinutes: 60, branches: { on_text_reply: [{ type: 'message', config: { text: 'Excelente. ¿Y aproximadamente cuál es el presupuesto que manejan?' } }], on_button_click: [], on_timeout: [], on_delivery_fail: [] } } },
          { type: 'tag', config: { tag: 'info-completa' } },
        ],
      },
    },
    {
      id: 'handover_human',
      icon: '🎧',
      name: 'Pasar a humano por keyword',
      desc: 'Cuando el cliente escribe "humano" o "agente", pausa el bot y notifica al equipo.',
      categories: ['Soporte'],
      bot: {
        name: 'Pasar a humano',
        enabled: 0,
        trigger_type: 'keyword',
        trigger_value: 'humano',
        steps: [
          { type: 'message',  config: { text: 'Claro {{nombre}}, te paso con un asesor en un momento.' } },
          { type: 'handover', config: { addTag: 'necesita-humano', note: 'Cliente solicitó humano vía keyword' } },
        ],
      },
    },
    {
      id: 'webhook_zapier',
      icon: '⚡',
      name: 'Notificar a Zapier en lead nuevo',
      desc: 'Manda los datos del lead a un webhook (Zapier, n8n, Sheets) cada vez que entra a "Cotización".',
      categories: ['Integraciones'],
      bot: {
        name: 'Notificar a Zapier',
        enabled: 0,
        trigger_type: 'pipeline_stage',
        trigger_value: '', // usuario elige etapa
        steps: [
          { type: 'http', config: { method: 'POST', url: 'https://hooks.zapier.com/hooks/catch/XXX/YYY/', body: '', timeoutSec: 10 } },
        ],
      },
    },
  ];

  function _renderBotTemplatesGrid() {
    const grid = document.getElementById('botTemplatesGrid');
    if (!grid) return;
    grid.innerHTML = BOT_TEMPLATES.map(tpl => {
      const stepCount = tpl.bot.steps?.length || 0;
      const triggerDef = BOT_TRIGGER_REGISTRY[tpl.bot.trigger_type];
      const triggerLabel = triggerDef?.shortLabel || tpl.bot.trigger_type;
      return `<div class="bot-template-card" data-tpl-id="${escHtml(tpl.id)}">
        <div class="bot-template-card-icon">${tpl.icon}</div>
        <div class="bot-template-card-name">${escHtml(tpl.name)}</div>
        <div class="bot-template-card-desc">${escHtml(tpl.desc)}</div>
        <div class="bot-template-card-meta">
          ${tpl.categories.map(c => `<span class="bot-template-card-tag bot-template-card-tag--cat">${escHtml(c)}</span>`).join('')}
          <span class="bot-template-card-tag">${stepCount} pasos</span>
          <span class="bot-template-card-tag">${escHtml(triggerLabel)}</span>
        </div>
      </div>`;
    }).join('');
  }

  function _openBotTemplatesModal() {
    _renderBotTemplatesGrid();
    const modal = document.getElementById('botTemplatesModal');
    if (modal) modal.hidden = false;
  }

  function _closeBotTemplatesModal() {
    const modal = document.getElementById('botTemplatesModal');
    if (modal) modal.hidden = true;
  }

  ['botTemplatesBtn', 'botTemplatesBtn2'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', _openBotTemplatesModal);
  });
  document.getElementById('botTemplatesClose')?.addEventListener('click', _closeBotTemplatesModal);
  document.getElementById('botTemplatesModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'botTemplatesModal') _closeBotTemplatesModal();
  });

  // Click en una plantilla → abre el builder con esa plantilla cargada
  document.getElementById('botTemplatesGrid')?.addEventListener('click', (e) => {
    const card = e.target.closest('.bot-template-card');
    if (!card) return;
    const tpl = BOT_TEMPLATES.find(t => t.id === card.dataset.tplId);
    if (!tpl) return;
    _closeBotTemplatesModal();
    // Abrir el builder con la plantilla. NO incluir id ni enabled=1 — siempre
    // se guarda como bot nuevo para que el usuario pueda preview-editar antes.
    // Le agregamos los _id internos a los steps para que el editor los maneje.
    const synthBot = JSON.parse(JSON.stringify(tpl.bot));
    let counter = 0;
    const _addIds = (steps) => {
      if (!Array.isArray(steps)) return;
      for (const s of steps) {
        s._id = `s${++counter}_${Math.random().toString(36).slice(2, 6)}`;
        if (s.config?.branches) {
          for (const branch of Object.values(s.config.branches)) _addIds(branch);
        }
      }
    };
    _addIds(synthBot.steps);
    // sbCurrentId queda null porque no pasamos id → guarda como nuevo
    openBotBuilder(synthBot);
  });

  // Open existing bot on row click
  document.getElementById('botList')?.addEventListener('click', (e) => {
    // No abrir el builder si el usuario clickeó alguno de los botones de acciones
    if (e.target.closest('.sb-del-btn')) return;
    if (e.target.closest('.sb-clone-btn')) return;
    if (e.target.closest('.sb-stats-btn')) return;
    if (e.target.closest('.sb-toggle')) return;
    const row = e.target.closest('.bot-list-row');
    if (!row) return;
    const id = Number(row.dataset.botId);
    const bot = sbBots.find(b => b.id === id);
    if (bot) openBotBuilder(bot);
  });

  // Stats button click → abrir modal de estadísticas
  document.getElementById('botList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.sb-stats-btn');
    if (!btn) return;
    e.stopPropagation();
    openBotStatsModal(Number(btn.dataset.id));
  });

  // Clone bot (list)
  document.getElementById('botList')?.addEventListener('click', async (e) => {
    const btn = e.target.closest('.sb-clone-btn');
    if (!btn) return;
    e.stopPropagation();
    const id = Number(btn.dataset.id);
    const original = sbBots.find(b => b.id === id);
    if (!original) return;
    try {
      const payload = {
        name: `${original.name} (copia)`,
        trigger_type: original.trigger_type,
        trigger_value: original.trigger_value || null,
        steps: JSON.parse(JSON.stringify(original.steps || [])),
        enabled: 0,
        tagIds: Array.isArray(original.tags) ? original.tags.map(t => t.id) : [],
      };
      await api('POST', '/api/bot', payload);
      await loadSalsbots();
      toast(`Bot "${original.name}" clonado (desactivado)`, 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Enable toggle inline (list)
  document.getElementById('botList')?.addEventListener('change', async (e) => {
    const tog = e.target.closest('.sb-enabled-toggle');
    if (!tog) return;
    const id = Number(tog.dataset.id);
    try {
      await api('PATCH', `/api/bot/${id}`, { enabled: tog.checked ? 1 : 0 });
      const bot = sbBots.find(b => b.id === id);
      if (bot) bot.enabled = tog.checked;
    } catch (err) { toast(err.message, 'error'); tog.checked = !tog.checked; }
  });

  // Delete bot (list)
  document.getElementById('botList')?.addEventListener('click', async (e) => {
    const btn = e.target.closest('.sb-del-btn');
    if (!btn) return;
    if (!confirm('¿Eliminar este bot?')) return;
    const id = Number(btn.dataset.id);
    try {
      await api('DELETE', `/api/bot/${id}`);
      await loadSalsbots();
      toast('Bot eliminado', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Trigger type change
  document.getElementById('sbTriggerType')?.addEventListener('change', updateTriggerValueVisibility);

  // Pipeline selector en trigger pipeline_stage → recarga etapas
  document.getElementById('sbTriggerPipeline')?.addEventListener('change', e => {
    updateTriggerStageOptions(Number(e.target.value));
  });

  // Stage selector → update colored dot
  document.getElementById('sbTriggerStage')?.addEventListener('change', e => {
    updateTriggerStageDot(e.target.options[e.target.selectedIndex]);
  });

  // Add step button (al final)
  document.getElementById('sbAddStepBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    _sbInsertAfter = null; // al final
    const picker = document.getElementById('sbStepPicker');
    if (!picker) return;
    // Si quedó re-parentado al body (de un insert-between previo), devolverlo
    // al wrap para que el CSS auto-centrado bajo "Agregar paso" funcione.
    if (picker.dataset.originalParent) {
      const wrap = document.querySelector('.sb-add-step-wrap');
      if (wrap && picker.parentElement !== wrap) wrap.appendChild(picker);
      delete picker.dataset.originalParent;
      picker.style.cssText = '';
    }
    picker.hidden = !picker.hidden;
  });

  // Insert between button (delegado en el flow).
  // Estrategia: re-parentar el picker al document.body para evitar que herede
  // visibilidad/clipping del wrap padre (.sb-add-step-wrap se oculta cuando el
  // último paso es stop_bot/stop_and_start, lo que arrastraba al picker).
  // Lo restauramos al cerrar (al elegir un tipo o al click fuera).
  document.getElementById('sbStepsFlow')?.addEventListener('click', (e) => {
    const insertBtn = e.target.closest('.sb-insert-between');
    if (!insertBtn) return;
    e.stopPropagation();
    // Detectar si es un insert dentro de una rama branch (tiene data-branch-parent-sid)
    const bParentSid = insertBtn.dataset.branchParentSid;
    const bCaseId    = insertBtn.dataset.branchCaseId;
    const bAfterId   = insertBtn.dataset.insertAfter;
    if (bParentSid && bCaseId && bAfterId) {
      _branchSubInsertCtx = { parentSid: bParentSid, caseId: bCaseId, afterStepId: bAfterId };
      _sbInsertAfter = null;
    } else {
      _branchSubInsertCtx = null;
      _sbInsertAfter = insertBtn.dataset.insertAfter;
    }
    const picker = document.getElementById('sbStepPicker');
    if (!picker) return;

    // Mover al body si todavía está en su parent original
    if (picker.parentElement !== document.body) {
      picker.dataset.originalParent = '1';
      document.body.appendChild(picker);
    }

    // Posicionar (clamping al viewport, abajo o arriba del botón según espacio)
    picker.style.position = 'fixed';
    picker.style.transform = 'none';
    picker.style.zIndex = '9999';
    picker.style.left = '0px';
    picker.style.top = '0px';
    picker.style.removeProperty('width');
    picker.hidden = false;

    const btnRect = insertBtn.getBoundingClientRect();
    const pickerW = picker.offsetWidth || 320;
    const pickerH = picker.offsetHeight || 200;
    const margin = 8;

    const btnCenterX = btnRect.left + btnRect.width / 2;
    let left = btnCenterX - pickerW / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - pickerW - margin));

    let top = btnRect.bottom + 6;
    if (top + pickerH > window.innerHeight - margin) {
      top = Math.max(margin, btnRect.top - pickerH - 6);
    }

    picker.style.left = `${left}px`;
    picker.style.top  = `${top}px`;
  });

  // Helper: devuelve el picker a su parent original (.sb-add-step-wrap) y limpia
  // cualquier estilo inline. Se llama después de elegir un tipo o cerrar.
  function _restoreSbStepPicker() {
    const picker = document.getElementById('sbStepPicker');
    if (!picker) return;
    picker.hidden = true;
    picker.style.cssText = '';
    if (picker.dataset.originalParent) {
      const wrap = document.querySelector('.sb-add-step-wrap');
      if (wrap && picker.parentElement !== wrap) wrap.appendChild(picker);
      delete picker.dataset.originalParent;
    }
  }
  // Exponemos para uso de otros handlers (close, pick type)
  window._restoreSbStepPicker = _restoreSbStepPicker;

  // Pick step type — el listener está en el picker mismo, así que lo registramos
  // sobre document.body con delegation porque el picker puede ser re-parentado
  // al body cuando se abre desde insert-between.
  document.body.addEventListener('click', (e) => {
    const picker = document.getElementById('sbStepPicker');
    if (!picker || picker.hidden) return;
    if (!picker.contains(e.target)) return;
    const btn = e.target.closest('.sb-step-type-btn');
    if (!btn) return;
    _restoreSbStepPicker();
    const type = btn.dataset.type;
    sbStepCounter++;
    const newStep = { _id: `s${sbStepCounter}`, type, config: {} };

    // ── Si estamos añadiendo a una rama branch (step) ──
    if (_branchCaseStepCtx) {
      const { parentSid, caseId, ownBody } = _branchCaseStepCtx;
      _branchCaseStepCtx = null;
      const parentStep = _findBranchStep(parentSid);
      if (parentStep) {
        parentStep.config = collectStepConfig(parentSid, ownBody);
        if (caseId === '__default__') {
          if (!Array.isArray(parentStep.config.default)) parentStep.config.default = [];
          parentStep.config.default.push(newStep);
        } else {
          const cs = (parentStep.config.cases || []).find(c => c.id === caseId);
          if (cs) {
            if (!Array.isArray(cs.steps)) cs.steps = [];
            cs.steps.push(newStep);
          }
        }
        _rerenderBranchBody(ownBody, parentStep);
        if (ownBody) ownBody.classList.add('is-open');
      }
      return;
    }

    // ── Si estamos añadiendo a una rama desde la vista visual ──
    if (_visualBranchCtx) {
      const { targetArr } = _visualBranchCtx;
      _visualBranchCtx = null;
      if (Array.isArray(targetArr)) targetArr.push(newStep);
      if (typeof renderStepsFlow === 'function') renderStepsFlow();
      try { bbRenderVisualView(); } catch (_) {}
      return;
    }

    // ── Si estamos añadiendo a una rama reminder, insertar ahí ──
    if (_reminderStepCtx) {
      const { parentSid, rid, ownBody } = _reminderStepCtx;
      _reminderStepCtx = null;
      const parentStep = _findBranchStep(parentSid);
      if (parentStep) {
        parentStep.config = collectStepConfig(parentSid, ownBody);
        const rem = (parentStep.config.reminders || []).find(r => r.id === rid);
        if (rem) {
          if (!Array.isArray(rem.steps)) rem.steps = [];
          rem.steps.push(newStep);
          _rerenderBranchBody(ownBody, parentStep);
          if (ownBody) ownBody.classList.add('is-open');
        }
      }
      return;
    }

    // ── Insertar entre sub-steps desde la vista visual (referencia directa) ──
    if (_bbSubInsertCtx) {
      const { targetArr, afterIdx } = _bbSubInsertCtx;
      _bbSubInsertCtx = null;
      if (Array.isArray(targetArr)) targetArr.splice(afterIdx + 1, 0, newStep);
      if (typeof renderStepsFlow === 'function') renderStepsFlow();
      try { bbRenderVisualView(); } catch (_) {}
      return;
    }

    // ── Insertar entre sub-steps desde la vista lista (lookup directo) ──
    if (_branchSubInsertCtx) {
      const { parentSid, caseId, afterStepId } = _branchSubInsertCtx;
      _branchSubInsertCtx = null;
      const parentStep = _findBranchStep(parentSid);
      if (parentStep) {
        if (caseId === '__default__') {
          if (!Array.isArray(parentStep.config.default)) parentStep.config.default = [];
          const idx = parentStep.config.default.findIndex(s => s._id === afterStepId);
          parentStep.config.default.splice(idx + 1, 0, newStep);
        } else {
          const cs = (parentStep.config.cases || []).find(c => c.id === caseId);
          if (cs) {
            if (!Array.isArray(cs.steps)) cs.steps = [];
            const idx = cs.steps.findIndex(s => s._id === afterStepId);
            cs.steps.splice(idx + 1, 0, newStep);
          }
        }
        // Re-render lista y visual
        if (typeof renderStepsFlow === 'function') renderStepsFlow();
        const _av = document.querySelector('#botBuilderViewTabs .bb-view-tab.is-active')?.dataset.view;
        if (_av === 'visual') try { bbRenderVisualView(); } catch (_) {}
      }
      return;
    }

    if (_sbInsertAfter === '__top__') {
      sbSteps.unshift(newStep);
      _sbInsertAfter = null;
    } else if (_sbInsertAfter) {
      // Buscar en todo el árbol (top-level + nested branch.cases.steps)
      const loc = _findStepLocation(sbSteps, _sbInsertAfter);
      if (loc && loc.parentArr[loc.idx].type !== 'stop_bot') {
        loc.parentArr.splice(loc.idx + 1, 0, newStep);
      } else {
        sbSteps.push(newStep);
      }
      _sbInsertAfter = null;
    } else {
      sbSteps.push(newStep);
    }

    renderStepsFlow();
    // Si la vista visual está activa, re-renderizarla también
    const activeView = document.querySelector('#botBuilderViewTabs .bb-view-tab.is-active')?.dataset.view;
    if (activeView === 'visual') {
      try { bbRenderVisualView(); } catch (_) {}
    } else {
      // Scroll al nuevo paso (solo en lista)
      const flow = document.getElementById('sbStepsFlow');
      const newCard = flow?.querySelector(`[data-sid="${newStep._id}"]`);
      newCard?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Close picker on outside click. Acepta clicks dentro del picker (cuando
  // está re-parentado al body, .sb-add-step-wrap.contains() ya no lo cubre)
  // y dentro de .sb-insert-between (para no cerrarlo al re-clickear el botón).
  document.addEventListener('click', (e) => {
    const picker = document.getElementById('sbStepPicker');
    if (!picker || picker.hidden) return;
    if (picker.contains(e.target)) return;
    if (e.target.closest('.sb-add-step-wrap')) return;
    if (e.target.closest('.sb-insert-between')) return;
    if (e.target.closest('.sb-rem-add-step-btn')) return;
    if (e.target.closest('.sb-branch-case-add-step-btn')) return;
    if (e.target.closest('.bb-add-btn')) return;
    if (e.target.closest('.bb-node--empty')) return;
    if (e.target.closest('.bb-empty-branch')) return;
    _restoreSbStepPicker();
    _sbInsertAfter = null;
    _reminderStepCtx = null;
    _visualBranchCtx = null;
    _branchCaseStepCtx = null;
    _bbSubInsertCtx = null;
    _branchSubInsertCtx = null;
  });

  // Toggle step body open/close
  document.getElementById('sbStepsFlow')?.addEventListener('click', (e) => {
    // Delete wins — check first and bail before toggle
    const delBtn = e.target.closest('[data-del-sid]');
    if (delBtn) {
      const sid = delBtn.dataset.delSid;
      const loc = _findStepLocation(sbSteps, sid);
      if (loc) {
        loc.parentArr.splice(loc.idx, 1);
      } else {
        sbSteps = sbSteps.filter(s => s._id !== sid);
      }
      renderStepsFlow();
      return;
    }

    // Toggle de sub-step dentro de una rama reminder
    const subHeader = e.target.closest('[data-toggle-sub]');
    if (subHeader && !e.target.closest('.sb-rem-substep-del')) {
      const subBody = subHeader.closest('.sb-rem-substep')?.querySelector('[data-body-sid]');
      if (subBody) subBody.classList.toggle('is-open');
      return;
    }

    // Toggle body open/closed on header click
    const header = e.target.closest('[data-toggle-sid]');
    if (!header) return;
    const sid = header.dataset.toggleSid;
    const body = document.querySelector(`[data-body-sid="${sid}"]`);
    if (body) body.classList.toggle('is-open');
  });

  // Pipeline → stage cascade in step body
  document.getElementById('sbStepsFlow')?.addEventListener('change', (e) => {
    const plSel = e.target.closest('.sb-pipeline-sel');
    if (plSel) {
      const sid = plSel.dataset.sid;
      const stageSel = document.querySelector(`.sb-stage-sel[data-sid="${sid}"]`);
      if (stageSel) {
        stageSel.innerHTML = buildStageOptionsWithColor(plSel.value, null);
        stageSel.value = '';
      }
      const dot = document.querySelector(`.sb-picker-dot[data-dot-sid="${sid}"]`);
      if (dot) dot.style.background = 'transparent';
      const stLabel = document.querySelector(`.sb-picker-label[data-st-label-sid="${sid}"]`);
      if (stLabel) stLabel.textContent = plSel.value ? '— Selecciona etapa —' : '— Primero elige pipeline —';
      return;
    }
    const stageSel = e.target.closest('.sb-stage-sel');
    if (stageSel) {
      const sid = stageSel.dataset.sid;
      const dot = document.querySelector(`.sb-picker-dot[data-dot-sid="${sid}"]`);
      const opt = stageSel.options[stageSel.selectedIndex];
      if (dot) dot.style.background = opt?.dataset?.color || 'transparent';
    }
  });

  // Pipeline / Stage picker buttons (replace native select dropdowns)
  // ─── Handlers de step `branch` (multi-case) ───
  // Buscar step en sbSteps O en _bbEditingTarget (para steps anidados)
  function _findBranchStep(sid) {
    const found = _findStepDeep(sbSteps, sid);
    if (found) return found;
    const editing = _bbEditingTarget?.parentArr?.[_bbEditingTarget?.idx];
    if (editing?._id === sid) return editing;
    return null;
  }

  function _refreshBranchStepBody(sid) {
    const step = _findBranchStep(sid);
    if (!step) return;
    // Re-renderizar solo el body de ese step (priorizando el editor visual si está abierto)
    const body = (typeof _resolveStepBody === 'function')
      ? _resolveStepBody(sid)
      : document.querySelector(`[data-body-sid="${sid}"]`);
    if (body && typeof buildStepBody === 'function') {
      body.innerHTML = buildStepBody(step);
    }
    // También actualizar resumen del card si está abierto
    const summaryEl = document.querySelector(`.sb-step-summary[data-summary-sid="${sid}"]`);
    if (summaryEl && typeof stepSummary === 'function') {
      summaryEl.textContent = stepSummary(step);
    }
  }

  // ── branch v2: agregar rama, eliminar rama, agregar/eliminar regla, agregar step ──
  // Helper: re-renderiza el body exacto del step usando el elemento que contiene
  // el botón clickeado — evita ambigüedad cuando hay múltiples [data-body-sid="X"]
  // en el DOM (ej. visual editor stale + list view).
  function _rerenderBranchBody(ownBody, step) {
    if (!ownBody || typeof buildStepBody !== 'function') {
      _refreshBranchStepBody(step._id);
      return;
    }
    ownBody.innerHTML = buildStepBody(step);
    ownBody.classList.add('is-open');
  }

  document.body.addEventListener('click', (e) => {
    // Agregar rama
    const addCaseBtn = e.target.closest('.sb-branch-add-case-v2');
    if (addCaseBtn) {
      e.preventDefault();
      const sid     = addCaseBtn.dataset.sid;
      const ownBody = addCaseBtn.closest('[data-body-sid]');
      const step    = _findBranchStep(sid);
      if (!step) return;
      step.config = collectStepConfig(sid, ownBody);
      if (!Array.isArray(step.config.cases)) step.config.cases = [];
      step.config.cases.push({
        id: `bc_${Date.now()}`,
        rules_op: 'and',
        rules: [{ field: 'message', op: 'matches_any', value: '' }],
        steps: [],
      });
      _rerenderBranchBody(ownBody, step);
      return;
    }

    // Eliminar rama
    const delCaseBtn = e.target.closest('.sb-branch-case-del-v2');
    if (delCaseBtn) {
      e.preventDefault();
      e.stopPropagation();
      const sid     = delCaseBtn.dataset.sid;
      const caseId  = delCaseBtn.dataset.delCaseId;
      const ownBody = delCaseBtn.closest('[data-body-sid]');
      const step    = _findBranchStep(sid);
      if (!step) return;
      step.config = collectStepConfig(sid, ownBody);
      step.config.cases = (step.config.cases || []).filter(cs => cs.id !== caseId);
      _rerenderBranchBody(ownBody, step);
      return;
    }

    // Agregar regla a una rama
    const addRuleBtn = e.target.closest('.sb-branch-add-rule');
    if (addRuleBtn) {
      e.preventDefault();
      const sid     = addRuleBtn.dataset.sid;
      const caseId  = addRuleBtn.dataset.caseId;
      const ownBody = addRuleBtn.closest('[data-body-sid]');
      const step    = _findBranchStep(sid);
      if (!step) return;
      step.config = collectStepConfig(sid, ownBody);
      const cs = (step.config.cases || []).find(c => c.id === caseId);
      if (cs) {
        if (!Array.isArray(cs.rules)) cs.rules = [];
        cs.rules.push({ field: 'message', op: 'matches_any', value: '' });
      }
      _rerenderBranchBody(ownBody, step);
      return;
    }

    // Eliminar regla de una rama
    const delRuleBtn = e.target.closest('.sb-branch-rule-del');
    if (delRuleBtn) {
      e.preventDefault();
      e.stopPropagation();
      const sid      = delRuleBtn.dataset.sid;
      const caseId   = delRuleBtn.dataset.caseId;
      const ruleIdx  = Number(delRuleBtn.dataset.ruleIdx);
      const ownBody  = delRuleBtn.closest('[data-body-sid]');
      const step     = _findBranchStep(sid);
      if (!step) return;
      step.config = collectStepConfig(sid, ownBody);
      const cs = (step.config.cases || []).find(c => c.id === caseId);
      if (cs && Array.isArray(cs.rules)) {
        cs.rules.splice(ruleIdx, 1);
      }
      _rerenderBranchBody(ownBody, step);
      return;
    }

    // Abrir picker para agregar step a rama branch (o default)
    const addStepBtn = e.target.closest('.sb-branch-case-add-step-btn');
    if (addStepBtn) {
      e.preventDefault();
      e.stopPropagation();
      const parentSid = addStepBtn.dataset.parentSid;
      const caseId    = addStepBtn.dataset.caseId;
      const ownBody   = addStepBtn.closest('[data-body-sid]');
      _branchCaseStepCtx = { parentSid, caseId, ownBody };
      const picker = document.getElementById('sbStepPicker');
      if (!picker) return;
      if (picker.parentElement !== document.body) {
        picker.dataset.originalParent = '1';
        document.body.appendChild(picker);
      }
      picker.style.position  = 'fixed';
      picker.style.transform = 'none';
      picker.style.zIndex    = '9999';
      picker.hidden = false;
      const btnRect = addStepBtn.getBoundingClientRect();
      const pickerW = picker.offsetWidth || 320;
      const pickerH = picker.offsetHeight || 200;
      const margin  = 8;
      let left = btnRect.left + btnRect.width / 2 - pickerW / 2;
      left = Math.max(margin, Math.min(left, window.innerWidth - pickerW - margin));
      let top = btnRect.bottom + 6;
      if (top + pickerH > window.innerHeight - margin) top = Math.max(margin, btnRect.top - pickerH - 6);
      picker.style.left = `${left}px`;
      picker.style.top  = `${top}px`;
      return;
    }

    // ── eliminar sub-step de una rama (reminder_timer o branch v2) ──
    const delSubBtn = e.target.closest('.sb-rem-substep-del');
    if (delSubBtn) {
      e.preventDefault();
      e.stopPropagation();
      const parentSid  = delSubBtn.dataset.parentSid;
      const rid        = delSubBtn.dataset.parentRid;
      const caseId     = delSubBtn.dataset.parentCaseId;
      const subSid     = delSubBtn.dataset.delSubstep;
      const ownBody    = delSubBtn.closest('[data-body-sid]');
      const parentStep = _findBranchStep(parentSid);
      if (!parentStep) return;
      parentStep.config = collectStepConfig(parentSid, ownBody);

      if (caseId !== undefined) {
        // branch v2
        if (caseId === '__default__') {
          parentStep.config.default = (parentStep.config.default || []).filter(ss => ss._id !== subSid);
        } else {
          const cs = (parentStep.config.cases || []).find(c => c.id === caseId);
          if (cs && Array.isArray(cs.steps)) cs.steps = cs.steps.filter(ss => ss._id !== subSid);
        }
      } else {
        // reminder_timer
        const rem = (parentStep.config.reminders || []).find(r => r.id === rid);
        if (rem && Array.isArray(rem.steps)) rem.steps = rem.steps.filter(ss => ss._id !== subSid);
      }

      _rerenderBranchBody(ownBody, parentStep);
      return;
    }

    // ── reminder_timer: abrir picker para agregar step a una rama ──
    const addSubBtn = e.target.closest('.sb-rem-add-step-btn');
    if (addSubBtn) {
      e.preventDefault();
      e.stopPropagation();
      const parentSid = addSubBtn.dataset.parentSid;
      const rid       = addSubBtn.dataset.parentRid;
      const ownBody   = addSubBtn.closest('[data-body-sid]');
      _reminderStepCtx = { parentSid, rid, ownBody };
      const picker = document.getElementById('sbStepPicker');
      if (!picker) return;
      // Mover picker al body para evitar clipping
      if (picker.parentElement !== document.body) {
        picker.dataset.originalParent = '1';
        document.body.appendChild(picker);
      }
      picker.style.position = 'fixed';
      picker.style.transform = 'none';
      picker.style.zIndex = '9999';
      picker.hidden = false;
      const btnRect = addSubBtn.getBoundingClientRect();
      const pickerW = picker.offsetWidth || 320;
      const pickerH = picker.offsetHeight || 200;
      const margin  = 8;
      let left = btnRect.left + btnRect.width / 2 - pickerW / 2;
      left = Math.max(margin, Math.min(left, window.innerWidth - pickerW - margin));
      let top = btnRect.bottom + 6;
      if (top + pickerH > window.innerHeight - margin) top = Math.max(margin, btnRect.top - pickerH - 6);
      picker.style.left = `${left}px`;
      picker.style.top  = `${top}px`;
      return;
    }

    // ── reminder_timer: agregar recordatorio ──
    const addRemBtn = e.target.closest('.sb-reminder-add-btn');
    if (addRemBtn) {
      e.preventDefault();
      const sid     = addRemBtn.dataset.sid;
      const ownBody = addRemBtn.closest('[data-body-sid]');
      const step    = _findBranchStep(sid);
      if (!step) return;
      step.config = collectStepConfig(sid, ownBody);
      if (!Array.isArray(step.config.reminders)) step.config.reminders = [];
      step.config.reminders.push({ id: `r${Date.now()}`, mode: 'before', value: 30, unit: 'min' });
      _rerenderBranchBody(ownBody, step);
      return;
    }

    // ── reminder_timer: eliminar recordatorio ──
    const delRemBtn = e.target.closest('.sb-reminder-del-btn');
    if (delRemBtn) {
      e.preventDefault();
      e.stopPropagation();
      const rid = delRemBtn.dataset.delRid;
      const body = delRemBtn.closest('[data-body-sid]');
      if (!body) return;
      const sid = body.dataset.bodySid;
      const step = _findBranchStep(sid);
      if (!step) return;
      step.config = collectStepConfig(sid, body);
      step.config.reminders = (step.config.reminders || []).filter(r => r.id !== rid);
      _rerenderBranchBody(body, step);
      return;
    }
  });

  // ── branch v2: pills del campo Mensaje (DOM-only, sin re-render para no perder foco) ──
  function _branchPillCreateNode(text) {
    const span = document.createElement('span');
    span.className = 'sb-branch-pill';
    span.dataset.pill = text;
    span.innerHTML = `${escHtml(text)}<button type="button" class="sb-branch-pill-del" tabindex="-1" aria-label="Eliminar">×</button>`;
    return span;
  }
  function _branchPillCommit(input) {
    const container = input.closest('.sb-branch-rule-value[data-pills="1"]');
    if (!container) return;
    const raw = (input.value || '').trim();
    if (!raw) return;
    // Permitir múltiples palabras pegadas con coma de un solo paste
    raw.split(',').map(s => s.trim()).filter(Boolean).forEach(part => {
      // Evitar duplicados
      const exists = [...container.querySelectorAll('.sb-branch-pill')].some(p => p.dataset.pill === part);
      if (!exists) container.insertBefore(_branchPillCreateNode(part), input);
    });
    input.value = '';
  }
  document.body.addEventListener('keydown', (e) => {
    const input = e.target.closest('.sb-branch-pill-input');
    if (!input) return;
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      _branchPillCommit(input);
    } else if (e.key === 'Backspace' && !input.value) {
      const container = input.closest('.sb-branch-rule-value[data-pills="1"]');
      const pills = container?.querySelectorAll('.sb-branch-pill');
      if (pills && pills.length) {
        e.preventDefault();
        pills[pills.length - 1].remove();
      }
    }
  });
  document.body.addEventListener('blur', (e) => {
    const input = e.target.closest?.('.sb-branch-pill-input');
    if (input && input.value.trim()) _branchPillCommit(input);
  }, true); // capture: blur no burbuja
  document.body.addEventListener('click', (e) => {
    const del = e.target.closest('.sb-branch-pill-del');
    if (!del) return;
    e.preventDefault();
    e.stopPropagation();
    del.closest('.sb-branch-pill')?.remove();
  });

  // ── branch v2: al cambiar el campo, re-renderizar la fila para actualizar ops/value ──
  document.body.addEventListener('change', (e) => {
    const fieldSel = e.target.closest('.sb-branch-rule-field');
    if (!fieldSel) return;
    const sid      = fieldSel.dataset.sid;
    const caseId   = fieldSel.dataset.caseId;
    const ruleIdx  = Number(fieldSel.dataset.ruleIdx);
    const ownBody  = fieldSel.closest('[data-body-sid]');
    const step     = _findBranchStep(sid);
    if (!step) return;
    step.config = collectStepConfig(sid, ownBody);
    const cs = (step.config.cases || []).find(c => c.id === caseId);
    if (cs && cs.rules[ruleIdx]) {
      cs.rules[ruleIdx].field = fieldSel.value;
      cs.rules[ruleIdx].op    = _branchFieldOps(fieldSel.value)[0]?.[0] || 'contains';
      cs.rules[ruleIdx].value = '';
    }
    _rerenderBranchBody(ownBody, step);
  });

  // ── message: mostrar/ocultar campo subject según canal de correo ──
  document.getElementById('sbStepsFlow')?.addEventListener('change', (e) => {
    const chanSel = e.target.closest('.sb-channel-sel');
    if (!chanSel) return;
    const body = chanSel.closest('[data-body-sid]');
    if (!body) return;
    const subjectRow = body.querySelector('.sb-msg-subject-row');
    if (subjectRow) subjectRow.style.display = _isEmailIntegration(chanSel.value) ? 'block' : 'none';
  });

  // ── reminder_timer: cambio de modo (before ↔ day_before_at) ──
  document.getElementById('sbStepsFlow')?.addEventListener('change', (e) => {
    const modeSel = e.target.closest('select[data-field="rem_mode"]');
    if (!modeSel) return;
    const sid     = modeSel.dataset.sid;
    const ownBody = modeSel.closest('[data-body-sid]');
    const step    = _findBranchStep(sid);
    if (!step) return;
    step.config = collectStepConfig(sid, ownBody);
    _rerenderBranchBody(ownBody, step);
  });

  document.getElementById('sbStepsFlow')?.addEventListener('click', (e) => {
    const plBtn = e.target.closest('.sb-pipeline-btn');
    if (plBtn) {
      e.preventDefault();
      const sid = plBtn.dataset.sid;
      const sel = document.querySelector(`.sb-pipeline-sel[data-sid="${sid}"]`);
      if (!sel) return;
      openOptionPicker({
        title: 'Selecciona un pipeline',
        options: (PIPELINES || []).map(p => ({ value: p.id, label: p.name, color: p.color || '#94a3b8' })),
        currentValue: sel.value,
        onSelect: (val) => {
          if (String(val) === String(sel.value)) return;
          sel.value = val;
          const p = (PIPELINES || []).find(x => String(x.id) === String(val));
          const plLabel = document.querySelector(`.sb-picker-label[data-pl-label-sid="${sid}"]`);
          const plDot = document.querySelector(`.sb-picker-dot[data-pl-dot-sid="${sid}"]`);
          if (plLabel && p) plLabel.textContent = p.name;
          if (plDot) plDot.style.background = p?.color || 'transparent';
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          sel.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      return;
    }
    const stBtn = e.target.closest('.sb-stage-btn');
    if (stBtn) {
      e.preventDefault();
      const sid = stBtn.dataset.sid;
      const stageSel = document.querySelector(`.sb-stage-sel[data-sid="${sid}"]`);
      const plSel = document.querySelector(`.sb-pipeline-sel[data-sid="${sid}"]`);
      if (!stageSel || !plSel) return;
      const pipeline = (PIPELINES || []).find(p => String(p.id) === String(plSel.value));
      if (!pipeline) { toast('Primero selecciona un pipeline', 'error'); return; }
      const stages = Array.isArray(pipeline.stages) ? pipeline.stages : [];
      if (!stages.length) { toast('Este pipeline no tiene etapas', 'error'); return; }
      openOptionPicker({
        title: `Etapa de "${pipeline.name}"`,
        options: stages.map(s => ({ value: s.id, label: s.name, color: s.color || '#94a3b8' })),
        currentValue: stageSel.value,
        onSelect: (val) => {
          if (String(val) === String(stageSel.value)) return;
          stageSel.value = val;
          const stage = stages.find(s => String(s.id) === String(val));
          const stLabel = document.querySelector(`.sb-picker-label[data-st-label-sid="${sid}"]`);
          const dot = document.querySelector(`.sb-picker-dot[data-dot-sid="${sid}"]`);
          if (stLabel && stage) stLabel.textContent = stage.name;
          if (dot) dot.style.background = stage?.color || 'transparent';
          stageSel.dispatchEvent(new Event('change', { bubbles: true }));
          stageSel.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    }
  });

  // Update summary on input change
  document.getElementById('sbStepsFlow')?.addEventListener('input', (e) => {
    const el = e.target.closest('[data-sid]');
    if (!el) return;
    const sid = el.dataset.sid;
    const step = _findBranchStep(sid);
    if (!step) return;
    step.config = collectStepConfig(sid);
    const card = document.querySelector(`.sb-step-card[data-sid="${sid}"]`);
    const sumEl = card?.querySelector('.sb-step-summary');
    if (sumEl) sumEl.textContent = stepSummary(step);
    // wait_response — refrescar la pildora de estado por rama (Vacía / ✓ Configurada)
    const branchTa = e.target.closest('.sb-wait-branch-text');
    if (branchTa) {
      const branchKey = branchTa.dataset.branch;
      const wrap = card?.querySelector(`.sb-wait-branch[data-branch="${branchKey}"]`);
      const pill = wrap?.querySelector('.sb-wait-branch-state');
      if (pill) {
        const isSet = (branchTa.value || '').trim().length > 0;
        pill.classList.toggle('is-set', isSet);
        pill.textContent = isSet ? '✓ Configurada' : 'Vacía';
      }
    }
  });

  // ─── Step "Agregar etiqueta": chips con coma para varias etiquetas ───
  document.getElementById('sbStepsFlow')?.addEventListener('keydown', (e) => {
    const input = e.target.closest('.sb-tag-chip-add');
    if (!input) return;
    const sid = input.dataset.tagAddSid;
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      _addStepTag(sid, value);
      input.value = '';
    } else if (e.key === 'Backspace' && !input.value) {
      // Borrar la última pill cuando el input está vacío y se presiona backspace
      _removeLastStepTag(sid);
    }
  });
  // Pegar "tag1, tag2, tag3" en el input → crea todas
  document.getElementById('sbStepsFlow')?.addEventListener('input', (e) => {
    const input = e.target.closest('.sb-tag-chip-add');
    if (!input || !input.value.includes(',')) return;
    const sid = input.dataset.tagAddSid;
    const parts = input.value.split(',').map(p => p.trim()).filter(Boolean);
    const lastPart = input.value.endsWith(',') ? '' : parts[parts.length - 1];
    const toAdd = input.value.endsWith(',') ? parts : parts.slice(0, -1);
    input.value = lastPart;
    for (const p of toAdd) _addStepTag(sid, p);
  });
  // Click × en chip → quitar esa etiqueta
  document.getElementById('sbStepsFlow')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove-step-tag]');
    if (!btn) return;
    e.preventDefault();
    _removeStepTagAt(btn.dataset.sid, Number(btn.dataset.removeStepTag));
  });

  // Delete bot desde el builder
  document.getElementById('botBuilderDelete')?.addEventListener('click', async () => {
    if (!sbCurrentId) return;
    const bot = sbBots.find(b => b.id === sbCurrentId);
    if (!confirm(`¿Eliminar el bot "${bot?.name || ''}"? Lo podrás recuperar de la Papelera por 30 días.`)) return;
    try {
      await api('DELETE', `/api/bot/${sbCurrentId}`);
      sbCurrentId = null;
      document.getElementById('botBuilder').hidden = true;
      document.getElementById('botListView').hidden = false;
      await loadSalsbots();
      toast('Bot enviado a la papelera', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Save bot
  // ─── Vista de Código (read-only, JSON pretty-printed) ───
  // Lee el trigger_value desde el widget activo según el registry.
  // Si serialize() falla (validación), lanza Error con mensaje al usuario.
  function bbReadTriggerValue(trigger_type) {
    const def = BOT_TRIGGER_REGISTRY[trigger_type];
    if (!def) return '';
    if (def.serialize) {
      try { return def.serialize(); }
      catch (e) {
        // En el preview de Código no queremos romper el render — devolver '' silencioso
        return '';
      }
    }
    if (def.widget === 'text') {
      return document.getElementById('sbTriggerValue')?.value?.trim() || '';
    }
    return ''; // widgets sin valor: always, message_read, new_contact
  }

  function bbBuildBotJSON() {
    const trigger_type = document.getElementById('sbTriggerType')?.value || 'keyword';
    const trigger_value = bbReadTriggerValue(trigger_type);
    return {
      name:         document.getElementById('botBuilderName')?.value?.trim() || '',
      enabled:      document.getElementById('botBuilderEnabled')?.checked ? 1 : 0,
      trigger_type,
      trigger_value,
      tags:         (typeof sbTagIds !== 'undefined' && Array.isArray(sbTagIds)) ? sbTagIds : [],
      steps:        (typeof collectAllSteps === 'function')
        ? collectAllSteps().map(({ _id, ...rest }) => rest)
        : [],
    };
  }

  function bbHighlightJSON(jsonStr) {
    return jsonStr
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/("(?:\\.|[^"\\])*")(\s*:)/g,            '<span class="json-key">$1</span>$2')
      .replace(/:\s*("(?:\\.|[^"\\])*")/g,              ': <span class="json-string">$1</span>')
      .replace(/:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,': <span class="json-number">$1</span>')
      .replace(/:\s*(true|false)/g,                      ': <span class="json-bool">$1</span>')
      .replace(/:\s*(null)/g,                            ': <span class="json-null">$1</span>');
  }

  function bbRenderCodeView() {
    const codeEl = document.getElementById('bbCodeContent');
    if (!codeEl) return;
    try {
      const obj = bbBuildBotJSON();
      const jsonStr = JSON.stringify(obj, null, 2);
      codeEl.innerHTML = bbHighlightJSON(jsonStr);
      codeEl.dataset.raw = jsonStr;
    } catch (e) {
      codeEl.textContent = '// Error generando JSON: ' + e.message;
    }
  }

  function bbStepSummaryFor(step) {
    if (typeof stepSummary === 'function') {
      try { return stepSummary(step) || ''; } catch { return ''; }
    }
    return '';
  }

  function bbStepIconFor(type) {
    if (typeof stepIconSvg === 'function') {
      try { return stepIconSvg(type) || ''; } catch { return ''; }
    }
    return '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="10" cy="10" r="6"/></svg>';
  }

  function bbTriggerSummaryHTML(type, value) {
    // Reusa la lógica del registry para mantener un solo lugar de verdad.
    const def = BOT_TRIGGER_REGISTRY[type];
    const label = def ? (def.label?.[_botRegistryLang()] || def.label?.es || type) : type;
    let detail = '';
    try {
      if (def?.summaryHtml) {
        const raw = def.summaryHtml({ trigger_type: type, trigger_value: value });
        // El registry retorna ": ..." — para el árbol preferimos " — ..."
        detail = (raw || '').replace(/^:\s*/, ' — ');
      }
    } catch {}
    return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polygon points="3 3 17 10 3 17 3 3"/></svg>
            <span>Disparador: ${escHtml(label)}${detail || ''}</span>`;
  }

  function bbRenderStepNode(step, idx) {
    const type    = step.type;
    const summary = bbStepSummaryFor(step);
    const typeLabel = (typeof SB_STEP_LABELS === 'object' && SB_STEP_LABELS[type]) ? SB_STEP_LABELS[type] : type;
    let html = `
      <div class="bb-tree-step" data-step-index="${idx}">
        <div class="bb-tree-step-num">${idx + 1}</div>
        <div class="bb-tree-step-icon">${bbStepIconFor(type)}</div>
        <div class="bb-tree-step-body">
          <div class="bb-tree-step-type">${escHtml(typeLabel)}</div>
          ${summary ? `<div class="bb-tree-step-summary">${escHtml(summary)}</div>` : ''}
        </div>
      </div>`;
    // wait_response (compat con shape viejo): solo renderiza ramas si hay contenido real
    const _wrBranches = step.config?.branches;
    const _wrHasContent = _wrBranches && typeof _wrBranches === 'object'
      && Object.values(_wrBranches).some(arr => Array.isArray(arr) && arr.length > 0);
    if (type === 'wait_response' && _wrHasContent) {
      const branches = step.config.branches;
      const parts = ['<div class="bb-tree-branches">'];
      for (const [key, label] of Object.entries(SB_BRANCH_LABELS)) {
        const branchSteps = Array.isArray(branches[key]) ? branches[key] : [];
        parts.push(`<div class="bb-tree-branch-label">${escHtml(label)}</div>`);
        if (branchSteps.length === 0) {
          parts.push(`<div class="bb-tree-branch-empty">— sin pasos —</div>`);
        } else {
          branchSteps.forEach((s, i) => parts.push(bbRenderStepNode(s, i)));
        }
      }
      parts.push('</div>');
      html += parts.join('');
    }
    // branch step: render cases + default
    if (type === 'branch' && (Array.isArray(step.config?.cases) || Array.isArray(step.config?.default))) {
      const cases = step.config.cases || [];
      const parts = ['<div class="bb-tree-branches">'];
      cases.forEach((cs, ci) => {
        const branchSteps = Array.isArray(cs.branch) ? cs.branch : [];
        const fieldLabel = cs.field === 'tag' ? 'Si tag' : 'Si mensaje';
        const opLabel = cs.op === 'equals' ? '=' : cs.op === 'starts_with' ? 'empieza con' : 'contiene';
        parts.push(`<div class="bb-tree-branch-label">${escHtml(`Caso ${ci + 1}: ${fieldLabel} ${opLabel} "${cs.value || '?'}"`)}</div>`);
        if (branchSteps.length === 0) parts.push(`<div class="bb-tree-branch-empty">— sin pasos —</div>`);
        else branchSteps.forEach((s, i) => parts.push(bbRenderStepNode(s, i)));
      });
      const defSteps = Array.isArray(step.config.default) ? step.config.default : [];
      if (defSteps.length || cases.length) {
        parts.push(`<div class="bb-tree-branch-label">Default (si nada matchea)</div>`);
        if (defSteps.length === 0) parts.push(`<div class="bb-tree-branch-empty">— sin pasos —</div>`);
        else defSteps.forEach((s, i) => parts.push(bbRenderStepNode(s, i)));
      }
      parts.push('</div>');
      html += parts.join('');
    }
    return html;
  }

  function bbRenderIndentedView() {
    const container = document.getElementById('bbTreeContent');
    if (!container) return;
    const data  = bbBuildBotJSON();
    const trig  = `<div class="bb-tree-trigger">${bbTriggerSummaryHTML(data.trigger_type, data.trigger_value)}</div>`;
    if (!data.steps.length) {
      container.innerHTML = trig + '<div class="bb-tree-empty">Aún no hay pasos. Cambia a Lista para agregar pasos.</div>';
      return;
    }
    const stepsHtml = data.steps.map((s, i) => bbRenderStepNode(s, i)).join('');
    container.innerHTML = trig + stepsHtml;
  }

  function bbSwitchView(view) {
    // Si estamos saliendo de Visual y el editor del trigger está abierto,
    // cerrarlo para devolver la trigger card a la Lista (sino se queda en
    // el modal y la Lista aparece sin trigger card).
    const trigEditor = document.getElementById('bbVisualTriggerEditor');
    if (trigEditor && !trigEditor.hidden && view !== 'visual') {
      bbCloseTriggerEditorInline();
    }
    document.querySelectorAll('#botBuilderViewTabs .bb-view-tab').forEach(t => {
      t.classList.toggle('is-active', t.dataset.view === view);
    });
    document.querySelectorAll('.bb-view-content').forEach(c => {
      c.hidden = c.dataset.view !== view;
    });
    if (view === 'code')     bbRenderCodeView();
    if (view === 'indented') bbRenderIndentedView();
    if (view === 'visual')   { bbRenderVisualView(); }
  }

  // ─── Visual node graph (rewrite 2026-05-09) ───
  // Top→bottom auto-layout. Branches spread horizontally below parent.
  // Read-only canvas — click a node to open the side editor.
  const _BB_NODE_W  = 220;
  const _BB_NODE_H  = 80;
  const _BB_EMPTY_H = 52;
  const _BB_GAP_X   = 28;
  const _BB_GAP_Y   = 52;
  const _BB_PAD     = 40;

  // State
  let _bbTriggerCardOrigParent = null;
  let _bbTriggerCardPlaceholder = null;
  let _bbEditingTarget = null;

  // Stub para compatibilidad — palette eliminada en el rewrite
  function _bbBuildPalette() {}

  // ── Build a tree representation from flat steps[] ──
  function _bbBuildBotTree(steps, parentArr) {
    parentArr = parentArr || steps;
    return steps.map((step, idx) => {
      const tNode = {
        kind: 'step',
        step,
        parentArr,
        idx,
        children: [],
        mainContinues: false,
      };
      if (step.type === 'branch' && step.config) {
        if (!Array.isArray(step.config.cases))   step.config.cases = [];
        if (!Array.isArray(step.config.default)) step.config.default = [];
        step.config.cases.forEach((cs, i) => {
          // Normalizar: asegurar que cs.steps exista (compat con formato viejo branch[])
          if (!Array.isArray(cs.steps)) cs.steps = Array.isArray(cs.branch) ? cs.branch : [];
          // Construir etiqueta desde rules[]
          const rules = Array.isArray(cs.rules) && cs.rules.length
            ? cs.rules
            : (cs.field ? [{ field: cs.field, value: cs.value }] : []);
          const rulesOp = cs.rules_op || 'and';
          let labelText;
          if (!rules.length) {
            labelText = `Rama ${i + 1}`;
          } else if (rules.length === 1) {
            const r = rules[0];
            labelText = `${r.field === 'tag' ? '🏷' : '💬'} "${r.value || '?'}"`;
          } else {
            const sep = rulesOp === 'or' ? ' O ' : ' Y ';
            labelText = rules.map(r => `"${r.value || '?'}"`).join(sep);
          }
          tNode.children.push({
            label: labelText,
            subtree: _bbBuildBotTree(cs.steps, cs.steps),
            targetArr: cs.steps,
            parentStep: step,
          });
        });
        // Siempre mostrar De lo contrario (placeholder vacío si no tiene pasos)
        if (Array.isArray(step.config.default)) {
          tNode.children.push({
            label: 'De lo contrario',
            subtree: _bbBuildBotTree(step.config.default, step.config.default),
            targetArr: step.config.default,
            parentStep: step,
          });
        }
      } else if (step.type === 'wait_response' && step.config) {
        // Solo expandir ramas si el step tiene contenido real (shape viejo).
        // Shape nuevo (timeoutMinutes + onTimeout) → step simple sin children.
        const branches = step.config.branches;
        const hasContent = branches && typeof branches === 'object'
          && Object.values(branches).some(arr => Array.isArray(arr) && arr.length > 0);
        if (hasContent) {
          const keys = (typeof SB_BRANCH_LABELS === 'object' && SB_BRANCH_LABELS)
            ? Object.keys(SB_BRANCH_LABELS)
            : Object.keys(branches);
          keys.forEach((bKey) => {
            if (!Array.isArray(branches[bKey])) branches[bKey] = [];
            tNode.children.push({
              label: (SB_BRANCH_LABELS && SB_BRANCH_LABELS[bKey]) || bKey,
              subtree: _bbBuildBotTree(branches[bKey], branches[bKey]),
              targetArr: branches[bKey],
              parentStep: step,
            });
          });
        }
      } else if (step.type === 'reminder_timer' && step.config) {
        if (!Array.isArray(step.config.reminders)) step.config.reminders = [];
        step.config.reminders.forEach((rem) => {
          if (!Array.isArray(rem.steps)) rem.steps = [];
          let label;
          if (rem.mode === 'day_before_at') {
            label = `${rem.value || 1}d antes · ${rem.time || '20:00'}`;
          } else {
            const v = rem.value != null ? rem.value : 30;
            const u = rem.unit || 'min';
            label = `${v} ${u} antes`;
          }
          tNode.children.push({
            label,
            subtree: _bbBuildBotTree(rem.steps, rem.steps),
            targetArr: rem.steps,
            parentStep: step,
          });
        });
        tNode.mainContinues = true;
      }
      return tNode;
    });
  }

  // ── Measure subtree widths recursively (sets _width on each tree node + child) ──
  function _bbMeasure(treeNodes) {
    let maxWidth = _BB_NODE_W;
    treeNodes.forEach((node) => {
      if (node.children.length === 0) {
        node._width = _BB_NODE_W;
      } else {
        let sumChildWidths = 0;
        node.children.forEach((child) => {
          let cw = _BB_NODE_W;
          if (child.subtree.length > 0) {
            const dims = _bbMeasure(child.subtree);
            cw = dims.width;
          }
          child._width = cw;
          sumChildWidths += cw;
        });
        const total = sumChildWidths + _BB_GAP_X * (node.children.length - 1);
        node._width = Math.max(_BB_NODE_W, total);
      }
      maxWidth = Math.max(maxWidth, node._width);
    });
    return { width: maxWidth };
  }

  // ── Position tree nodes recursively → push to items[] / edges[] ──
  function _bbPosition(treeNodes, originX, originY, items, edges, prevId, prevEdgeLabel, depth) {
    if (depth === undefined) depth = 0;
    // Todos los hermanos comparten el MISMO centro horizontal (alineación vertical del flujo)
    const flowMaxWidth = Math.max.apply(null, treeNodes.map(n => n._width || _BB_NODE_W).concat([_BB_NODE_W]));
    const flowCenterX = originX + flowMaxWidth / 2;

    let y = originY;
    let curPrev = prevId;
    let curLabel = prevEdgeLabel;

    treeNodes.forEach((node) => {
      const nodeX = flowCenterX - _BB_NODE_W / 2;
      const nodeId = `n${items.length}`;

      items.push({
        id: nodeId,
        kind: 'step',
        step: node.step,
        parentArr: node.parentArr,
        idx: node.idx,
        mainFlow: depth === 0,
        hasChildren: node.children.length > 0,
        x: nodeX,
        y,
        w: _BB_NODE_W,
        h: _BB_NODE_H,
      });

      if (curPrev !== null) {
        edges.push({ from: curPrev, to: nodeId, label: curLabel || undefined });
      }

      if (node.children.length > 0) {
        const branchY = y + _BB_NODE_H + _BB_GAP_Y;
        // Centrar las branches debajo del nodo padre
        const totalBranchWidth = node._width;
        let bx = flowCenterX - totalBranchWidth / 2;
        let maxBranchBottom = branchY;

        node.children.forEach((child) => {
          if (child.subtree.length > 0) {
            const subFirstId = `n${items.length}`;
            _bbPosition(child.subtree, bx, branchY, items, edges, null, undefined, depth + 1);
            edges.push({ from: nodeId, to: subFirstId, label: child.label });
            const lastItem = items[items.length - 1];
            maxBranchBottom = Math.max(maxBranchBottom, lastItem.y + lastItem.h);
          } else {
            const dzId = `n${items.length}`;
            const dzX = bx + (child._width - _BB_NODE_W) / 2;
            items.push({
              id: dzId,
              kind: 'empty',
              label: child.label,
              targetArr: child.targetArr,
              parentStep: child.parentStep,
              x: dzX,
              y: branchY,
              w: _BB_NODE_W,
              h: _BB_EMPTY_H,
            });
            edges.push({ from: nodeId, to: dzId, label: child.label });
            maxBranchBottom = Math.max(maxBranchBottom, branchY + _BB_EMPTY_H);
          }
          bx += child._width + _BB_GAP_X;
        });

        y = maxBranchBottom + _BB_GAP_Y;
        if (node.mainContinues) {
          curPrev = nodeId;
          curLabel = 'Continúa';
        } else {
          curPrev = null;
          curLabel = undefined;
        }
      } else {
        y += _BB_NODE_H + _BB_GAP_Y;
        curPrev = nodeId;
        curLabel = undefined;
      }
    });
  }

  // ── Orthogonal Z-shape SVG path between two points ──
  function _bbEdgePath(x1, y1, x2, y2) {
    if (Math.abs(x2 - x1) < 4) {
      return `M ${x1} ${y1} L ${x2} ${y2}`;
    }
    const midY = y1 + (y2 - y1) / 2;
    return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
  }

  // ── Render a node card as HTML ──
  function _bbRenderNodeHtml(item) {
    if (item.kind === 'trigger') {
      const summaryHtml = item.summary ? `<div class="bb-node__summary">${escHtml(item.summary)}</div>` : '';
      return `<div class="bb-node bb-node--trigger" data-action="edit-trigger" style="left:${item.x}px;top:${item.y}px;width:${item.w}px;height:${item.h}px">
        <div class="bb-node__head">
          <span class="bb-node__icon"><svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><polygon points="3 3 17 10 3 17 3 3"/></svg></span>
          <span class="bb-node__title">${escHtml(item.label)}</span>
        </div>
        ${summaryHtml}
      </div>`;
    }
    if (item.kind === 'empty') {
      const shortLabel = item.label && item.label.length > 22 ? item.label.slice(0, 21) + '…' : (item.label || '');
      return `<div class="bb-empty-branch" data-action="add-to-branch" data-node-id="${item.id}" title="Agregar paso a esta rama" style="left:${item.x}px;top:${item.y}px;width:${item.w}px;height:${item.h}px">
        <div class="bb-empty-branch-btn">+</div>
        <div class="bb-empty-branch-label">${escHtml(shortLabel)}</div>
      </div>`;
    }
    const step = item.step;
    const reg = (typeof BOT_STEP_REGISTRY === 'object' && BOT_STEP_REGISTRY) ? BOT_STEP_REGISTRY[step.type] : null;
    const lang = (typeof _botRegistryLang === 'function') ? _botRegistryLang() : 'es';
    const label = reg ? (reg.label?.[lang] || reg.label?.es || step.type) : step.type;
    const summary = (typeof bbStepSummaryFor === 'function' ? bbStepSummaryFor(step) : '') || '';
    const grpClass = reg?.group ? `bb-node--grp-${reg.group}` : '';
    const num = item.idx != null ? (item.idx + 1) : '';
    const summaryHtml = summary ? `<div class="bb-node__summary">${escHtml(summary)}</div>` : '';
    const iconHtml = (typeof stepIcon === 'function') ? (stepIcon(step.type, 16) || '') : '';
    return `<div class="bb-node bb-node--step ${grpClass}" data-action="edit-step" data-node-id="${item.id}" style="left:${item.x}px;top:${item.y}px;width:${item.w}px;height:${item.h}px">
      <div class="bb-node__head">
        ${num !== '' ? `<span class="bb-node__num">${num}</span>` : ''}
        <span class="bb-node__icon">${iconHtml}</span>
        <span class="bb-node__title">${escHtml(label)}</span>
      </div>
      ${summaryHtml}
    </div>`;
  }

  // ── Main render ──
  function bbRenderVisualView() {
    const stage = document.getElementById('bbVisualStage');
    if (!stage) return;
    const data = bbBuildBotJSON();

    const triggerLabel = (() => {
      const def = (typeof BOT_TRIGGER_REGISTRY === 'object' && BOT_TRIGGER_REGISTRY) ? BOT_TRIGGER_REGISTRY[data.trigger_type] : null;
      const lang = (typeof _botRegistryLang === 'function') ? _botRegistryLang() : 'es';
      return def ? (def.label?.[lang] || def.label?.es || data.trigger_type) : (data.trigger_type || 'Disparador');
    })();
    const triggerSummary = (() => {
      const def = (typeof BOT_TRIGGER_REGISTRY === 'object' && BOT_TRIGGER_REGISTRY) ? BOT_TRIGGER_REGISTRY[data.trigger_type] : null;
      try {
        if (def?.summaryHtml) {
          const raw = def.summaryHtml({ trigger_type: data.trigger_type, trigger_value: data.trigger_value }) || '';
          return raw.replace(/<[^>]+>/g, '').replace(/^:\s*/, '').trim();
        }
      } catch {}
      return '';
    })();

    const items = [];
    const edges = [];

    // Usar sbSteps (referencias vivas) — NO data.steps (copia sin _id que rompe edición y botones +)
    const liveSteps = (typeof sbSteps !== 'undefined' && Array.isArray(sbSteps)) ? sbSteps : [];
    const tree = _bbBuildBotTree(liveSteps, liveSteps);
    if (tree.length > 0) _bbMeasure(tree);

    const totalContentW = tree.length > 0
      ? Math.max.apply(null, tree.map(n => n._width || _BB_NODE_W).concat([_BB_NODE_W]))
      : _BB_NODE_W;

    const flowCenterX = _BB_PAD + totalContentW / 2;
    const triggerX = flowCenterX - _BB_NODE_W / 2;
    const triggerY = _BB_PAD;
    items.push({
      id: 'trigger',
      kind: 'trigger',
      label: triggerLabel,
      summary: triggerSummary,
      x: triggerX,
      y: triggerY,
      w: _BB_NODE_W,
      h: _BB_NODE_H,
    });

    if (tree.length > 0) {
      _bbPosition(tree, _BB_PAD, triggerY + _BB_NODE_H + _BB_GAP_Y, items, edges, 'trigger', undefined);
    }

    let maxX = 0, maxY = 0;
    items.forEach(it => {
      if (it.x + it.w > maxX) maxX = it.x + it.w;
      if (it.y + it.h > maxY) maxY = it.y + it.h;
    });
    const stageW = maxX + _BB_PAD;
    const stageH = maxY + _BB_PAD;

    const itemMap = {};
    items.forEach(it => { itemMap[it.id] = it; });

    // Limpiar stage y crear canvas
    stage.innerHTML = '';
    const canvas = document.createElement('div');
    canvas.className = 'bb-canvas';
    canvas.style.width  = stageW + 'px';
    canvas.style.height = stageH + 'px';
    stage.appendChild(canvas);

    // SVG con createElementNS (innerHTML no parsea bien SVG nested)
    // NOTA: inline style sobreescribe la regla global "svg { width:20px; height:20px }"
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'bb-edges');
    svg.setAttribute('viewBox', `0 0 ${stageW} ${stageH}`);
    svg.style.width  = stageW + 'px';
    svg.style.height = stageH + 'px';
    svg.style.overflow = 'visible';
    canvas.appendChild(svg);

    edges.forEach((edge) => {
      const from = itemMap[edge.from];
      const to   = itemMap[edge.to];
      if (!from || !to) return;
      const x1 = from.x + from.w / 2;
      const y1 = from.y + from.h;
      const x2 = to.x + to.w / 2;
      const y2 = to.y;

      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('class', 'bb-edge');
      // Atributos inline como fallback (por si el CSS está cacheado o no carga)
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#94a3b8');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('d', _bbEdgePath(x1, y1, x2, y2));
      svg.appendChild(path);

      // Labels de rama van en el nodo vacío (no en la línea)
    });

    // Nodos como divs (innerHTML SÍ funciona para HTML normal)
    const nodesHtml = items.map(item => _bbRenderNodeHtml(item)).join('');
    const tmpWrap = document.createElement('div');
    tmpWrap.innerHTML = nodesHtml;
    while (tmpWrap.firstChild) canvas.appendChild(tmpWrap.firstChild);

    // Helper: abrir picker como overlay flotante centrado (sin cambiar de vista)
    function _bbOpenPicker(insertAfterVal) {
      _sbInsertAfter = insertAfterVal || null;
      if (insertAfterVal) _visualBranchCtx = null;
      _bbShowPickerFloating();
    }
    function _bbShowPickerFloating() {
      const picker = document.getElementById('sbStepPicker');
      if (!picker) return;
      if (picker.parentElement !== document.body) {
        picker.dataset.originalParent = '1';
        document.body.appendChild(picker);
      }
      picker.style.position = 'fixed';
      picker.style.top = '50%';
      picker.style.left = '50%';
      picker.style.right = 'auto';
      picker.style.bottom = 'auto';
      picker.style.transform = 'translate(-50%, -50%)';
      picker.style.zIndex = '9999';
      picker.style.maxHeight = '80vh';
      picker.style.overflow = 'auto';
      picker.style.boxShadow = '0 20px 60px rgba(15,23,42,.25)';
      picker.hidden = false;
    }

    function _bbAddBtn(cx, cy, insertAfterVal, subCtx) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bb-add-btn';
      btn.title = 'Insertar paso aquí';
      btn.textContent = '+';
      btn.style.left = (cx - 12) + 'px';
      btn.style.top  = (cy - 12) + 'px';
      canvas.appendChild(btn);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (subCtx) {
          _bbSubInsertCtx = subCtx;
          _sbInsertAfter = null;
          _visualBranchCtx = null;
          _bbShowPickerFloating();
        } else {
          _bbOpenPicker(insertAfterVal);
        }
      });
      return btn;
    }
    function _bbBranchAddBtn(cx, cy, targetArr) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bb-add-btn';
      btn.title = 'Agregar paso a esta rama';
      btn.textContent = '+';
      btn.style.left = (cx - 12) + 'px';
      btn.style.top  = (cy - 12) + 'px';
      canvas.appendChild(btn);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        _visualBranchCtx = { targetArr, parentSid: null };
        _sbInsertAfter = null;
        _bbShowPickerFloating();
      });
      return btn;
    }

    // Botones "+" en aristas del flujo principal Y entre sub-steps de ramas
    edges.forEach((edge) => {
      const from = itemMap[edge.from];
      const to   = itemMap[edge.to];
      if (!to) return;

      const x1 = from ? from.x + from.w / 2 : itemMap['trigger'].x + itemMap['trigger'].w / 2;
      const y1 = from ? from.y + from.h      : itemMap['trigger'].y + itemMap['trigger'].h;
      const x2 = to.x + to.w / 2;
      const y2 = to.y;
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;

      const fromMain = edge.from === 'trigger' || from?.mainFlow;
      const toMain   = to?.mainFlow;

      if (fromMain && toMain) {
        // Flujo principal: trigger→n o mainFlow→mainFlow
        const insertAfter = edge.from === 'trigger' ? '__top__' : (from.step?._id || null);
        const fromIsStop = from?.step?.type === 'stop_bot' || from?.step?.type === 'stop_and_start';
        if (insertAfter && !fromIsStop) _bbAddBtn(midX, midY, insertAfter);
        return;
      }

      // Sub-steps de rama: hermanos en el mismo parentArr — usar referencia directa
      if (from?.step && to?.step && from.parentArr && from.parentArr === to.parentArr) {
        const fromIsStop = from.step.type === 'stop_bot' || from.step.type === 'stop_and_start';
        if (!fromIsStop) {
          const subCtx = { targetArr: from.parentArr, afterIdx: from.idx };
          _bbAddBtn(midX, midY, null, subCtx);
        }
      }
    });

    // Botón "+" al final del último nodo del flujo principal — solo si NO ramifica
    const lastMain = items.filter(it => it.mainFlow).sort((a, b) => (b.y + b.h) - (a.y + a.h))[0];
    const lastMainIsStop = lastMain?.step?.type === 'stop_bot' || lastMain?.step?.type === 'stop_and_start';
    if (lastMain && !lastMain.hasChildren && !lastMainIsStop) {
      const endX = lastMain.x + lastMain.w / 2;
      const endY = lastMain.y + lastMain.h + _BB_GAP_Y / 2;
      _bbAddBtn(endX, endY, lastMain.step?._id || null);
    } else if (items.length === 1) {
      // Solo trigger, sin pasos: botón justo debajo
      const tr = itemMap['trigger'];
      _bbAddBtn(tr.x + tr.w / 2, tr.y + tr.h + _BB_GAP_Y / 2, '__top__');
    }

    // Botón "+" al final de cada rama (último sub-step de cada parentArr no-mainFlow)
    items.forEach(item => {
      if (item.kind !== 'step') return;
      if (item.mainFlow) return;
      if (item.hasChildren) return;
      if (!Array.isArray(item.parentArr)) return;
      if (item.idx !== item.parentArr.length - 1) return;
      if (item.step?.type === 'stop_bot' || item.step?.type === 'stop_and_start') return;
      const cx = item.x + item.w / 2;
      const cy = item.y + item.h + _BB_GAP_Y / 2;
      _bbBranchAddBtn(cx, cy, item.parentArr);
    });

    canvas.querySelectorAll('[data-action="edit-trigger"]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); bbOpenTriggerEditorInline(); });
    });
    canvas.querySelectorAll('[data-action="edit-step"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-node-id');
        const item = itemMap[id];
        if (item && item.parentArr && typeof item.idx === 'number') {
          bbOpenVisualEditorByRef(item.parentArr, item.idx);
        }
      });
    });
    // Click en placeholder vacío de rama → agregar paso a ESA rama
    canvas.querySelectorAll('[data-action="add-to-branch"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = el.getAttribute('data-node-id');
        const item = itemMap[id];
        if (!item || !Array.isArray(item.targetArr)) return;
        _visualBranchCtx = {
          targetArr: item.targetArr,
          parentSid: item.parentStep?._id || null,
        };
        _bbOpenPicker(null);
      });
    });
  }

  // ─── Trigger inline editor ───
  function bbOpenTriggerEditorInline() {
    const card = document.getElementById('sbTriggerType')?.closest('.sb-trigger-card');
    if (!card) return;
    const slot = document.getElementById('bbVisualTriggerEditorSlot');
    if (!slot) return;
    _bbTriggerCardOrigParent = card.parentNode;
    _bbTriggerCardPlaceholder = document.createElement('div');
    _bbTriggerCardPlaceholder.style.display = 'none';
    _bbTriggerCardOrigParent.insertBefore(_bbTriggerCardPlaceholder, card);
    slot.appendChild(card);
    document.getElementById('bbVisualTriggerEditor').hidden = false;
  }
  function bbCloseTriggerEditorInline() {
    const slot = document.getElementById('bbVisualTriggerEditorSlot');
    const card = slot?.querySelector('.sb-trigger-card');
    if (card && _bbTriggerCardOrigParent && _bbTriggerCardPlaceholder) {
      _bbTriggerCardOrigParent.insertBefore(card, _bbTriggerCardPlaceholder);
      _bbTriggerCardPlaceholder.remove();
      _bbTriggerCardPlaceholder = null;
      _bbTriggerCardOrigParent = null;
    }
    document.getElementById('bbVisualTriggerEditor').hidden = true;
    bbRenderVisualView();
  }

  // ─── Side editor for steps ───
  function bbOpenVisualEditor(idx) { bbOpenVisualEditorByRef(sbSteps, idx); }
  function bbOpenVisualEditorByRef(parentArr, idx) {
    const step = parentArr?.[idx];
    if (!step) return;
    if (!step._id) {
      sbStepCounter++;
      step._id = `s${sbStepCounter}`;
    }
    _bbEditingTarget = { parentArr, idx };
    const def = BOT_STEP_REGISTRY[step.type];
    const lang = (typeof _botRegistryLang === 'function') ? _botRegistryLang() : 'es';
    const label = def ? (def.label?.[lang] || def.label?.es || step.type) : step.type;
    document.getElementById('bbVisualEditorIcon').innerHTML = stepIcon(step.type, 18) || '';
    document.getElementById('bbVisualEditorLabel').textContent = label;
    const body = document.getElementById('bbVisualEditorBody');
    if (body && typeof buildStepBody === 'function') {
      body.dataset.bodySid = step._id; // permite que _refreshBranchStepBody encuentre el body
      try { body.innerHTML = buildStepBody(step); }
      catch (e) { body.innerHTML = `<p style="color:#dc2626">Error: ${escHtml(e.message)}</p>`; }
    }
    document.getElementById('bbVisualEditor').hidden = false;
  }
  function bbCloseVisualEditor() {
    document.getElementById('bbVisualEditor').hidden = true;
    _bbEditingTarget = null;
  }
  function bbSaveVisualEditor() {
    if (!_bbEditingTarget) return;
    const { parentArr, idx } = _bbEditingTarget;
    const step = parentArr[idx];
    if (!step) return;
    if (typeof collectStepConfig === 'function') {
      try {
        const newConfig = collectStepConfig(step._id);
        if (step._pos) newConfig._pos = step._pos;
        step.config = newConfig;
      } catch (e) {
        if (typeof toast === 'function') toast('Error: ' + e.message, 'error');
        return;
      }
    }
    bbCloseVisualEditor();
    if (typeof renderStepsFlow === 'function') renderStepsFlow();
    bbRenderVisualView();
    if (typeof toast === 'function') toast('Cambios aplicados (recuerda Guardar el bot)', 'success');
  }
  function bbDeleteStepFromVisual() {
    if (!_bbEditingTarget) return;
    if (!confirm('¿Eliminar este paso?')) return;
    try {
      const { parentArr, idx } = _bbEditingTarget;
      if (!Array.isArray(parentArr)) return;
      parentArr.splice(idx, 1);
      bbCloseVisualEditor();
      if (typeof renderStepsFlow === 'function') renderStepsFlow();
      bbRenderVisualView();
      if (typeof toast === 'function') toast('Paso eliminado', 'success');
    } catch (err) {
      if (typeof toast === 'function') toast('Error al eliminar: ' + err.message, 'error');
    }
  }

  // Wire side editor buttons
  document.getElementById('bbVisualEditorClose')?.addEventListener('click', bbCloseVisualEditor);
  document.getElementById('bbVisualEditorCancel')?.addEventListener('click', bbCloseVisualEditor);
  document.getElementById('bbVisualEditorSave')?.addEventListener('click', bbSaveVisualEditor);
  document.getElementById('bbVisualEditorDelete')?.addEventListener('click', bbDeleteStepFromVisual);
  document.getElementById('bbVisualTriggerEditorClose')?.addEventListener('click', bbCloseTriggerEditorInline);
  document.getElementById('bbVisualTriggerEditorDone')?.addEventListener('click', bbCloseTriggerEditorInline);

  // Click en un paso del árbol → volver a la vista Lista y scrollear al paso
  document.getElementById('bbTreeContent')?.addEventListener('click', (e) => {
    const stepEl = e.target.closest('.bb-tree-step');
    if (!stepEl) return;
    const idx = Number(stepEl.dataset.stepIndex);
    bbSwitchView('list');
    setTimeout(() => {
      const flow = document.getElementById('sbStepsFlow');
      const target = flow?.children?.[idx];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'background-color .3s';
        const original = target.style.backgroundColor;
        target.style.backgroundColor = 'rgba(37,99,235,.12)';
        setTimeout(() => { target.style.backgroundColor = original; }, 800);
      }
    }, 50);
  });

  document.querySelectorAll('#botBuilderViewTabs .bb-view-tab').forEach(tab => {
    tab.addEventListener('click', () => bbSwitchView(tab.dataset.view));
  });

  document.getElementById('bbCodeCopyBtn')?.addEventListener('click', async () => {
    const codeEl = document.getElementById('bbCodeContent');
    const raw = codeEl?.dataset.raw || codeEl?.textContent || '';
    try {
      await navigator.clipboard.writeText(raw);
      toast('Código copiado', 'success');
    } catch {
      // Fallback para navegadores viejos
      const ta = document.createElement('textarea');
      ta.value = raw; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast('Código copiado', 'success'); }
      catch { toast('No se pudo copiar', 'error'); }
      document.body.removeChild(ta);
    }
  });

  document.getElementById('botBuilderSave')?.addEventListener('click', async () => {
    const name = document.getElementById('botBuilderName').value.trim();
    if (!name) { toast('Escribe un nombre para el bot', 'error'); return; }
    const enabled = document.getElementById('botBuilderEnabled').checked ? 1 : 0;
    const trigger_type = document.getElementById('sbTriggerType').value;
    const def = BOT_TRIGGER_REGISTRY[trigger_type];
    let trigger_value = '';
    try {
      if (def?.serialize) {
        trigger_value = def.serialize();
      } else if (def?.widget === 'text') {
        trigger_value = document.getElementById('sbTriggerValue')?.value?.trim() || '';
      }
    } catch (e) {
      toast(e.message || 'Configuración del disparador incompleta', 'error');
      return;
    }
    const steps = collectAllSteps().map(({ _id, ...rest }) => rest);
    try {
      const payload = { name, enabled, trigger_type, trigger_value, steps, tagIds: sbTagIds };
      if (sbCurrentId) {
        await api('PATCH', `/api/bot/${sbCurrentId}`, payload);
      } else {
        const data = await api('POST', '/api/bot', payload);
        sbCurrentId = data.item.id;
      }
      toast('Bot guardado', 'success');
      await loadSalsbots();
      closeBotBuilder();
    } catch (err) { toast(err.message, 'error'); }
  });

  // ─── Tag filter (botón "Todos", "Errores", "Avisos" + cada tag) ───
  document.getElementById('botTagFilters')?.addEventListener('click', (e) => {
    const filterBtn = e.target.closest('[data-bot-tag-filter]');
    if (filterBtn) {
      const v = filterBtn.dataset.botTagFilter;
      if (v === '')                _botTagFilter = null;
      else if (v === '__errors__') _botTagFilter = '__errors__';
      else if (v === '__warns__')  _botTagFilter = '__warns__';
      else                          _botTagFilter = Number(v);
      renderBotList();
      return;
    }
    if (e.target.closest('#botTagManageBtn')) openBotTagsManager();
  });

  // ─── Selector de orden de bots ───
  document.getElementById('botTagFilters')?.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'botSortSelect') {
      _botSort = e.target.value;
      _persistBotSort(_botSort);
      renderBotList();
    }
  });

  // ─── Drag & drop manual de bots (solo cuando _botSort === 'manual') ───
  let _bdDragId = null;
  const botList = document.getElementById('botList');
  if (botList && !botList._bdSetup) {
    botList._bdSetup = true;
    botList.addEventListener('dragstart', (e) => {
      const row = e.target.closest('.bot-list-row[draggable]');
      if (!row) return;
      _bdDragId = Number(row.dataset.botId);
      row.classList.add('is-dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(_bdDragId));
    });
    botList.addEventListener('dragend', () => {
      _bdDragId = null;
      botList.querySelectorAll('.bot-list-row').forEach(r => r.classList.remove('is-dragging', 'drag-over'));
    });
    botList.addEventListener('dragover', (e) => {
      if (!_bdDragId) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const row = e.target.closest('.bot-list-row');
      botList.querySelectorAll('.bot-list-row').forEach(r => r.classList.toggle('drag-over', r === row && Number(r.dataset.botId) !== _bdDragId));
    });
    botList.addEventListener('drop', async (e) => {
      e.preventDefault();
      if (!_bdDragId) return;
      const targetRow = e.target.closest('.bot-list-row');
      if (!targetRow) return;
      const targetId = Number(targetRow.dataset.botId);
      if (targetId === _bdDragId) return;
      // Reordenar sbBots: mover dragId justo antes de targetId
      const fromIdx = sbBots.findIndex(b => b.id === _bdDragId);
      const toIdx   = sbBots.findIndex(b => b.id === targetId);
      if (fromIdx < 0 || toIdx < 0) return;
      const [moved] = sbBots.splice(fromIdx, 1);
      const insertAt = sbBots.findIndex(b => b.id === targetId);
      sbBots.splice(insertAt, 0, moved);
      renderBotList();
      // Persistir
      try {
        await api('POST', '/api/bot/reorder', { orderedIds: sbBots.map(b => b.id) });
      } catch (err) {
        toast(err.message || 'Error guardando orden', 'error');
        await loadSalsbots(); // recargar
      }
    });
  }

  // ─── Builder: + Etiqueta + remove pill + quick-create input ───
  document.getElementById('botBuilderTags')?.addEventListener('click', (e) => {
    const remove = e.target.closest('[data-remove-tag]');
    if (remove) {
      const id = Number(remove.dataset.removeTag);
      sbTagIds = sbTagIds.filter(x => x !== id);
      renderBotBuilderTags();
      return;
    }
    if (e.target.closest('#botBuilderAddTagBtn')) openBotBuilderTagPicker();
    if (e.target.closest('#botBuilderTagInputClose')) closeBotBuilderTagInput();
    const assign = e.target.closest('[data-assign-tag]');
    if (assign) {
      const id = Number(assign.dataset.assignTag);
      if (!sbTagIds.includes(id)) sbTagIds.push(id);
      renderBotBuilderTags();
      // Mantener el input abierto y enfocado para asignar varias seguidas
      setTimeout(() => document.getElementById('botBuilderTagInput')?.focus(), 0);
    }
  });

  // Comma/Enter en el input → crear o asignar; Esc → cerrar
  document.getElementById('botBuilderTags')?.addEventListener('keydown', async (e) => {
    if (e.target.id !== 'botBuilderTagInput') return;
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      const value = e.target.value.trim();
      if (!value) return;
      e.target.value = '';
      await quickCreateBotTag(value);
      // Re-foco al input tras el re-render
      setTimeout(() => document.getElementById('botBuilderTagInput')?.focus(), 0);
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      closeBotBuilderTagInput();
    }
  });
  // Pegar "tag1, tag2, tag3" → crea/asigna todas
  document.getElementById('botBuilderTags')?.addEventListener('input', async (e) => {
    if (e.target.id !== 'botBuilderTagInput') return;
    if (!e.target.value.includes(',')) return;
    const parts = e.target.value.split(',').map(p => p.trim()).filter(Boolean);
    const lastPart = e.target.value.endsWith(',') ? '' : parts[parts.length - 1];
    const toCreate = e.target.value.endsWith(',') ? parts : parts.slice(0, -1);
    e.target.value = lastPart;
    for (const name of toCreate) {
      await quickCreateBotTag(name);
    }
    setTimeout(() => document.getElementById('botBuilderTagInput')?.focus(), 0);
  });

  // Botón "Usar plantilla básica" dentro del step "Enviar mensaje".
  // Delegamos a nivel de botBuilder porque las step-cards se re-renderizan.
  document.getElementById('botBuilder')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.sb-tpl-insert-btn');
    if (btn) {
      e.preventDefault();
      const sid = btn.dataset.sid;
      const textarea = document.querySelector(`textarea[data-sid="${sid}"][data-field="text"]`);
      if (!textarea) return;
      openTplPickerForBotMessage(btn, textarea);
      return;
    }
    // Quitar la referencia a la plantilla origen (clear fromTemplateId)
    const clearBtn = e.target.closest('.sb-msg-from-tpl-clear');
    if (clearBtn) {
      e.preventDefault();
      const sid = clearBtn.dataset.sid;
      const hidden = document.querySelector(`input[data-field="fromTemplateId"][data-sid="${sid}"]`);
      if (hidden) {
        hidden.value = '';
        hidden.dispatchEvent(new Event('input', { bubbles: true }));
      }
      // Re-render del body del step para que desaparezca el chip
      const step = sbSteps.find(s => s._id === sid);
      if (step) {
        if (step.config) step.config.fromTemplateId = '';
        const body = document.querySelector(`[data-body-sid="${sid}"]`);
        if (body) body.innerHTML = buildStepBody(step);
      }
    }
  });

  // Helper: en inputs de creación de etiquetas, teclear "," dispara el submit
  // (encapsula el texto como chip). También maneja pegar "tag1, tag2, tag3" — crea
  // todos secuencialmente esperando el render entre cada uno.
  if (!window._bindTagCommaCreateBound) {
    window._bindTagCommaCreateBound = true;
    window.bindTagCommaCreate = function bindTagCommaCreate(inputId, formId) {
      const input = document.getElementById(inputId);
      const form  = document.getElementById(formId);
      if (!input || !form) return;
      input.addEventListener('keydown', (e) => {
        if (e.key === ',') {
          e.preventDefault();
          const value = input.value.trim();
          if (!value) return;
          form.requestSubmit();
        }
      });
      input.addEventListener('input', async () => {
        if (!input.value.includes(',')) return;
        const parts = input.value.split(',').map(p => p.trim()).filter(Boolean);
        if (parts.length < 2) return;
        const lastPart = input.value.endsWith(',') ? '' : parts[parts.length - 1];
        const toCreate = input.value.endsWith(',') ? parts : parts.slice(0, -1);
        for (const name of toCreate) {
          input.value = name;
          form.requestSubmit();
          await new Promise(r => setTimeout(r, 250));
        }
        input.value = lastPart;
      });
    };
  }

  // ─── Tag manager modal listeners ───
  document.querySelectorAll('[data-close-bot-tags]').forEach(el => {
    el.addEventListener('click', closeBotTagsManager);
  });
  document.getElementById('botTagCreateForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameEl  = document.getElementById('botTagNewName');
    const colorEl = document.querySelector('#botTagNewColors .bot-tag-swatch.is-selected');
    const name = (nameEl?.value || '').trim();
    const color = colorEl?.dataset.color || BOT_TAG_PALETTE[0];
    if (!name) { toast('Escribe un nombre', 'error'); return; }
    try {
      await api('POST', '/api/bot-tags', { name, color });
      nameEl.value = '';
      await loadBotTags();
      renderBotTagsManagerList();
      renderBotTagFilters();
      renderBotBuilderTags();
      toast('Etiqueta creada', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Crear etiqueta al teclear "," — encapsula como chip estilo input de tags moderno.
  // Si pegan "vip, frecuente, mayorista" crea las 3 secuencialmente.
  bindTagCommaCreate('botTagNewName', 'botTagCreateForm');
  document.getElementById('botTagsManagerList')?.addEventListener('click', async (e) => {
    const editBtn = e.target.closest('[data-edit-tag]');
    if (editBtn) {
      _botTagEditingId = Number(editBtn.dataset.editTag);
      const cur = _botTags.find(t => t.id === _botTagEditingId);
      if (cur) cur._draftColor = cur.color;
      renderBotTagsManagerList();
      setTimeout(() => document.querySelector('.tpl-tag-row--editing .bot-tag-edit-name')?.focus(), 50);
      return;
    }
    // Color en modo edición → solo cambia draft, no guarda
    const editColorBtn = e.target.closest('[data-bot-tag-edit-color]');
    if (editColorBtn) {
      const cur = _botTags.find(t => t.id === _botTagEditingId);
      if (cur) cur._draftColor = editColorBtn.dataset.botTagEditColor;
      renderBotTagsManagerList();
      setTimeout(() => document.querySelector('.tpl-tag-row--editing .bot-tag-edit-name')?.focus(), 50);
      return;
    }
    // Guardar edición (nombre + color)
    const saveBtn = e.target.closest('[data-save-bot-tag]');
    if (saveBtn) {
      const id = Number(saveBtn.dataset.saveBotTag);
      const cur = _botTags.find(t => t.id === id);
      const newName = document.querySelector('.tpl-tag-row--editing .bot-tag-edit-name')?.value.trim();
      if (!newName) { toast('El nombre no puede quedar vacío', 'error'); return; }
      try {
        await api('PUT', `/api/bot-tags/${id}`, { name: newName, color: cur._draftColor || cur.color });
        await loadBotTags();
        _botTagEditingId = null;
        renderBotTagsManagerList();
        renderBotTagFilters();
        renderBotList();
        renderBotBuilderTags();
      } catch (err) { toast(err.message, 'error'); }
      return;
    }
    // Cancelar
    const cancelBtn = e.target.closest('[data-cancel-bot-tag]');
    if (cancelBtn) {
      _botTagEditingId = null;
      renderBotTagsManagerList();
      return;
    }
    const colorBtn = e.target.closest('[data-tag-color-pick]');
    if (colorBtn) {
      const id    = Number(colorBtn.dataset.tagColorPick);
      const color = colorBtn.dataset.color;
      const t = _botTags.find(x => x.id === id);
      if (!t) return;
      try {
        await api('PUT', `/api/bot-tags/${id}`, { name: t.name, color });
        await loadBotTags();
        renderBotTagsManagerList();
        renderBotTagFilters();
        renderBotList();
        renderBotBuilderTags();
      } catch (err) { toast(err.message, 'error'); }
      return;
    }
    const delBtn = e.target.closest('[data-delete-tag]');
    if (delBtn) {
      const id = Number(delBtn.dataset.deleteTag);
      const t = _botTags.find(x => x.id === id);
      if (!t) return;
      if (!confirm(`¿Eliminar la etiqueta "${t.name}"?\nSe quitará de todos los bots que la tengan.`)) return;
      try {
        await api('DELETE', `/api/bot-tags/${id}`);
        if (_botTagFilter === id) _botTagFilter = null;
        sbTagIds = sbTagIds.filter(x => x !== id);
        await loadBotTags();
        await loadSalsbots();
        renderBotTagsManagerList();
        renderBotBuilderTags();
        toast('Etiqueta eliminada', 'success');
      } catch (err) { toast(err.message, 'error'); }
    }
  });
}

// Cuando el usuario abre el "modo input" en el bot builder, alternamos entre el
// botón "+ Etiqueta" y un input inline donde puede teclear nombre + "," para
// crear-y-asignar etiquetas en cadena (sin abrir el manager).
let _botBuilderTagInputOpen = false;

function renderBotBuilderTags() {
  const root = document.getElementById('botBuilderTags');
  if (!root) return;
  const assigned = _botTags.filter(t => sbTagIds.includes(t.id));
  const pills = assigned.map(t => `
    <span class="bot-tag-pill" style="${tplTagPillStyle(t.color)}">
      <span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>
      ${escHtml(t.name)}
      <button type="button" class="bot-tag-remove" data-remove-tag="${t.id}" aria-label="Quitar">×</button>
    </span>
  `).join('');

  if (_botBuilderTagInputOpen) {
    const available = _botTags.filter(t => !sbTagIds.includes(t.id));
    const suggestions = available.slice(0, 12).map(t => `
      <button type="button" class="bot-tag-suggest" data-assign-tag="${t.id}" style="${tplTagPillStyle(t.color)}">
        <span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>${escHtml(t.name)}
      </button>
    `).join('');
    root.innerHTML = `
      ${pills}
      <span class="bot-tag-input-wrap">
        <input type="text" id="botBuilderTagInput" class="bot-tag-input" placeholder="Escribe y teclea ',' (Esc para cerrar)" maxlength="32" />
        <button type="button" class="bot-tag-input-close" id="botBuilderTagInputClose" aria-label="Cerrar">×</button>
      </span>
      ${available.length ? `<div class="bot-tag-suggest-row">${suggestions}</div>` : ''}
    `;
    setTimeout(() => document.getElementById('botBuilderTagInput')?.focus(), 0);
  } else {
    root.innerHTML = `
      ${pills}
      <button type="button" class="bot-tag-add-btn" id="botBuilderAddTagBtn">+ Etiqueta</button>`;
  }
}

// Crea una etiqueta nueva (color random de la paleta) o asigna la existente
// si ya existe el nombre. Re-render sin cerrar el input para permitir cadena.
async function quickCreateBotTag(rawName) {
  const name = String(rawName || '').trim();
  if (!name) return;
  // ¿Ya existe?
  const existing = _botTags.find(t => t.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    if (!sbTagIds.includes(existing.id)) {
      sbTagIds.push(existing.id);
      renderBotBuilderTags();
    }
    return;
  }
  // Crear nueva con color random
  const color = BOT_TAG_PALETTE[Math.floor(Math.random() * BOT_TAG_PALETTE.length)];
  try {
    const res = await api('POST', '/api/bot-tags', { name, color });
    const newTag = res.item || res;
    await loadBotTags();
    if (newTag?.id && !sbTagIds.includes(newTag.id)) sbTagIds.push(newTag.id);
    renderBotBuilderTags();
    renderBotTagFilters();
  } catch (err) { toast(err.message, 'error'); }
}

function openBotBuilderTagPicker() {
  // Abrir modo input inline en lugar del picker modal
  _botBuilderTagInputOpen = true;
  renderBotBuilderTags();
}

function closeBotBuilderTagInput() {
  _botBuilderTagInputOpen = false;
  renderBotBuilderTags();
}

function openBotTagsManager() {
  const modal = document.getElementById('botTagsManagerModal');
  if (!modal) return;
  renderBotTagPalette();
  renderBotTagsManagerList();
  modal.hidden = false;
}

function closeBotTagsManager() {
  const modal = document.getElementById('botTagsManagerModal');
  if (modal) modal.hidden = true;
}

function renderBotTagPalette() {
  const root = document.getElementById('botTagNewColors');
  if (!root) return;
  root.innerHTML = BOT_TAG_PALETTE.map((c, i) => `
    <button type="button" class="bot-tag-swatch ${i === 0 ? 'is-selected' : ''}" data-color="${c}" style="background:${c}" aria-label="Color ${c}"></button>
  `).join('');
  root.addEventListener('click', (e) => {
    const sw = e.target.closest('.bot-tag-swatch');
    if (!sw) return;
    root.querySelectorAll('.bot-tag-swatch').forEach(b => b.classList.remove('is-selected'));
    sw.classList.add('is-selected');
  }, { once: false });
}

let _botTagEditingId = null;
function renderBotTagsManagerList() {
  const root = document.getElementById('botTagsManagerList');
  if (!root) return;
  if (!_botTags.length) {
    root.innerHTML = '<div class="bot-tag-manager-empty">Aún no hay etiquetas. Crea la primera arriba.</div>';
    return;
  }
  root.innerHTML = _botTags.map(t => {
    if (_botTagEditingId === t.id) {
      return `
        <div class="bot-tag-manager-row tpl-tag-row--editing" data-id="${t.id}">
          <input type="text" class="int-input bot-tag-edit-name tpl-tag-edit-name" value="${escHtml(t.name)}" maxlength="32" />
          <div class="bot-tag-row-colors">
            ${BOT_TAG_PALETTE.map(c => `<button type="button" class="bot-tag-swatch-sm ${c === (t._draftColor || t.color) ? 'is-selected' : ''}" data-bot-tag-edit-color="${c}" style="background:${c}" aria-label="Color ${c}"></button>`).join('')}
          </div>
          <div class="bot-tag-row-actions">
            <button type="button" class="btn btn--sm btn--primary" data-save-bot-tag="${t.id}">Guardar</button>
            <button type="button" class="btn btn--sm btn--secondary" data-cancel-bot-tag="${t.id}">Cancelar</button>
          </div>
        </div>
      `;
    }
    return `
      <div class="bot-tag-manager-row" data-id="${t.id}">
        <div class="bot-tag-pill" style="${tplTagPillStyle(t.color)}">
          <span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>
          ${escHtml(t.name)}
        </div>
        <div class="bot-tag-row-colors">
          ${BOT_TAG_PALETTE.map(c => `<button type="button" class="bot-tag-swatch-sm ${c === t.color ? 'is-selected' : ''}" data-tag-color-pick="${t.id}" data-color="${c}" style="background:${c}" aria-label="Color ${c}"></button>`).join('')}
        </div>
        <div class="bot-tag-row-actions">
          <button type="button" class="icon-btn icon-btn--ghost" data-edit-tag="${t.id}" aria-label="Editar nombre y color">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button type="button" class="icon-btn icon-btn--ghost" data-delete-tag="${t.id}" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ════════════════════════════════
// Etiquetas de plantillas (mismo patrón que bot tags)
// ════════════════════════════════
let _tplTagEditingId = null; // id de la tag actualmente en modo edición inline
const TPL_TAG_PALETTE = [
  '#94a3b8', // gris
  '#3b82f6', // azul
  '#10b981', // verde
  '#f59e0b', // ámbar
  '#ef4444', // rojo
  '#8b5cf6', // violeta
  '#ec4899', // rosa
  '#14b8a6', // teal
  '#f97316', // naranja
  '#0f172a', // negro (texto blanco)
  '#facc15', // amarillo brillante
  '#84cc16', // lima
  '#06b6d4', // cian
  '#d946ef', // fucsia
  '#92400e', // café
];

// Calcula si un color hex es "oscuro" (luminance < 128) — usado para decidir
// si la pill debe llevar fondo sólido + texto blanco (color oscuro) o fondo
// tintado + texto color (color claro).
function isDarkColor(hex) {
  if (!hex) return false;
  const c = String(hex).replace('#', '');
  if (c.length !== 6) return false;
  const r = parseInt(c.substr(0, 2), 16);
  const g = parseInt(c.substr(2, 2), 16);
  const b = parseInt(c.substr(4, 2), 16);
  if ([r, g, b].some(x => Number.isNaN(x))) return false;
  // YIQ luminance — pondera verde más alto porque el ojo humano es más sensible al verde
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 140;  // umbral conservador para que el azul oscuro también caiga en "dark"
}

// Devuelve el style inline para una pill, escogiendo contraste adecuado:
// - color oscuro → bg sólido del color + texto blanco
// - color claro → bg tintado 10% + texto del color (legible sobre tinte claro)
// Tinted pill style — fondo color ~14%, borde ~33%, texto oscuro siempre.
// Para colores muy oscuros (negro, navy), mantenemos texto blanco sobre fondo sólido
// porque ahí sí se ve mejor que un tinted casi negro.
function tplTagPillStyle(color) {
  const c = color || '#94a3b8';
  if (isDarkColor(c)) {
    return `background:${escHtml(c)};color:#fff;border-color:${escHtml(c)}`;
  }
  return `background:${escHtml(c)}24;color:var(--text);border-color:${escHtml(c)}55`;
}

function renderTplTagsPickers() {
  const root = document.getElementById('tplTagsPickers');
  if (!root) return;
  if (!_tplTags.length) {
    root.innerHTML = '<p class="tpl-hint-inline">No tienes etiquetas. Crea una desde Plantillas → botón "Etiquetas".</p>';
    return;
  }
  root.innerHTML = _tplTags.map(t => {
    const on = _tplDraftTagIds.includes(t.id);
    const styleStr = on
      ? tplTagPillStyle(t.color)
      : `background:${escHtml(t.color)}12;color:var(--text);border-color:${escHtml(t.color)}55`;
    return `<button type="button" class="bot-tag-pill ${on ? 'is-on' : 'is-off'}" data-toggle-tag="${t.id}" style="${styleStr}"><span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>${escHtml(t.name)}</button>`;
  }).join('');
}

function openTplTagsManager() {
  const modal = document.getElementById('tplTagsManagerModal');
  if (!modal) return;
  renderTplTagPalette();
  renderTplTagsManagerList();
  modal.hidden = false;
}
function closeTplTagsManager() {
  const modal = document.getElementById('tplTagsManagerModal');
  if (modal) modal.hidden = true;
}
function renderTplTagPalette() {
  const root = document.getElementById('tplTagNewColors');
  if (!root) return;
  root.innerHTML = TPL_TAG_PALETTE.map((c, i) => `
    <button type="button" class="bot-tag-swatch ${i === 0 ? 'is-selected' : ''}" data-color="${c}" style="background:${c}" aria-label="Color ${c}"></button>
  `).join('');
}
function renderTplTagsManagerList() {
  const root = document.getElementById('tplTagsManagerList');
  if (!root) return;
  if (!_tplTags.length) {
    root.innerHTML = '<div class="bot-tag-manager-empty">Aún no hay etiquetas. Crea la primera arriba.</div>';
    return;
  }
  root.innerHTML = _tplTags.map(t => {
    if (_tplTagEditingId === t.id) {
      // Modo edición inline: input nombre + paleta de colores + guardar/cancelar
      return `
        <div class="bot-tag-manager-row tpl-tag-row--editing" data-id="${t.id}">
          <input type="text" class="int-input tpl-tag-edit-name" value="${escHtml(t.name)}" maxlength="32" />
          <div class="bot-tag-row-colors">
            ${TPL_TAG_PALETTE.map(c => `<button type="button" class="bot-tag-swatch-sm ${c === (t._draftColor || t.color) ? 'is-selected' : ''}" data-tpl-tag-edit-color="${c}" style="background:${c}" aria-label="Color ${c}"></button>`).join('')}
          </div>
          <div class="bot-tag-row-actions">
            <button type="button" class="btn btn--sm btn--primary" data-save-tpl-tag="${t.id}">Guardar</button>
            <button type="button" class="btn btn--sm btn--secondary" data-cancel-tpl-tag="${t.id}">Cancelar</button>
          </div>
        </div>
      `;
    }
    return `
      <div class="bot-tag-manager-row" data-id="${t.id}">
        <div class="bot-tag-pill" style="${tplTagPillStyle(t.color)}">
          <span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>
          ${escHtml(t.name)}
        </div>
        <div class="bot-tag-row-colors">
          ${TPL_TAG_PALETTE.map(c => `<button type="button" class="bot-tag-swatch-sm ${c === t.color ? 'is-selected' : ''}" data-tpl-tag-color-pick="${t.id}" data-color="${c}" style="background:${c}" aria-label="Color ${c}"></button>`).join('')}
        </div>
        <div class="bot-tag-row-actions">
          <button type="button" class="icon-btn icon-btn--ghost" data-edit-tpl-tag="${t.id}" aria-label="Editar nombre y color">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button type="button" class="icon-btn icon-btn--ghost" data-delete-tpl-tag="${t.id}" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

async function createTplTag(name, color) {
  await api('POST', '/api/template-tags', { name, color });
  await loadTemplateTags();
  renderTplTagsManagerList();
  renderTplTagsPickers();
  renderTemplates();
}
async function updateTplTag(id, fields) {
  await api('PUT', `/api/template-tags/${id}`, fields);
  await loadTemplateTags();
  renderTplTagsManagerList();
  renderTplTagsPickers();
  renderTemplates();
}
async function deleteTplTag(id) {
  if (!confirm('¿Eliminar esta etiqueta? Se quitará de todas las plantillas.')) return;
  await api('DELETE', `/api/template-tags/${id}`);
  // Quitar de tags en cache local
  _tplItems.forEach(t => { if (Array.isArray(t.tags)) t.tags = t.tags.filter(x => x.id !== id); });
  _tplDraftTagIds = _tplDraftTagIds.filter(x => x !== id);
  if (_tplTagFilter === id) _tplTagFilter = null;
  await loadTemplateTags();
  renderTplTagsManagerList();
  renderTplTagsPickers();
  renderTemplates();
}

// ════════════════════════════════
// MI CUENTA
// ════════════════════════════════
let _profile = {};

async function loadProfile() {
  try {
    const data = await api('GET', '/api/settings/profile');
    _profile = data.profile || {};
    applyProfileToUI();
  } catch (e) { console.error('loadProfile', e); }
}

function applyProfileToUI() {
  const p = _profile;
  const name = [p.firstName, p.lastName].filter(Boolean).join(' ') || 'Wapi101';
  const role = p.role || 'Admin';

  // Sidebar
  const sidebarName = document.getElementById('sidebarName');
  const sidebarRole = document.getElementById('sidebarRole');
  if (sidebarName) sidebarName.textContent = name;
  if (sidebarRole) sidebarRole.textContent = role;

  // Avatar: use photo URL if set, otherwise initials
  const avatarImg = document.getElementById('sidebarAvatar');
  if (avatarImg && p.avatarUrl) avatarImg.src = p.avatarUrl;
}

function openAccountView() {
  const p = _profile;
  document.getElementById('accFirstName').value  = p.firstName  || '';
  document.getElementById('accLastName').value   = p.lastName   || '';
  document.getElementById('accUsername').value   = p.username   || '';
  document.getElementById('accPhone').value      = p.phone      || '';
  document.getElementById('accEmail').value      = p.email      || '';

  const name = [p.firstName, p.lastName].filter(Boolean).join(' ') || 'Wapi101';
  document.getElementById('accountDisplayName').textContent = name;
  const img = document.getElementById('accountAvatarImg');
  const initials = document.getElementById('accountAvatarInitials');
  if (p.avatarUrl) {
    img.src = p.avatarUrl;
    img.hidden = false;
    initials.hidden = true;
  } else {
    const parts = name.split(' ');
    initials.textContent = (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
    img.hidden = true;
    initials.hidden = false;
  }

  ['accCurrentPass','accNewPass','accConfirmPass'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('accPassError').hidden = true;

  showView('cuenta');
}

function setupAccount() {
  document.getElementById('navAdvisorInfo')?.addEventListener('click', openAccountView);

  // Save profile
  document.getElementById('accSaveProfile')?.addEventListener('click', async () => {
    const patch = {
      firstName:  document.getElementById('accFirstName').value.trim(),
      lastName:   document.getElementById('accLastName').value.trim(),
      username:   document.getElementById('accUsername').value.trim(),
      phone:      document.getElementById('accPhone').value.trim(),
      email:      document.getElementById('accEmail').value.trim(),
      role:       _profile.role || 'Admin',
      avatarUrl:  _profile.avatarUrl || '',
    };
    try {
      const data = await api('PATCH', '/api/settings/profile', patch);
      _profile = data.profile;
      applyProfileToUI();
      // Update modal display name live
      const name = [patch.firstName, patch.lastName].filter(Boolean).join(' ') || 'Wapi101';
      document.getElementById('accountDisplayName').textContent = name;
      toast('Perfil guardado', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Change password (UI validation only — requires auth backend to actually enforce)
  document.getElementById('accSavePassword')?.addEventListener('click', async () => {
    const current  = document.getElementById('accCurrentPass').value;
    const next     = document.getElementById('accNewPass').value;
    const confirm  = document.getElementById('accConfirmPass').value;
    const errEl    = document.getElementById('accPassError');
    errEl.hidden   = true;

    if (!current) { errEl.textContent = 'Ingresa tu contraseña actual.'; errEl.hidden = false; return; }
    if (next.length < 8) { errEl.textContent = 'La nueva contraseña debe tener al menos 8 caracteres.'; errEl.hidden = false; return; }
    if (next !== confirm) { errEl.textContent = 'Las contraseñas no coinciden.'; errEl.hidden = false; return; }

    try {
      await api('PATCH', '/api/settings/profile', { ..._profile, _passwordChange: { current, next } });
      ['accCurrentPass','accNewPass','accConfirmPass'].forEach(id => { document.getElementById(id).value = ''; });
      toast('Contraseña actualizada', 'success');
    } catch (err) { errEl.textContent = err.message; errEl.hidden = false; }
  });
}

// ════════════════════════════════
// PIPELINES KANBAN
// ════════════════════════════════
let PL_ACTIVE_ID = null;   // pipeline seleccionado en el tablero
// Modo de vista: 'kanban' (tablero) o 'list' (lista con selección múltiple)
let PL_VIEW_MODE = (() => {
  try { return localStorage.getItem('plViewMode') || 'kanban'; } catch { return 'kanban'; }
})();
let PL_LIST_SELECTED = new Set();  // ids de expedientes seleccionados en modo lista
let PL_MANAGE_ID = null;   // pipeline abierto en el modal de gestión
let PL_EXP_CACHE = [];     // expedientes para el kanban
let PL_SEARCH   = '';      // filtro texto del kanban (legacy, aliased below)
let PL_SORT     = 'createdAt'; // orden del kanban
let PL_FILTERS  = { q: '', searchIn: 'all', tags: [], fieldValues: {}, stageId: null };

// Estado drag-and-drop del kanban (módulo-level para que los listeners del board no se dupliquen)
let _kdDragId           = null;
let _kdOriginPipeline   = null;
let _kdHoveredCol       = null;
let _kdTabTimer         = null;
let _kdBoardListenersSet = false;
let _kdColDragId        = null;  // stage id being reordered via column drag
let _kdPipelineDragId   = null;  // pipeline id being reordered via tab drag
let EXP_FILTERS = { q: '', searchIn: 'all', tags: [], fieldValues: {} };

async function loadPipelinesKanban() {
  try {
    const plData = await api('GET', '/api/pipelines');
    PIPELINES = plData.items;
    if (!PL_ACTIVE_ID && PIPELINES.length) {
      const savedId = Number(localStorage.getItem('lastPipelineId'));
      PL_ACTIVE_ID = (savedId && PIPELINES.some(p => p.id === savedId)) ? savedId : PIPELINES[0].id;
    }
    // Filtrar por pipeline activo + pageSize alto para soportar pipelines grandes
    const expData = PL_ACTIVE_ID
      ? await api('GET', `/api/expedients?pipelineId=${PL_ACTIVE_ID}&pageSize=5000`)
      : { items: [] };
    PL_EXP_CACHE = expData.items || [];
    renderPipelineTabs();
    renderPipelinesBoard();
  } catch (e) { console.error('loadPipelinesKanban', e); }
}

function plIconSvg(iconKey, color, size = 14) {
  if (!iconKey || !PL_ICONS[iconKey]) return null;
  const icon = PL_ICONS[iconKey];
  // Iconos de marca (objeto con `filled: true`) → render con fill, no stroke.
  if (typeof icon === 'object' && icon.filled) {
    return `<svg viewBox="0 0 24 24" fill="${escHtml(color)}" width="${size}" height="${size}">${icon.paths}</svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${escHtml(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}">${icon}</svg>`;
}

function renderPipelineTabs() {
  const tabs = document.getElementById('plTabs');
  if (!tabs) return;
  if (PL_ACTIVE_ID) localStorage.setItem('lastPipelineId', PL_ACTIVE_ID);
  tabs.innerHTML = PIPELINES.map(p => {
    const icon = plIconSvg(p.icon, p.color, 14);
    return `
    <button class="pl-tab ${p.id === PL_ACTIVE_ID ? 'is-active' : ''}" data-pl-id="${p.id}">
      <span class="pl-tab-drag-handle" title="Arrastra para reordenar">
        <svg width="8" height="12" viewBox="0 0 10 14" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.5"/><circle cx="7.5" cy="2.5" r="1.5"/><circle cx="2.5" cy="7" r="1.5"/><circle cx="7.5" cy="7" r="1.5"/><circle cx="2.5" cy="11.5" r="1.5"/><circle cx="7.5" cy="11.5" r="1.5"/></svg>
      </span>
      ${icon ? `<span class="pl-tab-icon">${icon}</span>` : `<span class="pl-tab-dot" style="background:${p.color}"></span>`}
      ${escHtml(p.name)}
    </button>`;
  }).join('');
}

// Cambia entre vista 'kanban' (tablero) y 'list' (lista con selección múltiple).
// Persiste preferencia en localStorage.
function setPipelineViewMode(mode) {
  PL_VIEW_MODE = mode;
  try { localStorage.setItem('plViewMode', mode); } catch {}
  PL_LIST_SELECTED.clear();
  renderPipelinesBoard();
  renderPipelineViewSwitch();
}

function renderPipelineViewSwitch() {
  document.querySelectorAll('[data-pl-view]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.plView === PL_VIEW_MODE);
  });
}

function renderPipelinesBoard() {
  const board = document.getElementById('plBoard');
  const empty = document.getElementById('plEmpty');
  if (!board) return;

  if (!PIPELINES.length) {
    board.hidden = true;
    if (empty) empty.hidden = false;
    return;
  }
  board.hidden = false;
  if (empty) empty.hidden = true;

  // Si está en modo lista, delegar al renderer de lista y salir
  if (PL_VIEW_MODE === 'list') {
    renderPipelinesList();
    return;
  }
  // Si veníamos de modo lista, asegurar que el contenedor del tablero
  // está limpio antes de renderizar el kanban
  board.classList.remove('pl-board--list');

  const pipeline = PIPELINES.find(p => p.id === PL_ACTIVE_ID) || PIPELINES[0];
  if (!pipeline) return;

  // Filter + sort
  const filtered = applyExpFiltersClient(PL_EXP_CACHE.filter(e => e.pipelineId === pipeline.id), PL_FILTERS);
  filtered.sort((a, b) => {
    if (PL_SORT === 'name')      return (a.name || '').localeCompare(b.name || '');
    if (PL_SORT === 'nameDesc')  return (b.name || '').localeCompare(a.name || '');
    if (PL_SORT === 'updatedAt') return (b.updatedAt || 0) - (a.updatedAt || 0);
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  const expByStage = {};
  for (const s of pipeline.stages) expByStage[s.id] = [];
  for (const e of filtered) {
    if (expByStage[e.stageId]) expByStage[e.stageId].push(e);
  }

  const showAlarms    = (() => { try { return localStorage.getItem('plAlarmsEnabled') !== '0'; } catch { return true; } })();
  const showLeadValue = isLeadValueEnabled();
  const nowSec = Math.floor(Date.now() / 1000);

  // Total value del pipeline completo (visible en topbar)
  if (showLeadValue) {
    const pipelineTotal = filtered.reduce((s, e) => s + (e.value || 0), 0);
    const totalEl = document.getElementById('plPipelineTotal');
    if (totalEl) {
      totalEl.hidden = false;
      totalEl.textContent = `$${pipelineTotal.toLocaleString('es-MX')} MXN`;
    }
  } else {
    const totalEl = document.getElementById('plPipelineTotal');
    if (totalEl) totalEl.hidden = true;
  }

  board.innerHTML = pipeline.stages.map(stage => {
    const cards = expByStage[stage.id] || [];
    // alarmActive considera el array nuevo y el legacy (vía _stageAlarms helper)
    const alarmActive = _stageAlarms(stage).length > 0;
    const colValue = showLeadValue ? cards.reduce((s, e) => s + (e.value || 0), 0) : 0;
    const colValueHtml = (showLeadValue && colValue > 0)
      ? `<span class="pl-col-value">$${colValue.toLocaleString('es-MX')}</span>`
      : '';
    return `
      <div class="pl-column" data-stage-id="${stage.id}" data-drop-stage="${stage.id}">
        <div class="pl-col-header">
          <span class="pl-col-drag-handle" title="Arrastra para reordenar columna">
            <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.5"/><circle cx="7.5" cy="2.5" r="1.5"/><circle cx="2.5" cy="7" r="1.5"/><circle cx="7.5" cy="7" r="1.5"/><circle cx="2.5" cy="11.5" r="1.5"/><circle cx="7.5" cy="11.5" r="1.5"/></svg>
          </span>
          <span class="pl-col-dot" style="background:${stage.color}"></span>
          <span class="pl-col-name">${escHtml(stage.name)}</span>
          <span class="pl-col-count">${cards.length}</span>
          ${colValueHtml}
        </div>
        <div class="pl-col-body">
          ${cards.length ? cards.map(e => {
            const triggered = showAlarms ? evalStageAlarmsTriggered(stage, e, nowSec) : [];
            const isStale = triggered.length > 0;
            const overdueLabel = isStale
              ? (triggered.length === 1
                  ? `<span class="pl-card-stale-pill" title="${escHtml(alarmReason(stage))}">⚠ ${escHtml(alarmShortLabel(triggered[0].type))}</span>`
                  : `<span class="pl-card-stale-pill" title="${escHtml(triggered.map(a => ALARM_TYPE_LABELS[a.type] || a.type).join(' · '))}">⚠ ${triggered.length} razones</span>`)
              : '';
            // Ícono de error de entrega — muestra solo el icono, click → modal
            const failure = e.deliveryFailure;
            const deliveryIcon = failure
              ? (() => { const cat = classifyDeliveryError(failure.reason); return `
                  <button type="button" class="pl-card-deliv-err ${cat}" data-deliv-err-exp="${e.id}" title="${escHtml(deliveryErrorShortLabel(cat))} — click para ver detalle">
                    ${deliveryErrorIconSvg(cat)}
                  </button>`; })()
              : '';
            const contactName = e.contactName || '—';
            const initials = (contactName || '?').split(/\s+/).slice(0, 2).map(s => s.charAt(0).toUpperCase()).join('') || '?';
            const avatarHtml = e.contactAvatarUrl
              ? `<img class="pl-card-avatar" src="${escHtml(e.contactAvatarUrl)}" alt="" onerror="this.outerHTML='<span class=&quot;pl-card-avatar pl-card-avatar--initials&quot;>${escHtml(initials)}</span>'" />`
              : `<span class="pl-card-avatar pl-card-avatar--initials">${escHtml(initials)}</span>`;
            const cardValueHtml = (showLeadValue && e.value > 0)
              ? `<span class="pl-card-value">$${Number(e.value).toLocaleString('es-MX')}</span>`
              : '';
            return `
            <div class="pl-card ${isStale ? 'is-stale' : ''} ${failure ? 'has-delivery-error' : ''}" data-exp-id="${e.id}" draggable="true">
              <div class="pl-card-name ${e.nameIsAuto ? 'is-auto-name' : ''}">${escHtml(e.name || 'Sin nombre')}${deliveryIcon}</div>
              <div class="pl-card-contact-row">
                ${avatarHtml}
                <div class="pl-card-contact">${escHtml(contactName)}</div>
              </div>
              <div class="pl-card-footer">
                <div class="pl-card-tags">${overdueLabel}${(e.tags || []).slice(0,2).map(t => `<span class="pl-card-tag">${escHtml(t)}</span>`).join('')}</div>
                <div class="pl-card-footer-right">${cardValueHtml}<span class="pl-card-date">${fmtDate(e.createdAt)}</span></div>
              </div>
            </div>`;
          }).join('') : `<div class="pl-col-empty">Sin leads</div>`}
        </div>
        <div class="pl-col-footer">
          ${(() => {
            // Chip clickable que indica qué bot corre al entrar a esta etapa.
            // Se muestra si:
            //  a) La etapa tiene bot_id configurado explícitamente (asignación manual desde Editar pipeline), O
            //  b) Existe un bot habilitado con trigger pipeline_stage apuntando a esta etapa (auto-detect)
            // Click → navega al bot builder con ese bot abierto.
            let bot = null;
            if (stage.bot_id) {
              bot = (sbBots || []).find(b => b.id === stage.bot_id) || null;
            }
            // Auto-detect: si no hay asignación manual, buscar cualquier bot habilitado
            // con trigger pipeline_stage = stage.id
            if (!bot) {
              bot = (sbBots || []).find(b =>
                b.enabled &&
                b.trigger_type === 'pipeline_stage' &&
                Number(b.trigger_value) === stage.id
              ) || null;
            }
            if (!bot) return '';
            return `<button type="button" class="pl-col-bot-hint" data-go-to-bot="${bot.id}" title="Click para abrir el bot &quot;${escHtml(bot.name)}&quot;. Se ejecuta automáticamente cuando un lead entra a esta etapa.">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="12" height="12">
                <rect x="4" y="9" width="16" height="11" rx="2"/>
                <path d="M12 4v3"/>
                <circle cx="12" cy="3.5" r="1" fill="currentColor"/>
                <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none"/>
                <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none"/>
                <path d="M9 18h6"/>
                <line x1="2" y1="14" x2="4" y2="14"/>
                <line x1="20" y1="14" x2="22" y2="14"/>
              </svg>
              <span class="pl-col-bot-hint-name">${escHtml(bot.name)}</span>
            </button>`;
          })()}
          ${showAlarms ? `
            <button class="pl-col-alarm-btn ${alarmActive ? 'is-active' : ''}" data-stage-alarm="${stage.id}" title="${alarmActive ? alarmReason(stage) + ' — click para cambiar' : 'Configurar alarma de leads estancados'}">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><path d="M10 2a5 5 0 0 0-5 5v3l-2 3h14l-2-3V7a5 5 0 0 0-5-5z"/><path d="M8 16a2 2 0 0 0 4 0"/></svg>
              ${alarmActive ? alarmButtonLabel(stage) : 'Alarma'}
            </button>` : ''}
        </div>
      </div>`;
  }).join('');

  setupKanbanDragDrop();
}

// Vista de lista — tabla con checkboxes y acciones en lote (eliminar / mover etapa)
function renderPipelinesList() {
  const board = document.getElementById('plBoard');
  if (!board) return;

  const pipeline = PIPELINES.find(p => p.id === PL_ACTIVE_ID) || PIPELINES[0];
  if (!pipeline) return;

  const filtered = applyExpFiltersClient(PL_EXP_CACHE.filter(e => e.pipelineId === pipeline.id), PL_FILTERS);
  filtered.sort((a, b) => {
    if (PL_SORT === 'name')      return (a.name || '').localeCompare(b.name || '');
    if (PL_SORT === 'nameDesc')  return (b.name || '').localeCompare(a.name || '');
    if (PL_SORT === 'updatedAt') return (b.updatedAt || 0) - (a.updatedAt || 0);
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  // Limpiar selecciones de expedientes que ya no están en la lista filtrada
  PL_LIST_SELECTED = new Set([...PL_LIST_SELECTED].filter(id => filtered.some(e => e.id === id)));

  const stagesById = {};
  pipeline.stages.forEach(s => { stagesById[s.id] = s; });

  const allSelected = filtered.length > 0 && filtered.every(e => PL_LIST_SELECTED.has(e.id));
  const someSelected = filtered.some(e => PL_LIST_SELECTED.has(e.id));

  board.classList.add('pl-board--list');
  board.innerHTML = `
    <div class="pl-list-bulkbar ${PL_LIST_SELECTED.size > 0 ? 'is-active' : ''}">
      <div class="pl-list-bulkbar-info">
        <strong>${PL_LIST_SELECTED.size}</strong> seleccionado${PL_LIST_SELECTED.size === 1 ? '' : 's'}
        <button type="button" class="pl-list-bulk-clear" id="plListBulkClear">Limpiar</button>
      </div>
      <div class="pl-list-bulkbar-actions">
        <select class="pl-list-bulk-stage" id="plListBulkStage">
          <option value="">Mover a etapa…</option>
          ${pipeline.stages.map(s => `<option value="${s.id}">${escHtml(s.name)}</option>`).join('')}
        </select>
        <button type="button" class="btn btn--sm btn--danger" id="plListBulkDelete">🗑 Eliminar</button>
      </div>
    </div>
    <div class="pl-list-table-wrap">
      <table class="pl-list-table">
        <thead>
          <tr>
            <th class="pl-list-col-check"><input type="checkbox" id="plListSelectAll" ${allSelected ? 'checked' : ''} ${someSelected && !allSelected ? 'data-indeterminate="1"' : ''} /></th>
            <th class="pl-list-col-name">Nombre</th>
            <th class="pl-list-col-stage">Etapa</th>
            <th class="pl-list-col-contact">Contacto</th>
            <th class="pl-list-col-value">Valor</th>
            <th class="pl-list-col-date">Última actividad</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.length === 0
            ? `<tr><td colspan="6" class="pl-list-empty-row">No hay leads en este pipeline.</td></tr>`
            : filtered.map(e => {
                const stage = stagesById[e.stageId];
                const stageColor = stage?.color || '#94a3b8';
                const stageName  = stage?.name  || '—';
                const contactName = e.contactName || (e.contact && [e.contact.firstName, e.contact.lastName].filter(Boolean).join(' ')) || '—';
                const lastTs = e.updatedAt || e.createdAt;
                const isSelected = PL_LIST_SELECTED.has(e.id);
                return `
                  <tr class="pl-list-row ${isSelected ? 'is-selected' : ''}" data-exp-id="${e.id}">
                    <td class="pl-list-col-check"><input type="checkbox" class="pl-list-check" data-exp-id="${e.id}" ${isSelected ? 'checked' : ''} /></td>
                    <td class="pl-list-col-name"><a href="#" class="pl-list-name-link" data-open-exp="${e.id}">${escHtml(e.name || `LEAD-${e.id}`)}</a></td>
                    <td class="pl-list-col-stage"><span class="pl-list-stage-pill" style="background:${stageColor}1a;color:${stageColor};border:1px solid ${stageColor}66"><span class="pl-list-stage-dot" style="background:${stageColor}"></span>${escHtml(stageName)}</span></td>
                    <td class="pl-list-col-contact">${escHtml(contactName)}</td>
                    <td class="pl-list-col-value">${e.value ? '$' + Number(e.value).toLocaleString() : '—'}</td>
                    <td class="pl-list-col-date">${lastTs ? escHtml(relTime(lastTs)) : '—'}</td>
                  </tr>`;
              }).join('')
          }
        </tbody>
      </table>
    </div>`;

  // Set indeterminate on the select-all checkbox if needed
  const selectAll = document.getElementById('plListSelectAll');
  if (selectAll && someSelected && !allSelected) selectAll.indeterminate = true;

  setupPipelinesListHandlers(filtered, pipeline);
}

function setupPipelinesListHandlers(filtered, pipeline) {
  // Checkbox individual
  document.querySelectorAll('.pl-list-check').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const id = Number(e.target.dataset.expId);
      if (e.target.checked) PL_LIST_SELECTED.add(id);
      else PL_LIST_SELECTED.delete(id);
      renderPipelinesList();
    });
  });
  // Select all
  document.getElementById('plListSelectAll')?.addEventListener('change', (e) => {
    if (e.target.checked) filtered.forEach(x => PL_LIST_SELECTED.add(x.id));
    else PL_LIST_SELECTED.clear();
    renderPipelinesList();
  });
  // Limpiar selección
  document.getElementById('plListBulkClear')?.addEventListener('click', () => {
    PL_LIST_SELECTED.clear();
    renderPipelinesList();
  });
  // Mover a etapa
  document.getElementById('plListBulkStage')?.addEventListener('change', async (e) => {
    const stageId = Number(e.target.value);
    if (!stageId || !PL_LIST_SELECTED.size) return;
    const stage = pipeline.stages.find(s => s.id === stageId);
    // Diálogo personalizado con selector de policy para colisiones de bot
    const policyChoice = await _askBulkMovePolicy(PL_LIST_SELECTED.size, stage?.name || '');
    if (!policyChoice) { e.target.value = ''; return; }
    const ids = [...PL_LIST_SELECTED];
    try {
      const res = await api('POST', '/api/expedients/bulk-move', { ids, stageId, botCollisionPolicy: policyChoice });
      PL_LIST_SELECTED.clear();
      e.target.value = '';
      // Empieza a trackear el job — la barra global aparece y se actualiza sola
      startBulkJobTracking(res.item.id);
      toast('Procesando en segundo plano — puedes seguir trabajando', 'info', 4000);
    } catch (err) {
      toast(`Error al encolar el job: ${err.message}`, 'error');
    }
  });

  // Diálogo para el bulk move con selector de policy.
  // Devuelve 'skip' | 'restart' | null (canceló)
  function _askBulkMovePolicy(count, stageName) {
    return new Promise(resolve => {
      const policy = window.confirm(
        `¿Mover ${count} lead(s) a la etapa "${stageName}"?\n\n` +
        `Si algún lead ya tiene un bot corriendo (con timer/wait activo):\n` +
        `  • OK → No iniciar bot nuevo (deja los bots viejos como están — recomendado para campañas masivas)\n` +
        `  • Cancelar → Aborta el movimiento\n\n` +
        `(Para reiniciar bots viejos en bulk, mueve los leads de uno en uno)`
      ) ? 'skip' : null;
      resolve(policy);
    });
  }
  // Eliminar
  document.getElementById('plListBulkDelete')?.addEventListener('click', async () => {
    if (!PL_LIST_SELECTED.size) return;
    if (!confirm(`¿Eliminar ${PL_LIST_SELECTED.size} lead(s)? Se mueven a la papelera (recuperables 30 días).`)) return;
    const ids = [...PL_LIST_SELECTED];
    try {
      const res = await api('POST', '/api/expedients/bulk-delete', { ids });
      PL_LIST_SELECTED.clear();
      startBulkJobTracking(res.item.id);
      toast('Eliminando en segundo plano — puedes seguir trabajando', 'info', 4000);
    } catch (err) {
      toast(`Error al encolar el job: ${err.message}`, 'error');
    }
  });
  // Click en el nombre → abre detalle del expediente
  document.querySelectorAll('[data-open-exp]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Number(a.dataset.openExp);
      openExpDetail(id, 'pipelines');
    });
  });
}

function _kdClearHighlight() {
  if (_kdHoveredCol) { _kdHoveredCol.classList.remove('drag-over'); _kdHoveredCol = null; }
}
function _kdSetHighlight(col) {
  if (col === _kdHoveredCol) return;
  _kdClearHighlight();
  if (col) { col.classList.add('drag-over'); _kdHoveredCol = col; }
}

// Auto-scroll horizontal de un contenedor mientras arrastras cerca de sus
// bordes. Si el cursor está dentro de `edgeZone` px del borde izq/der,
// scroll proporcional a qué tan cerca esté del borde. Cancelable con
// _stopAutoScroll() (que se llama en dragend/drop).
let _autoScrollRaf = null;
let _autoScrollState = null; // { container, dx }
function _startAutoScroll(container, dx) {
  if (_autoScrollState && _autoScrollState.container === container && _autoScrollState.dx === dx) return;
  _autoScrollState = { container, dx };
  if (_autoScrollRaf) return;
  const tick = () => {
    if (!_autoScrollState) { _autoScrollRaf = null; return; }
    const { container: c, dx: d } = _autoScrollState;
    c.scrollLeft += d;
    _autoScrollRaf = requestAnimationFrame(tick);
  };
  _autoScrollRaf = requestAnimationFrame(tick);
}
function _stopAutoScroll() {
  _autoScrollState = null;
  if (_autoScrollRaf) { cancelAnimationFrame(_autoScrollRaf); _autoScrollRaf = null; }
}
// Decide si el cursor está cerca del borde y arranca/para el scroll.
// edgeZone: px desde el borde donde activa. maxSpeed: px por frame (60fps).
function _maybeAutoScroll(e, container, edgeZone = 80, maxSpeed = 18) {
  if (!container) { _stopAutoScroll(); return; }
  const rect = container.getBoundingClientRect();
  const x = e.clientX;
  if (x < rect.left + edgeZone) {
    // Cuanto más cerca del borde, más rápido (proporcional)
    const intensity = 1 - Math.max(0, x - rect.left) / edgeZone;
    _startAutoScroll(container, -Math.ceil(maxSpeed * intensity));
  } else if (x > rect.right - edgeZone) {
    const intensity = 1 - Math.max(0, rect.right - x) / edgeZone;
    _startAutoScroll(container, Math.ceil(maxSpeed * intensity));
  } else {
    _stopAutoScroll();
  }
}

// Global: detener cualquier auto-scroll cuando termine cualquier drag.
// Cubre todos los casos (drop exitoso, escape, drop fuera, etc.)
document.addEventListener('drop',    _stopAutoScroll, true);
document.addEventListener('dragend', _stopAutoScroll, true);

function setupKanbanDragDrop() {
  const board = document.getElementById('plBoard');
  if (!board) return;

  // ── Listeners del board: solo se registran UNA VEZ ──
  if (!_kdBoardListenersSet) {
    _kdBoardListenersSet = true;

    document.addEventListener('dragover', e => {
      if (!e.target.closest('#plBoard')) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      // Auto-scroll horizontal cuando estás cerca del borde del board
      _maybeAutoScroll(e, document.getElementById('plBoard'));
      if (_kdColDragId) {
        // Column reorder: highlight target column header only
        const targetCol = e.target.closest('.pl-column');
        document.querySelectorAll('#plBoard .pl-column').forEach(c =>
          c.classList.toggle('col-drag-over', c === targetCol && Number(c.dataset.stageId) !== _kdColDragId)
        );
        return;
      }
      _kdSetHighlight(e.target.closest('.pl-column'));
    });

    document.addEventListener('dragleave', e => {
      const board = document.getElementById('plBoard');
      if (board && !board.contains(e.relatedTarget)) _kdClearHighlight();
    });

    document.addEventListener('drop', async e => {
      const board = document.getElementById('plBoard');
      if (!board) return;

      // ── Column reorder drop ──
      if (_kdColDragId) {
        e.preventDefault();
        document.querySelectorAll('#plBoard .pl-column').forEach(c => c.classList.remove('col-drag-over'));
        const targetCol = e.target.closest('.pl-column');
        const fromId = _kdColDragId;
        _kdColDragId = null;
        if (!targetCol || !board.contains(targetCol)) return;
        const toId = Number(targetCol.dataset.stageId);
        if (fromId === toId) return;

        const cols   = [...board.querySelectorAll('.pl-column')];
        const ids    = cols.map(c => Number(c.dataset.stageId));
        const fromIdx = ids.indexOf(fromId);
        const toIdx   = ids.indexOf(toId);
        ids.splice(fromIdx, 1);
        ids.splice(toIdx, 0, fromId);

        // Instant DOM reorder
        const dragCol = cols[fromIdx];
        const dropCol = cols[toIdx];
        if (fromIdx < toIdx) dropCol.after(dragCol);
        else dropCol.before(dragCol);

        try {
          await api('POST', `/api/pipelines/${PL_ACTIVE_ID}/stages/reorder`, { order: ids });
          const pl = PIPELINES.find(p => p.id === PL_ACTIVE_ID);
          if (pl) pl.stages.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
        } catch (err) { toast(err.message, 'error'); await loadPipelinesKanban(); }
        return;
      }

      // ── Card drop ──
      const col = e.target.closest('.pl-column');
      if (!col || !board.contains(col)) return;
      e.preventDefault();
      _kdClearHighlight();

      const stageId = Number(col.dataset.dropStage);
      const expId   = _kdDragId || Number(e.dataTransfer.getData('text/plain') || 0);
      if (!expId || !stageId) return;

      const exp = PL_EXP_CACHE.find(x => x.id === expId);
      if (!exp) return;

      const newPipelineId = PL_ACTIVE_ID;
      if (exp.stageId === stageId && exp.pipelineId === newPipelineId) { _kdDragId = null; return; }

      _kdDragId = null;
      _kdOriginPipeline = null;

      const patch = { stageId };
      if (exp.pipelineId !== newPipelineId) patch.pipelineId = newPipelineId;

      // Antes de mover, preguntar al user qué hacer si hay un bot con run activo
      try {
        const targetPl = PIPELINES.find(p => p.id === newPipelineId);
        const targetStage = targetPl?.stages?.find(s => s.id === stageId);
        const decision = await checkBotCollision(expId, stageId, exp.name || exp.contactName, targetStage?.name);
        if (decision === 'cancel') { renderPipelinesBoard(); return; }
        if (decision === 'restart') patch.botCollisionPolicy = 'restart';
      } catch (_) {}

      try {
        await api('PATCH', `/api/expedients/${expId}`, patch);
        exp.stageId = stageId;
        // Backend setea stage_entered_at = unixepoch() al cambiar stage_id —
        // hay que reflejarlo en local para que las alarmas no disparen
        // inmediatamente con el timestamp viejo.
        exp.stageEnteredAt = Math.floor(Date.now() / 1000);
        if (patch.pipelineId) exp.pipelineId = newPipelineId;
        renderPipelineTabs();
        renderPipelinesBoard();
        if (patch.pipelineId) {
          const pl    = PIPELINES.find(p => p.id === newPipelineId);
          const stage = pl?.stages?.find(s => s.id === stageId);
          toast(`Movido a ${pl?.name} → ${stage?.name || ''}`, 'success');
        }
        // Si el stage destino tiene un bot con book_appointment → abrir modal
        _checkAndOpenApptModal(expId, stageId);
      } catch (err) {
        toast('Error al mover: ' + err.message, 'error');
      }
    });
  }

  // ── Listeners de columnas (reordenar): se re-registran en cada render ──
  board.querySelectorAll('.pl-col-drag-handle').forEach(handle => {
    handle.addEventListener('mousedown', () => {
      const col = handle.closest('.pl-column');
      if (col) col.draggable = true;
    });
    // Ensure draggable resets if no drag happens
    handle.addEventListener('mouseup', () => {
      const col = handle.closest('.pl-column');
      if (col && !_kdColDragId) col.draggable = false;
    });
  });
  board.querySelectorAll('.pl-column').forEach(col => {
    col.addEventListener('dragstart', e => {
      if (!col.draggable) return;
      _kdColDragId = Number(col.dataset.stageId);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', 'col:' + _kdColDragId);
      setTimeout(() => col.classList.add('is-col-dragging'), 0);
      e.stopPropagation(); // don't let card handler also fire
    });
    col.addEventListener('dragend', () => {
      col.draggable = false;
      col.classList.remove('is-col-dragging');
      document.querySelectorAll('#plBoard .pl-column').forEach(c => c.classList.remove('col-drag-over'));
      _kdColDragId = null;
    });
  });

  // ── Listeners de tarjetas: se re-registran en cada render ──
  board.querySelectorAll('.pl-card[draggable]').forEach(card => {
    card.addEventListener('dragstart', e => {
      _kdDragId = Number(card.dataset.expId);
      _kdOriginPipeline = PL_ACTIVE_ID;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(_kdDragId));
      setTimeout(() => card.classList.add('is-dragging'), 0);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('is-dragging');
      _kdClearHighlight();
      clearTimeout(_kdTabTimer);
      if (_kdDragId && _kdOriginPipeline && PL_ACTIVE_ID !== _kdOriginPipeline) {
        PL_ACTIVE_ID = _kdOriginPipeline;
        renderPipelineTabs();
        renderPipelinesBoard();
      }
      _kdDragId = null;
      _kdOriginPipeline = null;
    });
  });
}

const PL_ICONS = {
  building:   `<path d="M3 21V7l9-4 9 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>`,
  briefcase:  `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>`,
  barchart:   `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
  target:     `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
  star:       `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  trophy:     `<path d="M6 9H4a2 2 0 010-4h2"/><path d="M18 9h2a2 2 0 000-4h-2"/><path d="M6 5h12v7a6 6 0 01-12 0V5z"/><path d="M9 21h6m-3-3v3"/>`,
  users:      `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>`,
  package:    `<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>`,
  cart:       `<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>`,
  phone:      `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1.84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>`,
  mail:       `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
  wrench:     `<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>`,
  bulb:       `<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>`,
  bell:       `<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>`,
  home:       `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  car:        `<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>`,
  clipboard:  `<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>`,
  calendar:   `<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  rocket:     `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>`,
  dollar:     `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>`,
  handshake:  `<path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>`,
  graduation: `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
  truck:      `<rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>`,
  globe:      `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>`,
  settings:   `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>`,

  // ─── Generales adicionales (stroke style — coinciden con los anteriores) ───
  heart:      `<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>`,
  tag:        `<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>`,
  gift:       `<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>`,
  card:       `<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>`,
  send:       `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>`,
  eye:        `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`,
  award:      `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>`,
  camera:     `<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>`,
  pin:        `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>`,
  cloud:      `<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>`,
  shield:     `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,

  // ─── Iconos de marca (filled — usan la misma color como fill) ───
  whatsapp: { filled: true, paths: `<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.668-1.611-.916-2.206-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>` },
  instagram:{ filled: true, paths: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>` },
  facebook: { filled: true, paths: `<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>` },
  tiktok:   { filled: true, paths: `<path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/>` },
};

function _updatePlIconPreview(iconKey, color) {
  const preview = document.getElementById('plIconPreview');
  if (!preview) return;
  if (iconKey && PL_ICONS[iconKey]) {
    preview.setAttribute('stroke', color);
    preview.innerHTML = PL_ICONS[iconKey];
  } else {
    preview.setAttribute('stroke', color);
    preview.innerHTML = `<circle cx="12" cy="12" r="10"/>`;
  }
}

function openManageModal(pipeline) {
  PL_MANAGE_ID = pipeline ? pipeline.id : null;
  document.getElementById('plManageTitle').textContent = pipeline ? t('pl.modal.edit') : t('pl.modal.new');
  document.getElementById('plManageName').value = pipeline ? pipeline.name : '';
  document.getElementById('plManageColor').value = pipeline ? pipeline.color : '#2563eb';
  // Icono
  const iconBtn = document.getElementById('plIconBtn');
  const iconPreview = document.getElementById('plIconPreview');
  const iconInput = document.getElementById('plManageIcon');
  const currentColor = pipeline?.color || '#2563eb';
  const currentIcon = pipeline?.icon || '';
  if (iconInput) iconInput.value = currentIcon;
  _updatePlIconPreview(currentIcon, currentColor);
  // Renderizar opciones del picker
  const dropdown = document.getElementById('plIconDropdown');
  if (dropdown) {
    dropdown.innerHTML = `
      <button class="pl-icon-option pl-icon-clear ${!currentIcon ? 'is-active' : ''}" data-icon="">Sin icono</button>
      ${Object.entries(PL_ICONS).map(([key, _]) => `
        <button class="pl-icon-option ${key === currentIcon ? 'is-active' : ''}" data-icon="${key}" title="${key}">
          ${plIconSvg(key, currentColor, 18) || ''}
        </button>`).join('')}
    `;
    dropdown.querySelectorAll('.pl-icon-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.icon;
        const color = document.getElementById('plManageColor')?.value || '#2563eb';
        if (iconInput) iconInput.value = val;
        _updatePlIconPreview(val, color);
        dropdown.querySelectorAll('.pl-icon-option').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        dropdown.hidden = true;
      });
    });
  }
  // Live-update icon color when color picker changes
  document.getElementById('plManageColor')?.addEventListener('input', (e) => {
    const icon = document.getElementById('plManageIcon')?.value || '';
    _updatePlIconPreview(icon, e.target.value);
    // also update options in dropdown
    dropdown?.querySelectorAll('.pl-icon-option[data-icon]:not([data-icon=""])').forEach(btn => {
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('stroke', e.target.value);
    });
  });
  document.getElementById('plDeletePipelineBtn').hidden = !pipeline;
  renderStagesList(pipeline ? pipeline.stages : []);
  document.getElementById('plNewStageRow').hidden = true;
  document.getElementById('plManageModal').hidden = false;
}

function setupIconPicker() {
  const btn = document.getElementById('plIconBtn');
  const dropdown = document.getElementById('plIconDropdown');
  if (!btn || !dropdown) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.hidden = !dropdown.hidden;
  });
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) dropdown.hidden = true;
  });
}

function closeManageModal() {
  document.getElementById('plManageModal').hidden = true;
  PL_MANAGE_ID = null;
}

function renderStagesList(stages) {
  const KIND_LABELS = { in_progress: 'En progreso', won: 'Ganado', lost: 'Perdido' };
  const botOptions = sbBots.map(b => `<option value="${b.id}">${escHtml(b.name)}</option>`).join('');
  document.getElementById('plStagesList').innerHTML = stages.map(s => {
    const bot = sbBots.find(b => b.id === s.bot_id);
    const botLabel = bot ? escHtml(bot.name) : 'Sin bot';
    return `
    <div class="pl-stage-row" data-stage-id="${s.id}" draggable="true">
      <span class="pl-stage-drag-handle" title="Arrastra para reordenar">
        <svg viewBox="0 0 16 24" fill="currentColor" width="10" height="16"><circle cx="5" cy="5" r="1.6"/><circle cx="11" cy="5" r="1.6"/><circle cx="5" cy="12" r="1.6"/><circle cx="11" cy="12" r="1.6"/><circle cx="5" cy="19" r="1.6"/><circle cx="11" cy="19" r="1.6"/></svg>
      </span>
      <span class="pl-stage-color-dot" style="background:${s.color}"></span>
      <span class="pl-stage-name">${escHtml(s.name)}</span>
      <span class="pl-stage-kind">${KIND_LABELS[s.kind] || s.kind}</span>
      <span class="pl-stage-bot-chip-wrap">
        <button class="pl-stage-bot-chip ${bot ? 'has-bot' : ''}" data-stage-bot-toggle="${s.id}" title="${bot ? 'Cambiar bot asignado' : 'Asignar un bot a esta etapa'}">
          <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><rect x="3" y="7" width="14" height="10" rx="2"/><path d="M7 7V5a3 3 0 016 0v2"/><circle cx="7.5" cy="12" r="1.5"/><circle cx="12.5" cy="12" r="1.5"/></svg>
          ${botLabel}
        </button>
        ${bot ? `<button class="pl-stage-bot-clear" data-stage-bot-clear="${s.id}" title="Desasignar bot" aria-label="Desasignar bot">×</button>` : ''}
      </span>
      <button class="pl-stage-edit-btn" data-stage-edit-toggle="${s.id}" title="Editar etapa">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M14.7 3.3a1 1 0 011.4 1.4l-9.8 9.8-2.8.7.7-2.8z"/></svg>
      </button>
      <button class="pl-stage-del" data-del-stage="${s.id}" title="Eliminar etapa">×</button>
    </div>
    <div class="pl-stage-edit-row" id="pl-edit-${s.id}" hidden>
      <input type="color" value="${s.color}" class="pl-stage-edit-color" data-edit-color-for="${s.id}" />
      <input type="text" value="${escHtml(s.name)}" class="form-input pl-stage-edit-name" data-edit-name-for="${s.id}" maxlength="60" />
      <select class="pl-stage-edit-kind" data-edit-kind-for="${s.id}">
        <option value="in_progress" ${s.kind==='in_progress'?'selected':''}>En progreso</option>
        <option value="won" ${s.kind==='won'?'selected':''}>Ganado</option>
        <option value="lost" ${s.kind==='lost'?'selected':''}>Perdido</option>
      </select>
      <button class="btn btn--ghost btn--sm" data-cancel-stage-edit="${s.id}" title="Cancelar">×</button>
    </div>
    <div class="pl-stage-bot-row" id="pl-bot-${s.id}" hidden>
      <label style="font-size:12px;font-weight:600;white-space:nowrap">Bot en esta etapa:</label>
      <select class="pl-stage-bot-select" data-bot-select-for="${s.id}">
        <option value="">Sin bot</option>
        ${botOptions}
      </select>
      <button class="btn btn--primary btn--sm" data-save-bot="${s.id}">Asignar</button>
      <button class="btn btn--ghost btn--sm" data-cancel-bot="${s.id}">×</button>
    </div>`;
  }).join('') || '<p style="font-size:12px;color:var(--text-muted)">Sin etapas aún.</p>';

  // Pre-select current bot
  stages.forEach(s => {
    const sel = document.querySelector(`[data-bot-select-for="${s.id}"]`);
    if (sel && s.bot_id) sel.value = s.bot_id;
  });
}

// ════════════════════════════════
// FILTER PANEL (kanban + expedients)
// ════════════════════════════════

function applyExpFiltersClient(items, state) {
  const { q, searchIn, tags, fieldValues, stageId } = state;
  const lq = (q || '').trim().toLowerCase();
  return items.filter(e => {
    if (lq) {
      const name    = (e.name || '').toLowerCase();
      const contact = (e.contactName || '').toLowerCase();
      const matches = searchIn === 'name'    ? name.includes(lq)
                    : searchIn === 'contact' ? contact.includes(lq)
                    : name.includes(lq) || contact.includes(lq);
      if (!matches) return false;
    }
    if (tags.length && !tags.every(t => (e.tags || []).includes(t))) return false;
    if (stageId && e.stageId !== stageId) return false;
    for (const [fid, fval] of Object.entries(fieldValues || {})) {
      if (!fval) continue;
      const saved = (e.fieldValues || []).find(fv => String(fv.fieldId) === String(fid));
      if (!saved || !saved.value.toLowerCase().includes(fval.toLowerCase())) return false;
    }
    return true;
  });
}

function countActiveFilters(state) {
  let n = 0;
  if (state.searchIn !== 'all') n++;
  n += (state.tags || []).length;
  n += Object.values(state.fieldValues || {}).filter(v => v !== '').length;
  if (state.stageId) n++;
  return n;
}

function updateFilterBadge(prefix) {
  const state = prefix === 'pl' ? PL_FILTERS : EXP_FILTERS;
  const n = countActiveFilters(state);
  const badge = document.getElementById(`${prefix}FilterBadge`);
  const btn   = document.getElementById(`${prefix}FilterBtn`);
  if (badge) { badge.textContent = n; badge.hidden = n === 0; }
  if (btn)   btn.classList.toggle('has-filters', n > 0);
}

function renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix }) {
  if (!panelEl) return;
  const isPipelineFilter = prefix === 'pl';
  const activePl = isPipelineFilter ? (PIPELINES.find(p => p.id === PL_ACTIVE_ID) || PIPELINES[0]) : null;

  const fieldHtml = fieldDefs.map(def => {
    const val = state.fieldValues[def.id] ?? '';
    let inputHtml;
    if (def.fieldType === 'boolean') {
      inputHtml = `<div class="kf-tri-toggle">
        ${[['', 'Todos'], ['1', 'Activo'], ['0', 'Inactivo']].map(([v, l]) =>
          `<button class="kf-tri-opt ${val === v ? 'is-active' : ''}" data-fv-id="${def.id}" data-fv-val="${v}">${l}</button>`
        ).join('')}
      </div>`;
    } else if (def.fieldType === 'select' && def.options?.length) {
      inputHtml = `<select class="kf-input" data-fv-sel="${def.id}">
        <option value="">Todos</option>
        ${def.options.map(o => `<option value="${escapeHtml(o)}"${val===o?' selected':''}>${escapeHtml(o)}</option>`).join('')}
      </select>`;
    } else if (def.fieldType === 'datetime' || def.fieldType === 'date') {
      inputHtml = `<input class="kf-input kf-date-input" type="date" value="${escapeHtml(val)}" data-fv-inp="${def.id}" />`;
    } else if (def.fieldType === 'number') {
      inputHtml = `<input class="kf-input" type="number" placeholder="Valor…" value="${escapeHtml(val)}" data-fv-inp="${def.id}" />`;
    } else {
      inputHtml = `<input class="kf-input" type="text" placeholder="Buscar…" value="${escapeHtml(val)}" data-fv-inp="${def.id}" />`;
    }
    return `<div class="kf-field-row"><span class="kf-field-label">${escapeHtml(def.label)}</span>${inputHtml}</div>`;
  }).join('');

  panelEl.innerHTML = `
    <div class="kf-section">
      <div class="kf-section-title">Buscar en</div>
      <div class="kf-si-row">
        ${[['all','Todo'],['name','Nombre lead'],['contact','Contacto'],['phone','Teléfono'],['email','Email']].map(([v,l])=>
          `<button class="kf-si-btn ${state.searchIn===v?'is-active':''}" data-si="${v}">${l}</button>`
        ).join('')}
      </div>
    </div>
    ${isPipelineFilter && PIPELINES.length ? `
    <div class="kf-section">
      <div class="kf-section-title">Pipeline</div>
      <div class="kf-pl-chips">
        ${PIPELINES.map(p => `<button class="kf-pl-chip ${p.id===PL_ACTIVE_ID?'is-active':''}" data-pl-switch="${p.id}">${escapeHtml(p.name)}</button>`).join('')}
      </div>
    </div>` : ''}
    ${isPipelineFilter && activePl?.stages?.length ? `
    <div class="kf-section">
      <div class="kf-section-title">Etapa <span class="kf-section-hint">(de ${escapeHtml(activePl.name)})</span></div>
      <div class="kf-stage-chips">
        <button class="kf-stage-chip ${!state.stageId?'is-active':''}" data-stage="">Todas</button>
        ${activePl.stages.map(s => `<button class="kf-stage-chip ${state.stageId===s.id?'is-active':''}" data-stage="${s.id}"><span class="kf-stage-dot" style="background:${escapeHtml(s.color||'#94a3b8')}"></span>${escapeHtml(s.name)}</button>`).join('')}
      </div>
    </div>` : ''}
    ${tags.length ? `
    <div class="kf-section">
      <div class="kf-section-title">Etiquetas</div>
      <div class="kf-tag-chips">
        ${tags.map(t=>`<button class="kf-tag-chip ${(state.tags||[]).includes(t)?'is-active':''}" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('')}
      </div>
    </div>` : ''}
    ${fieldDefs.length ? `
    <div class="kf-section">
      <div class="kf-section-title">Campos personalizados</div>
      ${fieldHtml}
    </div>` : ''}
    <div class="kf-footer">
      <button class="kf-clear-btn">Limpiar filtros</button>
    </div>`;

  panelEl.querySelectorAll('[data-si]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); state.searchIn = btn.dataset.si; onChange(state); renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix }); });
  });
  panelEl.querySelectorAll('[data-tag]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); const t = btn.dataset.tag; state.tags = (state.tags||[]).includes(t) ? state.tags.filter(x=>x!==t) : [...(state.tags||[]), t]; onChange(state); renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix }); });
  });
  // Pipeline switcher: cambia PL_ACTIVE_ID y recarga el kanban
  panelEl.querySelectorAll('[data-pl-switch]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const newId = Number(btn.dataset.plSwitch);
      if (newId === PL_ACTIVE_ID) return;
      PL_ACTIVE_ID = newId;
      localStorage.setItem('lastPipelineId', String(PL_ACTIVE_ID));
      state.stageId = null; // reset stage al cambiar pipeline
      await loadPipelinesKanban();
      // Re-renderizar panel para reflejar nuevas etapas
      renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix });
    });
  });
  // Stage filter chips
  panelEl.querySelectorAll('[data-stage]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sid = btn.dataset.stage;
      state.stageId = sid ? Number(sid) : null;
      onChange(state);
      renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix });
    });
  });
  panelEl.querySelectorAll('[data-fv-id]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); state.fieldValues[btn.dataset.fvId] = btn.dataset.fvVal; onChange(state); renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix }); });
  });
  let _fvDeb = {};
  panelEl.querySelectorAll('[data-fv-inp]').forEach(inp => {
    const handler = (e) => {
      e.stopPropagation();
      clearTimeout(_fvDeb[inp.dataset.fvInp]);
      _fvDeb[inp.dataset.fvInp] = setTimeout(() => {
        state.fieldValues[inp.dataset.fvInp] = inp.value.trim();
        onChange(state);
      }, inp.type === 'date' ? 0 : 250);
    };
    inp.addEventListener('input', handler);
    inp.addEventListener('change', handler);
  });
  panelEl.querySelectorAll('[data-fv-sel]').forEach(sel => {
    sel.addEventListener('change', (e) => { e.stopPropagation(); state.fieldValues[sel.dataset.fvSel] = sel.value; onChange(state); });
  });
  panelEl.querySelector('.kf-clear-btn')?.addEventListener('click', (e) => { e.stopPropagation(); state.searchIn='all'; state.tags=[]; state.fieldValues={}; state.stageId=null; onChange(state); renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix }); });
}

function openFilterPanel(prefix, tags) {
  const panelEl = document.getElementById(`${prefix}FilterPanel`);
  if (!panelEl || !panelEl.hidden) return;
  const state    = prefix === 'pl' ? PL_FILTERS : EXP_FILTERS;
  const fieldDefs = (EXP_FIELD_DEFS || []).filter(d => d.entity === 'expedient' || !d.entity);
  const onChange = (s) => {
    updateFilterBadge(prefix);
    if (prefix === 'pl') { PL_FILTERS = s; renderPipelinesBoard(); }
    else { EXP_FILTERS = s; EXP_STATE.page = 1; loadExpedients(); }
  };
  renderFilterPanel(panelEl, { tags, fieldDefs, state, onChange, prefix });
  panelEl.hidden = false;
}

function closeFilterPanel(prefix) {
  const panelEl = document.getElementById(`${prefix}FilterPanel`);
  if (panelEl) panelEl.hidden = true;
}

function setupFilterButtons() {
  // Close panels on outside click
  document.addEventListener('click', (e) => {
    // pl panel anchored to topbar search wrap + extras
    const plPanel  = document.getElementById('plFilterPanel');
    const plAnchor = document.getElementById('topbarSearchWrap');
    const plExtras = document.getElementById('topbarPlExtras');
    const plBtn    = document.getElementById('plFilterBtn');
    if (plPanel && !plPanel.hidden) {
      if (!plAnchor?.contains(e.target) && !plExtras?.contains(e.target)) plPanel.hidden = true;
    }
    // exp panel — anchored to topbar search + topbar exp extras
    const expPanel   = document.getElementById('expFilterPanel');
    const expAnchor  = document.getElementById('topbarSearchWrap');
    const expExtras  = document.getElementById('topbarExpExtras');
    const expBtn     = document.getElementById('expFilterBtn');
    if (expPanel && !expPanel.hidden) {
      if (!expAnchor?.contains(e.target) && !expExtras?.contains(e.target) && !expBtn?.contains(e.target)) expPanel.hidden = true;
    }
    // global cross-pipeline search panel
    const gsPanel = document.getElementById('plGlobalSearchPanel');
    if (gsPanel && !gsPanel.hidden) {
      if (!document.getElementById('topbarSearchWrap')?.contains(e.target)) gsPanel.hidden = true;
    }
  });

  // Pipeline filter button
  document.getElementById('plFilterBtn')?.addEventListener('click', async (e) => {
    e.stopPropagation();
    const panel = document.getElementById('plFilterPanel');
    if (!panel.hidden) { panel.hidden = true; return; }
    await loadExpFieldDefs();
    // tags from current cache
    const allTags = [...new Set(PL_EXP_CACHE.flatMap(e => e.tags || []))].sort();
    openFilterPanel('pl', allTags);
  });

  // Expedients filter button
  document.getElementById('expFilterBtn')?.addEventListener('click', async (e) => {
    e.stopPropagation();
    const panel = document.getElementById('expFilterPanel');
    if (!panel.hidden) { panel.hidden = true; return; }
    await loadExpFieldDefs();
    let tags = [];
    try { const d = await api('GET', '/api/expedients/tags'); tags = d.items || []; } catch (_) {}
    openFilterPanel('exp', tags);
  });
}

function setupPipelines() {
  // Topbar search drives pipeline filter when in pipelines view
  let _plSearchDebounce;
  document.getElementById('topbarSearchInput')?.addEventListener('input', e => {
    if (document.body.dataset.viewActive !== 'pipelines') return;
    clearTimeout(_plSearchDebounce);
    _plSearchDebounce = setTimeout(async () => {
      PL_FILTERS.q = e.target.value;
      PL_SEARCH = PL_FILTERS.q;
      updateFilterBadge('pl');
      renderPipelinesBoard();

      // Búsqueda global cross-pipeline
      const q = (e.target.value || '').trim();
      const globalPanel = document.getElementById('plGlobalSearchPanel');
      if (!globalPanel) return;
      if (q.length < 2) { globalPanel.hidden = true; return; }
      try {
        const data = await api('GET', `/api/expedients?search=${encodeURIComponent(q)}&pageSize=8`);
        const others = (data?.items || []).filter(x => x.pipelineId !== PL_ACTIVE_ID);
        if (!others.length) { globalPanel.hidden = true; return; }
        const groups = new Map();
        for (const exp of others) {
          if (!groups.has(exp.pipelineId)) groups.set(exp.pipelineId, { name: exp.pipelineName || `Pipeline ${exp.pipelineId}`, items: [] });
          groups.get(exp.pipelineId).items.push(exp);
        }
        let html = `<div class="pl-gs-hint">No encontrado aquí — en otros pipelines:</div>`;
        for (const [, g] of groups) {
          html += `<div class="pl-gs-group"><div class="pl-gs-group-name">${escHtml(g.name)}</div>${
            g.items.map(exp => `<button class="pl-gs-item" data-exp-id="${exp.id}" data-pl-id="${exp.pipelineId}">
              <span class="pl-gs-item-name">${escHtml(exp.name || exp.contactName || 'Sin nombre')}</span>
              <span class="pl-gs-item-stage">${exp.stageColor ? `<span class="pl-gs-item-dot" style="background:${escHtml(exp.stageColor)}"></span>` : ''}${escHtml(exp.stageName || '')}</span>
            </button>`).join('')}</div>`;
        }
        globalPanel.innerHTML = html;
        globalPanel.hidden = false;
      } catch (_) { globalPanel.hidden = true; }
    }, 300);
  });

  // Click en resultado del buscador global cross-pipeline
  document.getElementById('plGlobalSearchPanel')?.addEventListener('click', async e => {
    const item = e.target.closest('.pl-gs-item');
    if (!item) return;
    const plId  = Number(item.dataset.plId);
    const expId = Number(item.dataset.expId);
    document.getElementById('plGlobalSearchPanel').hidden = true;
    PL_ACTIVE_ID = plId;
    localStorage.setItem('lastPipelineId', String(PL_ACTIVE_ID));
    await loadPipelinesKanban();
    setTimeout(() => {
      const card = document.querySelector(`.pl-card[data-exp-id="${expId}"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('is-pl-highlighted');
        setTimeout(() => card.classList.remove('is-pl-highlighted'), 2000);
      }
    }, 350);
  });

  // Board sort
  document.getElementById('plBoardSort')?.addEventListener('change', e => {
    PL_SORT = e.target.value;
    renderPipelinesBoard();
  });

  // View mode toggle (kanban / list)
  document.getElementById('topbarPlExtras')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-pl-view]');
    if (!btn) return;
    const mode = btn.dataset.plView;
    if (mode !== 'kanban' && mode !== 'list') return;
    if (mode === PL_VIEW_MODE) return;
    setPipelineViewMode(mode);
  });

  // Tab switch — re-fetch porque ahora el cache filtra por pipeline
  document.getElementById('plTabs')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-pl-id]');
    if (!btn) return;
    PL_ACTIVE_ID = Number(btn.dataset.plId);
    localStorage.setItem('lastPipelineId', String(PL_ACTIVE_ID));
    renderPipelineTabs();
    loadPipelinesKanban();
  });

  // Tab drag-to-reorder: mousedown on handle → enable draggable, then handle dragstart/end
  document.getElementById('plTabs')?.addEventListener('mousedown', e => {
    const handle = e.target.closest('.pl-tab-drag-handle');
    if (!handle) return;
    const tab = handle.closest('.pl-tab');
    if (tab) tab.draggable = true;
  });
  document.getElementById('plTabs')?.addEventListener('mouseup', e => {
    const tab = e.target.closest('.pl-tab');
    if (tab && !_kdPipelineDragId) tab.draggable = false;
  });
  document.getElementById('plTabs')?.addEventListener('dragstart', e => {
    const tab = e.target.closest('.pl-tab[draggable]');
    if (!tab) return;
    _kdPipelineDragId = Number(tab.dataset.plId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', 'pl:' + _kdPipelineDragId);
    setTimeout(() => tab.classList.add('is-pl-dragging'), 0);
    e.stopPropagation();
  });
  document.getElementById('plTabs')?.addEventListener('dragend', e => {
    const tab = e.target.closest('.pl-tab');
    if (tab) { tab.draggable = false; tab.classList.remove('is-pl-dragging'); }
    document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('pl-tab-drop-target'));
    _kdPipelineDragId = null;
  });

  // Drag sobre tab de pipeline → reorder si es pipeline drag, switch si es card drag
  let _tabHoverId = null;

  document.getElementById('plTabs')?.addEventListener('dragover', e => {
    // Auto-scroll horizontal de las tabs cuando arrastras cerca de los bordes.
    // Aplica tanto a reorder de pipelines como a drop de tarjetas en tabs.
    _maybeAutoScroll(e, document.getElementById('plTabs'), 60, 14);

    const btn = e.target.closest('[data-pl-id]');
    if (!btn) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    // Pipeline reorder mode
    if (_kdPipelineDragId) {
      document.querySelectorAll('.pl-tab').forEach(t =>
        t.classList.toggle('pl-tab-drop-target', t === btn && Number(t.dataset.plId) !== _kdPipelineDragId)
      );
      return;
    }

    // Card drag over tab → switch pipeline after 400ms
    document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('drag-over'));
    btn.classList.add('drag-over');
    const hoverPipelineId = Number(btn.dataset.plId);
    if (hoverPipelineId === _tabHoverId) return;
    _tabHoverId = hoverPipelineId;
    clearTimeout(_kdTabTimer);
    _kdTabTimer = setTimeout(() => {
      if (PL_ACTIVE_ID !== hoverPipelineId) {
        PL_ACTIVE_ID = hoverPipelineId;
        renderPipelineTabs();
        renderPipelinesBoard();
      }
    }, 400);
  });

  document.getElementById('plTabs')?.addEventListener('dragleave', e => {
    if (!document.getElementById('plTabs').contains(e.relatedTarget)) {
      clearTimeout(_kdTabTimer);
      _tabHoverId = null;
      document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('drag-over', 'pl-tab-drop-target'));
    }
  });

  // Drop en tab
  document.getElementById('plTabs')?.addEventListener('drop', async e => {
    const btn = e.target.closest('[data-pl-id]');
    if (!btn) return;
    e.preventDefault();
    clearTimeout(_kdTabTimer);
    document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('drag-over', 'pl-tab-drop-target'));

    // Pipeline reorder
    if (_kdPipelineDragId) {
      const fromId = _kdPipelineDragId;
      const toId   = Number(btn.dataset.plId);
      _kdPipelineDragId = null;
      if (fromId === toId) return;

      const tabs  = [...document.querySelectorAll('#plTabs .pl-tab')];
      const ids   = tabs.map(t => Number(t.dataset.plId));
      const fromIdx = ids.indexOf(fromId);
      const toIdx   = ids.indexOf(toId);
      ids.splice(fromIdx, 1);
      ids.splice(toIdx, 0, fromId);

      // Instant DOM reorder
      const dragTab = tabs[fromIdx];
      const dropTab = tabs[toIdx];
      if (fromIdx < toIdx) dropTab.after(dragTab);
      else dropTab.before(dragTab);

      PIPELINES.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));

      try {
        await api('POST', '/api/pipelines/reorder', { order: ids });
      } catch (err) { toast(err.message, 'error'); await loadPipelinesKanban(); }
      return;
    }

    // Card drop onto tab → move to first stage of that pipeline
    const targetPipelineId = Number(btn.dataset.plId);
    const expId = Number(e.dataTransfer.getData('text/plain') || 0) || _kdDragId;
    if (!expId || !targetPipelineId) return;

    const exp = PL_EXP_CACHE.find(x => x.id === expId);
    if (!exp || exp.pipelineId === targetPipelineId) return;

    const targetPipeline = PIPELINES.find(p => p.id === targetPipelineId);
    const firstStage = targetPipeline?.stages?.[0];
    if (!firstStage) { toast('El pipeline no tiene etapas', 'error'); return; }

    try {
      await api('PATCH', `/api/expedients/${expId}`, { pipelineId: targetPipelineId, stageId: firstStage.id });
      exp.pipelineId   = targetPipelineId;
      exp.stageId      = firstStage.id;
      PL_ACTIVE_ID     = targetPipelineId;
      renderPipelineTabs();
      renderPipelinesBoard();
      toast(`Movido a ${targetPipeline.name} → ${firstStage.name}`, 'success');
    } catch (err) {
      toast('Error al mover: ' + err.message, 'error');
    }
    _kdDragId = null;
  });

  // Open manage from topbar button (edits active pipeline)
  document.getElementById('plManageBtn')?.addEventListener('click', () => {
    const pl = PIPELINES.find(p => p.id === PL_ACTIVE_ID);
    openManageModal(pl || null);
  });

  // New pipeline
  ['plNewPipelineBtn', 'plNewPipelineBtn2'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => openManageModal(null));
  });

  // Close modal
  document.getElementById('plManageModal')?.addEventListener('click', e => {
    if (e.target.hasAttribute('data-close-pl-manage') || e.target === document.getElementById('plManageModal')) closeManageModal();
  });

  // Add stage row
  document.getElementById('plAddStageBtn')?.addEventListener('click', () => {
    document.getElementById('plNewStageRow').hidden = false;
    document.getElementById('plNewStageName').focus();
  });
  document.getElementById('plCancelNewStageBtn')?.addEventListener('click', () => {
    document.getElementById('plNewStageRow').hidden = true;
    document.getElementById('plNewStageName').value = '';
  });

  // Save new stage
  document.getElementById('plSaveNewStageBtn')?.addEventListener('click', async () => {
    if (!PL_MANAGE_ID) { toast('Guarda el pipeline primero', 'warning'); return; }
    const name = document.getElementById('plNewStageName').value.trim();
    const color = document.getElementById('plNewStageColor').value;
    const kind = document.getElementById('plNewStageKind').value;
    if (!name) { toast('Escribe el nombre de la etapa', 'error'); return; }
    try {
      await api('POST', `/api/pipelines/${PL_MANAGE_ID}/stages`, { name, color, kind });
      document.getElementById('plNewStageRow').hidden = true;
      document.getElementById('plNewStageName').value = '';
      await loadPipelinesKanban();
      const updated = PIPELINES.find(p => p.id === PL_MANAGE_ID);
      if (updated) renderStagesList(updated.stages);
      toast('Etapa agregada', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Stage list: delegated handler for delete / edit-toggle / bot-toggle / save-edit / save-bot
  document.getElementById('plStagesList')?.addEventListener('click', async e => {
    // Delete
    const delBtn = e.target.closest('[data-del-stage]');
    if (delBtn) {
      if (!confirm('¿Eliminar esta etapa?')) return;
      try {
        await api('DELETE', `/api/pipelines/stages/${delBtn.dataset.delStage}`);
        await loadPipelinesKanban();
        // Refrescar bots: pueden haber quedado con issues "missing_stage" o
        // "missing_trigger_stage" al borrar una etapa que referenciaban.
        loadSalsbots().catch(() => {});
        const updated = PIPELINES.find(p => p.id === PL_MANAGE_ID);
        if (updated) renderStagesList(updated.stages);
        toast('Etapa eliminada', 'success');
      } catch (err) { toast(err.message, 'error'); }
      return;
    }

    // Toggle edit row
    const editToggle = e.target.closest('[data-stage-edit-toggle]');
    if (editToggle) {
      const id = editToggle.dataset.stageEditToggle;
      const row = document.getElementById(`pl-edit-${id}`);
      if (row) row.hidden = !row.hidden;
      return;
    }

    // Cancel edit
    const cancelEdit = e.target.closest('[data-cancel-stage-edit]');
    if (cancelEdit) {
      const row = document.getElementById(`pl-edit-${cancelEdit.dataset.cancelStageEdit}`);
      if (row) row.hidden = true;
      return;
    }

    // Save stage edit
    const saveStage = e.target.closest('[data-save-stage]');
    if (saveStage) {
      const id = saveStage.dataset.saveStage;
      const name  = document.querySelector(`[data-edit-name-for="${id}"]`)?.value.trim();
      const color = document.querySelector(`[data-edit-color-for="${id}"]`)?.value;
      const kind  = document.querySelector(`[data-edit-kind-for="${id}"]`)?.value;
      if (!name) { toast('El nombre no puede estar vacío', 'error'); return; }
      try {
        await api('PATCH', `/api/pipelines/stages/${id}`, { name, color, kind });
        await loadPipelinesKanban();
        const updated = PIPELINES.find(p => p.id === PL_MANAGE_ID);
        if (updated) renderStagesList(updated.stages);
        toast('Etapa actualizada', 'success');
      } catch (err) { toast(err.message, 'error'); }
      return;
    }

    // Clear bot assignment (× junto al chip)
    const clearBot = e.target.closest('[data-stage-bot-clear]');
    if (clearBot) {
      e.stopPropagation();
      const id = clearBot.dataset.stageBotClear;
      if (!confirm('¿Desasignar el bot de esta etapa?')) return;
      try {
        await api('PATCH', `/api/pipelines/stages/${id}`, { bot_id: null });
        await loadPipelinesKanban();
        const updated = PIPELINES.find(p => p.id === PL_MANAGE_ID);
        if (updated) renderStagesList(updated.stages);
        toast('Bot desvinculado', 'success');
      } catch (err) { toast(err.message, 'error'); }
      return;
    }

    // Toggle bot row
    const botToggle = e.target.closest('[data-stage-bot-toggle]');
    if (botToggle) {
      const id = botToggle.dataset.stageBotToggle;
      const row = document.getElementById(`pl-bot-${id}`);
      if (row) row.hidden = !row.hidden;
      return;
    }

    // Cancel bot
    const cancelBot = e.target.closest('[data-cancel-bot]');
    if (cancelBot) {
      const row = document.getElementById(`pl-bot-${cancelBot.dataset.cancelBot}`);
      if (row) row.hidden = true;
      return;
    }

    // Save bot assignment
    const saveBot = e.target.closest('[data-save-bot]');
    if (saveBot) {
      const id  = saveBot.dataset.saveBot;
      const sel = document.querySelector(`[data-bot-select-for="${id}"]`);
      const botId = sel?.value ? Number(sel.value) : null;
      try {
        await api('PATCH', `/api/pipelines/stages/${id}`, { bot_id: botId });
        await loadPipelinesKanban();
        const updated = PIPELINES.find(p => p.id === PL_MANAGE_ID);
        if (updated) renderStagesList(updated.stages);
        toast(botId ? 'Bot asignado a la etapa' : 'Bot desvinculado', 'success');
      } catch (err) { toast(err.message, 'error'); }
      return;
    }
  });

  // Stage drag-to-reorder inside manage modal
  // Enter en el input de nombre de etapa → cierra el row (el Guardar principal lo guardará)
  document.getElementById('plStagesList')?.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const input = e.target.closest('.pl-stage-edit-name');
    if (!input) return;
    e.preventDefault();
    const id = input.dataset.editNameFor;
    const row = document.getElementById(`pl-edit-${id}`);
    if (row) row.hidden = true;
  });

  document.getElementById('plStagesList')?.addEventListener('dragstart', e => {
    const row = e.target.closest('.pl-stage-row[draggable]');
    if (!row) return;
    e.dataTransfer.setData('text/plain', row.dataset.stageId);
    row.classList.add('is-dragging');
  });
  document.getElementById('plStagesList')?.addEventListener('dragend', e => {
    document.querySelectorAll('.pl-stage-row').forEach(r => r.classList.remove('is-dragging', 'drag-over-stage'));
  });
  document.getElementById('plStagesList')?.addEventListener('dragover', e => {
    e.preventDefault();
    const row = e.target.closest('.pl-stage-row');
    if (!row) return;
    document.querySelectorAll('.pl-stage-row').forEach(r => r.classList.remove('drag-over-stage'));
    row.classList.add('drag-over-stage');
  });
  document.getElementById('plStagesList')?.addEventListener('drop', async e => {
    e.preventDefault();
    const dragId = Number(e.dataTransfer.getData('text/plain'));
    const dropRow = e.target.closest('.pl-stage-row');
    document.querySelectorAll('.pl-stage-row').forEach(r => r.classList.remove('is-dragging', 'drag-over-stage'));
    if (!dropRow || !dragId || !PL_MANAGE_ID) return;
    const dropId = Number(dropRow.dataset.stageId);
    if (dragId === dropId) return;

    // Reorder locally then persist
    const rows = [...document.querySelectorAll('#plStagesList .pl-stage-row')];
    const ids = rows.map(r => Number(r.dataset.stageId));
    const fromIdx = ids.indexOf(dragId);
    const toIdx = ids.indexOf(dropId);
    ids.splice(fromIdx, 1);
    ids.splice(toIdx, 0, dragId);

    // Move DOM node immediately for instant feedback
    const dragNode = rows[fromIdx];
    const dropNode = rows[toIdx];
    if (fromIdx < toIdx) dropNode.after(dragNode);
    else dropNode.before(dragNode);

    try {
      await api('POST', `/api/pipelines/${PL_MANAGE_ID}/stages/reorder`, { order: ids });
      await loadPipelinesKanban();
    } catch (err) { toast(err.message, 'error'); }
  });

  // Save pipeline (create or update) — también guarda etapas con edición abierta
  document.getElementById('plSavePipelineBtn')?.addEventListener('click', async () => {
    const name = document.getElementById('plManageName').value.trim();
    const color = document.getElementById('plManageColor').value;
    const icon = document.getElementById('plManageIcon')?.value || null;
    if (!name) { toast('Escribe el nombre del pipeline', 'error'); return; }
    try {
      // Guardar cualquier edición de etapa que esté abierta
      const openEditRows = document.querySelectorAll('.pl-stage-edit-row:not([hidden])');
      for (const row of openEditRows) {
        const id = row.id.replace('pl-edit-', '');
        const stageName  = row.querySelector(`[data-edit-name-for="${id}"]`)?.value.trim();
        const stageColor = row.querySelector(`[data-edit-color-for="${id}"]`)?.value;
        const stageKind  = row.querySelector(`[data-edit-kind-for="${id}"]`)?.value;
        if (!stageName) { toast('El nombre de la etapa no puede estar vacío', 'error'); return; }
        await api('PATCH', `/api/pipelines/stages/${id}`, { name: stageName, color: stageColor, kind: stageKind });
      }
      // Guardar cualquier asignación de bot que esté abierta
      const openBotRows = document.querySelectorAll('.pl-stage-bot-row:not([hidden])');
      for (const row of openBotRows) {
        const id = row.id.replace('pl-bot-', '');
        const sel = row.querySelector(`[data-bot-select-for="${id}"]`);
        const botId = sel?.value ? Number(sel.value) : null;
        await api('PATCH', `/api/pipelines/stages/${id}`, { bot_id: botId });
      }
      if (PL_MANAGE_ID) {
        await api('PATCH', `/api/pipelines/${PL_MANAGE_ID}`, { name, color, icon });
        toast('Pipeline actualizado', 'success');
      } else {
        const data = await api('POST', '/api/pipelines', { name, color, icon });
        PL_MANAGE_ID = data.item.id;
        PL_ACTIVE_ID = data.item.id;
        toast('Pipeline creado', 'success');
        document.getElementById('plDeletePipelineBtn').hidden = false;
      }
      await loadPipelinesKanban();
      closeManageModal();
    } catch (err) { toast(err.message, 'error'); }
  });

  // Delete pipeline
  document.getElementById('plDeletePipelineBtn')?.addEventListener('click', async () => {
    if (!confirm('¿Eliminar este pipeline y todas sus etapas?')) return;
    try {
      await api('DELETE', `/api/pipelines/${PL_MANAGE_ID}`);
      PL_ACTIVE_ID = null;
      PL_MANAGE_ID = null;
      closeManageModal();
      await loadPipelinesKanban();
      // Refrescar bots: pueden haber quedado con issues "missing_pipeline" o
      // "missing_stage" al borrar el pipeline.
      loadSalsbots().catch(() => {});
      toast('Pipeline eliminado', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });

  // Click card → open expedient detail (from pipelines)
  document.getElementById('plBoard')?.addEventListener('click', async (e) => {
    // Botón de alarma — configura el umbral de estancado de la etapa
    const alarmBtn = e.target.closest('[data-stage-alarm]');
    if (alarmBtn) {
      e.stopPropagation();
      handleStageAlarmClick(Number(alarmBtn.dataset.stageAlarm));
      return;
    }
    // Ícono de error de entrega en tarjeta — abre modal con detalle
    const deliv = e.target.closest('[data-deliv-err-exp]');
    if (deliv) {
      e.stopPropagation();
      const expId = Number(deliv.dataset.delivErrExp);
      const exp = (PL_EXP_CACHE || []).find(x => x.id === expId);
      if (exp?.deliveryFailure) {
        // Construimos un objeto convo-like para reusar el modal
        showDeliveryErrorModal({
          provider: exp.deliveryFailure.provider || 'whatsapp',
          deliveryFailure: exp.deliveryFailure,
        });
      }
      return;
    }
    // Hint del bot — navega al bot builder con el bot abierto.
    // Pasamos returnTo='pipelines' para que el botón "←" devuelva a esta vista.
    const botHint = e.target.closest('[data-go-to-bot]');
    if (botHint) {
      e.stopPropagation();
      const botId = Number(botHint.dataset.goToBot);
      let bot = (sbBots || []).find(b => b.id === botId);
      if (!bot) {
        await loadSalsbots();
        bot = sbBots.find(b => b.id === botId);
      }
      if (bot) { showView('bot'); openBotBuilder(bot, 'pipelines'); }
      else toast('No se encontró el bot', 'error');
      return;
    }
    if (e.target.closest('.pl-card[draggable]') && e.defaultPrevented) return;
    const card = e.target.closest('.pl-card');
    if (!card) return;
    openExpDetail(Number(card.dataset.expId), 'pipelines');
  });
}

// ════════ Estadísticas de bot ════════
async function openBotStatsModal(botId) {
  const modal = document.getElementById('botStatsModal');
  if (!modal) return;
  document.getElementById('botStatsTitle').textContent = 'Cargando estadísticas…';
  document.getElementById('botStatsCards').innerHTML = '';
  document.getElementById('botStatsSpark').innerHTML = '';
  document.getElementById('botStatsHistory').innerHTML = '';
  modal.hidden = false;
  try {
    const data = await api('GET', `/api/bot/${botId}/stats`);
    document.getElementById('botStatsTitle').textContent = `📊 ${data.bot.name}`;
    renderBotStatsResumen(data);
    renderBotStatsHistory(data.history);
  } catch (err) {
    document.getElementById('botStatsTitle').textContent = 'Error';
    const msg = String(err.message || '');
    let friendly;
    if (msg.includes('404')) {
      friendly = '⚠ El endpoint de estadísticas no existe en el server. Probablemente el server local sigue corriendo código viejo — reinícialo y vuelve a intentar.';
    } else if (msg.includes('500')) {
      friendly = `⚠ Error interno del server al calcular las stats. Revisa los logs del server. Detalle: ${escHtml(msg)}`;
    } else {
      friendly = escHtml(msg) || 'Error desconocido cargando stats';
    }
    document.getElementById('botStatsCards').innerHTML = `<div class="bot-stats-error">${friendly}</div>`;
  }
}

function renderBotStatsResumen(data) {
  const m = data.metrics;
  const fmtTs = (ts) => ts ? new Date(ts * 1000).toLocaleString('es-MX', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';
  const cards = [
    { icon: '🎯', label: 'Tasa de conversión', value: `${m.conversionRate}%`, sub: `${m.convertedCount} de ${m.totalRuns} avanzaron de etapa`, accent: m.conversionRate >= 50 ? 'green' : (m.conversionRate >= 25 ? 'amber' : 'red') },
    { icon: '🚀', label: 'Lanzamientos totales', value: m.totalRuns, sub: m.firstRunAt ? `Desde ${fmtTs(m.firstRunAt)}` : 'Aún sin ejecuciones' },
    { icon: '🟢', label: 'Sesiones activas', value: m.activeRuns, sub: 'En ejecución o pausadas ahora' },
    { icon: '✅', label: 'Completadas', value: m.completedRuns, sub: `${m.totalRuns ? Math.round((m.completedRuns/m.totalRuns)*100) : 0}% del total` },
    { icon: '⚠', label: 'Fallidas', value: m.failedRuns, sub: m.failedRuns > 0 ? 'Revisa el historial' : 'Sin errores' },
    { icon: '⛔', label: 'Detenidas', value: m.killedRuns, sub: 'Manualmente o por límite' },
  ];
  document.getElementById('botStatsCards').innerHTML = cards.map(c => `
    <div class="bot-stats-card ${c.accent ? 'accent-' + c.accent : ''}">
      <div class="bot-stats-card-ico">${c.icon}</div>
      <div class="bot-stats-card-val">${escHtml(String(c.value))}</div>
      <div class="bot-stats-card-label">${escHtml(c.label)}</div>
      <div class="bot-stats-card-sub">${escHtml(c.sub)}</div>
    </div>
  `).join('');

  // Sparkline simple — barras verticales por día (últimos 14)
  const days = data.daily || [];
  if (!days.length) {
    document.getElementById('botStatsSpark').innerHTML = '<div class="bot-stats-no-data">Sin datos en los últimos 14 días</div>';
    return;
  }
  const maxN = Math.max(...days.map(d => d.count), 1);
  // Generar grid completa de 14 días para que se vean huecos
  const today = Math.floor(Date.now() / 1000);
  const dayMs = 86400;
  const buckets = [];
  for (let i = 13; i >= 0; i--) {
    const dayStart = today - i * dayMs;
    const date = new Date(dayStart * 1000);
    const dayKey = Math.floor(date.setHours(0,0,0,0) / 1000);
    const found = days.find(d => Math.abs(d.day - dayKey) < dayMs);
    buckets.push({ ts: dayKey, count: found?.count || 0, label: new Date(dayKey * 1000).toLocaleDateString('es-MX', { day: '2-digit', month: 'short' }) });
  }
  document.getElementById('botStatsSpark').innerHTML = buckets.map(b => `
    <div class="bot-stats-spark-col" title="${b.label}: ${b.count} ejecucione${b.count === 1 ? '' : 's'}">
      <div class="bot-stats-spark-bar" style="height:${Math.max(2, (b.count / maxN) * 100)}%"></div>
      <div class="bot-stats-spark-day">${b.label.split(' ')[0]}</div>
    </div>
  `).join('');
}

function renderBotStatsHistory(history) {
  const root = document.getElementById('botStatsHistory');
  if (!history || !history.length) {
    root.innerHTML = '<div class="bot-stats-no-data">Sin ejecuciones registradas todavía.</div>';
    return;
  }
  const fmtRel = (ts) => ts ? relTime(ts) : '—';
  const statusBadge = {
    running: '<span class="bsh-status running">🟢 Corriendo</span>',
    paused:  '<span class="bsh-status paused">⏸ Pausada</span>',
    done:    '<span class="bsh-status done">✅ Completada</span>',
    error:   '<span class="bsh-status error">⚠ Error</span>',
    killed:  '<span class="bsh-status killed">⛔ Detenida</span>',
  };
  const rows = history.map(h => {
    const duration = (h.finishedAt && h.startedAt) ? `${h.finishedAt - h.startedAt}s` : '—';
    return `
      <div class="bsh-row">
        <div class="bsh-when">
          <div class="bsh-when-rel">${fmtRel(h.startedAt)}</div>
          <div class="bsh-when-abs">${new Date(h.startedAt * 1000).toLocaleString('es-MX', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
        </div>
        <div class="bsh-who">
          <div class="bsh-who-name">${escHtml(h.contactName)}</div>
          ${h.contactPhone ? `<div class="bsh-who-phone">${escHtml(h.contactPhone)}</div>` : ''}
          ${h.expedientName ? `<div class="bsh-who-exp">📂 ${escHtml(h.expedientName)}</div>` : ''}
        </div>
        <div class="bsh-progress">
          <div class="bsh-progress-bar"><div class="bsh-progress-fill" style="width:${h.totalSteps ? (h.currentStep/h.totalSteps)*100 : 0}%"></div></div>
          <div class="bsh-progress-text">Paso ${h.currentStep}/${h.totalSteps}</div>
        </div>
        <div class="bsh-status-cell">
          ${statusBadge[h.status] || h.status}
          <div class="bsh-duration">${duration}</div>
          ${h.errorMsg ? `<div class="bsh-err">${escHtml(h.errorMsg)}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
  root.innerHTML = `
    <div class="bsh-head">
      <div>Cuándo</div>
      <div>Quién</div>
      <div>Progreso</div>
      <div>Estado</div>
    </div>
    ${rows}
  `;
}

function setupBotStatsModal() {
  document.querySelectorAll('[data-close-bot-stats]').forEach(el => {
    el.addEventListener('click', () => document.getElementById('botStatsModal').hidden = true);
  });
  document.getElementById('botStatsModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'botStatsModal') document.getElementById('botStatsModal').hidden = true;
  });
  // Tabs
  document.querySelectorAll('.bot-stats-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.statsTab;
      document.querySelectorAll('.bot-stats-tab').forEach(b => b.classList.toggle('is-active', b === btn));
      document.querySelectorAll('.bot-stats-pane').forEach(p => p.classList.toggle('is-active', p.dataset.statsPane === target));
    });
  });
}

// ════════ Sistema de alarmas por etapa ════════
const ALARM_TYPE_LABELS = {
  time_in_stage:        '⏱ Tiempo en la etapa',
  awaiting_our_reply:   '💬 Sin respuesta nuestra',
  no_activity:          '🥶 Lead frío',
  lead_no_reply:        '📤 Lead no respondió',
  missing_tag:          '🏷 Falta etiqueta',
  value_threshold:      '💰 Lead grande estancado',
  bot_paused:           '🤖 Bot pausado',
  empty_field:          '📋 Campo vacío',
};
const ALARM_TYPE_DESCS = {
  time_in_stage:        'El lead lleva más del tiempo permitido sin moverse de esta etapa.',
  awaiting_our_reply:   'El lead te escribió y nadie le ha respondido en el tiempo configurado. La más urgente.',
  no_activity:          'No hay mensajes (entrantes ni salientes) en el chat hace más del tiempo configurado. Lead enfriándose.',
  lead_no_reply:        'Le escribiste al lead y no contestó en el tiempo configurado. Hora de un follow-up.',
  missing_tag:          'El lead lleva en la etapa más del tiempo y no tiene la etiqueta requerida.',
  value_threshold:      'Lead con valor mayor al mínimo lleva tiempo estancado en la etapa. Prioriza los más caros.',
  bot_paused:           'El bot está pausado en este chat hace más del tiempo configurado.',
  empty_field:          'El lead lleva en la etapa más del tiempo y un campo personalizado sigue vacío.',
};
const ALARM_TYPES_NEED_TIME = new Set(['time_in_stage', 'awaiting_our_reply', 'no_activity', 'lead_no_reply', 'missing_tag', 'value_threshold', 'bot_paused', 'empty_field']);

function fmtDuration(seconds) {
  if (!seconds) return '';
  const s = Number(seconds);
  if (s % 86400 === 0) { const n = s / 86400; return `${n}d`; }
  if (s % 3600 === 0)  { const n = s / 3600;  return `${n}h`; }
  if (s % 60 === 0)    { const n = s / 60;    return `${n}m`; }
  return `${s}s`;
}
function alarmShortLabel(type) {
  if (type === 'awaiting_our_reply') return 'Esperando respuesta';
  if (type === 'no_activity')        return 'Lead frío';
  if (type === 'lead_no_reply')      return 'Sin respuesta';
  if (type === 'missing_tag')        return 'Falta etiqueta';
  if (type === 'value_threshold')    return 'Lead grande estancado';
  if (type === 'bot_paused')         return 'Bot pausado';
  if (type === 'empty_field')        return 'Campo vacío';
  return 'Estancado';
}

// Devuelve el array normalizado de alarmas de una etapa. Maneja tanto el
// nuevo modelo multi-alarmas (.alarms) como el legacy (.alarm_type).
function _stageAlarms(stage) {
  if (Array.isArray(stage.alarms) && stage.alarms.length) return stage.alarms;
  if (stage.alarm_type) {
    return [{
      id: 'a1',
      type: stage.alarm_type,
      threshold_seconds: stage.alarm_threshold_seconds || null,
      meta: stage.alarm_meta || {},
    }];
  }
  return [];
}

function alarmButtonLabel(stage) {
  const arr = _stageAlarms(stage);
  if (!arr.length) return 'Alarma';
  if (arr.length === 1) {
    const a = arr[0];
    const ico = (ALARM_TYPE_LABELS[a.type] || '').slice(0, 2);
    const t = a.threshold_seconds ? fmtDuration(a.threshold_seconds) : '';
    return `${ico} ${t}`.trim();
  }
  return `⚠ ${arr.length} alarmas`;
}
function alarmReason(stage) {
  const arr = _stageAlarms(stage);
  if (!arr.length) return '';
  return arr.map(a => {
    const lbl = ALARM_TYPE_LABELS[a.type] || a.type;
    const t = a.threshold_seconds ? ` (${fmtDuration(a.threshold_seconds)})` : '';
    return `${lbl}${t}`;
  }).join(' · ');
}

// Evalúa una sola alarma contra un expediente. Devuelve true si dispara.
function _evalSingleAlarm(alarm, e, nowSec) {
  if (!alarm || !alarm.type) return false;
  const sec  = Number(alarm.threshold_seconds || 0);
  const meta = alarm.meta || {};
  const tIn  = e.stageEnteredAt || e.updatedAt || e.createdAt;
  switch (alarm.type) {
    case 'time_in_stage':
      return sec > 0 && tIn && (nowSec - tIn) > sec;
    case 'awaiting_our_reply': {
      if (!e.lastIncomingAt) return false;
      const leadIsLast = !e.lastMessageAt || e.lastIncomingAt >= e.lastMessageAt - 1;
      return sec > 0 && leadIsLast && (nowSec - e.lastIncomingAt) > sec;
    }
    case 'no_activity': {
      const lastAny = Math.max(e.lastIncomingAt || 0, e.lastMessageAt || 0);
      return sec > 0 && lastAny > 0 && (nowSec - lastAny) > sec;
    }
    case 'lead_no_reply': {
      if (!e.lastMessageAt) return false;
      const weAreLast = !e.lastIncomingAt || e.lastMessageAt > e.lastIncomingAt;
      return sec > 0 && weAreLast && (nowSec - e.lastMessageAt) > sec;
    }
    case 'missing_tag': {
      const tagName = (meta.tag || '').trim().toLowerCase();
      if (!tagName) return false;
      const tags = (e.tags || []).map(t => String(t).toLowerCase());
      if (tags.includes(tagName)) return false;
      return sec > 0 && tIn && (nowSec - tIn) > sec;
    }
    case 'value_threshold': {
      const minVal = Number(meta.minValue || 0);
      if (Number(e.value || 0) < minVal) return false;
      return sec > 0 && tIn && (nowSec - tIn) > sec;
    }
    case 'bot_paused':
      if (!e.botPaused || !e.botPausedAt) return false;
      return sec > 0 && (nowSec - e.botPausedAt) > sec;
    case 'empty_field': {
      const fieldId = Number(meta.fieldId || 0);
      if (!fieldId) return false;
      const fv = (e.fieldValues || []).find(f => Number(f.fieldId) === fieldId);
      const empty = !fv || fv.value == null || String(fv.value).trim() === '';
      if (!empty) return false;
      return sec > 0 && tIn && (nowSec - tIn) > sec;
    }
  }
  return false;
}

// Devuelve true si CUALQUIERA de las alarmas configuradas dispara para el
// expediente. Usado para marcar la card del kanban en rojo.
function evalStageAlarm(stage, e, nowSec) {
  const alarms = _stageAlarms(stage);
  return alarms.some(a => _evalSingleAlarm(a, e, nowSec));
}

// Devuelve el array de alarmas que están disparando ahora — útil para
// mostrar todas las razones simultáneas en tooltip / banner.
function evalStageAlarmsTriggered(stage, e, nowSec) {
  const alarms = _stageAlarms(stage);
  return alarms.filter(a => _evalSingleAlarm(a, e, nowSec));
}

// Convierte cantidad+unidad → segundos
function alarmTimeToSeconds(amount, unit) {
  const n = Number(amount);
  if (!Number.isFinite(n) || n <= 0) return null;
  if (unit === 'days')    return Math.round(n * 86400);
  if (unit === 'hours')   return Math.round(n * 3600);
  if (unit === 'minutes') return Math.round(n * 60);
  return Math.round(n);
}
// Reverso: segundos → mejor unidad legible
function alarmSecondsToTime(seconds) {
  const s = Number(seconds || 0);
  if (s % 86400 === 0 && s >= 86400) return { amount: s / 86400, unit: 'days' };
  if (s % 3600 === 0 && s >= 3600)   return { amount: s / 3600,  unit: 'hours' };
  if (s % 60 === 0 && s >= 60)       return { amount: s / 60,    unit: 'minutes' };
  return { amount: s, unit: 'seconds' };
}

let _alarmEditingStageId = null;
// Estado del modal: array de alarmas en edición. Cada elemento tiene la
// forma { id, type, threshold_seconds, meta }. Se reescriben al guardar.
let _alarmDraft = [];
let _alarmFieldDefs = []; // cache de field-defs para el selector empty_field

async function handleStageAlarmClick(stageId) {
  let stage = null;
  for (const p of PIPELINES || []) {
    const s = p.stages?.find(x => x.id === stageId);
    if (s) { stage = s; break; }
  }
  if (!stage) return;
  _alarmEditingStageId = stageId;
  // Cargar field-defs una vez por apertura (para el selector empty_field)
  try {
    const data = await api('GET', '/api/expedients/field-defs');
    _alarmFieldDefs = data.items || [];
  } catch { _alarmFieldDefs = []; }

  // Hidratar el draft. Si la stage tiene .alarms (multi), úsalo;
  // si no, sintetiza un array de 1 desde los campos legacy.
  let initial = [];
  if (Array.isArray(stage.alarms) && stage.alarms.length) {
    initial = stage.alarms.map((a, i) => ({
      id: a.id || `a${i + 1}`,
      type: a.type,
      threshold_seconds: a.threshold_seconds || null,
      meta: a.meta || {},
    }));
  } else if (stage.alarm_type) {
    initial = [{
      id: 'a1',
      type: stage.alarm_type,
      threshold_seconds: stage.alarm_threshold_seconds || null,
      meta: stage.alarm_meta || {},
    }];
  }
  _alarmDraft = initial;

  document.getElementById('alarmModalStageName').textContent = `· ${stage.name}`;
  renderAlarmsList();
  document.getElementById('alarmModal').hidden = false;
}

function renderAlarmsList() {
  const list = document.getElementById('alarmsList');
  const emptyHint = document.getElementById('alarmsEmptyHint');
  if (!list) return;

  if (!_alarmDraft.length) {
    list.innerHTML = '';
    if (emptyHint) emptyHint.hidden = false;
    return;
  }
  if (emptyHint) emptyHint.hidden = true;

  list.innerHTML = _alarmDraft.map((a, idx) => buildAlarmRowHtml(a, idx)).join('');
}

function buildAlarmRowHtml(a, idx) {
  const type = a.type || '';
  const needsTime = ALARM_TYPES_NEED_TIME.has(type);
  const t = a.threshold_seconds ? alarmSecondsToTime(a.threshold_seconds) : { amount: '', unit: 'hours' };
  const meta = a.meta || {};
  return `
    <div class="alarm-row" data-alarm-idx="${idx}">
      <div class="alarm-row-header">
        <span class="alarm-row-num">#${idx + 1}</span>
        <button type="button" class="alarm-row-del" data-alarm-del="${idx}" title="Quitar esta alarma">×</button>
      </div>
      <label class="form-field">
        <span>Tipo de condición</span>
        <select class="form-input" data-alarm-type="${idx}">
          <option value="">— Selecciona —</option>
          <option value="time_in_stage"      ${type==='time_in_stage'?'selected':''}>⏱ Tiempo en la etapa</option>
          <option value="awaiting_our_reply" ${type==='awaiting_our_reply'?'selected':''}>💬 Sin respuesta nuestra al lead</option>
          <option value="no_activity"        ${type==='no_activity'?'selected':''}>🥶 Sin actividad (lead frío)</option>
          <option value="lead_no_reply"      ${type==='lead_no_reply'?'selected':''}>📤 Lead no respondió</option>
          <option value="missing_tag"        ${type==='missing_tag'?'selected':''}>🏷 Falta etiqueta requerida</option>
          <option value="value_threshold"    ${type==='value_threshold'?'selected':''}>💰 Lead grande estancado</option>
          <option value="bot_paused"         ${type==='bot_paused'?'selected':''}>🤖 Bot pausado mucho tiempo</option>
          <option value="empty_field"        ${type==='empty_field'?'selected':''}>📋 Campo personalizado vacío</option>
        </select>
      </label>
      ${type ? `<p class="alarm-type-desc">${escHtml(ALARM_TYPE_DESCS[type] || '')}</p>` : ''}
      ${needsTime ? `
        <div class="alarm-time-row">
          <label class="form-field" style="flex:1">
            <span>Cantidad</span>
            <input type="number" class="form-input" min="1" placeholder="Ej. 24"
                   value="${escHtml(t.amount)}" data-alarm-time-amt="${idx}" />
          </label>
          <label class="form-field" style="flex:1">
            <span>Unidad</span>
            <select class="form-input" data-alarm-time-unit="${idx}">
              <option value="seconds" ${t.unit==='seconds'?'selected':''}>Segundos</option>
              <option value="minutes" ${t.unit==='minutes'?'selected':''}>Minutos</option>
              <option value="hours"   ${t.unit==='hours'?'selected':''}>Horas</option>
              <option value="days"    ${t.unit==='days'?'selected':''}>Días</option>
            </select>
          </label>
        </div>
      ` : ''}
      ${type === 'missing_tag' ? `
        <label class="form-field">
          <span>Etiqueta que el lead debe tener</span>
          <input type="text" class="form-input" maxlength="40" placeholder="Ej. Cotizado"
                 value="${escHtml(meta.tag || '')}" data-alarm-meta-tag="${idx}" />
        </label>` : ''}
      ${type === 'value_threshold' ? `
        <label class="form-field">
          <span>Valor mínimo del lead ($)</span>
          <input type="number" class="form-input" min="0" step="100" placeholder="Ej. 5000"
                 value="${escHtml(meta.minValue || '')}" data-alarm-meta-minvalue="${idx}" />
        </label>` : ''}
      ${type === 'empty_field' ? `
        <label class="form-field">
          <span>Campo personalizado que debe estar lleno</span>
          <select class="form-input" data-alarm-meta-fieldid="${idx}">
            <option value="">— Selecciona un campo —</option>
            ${_alarmFieldDefs.map(f => `<option value="${f.id}" ${Number(meta.fieldId)===f.id?'selected':''}>${escHtml(f.label)}</option>`).join('')}
          </select>
        </label>` : ''}
    </div>
  `;
}

function _readAlarmDraftFromDom() {
  // Lee inputs visibles del DOM y actualiza _alarmDraft (preserva orden).
  // Esto se llama antes de re-render o de save.
  document.querySelectorAll('[data-alarm-idx]').forEach(rowEl => {
    const idx = Number(rowEl.dataset.alarmIdx);
    const a = _alarmDraft[idx];
    if (!a) return;
    const typeSel = rowEl.querySelector(`[data-alarm-type="${idx}"]`);
    if (typeSel) a.type = typeSel.value;
    const amt = rowEl.querySelector(`[data-alarm-time-amt="${idx}"]`);
    const unit = rowEl.querySelector(`[data-alarm-time-unit="${idx}"]`);
    if (amt && unit) {
      a.threshold_seconds = alarmTimeToSeconds(amt.value, unit.value);
    }
    const tag = rowEl.querySelector(`[data-alarm-meta-tag="${idx}"]`);
    const minV = rowEl.querySelector(`[data-alarm-meta-minvalue="${idx}"]`);
    const fId = rowEl.querySelector(`[data-alarm-meta-fieldid="${idx}"]`);
    a.meta = a.meta || {};
    if (tag)  a.meta.tag = tag.value.trim();
    if (minV) a.meta.minValue = Number(minV.value) || 0;
    if (fId)  a.meta.fieldId = Number(fId.value) || 0;
  });
}

function closeAlarmModal() {
  document.getElementById('alarmModal').hidden = true;
  _alarmEditingStageId = null;
  _alarmDraft = [];
}

async function saveAlarmsFromModal() {
  if (!_alarmEditingStageId) return;
  _readAlarmDraftFromDom();

  // Validar cada alarma
  const valid = [];
  for (const [idx, a] of _alarmDraft.entries()) {
    if (!a.type) continue; // ignorar filas sin tipo seleccionado
    if (ALARM_TYPES_NEED_TIME.has(a.type) && !a.threshold_seconds) {
      toast(`Alarma #${idx + 1}: ingresa una cantidad de tiempo válida`, 'warning');
      return;
    }
    if (a.type === 'missing_tag' && !a.meta?.tag) {
      toast(`Alarma #${idx + 1}: ingresa el nombre de la etiqueta`, 'warning');
      return;
    }
    if (a.type === 'value_threshold' && !(Number(a.meta?.minValue) > 0)) {
      toast(`Alarma #${idx + 1}: ingresa un valor mínimo mayor a 0`, 'warning');
      return;
    }
    if (a.type === 'empty_field' && !Number(a.meta?.fieldId)) {
      toast(`Alarma #${idx + 1}: selecciona un campo personalizado`, 'warning');
      return;
    }
    valid.push({
      id: a.id || `a${valid.length + 1}`,
      type: a.type,
      threshold_seconds: a.threshold_seconds || null,
      meta: a.meta || {},
    });
  }

  try {
    await api('PATCH', `/api/pipelines/stages/${_alarmEditingStageId}`, { alarms: valid });
    closeAlarmModal();
    await loadPipelinesKanban();
    if (valid.length) toast(`${valid.length} alarma${valid.length===1?'':'s'} configurada${valid.length===1?'':'s'}`, 'success');
    else toast('Alarmas removidas', 'success');
  } catch (err) { toast(err.message, 'error'); }
}

function setupAlarmModal() {
  document.querySelectorAll('[data-close-alarm]').forEach(el => {
    el.addEventListener('click', closeAlarmModal);
  });
  document.getElementById('alarmModal')?.addEventListener('click', e => {
    if (e.target.id === 'alarmModal') closeAlarmModal();
  });

  // Re-render cuando cambia el tipo (porque cambian los campos visibles)
  document.getElementById('alarmsList')?.addEventListener('change', (e) => {
    if (e.target.matches('[data-alarm-type]')) {
      _readAlarmDraftFromDom();
      renderAlarmsList();
    }
  });

  // Eliminar una alarma del draft
  document.getElementById('alarmsList')?.addEventListener('click', (e) => {
    const del = e.target.closest('[data-alarm-del]');
    if (del) {
      e.preventDefault();
      _readAlarmDraftFromDom();
      const idx = Number(del.dataset.alarmDel);
      _alarmDraft.splice(idx, 1);
      renderAlarmsList();
    }
  });

  // Agregar nueva alarma vacía
  document.getElementById('alarmAddBtn')?.addEventListener('click', () => {
    _readAlarmDraftFromDom();
    _alarmDraft.push({ id: `a${_alarmDraft.length + 1}`, type: '', threshold_seconds: null, meta: {} });
    renderAlarmsList();
  });

  document.getElementById('alarmSaveBtn')?.addEventListener('click', saveAlarmsFromModal);
}

// ─── Chat search ───
function setupChatSearch() {
  const input = document.querySelector('.rh-search-wrap input');
  if (!input) return;
  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      CHAT_SEARCH = input.value.trim();
      loadConversations();
    }, 300);
  });
}

// Empty state del panel de conversación cuando no hay chat abierto.
function renderChatEmptyState() {
  document.getElementById('rhConvPanel')?.classList.add('rh-empty');
  ACTIVE_CONVO_ID = null;
  // Quitar el highlight 'rh-active' de la lista
  document.querySelectorAll('.rh-chat-item.rh-active').forEach(el => el.classList.remove('rh-active'));
  const root = document.getElementById('rhMessages');
  if (!root) return;
  root.innerHTML = `
    <div class="rh-empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="56" height="56"><path d="M21 15a4 4 0 01-4 4H8l-5 4V7a4 4 0 014-4h10a4 4 0 014 4z"/></svg>
      <h3>Selecciona una conversación</h3>
      <p>Elige un chat del inbox para ver los mensajes y responder.</p>
    </div>`;
}

// El botón back en mobile (rhMobileBackLeft) se maneja en setupMobileChatToggle.

// ─── Banner de activación de notificaciones push en /chats ───
// Aparece dentro del inbox cuando: el navegador soporta push, no hay subscripción
// activa, el permiso no fue denegado, y el usuario no descartó el banner.
async function setupChatPushCta() {
  const cta = document.getElementById('rhPushCta');
  if (!cta) return;
  const btn        = document.getElementById('rhPushCtaBtn');
  const dismissBtn = document.getElementById('rhPushCtaDismiss');
  const titleEl    = document.getElementById('rhPushCtaTitle');
  const textEl     = document.getElementById('rhPushCtaText');

  dismissBtn?.addEventListener('click', () => {
    try { localStorage.setItem('pushCtaDismissed', String(Date.now())); } catch {}
    cta.hidden = true;
  });

  btn?.addEventListener('click', async () => {
    btn.disabled = true; btn.textContent = 'Activando…';
    try {
      const { isIOS, isStandalone } = _detectPushPlatform();
      if (isIOS && !isStandalone) {
        // iOS Safari requiere PWA instalada — no se puede pedir permiso desde el navegador
        toast('Primero instala Wapi101: Compartir → "Añadir a pantalla de inicio". Luego abre la app desde el icono.', 'info', 8000);
        // Mandarlos a la pestaña de Notificaciones para ver instrucciones detalladas
        showView('ajustes');
        document.querySelector('.settings-tab[data-settings="notificaciones"]')?.click();
        return;
      }
      await subscribeToPush();
      toast('Notificaciones activadas ✓', 'success');
      cta.hidden = true;
    } catch (err) {
      toast('Error: ' + err.message, 'error');
    } finally {
      btn.disabled = false; btn.textContent = 'Activar';
      refreshChatPushCta();
    }
  });

  refreshChatPushCta();
}

async function refreshChatPushCta() {
  const cta = document.getElementById('rhPushCta');
  if (!cta) return;

  // Si el usuario lo descartó hace menos de 7 días, no lo mostramos.
  try {
    const dismissed = Number(localStorage.getItem('pushCtaDismissed') || 0);
    if (dismissed && (Date.now() - dismissed) < 7 * 24 * 60 * 60 * 1000) {
      cta.hidden = true;
      return;
    }
  } catch {}

  const titleEl = document.getElementById('rhPushCtaTitle');
  const textEl  = document.getElementById('rhPushCtaText');
  const btn     = document.getElementById('rhPushCtaBtn');

  if (!pushSupported || typeof pushSupported !== 'function' || !pushSupported()) {
    // Si es iOS Safari sin PWA, mostrar guía
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia?.('(display-mode: standalone)')?.matches || window.navigator.standalone;
    if (isIOS && !isStandalone) {
      if (btn) btn.textContent = '📱 Instalar para activar notificaciones';
      cta.hidden = false;
      return;
    }
    cta.hidden = true;
    return;
  }

  if (Notification.permission === 'denied') {
    cta.hidden = true;
    return;
  }

  const sub = await getCurrentPushSubscription();
  if (sub) {
    cta.hidden = true;
    return;
  }

  // Default: invitar a activar (no sobrescribimos textContent — perdería el SVG; el HTML ya tiene el SVG + span)
  cta.hidden = false;
}

// ─── Chat filter pills ───
// Usa data-filter en cada pill para evitar matching frágil por texto.
// Valores: all | unread | pinned | whatsapp | instagram | messenger
function setupChatFilters() {
  document.querySelector('.rh-filter-pills')?.addEventListener('click', (e) => {
    const pill = e.target.closest('.rh-filter-pill');
    if (!pill) return;
    document.querySelectorAll('.rh-filter-pill').forEach((p) => p.classList.remove('rh-active'));
    pill.classList.add('rh-active');
    const f = pill.dataset.filter || 'all';
    CHAT_FILTER_UNREAD   = f === 'unread';
    CHAT_FILTER_PINNED   = f === 'pinned';
    CHAT_FILTER_PROVIDER = ['whatsapp','instagram','messenger'].includes(f) ? f : '';
    loadConversations();
  });
}

// ─── Reply form ───
// Detecta si la ventana de 24h de WhatsApp Business API está cerrada para esta
// conversación. Solo aplica al provider 'whatsapp' (Cloud API). Otros providers
// no tienen esta restricción.
function isWaWindowClosed(convo) {
  if (!convo || convo.provider !== 'whatsapp') return false;
  if (!convo.lastIncomingAt) return true; // nunca nos escribió → solo plantillas
  const elapsedMs = Date.now() - convo.lastIncomingAt * 1000;
  return elapsedMs > 24 * 60 * 60 * 1000;
}

// Activa/desactiva el reply form según el estado de la ventana 24h.
function updateReplyFormState(convo) {
  const form = document.querySelector('.rh-reply-form');
  if (!form) return;
  const textarea = form.querySelector('textarea');
  const sendBtn  = form.querySelector('.rh-send-button');
  const closed = isWaWindowClosed(convo);
  form.classList.toggle('is-window-closed', closed);
  if (textarea) {
    textarea.disabled = closed;
    textarea.placeholder = closed
      ? 'Ventana 24h cerrada — solo plantillas aprobadas'
      : 'Escribe un mensaje…';
  }
  if (sendBtn) sendBtn.disabled = closed;

  let banner = form.querySelector('.rh-window-closed-banner');
  if (closed) {
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'rh-window-closed-banner';
      banner.innerHTML = `
        <span class="rh-wcb-icon">⏰</span>
        <div class="rh-wcb-text">
          <strong>Ventana de 24h cerrada</strong>
          <span>Han pasado más de 24 horas desde el último mensaje del lead. Solo puedes enviar <em>plantillas aprobadas</em> por Meta.</span>
        </div>
        <button type="button" class="rh-wcb-btn" data-rh-wcb-tpl>📋 Enviar plantilla</button>
      `;
      form.prepend(banner);
      banner.querySelector('[data-rh-wcb-tpl]')?.addEventListener('click', () => {
        document.getElementById('rhTplTrigger')?.click();
      });
    }
    banner.hidden = false;
  } else if (banner) {
    banner.remove();
  }
}

// Re-evalúa el estado del reply form usando la conversación activa actual.
function refreshReplyFormState() {
  const convo = CONVERSATIONS.find(c => c.id === ACTIVE_CONVO_ID);
  updateReplyFormState(convo);
}

// ════════ Reportes / Soporte ════════
let _reportsCache = [];
let _reportsFilter = '';
let _reportPendingFiles = []; // [{ data, mimetype, filename, size }]

const REPORT_TYPE_LABELS  = { bug: '🐛 Bug', design: '🎨 Diseño', suggestion: '💡 Sugerencia', question: '❓ Pregunta' };
const REPORT_PRIORITY_LABELS = { low: 'Baja', medium: 'Media', high: 'Alta', urgent: 'Urgente' };
const REPORT_STATUS_LABELS   = { open: 'Abierto', in_progress: 'En progreso', resolved: 'Resuelto', wontfix: 'No se hará' };

async function loadReports() {
  try {
    const params = _reportsFilter ? `?status=${_reportsFilter}` : '';
    const data = await api('GET', `/api/reports${params}`);
    _reportsCache = data.items || [];
    renderReportsList();
  } catch (err) {
    console.error('loadReports', err);
    toast(err.message, 'error');
  }
}

function renderReportsList() {
  const root = document.getElementById('reportsList');
  const empty = document.getElementById('reportsEmpty');
  if (!root) return;
  if (_reportsCache.length === 0) {
    root.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  root.innerHTML = _reportsCache.map(r => {
    const dt = new Date(r.createdAt * 1000).toLocaleString('es-MX', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    const att = (r.attachments || []).length;
    return `
      <div class="report-card status-${r.status}" data-report-id="${r.id}">
        <div class="report-card-head">
          <span class="report-type">${REPORT_TYPE_LABELS[r.type] || r.type}</span>
          <span class="report-prio prio-${r.priority}">${REPORT_PRIORITY_LABELS[r.priority] || r.priority}</span>
          <span class="report-status status-${r.status}">${REPORT_STATUS_LABELS[r.status] || r.status}</span>
          ${att > 0 ? `<span class="report-attach-count">📎 ${att}</span>` : ''}
        </div>
        <div class="report-title">${escapeHtml(r.title)}</div>
        ${r.body ? `<div class="report-body-preview">${escapeHtml(r.body.slice(0, 160))}${r.body.length > 160 ? '…' : ''}</div>` : ''}
        <div class="report-meta">
          <span>${escapeHtml(r.advisorName || 'Asesor')}</span>
          <span>·</span>
          <span>${dt}</span>
        </div>
      </div>`;
  }).join('');
}

function setupReportsUI() {
  // Click en filtro de status
  document.getElementById('reportsFilters')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-rfilter]');
    if (!btn) return;
    document.querySelectorAll('#reportsFilters .reports-filter').forEach(b => b.classList.toggle('is-active', b === btn));
    _reportsFilter = btn.dataset.rfilter;
    loadReports();
  });

  // Click en una card de reporte → abrir detalle
  document.getElementById('reportsList')?.addEventListener('click', (e) => {
    const card = e.target.closest('[data-report-id]');
    if (!card) return;
    openReportDetail(Number(card.dataset.reportId));
  });

  // Botón nuevo reporte
  document.getElementById('reportNewBtn')?.addEventListener('click', openReportNewModal);
  document.querySelectorAll('[data-close-report]').forEach(el => el.addEventListener('click', closeReportNewModal));
  document.getElementById('reportModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'reportModal') closeReportNewModal();
  });
  document.querySelectorAll('[data-close-report-detail]').forEach(el => el.addEventListener('click', () => {
    document.getElementById('reportDetailModal').hidden = true;
  }));
  document.getElementById('reportDetailModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'reportDetailModal') document.getElementById('reportDetailModal').hidden = true;
  });

  // File picker para adjuntos
  document.getElementById('reportFiles')?.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach(f => {
      if (f.size > 50 * 1024 * 1024) {
        toast(`${f.name} excede los 50MB, se omite`, 'warning');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        _reportPendingFiles.push({
          data: reader.result,
          mimetype: f.type || 'application/octet-stream',
          filename: f.name,
          size: f.size,
        });
        renderReportFilesList();
      };
      reader.readAsDataURL(f);
    });
    e.target.value = '';
  });

  // Submit
  document.getElementById('reportSubmitBtn')?.addEventListener('click', submitReport);
}

function renderReportFilesList() {
  const root = document.getElementById('reportFilesList');
  if (!root) return;
  root.innerHTML = _reportPendingFiles.map((f, i) => `
    <div class="report-file-chip">
      <span>${f.mimetype.startsWith('video/') ? '🎬' : '📷'} ${escapeHtml(f.filename)} (${(f.size/1024).toFixed(0)}KB)</span>
      <button type="button" data-remove-rf="${i}">×</button>
    </div>`).join('');
  root.querySelectorAll('[data-remove-rf]').forEach(btn => {
    btn.addEventListener('click', () => {
      _reportPendingFiles.splice(Number(btn.dataset.removeRf), 1);
      renderReportFilesList();
    });
  });
}

function openReportNewModal() {
  document.getElementById('reportModal').hidden = false;
  document.getElementById('reportTitle').value = '';
  document.getElementById('reportBody').value = '';
  document.getElementById('reportType').value = 'bug';
  document.getElementById('reportPriority').value = 'medium';
  _reportPendingFiles = [];
  renderReportFilesList();
  setTimeout(() => document.getElementById('reportTitle')?.focus(), 80);
}

function closeReportNewModal() {
  document.getElementById('reportModal').hidden = true;
  _reportPendingFiles = [];
}

async function submitReport() {
  const title = document.getElementById('reportTitle').value.trim();
  if (!title) { toast('Ingresa un título', 'warning'); return; }
  const body = document.getElementById('reportBody').value.trim();
  const type = document.getElementById('reportType').value;
  const priority = document.getElementById('reportPriority').value;
  const btn = document.getElementById('reportSubmitBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }
  try {
    await api('POST', '/api/reports', { type, priority, title, body, attachments: _reportPendingFiles });
    closeReportNewModal();
    toast('Reporte enviado. Gracias por la retroalimentación.', 'success');
    loadReports();
  } catch (err) {
    toast(err.message || 'Error enviando reporte', 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar reporte'; }
  }
}

async function openReportDetail(id) {
  try {
    const data = await api('GET', `/api/reports/${id}`);
    const r = data.item;
    if (!r) return;
    const modal = document.getElementById('reportDetailModal');
    const titleEl = document.getElementById('reportDetailTitle');
    const bodyEl = document.getElementById('reportDetailBody');
    titleEl.textContent = r.title;
    const dt = new Date(r.createdAt * 1000).toLocaleString('es-MX');
    const attHtml = (r.attachments || []).map(a => {
      if (a.mimetype?.startsWith('image/')) {
        return `<a href="${escapeHtml(a.url)}" target="_blank"><img src="${escapeHtml(a.url)}" class="report-attach-img" /></a>`;
      }
      if (a.mimetype?.startsWith('video/')) {
        return `<video src="${escapeHtml(a.url)}" controls class="report-attach-video"></video>`;
      }
      return `<a href="${escapeHtml(a.url)}" target="_blank">${escapeHtml(a.filename || 'adjunto')}</a>`;
    }).join('');
    const isAdmin = getAdvisor()?.role === 'admin';
    const adminControls = isAdmin ? `
      <div class="report-admin-controls">
        <select id="reportStatusSelect">
          ${Object.entries(REPORT_STATUS_LABELS).map(([k,v]) => `<option value="${k}" ${r.status === k ? 'selected' : ''}>${v}</option>`).join('')}
        </select>
        <textarea id="reportAdminResponse" rows="3" placeholder="Respuesta para el asesor (opcional)">${escapeHtml(r.adminResponse || '')}</textarea>
        <button class="btn btn--primary btn--sm" id="reportAdminSaveBtn">Guardar</button>
      </div>` : (r.adminResponse ? `
      <div class="report-admin-response">
        <strong>Respuesta del admin:</strong>
        <p>${escapeHtml(r.adminResponse)}</p>
      </div>` : '');

    bodyEl.innerHTML = `
      <div class="report-detail-meta">
        <span>${REPORT_TYPE_LABELS[r.type]}</span> ·
        <span>Prioridad: ${REPORT_PRIORITY_LABELS[r.priority]}</span> ·
        <span class="report-status status-${r.status}">${REPORT_STATUS_LABELS[r.status]}</span>
      </div>
      <div class="report-detail-meta-2">${escapeHtml(r.advisorName || 'Asesor')} · ${dt}</div>
      ${r.body ? `<div class="report-detail-body">${escapeHtml(r.body).replace(/\n/g, '<br>')}</div>` : ''}
      ${attHtml ? `<div class="report-detail-attachments">${attHtml}</div>` : ''}
      ${adminControls}
    `;
    modal.hidden = false;

    if (isAdmin) {
      document.getElementById('reportAdminSaveBtn')?.addEventListener('click', async () => {
        const status = document.getElementById('reportStatusSelect').value;
        const adminResponse = document.getElementById('reportAdminResponse').value.trim();
        try {
          await api('PATCH', `/api/reports/${id}`, { status, adminResponse });
          toast('Reporte actualizado', 'success');
          modal.hidden = true;
          loadReports();
        } catch (err) { toast(err.message, 'error'); }
      });
    }
  } catch (err) {
    toast(err.message, 'error');
  }
}

// ════════ Negocio: horarios maestros + por asesor ════════
const BIZ_DAYS = [
  { dow: 1, label: 'Lunes' },
  { dow: 2, label: 'Martes' },
  { dow: 3, label: 'Miércoles' },
  { dow: 4, label: 'Jueves' },
  { dow: 5, label: 'Viernes' },
  { dow: 6, label: 'Sábado' },
  { dow: 0, label: 'Domingo' },
];

let _bizMasterItems  = [];   // [{ dayOfWeek, openTime, closeTime, isClosed }]
let _bizAdvisorItems = [];   // [{ dayOfWeek, effectiveOpen, effectiveClose, effectiveClosed, isOff }]
let _bizAdvisorId    = null;

function bizRowHTML(day, row, scope) {
  // scope: 'master' | 'advisor'
  let closed, open, close;
  if (scope === 'master') {
    closed = !!(row && row.isClosed);
    open   = (row && row.openTime)  || '09:00';
    close  = (row && row.closeTime) || '18:00';
  } else {
    closed = !!(row && (row.effectiveClosed || row.isOff));
    open   = (row && (row.effectiveOpen  || row.openTime))  || '09:00';
    close  = (row && (row.effectiveClose || row.closeTime)) || '18:00';
  }
  return `
    <div class="biz-row ${closed ? 'is-closed' : ''}" data-dow="${day.dow}">
      <label class="biz-row-day">
        <input type="checkbox" ${closed ? '' : 'checked'} data-biz-open>
        <span>${day.label}</span>
      </label>
      <div class="biz-row-times">
        ${closed
          ? '<span class="biz-row-closed-tag">Cerrado</span>'
          : `<input type="time" value="${open}" data-biz-time="open">
             <span>—</span>
             <input type="time" value="${close}" data-biz-time="close">`
        }
      </div>
    </div>
  `;
}

function renderBizMaster() {
  const root = document.getElementById('bizMaster');
  if (!root) return;
  const byDow = {};
  (_bizMasterItems || []).forEach(h => { byDow[h.dayOfWeek] = h; });
  root.innerHTML = BIZ_DAYS.map(d => bizRowHTML(d, byDow[d.dow], 'master')).join('');
}

function renderBizAdvisor() {
  const root = document.getElementById('bizAdvisor');
  if (!root) return;
  if (!_bizAdvisorId) {
    root.hidden = true;
    document.getElementById('bizAdvisorActions').hidden = true;
    return;
  }
  root.hidden = false;
  document.getElementById('bizAdvisorActions').hidden = false;
  const byDow = {};
  (_bizAdvisorItems || []).forEach(h => { byDow[h.dayOfWeek] = h; });
  root.innerHTML = BIZ_DAYS.map(d => bizRowHTML(d, byDow[d.dow], 'advisor')).join('');
}

function readBizRows(rootId, scope) {
  const root = document.getElementById(rootId);
  if (!root) return [];
  const out = [];
  root.querySelectorAll('.biz-row').forEach(el => {
    const dow = Number(el.dataset.dow);
    const isOpen = el.querySelector('[data-biz-open]')?.checked;
    if (!isOpen) {
      if (scope === 'master') out.push({ dayOfWeek: dow, isClosed: true, openTime: null, closeTime: null });
      else                    out.push({ dayOfWeek: dow, isOff: true, openTime: null, closeTime: null });
    } else {
      const openTime  = el.querySelector('[data-biz-time="open"]')?.value  || '09:00';
      const closeTime = el.querySelector('[data-biz-time="close"]')?.value || '18:00';
      if (scope === 'master') out.push({ dayOfWeek: dow, isClosed: false, openTime, closeTime });
      else                    out.push({ dayOfWeek: dow, isOff: false, openTime, closeTime });
    }
  });
  return out;
}

async function loadBusinessAdvisors() {
  const sel = document.getElementById('bizAdvisorSelect');
  if (!sel) return;
  try {
    const data = await api('GET', '/api/advisors/list-min');
    const items = data.items || [];
    sel.innerHTML = '<option value="">— Selecciona un asesor —</option>'
      + items.map(a => `<option value="${a.id}">${escapeHtml(a.name || a.username || ('#' + a.id))}</option>`).join('');
  } catch (err) {
    console.error('loadBusinessAdvisors', err);
  }
}

async function loadBusinessHours() {
  try {
    const data = await api('GET', '/api/business/hours');
    _bizMasterItems = data.items || [];
    renderBizMaster();
    await Promise.all([loadBusinessAdvisors(), loadBusinessProfile()]);
    // limpiar override si ya estaba abierto
    _bizAdvisorId = null;
    _bizAdvisorItems = [];
    const sel = document.getElementById('bizAdvisorSelect');
    if (sel) sel.value = '';
    renderBizAdvisor();
  } catch (err) {
    console.error('loadBusinessHours', err);
    toast(err.message, 'error');
  }
}

// ─── Perfil del negocio (nombre, slug, URL, tel, dirección, logo) ───
let _bizProfileCache = null;

async function loadBusinessProfile() {
  try {
    const data = await api('GET', '/api/business/profile');
    _bizProfileCache = data.profile || null;
    renderBusinessProfile();
  } catch (err) {
    console.error('loadBusinessProfile', err);
  }
}

function renderBusinessProfile() {
  const p = _bizProfileCache;
  if (!p) return;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.value = v ?? ''; };
  set('bizProfileName',    p.displayName);
  set('bizProfileSlug',    p.slug);
  set('bizProfileUrl',     p.url);
  set('bizProfilePhone',   p.phone);
  set('bizProfileAddress', p.address);
  const hiddenLogo = document.getElementById('bizProfileLogo');
  if (hiddenLogo) hiddenLogo.value = p.logoUrl || '';

  // Prefijo dinámico según el host actual (wapi101.com/, localhost/, etc.)
  const prefixEl = document.getElementById('bizSlugPrefix');
  if (prefixEl) prefixEl.textContent = `${location.host}/`;

  updateLogoPreview(p.logoUrl);
}

function updateLogoPreview(url) {
  const el = document.getElementById('bizLogoPreview');
  if (!el) return;
  if (url) {
    el.style.backgroundImage = `url("${url.replace(/"/g, '&quot;')}")`;
    el.classList.remove('is-empty');
  } else {
    el.style.backgroundImage = '';
    el.classList.add('is-empty');
  }
  const removeBtn = document.getElementById('bizLogoRemoveBtn');
  if (removeBtn) removeBtn.hidden = !url;
  applyBrandLogo(url);
}

function applyBrandLogo(url) {
  const mark = document.querySelector('.brand-mark');
  if (!mark) return;
  if (url) {
    mark.style.backgroundImage = `url("${url.replace(/"/g, '&quot;')}")`;
    mark.style.backgroundSize = 'cover';
    mark.style.backgroundPosition = 'center';
    mark.textContent = '';
  } else {
    mark.style.backgroundImage = '';
    mark.style.backgroundSize = '';
    mark.style.backgroundPosition = '';
    mark.textContent = 'W';
  }
}

async function uploadBusinessLogo(file) {
  const MAX = 2 * 1024 * 1024;
  if (file.size > MAX) { toast('El logo no puede superar 2 MB', 'error'); return; }
  const reader = new FileReader();
  reader.onload = async (e) => {
    const label = document.querySelector('.biz-logo-file-label');
    if (label) { label.textContent = '⏳ Subiendo…'; label.style.pointerEvents = 'none'; }
    try {
      const data = await api('POST', '/api/business/logo', { data: e.target.result, mimetype: file.type });
      const url = data.logoUrl;
      const hidden = document.getElementById('bizProfileLogo');
      if (hidden) hidden.value = url;
      updateLogoPreview(url);
      _bizProfileCache = data.profile || _bizProfileCache;
      toast('Logo guardado', 'success');
    } catch (err) {
      toast(err.message || 'Error al subir logo', 'error');
    } finally {
      if (label) { label.textContent = '📁 Subir imagen'; label.style.pointerEvents = ''; }
    }
  };
  reader.readAsDataURL(file);
}

async function saveBusinessProfile() {
  const payload = {
    displayName: document.getElementById('bizProfileName')?.value.trim() || '',
    slug:        document.getElementById('bizProfileSlug')?.value.trim().toLowerCase() || '',
    url:         document.getElementById('bizProfileUrl')?.value.trim() || '',
    phone:       document.getElementById('bizProfilePhone')?.value.trim() || '',
    address:     document.getElementById('bizProfileAddress')?.value.trim() || '',
    logoUrl:     document.getElementById('bizProfileLogo')?.value.trim() || '',
  };
  const btn = document.getElementById('bizProfileSaveBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Guardando…'; }
  try {
    const data = await api('PUT', '/api/business/profile', payload);
    _bizProfileCache = data.profile || null;
    renderBusinessProfile();
    toast('Perfil del negocio guardado', 'success');
  } catch (err) {
    toast(err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Guardar perfil del negocio'; }
  }
}

async function saveBizMaster() {
  try {
    const hours = readBizRows('bizMaster', 'master');
    const data = await api('PUT', '/api/business/hours', { hours });
    _bizMasterItems = data.items || hours;
    toast('Horario del negocio guardado', 'success');
    renderBizMaster();
  } catch (err) {
    toast(err.message, 'error');
  }
}

async function loadAdvisorBizHours(advisorId) {
  try {
    const data = await api('GET', `/api/business/advisors/${advisorId}/hours`);
    _bizAdvisorItems = data.items || [];
    _bizAdvisorId = advisorId;
    renderBizAdvisor();
  } catch (err) {
    toast(err.message, 'error');
  }
}

async function saveBizAdvisor() {
  if (!_bizAdvisorId) return;
  try {
    const hours = readBizRows('bizAdvisor', 'advisor');
    const data = await api('PUT', `/api/business/advisors/${_bizAdvisorId}/hours`, { hours });
    _bizAdvisorItems = data.items || _bizAdvisorItems;
    toast('Horario del asesor guardado', 'success');
    renderBizAdvisor();
  } catch (err) {
    toast(err.message, 'error');
  }
}

function setupBusinessUI() {
  const masterRoot = document.getElementById('bizMaster');
  if (masterRoot) {
    // toggle abierto/cerrado en master → re-render row
    masterRoot.addEventListener('change', (e) => {
      if (e.target.matches('[data-biz-open]')) {
        // capturar estado actual del DOM y re-renderizar
        _bizMasterItems = readBizRows('bizMaster', 'master');
        renderBizMaster();
      }
    });
  }
  document.getElementById('bizMasterSaveBtn')?.addEventListener('click', saveBizMaster);

  const sel = document.getElementById('bizAdvisorSelect');
  sel?.addEventListener('change', () => {
    const id = Number(sel.value);
    if (!id) {
      _bizAdvisorId = null;
      _bizAdvisorItems = [];
      renderBizAdvisor();
      return;
    }
    loadAdvisorBizHours(id);
  });

  const advRoot = document.getElementById('bizAdvisor');
  if (advRoot) {
    advRoot.addEventListener('change', (e) => {
      if (e.target.matches('[data-biz-open]')) {
        const cur = readBizRows('bizAdvisor', 'advisor');
        // re-mapear a forma effective* para mantener render consistente
        _bizAdvisorItems = cur.map(r => ({
          dayOfWeek: r.dayOfWeek,
          effectiveOpen: r.openTime,
          effectiveClose: r.closeTime,
          effectiveClosed: !!r.isOff,
          isOff: !!r.isOff,
        }));
        renderBizAdvisor();
      }
    });
  }
  document.getElementById('bizAdvisorSaveBtn')?.addEventListener('click', saveBizAdvisor);

  // Perfil del negocio
  document.getElementById('bizProfileSaveBtn')?.addEventListener('click', saveBusinessProfile);
  document.getElementById('bizLogoFile')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) uploadBusinessLogo(file);
    e.target.value = '';
  });
  document.getElementById('bizLogoRemoveBtn')?.addEventListener('click', async () => {
    try {
      const data = await api('PUT', '/api/business/profile', { ...(_bizProfileCache || {}), logoUrl: '' });
      _bizProfileCache = data.profile || null;
      const hidden = document.getElementById('bizProfileLogo');
      if (hidden) hidden.value = '';
      updateLogoPreview('');
      toast('Logo eliminado', 'success');
    } catch (err) { toast(err.message, 'error'); }
  });
}

// ════════ Menú contextual (click derecho) en chat list ════════
let _ctxConvoId = null;

function openChatContextMenu(x, y, convoId) {
  const menu = document.getElementById('rhChatCtxMenu');
  if (!menu) return;
  _ctxConvoId = convoId;
  const convo = CONVERSATIONS.find(c => c.id === convoId);
  if (!convo) return;

  // Actualizar labels dinámicos según estado
  const labelPin = menu.querySelector('[data-ctx-label-pin]');
  const labelBot = menu.querySelector('[data-ctx-label-bot]');
  const labelMute = menu.querySelector('[data-ctx-label-mute]');
  const labelArchive = menu.querySelector('[data-ctx-label-archive]');
  if (labelPin)  labelPin.textContent  = convo.pinned ? 'Desfijar' : 'Fijar';
  if (labelBot)  labelBot.textContent  = convo.botPaused ? 'Reanudar bot' : 'Pausar bot';
  if (labelMute) {
    const muted = convo.mutedUntil && convo.mutedUntil * 1000 > Date.now();
    labelMute.textContent = muted ? 'Quitar silencio' : 'Silenciar 1h';
  }
  if (labelArchive) labelArchive.textContent = convo.archived ? 'Desarchivar' : 'Archivar';

  // Posicionar y mostrar
  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.hidden = false;

  // Si se sale del viewport, ajustar
  requestAnimationFrame(() => {
    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) menu.style.left = `${x - rect.width}px`;
    if (rect.bottom > window.innerHeight) menu.style.top = `${y - rect.height}px`;
  });
}

function closeChatContextMenu() {
  const menu = document.getElementById('rhChatCtxMenu');
  if (menu) menu.hidden = true;
  _ctxConvoId = null;
}

async function handleChatContextAction(action) {
  if (!_ctxConvoId) return;
  const convoId = _ctxConvoId;
  const convo = CONVERSATIONS.find(c => c.id === convoId);
  if (!convo) return;
  closeChatContextMenu();
  try {
    switch (action) {
      case 'pin':
        await api('PATCH', `/api/conversations/${convoId}/pin`, { pinned: !convo.pinned });
        await loadConversations();
        toast(convo.pinned ? 'Desfijado' : 'Fijado al inicio', 'success');
        break;
      case 'markUnread':
        await api('PATCH', `/api/conversations/${convoId}/unread`);
        await loadConversations();
        toast('Marcado como no leído', 'success');
        break;
      case 'bot': {
        const newPaused = !convo.botPaused;
        await api('PATCH', `/api/conversations/${convoId}/bot-paused`, { paused: newPaused });
        await loadConversations();
        toast(newPaused ? 'Bot pausado' : 'Bot reanudado', 'success');
        break;
      }
      case 'contact':
        if (convo.contactId) openContactCardFromChat(convo.contactId);
        break;
      case 'expedient': {
        const exp = (PL_EXP_CACHE || []).find(e => e.contactId === convo.contactId && (e.stageKind === 'in_progress' || !e.stageKind));
        if (exp) openExpDetail(exp.id, 'chats');
        else toast('Este contacto no tiene lead abierto', 'info');
        break;
      }
      case 'copyPhone':
        try {
          await navigator.clipboard.writeText(convo.phone || convo.contactPhone || '');
          toast('Teléfono copiado', 'success');
        } catch { toast('No se pudo copiar al portapapeles', 'error'); }
        break;
      case 'mute': {
        const muted = convo.mutedUntil && convo.mutedUntil * 1000 > Date.now();
        const until = muted ? null : Math.floor(Date.now() / 1000) + 3600;
        await api('PATCH', `/api/conversations/${convoId}/mute`, { until });
        await loadConversations();
        toast(muted ? 'Notificaciones reactivadas' : 'Silenciado por 1 hora', 'success');
        break;
      }
      case 'archive': {
        const newArchived = !convo.archived;
        await api('PATCH', `/api/conversations/${convoId}/archive`, { archived: newArchived });
        await loadConversations();
        toast(newArchived ? 'Conversación archivada' : 'Desarchivada', 'success');
        break;
      }
    }
  } catch (err) { toast(err.message || 'Error', 'error'); }
}

function setupChatContextMenu() {
  const list = document.getElementById('rhChatList');
  const menu = document.getElementById('rhChatCtxMenu');
  if (!list || !menu) return;

  // Click derecho desktop
  list.addEventListener('contextmenu', (e) => {
    const item = e.target.closest('.rh-chat-item');
    if (!item) return;
    e.preventDefault();
    openChatContextMenu(e.clientX, e.clientY, Number(item.dataset.id));
  });

  // Long-press móvil (500ms)
  let longPressTimer = null;
  let startedAt = 0;
  list.addEventListener('touchstart', (e) => {
    const item = e.target.closest('.rh-chat-item');
    if (!item) return;
    startedAt = Date.now();
    longPressTimer = setTimeout(() => {
      const t = e.touches[0];
      openChatContextMenu(t.clientX, t.clientY, Number(item.dataset.id));
    }, 500);
  }, { passive: true });
  list.addEventListener('touchend', () => { clearTimeout(longPressTimer); });
  list.addEventListener('touchmove', () => { clearTimeout(longPressTimer); });

  // Click en una opción del menú
  menu.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-ctx-action]');
    if (!btn) return;
    e.stopPropagation();
    handleChatContextAction(btn.dataset.ctxAction);
  });

  // Cerrar al hacer click fuera o presionar Esc
  document.addEventListener('click', (e) => {
    if (menu.hidden) return;
    if (!menu.contains(e.target)) closeChatContextMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeChatContextMenu();
  });
  // Cerrar al hacer scroll
  list.addEventListener('scroll', closeChatContextMenu, { passive: true });
}

// ════════ Personal tags (modo /chat) — etiquetas privadas por asesor ════════
let _personalTags = [];           // todas mis etiquetas
let _personalTagsForContact = []; // las asignadas al contacto activo

const PERSONAL_TAG_COLORS = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#14b8a6','#f97316','#0f172a','#facc15','#84cc16','#06b6d4'];

async function loadPersonalTags() {
  if (!window.PERSONAL_MODE) return;
  try {
    const data = await api('GET', '/api/personal-chat/tags');
    _personalTags = data.items || [];
  } catch (err) { console.error('loadPersonalTags', err); _personalTags = []; }
}

async function loadPersonalTagsForContact(contactId) {
  if (!window.PERSONAL_MODE || !contactId) { _personalTagsForContact = []; return; }
  try {
    const data = await api('GET', `/api/personal-chat/contacts/${contactId}/tags`);
    _personalTagsForContact = data.items || [];
  } catch (err) { console.error('loadPersonalTagsForContact', err); _personalTagsForContact = []; }
}

function renderPersonalTagsPopover() {
  const assignedRoot = document.getElementById('rhPtpAssigned');
  const suggestRoot  = document.getElementById('rhPtpSuggest');
  const countEl = document.getElementById('rhPersonalTagsCount');
  if (!assignedRoot || !suggestRoot) return;

  // Pills asignadas
  if (_personalTagsForContact.length === 0) {
    assignedRoot.innerHTML = '<span class="rh-ptp-empty">Sin etiquetas asignadas</span>';
  } else {
    assignedRoot.innerHTML = _personalTagsForContact.map(t => `
      <span class="rh-ptp-pill" style="background:${escapeHtml(t.color)};color:#fff">
        ${escapeHtml(t.name)}
        <button type="button" class="rh-ptp-pill-x" data-unassign-tag="${t.id}" aria-label="Quitar">×</button>
      </span>`).join('');
  }

  // Sugerencias = todas mis etiquetas que no estén ya asignadas
  const assignedIds = new Set(_personalTagsForContact.map(t => t.id));
  const available = _personalTags.filter(t => !assignedIds.has(t.id));
  if (available.length === 0) {
    suggestRoot.innerHTML = _personalTags.length
      ? '<span class="rh-ptp-empty">Ya asignaste todas las que tienes</span>'
      : '<span class="rh-ptp-empty">Aún no creas ninguna — escríbela arriba</span>';
  } else {
    suggestRoot.innerHTML = `<div class="rh-ptp-suggest-label">Asignar existentes:</div>` +
      available.map(t => `
        <button type="button" class="rh-ptp-suggest-btn" data-assign-tag="${t.id}" style="background:${escapeHtml(t.color)};color:#fff">
          ${escapeHtml(t.name)}
        </button>`).join('');
  }

  // Badge con número en el botón
  if (countEl) {
    if (_personalTagsForContact.length > 0) {
      countEl.textContent = _personalTagsForContact.length;
      countEl.hidden = false;
    } else {
      countEl.hidden = true;
    }
  }
}

async function _personalAssignTag(contactId, tagId) {
  try {
    await api('POST', `/api/personal-chat/contacts/${contactId}/tags`, { tagId });
    await loadPersonalTagsForContact(contactId);
    renderPersonalTagsPopover();
  } catch (err) { toast(err.message, 'error'); }
}

async function _personalUnassignTag(contactId, tagId) {
  try {
    await api('DELETE', `/api/personal-chat/contacts/${contactId}/tags/${tagId}`);
    await loadPersonalTagsForContact(contactId);
    renderPersonalTagsPopover();
  } catch (err) { toast(err.message, 'error'); }
}

async function _personalCreateAndAssign(contactId, name) {
  const trimmed = String(name || '').trim();
  if (!trimmed) return;
  // Si ya existe (case insensitive), reusar
  const existing = _personalTags.find(t => t.name.toLowerCase() === trimmed.toLowerCase());
  if (existing) {
    if (!_personalTagsForContact.find(t => t.id === existing.id)) {
      await _personalAssignTag(contactId, existing.id);
    }
    return;
  }
  const color = PERSONAL_TAG_COLORS[Math.floor(Math.random() * PERSONAL_TAG_COLORS.length)];
  try {
    const created = await api('POST', '/api/personal-chat/tags', { name: trimmed, color });
    await loadPersonalTags();
    if (created?.id) await _personalAssignTag(contactId, created.id);
  } catch (err) { toast(err.message, 'error'); }
}

function setupPersonalTagsUI() {
  if (!window.PERSONAL_MODE) return;
  const wrap = document.getElementById('rhPersonalTagsWrap');
  const btn  = document.getElementById('rhPersonalTagsBtn');
  const pop  = document.getElementById('rhPersonalTagsPopover');
  const input = document.getElementById('rhPtpInput');
  if (!wrap || !btn || !pop) return;
  wrap.hidden = false;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    pop.hidden = !pop.hidden;
    if (!pop.hidden) {
      renderPersonalTagsPopover();
      setTimeout(() => input?.focus(), 50);
    }
  });
  document.addEventListener('click', (e) => {
    if (pop.hidden) return;
    if (!pop.contains(e.target) && e.target !== btn && !btn.contains(e.target)) pop.hidden = true;
  });

  // Click × en pill asignada → quitar
  pop.addEventListener('click', async (e) => {
    const remove = e.target.closest('[data-unassign-tag]');
    if (remove) {
      e.stopPropagation();
      const tagId = Number(remove.dataset.unassignTag);
      await _personalUnassignTag(_chatContactId, tagId);
      return;
    }
    const assign = e.target.closest('[data-assign-tag]');
    if (assign) {
      e.stopPropagation();
      const tagId = Number(assign.dataset.assignTag);
      await _personalAssignTag(_chatContactId, tagId);
      setTimeout(() => input?.focus(), 0);
    }
  });

  // Coma o Enter → crear + asignar
  input.addEventListener('keydown', async (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      input.value = '';
      await _personalCreateAndAssign(_chatContactId, value);
    }
  });
}

// ════════ Adjuntos en chat (imagen, video, audio, doc + grabación) ════════
let _rhPendingAttachment = null; // { file, dataUrl, type, mimetype, filename }
// Si está set, el próximo envío de attachment va a este convoId en vez del
// chat principal (se usa cuando el adjunto se inicia desde el detalle del expediente)
let _rhAttachOriginConvoId = null;
let _rhRecorder = null;          // { mediaRecorder, chunks, stream, startTime, ui }

// Inicia grabación de audio desde el micrófono. Muestra panel modal con onda
// animada, contador de duración y botones Enviar / Cancelar.
async function startVoiceRecording() {
  if (_rhRecorder) return; // ya grabando
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    toast('No se pudo acceder al micrófono — revisa permisos del navegador', 'error');
    return;
  }

  // Crear panel modal de grabación
  const overlay = document.createElement('div');
  overlay.className = 'rh-recorder-overlay';
  overlay.innerHTML = `
    <div class="rh-recorder-panel">
      <div class="rh-recorder-pulse"></div>
      <div class="rh-recorder-time" id="rhRecTime">0:00</div>
      <p class="rh-recorder-hint">Grabando audio…</p>
      <div class="rh-recorder-actions">
        <button type="button" class="btn btn--ghost" id="rhRecCancel">Cancelar</button>
        <button type="button" class="btn btn--primary" id="rhRecStop">⏹ Detener y enviar</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  // MediaRecorder con MIME aceptado por WhatsApp (ogg/opus o mp4)
  let mimeType = 'audio/ogg;codecs=opus';
  if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'audio/webm;codecs=opus';
  if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = '';
  const rec = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
  const chunks = [];
  rec.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };

  const startTime = Date.now();
  const timeEl = overlay.querySelector('#rhRecTime');
  const tickInterval = setInterval(() => {
    const sec = Math.floor((Date.now() - startTime) / 1000);
    timeEl.textContent = `${Math.floor(sec/60)}:${String(sec%60).padStart(2,'0')}`;
  }, 250);

  _rhRecorder = { mediaRecorder: rec, chunks, stream, startTime, overlay, tickInterval };
  rec.start();

  function cleanup() {
    clearInterval(tickInterval);
    stream.getTracks().forEach(t => t.stop());
    overlay.remove();
    _rhRecorder = null;
  }

  overlay.querySelector('#rhRecCancel').addEventListener('click', () => {
    rec.stop();
    chunks.length = 0; // descartar
    cleanup();
    toast('Grabación cancelada', 'info');
  });

  overlay.querySelector('#rhRecStop').addEventListener('click', () => {
    rec.onstop = () => {
      cleanup();
      if (!chunks.length) return;
      const blob = new Blob(chunks, { type: rec.mimeType || 'audio/ogg' });
      // Convertir a base64 e ir directo al modal de preview con caption
      const reader = new FileReader();
      reader.onload = () => {
        const ext = rec.mimeType?.includes('ogg') ? 'ogg' : (rec.mimeType?.includes('webm') ? 'webm' : 'mp3');
        _rhPendingAttachment = {
          file: blob,
          dataUrl: reader.result,
          type: 'audio',
          mimetype: blob.type || 'audio/ogg',
          filename: `nota-voz-${Date.now()}.${ext}`,
        };
        showAttachPreview();
      };
      reader.readAsDataURL(blob);
    };
    rec.stop();
  });
}

// Tipos de adjunto soportados por provider (filtra el menú dinámicamente).
const PROVIDER_MEDIA_SUPPORT = {
  whatsapp:        new Set(['image', 'video', 'audio', 'document', 'record-audio']),
  'whatsapp-lite': new Set(['image', 'video', 'audio', 'document', 'record-audio']),
  messenger:       new Set(['image', 'video', 'audio', 'document', 'record-audio']),
  instagram:       new Set(['image', 'video', 'audio', 'record-audio']), // sin document
  telegram:        new Set(['image', 'video', 'audio', 'document', 'record-audio']),
};

function setupAttachMenu() {
  const btn  = document.getElementById('rhAttachBtn');
  const menu = document.getElementById('rhAttachMenu');
  const imgInput = document.getElementById('rhAttachImageInput');
  const docInput = document.getElementById('rhAttachDocInput');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    // Filtrar opciones según provider de la conversación activa
    const convo = CONVERSATIONS.find(c => c.id === ACTIVE_CONVO_ID);
    const supported = PROVIDER_MEDIA_SUPPORT[convo?.provider] || PROVIDER_MEDIA_SUPPORT.whatsapp;
    menu.querySelectorAll('[data-attach]').forEach(opt => {
      opt.hidden = !supported.has(opt.dataset.attach);
    });
    menu.hidden = !menu.hidden;
  });
  document.addEventListener('click', (e) => {
    if (menu.hidden) return;
    if (!menu.contains(e.target) && e.target !== btn) menu.hidden = true;
  });

  const vidInput = document.getElementById('rhAttachVideoInput');
  const audInput = document.getElementById('rhAttachAudioInput');

  menu.querySelectorAll('[data-attach]').forEach(opt => {
    opt.addEventListener('click', () => {
      menu.hidden = true;
      const type = opt.dataset.attach;
      if (type === 'image')        imgInput?.click();
      if (type === 'document')     docInput?.click();
      if (type === 'video')        vidInput?.click();
      if (type === 'audio')        audInput?.click();
      if (type === 'record-audio') startVoiceRecording();
    });
  });

  imgInput?.addEventListener('change', (e) => onAttachFileSelected(e.target.files?.[0], 'image'));
  docInput?.addEventListener('change', (e) => onAttachFileSelected(e.target.files?.[0], 'document'));
  vidInput?.addEventListener('change', (e) => onAttachFileSelected(e.target.files?.[0], 'video'));
  audInput?.addEventListener('change', (e) => onAttachFileSelected(e.target.files?.[0], 'audio'));

  document.querySelectorAll('[data-close-attach-preview]').forEach(el => {
    el.addEventListener('click', closeAttachPreview);
  });
  document.getElementById('rhAttachPreviewModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'rhAttachPreviewModal') closeAttachPreview();
  });
  document.getElementById('rhAttachSendBtn')?.addEventListener('click', sendAttachmentNow);
}

function onAttachFileSelected(file, type) {
  if (!file) return;
  // Límites por tipo (cliente; el backend re-valida según provider)
  const limits = {
    image:    5  * 1024 * 1024,
    video:    16 * 1024 * 1024,
    audio:    16 * 1024 * 1024,
    document: 100 * 1024 * 1024,
  };
  if (file.size > limits[type]) {
    toast(`El archivo excede el límite (${(limits[type]/1024/1024).toFixed(0)}MB)`, 'warning');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const fallbackMime = ({ image: 'image/jpeg', video: 'video/mp4', audio: 'audio/mpeg' })[type] || 'application/octet-stream';
    _rhPendingAttachment = {
      file,
      dataUrl: reader.result,
      type,
      mimetype: file.type || fallbackMime,
      filename: file.name,
    };
    showAttachPreview();
  };
  reader.readAsDataURL(file);
}

// Pre-carga el header_media de una plantilla free_form como _rhPendingAttachment
// para que se envíe junto con el texto al mandar el mensaje. Sin esto, el adjunto
// guardado en la plantilla simple se ignoraba al enviar.
async function loadTemplateMediaAsAttachment(tpl) {
  const r = await fetch(tpl.headerMediaUrl, { credentials: 'same-origin' });
  if (!r.ok) throw new Error(`HTTP ${r.status} al descargar ${tpl.headerMediaUrl}`);
  const blob = await r.blob();
  const ext = (tpl.headerMediaUrl.split('?')[0].split('.').pop() || '').toLowerCase();
  const safeExt = /^[a-z0-9]{1,8}$/.test(ext) ? ext : 'bin';
  const filename = `plantilla-${tpl.id}-${tpl.name || 'media'}.${safeExt}`;
  const mimetype = blob.type || (
    tpl.headerType === 'IMAGE' ? 'image/jpeg' :
    tpl.headerType === 'VIDEO' ? 'video/mp4' :
    'application/octet-stream'
  );
  const file = new File([blob], filename, { type: mimetype });
  const typeMap = { IMAGE: 'image', VIDEO: 'video', DOCUMENT: 'file', AUDIO: 'audio' };
  await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      _rhPendingAttachment = {
        file,
        dataUrl: reader.result,
        type: typeMap[tpl.headerType] || 'file',
        mimetype,
        filename,
      };
      showAttachPreview();
      resolve();
    };
    reader.onerror = () => reject(reader.error || new Error('FileReader failed'));
    reader.readAsDataURL(file);
  });
}

function showAttachPreview() {
  const att = _rhPendingAttachment;
  if (!att) return;
  const modal = document.getElementById('rhAttachPreviewModal');
  const content = document.getElementById('rhAttachPreviewContent');
  const title = document.getElementById('rhAttachPreviewTitle');
  if (!modal || !content) return;

  const titles = { image: 'Enviar imagen', video: 'Enviar video', audio: 'Enviar audio', document: 'Enviar documento' };
  title.textContent = titles[att.type] || 'Enviar archivo';

  if (att.type === 'image') {
    content.innerHTML = `<img src="${att.dataUrl}" alt="preview" class="rh-attach-img-preview" />`;
  } else if (att.type === 'video') {
    content.innerHTML = `<video src="${att.dataUrl}" controls class="rh-attach-video-preview"></video>`;
  } else if (att.type === 'audio') {
    content.innerHTML = `
      <div class="rh-attach-audio-preview">
        <div class="rh-attach-audio-icon">🎵</div>
        <div class="rh-attach-audio-info">
          <div class="rh-attach-audio-name">${escapeHtml(att.filename)}</div>
          <audio src="${att.dataUrl}" controls style="width:100%;margin-top:8px"></audio>
        </div>
      </div>`;
  } else {
    const sizeKb = (att.file.size / 1024).toFixed(1);
    const ext = (att.filename.match(/\.([a-zA-Z0-9]{1,8})$/)?.[1] || 'doc').toUpperCase();
    content.innerHTML = `
      <div class="rh-attach-doc-card">
        <div class="rh-attach-doc-icon">📎</div>
        <div class="rh-attach-doc-info">
          <div class="rh-attach-doc-name">${escapeHtml(att.filename)}</div>
          <div class="rh-attach-doc-meta">${ext} · ${sizeKb} KB</div>
        </div>
      </div>`;
  }
  document.getElementById('rhAttachCaption').value = '';
  modal.hidden = false;
  setTimeout(() => document.getElementById('rhAttachCaption')?.focus(), 50);
}

function closeAttachPreview() {
  document.getElementById('rhAttachPreviewModal').hidden = true;
  _rhPendingAttachment = null;
  // Limpiar inputs file para que vuelvan a disparar change si eligen el mismo archivo
  ['rhAttachImageInput','rhAttachVideoInput','rhAttachAudioInput','rhAttachDocInput'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

async function sendAttachmentNow() {
  const att = _rhPendingAttachment;
  if (!att) return;
  // Determinar destino: chat principal o detalle de expediente
  const fromExpDetail = _rhAttachOriginConvoId !== null;
  let convoId, convo;
  if (fromExpDetail) {
    convoId = _rhAttachOriginConvoId;
    convo = EXP_DETAIL_CONVOS.find(c => c.id === convoId);
  } else {
    const form = document.querySelector('.rh-reply-form');
    convoId = Number(form?.dataset.convoId);
    convo = CONVERSATIONS.find(c => c.id === convoId);
  }
  if (!convoId) { toast('Selecciona una conversación primero', 'warning'); return; }
  if (isWaWindowClosed(convo)) {
    toast('⏰ Ventana 24h cerrada — no puedes enviar archivos, solo plantillas', 'warning');
    return;
  }
  const caption = document.getElementById('rhAttachCaption').value.trim();
  const sendBtn = document.getElementById('rhAttachSendBtn');
  if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Enviando…'; }
  try {
    const msg = await api('POST', `/api/conversations/${convoId}/media`, {
      data: att.dataUrl,
      mimetype: att.mimetype,
      filename: att.filename,
      caption: caption || null,
    });
    if (fromExpDetail) {
      EXP_DETAIL_MSGS.push(msg);
      renderExpDetailMessages();
    } else {
      CHAT_MESSAGES.push(msg);
      renderMessages();
    }
    closeAttachPreview();
    toast('Archivo enviado', 'success');
    if (convo) {
      const previewByType = { image: '📷 Imagen', video: '🎬 Video', audio: '🎵 Audio', document: '📎 Documento' };
      convo.lastMessage = caption || previewByType[att.type] || '📎 Archivo';
      convo.time = msg.time || '';
      if (!fromExpDetail) renderChatList();
    }
  } catch (err) {
    toast(err.message || 'Error enviando archivo', 'error');
  } finally {
    if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Enviar'; }
    _rhAttachOriginConvoId = null; // reset del flag de origen
  }
}

function setupReplyForm() {
  const form = document.querySelector('.rh-reply-form');
  if (!form) return;
  const textarea = form.querySelector('textarea');
  let isSending = false;

  // Auto-grow textarea
  textarea?.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  });

  // Ctrl+Enter or Enter (without Shift) to send
  textarea?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isSending) return;
      form.requestSubmit();
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSending) return;
    const convoId = Number(form.dataset.convoId);
    if (!convoId) { toast('Selecciona una conversación primero', 'warning'); return; }
    // Bloquear si la ventana 24h está cerrada
    const convo = CONVERSATIONS.find((c) => c.id === convoId);
    if (isWaWindowClosed(convo)) {
      toast('⏰ Ventana 24h cerrada — solo puedes enviar plantillas aprobadas', 'warning');
      return;
    }
    const body = textarea?.value.trim();
    if (!body) return;

    isSending = true;
    if (textarea) { textarea.value = ''; textarea.style.height = 'auto'; }

    try {
      const msg = await api('POST', `/api/conversations/${convoId}/messages`, { body });
      CHAT_MESSAGES.push(msg);
      renderMessages();
      // Actualizar preview en la lista
      if (convo) { convo.lastMessage = body; convo.time = msg.time || ''; renderChatList(); }
    } catch (err) {
      toast(err.message, 'error');
      if (textarea) { textarea.value = body; }
    } finally {
      isSending = false;
    }
  });
}

// ─── Poll for new messages ───
function startChatPolling() {
  if (_chatPollTimer) clearInterval(_chatPollTimer);
  _chatPollTimer = setInterval(async () => {
    // Caso 1: vista de Chats con conversación activa
    if (document.body.dataset.viewActive === 'chats') {
      const prevTotal = CONVERSATIONS.reduce((s, c) => s + c.unreadCount, 0);
      await loadConversations();
      if (ACTIVE_CONVO_ID) {
        const prevCount = CHAT_MESSAGES.length;
        await loadMessages(ACTIVE_CONVO_ID);
        if (CHAT_MESSAGES.length > prevCount) {
          api('PATCH', `/api/conversations/${ACTIVE_CONVO_ID}/read`).catch(() => {});
        }
        refreshReplyFormState();
      }
      return;
    }
    // Caso 2: detalle del lead con conversación abierta — refrescar para que
    // status de mensajes (sent → delivered → read → failed) actualice las
    // palomitas / icono ⚠ en tiempo real sin tener que cambiar de vista.
    if (document.body.dataset.viewActive === 'exp-detail' && EXP_DETAIL_CONVO_ID) {
      try {
        const data = await api('GET', `/api/conversations/${EXP_DETAIL_CONVO_ID}/messages`);
        EXP_DETAIL_MSGS = data.items || [];
        renderExpDetailMessages();
      } catch (_) {}
    }
  }, 5000);
}

// Tick rápido (1s) para que la ventana 24h se cierre en tiempo real mientras el
// usuario tiene el chat abierto, sin esperar el siguiente poll.
setInterval(() => {
  if (document.body.dataset.viewActive === 'chats' && ACTIVE_CONVO_ID) {
    refreshReplyFormState();
  }
  if (document.body.dataset.viewActive === 'exp-detail' && EXP_DETAIL_CONVO_ID) {
    refreshExpDetailReplyState();
  }
}, 1000);

// ═══════ Papelera ═══════

const TRASH_LABELS = { contact: 'Contacto', expedient: 'Lead', pipeline: 'Pipeline', stage: 'Etapa', salsbot: 'Bot' };
const TRASH_ICONS  = {
  contact:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  expedient: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  pipeline:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  stage:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>`,
  salsbot:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
};

let _trashItems = [];
let _trashFilter = 'all';

function _trashDaysLeft(expiresAt) {
  const secs = expiresAt - Math.floor(Date.now() / 1000);
  if (secs <= 0) return 'Expirado';
  const days = Math.ceil(secs / 86400);
  return `${days} día${days === 1 ? '' : 's'}`;
}

function renderTrashList() {
  const container = document.getElementById('trashList');
  if (!container) return;

  const filtered = _trashFilter === 'all'
    ? _trashItems
    : _trashItems.filter(i => i.entityType === _trashFilter);

  if (!filtered.length) {
    container.innerHTML = `<div class="trash-empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6m4-6v6"/></svg>
      <p>${_trashFilter === 'all' ? 'La papelera está vacía' : 'No hay elementos de este tipo'}</p>
    </div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const daysLeft = _trashDaysLeft(item.expiresAt);
    const urgent = (item.expiresAt - Math.floor(Date.now() / 1000)) < 3 * 86400;
    return `<div class="trash-item" data-id="${item.id}">
      <div class="trash-item-icon">${TRASH_ICONS[item.entityType] || ''}</div>
      <div class="trash-item-body">
        <div class="trash-item-name">${escHtml(item.entityName || '—')}</div>
        <div class="trash-item-meta">
          <span class="trash-type-badge trash-type-${item.entityType}">${TRASH_LABELS[item.entityType] || item.entityType}</span>
          ${item.deletedByName ? `<span>por ${escHtml(item.deletedByName)}</span>` : ''}
          <span>${new Date(item.deletedAt * 1000).toLocaleDateString('es-MX', { day:'2-digit', month:'short', year:'numeric' })}</span>
          <span class="trash-expires ${urgent ? 'trash-expires--urgent' : ''}">Expira en ${daysLeft}</span>
        </div>
      </div>
      <div class="trash-item-actions">
        <button class="btn btn--sm btn--secondary trash-restore-btn" data-id="${item.id}" title="Recuperar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          Recuperar
        </button>
        <button class="btn btn--sm btn--danger-ghost trash-delete-btn" data-id="${item.id}" title="Eliminar permanentemente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');
}

async function loadTrash() {
  const container = document.getElementById('trashList');
  if (!container) return;
  container.innerHTML = `<div class="trash-loading">Cargando…</div>`;
  try {
    const data = await api('GET', '/api/trash');
    _trashItems = data.items || [];
    renderTrashList();
  } catch (e) {
    container.innerHTML = `<div class="trash-empty-state"><p>Error al cargar la papelera</p></div>`;
  }
}

function setupTrash() {
  // Filtros
  document.querySelector('.trash-filters')?.addEventListener('click', e => {
    const btn = e.target.closest('.trash-filter-btn');
    if (!btn) return;
    document.querySelectorAll('.trash-filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    _trashFilter = btn.dataset.filter;
    renderTrashList();
  });

  // Acciones delegadas (restaurar / eliminar permanente)
  document.getElementById('trashList')?.addEventListener('click', async e => {
    const restoreBtn = e.target.closest('.trash-restore-btn');
    const deleteBtn  = e.target.closest('.trash-delete-btn');

    if (restoreBtn) {
      const id = Number(restoreBtn.dataset.id);
      restoreBtn.disabled = true;
      restoreBtn.textContent = 'Recuperando…';
      try {
        await api('POST', `/api/trash/${id}/restore`);
        _trashItems = _trashItems.filter(i => i.id !== id);
        renderTrashList();
        _rhToast('Elemento recuperado correctamente');
      } catch (err) {
        _rhToast(err.message || 'No se pudo recuperar', 'error');
        restoreBtn.disabled = false;
        restoreBtn.textContent = 'Recuperar';
      }
    }

    if (deleteBtn) {
      const id = Number(deleteBtn.dataset.id);
      const item = _trashItems.find(i => i.id === id);
      if (!confirm(`¿Eliminar "${item?.entityName || 'este elemento'}" permanentemente? Esta acción no se puede deshacer.`)) return;
      try {
        await api('DELETE', `/api/trash/${id}`);
        _trashItems = _trashItems.filter(i => i.id !== id);
        renderTrashList();
      } catch (err) {
        _rhToast(err.message || 'Error al eliminar', 'error');
      }
    }
  });

  // Vaciar todo
  document.getElementById('trashEmptyAll')?.addEventListener('click', async () => {
    if (!_trashItems.length) return;
    if (!confirm(`¿Vaciar la papelera permanentemente? Se eliminarán ${_trashItems.length} elemento${_trashItems.length === 1 ? '' : 's'} y no podrán recuperarse.`)) return;
    try {
      await api('DELETE', '/api/trash');
      _trashItems = [];
      renderTrashList();
    } catch (err) {
      _rhToast(err.message || 'Error al vaciar', 'error');
    }
  });
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _rhToast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `rh-toast rh-toast--${type}`;
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('rh-toast--show'));
  setTimeout(() => {
    el.classList.remove('rh-toast--show');
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ═══════ Bootstrap ═══════
// Detectar si estamos en /chat (vista personal del asesor)
window.PERSONAL_MODE = (window.location.pathname === '/chat' || window.location.pathname === '/chat/');
window.PERSONAL_SHOW_HIDDEN = false;

// PWA Guard: si la app corre en modo standalone (PWA instalada) y el manifest
// cargado es manifest-chat.json (PWA de Chat), forzar que estemos en /chat.
// Esto cubre el caso iOS donde reabrir la PWA puede caer en /app por restoración
// de estado del SPA. La verificación se hace antes de cualquier otra cosa.
(function _pwaScopeGuard() {
  try {
    const isStandalone =
      window.matchMedia?.('(display-mode: standalone)').matches ||
      window.navigator.standalone === true; // iOS Safari
    if (!isStandalone) return;
    const manifestHref = document.querySelector('link[rel="manifest"]')?.href || '';
    const isChatPwa = manifestHref.includes('manifest-chat.json');
    const isCrmPwa  = manifestHref.endsWith('/manifest.json');
    const path = window.location.pathname;
    if (isChatPwa && !path.startsWith('/chat')) {
      // Estamos en la PWA de Chat pero el SPA cargó en otra ruta → forzar /chat
      window.location.replace('/chat?source=pwa');
    } else if (isCrmPwa && path.startsWith('/chat')) {
      // PWA del CRM pero por algún motivo entramos en /chat → forzar /app
      window.location.replace('/app?source=pwa');
    }
  } catch (_) { /* ignorar errores del guard */ }
})();

// Bloquea sugerencias de iCloud Keychain / contactos iOS / managers de password
// en todos los inputs y textareas. Safari ignora `autocomplete="off"` para campos
// que parecen "usuario/email/teléfono", así que reforzamos con atributos data-*
// y un autocomplete poco común que las heurísticas no reconocen.
function suppressAutofill(el) {
  if (!el || el._antiAutofill) return;
  el._antiAutofill = true;
  // No tocar los password reales (login.html los necesita)
  if (el.type === 'password') return;
  el.setAttribute('autocomplete', 'off');
  el.setAttribute('data-1p-ignore', 'true');
  el.setAttribute('data-lpignore', 'true');
  el.setAttribute('data-bwignore', 'true');
  el.setAttribute('data-form-type', 'other');
  el.setAttribute('aria-autocomplete', 'none');
  // Los textareas (cajas de mensaje) necesitan autocorrect y spellcheck activos
  // para que iOS/Android muestren predicción de texto y corrección ortográfica.
  // Solo los inputs de formulario (texto, email, tel) desactivan estas funciones.
  if (el.tagName !== 'TEXTAREA') {
    el.setAttribute('autocorrect', 'off');
    el.setAttribute('autocapitalize', 'off');
    el.setAttribute('spellcheck', 'false');
  }
}
function applyAntiAutofill(root = document) {
  root.querySelectorAll('input, textarea').forEach(suppressAutofill);
  root.querySelectorAll('form').forEach(f => f.setAttribute('autocomplete', 'off'));
}

// Citas: feature flag local. Default OFF (la Fase B aún no está construida).
function isAppointmentsEnabled() {
  try { return localStorage.getItem('appointmentsEnabled') === '1'; }
  catch { return false; }
}
function applyAppointmentsVisibility() {
  const enabled = isAppointmentsEnabled();
  document.querySelectorAll('[data-feature="appointments"]').forEach(el => {
    el.hidden = !enabled;
  });
}

function isLeadValueEnabled() {
  try { return localStorage.getItem('leadValueEnabled') === '1'; } catch { return false; }
}
function applyLeadValueVisibility() {
  const on = isLeadValueEnabled();
  document.querySelectorAll('[data-feature="lead-value"]').forEach(el => { el.hidden = !on; });
  if (document.body.dataset.viewActive === 'pipelines') renderPipelinesBoard();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
  // Redirigir a login si no hay token
  if (!getToken()) {
    const redir = window.PERSONAL_MODE ? '?redirect=/chat' : '';
    window.location.href = '/login' + redir;
    return;
  }

  // En /chat: aplicar UI limpia (oculta nav lateral, fuerza vista chats)
  if (window.PERSONAL_MODE) {
    document.body.classList.add('personal-mode');
    localStorage.setItem('lastView', 'chats');
    // Mostrar toggle "Mostrar ocultos" + hookup
    const toggleWrap = document.getElementById('rhPersonalToggle');
    const toggleInput = document.getElementById('rhPersonalShowHidden');
    if (toggleWrap) toggleWrap.hidden = false;
    if (toggleInput) {
      toggleInput.addEventListener('change', () => {
        window.PERSONAL_SHOW_HIDDEN = toggleInput.checked;
        loadConversations();
      });
    }
  }

  // Mostrar nombre del asesor y configurar logout
  const _advisor = getAdvisor();
  if (_advisor) {
    const nameEl   = document.getElementById('navAdvisorName');
    const avatarEl = document.getElementById('navAdvisorAvatar');
    if (nameEl)   nameEl.textContent   = _advisor.name;
    if (avatarEl) avatarEl.textContent = (_advisor.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    // Aplicar permisos: ocultar acciones que no tiene
    if (_advisor.role !== 'admin' && !_advisor.permissions?.delete) {
      document.querySelectorAll('[data-perm="delete"]').forEach(e => e.hidden = true);
    }
    if (_advisor.role !== 'admin' && !_advisor.permissions?.manage_advisors) {
      document.querySelectorAll('[data-perm="manage_advisors"]').forEach(e => e.hidden = true);
    }
    if (_advisor.role === 'admin') {
      document.querySelectorAll('[data-admin-only]').forEach(e => { e.hidden = false; });
    }
    applyAppointmentsVisibility();
  }

  document.getElementById('navLogoutBtn')?.addEventListener('click', () => {
    if (confirm('¿Cerrar sesión?')) logout();
  });

  async function clearCacheAndReload(e) {
    if (!confirm('¿Limpiar caché y recargar? Útil después de un deploy si no ves cambios.')) return;
    const btn = e.currentTarget;
    btn.classList.add('is-spinning');
    btn.disabled = true;
    const cb = Date.now().toString(36);

    // 1) Refresh in-place de CSS — modifica el href de cada <link> con cache-buster.
    //    Esto fuerza re-fetch del CSS (cache miss por URL distinta) y re-aplica estilos
    //    SIN esperar el reload completo — el cambio visual es instantáneo.
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      try {
        const u = new URL(link.href, window.location.href);
        u.searchParams.set('_cb', cb);
        link.href = u.toString();
      } catch (_) {}
    });

    // 2) Limpiar caches del Service Worker (si los hay) y desregistrar SW.
    try {
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r => r.unregister()));
      }
    } catch (err) {
      console.error('cache-clear', err);
    }

    // 3) Hard reload con cache-buster en la URL — fuerza HTML+JS frescos.
    //    Combinado con el middleware no-cache del server, los <script> y <link>
    //    del HTML nuevo se piden con If-None-Match y Safari ya no los devuelve cacheados.
    const url = new URL(window.location.href);
    url.searchParams.set('_cb', cb);
    window.location.replace(url.toString());
  }
  document.getElementById('navCacheBtn')?.addEventListener('click', clearCacheAndReload);

  // Bloquear autofill/sugerencias del navegador en inputs estáticos y dinámicos
  // Aplicar idioma guardado en boot ANTES de cualquier render
  document.documentElement.lang = _locale.split('-')[0];
  applyTranslationsToDOM();

  applyAntiAutofill();
  try {
    const _afObserver = new MutationObserver(muts => {
      for (const m of muts) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches?.('input, textarea, form')) suppressAutofill(node);
          if (node.querySelectorAll) applyAntiAutofill(node);
        }
      }
    });
    _afObserver.observe(document.body, { childList: true, subtree: true });
  } catch (_) {}

  setupTrash();
  setupNav();
  setupSettingsTabs();
  setupCustomers();
  setupImport();
  setupIntegrations();
  setupExpedients();
  setupPipelines();
  setupAlarmModal();
  setupBotStatsModal();
  setupAccount();
  setupChatSearch();
  setupChatFilters();
  if (window.PERSONAL_MODE) setupChatPushCta();
  // Iniciar el panel de conversación en empty state hasta que abran un chat.
  if (!ACTIVE_CONVO_ID) renderChatEmptyState();
  setupReplyForm();
  setupAttachMenu();
  setupPersonalTagsUI();
  setupChatContextMenu();
  setupReportsUI();
  setupBusinessUI();
  if (window.PERSONAL_MODE) loadPersonalTags();

  // Bot toggle handler (usa conversación cuando está disponible)
  document.getElementById('rhBotToggle')?.addEventListener('click', async () => {
    const newPaused = !_chatBotPaused;
    try {
      if (_chatConvoId) {
        await api('PATCH', `/api/conversations/${_chatConvoId}/bot-paused`, { paused: newPaused });
      } else if (_chatContactId) {
        await api('PATCH', `/api/contacts/${_chatContactId}/bot-paused`, { paused: newPaused });
      }
    } catch (err) { toast(err.message, 'error'); return; }
    _chatBotPaused = newPaused;
    updateBotToggleUI();
    toast(newPaused ? 'Bot pausado' : 'Bot reanudado', newPaused ? 'warning' : 'success');
  });

  setupExpDetail();
  setupIconPicker();
  setupFilterButtons();
  setupBot();
  setupTemplates();
  setupTplPicker();
  setupDashboard();
  setupAdvisors();
  setupMachineTokens();
  setupNotifications();
  setupApptBookModal();
  _setupSplitListeners();
  registerServiceWorker();
  const _savedView   = localStorage.getItem('lastView') || 'chats';
  const _savedExpId  = localStorage.getItem('lastExpDetailId');
  const _savedExpFrom = localStorage.getItem('lastExpDetailFrom') || 'pipelines';

  // 1ro: si la URL trae hash (deep link compartido o reload), respetar ese
  const urlState = ROUTER.parse(location.hash);
  if (urlState) {
    ROUTER.restore(urlState);
  } else if (_savedView === 'exp-detail' && _savedExpId) {
    // 2do: si localStorage tiene un lead abierto, restaurarlo
    openExpDetail(Number(_savedExpId), _savedExpFrom);
  } else {
    // 3ro: caer en la última vista
    showView(_savedView);
  }

  await Promise.all([
    loadConversations(),
    loadCustomers(),
    loadPipelines(),
    loadIntegrations(),
    loadOutgoingWebhooks(),
    loadVotes(),
    loadExpedients(),
    loadSalsbots(),
    loadPipelinesKanban(),
    loadProfile(),
    loadAdvisors(),
    loadTemplates(),
    loadMinAdvisors(),
    loadSplitConfig(),
    applyAIConditionalVisibility(),
    applySocialCommentsVisibility(),
    updatePedidosNavVisibility(),
  ]);
  startChatPolling();
  startVersionCheck();
  startTasksDuePolling();
  startCommentsBadgePolling();
  resumeBulkJobTracking();
  } catch (_bootErr) {
    const box = document.getElementById('_jsErrBox') || (() => {
      const el = document.createElement('div');
      el.id = '_jsErrBox';
      el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#b91c1c;color:#fff;padding:12px 16px;font:13px/1.5 monospace;white-space:pre-wrap;max-height:40vh;overflow-y:auto';
      document.body.prepend(el);
      return el;
    })();
    box.textContent += `[BOOT ERROR] ${_bootErr?.stack || _bootErr}\n\n`;
  }
});

// ─── Detección de nueva versión del server (anti-blanco-tras-deploy) ───
// Cada 2min consulta /api/version. Si cambia respecto al primero que vio,
// el server fue redeployed → muestra un toast con botón "Recargar". Esto
// evita que el cliente quede pegado con app.js viejo + index.html nuevo.
let _bootVersion = null;
let _versionToastShown = false;
async function _fetchVersion() {
  try {
    // ?_= garantiza URL única en cada llamada → Cloudflare no puede servir caché
    const r = await fetch(`/api/version?_=${Date.now()}`, { cache: 'no-store' });
    if (!r.ok) return null;
    const d = await r.json();
    return d.version || null;
  } catch { return null; }
}
// ─── Polling de tareas vencidas — notificaciones in-app ───
// Cada 60s consulta el endpoint de tasks overdue del advisor actual.
// Actualiza el badge del nav item Calendario y muestra un toast cuando
// aparecen tareas nuevas vencidas (sin sonido — estilo iMessage).
let _tasksDueLastIds = new Set();
let _tasksDueInited  = false;

async function _fetchOverdueTasks() {
  const advisor = (typeof getAdvisor === 'function') ? getAdvisor() : null;
  if (!advisor?.id) return [];
  try {
    const url = `/api/tasks?filter=overdue&advisorId=${advisor.id}&limit=100`;
    const data = await api('GET', url);
    return Array.isArray(data?.items) ? data.items : [];
  } catch (e) {
    console.warn('[tasks-due-poll] fetch error:', e.message);
    return [];
  }
}

function _updateCalendarBadge(count) {
  const badge = document.getElementById('navCalendarBadge');
  if (!badge) return;
  badge.textContent = count > 0 ? (count > 99 ? '99+' : String(count)) : '';
  badge.style.display = count > 0 ? '' : 'none';
}

function _showTaskDueToast(newOverdue) {
  if (!newOverdue.length) return;
  const txt = newOverdue.length === 1
    ? `⏰ Tarea vencida: "${newOverdue[0].title}"`
    : `⏰ ${newOverdue.length} tareas nuevas vencidas`;
  if (typeof toast === 'function') toast(txt, 'warn');
}

async function startTasksDuePolling() {
  const tick = async () => {
    const items = await _fetchOverdueTasks();
    _updateCalendarBadge(items.length);
    const currentIds = new Set(items.map(t => t.id));
    if (_tasksDueInited) {
      // Detectar IDs nuevos (no estaban en la última consulta)
      const newOnes = items.filter(t => !_tasksDueLastIds.has(t.id));
      if (newOnes.length) _showTaskDueToast(newOnes);
    }
    _tasksDueLastIds = currentIds;
    _tasksDueInited = true;
  };
  // Primer tick inmediato (sin toast) + cada 60s
  await tick();
  setInterval(tick, 60 * 1000);
}

// ═════════════════════════════════════════════════════════════════
// BOT COLLISION MODAL — pregunta al usuario qué hacer si el bot del
// stage destino ya tiene un wait activo para el lead.
// Returns: 'cancel' | 'skip' | 'restart' | null (sin colisión)
// ═════════════════════════════════════════════════════════════════
async function checkBotCollision(expedientId, stageId, leadName, stageName) {
  try {
    const res = await api('POST', `/api/expedients/${expedientId}/preview-stage-move`, { stageId });
    if (!res?.hasCollision) return null;
    // Mostramos TODOS los bots con wait activo (no solo los que matchean el stage
    // destino) porque "Reiniciar" los va a cancelar a todos para evitar
    // interferencias de bots viejos de otras etapas.
    return await _showBotCollisionModal(res.activeBots || [], leadName, stageName);
  } catch (_) { return null; }
}

function _showBotCollisionModal(activeBots, leadName, stageName) {
  return new Promise(resolve => {
    const modal = document.getElementById('botCollisionModal');
    const intro = document.getElementById('botCollisionIntro');
    const list  = document.getElementById('botCollisionList');
    const restartBtn = modal?.querySelector('[data-bc-action="restart"]');
    if (!modal || !intro || !list) return resolve('skip');

    const count = activeBots.length;
    intro.innerHTML = `Vas a mover a <strong>${escHtml(leadName || 'este lead')}</strong> a la etapa <strong>"${escHtml(stageName || '—')}"</strong>.<br>Este lead tiene <strong>${count} bot${count === 1 ? '' : 's'}</strong> corriendo:`;

    list.innerHTML = activeBots.map(b => {
      const expiresStr = b.waitExpiresAt
        ? `Expira ${relTime(b.waitExpiresAt)}`
        : 'En ejecución';
      return `<div class="bc-bot-item">
        <span class="bc-bot-icon">🤖</span>
        <div class="bc-bot-info">
          <div class="bc-bot-name">${escHtml(b.name)}</div>
          <div class="bc-bot-meta">⏱️ ${expiresStr}</div>
        </div>
      </div>`;
    }).join('');

    // Actualizar el texto del botón Reiniciar para que el user sepa que va a limpiar TODOS
    if (restartBtn) {
      const small = restartBtn.querySelector('small');
      if (small) {
        small.textContent = count > 1
          ? `Cancela los ${count} bots viejos del lead y arranca el bot del stage destino fresco — evita interferencias futuras`
          : 'Cancela el bot viejo y arranca uno fresco desde el paso 1 — recomendado para testing';
      }
    }

    const cleanup = () => {
      modal.hidden = true;
      modal.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
    const onClick = (e) => {
      const action = e.target.closest('[data-bc-action]')?.dataset?.bcAction;
      if (action) { cleanup(); resolve(action); return; }
      if (e.target.id === 'botCollisionClose' || e.target.id === 'botCollisionCancel' || e.target.id === 'botCollisionBackdrop') {
        cleanup(); resolve('cancel');
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') { cleanup(); resolve('cancel'); }
      else if (e.key === 'Enter') { cleanup(); resolve('restart'); }
    };
    modal.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    modal.hidden = false;
  });
}

// ═════════════════════════════════════════════════════════════════
// BULK JOB TRACKER — barra global de progreso para operaciones largas
// (mover masivo de leads, eliminar masivo, etc.). El job corre en el
// server, el frontend solo polea cada 1.5s y dibuja la barra.
// Si el usuario cierra la pestaña, el server sigue. Al volver, lee
// el jobId guardado en localStorage y reanuda la visualización.
// ═════════════════════════════════════════════════════════════════
let _bulkJobPollTimer = null;
let _bulkJobCurrentId = null;
const BULK_JOB_LS_KEY = 'wapi101.activeBulkJobId';

function startBulkJobTracking(jobId) {
  if (!jobId) return;
  _bulkJobCurrentId = jobId;
  try { localStorage.setItem(BULK_JOB_LS_KEY, String(jobId)); } catch (_) {}
  _renderBulkJobBar({ id: jobId, total: 0, processed: 0, failed: 0, status: 'queued', label: 'Iniciando…' });
  _pollBulkJobNow();
}

function _stopBulkJobTracking() {
  _bulkJobCurrentId = null;
  if (_bulkJobPollTimer) { clearTimeout(_bulkJobPollTimer); _bulkJobPollTimer = null; }
  try { localStorage.removeItem(BULK_JOB_LS_KEY); } catch (_) {}
  const bar = document.getElementById('bulkJobBar');
  if (bar) bar.hidden = true;
}

async function _pollBulkJobNow() {
  if (!_bulkJobCurrentId) return;
  try {
    const res = await api('GET', `/api/jobs/${_bulkJobCurrentId}`);
    const job = res.item;
    _renderBulkJobBar(job);
    if (job.status === 'done' || job.status === 'error' || job.status === 'cancelled') {
      // Recargar el kanban si estamos en la vista pipelines
      if (document.body.dataset.viewActive === 'pipelines') {
        loadPipelinesKanban().catch(() => {});
      }
      // Dejar la barra visible 5s con el resultado final, luego ocultar
      setTimeout(() => {
        if (_bulkJobCurrentId === job.id) _stopBulkJobTracking();
      }, 5000);
      return;
    }
    _bulkJobPollTimer = setTimeout(_pollBulkJobNow, 1500);
  } catch (e) {
    // Si el job no existe (404), limpiamos el tracker
    if (String(e.message || '').includes('Job no encontrado') || String(e.message || '').includes('404')) {
      _stopBulkJobTracking();
      return;
    }
    // Otros errores: reintentar en 3s
    _bulkJobPollTimer = setTimeout(_pollBulkJobNow, 3000);
  }
}

function _renderBulkJobBar(job) {
  const bar = document.getElementById('bulkJobBar');
  if (!bar) return;
  bar.hidden = false;
  bar.classList.toggle('is-done',  job.status === 'done');
  bar.classList.toggle('is-error', job.status === 'error' || job.status === 'cancelled');

  const labelEl = document.getElementById('bulkJobLabel');
  const statsEl = document.getElementById('bulkJobStats');
  const fillEl  = document.getElementById('bulkJobFill');

  let labelText = job.label || 'Procesando…';
  if (job.status === 'done')      labelText = `✅ ${job.label || 'Terminado'}`;
  else if (job.status === 'error') labelText = `❌ ${job.label || 'Error'}`;
  else if (job.status === 'cancelled') labelText = `⛔ ${job.label || 'Cancelado'}`;
  if (labelEl) labelEl.textContent = labelText;

  const done = (job.processed || 0) + (job.failed || 0);
  const total = job.total || 0;
  const pct = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
  if (statsEl) {
    statsEl.textContent = total > 0
      ? `${done}/${total} (${pct}%)${job.failed ? ` · ${job.failed} fallaron` : ''}`
      : '';
  }
  if (fillEl) fillEl.style.width = `${job.status === 'done' ? 100 : pct}%`;
}

// Cancela el job — llama al backend y para el polling
document.addEventListener('click', async (e) => {
  if (e.target?.id !== 'bulkJobClose') return;
  if (!_bulkJobCurrentId) { _stopBulkJobTracking(); return; }
  if (!confirm('¿Cancelar la operación en curso? Los items ya procesados se quedan así.')) return;
  try { await api('DELETE', `/api/jobs/${_bulkJobCurrentId}`); } catch (_) {}
  _stopBulkJobTracking();
});

// Al cargar la app, reanudar tracking si había un job activo guardado.
function resumeBulkJobTracking() {
  let savedId = null;
  try { savedId = localStorage.getItem(BULK_JOB_LS_KEY); } catch (_) {}
  if (savedId) {
    startBulkJobTracking(Number(savedId));
  } else {
    // Si no hay nada en localStorage, checa si hay jobs activos en el server
    // (puede pasar si el user usa otra pestaña/dispositivo)
    api('GET', '/api/jobs/active').then(res => {
      const job = (res.items || [])[0];
      if (job) startBulkJobTracking(job.id);
    }).catch(() => {});
  }
}

async function startVersionCheck() {
  _bootVersion = await _fetchVersion();
  if (!_bootVersion) return;
  setInterval(async () => {
    if (_versionToastShown) return;
    const v = await _fetchVersion();
    if (v && v !== _bootVersion) {
      _versionToastShown = true;
      _showUpdateToast();
    }
  }, 120 * 1000);
}
function _showUpdateToast() {
  const el = document.createElement('div');
  el.className = 'app-update-toast';
  el.innerHTML = `
    <span>🔄 Hay una versión nueva de Wapi101 disponible</span>
    <button type="button" id="appUpdateReloadBtn">Recargar</button>
    <button type="button" id="appUpdateDismissBtn" aria-label="Cerrar">×</button>
  `;
  document.body.appendChild(el);
  document.getElementById('appUpdateReloadBtn').addEventListener('click', async () => {
    // Limpiar caches del SW antes de recargar para asegurar fresh
    try {
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
    } catch {}
    location.reload();
  });
  document.getElementById('appUpdateDismissBtn').addEventListener('click', () => {
    el.remove();
    _versionToastShown = false;
  });
}

// Cache mínimo de asesores (id+name) para selectores de asignación.
// Accesible por cualquier asesor autenticado (vs /api/advisors que requiere admin).
async function loadMinAdvisors() {
  try {
    const data = await api('GET', '/api/advisors/list-min');
    window._minAdvisorsCache = data.items || [];
  } catch (e) {
    window._minAdvisorsCache = [];
  }
}

// Traduce códigos de wa_rejected_reason de Meta a texto entendible.
const _META_REJECTED_LABELS = {
  INVALID_FORMAT: 'Formato inválido. Revisa: {{N}} bien numeradas, footer sin URLs, ejemplos llenados, sin sintaxis {nombre} (una sola llave).',
  TAG_CONTENT_MISMATCH: 'Contenido no coincide con la categoría. Si tiene "descuento" u "oferta" → cámbiala a MARKETING.',
  PROMOTIONAL: 'Marcada como promocional pero está en categoría UTILITY. Cámbiala a MARKETING.',
  CATEGORY_MISMATCH: 'Categoría incorrecta. Promociones → MARKETING; confirmaciones → UTILITY; OTPs → AUTHENTICATION.',
  ABUSIVE_CONTENT: 'Contenido detectado como abusivo o spam. Suaviza el body.',
  INVALID_VARIABLE_FORMAT: 'Variables mal formadas. Usa {{1}}, {{2}} consecutivos sin saltos.',
  SCAM: 'Detectada como posible scam. Usa lenguaje neutral, no urgente.',
  NONE: 'Sin razón específica',
};
function _friendlyRejectedReason(reason) {
  if (!reason) return '';
  return _META_REJECTED_LABELS[reason] || reason;
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── Template picker (shared, used from both chat contexts) ──────────────────

function _wa24Open(provider, lastIncomingAt) {
  // Returns: 'open' | 'closed' | 'none' (not WhatsApp)
  if (provider !== 'whatsapp') return 'none';
  if (!lastIncomingAt) return 'closed';
  return Date.now() < lastIncomingAt * 1000 + 86_400_000 ? 'open' : 'closed';
}

function _tplAvailability(tpl, provider, lastIncomingAt) {
  const wa24 = _wa24Open(provider, lastIncomingAt);
  if (tpl.type === 'wa_api') {
    // Sin conversación aún (provider=undefined) se permite igual — el modal
    // creará la convo al enviar. Solo bloqueamos si hay convo de otro canal.
    if (provider && provider !== 'whatsapp') return { ok: false, reason: 'Solo WhatsApp' };
    if (tpl.waStatus !== 'approved') return { ok: false, reason: `Plantilla ${tpl.waStatus === 'pending' ? 'pendiente de aprobación' : tpl.waStatus === 'rejected' ? 'rechazada por Meta' : 'no aprobada'}` };
    return { ok: true };
  }
  // free_form
  if (wa24 === 'closed') return { ok: false, reason: 'Ventana de 24h cerrada' };
  return { ok: true };
}

let _tplPickerCtx = null; // { textarea, provider, lastIncomingAt }

// Wrapper para abrir el picker desde el bot builder (step "Enviar mensaje").
// Solo muestra plantillas básicas (free_form) y al elegir una copia el body
// al textarea, sin abrir el modal de "Enviar plantilla" que es para chat.
function openTplPickerForBotMessage(triggerEl, textarea) {
  return openTplPicker(triggerEl, textarea, 'whatsapp', null, 'bot-message');
}

async function openTplPicker(triggerEl, textarea, provider, lastIncomingAt, mode = 'chat', convoId = null) {
  const picker = document.getElementById('rhTplPicker');
  if (!picker) return;

  // Toggle off if same trigger
  if (!picker.hidden && _tplPickerCtx?.textarea === textarea) {
    picker.hidden = true;
    _tplPickerCtx = null;
    return;
  }

  _tplPickerCtx = { textarea, provider, lastIncomingAt, mode, convoId };

  // Load templates if not yet loaded
  if (!_tplItems.length) {
    try { _tplItems = await api('GET', '/api/templates'); } catch (_) {}
  }

  const search = document.getElementById('rhTplSearch');
  if (search) search.value = '';
  _renderTplPickerList('');

  // Position above the trigger button
  picker.hidden = false;
  const rect = triggerEl.getBoundingClientRect();
  picker.style.left = Math.max(8, rect.left) + 'px';
  picker.style.bottom = (window.innerHeight - rect.top + 6) + 'px';
  picker.style.top = '';

  // Clamp to viewport width
  const pw = picker.offsetWidth || 320;
  if (rect.left + pw > window.innerWidth - 8) {
    picker.style.left = Math.max(8, window.innerWidth - pw - 8) + 'px';
  }

  if (search) search.focus();
}

function _renderTplPickerList(query) {
  const list = document.getElementById('rhTplList');
  const ctx  = _tplPickerCtx;
  if (!list || !ctx) return;

  const q = query.toLowerCase().trim();
  const items = _tplItems.filter(t => {
    // En modo bot-message solo mostramos básicas (free_form). Las wa_api
    // tienen su propio step "Enviar plantilla" — evitamos que el usuario
    // crea que está mandando como template aprobada cuando en realidad
    // sería texto plano (y fallaría fuera de las 24h).
    if (ctx.mode === 'bot-message' && t.type === 'wa_api') return false;
    if (q && !(t.displayName || t.name || '').toLowerCase().includes(q) &&
             !(t.body || '').toLowerCase().includes(q)) return false;
    return true;
  });

  if (!items.length) {
    list.innerHTML = `<div class="rh-tpl-empty">${q ? 'Sin resultados' : 'No hay plantillas creadas'}</div>`;
    return;
  }

  const wa24Label = ctx.provider === 'whatsapp'
    ? (_wa24Open(ctx.provider, ctx.lastIncomingAt) === 'open' ? '· ventana abierta' : '· ventana cerrada')
    : '';

  // Group: wa_api first, then free_form
  const sorted = [...items].sort((a, b) => {
    if (a.type === b.type) return (a.displayName || a.name).localeCompare(b.displayName || b.name);
    return a.type === 'wa_api' ? -1 : 1;
  });

  // Hint en modo bot-message para clarificar el comportamiento
  const botModeHint = ctx.mode === 'bot-message'
    ? `<div class="rh-tpl-mode-hint">${t('bot.tpl.basic_hint')}</div>`
    : '';

  let lastType = null;
  list.innerHTML = botModeHint + sorted.map(t => {
    const avail = _tplAvailability(t, ctx.provider, ctx.lastIncomingAt);
    // En modo bot-message todas son seleccionables (no aplica el lock por ventana 24h)
    const effectiveAvail = ctx.mode === 'bot-message' ? { ok: true } : avail;
    const header = t.type !== lastType
      ? `<div class="rh-tpl-group-label">${t.type === 'wa_api' ? 'WhatsApp API' : 'Básicas'}${ctx.mode === 'bot-message' ? '' : (t.type === 'wa_api' ? ' (siempre)' : ' ' + wa24Label)}</div>`
      : '';
    lastType = t.type;

    const icon = t.type === 'wa_api'
      ? `<svg class="rh-tpl-item-icon" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.994 0C5.372 0 0 5.373 0 12c0 2.118.554 4.103 1.522 5.83L0 24l6.354-1.489A11.946 11.946 0 0011.994 24C18.616 24 24 18.627 24 12S18.616 0 11.994 0z" opacity=".15"/></svg>`
      : `<svg class="rh-tpl-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`;

    const lockIcon = effectiveAvail.ok ? '' :
      `<svg class="rh-tpl-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`;

    return `${header}<button class="rh-tpl-item${effectiveAvail.ok ? '' : ' is-locked'}" data-tpl-id="${t.id}" ${effectiveAvail.ok ? '' : 'disabled'} title="${effectiveAvail.ok ? '' : escapeHtml(effectiveAvail.reason)}">
      ${icon}
      <span class="rh-tpl-item-name">${escapeHtml(t.displayName || t.name)}</span>
      <span class="rh-tpl-item-preview">${escapeHtml((t.body || '').slice(0, 60))}${(t.body || '').length > 60 ? '…' : ''}</span>
      ${lockIcon}${effectiveAvail.ok ? '' : `<span class="rh-tpl-reason">${escapeHtml(effectiveAvail.reason)}</span>`}
    </button>`;
  }).join('');

  // Click — comportamiento depende del tipo de plantilla y del modo
  list.querySelectorAll('.rh-tpl-item:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const tpl = _tplItems.find(t => t.id === Number(btn.dataset.tplId));
      if (!tpl || !_tplPickerCtx) return;

      // En modo bot-message: siempre copiar body al textarea (no abrir modal)
      if (_tplPickerCtx.mode === 'bot-message') {
        const ta = _tplPickerCtx.textarea;
        if (ta) {
          ta.value = tpl.body || '';
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.focus();
        }
        document.getElementById('rhTplPicker').hidden = true;
        _tplPickerCtx = null;
        return;
      }

      if (tpl.type === 'wa_api') {
        // wa_api → abrir modal "Enviar plantilla" (auto-llena del contacto, pide manuales)
        // Usar convoId del contexto (lead detail) si está disponible, si no el del chat sidebar.
        document.getElementById('rhTplPicker').hidden = true;
        openSendTemplateModal(tpl, _tplPickerCtx?.convoId ?? ACTIVE_CONVO_ID);
        return;
      }

      // free_form → copiar texto al textarea (comportamiento clásico) + adjunto si la plantilla
      // tiene header media. Solo aplica cuando se elige plantilla desde el chat (no bot-message).
      const ta = _tplPickerCtx.textarea;
      if (ta) {
        ta.value = tpl.body || '';
        ta.dispatchEvent(new Event('input'));
        ta.focus();
        if (_tplPickerCtx.mode !== 'bot-message' && tpl.headerMediaUrl && tpl.headerType && tpl.headerType !== 'TEXT') {
          loadTemplateMediaAsAttachment(tpl).catch(err => {
            toast('No se pudo cargar el adjunto de la plantilla: ' + err.message, 'warning');
          });
        }
        // Si estamos en bot-message, guardar el origen del texto para que la
        // validación pueda avisar si esa plantilla se borra después. Persiste
        // al guardar el bot porque collectStepConfig lee inputs por
        // [data-field], así que escribimos un input hidden hermano del textarea.
        if (_tplPickerCtx.mode === 'bot-message' && tpl.id) {
          const sid = ta.dataset.sid;
          if (sid) {
            const body = document.querySelector(`[data-body-sid="${sid}"]`);
            if (body) {
              let hidden = body.querySelector(`input[data-field="fromTemplateId"]`);
              if (!hidden) {
                hidden = document.createElement('input');
                hidden.type = 'hidden';
                hidden.dataset.field = 'fromTemplateId';
                hidden.dataset.sid = sid;
                body.appendChild(hidden);
              }
              hidden.value = String(tpl.id);
              // Disparar el handler para que sbSteps[].config se actualice
              hidden.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        }
      }
      document.getElementById('rhTplPicker').hidden = true;
      _tplPickerCtx = null;
    });
  });
}

function setupTplPicker() {
  // Close button
  document.getElementById('rhTplPickerClose')?.addEventListener('click', () => {
    document.getElementById('rhTplPicker').hidden = true;
    _tplPickerCtx = null;
  });

  // Search
  document.getElementById('rhTplSearch')?.addEventListener('input', e => {
    _renderTplPickerList(e.target.value);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    const picker = document.getElementById('rhTplPicker');
    if (!picker || picker.hidden) return;
    if (!picker.contains(e.target) && !e.target.closest('.rh-tpl-trigger')) {
      picker.hidden = true;
      _tplPickerCtx = null;
    }
  }, true);

  // Main chat trigger
  document.getElementById('rhTplTrigger')?.addEventListener('click', e => {
    e.stopPropagation();
    const convo = CONVERSATIONS.find(c => c.id === ACTIVE_CONVO_ID);
    const ta = document.querySelector('.rh-reply-form textarea');
    if (!ta) return;
    openTplPicker(e.currentTarget, ta, convo?.provider, convo?.lastIncomingAt);
  });

  // Exp-detail trigger
  document.getElementById('expDetailTplTrigger')?.addEventListener('click', e => {
    e.stopPropagation();
    const convo = EXP_DETAIL_CONVOS.find(c => c.id === EXP_DETAIL_CONVO_ID);
    const ta = document.getElementById('expDetailReplyText');
    if (!ta) return;
    openTplPicker(e.currentTarget, ta, convo?.provider, convo?.lastIncomingAt, 'chat', EXP_DETAIL_CONVO_ID);
  });

  async function _aiSuggest(convoId, textarea) {
    if (!convoId || !textarea) return;
    const btn = textarea.closest('.rh-reply-input-row')?.querySelector('.rh-ai-suggest-btn');
    if (btn) { btn.disabled = true; btn.style.opacity = '0.5'; }
    try {
      const { suggestion } = await api('POST', `/api/conversations/${convoId}/ai-suggest`, {});
      if (suggestion) {
        textarea.value = suggestion;
        textarea.dispatchEvent(new Event('input'));
        textarea.focus();
      }
    } catch (e) {
      alert('IA: ' + e.message);
    } finally {
      if (btn) { btn.disabled = false; btn.style.opacity = ''; }
    }
  }

  document.getElementById('rhAiSuggestBtn')?.addEventListener('click', () => {
    const ta = document.querySelector('.rh-reply-form textarea');
    _aiSuggest(ACTIVE_CONVO_ID, ta);
  });

  document.getElementById('expDetailAiSuggestBtn')?.addEventListener('click', () => {
    const ta = document.getElementById('expDetailReplyText');
    _aiSuggest(EXP_DETAIL_CONVO_ID, ta);
  });
}

// TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

let _tplTab = 'wa_api';
let _tplItems = [];
let _tplEditId = null;
let _tplFilter = '';

async function loadTemplates() {
  try {
    await loadTemplateTags();
    _tplItems = await api('GET', '/api/templates');
    renderTemplates();
  } catch (e) { console.error('loadTemplates:', e); }
}

// State para etiquetas y ordenamiento (mismo patrón que bots)
let _tplTags = [];
let _tplTagFilter = null;       // null = todas, number = id de tag
let _tplSort = (() => { try { return localStorage.getItem('tplSort') || 'manual'; } catch { return 'manual'; } })();
function _persistTplSort(v) { try { localStorage.setItem('tplSort', v); } catch {} }
let _tplGroupByTag = false;     // si true, agrupa por etiqueta (sort se aplica dentro de cada grupo)

async function loadTemplateTags() {
  try {
    const data = await api('GET', '/api/template-tags');
    _tplTags = data.items || [];
  } catch (e) { _tplTags = []; }
}

function renderTplTagFilters() {
  const root = document.getElementById('tplTagFilters');
  if (!root) return;
  const allActive = _tplTagFilter === null ? 'is-active' : '';
  const tagPills = _tplTags.map(t => `
    <button type="button" class="bot-tag-filter ${_tplTagFilter === t.id ? 'is-active' : ''}" data-tpl-tag-filter="${t.id}">
      <span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>
      ${escHtml(t.name)}
    </button>
  `).join('');
  root.innerHTML = `
    <button type="button" class="bot-tag-filter ${allActive}" data-tpl-tag-filter="">Todas</button>
    ${tagPills}
    <select id="tplSortSelect" class="bot-sort-select" title="Ordenar plantillas">
      <option value="manual"${_tplSort === 'manual' ? ' selected' : ''}>Manual (arrastrar)</option>
      <option value="date_desc"${_tplSort === 'date_desc' ? ' selected' : ''}>Más nueva</option>
      <option value="date_asc"${_tplSort === 'date_asc' ? ' selected' : ''}>Más vieja</option>
      <option value="name_asc"${_tplSort === 'name_asc' ? ' selected' : ''}>A → Z</option>
      <option value="name_desc"${_tplSort === 'name_desc' ? ' selected' : ''}>Z → A</option>
    </select>
    <label class="tpl-group-toggle" title="Si está activo, agrupa por etiqueta. El orden se aplica dentro de cada grupo.">
      <input type="checkbox" id="tplGroupByTagToggle" ${_tplGroupByTag ? 'checked' : ''} />
      <span class="tpl-group-toggle-track"><span class="tpl-group-toggle-thumb"></span></span>
      <span class="tpl-group-toggle-label">Agrupar por etiqueta</span>
    </label>
    <button type="button" class="bot-tag-manage-btn" id="tplTagManageBtn" title="Gestionar etiquetas">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14"><path d="M3 3h7l7 7-7 7-7-7V3z"/><circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none"/></svg>
      Etiquetas
    </button>`;
}

function tplRowTagsHtml(tpl) {
  if (!Array.isArray(tpl.tags) || !tpl.tags.length) return '';
  return `<span class="bot-row-tags">${tpl.tags.map(t => `<span class="bot-tag-pill" style="--tag-color:${escHtml(t.color)};${tplTagPillStyle(t.color)}"><span class="bot-tag-dot" style="background:${escHtml(t.color)}"></span>${escHtml(t.name)}</span>`).join('')}</span>`;
}

function _applyTplSort(arr) {
  const a = [...arr];
  switch (_tplSort) {
    case 'manual':    return a; // respetar el orden del backend (sort_order ASC)
    case 'date_asc':  a.sort((x, y) => (x.createdAt || 0) - (y.createdAt || 0)); break;
    case 'name_asc':  a.sort((x, y) => (x.displayName || x.name || '').localeCompare(y.displayName || y.name || '')); break;
    case 'name_desc': a.sort((x, y) => (y.displayName || y.name || '').localeCompare(x.displayName || x.name || '')); break;
    default: a.sort((x, y) => (y.createdAt || 0) - (x.createdAt || 0));
  }
  return a;
}

// Agrupa plantillas por su PRIMERA etiqueta (alfabéticamente). Las que no
// tienen etiqueta caen al grupo "Sin etiqueta" (al final). Una plantilla
// con varias tags aparece UNA sola vez en su tag primaria — sin duplicar.
function _groupTplByTag(arr) {
  const groups = new Map(); // tagId | '__notag' → { tag, items[] }
  for (const t of arr) {
    const sortedTags = (t.tags || []).slice().sort((a, b) => a.name.localeCompare(b.name));
    const primary = sortedTags[0] || null;
    const key = primary ? primary.id : '__notag';
    if (!groups.has(key)) groups.set(key, { tag: primary, items: [] });
    groups.get(key).items.push(t);
  }
  // Ordena los grupos: tags por nombre, "Sin etiqueta" al final
  const sortedGroups = [...groups.values()].sort((a, b) => {
    if (!a.tag && !b.tag) return 0;
    if (!a.tag) return 1;
    if (!b.tag) return -1;
    return a.tag.name.localeCompare(b.tag.name);
  });
  // Aplica el sort dentro de cada grupo
  sortedGroups.forEach(g => { g.items = _applyTplSort(g.items); });
  return sortedGroups;
}

function renderTemplates() {
  const list = document.getElementById('tplList');
  const empty = document.getElementById('tplEmpty');
  if (!list) return;

  // Re-render filtros (idempotente, refleja cambios de _tplTags/_tplTagFilter)
  renderTplTagFilters();

  const q = (_tplFilter || '').trim().toLowerCase();
  const matchesQuery = (t) => {
    if (!q) return true;
    return (
      (t.displayName || '').toLowerCase().includes(q) ||
      (t.name || '').toLowerCase().includes(q) ||
      (t.body || '').toLowerCase().includes(q) ||
      (t.category || '').toLowerCase().includes(q)
    );
  };
  const matchesTag = (t) => {
    if (_tplTagFilter === null) return true;
    return Array.isArray(t.tags) && t.tags.some(x => x.id === _tplTagFilter);
  };
  let filtered = _tplItems.filter(t => t.type === _tplTab && matchesQuery(t) && matchesTag(t));
  filtered = _applyTplSort(filtered);

  // Update badges
  const waCount   = _tplItems.filter(t => t.type === 'wa_api').length;
  const freeCount = _tplItems.filter(t => t.type === 'free_form').length;
  const badgeWa   = document.getElementById('tplBadgeWa');
  const badgeFree = document.getElementById('tplBadgeFree');
  if (badgeWa) {
    badgeWa.textContent = waCount || '';
    badgeWa.style.display = waCount ? '' : 'none';
  }
  if (badgeFree) {
    badgeFree.textContent = freeCount || '';
    badgeFree.style.display = freeCount ? '' : 'none';
  }

  // Remove old cards y headers
  list.querySelectorAll('.tpl-card, .tpl-group-header').forEach(c => c.remove());

  if (empty) empty.hidden = filtered.length > 0;

  function renderCard(t) {
    const card = document.createElement('div');
    card.className = 'tpl-card';
    card.dataset.id = t.id;
    if (_tplSort === 'manual') {
      card.draggable = true;
      card.classList.add('is-draggable');
    }
    const isWa = t.type === 'wa_api';
    const statusLabel = { draft: 'Borrador', pending: 'Pendiente', approved: 'Aprobada', rejected: 'Rechazada' };
    const rejectionInfo = (isWa && t.waStatus === 'rejected' && t.waRejectedReason)
      ? `<div class="tpl-rejected-reason">Motivo: ${escHtml(_friendlyRejectedReason(t.waRejectedReason))}</div>` : '';
    const createdLabel = t.createdAt
      ? `<span class="tpl-card-date" title="${new Date(t.createdAt * 1000).toLocaleString('es-MX')}">📅 ${escHtml(relTime(t.createdAt))}</span>`
      : '';
    const usedByBotsHtml = (Array.isArray(t.usedByBots) && t.usedByBots.length)
      ? `<div class="tpl-card-bots"><span class="tpl-card-bots-label">🤖 Usado en:</span>${
          t.usedByBots.map(b => `<button type="button" class="tpl-card-bot-pill" data-go-to-bot="${b.id}" title="Abrir bot">${escHtml(b.name)}</button>`).join('')
        }</div>`
      : '';
    // Drag handle abajo del círculo del icono — solo visible en modo manual
    const dragHandle = _tplSort === 'manual'
      ? `<span class="tpl-card-drag-handle" title="Arrastra para reordenar">
          <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.5"/><circle cx="7.5" cy="2.5" r="1.5"/><circle cx="2.5" cy="7" r="1.5"/><circle cx="7.5" cy="7" r="1.5"/><circle cx="2.5" cy="11.5" r="1.5"/><circle cx="7.5" cy="11.5" r="1.5"/></svg>
        </span>`
      : '';
    card.innerHTML = `
      <div class="tpl-card-icon-wrap">
        <div class="tpl-card-icon ${isWa ? 'wa' : 'free'}">${isWa ? '📱' : '💬'}</div>
        ${dragHandle}
      </div>
      <div class="tpl-card-body">
        <div class="tpl-card-name">${escHtml(t.displayName || t.name)} ${tplRowTagsHtml(t)}</div>
        <div class="tpl-card-meta">${isWa ? escHtml(t.category) + ' · ' + escHtml(t.language) + ' · ' : ''}
          <span class="tpl-status ${t.waStatus}">${statusLabel[t.waStatus] || t.waStatus}</span>
          ${createdLabel ? ' · ' + createdLabel : ''}
        </div>
        ${rejectionInfo}
        <div class="tpl-card-body-text">${escHtml(t.body)}</div>
        ${usedByBotsHtml}
      </div>
      <div class="tpl-card-actions">
        ${isWa && (t.waStatus === 'draft' || t.waStatus === 'rejected') ? `<button class="icon-btn tpl-card-action-send tpl-submit-btn" data-id="${t.id}" title="${t.waStatus === 'rejected' ? 'Reenviar a Meta' : 'Enviar a Meta'}"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><line x1="17" y1="3" x2="9" y2="11"/><polygon points="17 3 11 18 9 11 2 8 17 3" fill="currentColor" stroke="none"/></svg></button>` : ''}
        ${isWa && t.waStatus === 'pending' ? `<button class="icon-btn tpl-sync-btn" data-id="${t.id}" title="Sync con Meta"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><path d="M2 10a8 8 0 0 1 13.3-5.3L18 8"/><path d="M18 10a8 8 0 0 1-13.3 5.3L2 12"/><polyline points="18 2 18 8 12 8"/><polyline points="2 18 2 12 8 12"/></svg></button>` : ''}
        <button class="icon-btn tpl-edit-btn" data-id="${t.id}" title="Editar"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><path d="M14.5 2.5l3 3L5.5 17.5h-3v-3L14.5 2.5z"/></svg></button>
        <button class="icon-btn tpl-clone-btn" data-id="${t.id}" title="Clonar"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M3 13V5a2 2 0 0 1 2-2h8"/></svg></button>
        <button class="icon-btn tpl-card-action-del tpl-del-btn" data-id="${t.id}" title="Eliminar"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><polyline points="3 6 17 6"/><path d="M8 6V4h4v2"/><rect x="5" y="6" width="10" height="11" rx="1"/><line x1="8" y1="9" x2="8" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/></svg></button>
      </div>`;
    list.appendChild(card);
  }

  if (_tplGroupByTag) {
    const groups = _groupTplByTag(filtered);
    for (const g of groups) {
      const header = document.createElement('div');
      header.className = 'tpl-group-header';
      const tagPillHtml = g.tag
        ? `<span class="bot-tag-pill" style="${tplTagPillStyle(g.tag.color)}"><span class="bot-tag-dot" style="background:${escHtml(g.tag.color)}"></span>${escHtml(g.tag.name)}</span>`
        : '<span class="tpl-group-no-tag">— Sin etiqueta —</span>';
      header.innerHTML = `${tagPillHtml} <span class="tpl-group-count">${g.items.length}</span>`;
      list.appendChild(header);
      for (const t of g.items) renderCard(t);
    }
  } else {
    for (const t of filtered) renderCard(t);
  }
}

// State del modal de plantillas
let _tplDraftButtons = [];        // [{type, text, url?, phone_number?}]
let _tplDraftMediaFile = null;    // File pendiente de upload
// Media existente del header al editar (preserved hasta que el user pique
// otro archivo o haga click en "× Quitar"). Si _tplDraftRemoveMedia=true
// al guardar, mandamos headerMediaHandle/Url=null para borrar el archivo viejo.
let _tplDraftExistingMedia = null;  // { headerType, headerMediaUrl, headerMediaHandle } o null
let _tplDraftRemoveMedia = false;
let _tplDraftPlaceholders = [];   // [{label, example, contactField}] — uno por cada {{N}} del body
let _tplDraftTagIds = [];         // ids de tags asignadas en el modal

function openTplModal(tmpl = null) {
  _tplEditId = tmpl?.id || null;
  _tplDraftMediaFile = null;
  _tplDraftRemoveMedia = false;
  // Limpiar el file input — si quedó algo de la sesión anterior se borra
  const fileInput0 = document.getElementById('tplHeaderFile');
  if (fileInput0) fileInput0.value = '';
  const modal = document.getElementById('tplModal');
  if (!modal) return;
  const card = modal.querySelector('.tpl-modal-card');

  document.getElementById('tplModalTitle').textContent = tmpl ? 'Editar plantilla' : 'Nueva plantilla';

  if (tmpl) {
    document.getElementById('tplName').value         = tmpl.name || '';
    document.getElementById('tplDisplayName').value  = tmpl.displayName || '';
    document.getElementById('tplCategory').value     = tmpl.category || 'UTILITY';
    document.getElementById('tplLanguage').value     = tmpl.language || 'es_MX';
    document.getElementById('tplHeader').value       = tmpl.header || '';
    document.getElementById('tplBody').value         = tmpl.body || '';
    document.getElementById('tplFooter').value       = tmpl.footer || '';
    const radio = document.querySelector(`input[name="tplType"][value="${tmpl.type}"]`);
    if (radio) radio.checked = true;

    // Header type — guardamos la media existente para preview + toggle de remove
    const ht = (tmpl.headerType || 'TEXT').toUpperCase();
    const htRadio = document.querySelector(`input[name="tplHeaderType"][value="${ht}"]`);
    if (htRadio) htRadio.checked = true;
    _tplDraftExistingMedia = (ht !== 'TEXT' && tmpl.headerMediaHandle) ? {
      headerType:        ht,
      headerMediaUrl:    tmpl.headerMediaUrl || null,
      headerMediaHandle: tmpl.headerMediaHandle,
    } : null;
    setHeaderTypeUI(ht, _tplDraftExistingMedia);

    // Buttons
    _tplDraftButtons = Array.isArray(tmpl.buttons) ? JSON.parse(JSON.stringify(tmpl.buttons)) : [];
    // Placeholders del body
    _tplDraftPlaceholders = Array.isArray(tmpl.bodyPlaceholders) ? JSON.parse(JSON.stringify(tmpl.bodyPlaceholders)) : [];
    // Tags asignadas
    _tplDraftTagIds = Array.isArray(tmpl.tags) ? tmpl.tags.map(t => t.id) : [];
  } else {
    document.getElementById('tplName').value = '';
    document.getElementById('tplDisplayName').value = '';
    document.getElementById('tplHeader').value = '';
    document.getElementById('tplBody').value = '';
    document.getElementById('tplFooter').value = '';
    document.getElementById('tplCategory').value = 'UTILITY';
    document.getElementById('tplLanguage').value = 'es_MX';
    document.getElementById('tplTypeFreeForm').checked = true;
    const htText = document.querySelector('input[name="tplHeaderType"][value="TEXT"]');
    if (htText) htText.checked = true;
    _tplDraftExistingMedia = null;
    setHeaderTypeUI('TEXT', null);
    _tplDraftButtons = [];
    _tplDraftPlaceholders = [];
    _tplDraftTagIds = [];
  }
  renderTplButtonsList();
  renderTplPlaceholdersBox();
  renderTplTagsPickers();
  // Reset file input
  const fileInput = document.getElementById('tplHeaderFile');
  if (fileInput) fileInput.value = '';

  const errEl = document.getElementById('tplError');
  if (errEl) { errEl.hidden = true; errEl.textContent = ''; }
  updateTplModalType(card);

  // Bloquear edición si la plantilla wa_api ya está en revisión/aprobada/rechazada.
  // Meta no permite cambiar contenido aprobado, y aunque permita editar drafts,
  // si se modifica el body habría que re-enviar a Meta y obtener nuevo waId.
  applyTplLockState(tmpl);

  modal.hidden = false;
}

// Duplica una plantilla: copia todos los campos como nuevo draft pero con
// nombre obligatoriamente distinto (sufijo random tipo Kommo). Se cierra
// el modal de la actual y se abre uno limpio en modo "nueva plantilla".
function duplicateCurrentTemplate(srcTmpl) {
  if (!srcTmpl) return;
  closeTplModal();
  // Sufijo de 4 chars para forzar nombre nuevo (Meta no acepta nombres reusados)
  const suffix = Math.random().toString(36).slice(2, 6);
  const newName = (srcTmpl.name || 'plantilla').replace(/_v\d+_[a-z0-9]+$|_[a-z0-9]{4,8}$/i, '') + `_v2_${suffix}`;
  // Construir un draft a partir del original
  const draft = {
    ...srcTmpl,
    id: undefined,
    waId: null,
    waStatus: 'draft',
    waRejectedReason: null,
    name: newName,
    displayName: srcTmpl.displayName ? `${srcTmpl.displayName} (copia)` : null,
  };
  setTimeout(() => openTplModal(draft), 50);
}

// Sanea el nombre interno en vivo: minúsculas, _ por espacios, quita acentos
// y caracteres no permitidos por Meta. Muestra hint si tuvo que limpiar.
function sanitizeTplName(raw) {
  return String(raw || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // quita acentos
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

function setupTplNameValidation() {
  const input = document.getElementById('tplName');
  const hint  = document.getElementById('tplNameHint');
  if (!input || input._tplValidationBound) return;
  input._tplValidationBound = true;
  input.addEventListener('input', () => {
    const before = input.value;
    const after = sanitizeTplName(before);
    if (before !== after) {
      input.value = after;
      const removed = [];
      if (before !== before.toLowerCase()) removed.push('mayúsculas → minúsculas');
      if (/\s/.test(before)) removed.push('espacios → _');
      if (/[^a-z0-9_\s]/i.test(before)) removed.push('quitamos signos/acentos');
      if (hint) {
        hint.querySelector('span').textContent = 'Auto-corregido: ' + removed.join(' · ') + '. Meta solo acepta minúsculas, números y _.';
        hint.hidden = false;
        clearTimeout(input._hintTimer);
        input._hintTimer = setTimeout(() => { hint.hidden = true; }, 4000);
      }
    }
  });
}

function applyTplLockState(tmpl) {
  const card = document.querySelector('.tpl-modal-card');
  if (!card) return;
  const isWa = !!tmpl && tmpl.type === 'wa_api';
  const status = (tmpl?.waStatus || 'draft');
  const locked = isWa && status !== 'draft';

  // Banner — crear si no existe
  let banner = document.getElementById('tplLockBanner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'tplLockBanner';
    banner.className = 'tpl-lock-banner';
    const body = card.querySelector('.modal-body');
    if (body) body.insertBefore(banner, body.firstChild);
  }
  if (locked) {
    const labels = {
      pending: { icon: '🕐', text: 'EN REVISIÓN por Meta — no puedes editar el contenido (lo que Meta valida).' },
      approved:{ icon: '✅', text: 'APROBADA por Meta — editar el contenido la invalidaría con Meta.' },
      rejected:{ icon: '❌', text: 'RECHAZADA por Meta — para reintentar duplica con otro nombre (Meta bloquea el nombre 30 días).' },
    };
    const meta = labels[status] || { icon: '🔒', text: 'Solo lectura del contenido.' };
    banner.innerHTML = `
      <div>${meta.icon} <strong>${meta.text}</strong></div>
      <div style="margin-top:6px;font-size:12px;font-weight:400">📝 Sí puedes editar: <strong>"Nombre para mostrar"</strong> y <strong>etiquetas</strong> (organizacionales tuyas, Meta no las ve).</div>
      <button type="button" class="btn btn--primary btn--sm" id="tplDuplicateBtn" style="margin-top:8px">📋 Duplicar como nueva (para cambiar contenido)</button>
    `;
    banner.hidden = false;
    document.getElementById('tplDuplicateBtn')?.addEventListener('click', () => duplicateCurrentTemplate(tmpl));
  } else {
    banner.hidden = true;
  }

  // Locked fields = los que Meta valida. NO se bloquean los campos puramente
  // organizacionales (display_name + tags) — Meta nunca los ve.
  const lockedSelectors = [
    '#tplName', '#tplCategory', '#tplLanguage',
    '#tplHeader', '#tplBody', '#tplFooter',
    '#tplHeaderFile',
    'input[name="tplType"]', 'input[name="tplHeaderType"]',
    '.tpl-var-btn', '.tpl-ph-label', '.tpl-ph-example', '.tpl-ph-field',
    '.tpl-btn-row select, .tpl-btn-row input, .tpl-btn-remove', '#tplAddButtonBtn',
  ];
  card.querySelectorAll(lockedSelectors.join(', ')).forEach(el => {
    el.disabled = locked;
    if (locked) el.classList.add('is-locked');
    else el.classList.remove('is-locked');
  });

  const saveBtn = document.getElementById('tplModalSave');
  if (saveBtn) {
    saveBtn.disabled = false;  // siempre habilitado — al menos display_name + tags se pueden editar
    saveBtn.textContent = locked ? 'Guardar nombre y etiquetas' : 'Guardar plantilla';
  }
}

// existingMedia: { headerType, headerMediaUrl, headerMediaHandle } o null
function setHeaderTypeUI(type, existingMedia) {
  const isMedia = type && type !== 'TEXT';
  const txtInput = document.getElementById('tplHeader');
  const mediaBox = document.getElementById('tplHeaderMediaBox');
  const mediaStatus = document.getElementById('tplHeaderMediaStatus');
  const previewBox = document.getElementById('tplHeaderMediaPreview');
  const previewThumb = document.getElementById('tplHeaderMediaPreviewThumb');
  const previewLink = document.getElementById('tplHeaderMediaPreviewLink');

  if (txtInput) txtInput.hidden = !!isMedia;
  if (mediaBox) mediaBox.hidden = !isMedia;
  if (!isMedia) return;

  // Solo se muestra el preview si: hay media existente Y el tipo coincide
  // (si el user cambió IMAGE → VIDEO, el preview viejo no aplica).
  const showPreview = !!(existingMedia && existingMedia.headerType === type && !_tplDraftRemoveMedia);

  if (previewBox) previewBox.hidden = !showPreview;

  if (showPreview && previewThumb) {
    const url = existingMedia.headerMediaUrl;
    if (type === 'IMAGE' && url) {
      previewThumb.innerHTML = `<img src="${escHtml(url)}" alt="Header" />`;
    } else if (type === 'VIDEO') {
      previewThumb.innerHTML = '<div class="tpl-header-media-icon">🎬</div>';
    } else if (type === 'DOCUMENT') {
      previewThumb.innerHTML = '<div class="tpl-header-media-icon">📄</div>';
    } else {
      previewThumb.innerHTML = '<div class="tpl-header-media-icon">📎</div>';
    }
    if (previewLink) {
      if (url) { previewLink.href = url; previewLink.style.display = ''; }
      else previewLink.style.display = 'none';
    }
  }

  if (mediaStatus) {
    if (showPreview) {
      mediaStatus.textContent = '✓ Archivo guardado. Selecciona uno nuevo solo si querés reemplazarlo, o tocá × para quitarlo.';
    } else if (existingMedia && existingMedia.headerType !== type) {
      mediaStatus.textContent = `Cambiaste el tipo a ${type}. El archivo ${existingMedia.headerType} anterior se reemplazará al guardar — sube el nuevo aquí.`;
    } else if (_tplDraftRemoveMedia) {
      mediaStatus.textContent = 'Marcado para quitar. Selecciona un archivo nuevo o guardá vacío para dejar el header sin archivo.';
    } else {
      mediaStatus.textContent = 'Selecciona un archivo. Se sube a Meta como ejemplo de header.';
    }
  }
}

function renderTplButtonsList() {
  const list = document.getElementById('tplButtonsList');
  if (!list) return;
  if (!_tplDraftButtons.length) {
    list.innerHTML = '<p class="tpl-hint-inline">Sin botones. Click "+ Agregar botón" para añadir.</p>';
    return;
  }
  list.innerHTML = _tplDraftButtons.map((b, i) => {
    const t = b.type || 'QUICK_REPLY';
    const textVal = (b.text || '').replace(/"/g, '&quot;');
    const extraVal = ((b.url || b.phone_number) || '').replace(/"/g, '&quot;');
    const extraField = t === 'URL'
      ? `<input class="int-input tpl-btn-extra" data-i="${i}" data-field="url" value="${extraVal}" placeholder="https://..." />`
      : t === 'PHONE_NUMBER'
        ? `<input class="int-input tpl-btn-extra" data-i="${i}" data-field="phone_number" value="${extraVal}" placeholder="+5213311234567" />`
        : '';
    return `
      <div class="tpl-btn-row" data-i="${i}">
        <select class="int-input tpl-btn-type" data-i="${i}">
          <option value="QUICK_REPLY"${t==='QUICK_REPLY'?' selected':''}>Respuesta rápida</option>
          <option value="URL"${t==='URL'?' selected':''}>Abrir URL</option>
          <option value="PHONE_NUMBER"${t==='PHONE_NUMBER'?' selected':''}>Llamar teléfono</option>
        </select>
        <input class="int-input tpl-btn-text" data-i="${i}" value="${textVal}" placeholder="Texto del botón (máx 25)" maxlength="25" />
        ${extraField}
        <button type="button" class="btn btn--ghost btn--sm tpl-btn-remove" data-i="${i}" title="Quitar botón">×</button>
      </div>
    `;
  }).join('');
}

function addTplButton() {
  if (_tplDraftButtons.length >= 3) {
    toast('Máximo 3 botones por plantilla', 'warning');
    return;
  }
  _tplDraftButtons.push({ type: 'QUICK_REPLY', text: '' });
  renderTplButtonsList();
}

// Detecta {{1}}, {{2}}, ... en el body y sincroniza el array de placeholders.
// Mantiene los labels/ejemplos que el usuario ya puso para placeholders existentes.
function syncTplPlaceholdersFromBody() {
  const body = document.getElementById('tplBody')?.value || '';
  const nums = [...body.matchAll(/\{\{(\d+)\}\}/g)].map(m => Number(m[1]));
  if (!nums.length) {
    _tplDraftPlaceholders = [];
    renderTplPlaceholdersBox();
    return;
  }
  const max = Math.max(...nums);
  // Asegura que haya un slot por cada índice 1..max
  const next = [];
  for (let i = 0; i < max; i++) {
    next[i] = _tplDraftPlaceholders[i] || { label: '', example: '' };
  }
  _tplDraftPlaceholders = next;
  renderTplPlaceholdersBox();
}

// Defaults para cada campo del contacto: el label y el ejemplo se auto-llenan
// para que Meta tenga datos realistas durante la review.
const CONTACT_FIELD_DEFAULTS = {
  first_name: { label: 'Nombre',          example: 'Luis' },
  last_name:  { label: 'Apellido',        example: 'Pérez' },
  full_name:  { label: 'Nombre completo', example: 'Luis Pérez' },
  phone:      { label: 'Teléfono',        example: '+5213311234567' },
  email:      { label: 'Email',           example: 'cliente@gmail.com' },
};

function renderTplPlaceholdersBox() {
  const box = document.getElementById('tplPlaceholdersBox');
  const list = document.getElementById('tplPlaceholdersList');
  if (!box || !list) return;
  // Solo se muestra si hay placeholders detectados Y la plantilla es wa_api
  const isWa = document.getElementById('tplTypeWaApi')?.checked;
  if (!isWa || !_tplDraftPlaceholders.length) {
    box.hidden = true;
    list.innerHTML = '';
    return;
  }
  box.hidden = false;
  list.innerHTML = _tplDraftPlaceholders.map((ph, i) => {
    const cf  = ph.contactField || '';
    const opt = (val, lbl) => `<option value="${val}"${cf===val?' selected':''}>${lbl}</option>`;
    const dropdownHtml = `
      <select class="int-input tpl-ph-field" data-i="${i}" data-field="contactField" title="¿De qué campo del contacto se llena al enviar?">
        ${opt('', '— Manual —')}
        ${opt('first_name', 'Nombre')}
        ${opt('last_name',  'Apellido')}
        ${opt('full_name',  'Nombre completo')}
        ${opt('phone',      'Teléfono')}
        ${opt('email',      'Email')}
      </select>`;

    if (cf) {
      // Mapeado → label + ejemplo se llenan solos, no se piden al usuario.
      const def = CONTACT_FIELD_DEFAULTS[cf] || { label: cf, example: '—' };
      return `
        <div class="tpl-placeholder-row tpl-placeholder-row--mapped" data-i="${i}">
          <span class="tpl-placeholder-num">{{${i + 1}}}</span>
          ${dropdownHtml}
          <span class="tpl-ph-auto-preview">→ ejemplo para Meta: <strong>${escapeHtml(def.example)}</strong></span>
        </div>`;
    }

    // Manual → pide label + ejemplo
    const label   = (ph.label   || '').replace(/"/g, '&quot;');
    const example = (ph.example || '').replace(/"/g, '&quot;');
    return `
      <div class="tpl-placeholder-row tpl-placeholder-row--manual" data-i="${i}">
        <span class="tpl-placeholder-num">{{${i + 1}}}</span>
        ${dropdownHtml}
        <input class="int-input tpl-ph-label"   data-i="${i}" data-field="label"   value="${label}"   placeholder="Para qué es (ej: Cupón)" maxlength="40" />
        <input class="int-input tpl-ph-example" data-i="${i}" data-field="example" value="${example}" placeholder="Ejemplo para Meta (ej: PROMO30)" maxlength="60" />
      </div>`;
  }).join('');
}

function _collectTplPlaceholders() {
  const rows = document.querySelectorAll('#tplPlaceholdersList .tpl-placeholder-row');
  const out = [];
  rows.forEach(row => {
    const i = Number(row.dataset.i);
    out[i] = {
      label:   row.querySelector('.tpl-ph-label')?.value.trim()   || '',
      example: row.querySelector('.tpl-ph-example')?.value.trim() || '',
    };
  });
  return out;
}

// Marca en rojo el input de URL del botón problemático y lo enfoca para que
// el usuario vea exactamente cuál corregir. La clase se quita cuando edita.
function _highlightTplBtnUrlError(idx) {
  document.querySelectorAll('.tpl-btn-extra').forEach(el => el.classList.remove('is-invalid'));
  const row = document.querySelector(`#tplButtonsList .tpl-btn-row[data-i="${idx}"]`);
  const input = row?.querySelector('.tpl-btn-extra');
  if (input) {
    input.classList.add('is-invalid');
    input.focus();
    input.select?.();
    input.addEventListener('input', () => input.classList.remove('is-invalid'), { once: true });
  }
}

function _collectTplButtons() {
  // Recolecta el state desde los inputs por si hubo cambios sin re-render
  const rows = document.querySelectorAll('#tplButtonsList .tpl-btn-row');
  const out = [];
  rows.forEach(row => {
    const i = Number(row.dataset.i);
    const type = row.querySelector('.tpl-btn-type')?.value || 'QUICK_REPLY';
    const text = row.querySelector('.tpl-btn-text')?.value.trim() || '';
    const extraEl = row.querySelector('.tpl-btn-extra');
    const b = { type, text };
    if (type === 'URL' && extraEl) b.url = extraEl.value.trim();
    if (type === 'PHONE_NUMBER' && extraEl) b.phone_number = extraEl.value.trim();
    if (text) out.push(b);
    void i;
  });
  return out;
}

function updateTplModalType(card) {
  const isWa = document.getElementById('tplTypeWaApi')?.checked;
  if (card) card.classList.toggle('is-free', !isWa);
  // Free templates no soportan header tipo TEXT (no se manda) — si está
  // seleccionado al cambiar a free, switch a IMAGE para que el form no quede
  // en estado vacío (la opción TEXT está oculta por CSS para free).
  if (!isWa) {
    const textRadio = document.querySelector('input[name="tplHeaderType"][value="TEXT"]');
    if (textRadio?.checked) {
      const imgRadio = document.querySelector('input[name="tplHeaderType"][value="IMAGE"]');
      if (imgRadio) {
        imgRadio.checked = true;
        if (typeof setHeaderTypeUI === 'function') setHeaderTypeUI('IMAGE', _tplDraftExistingMedia);
      }
    }
  }
}

function closeTplModal() {
  const modal = document.getElementById('tplModal');
  if (modal) modal.hidden = true;
  _tplEditId = null;
}

// Guardado parcial cuando la plantilla está locked: solo display_name y tags.
// Meta nunca ve estos campos, así que no afectan el estado de aprobación.
async function saveTplLockedFields(existing) {
  const errEl = document.getElementById('tplError');
  const displayName = document.getElementById('tplDisplayName')?.value.trim() || '';
  if (errEl) errEl.hidden = true;
  try {
    // Solo mandamos displayName — el endpoint PUT acepta updates parciales.
    const updated = await api('PUT', `/api/templates/${existing.id}`, { displayName });
    // Actualizar tags por separado
    const withTags = await api('PUT', `/api/templates/${existing.id}/tags`, { tagIds: _tplDraftTagIds });
    updated.tags = withTags.tags || [];
    _tplItems = _tplItems.map(t => t.id === updated.id ? updated : t);
    renderTemplates();
    closeTplModal();
    toast('Cambios guardados (nombre y etiquetas)', 'success');
  } catch (e) {
    if (errEl) { errEl.textContent = e.message; errEl.hidden = false; }
  }
}

async function saveTpl() {
  const errEl = document.getElementById('tplError');
  // Si la plantilla está locked (pending/approved/rejected), solo permitimos
  // editar campos organizacionales (display_name + tags). Atajo aquí.
  if (_tplEditId) {
    const existing = _tplItems.find(t => t.id === _tplEditId);
    if (existing && existing.type === 'wa_api' && existing.waStatus !== 'draft') {
      return saveTplLockedFields(existing);
    }
  }

  const type = document.querySelector('input[name="tplType"]:checked')?.value || 'free_form';
  let name = document.getElementById('tplName')?.value.trim() || '';
  const displayName = document.getElementById('tplDisplayName')?.value.trim() || '';
  const category = document.getElementById('tplCategory')?.value || 'UTILITY';
  const language = document.getElementById('tplLanguage')?.value || 'es_MX';
  const headerType = document.querySelector('input[name="tplHeaderType"]:checked')?.value || 'TEXT';
  const header = document.getElementById('tplHeader')?.value.trim() || '';
  const body = document.getElementById('tplBody')?.value.trim() || '';
  const footer = document.getElementById('tplFooter')?.value.trim() || '';
  const buttons = _collectTplButtons();

  // Plantilla libre: el "Nombre interno" no se muestra en el form. Si está
  // vacío, lo derivamos del displayName (slugified). El displayName pasa a
  // ser el campo principal y obligatorio.
  if (type === 'free_form' && !name) {
    if (!displayName) {
      if (errEl) { errEl.textContent = 'El nombre de la plantilla es obligatorio.'; errEl.hidden = false; }
      return;
    }
    name = sanitizeTplName(displayName) || `tpl_${Date.now()}`;
  }
  if (!name) {
    if (errEl) { errEl.textContent = 'El nombre interno es obligatorio.'; errEl.hidden = false; }
    return;
  }
  if (!body) {
    if (errEl) { errEl.textContent = 'El cuerpo es obligatorio.'; errEl.hidden = false; }
    return;
  }
  // Validar URLs de los botones tipo URL — Meta rechaza URLs mal formadas
  // y formatos como "ejemplo.com" sin protocolo.
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    if (btn.type !== 'URL') continue;
    const urlValue = (btn.url || '').trim();
    if (!urlValue) {
      if (errEl) { errEl.textContent = `Botón #${i+1}: la URL es obligatoria para botones tipo "Abrir URL".`; errEl.hidden = false; }
      _highlightTplBtnUrlError(i);
      return;
    }
    if (!/^https?:\/\//i.test(urlValue)) {
      if (errEl) { errEl.textContent = `Botón #${i+1}: la URL debe empezar con http:// o https://. Ejemplo: https://wapi101.com/promo`; errEl.hidden = false; }
      _highlightTplBtnUrlError(i);
      return;
    }
    try {
      new URL(urlValue);
    } catch (_) {
      if (errEl) { errEl.textContent = `Botón #${i+1}: "${urlValue}" no es una URL válida. Verifica el formato.`; errEl.hidden = false; }
      _highlightTplBtnUrlError(i);
      return;
    }
  }
  // WA API: nombre solo minúsculas, números y guión bajo (regla de Meta)
  if (type === 'wa_api') {
    name = sanitizeTplName(name);
    document.getElementById('tplName').value = name;
    if (!name) {
      if (errEl) { errEl.textContent = 'El nombre interno quedó vacío después de limpiar caracteres. Usa solo minúsculas, números y _'; errEl.hidden = false; }
      return;
    }
    if (name.length > 512) {
      if (errEl) { errEl.textContent = 'El nombre interno es muy largo (máx 512 chars).'; errEl.hidden = false; }
      return;
    }
  }

  // Validación de botones (lado cliente)
  for (const b of buttons) {
    if (b.type === 'URL' && !/^https?:\/\//i.test(b.url || '')) {
      if (errEl) { errEl.textContent = `Botón "${b.text}": URL debe empezar con http:// o https://`; errEl.hidden = false; }
      return;
    }
    if (b.type === 'PHONE_NUMBER' && !/^\+?\d{10,15}$/.test((b.phone_number || '').replace(/\s/g, ''))) {
      if (errEl) { errEl.textContent = `Botón "${b.text}": teléfono inválido (10-15 dígitos, formato internacional)`; errEl.hidden = false; }
      return;
    }
  }

  const placeholders = _collectTplPlaceholders();
  const payload = {
    type, name, displayName, category, language,
    header: headerType === 'TEXT' ? (header || null) : null,
    body,
    footer: footer || null,
    headerType,
    buttons: buttons.length ? buttons : null,
    bodyPlaceholders: placeholders.length ? placeholders : null,
  };

  // Si el user pidió quitar el archivo existente Y no eligió uno nuevo,
  // mandamos los campos a null para que el backend los borre. Si eligió
  // uno nuevo, _tplDraftRemoveMedia ya se canceló y el upload posterior
  // sobrescribe los valores. Si cambió el tipo de header (IMAGE → DOCUMENT),
  // también limpiamos los valores viejos para que no queden inconsistentes.
  const typeChanged = _tplDraftExistingMedia && _tplDraftExistingMedia.headerType !== headerType;
  if (_tplDraftRemoveMedia || (headerType === 'TEXT' && _tplDraftExistingMedia) || typeChanged) {
    payload.headerMediaHandle = null;
    payload.headerMediaUrl    = null;
    payload.headerMediaId     = null;
  }
  if (errEl) errEl.hidden = true;

  try {
    let saved;
    if (_tplEditId) {
      saved = await api('PUT', `/api/templates/${_tplEditId}`, payload);
    } else {
      saved = await api('POST', '/api/templates', payload);
    }

    // Si hay archivo de header pendiente y el tipo no es TEXT, subirlo ahora
    if (_tplDraftMediaFile && headerType !== 'TEXT') {
      toast('Subiendo archivo a Meta…', 'info');
      const data = await _readFileAsBase64(_tplDraftMediaFile);
      const upRes = await api('POST', `/api/templates/${saved.id}/header-media`, {
        data,
        mimetype: _tplDraftMediaFile.type,
      });
      saved.headerMediaHandle = upRes.handle;
      saved.headerType = upRes.headerType;
      _tplDraftMediaFile = null;
    }

    // Asignar tags (siempre, aunque sea array vacío para limpiar)
    try {
      const withTags = await api('PUT', `/api/templates/${saved.id}/tags`, { tagIds: _tplDraftTagIds });
      saved.tags = withTags.tags || [];
    } catch (_) { /* no bloquear el guardado por error de tags */ }

    if (_tplEditId) {
      _tplItems = _tplItems.map(t => t.id === saved.id ? saved : t);
    } else {
      _tplItems.push(saved);
    }

    renderTemplates();
    closeTplModal();
    toast('Plantilla guardada', 'success');
  } catch (e) {
    if (errEl) { errEl.textContent = e.message; errEl.hidden = false; }
  }
}

function _readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('No se pudo leer el archivo'));
    reader.readAsDataURL(file);
  });
}

// ─── Modal "Enviar plantilla" (wa_api con variables) ───────────────────
let _sendTplCtx = null; // { tpl, convoId }

// Resuelve el valor de un placeholder mapeado, leyendo del contacto real
// (con fallback a los datos parciales del convo si no hay contacto).
function _resolvePlaceholderForPreview(ph, convo, contact) {
  if (!ph?.contactField) return null;
  const cf = ph.contactField;
  // Preferir contact (datos completos), caer al convo si falta
  if (cf === 'first_name') return contact?.firstName || convo?.name?.split(' ')[0] || '';
  if (cf === 'last_name')  return contact?.lastName  || (convo?.name?.split(' ').slice(1).join(' ') || '');
  if (cf === 'full_name') {
    if (contact?.firstName || contact?.lastName) {
      return [contact.firstName, contact.lastName].filter(Boolean).join(' ');
    }
    return convo?.name || '';
  }
  if (cf === 'phone') return contact?.phone || convo?.phone || '';
  if (cf === 'email') return contact?.email || '';
  return null;
}

async function openSendTemplateModal(tpl, convoId) {
  _sendTplCtx = { tpl, convoId };
  const modal = document.getElementById('sendTplModal');
  const meta  = document.getElementById('sendTplMeta');
  const vars  = document.getElementById('sendTplVars');
  const err   = document.getElementById('sendTplError');
  if (!modal || !meta || !vars) return;
  if (err) { err.hidden = true; err.textContent = ''; }

  const convo = CONVERSATIONS.find(c => c.id === convoId)
             || EXP_DETAIL_CONVOS.find(c => c.id === convoId);

  // Cargar el contacto REAL (con first_name/last_name/email separados) para
  // poder llenar correctamente los placeholders mapeados.
  let contact = null;
  if (convo?.contactId) {
    try { contact = await api('GET', `/api/contacts/${convo.contactId}`); } catch (_) {}
  }
  _sendTplCtx.contact = contact;

  // Header con preview de body + nombre
  meta.innerHTML = `
    <div class="send-tpl-name"><strong>${escapeHtml(tpl.displayName || tpl.name)}</strong>
      <span class="tpl-hint-inline">→ ${escapeHtml(convo?.name || convo?.phone || 'contacto')}</span></div>
    <div class="send-tpl-body">${escapeHtml(tpl.body || '')}</div>
  `;

  const phs = Array.isArray(tpl.bodyPlaceholders) ? tpl.bodyPlaceholders : [];
  const varNums = [...(tpl.body || '').matchAll(/\{\{(\d+)\}\}/g)].map(m => Number(m[1]));
  const max = varNums.length ? Math.max(...varNums) : 0;

  if (!max) {
    vars.innerHTML = '<p class="tpl-hint-inline">Esta plantilla no tiene variables — se envía tal cual.</p>';
  } else {
    const rows = [];
    for (let i = 0; i < max; i++) {
      const ph = phs[i] || {};
      const auto = _resolvePlaceholderForPreview(ph, convo, contact);
      if (auto !== null && auto !== '') {
        // Mapeado y con valor — solo mostrar
        rows.push(`
          <div class="send-tpl-var-row">
            <span class="tpl-placeholder-num">{{${i + 1}}}</span>
            <span class="send-tpl-var-label">${escapeHtml(ph.label || '')}</span>
            <span class="send-tpl-var-auto">${escapeHtml(auto)} <em class="tpl-hint-inline">(auto del contacto)</em></span>
          </div>
        `);
      } else if (ph.contactField) {
        // Mapeado pero el contacto no tiene ese campo → input rojo de "falta"
        rows.push(`
          <div class="send-tpl-var-row">
            <span class="tpl-placeholder-num">{{${i + 1}}}</span>
            <span class="send-tpl-var-label">${escapeHtml(ph.label || '')}</span>
            <input class="int-input send-tpl-var-input send-tpl-var-input--missing" data-i="${i}" placeholder="⚠️ El contacto no tiene ${escapeHtml(ph.contactField)} — escríbelo aquí" />
          </div>
        `);
      } else {
        // Manual — pero si es {{1}} y tenemos nombre del contacto, lo pre-llenamos
        // como sugerencia (el usuario puede editarlo o solo darle Enviar).
        let suggested = '';
        if (i === 0) {
          // {{1}} suele ser el nombre — pre-llenamos con nombre del contacto si lo hay
          suggested = contact?.firstName || convo?.name?.split(' ')[0] || '';
        }
        const placeholder = ph.label || ph.example || `Valor para {{${i + 1}}}`;
        const valueAttr = suggested ? `value="${escapeHtml(suggested)}"` : '';
        const hint = suggested ? '<em class="tpl-hint-inline">(sugerencia del contacto — puedes cambiarlo)</em>' : '';
        rows.push(`
          <div class="send-tpl-var-row">
            <span class="tpl-placeholder-num">{{${i + 1}}}</span>
            <span class="send-tpl-var-label">${escapeHtml(ph.label || '')} ${hint}</span>
            <input class="int-input send-tpl-var-input" data-i="${i}" ${valueAttr} placeholder="${escapeHtml(placeholder)}" />
          </div>
        `);
      }
    }
    vars.innerHTML = rows.join('');
  }

  modal.hidden = false;
}

function closeSendTemplateModal() {
  const modal = document.getElementById('sendTplModal');
  if (modal) modal.hidden = true;
  _sendTplCtx = null;
}

async function executeSendTemplate() {
  const ctx = _sendTplCtx;
  const errEl = document.getElementById('sendTplError');
  if (!ctx) return;

  // Recolectar valores manuales (los que tienen input)
  const manualValues = [];
  document.querySelectorAll('#sendTplVars .send-tpl-var-input').forEach(inp => {
    const i = Number(inp.dataset.i);
    manualValues[i] = inp.value.trim();
  });

  // Validar: no debe haber inputs vacíos
  for (let i = 0; i < manualValues.length; i++) {
    if (manualValues[i] !== undefined && manualValues[i] === '') {
      if (errEl) { errEl.textContent = `Falta valor para {{${i + 1}}}`; errEl.hidden = false; }
      return;
    }
  }

  if (errEl) errEl.hidden = true;
  const btn = document.getElementById('sendTplGo');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }
  try {
    await api('POST', `/api/conversations/${ctx.convoId}/send-template`, {
      templateId: ctx.tpl.id,
      manualValues,
    });
    closeSendTemplateModal();
    toast('Plantilla enviada', 'success');
    // Recargar mensajes para que aparezca el outgoing
    if (typeof loadMessages === 'function') loadMessages(ctx.convoId);
    if (typeof loadConversations === 'function') loadConversations();
  } catch (e) {
    if (errEl) { errEl.textContent = e.message || 'Error al enviar'; errEl.hidden = false; }
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar'; }
  }
}

async function submitTplToMeta(id) {
  try {
    toast('Enviando a Meta…', 'info');
    const result = await api('POST', `/api/templates/${id}/submit`);
    _tplItems = _tplItems.map(t => t.id === id ? { ...t, waStatus: 'pending', waId: result.waId } : t);
    renderTemplates();
    toast('Plantilla enviada a Meta para revisión. Status: ' + (result.status || 'PENDING'), 'success');
  } catch (e) {
    toast('Error al enviar: ' + e.message, 'error');
  }
}

async function syncTplFromMeta(id) {
  try {
    const result = await api('POST', `/api/templates/${id}/sync`);
    _tplItems = _tplItems.map(t => t.id === id ? { ...t, waStatus: result.status } : t);
    renderTemplates();
    const labels = { approved: 'Aprobada ✓', pending: 'Aún pendiente' };
    const msg = result.status === 'rejected'
      ? `Rechazada: ${result.rejectedReason || 'sin detalle'}`
      : (labels[result.status] || result.status);
    toast(msg, result.status === 'approved' ? 'success' : result.status === 'rejected' ? 'error' : 'info');
  } catch (e) {
    toast('Error al sincronizar: ' + e.message, 'error');
  }
}

function setupTemplates() {
  // Tab switching
  document.querySelectorAll('.tpl-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tpl-tab').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      _tplTab = btn.dataset.tab;
      renderTemplates();
    });
  });

  // ─── Drag & drop manual de plantillas (solo cuando _tplSort === 'manual') ───
  let _tdDragId = null;
  const tplListEl = document.getElementById('tplList');
  if (tplListEl && !tplListEl._tdSetup) {
    tplListEl._tdSetup = true;
    tplListEl.addEventListener('dragstart', (e) => {
      const card = e.target.closest('.tpl-card[draggable]');
      if (!card) return;
      _tdDragId = Number(card.dataset.id);
      card.classList.add('is-dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(_tdDragId));
    });
    tplListEl.addEventListener('dragend', () => {
      _tdDragId = null;
      tplListEl.querySelectorAll('.tpl-card').forEach(c => c.classList.remove('is-dragging', 'drag-over'));
    });
    tplListEl.addEventListener('dragover', (e) => {
      if (!_tdDragId) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const card = e.target.closest('.tpl-card');
      tplListEl.querySelectorAll('.tpl-card').forEach(c => c.classList.toggle('drag-over', c === card && Number(c.dataset.id) !== _tdDragId));
    });
    tplListEl.addEventListener('drop', async (e) => {
      e.preventDefault();
      if (!_tdDragId) return;
      const target = e.target.closest('.tpl-card');
      if (!target) return;
      const targetId = Number(target.dataset.id);
      if (targetId === _tdDragId) return;
      // Reordenar _tplItems: mover dragId justo antes de targetId
      const fromIdx = _tplItems.findIndex(t => t.id === _tdDragId);
      const toIdx   = _tplItems.findIndex(t => t.id === targetId);
      if (fromIdx < 0 || toIdx < 0) return;
      const [moved] = _tplItems.splice(fromIdx, 1);
      const insertAt = _tplItems.findIndex(t => t.id === targetId);
      _tplItems.splice(insertAt, 0, moved);
      renderTemplates();
      try {
        await api('POST', '/api/templates/reorder', { orderedIds: _tplItems.map(t => t.id) });
      } catch (err) {
        toast(err.message || 'Error guardando orden', 'error');
        await loadTemplates();
      }
    });
  }

  // Topbar search drives template filter when on plantillas view
  let _tplSearchDebounce;
  document.getElementById('topbarSearchInput')?.addEventListener('input', (e) => {
    if (document.body.dataset.viewActive !== 'plantillas') return;
    clearTimeout(_tplSearchDebounce);
    _tplSearchDebounce = setTimeout(() => {
      _tplFilter = e.target.value;
      renderTemplates();
    }, 200);
  });

  // New button
  document.getElementById('tplNewBtn')?.addEventListener('click', () => openTplModal());
  document.getElementById('rhNewTplBtn')?.addEventListener('click', () => openTplModal());

  // Modal close
  document.getElementById('tplModalClose')?.addEventListener('click', closeTplModal);
  document.getElementById('tplModalCancel')?.addEventListener('click', closeTplModal);
  document.getElementById('tplModalBackdrop')?.addEventListener('click', closeTplModal);

  // Save
  document.getElementById('tplModalSave')?.addEventListener('click', saveTpl);

  // Validación en vivo del nombre interno (minúsculas, _, sin acentos/espacios)
  setupTplNameValidation();

  // Modal "Enviar plantilla"
  document.getElementById('sendTplModalClose')?.addEventListener('click', closeSendTemplateModal);
  document.getElementById('sendTplCancel')?.addEventListener('click', closeSendTemplateModal);
  document.getElementById('sendTplModalBackdrop')?.addEventListener('click', closeSendTemplateModal);
  document.getElementById('sendTplGo')?.addEventListener('click', executeSendTemplate);

  // ─── Filtros de tags + sort + manage (en la vista Plantillas) ───
  document.addEventListener('click', (e) => {
    const filterBtn = e.target.closest('[data-tpl-tag-filter]');
    if (filterBtn) {
      const v = filterBtn.dataset.tplTagFilter;
      _tplTagFilter = v ? Number(v) : null;
      renderTemplates();
      return;
    }
    if (e.target.closest('#tplTagManageBtn')) openTplTagsManager();
    if (e.target.closest('[data-close-tpl-tags]')) closeTplTagsManager();
  });
  document.addEventListener('change', (e) => {
    if (e.target.id === 'tplSortSelect') {
      _tplSort = e.target.value;
      _persistTplSort(_tplSort);
      renderTemplates();
    }
    if (e.target.id === 'tplGroupByTagToggle') {
      _tplGroupByTag = e.target.checked;
      renderTemplates();
    }
  });

  // Toggle tag dentro del modal de plantilla
  document.getElementById('tplTagsPickers')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-toggle-tag]');
    if (!btn) return;
    const id = Number(btn.dataset.toggleTag);
    if (_tplDraftTagIds.includes(id)) {
      _tplDraftTagIds = _tplDraftTagIds.filter(x => x !== id);
    } else {
      _tplDraftTagIds.push(id);
    }
    renderTplTagsPickers();
  });

  // Crear nueva tag desde el manager
  document.getElementById('tplTagCreateForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('tplTagNewName').value.trim();
    if (!name) return;
    const colorBtn = document.querySelector('#tplTagNewColors .bot-tag-swatch.is-selected');
    const color = colorBtn?.dataset.color || TPL_TAG_PALETTE[0];
    try {
      await createTplTag(name, color);
      document.getElementById('tplTagNewName').value = '';
    } catch (err) { toast(err.message, 'error'); }
  });
  // Crear etiqueta al teclear "," (chip-style)
  bindTagCommaCreate('tplTagNewName', 'tplTagCreateForm');
  // Selector de color en el form de creación
  document.getElementById('tplTagNewColors')?.addEventListener('click', (e) => {
    const sw = e.target.closest('.bot-tag-swatch');
    if (!sw) return;
    document.querySelectorAll('#tplTagNewColors .bot-tag-swatch').forEach(b => b.classList.remove('is-selected'));
    sw.classList.add('is-selected');
  });
  // Acciones por fila en el manager
  document.getElementById('tplTagsManagerList')?.addEventListener('click', async (e) => {
    // Quick-pick de color (modo no-edición — se guarda directo)
    const colorBtn = e.target.closest('[data-tpl-tag-color-pick]');
    if (colorBtn) {
      await updateTplTag(Number(colorBtn.dataset.tplTagColorPick), { color: colorBtn.dataset.color });
      return;
    }

    // Entrar en modo edición inline (nombre + color)
    const editBtn = e.target.closest('[data-edit-tpl-tag]');
    if (editBtn) {
      _tplTagEditingId = Number(editBtn.dataset.editTplTag);
      // Inicializa _draftColor con el color actual
      const cur = _tplTags.find(t => t.id === _tplTagEditingId);
      if (cur) cur._draftColor = cur.color;
      renderTplTagsManagerList();
      // Focus en el input de nombre
      setTimeout(() => {
        document.querySelector('.tpl-tag-row--editing .tpl-tag-edit-name')?.focus();
      }, 50);
      return;
    }

    // En modo edición — selección de color (solo cambia draft)
    const editColorBtn = e.target.closest('[data-tpl-tag-edit-color]');
    if (editColorBtn) {
      const cur = _tplTags.find(t => t.id === _tplTagEditingId);
      if (cur) cur._draftColor = editColorBtn.dataset.tplTagEditColor;
      renderTplTagsManagerList();
      setTimeout(() => document.querySelector('.tpl-tag-row--editing .tpl-tag-edit-name')?.focus(), 50);
      return;
    }

    // Guardar edición (nombre + color)
    const saveBtn = e.target.closest('[data-save-tpl-tag]');
    if (saveBtn) {
      const id = Number(saveBtn.dataset.saveTplTag);
      const cur = _tplTags.find(t => t.id === id);
      const newName = document.querySelector('.tpl-tag-row--editing .tpl-tag-edit-name')?.value.trim();
      if (!newName) { toast('El nombre no puede quedar vacío', 'error'); return; }
      try {
        await updateTplTag(id, { name: newName, color: cur._draftColor || cur.color });
        _tplTagEditingId = null;
        renderTplTagsManagerList();
      } catch (err) { toast(err.message, 'error'); }
      return;
    }

    // Cancelar edición
    const cancelBtn = e.target.closest('[data-cancel-tpl-tag]');
    if (cancelBtn) {
      _tplTagEditingId = null;
      renderTplTagsManagerList();
      return;
    }

    // Eliminar
    const delBtn = e.target.closest('[data-delete-tpl-tag]');
    if (delBtn) await deleteTplTag(Number(delBtn.dataset.deleteTplTag));
  });

  // Type radio toggles WA fields
  document.querySelectorAll('input[name="tplType"]').forEach(r => {
    r.addEventListener('change', () => {
      const card = document.querySelector('.tpl-modal-card');
      updateTplModalType(card);
    });
  });

  // Header type radios — toggle texto/media
  document.querySelectorAll('input[name="tplHeaderType"]').forEach(r => {
    r.addEventListener('change', () => {
      setHeaderTypeUI(r.value, _tplDraftExistingMedia);
    });
  });

  // Botón × Quitar archivo existente al editar — marca para borrar al guardar
  document.getElementById('tplHeaderMediaRemoveBtn')?.addEventListener('click', () => {
    if (!confirm('¿Quitar el archivo del header? El header quedará sin imagen hasta que subas otro o guardes.')) return;
    _tplDraftRemoveMedia = true;
    _tplDraftMediaFile = null;
    const fileInput = document.getElementById('tplHeaderFile');
    if (fileInput) fileInput.value = '';
    const ht = document.querySelector('input[name="tplHeaderType"]:checked')?.value || 'TEXT';
    setHeaderTypeUI(ht, _tplDraftExistingMedia);
  });

  // Captura de archivo — valida tipo y tamaño según las reglas de Meta para
  // headers de plantilla, y avisa al usuario antes de gastar el upload.
  const TPL_MEDIA_RULES = {
    IMAGE:    { mimes: ['image/jpeg', 'image/png'],          maxBytes: 5  * 1024 * 1024, label: 'JPEG o PNG' },
    VIDEO:    { mimes: ['video/mp4', 'video/3gpp'],          maxBytes: 16 * 1024 * 1024, label: 'MP4 (con audio)' },
    DOCUMENT: { mimes: ['application/pdf'],                  maxBytes: 100 * 1024 * 1024, label: 'PDF' },
  };
  document.getElementById('tplHeaderFile')?.addEventListener('change', (e) => {
    const f = e.target.files?.[0];
    if (!f) { _tplDraftMediaFile = null; return; }
    // Cualquier archivo nuevo cancela el "quitar"
    _tplDraftRemoveMedia = false;

    const ht = document.querySelector('input[name="tplHeaderType"]:checked')?.value || 'TEXT';
    const rules = TPL_MEDIA_RULES[ht];
    const status = document.getElementById('tplHeaderMediaStatus');

    if (!rules) {
      toast('Cambia primero el tipo de header (Imagen / Video / Documento)', 'error');
      e.target.value = '';
      return;
    }

    if (!rules.mimes.includes(f.type)) {
      const msg = `Meta NO acepta este archivo en headers de plantilla. Para tipo "${ht}" usa: ${rules.label}. Tu archivo es ${f.type || 'desconocido'}.`;
      if (status) status.textContent = '⚠️ ' + msg;
      toast(msg, 'error', 6000);
      e.target.value = '';
      _tplDraftMediaFile = null;
      return;
    }

    if (f.size > rules.maxBytes) {
      const maxMb = (rules.maxBytes / 1024 / 1024).toFixed(0);
      const myMb  = (f.size / 1024 / 1024).toFixed(1);
      const msg = `Archivo muy grande para ${ht} (${myMb}MB; máx ${maxMb}MB).`;
      if (status) status.textContent = '⚠️ ' + msg;
      toast(msg, 'error', 6000);
      e.target.value = '';
      _tplDraftMediaFile = null;
      return;
    }

    // Para imágenes: verificar dimensiones mínimas (192×192 según Meta).
    if (ht === 'IMAGE') {
      const url = URL.createObjectURL(f);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        if (img.naturalWidth < 192 || img.naturalHeight < 192) {
          const msg = `Imagen muy chica (${img.naturalWidth}×${img.naturalHeight}). Meta requiere mínimo 192×192 px.`;
          if (status) status.textContent = '⚠️ ' + msg;
          toast(msg, 'error', 6000);
          e.target.value = '';
          _tplDraftMediaFile = null;
          return;
        }
        _tplDraftMediaFile = f;
        if (status) status.textContent = `✓ Listo: ${f.name} · ${(f.size/1024).toFixed(0)} KB · ${img.naturalWidth}×${img.naturalHeight}`;
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        toast('No se pudo leer la imagen — ¿está corrupta?', 'error');
        e.target.value = '';
      };
      img.src = url;
      return;
    }

    _tplDraftMediaFile = f;
    if (status) status.textContent = `✓ Listo: ${f.name} · ${(f.size/1024).toFixed(0)} KB`;
  });

  // Botones — agregar / cambiar tipo / quitar
  document.getElementById('tplAddButtonBtn')?.addEventListener('click', addTplButton);
  document.getElementById('tplButtonsList')?.addEventListener('change', (e) => {
    const i = Number(e.target.dataset.i);
    if (Number.isNaN(i)) return;
    if (e.target.classList.contains('tpl-btn-type')) {
      // Conservar text, resetear url/phone
      const cur = _tplDraftButtons[i] || {};
      _tplDraftButtons[i] = { type: e.target.value, text: cur.text || '' };
      renderTplButtonsList();
    }
  });
  document.getElementById('tplButtonsList')?.addEventListener('input', (e) => {
    const i = Number(e.target.dataset.i);
    if (Number.isNaN(i)) return;
    if (!_tplDraftButtons[i]) return;
    if (e.target.classList.contains('tpl-btn-text')) _tplDraftButtons[i].text = e.target.value;
    if (e.target.classList.contains('tpl-btn-extra')) {
      const field = e.target.dataset.field;
      _tplDraftButtons[i][field] = e.target.value;
    }
  });
  document.getElementById('tplButtonsList')?.addEventListener('click', (e) => {
    if (!e.target.classList.contains('tpl-btn-remove')) return;
    const i = Number(e.target.dataset.i);
    if (Number.isNaN(i)) return;
    _tplDraftButtons.splice(i, 1);
    renderTplButtonsList();
  });

  // Variable insertion buttons
  document.querySelector('.tpl-var-row')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.tpl-var-btn');
    if (!btn) return;
    const ta = document.getElementById('tplBody');
    if (!ta) return;
    let v = btn.dataset.var;
    // Si es el botón de "+ Variable" → calcula el próximo {{N}} no usado
    if (btn.hasAttribute('data-var-num')) {
      const used = [...(ta.value.matchAll(/\{\{(\d+)\}\}/g))].map(m => Number(m[1]));
      const next = used.length ? Math.max(...used) + 1 : 1;
      v = `{{${next}}}`;
    }
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    ta.setRangeText(v, start, end, 'end');
    ta.focus();
    syncTplPlaceholdersFromBody();
  });

  // Cuando el usuario edita el body manualmente, re-sincronizar placeholders.
  document.getElementById('tplBody')?.addEventListener('input', syncTplPlaceholdersFromBody);

  // Mostrar/ocultar caja de placeholders al cambiar tipo de plantilla
  document.querySelectorAll('input[name="tplType"]').forEach(r => {
    r.addEventListener('change', renderTplPlaceholdersBox);
  });

  // Capturar edición de label/example de placeholders.
  document.getElementById('tplPlaceholdersList')?.addEventListener('input', (e) => {
    const i = Number(e.target.dataset.i);
    if (Number.isNaN(i) || !_tplDraftPlaceholders[i]) return;
    const field = e.target.dataset.field;
    if (field === 'label' || field === 'example') {
      _tplDraftPlaceholders[i][field] = e.target.value;
    }
  });
  // Cambio de mapping (select) — si elige un campo del contacto, auto-llena
  // label y ejemplo. Si elige Manual, los limpia para que el usuario escriba.
  document.getElementById('tplPlaceholdersList')?.addEventListener('change', (e) => {
    const i = Number(e.target.dataset.i);
    if (Number.isNaN(i) || !_tplDraftPlaceholders[i]) return;
    if (e.target.dataset.field === 'contactField') {
      const cf = e.target.value;
      _tplDraftPlaceholders[i].contactField = cf;
      if (cf && CONTACT_FIELD_DEFAULTS[cf]) {
        _tplDraftPlaceholders[i].label   = CONTACT_FIELD_DEFAULTS[cf].label;
        _tplDraftPlaceholders[i].example = CONTACT_FIELD_DEFAULTS[cf].example;
      } else {
        // Manual — limpia para que el usuario escriba
        _tplDraftPlaceholders[i].label   = '';
        _tplDraftPlaceholders[i].example = '';
      }
      renderTplPlaceholdersBox();
    }
  });

  // Card actions (delegated)
  document.getElementById('tplList')?.addEventListener('click', async (e) => {
    // Click en pastilla "Usado en: <bot>" → abrir el bot builder.
    // returnTo='templates' para que "←" devuelva a la lista de plantillas.
    const botPill = e.target.closest('[data-go-to-bot]');
    if (botPill) {
      const botId = Number(botPill.dataset.goToBot);
      const bot = sbBots.find(b => b.id === botId);
      if (bot) {
        showView('bot');
        openBotBuilder(bot, 'templates');
      } else {
        await loadSalsbots();
        const fresh = sbBots.find(b => b.id === botId);
        if (fresh) { showView('bot'); openBotBuilder(fresh, 'templates'); }
        else toast('No se encontró el bot', 'error');
      }
      return;
    }

    const id = Number(e.target.dataset.id);
    if (!id) return;
    if (e.target.classList.contains('tpl-edit-btn')) {
      const tmpl = _tplItems.find(t => t.id === id);
      if (tmpl) openTplModal(tmpl);
    } else if (e.target.classList.contains('tpl-clone-btn')) {
      const tmpl = _tplItems.find(t => t.id === id);
      if (tmpl) duplicateCurrentTemplate(tmpl);
    } else if (e.target.classList.contains('tpl-del-btn')) {
      if (!confirm('¿Eliminar esta plantilla?')) return;
      try {
        await api('DELETE', `/api/templates/${id}`);
        _tplItems = _tplItems.filter(t => t.id !== id);
        renderTemplates();
        // Refrescar bots: pueden haber quedado con issues "missing_template"
        loadSalsbots().catch(() => {});
        toast('Plantilla eliminada', 'success');
      } catch (e) { toast(e.message, 'error'); }
    } else if (e.target.classList.contains('tpl-submit-btn')) {
      await submitTplToMeta(id);
    } else if (e.target.classList.contains('tpl-sync-btn')) {
      await syncTplFromMeta(id);
    }
  });
}

// ═══════ Web Push notifications ═══════
let _vapidPublicKey = null;
let _swReg = null;

function urlBase64ToUint8(base64) {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(b64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

function pushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
}

// Detección de plataforma para guiar al usuario sobre cómo activar push.
// iOS Safari soporta Web Push desde 16.4 PERO solo en PWA instalada
// ("Add to Home Screen"). Android Chrome funciona directo.
function _detectPushPlatform() {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 1);
  const isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
                    || window.navigator.standalone === true;
  const isAndroid = /Android/.test(ua);
  return { isIOS, isAndroid, isStandalone };
}

async function registerServiceWorker() {
  // SW mínimo (sw-push.js) — SOLO push notifications, sin caching de assets.
  // El sw.js viejo se autodesinstala (legacy file por si algun browser lo
  // tenia instalado de la version anterior). El nuevo es sw-push.js.
  if (!('serviceWorker' in navigator)) return;
  try {
    // 1) Cleanup: desregistrar SW viejos que NO sean sw-push.js
    const regs = await navigator.serviceWorker.getRegistrations();
    for (const r of regs) {
      const swUrl = r.active?.scriptURL || r.installing?.scriptURL || r.waiting?.scriptURL || '';
      if (!swUrl.endsWith('/sw-push.js')) {
        try { await r.unregister(); } catch (_) {}
      }
    }
    // 2) Borrar caches de SW viejos (el nuevo no cachea nada de todos modos)
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k).catch(() => {})));
    }
    // 3) Registrar el SW nuevo
    _swReg = await navigator.serviceWorker.register('/sw-push.js');
    try { await _swReg.update(); } catch (_) {}
  } catch (err) {
    console.warn('[sw] register failed:', err.message);
  }
}

async function getCurrentPushSubscription() {
  if (!_swReg) return null;
  try { return await _swReg.pushManager.getSubscription(); }
  catch { return null; }
}

async function subscribeToPush() {
  if (!pushSupported()) throw new Error('Tu navegador no soporta notificaciones push');
  if (!_swReg) _swReg = await navigator.serviceWorker.ready;

  if (!_vapidPublicKey) {
    const r = await fetch('/api/push/vapid-public-key').then(r => r.json()).catch(() => ({}));
    _vapidPublicKey = r.publicKey;
  }
  if (!_vapidPublicKey) throw new Error('Servidor sin VAPID configurado');

  const perm = await Notification.requestPermission();
  if (perm !== 'granted') throw new Error('Permiso de notificaciones denegado');

  const sub = await _swReg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8(_vapidPublicKey),
  });

  await api('POST', '/api/push/subscribe', { subscription: sub.toJSON() });
  return sub;
}

async function unsubscribeFromPush() {
  const sub = await getCurrentPushSubscription();
  if (!sub) return;
  try { await api('POST', '/api/push/unsubscribe', { endpoint: sub.endpoint }); } catch (_) {}
  try { await sub.unsubscribe(); } catch (_) {}
}

async function refreshNotifPaneState() {
  const status = document.getElementById('notifStatus');
  const subBtn = document.getElementById('notifSubscribeBtn');
  const unsBtn = document.getElementById('notifUnsubscribeBtn');
  const testBtn = document.getElementById('notifTestBtn');
  const hint = document.getElementById('notifHint');
  if (!status) return;

  const { isIOS, isAndroid, isStandalone } = _detectPushPlatform();

  if (!pushSupported()) {
    // iOS Safari ANTES de iOS 16.4 o accediendo desde Safari (no PWA) cae aquí
    if (isIOS && !isStandalone) {
      status.textContent = '📱 En iPhone/iPad necesitas instalar la app primero';
      [subBtn, unsBtn, testBtn].forEach(b => b && (b.hidden = true));
      if (hint) hint.innerHTML = `
        <strong>Cómo activar en iPhone/iPad:</strong><br>
        1. Toca el botón <strong>Compartir</strong> ⬆ en Safari<br>
        2. Selecciona <strong>"Añadir a pantalla de inicio"</strong><br>
        3. Abre Wapi101 desde el icono que aparece en tu pantalla<br>
        4. Vuelve a esta pantalla y activa las notificaciones desde la app instalada<br>
        <em style="color:#94a3b8">Requiere iOS 16.4 o superior</em>`;
      return;
    }
    status.textContent = '⚠️ Tu navegador no soporta notificaciones push';
    [subBtn, unsBtn, testBtn].forEach(b => b && (b.hidden = true));
    if (hint) hint.textContent = 'Usa Chrome, Firefox, Edge o Safari ≥16.4 con HTTPS.';
    return;
  }

  const perm = Notification.permission;
  const sub = await getCurrentPushSubscription();

  if (perm === 'denied') {
    status.textContent = '⛔ Permiso bloqueado en este navegador';
    [subBtn, unsBtn].forEach(b => b && (b.hidden = true));
    if (testBtn) testBtn.hidden = true;
    if (hint) hint.textContent = isIOS
      ? 'Ajustes del iPhone → Notificaciones → Wapi101 → activar.'
      : 'Tendrás que reactivar el permiso desde la configuración del navegador (candado en la barra de direcciones).';
    return;
  }

  if (sub) {
    status.textContent = '✓ Notificaciones activadas en este dispositivo';
    if (subBtn) subBtn.hidden = true;
    if (unsBtn) unsBtn.hidden = false;
    if (testBtn) testBtn.hidden = false;
    if (hint) {
      const platform = isIOS ? 'iPhone' : isAndroid ? 'Android' : 'este dispositivo';
      hint.textContent = `Recibirás alertas en ${platform} cuando llegue un mensaje, una integración se caiga o el servidor tenga problemas.`;
    }
  } else {
    status.textContent = 'Notificaciones desactivadas';
    if (subBtn) subBtn.hidden = false;
    if (unsBtn) unsBtn.hidden = true;
    if (testBtn) testBtn.hidden = true;
    if (hint) {
      if (isIOS && isStandalone) {
        hint.textContent = '✅ App instalada. Toca "Activar notificaciones" para empezar a recibir alertas.';
      } else if (isAndroid) {
        hint.innerHTML = '<strong>Tip Android:</strong> también puedes <a href="javascript:void(0)" onclick="alert(\'Menú de Chrome → Añadir a pantalla principal\')">instalar Wapi101</a> como app para mejor experiencia.';
      } else {
        hint.textContent = 'Permite notificaciones para enterarte de mensajes nuevos cuando no tengas el navegador abierto.';
      }
    }
  }
}

async function loadNotifLog() {
  const root = document.getElementById('notifLog');
  if (!root) return;
  try {
    const data = await api('GET', '/api/push/log');
    if (!data.items?.length) {
      root.innerHTML = '<div class="notif-log-empty">Sin alertas recientes.</div>';
      return;
    }
    root.innerHTML = data.items.map(it => {
      const when = new Date(it.created_at * 1000).toLocaleString('es-MX');
      const kindIcon = it.kind === 'integration_down' ? '⚠️'
                    : it.kind === 'integration_recovered' ? '✓'
                    : it.kind === 'manual' ? '🔔'
                    : '•';
      return `<div class="notif-log-item">
        <strong>${kindIcon} ${escapeHtml(it.title || it.kind)}</strong>
        <span>${escapeHtml(it.body || '')}</span>
        <span class="meta">${when} · enviadas: ${it.sent_count} · fallidas: ${it.failed}</span>
      </div>`;
    }).join('');
  } catch (err) {
    root.innerHTML = `<div class="notif-log-empty">Error: ${escapeHtml(err.message)}</div>`;
  }
}

function setupNotifications() {
  document.getElementById('notifSubscribeBtn')?.addEventListener('click', async () => {
    const btn = document.getElementById('notifSubscribeBtn');
    btn.disabled = true; btn.textContent = 'Activando…';
    try {
      await subscribeToPush();
      toast('Notificaciones activadas ✓', 'success');
    } catch (err) {
      toast('Error: ' + err.message, 'error');
    } finally {
      btn.disabled = false; btn.textContent = 'Activar notificaciones';
      refreshNotifPaneState();
    }
  });

  document.getElementById('notifUnsubscribeBtn')?.addEventListener('click', async () => {
    if (!confirm('¿Desactivar notificaciones en este dispositivo?')) return;
    try { await unsubscribeFromPush(); toast('Desactivadas', 'success'); }
    catch (err) { toast(err.message, 'error'); }
    refreshNotifPaneState();
  });

  document.getElementById('notifTestBtn')?.addEventListener('click', async () => {
    try {
      const r = await api('POST', '/api/push/test');
      toast(`Push enviado a ${r.sent || 0} dispositivo(s)`, 'success');
      setTimeout(loadNotifLog, 800);
    } catch (err) { toast(err.message, 'error'); }
  });

  // Refresh estado cuando se entra al pane
  document.querySelectorAll('[data-settings="notificaciones"]').forEach((el) => {
    if (el.tagName === 'BUTTON') {
      el.addEventListener('click', () => { refreshNotifPaneState(); loadNotifLog(); });
    }
  });

  // ─── Campana in-app ───────────────────────────────────────────────────────
  setupInAppNotifications();
}

// ─── In-app notifications (campana sidebar) ──────────────────────────────────
let _inAppPollTimer = null;

function _fmtNotifTime(ts) {
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (diff < 60)   return 'ahora';
  if (diff < 3600) return `${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} h`;
  return `${Math.floor(diff / 86400)} d`;
}

function _notifTypeIcon(type) {
  const icons = {
    handover:     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M13 6l4 4-4 4"/><path d="M17 10H7"/><path d="M7 3H4a1 1 0 00-1 1v12a1 1 0 001 1h3"/></svg>`,
    lead_assigned:`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="9" cy="7" r="3"/><path d="M3 17a6 6 0 0112 0"/><path d="M14 9l2 2 3-3"/></svg>`,
    appointment:  `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><rect x="2" y="3" width="16" height="15" rx="2"/><path d="M2 8h16"/><path d="M6 1v4M14 1v4"/></svg>`,
    task_due:     `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="10" cy="10" r="7"/><polyline points="10 6 10 10 13 12"/></svg>`,
    general:      `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M10 2a6 6 0 00-6 6c0 5-2 6-2 6h16s-2-1-2-6a6 6 0 00-6-6z"/><path d="M11.73 17a2 2 0 01-3.46 0"/></svg>`,
  };
  return icons[type] || icons.general;
}

function renderInAppNotifications(items, unread) {
  const list = document.getElementById('navNotifList');
  if (!list) return;

  // Actualizar TODOS los badges (top + bottom)
  document.querySelectorAll('.nav-notif-badge').forEach(badge => {
    if (unread > 0) {
      badge.textContent = unread > 99 ? '99+' : String(unread);
      badge.style.display = '';
    } else {
      badge.textContent = '';
      badge.style.display = 'none';
    }
  });

  // Lista
  if (!items.length) {
    list.innerHTML = '<p class="nav-notif-empty">Sin notificaciones</p>';
    return;
  }
  list.innerHTML = items.map(n => `
    <div class="nav-notif-item ${n.read ? '' : 'unread'}" data-notif-id="${n.id}" data-notif-link="${escHtml(n.link || '')}">
      <div class="nav-notif-dot"></div>
      <div style="display:flex;align-items:flex-start;gap:8px;flex:1;min-width:0">
        <div style="flex-shrink:0;color:#64748b;margin-top:1px">${_notifTypeIcon(n.type)}</div>
        <div class="nav-notif-content">
          <p class="nav-notif-title">${escHtml(n.title)}</p>
          ${n.body ? `<p class="nav-notif-body">${escHtml(n.body)}</p>` : ''}
          <span class="nav-notif-time">${_fmtNotifTime(n.created_at)}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Click en item → marcar leído + navegar
  list.querySelectorAll('.nav-notif-item').forEach(el => {
    el.addEventListener('click', async () => {
      const id   = Number(el.dataset.notifId);
      const link = el.dataset.notifLink;
      el.classList.remove('unread');
      try { await api('PATCH', `/api/notifications/in-app/${id}/read`); } catch (_) {}
      await loadInAppNotifications();
      if (link) {
        closeInAppPanel();
        // link es un nombre de vista ('chats', 'pipelines', etc.)
        if (typeof showView === 'function') showView(link);
      }
    });
  });
}

async function loadInAppNotifications() {
  try {
    const { items, unread } = await api('GET', '/api/notifications/in-app');
    renderInAppNotifications(items || [], unread || 0);
  } catch (_) {}
}

function openInAppPanel() {
  const panel = document.getElementById('navNotifPanel');
  if (panel) { panel.hidden = false; loadInAppNotifications(); }
}

function closeInAppPanel() {
  const panel = document.getElementById('navNotifPanel');
  if (panel) panel.hidden = true;
}

function setupInAppNotifications() {
  const btn = document.querySelector('.nav-notif-btn');
  if (!btn) return;

  // Toggle panel
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const panel = document.getElementById('navNotifPanel');
    if (!panel) return;
    if (panel.hidden) { openInAppPanel(); } else { closeInAppPanel(); }
  });

  // Cerrar al click fuera
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('navNotifPanel');
    if (!panel || panel.hidden) return;
    if (!panel.contains(e.target) && !btn.contains(e.target)) closeInAppPanel();
  });

  // Marcar todo leído
  document.getElementById('navNotifReadAll')?.addEventListener('click', async (e) => {
    e.stopPropagation();
    try { await api('POST', '/api/notifications/in-app/read-all'); } catch (_) {}
    await loadInAppNotifications();
  });

  // Carga inicial + polling cada 30s
  loadInAppNotifications();
  if (_inAppPollTimer) clearInterval(_inAppPollTimer);
  _inAppPollTimer = setInterval(loadInAppNotifications, 30_000);
}

// ═══════ BILLING (Suscripción) ═══════
let _billingPlans      = null;
let _billingSub        = null;
let _billingExtraUser  = null;
let _billingInterval   = 'month'; // 'month' | 'semester' | 'year'
let _extraUserQty      = 1;
let _extraUserPreview  = null; // resultado del preview pendiente de confirmar

async function loadBilling() {
  const root = document.getElementById('billingPlans');
  if (!root) return;
  root.innerHTML = '<div class="billing-loading">Cargando planes…</div>';
  try {
    const [plansResp, subResp] = await Promise.all([
      api('GET', '/api/billing/plans'),
      api('GET', '/api/billing/subscription'),
    ]);
    _billingPlans     = plansResp.plans     || [];
    _billingExtraUser = plansResp.extraUser || null;
    _billingSub       = subResp;
    renderBillingStatus();
    renderBillingPlans();
    renderBillingAddons();
  } catch (err) {
    root.innerHTML = `<div class="billing-loading" style="color:#ef4444">Error: ${escHtml(err.message)}</div>`;
  }
}

function renderBillingStatus() {
  const el = document.getElementById('billingStatus');
  const manageEl = document.getElementById('billingManage');
  if (!el) return;
  const sub = _billingSub?.subscription;
  if (!sub) {
    if (_billingSub?.plan === 'free') {
      el.className = 'billing-status is-free';
      el.innerHTML = `<span class="bs-icon">🎁</span><div class="bs-text"><strong>${t('billing.free.active.title')}</strong>${t('billing.free.active.desc')}</div>`;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
    if (manageEl) manageEl.hidden = true;
    return;
  }

  const status = sub.status;
  const periodEnd = sub.periodEnd ? new Date(sub.periodEnd * 1000) : null;
  const fmt = (d) => d.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });

  let icon, text, cls;
  if (status === 'trialing') {
    icon = '🎁';
    cls = 'is-trial';
    text = `<strong>Trial activo</strong>Tu prueba gratuita termina el ${periodEnd ? fmt(periodEnd) : '—'}. Después se cobrará tu plan automáticamente.`;
  } else if (status === 'active') {
    icon = '✓';
    cls = '';
    text = `<strong>Suscripción activa</strong>Próxima renovación: ${periodEnd ? fmt(periodEnd) : '—'}`;
  } else if (status === 'past_due' || status === 'unpaid') {
    icon = '⚠️';
    cls = 'is-past_due';
    text = `<strong>Pago pendiente</strong>Tu último cobro falló. Actualiza tu método de pago para evitar la cancelación.`;
  } else if (status === 'canceled') {
    icon = '✕';
    cls = 'is-canceled';
    text = `<strong>Suscripción cancelada</strong>El servicio sigue activo hasta ${periodEnd ? fmt(periodEnd) : 'el fin del período pagado'}.`;
  } else {
    icon = 'ℹ️';
    cls = '';
    text = `<strong>${status}</strong>Estado de suscripción: ${status}`;
  }

  el.className = 'billing-status ' + cls;
  el.innerHTML = `<span class="bs-icon">${icon}</span><div class="bs-text">${text}</div>`;
  el.hidden = false;
  if (manageEl) manageEl.hidden = false;
}

function _detectCurrentPlanKey() {
  return _billingSub?.plan || null;
}

function renderBillingPlans() {
  const root = document.getElementById('billingPlans');
  if (!root || !_billingPlans) return;
  const currentKey = _detectCurrentPlanKey();

  root.innerHTML = _billingPlans.map((p) => {
    const isCurrent  = currentKey === p.key;
    const featuredClass = p.featured ? ' is-featured' : '';
    const currentClass  = isCurrent  ? ' is-current'  : '';

    // Plan Gratis — card informativa
    if (p.free) {
      const isCurrentFree = currentKey === 'free';
      const features = (p.features || []).map(f => `<li>${escHtml(f)}</li>`).join('');
      return `
        <div class="bp-card bp-card--free${isCurrentFree ? ' is-current' : ''}">
          <div>
            <h3 class="bp-name">${escHtml(p.name)}</h3>
            <p class="bp-tagline">${escHtml(p.tagline)}</p>
          </div>
          <div>
            <div class="bp-price">
              <span class="amount">$0</span>
              <span class="currency">MXN</span>
              <span class="period">/siempre</span>
            </div>
            <p class="bp-limits">500 contactos · 1 usuario</p>
          </div>
          <ul class="bp-features">${features}</ul>
          <button class="bp-cta" disabled>${isCurrentFree ? t('billing.plan.current') : t('billing.plan.base')}</button>
        </div>`;
    }

    // Plan Ejecutivo — card especial sin precio
    if (p.custom) {
      const features = (p.features || []).map(f => `<li>${escHtml(f)}</li>`).join('');
      return `
        <div class="bp-card bp-card--custom${currentClass}">
          <div>
            <h3 class="bp-name">${escHtml(p.name)}</h3>
            <p class="bp-tagline">${escHtml(p.tagline)}</p>
          </div>
          <div class="bp-price bp-price--custom">
            <span class="amount">Hablemos</span>
          </div>
          <ul class="bp-features">${features}</ul>
          <a class="bp-cta bp-cta--contact" href="mailto:hola@wapi101.com?subject=Plan%20Ejecutivo">Contactar ventas</a>
        </div>`;
    }

    // Precio según intervalo
    let price, usdPrice, priceId, periodLabel, totalNote;
    if (_billingInterval === 'semester') {
      price       = p.semestralMonthly;
      usdPrice    = p.usdSemestralMonthly;
      priceId     = p.priceIdSemestral;
      periodLabel = 'mes';
      totalNote   = `<p class="bp-price-note">$${p.semestralTotal} ${p.currency} total · 6 meses (1 mes gratis)</p>`;
    } else if (_billingInterval === 'year') {
      price       = p.annualMonthly;
      usdPrice    = p.usdAnnualMonthly;
      priceId     = p.priceIdYearly;
      periodLabel = 'mes';
      totalNote   = `<p class="bp-price-note">$${p.annualTotal} ${p.currency} total · 12 meses (3 meses gratis)</p>`;
    } else {
      price       = p.promoPrice;
      usdPrice    = p.usdPromoPrice;
      priceId     = p.priceIdMonthly;
      periodLabel = 'mes';
      totalNote   = '';
    }

    const promoTag = (p.promoPrice && p.promoPrice < p.monthlyPrice && _billingInterval === 'month')
      ? `<span class="bp-promo-tag">Precio lanzamiento</span>`
      : '';
    const realPrice = (p.promoPrice && p.promoPrice < p.monthlyPrice && _billingInterval === 'month')
      ? `<span class="bp-real-price">$${p.monthlyPrice}</span>`
      : '';

    const ctaText = isCurrent ? t('billing.plan.current') : (_billingSub?.subscription ? 'Cambiar a ' + p.name : t('billing.plan.try').replace('{n}', p.name));
    const limits  = p.limits || {};
    const limitsHtml = limits.leads
      ? `<p class="bp-limits">${Number(limits.leads).toLocaleString('es-MX')} leads · ${Number(limits.contacts).toLocaleString('es-MX')} contactos · ${limits.users} usuarios</p>`
      : '';
    const features = (p.features || []).map(f => `<li>${escHtml(f)}</li>`).join('');

    return `
      <div class="bp-card${featuredClass}${currentClass}">
        ${promoTag}
        <div>
          <h3 class="bp-name">${escHtml(p.name)}</h3>
          <p class="bp-tagline">${escHtml(p.tagline)}</p>
        </div>
        <div>
          <div class="bp-price">
            ${realPrice}
            <span class="amount">$${price}</span>
            <span class="currency">${p.currency}</span>
            <span class="period">/${periodLabel}</span>
            ${usdPrice ? `<span class="bp-usd">~$${usdPrice} USD</span>` : ''}
          </div>
          ${totalNote}
          ${limitsHtml}
        </div>
        <ul class="bp-features">${features}</ul>
        <button class="bp-cta" data-plan-key="${p.key}" ${(!priceId || isCurrent) ? 'disabled' : ''}>
          ${escHtml(ctaText)}
        </button>
      </div>`;
  }).join('');

  root.querySelectorAll('.bp-cta:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => onSubscribe(btn.dataset.planKey));
  });
}

function renderBillingAddons() {
  const el = document.getElementById('billingAddons');
  if (!el) return;
  const eu = _billingExtraUser;
  if (!eu) { el.hidden = true; return; }

  const hasSub   = !!_billingSub?.subscription;
  const hasPrice = !!eu.priceIdMonthly;
  const price    = eu.promoPrice || eu.monthlyPrice;
  const existingSeats = _billingSub?.extraUsers || 0;
  const existingNote  = existingSeats > 0 ? `<span style="color:#22c55e;font-size:11px;font-weight:600">✓ Tienes ${existingSeats} asesor${existingSeats > 1 ? 'es' : ''} extra activo${existingSeats > 1 ? 's' : ''}</span>` : '';

  // Estado: confirmación pendiente
  const pv = _extraUserPreview;
  const confirmHtml = pv ? `
    <div class="ba-confirm" id="baConfirm">
      <div class="ba-confirm-text">
        ${pv.onTrial
          ? `Se agregarán <strong>${pv.qty}</strong> asesor${pv.qty > 1 ? 'es' : ''} sin cargo ahora. Se cobrarán cuando termine el trial.`
          : pv.chargeAmount > 0
            ? `Se cobrarán <strong>$${pv.chargeAmount.toFixed(2)} ${pv.currency}</strong> hoy por los <strong>${pv.daysLeft} días</strong> restantes. Luego <strong>$${price * pv.qty} ${eu.currency}/mes</strong>.`
            : `Se agregarán <strong>${pv.qty}</strong> asesor${pv.qty > 1 ? 'es' : ''} a tu suscripción sin cargo adicional hoy.`
        }
      </div>
      <div class="ba-confirm-actions">
        <button class="ba-btn" id="baConfirmOk">Confirmar</button>
        <button class="ba-btn ba-btn--ghost" id="baConfirmCancel">Cancelar</button>
      </div>
    </div>` : '';

  el.innerHTML = `
    <p class="billing-addons-title">Complementos</p>
    <div class="ba-card">
      <div class="ba-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
      </div>
      <div class="ba-info">
        <div class="ba-name">Asesor adicional</div>
        <div class="ba-desc">Cada plan incluye 2 asesores. Agrega más cuando tu equipo crezca.${existingNote ? '<br>' + existingNote : ''}</div>
      </div>
      <div class="ba-price">$${price} <span>${eu.currency}/asesor/mes</span></div>
      ${pv ? '' : `<div class="ba-controls">
        <div class="ba-qty">
          <button class="ba-qty-btn" id="baQtyMinus" ${_extraUserQty <= 1 ? 'disabled' : ''}>−</button>
          <span class="ba-qty-val">${_extraUserQty}</span>
          <button class="ba-qty-btn" id="baQtyPlus" ${_extraUserQty >= 10 ? 'disabled' : ''}>+</button>
        </div>
        <button class="ba-btn" id="baAddBtn" ${!hasPrice || !hasSub ? 'disabled' : ''}>
          ${!hasPrice ? 'Próximamente' : !hasSub ? 'Requiere suscripción activa' : `Agregar ${_extraUserQty === 1 ? '1 asesor' : _extraUserQty + ' asesores'}`}
        </button>
      </div>`}
      ${confirmHtml}
    </div>`;

  el.hidden = false;

  el.querySelector('#baQtyMinus')?.addEventListener('click', () => {
    if (_extraUserQty > 1) { _extraUserQty--; _extraUserPreview = null; renderBillingAddons(); }
  });
  el.querySelector('#baQtyPlus')?.addEventListener('click', () => {
    if (_extraUserQty < 10) { _extraUserQty++; _extraUserPreview = null; renderBillingAddons(); }
  });
  el.querySelector('#baAddBtn')?.addEventListener('click', () => onExtraUserPreview(_extraUserQty));
  el.querySelector('#baConfirmOk')?.addEventListener('click', () => onExtraUserApply(_extraUserPreview?.qty || _extraUserQty));
  el.querySelector('#baConfirmCancel')?.addEventListener('click', () => { _extraUserPreview = null; renderBillingAddons(); });
}

async function onExtraUserPreview(qty) {
  const btn = document.getElementById('baAddBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Calculando…'; }
  try {
    const r = await api('POST', '/api/billing/extra-users', { qty, preview: true });
    _extraUserPreview = r;
    renderBillingAddons();
  } catch (err) {
    toast(err.message || 'Error al calcular', 'error');
    renderBillingAddons();
  }
}

async function onExtraUserApply(qty) {
  const btn = document.getElementById('baConfirmOk');
  if (btn) { btn.disabled = true; btn.textContent = 'Aplicando…'; }
  try {
    await api('POST', '/api/billing/extra-users', { qty, preview: false });
    _extraUserPreview = null;
    _extraUserQty = 1;
    toast(`${qty === 1 ? '1 asesor agregado' : qty + ' asesores agregados'} correctamente`, 'success');
    // Recargar estado para reflejar el cambio
    loadBilling();
  } catch (err) {
    toast(err.message || 'Error aplicando cambio', 'error');
    _extraUserPreview = null;
    renderBillingAddons();
  }
}

async function onSubscribe(planKey) {
  const plan = _billingPlans.find(p => p.key === planKey);
  if (!plan) return;
  const priceId = _billingInterval === 'year' ? plan.priceIdYearly
    : _billingInterval === 'semester' ? plan.priceIdSemestral
    : plan.priceIdMonthly;
  if (!priceId) {
    toast('Este plan no está disponible aún', 'warning');
    return;
  }
  try {
    const r = await api('POST', '/api/billing/checkout', { priceId });
    if (r.url) window.location.href = r.url;
    else toast('No se pudo iniciar el checkout', 'error');
  } catch (err) {
    toast(err.message || 'Error iniciando checkout', 'error');
  }
}

async function onOpenPortal() {
  try {
    const r = await api('POST', '/api/billing/portal', {});
    if (r.url) window.open(r.url, '_blank');
    else toast('No se pudo abrir el portal', 'error');
  } catch (err) {
    toast(err.message || 'Error abriendo portal', 'error');
  }
}

function setupBillingView() {
  // Toggle mensual/anual
  document.querySelectorAll('.billing-toggle .bt-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      _billingInterval = btn.dataset.interval;
      document.querySelectorAll('.billing-toggle .bt-opt').forEach(b => b.classList.toggle('is-active', b === btn));
      renderBillingPlans();
    });
  });
  // Portal button
  document.getElementById('billingPortalBtn')?.addEventListener('click', onOpenPortal);

  // Si la URL trae ?billing=success al regresar de Stripe, ir a Configuración →
  // tab Suscripción y mostrar toast.
  const params = new URLSearchParams(location.search);
  if (params.get('billing') === 'success') {
    setTimeout(() => {
      showView('ajustes');
      document.querySelector('.settings-tab[data-settings="suscripcion"]')?.click();
      toast('¡Suscripción activada! Bienvenido a Wapi101.', 'success', 6000);
      // Limpiar query string
      history.replaceState({}, '', location.pathname);
    }, 500);
  } else if (params.get('billing') === 'cancelled') {
    toast('Checkout cancelado. Puedes intentar de nuevo cuando quieras.', 'warning', 5000);
    history.replaceState({}, '', location.pathname);
  }
}
// Auto-init cuando carga el script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupBillingView);
} else {
  setupBillingView();
}

// ═══════ RECORDATORIOS / TASKS ═══════
let _tasksFilter = 'overdue';
let _tasksItems = [];
let _tasksEditId = null;     // null = crear nueva, número = editar existente
let _tasksAdvisors = [];     // cache para dropdown del modal
let _tasksSearch   = '';     // filtro de búsqueda por keyword

async function loadTasks() {
  const root = document.getElementById('tasksList');
  if (!root) return;
  root.innerHTML = '<div class="tasks-loading">Cargando…</div>';
  try {
    const r = await api('GET', `/api/tasks?filter=${_tasksFilter}`);
    _tasksItems = r.items || [];
    renderTaskList();
    refreshTaskCounts();
  } catch (err) {
    root.innerHTML = `<div class="tasks-empty" style="color:#ef4444">Error: ${escapeHtml(err.message)}</div>`;
  }
}

async function refreshTaskCounts() {
  try {
    const [overdue, today, upcoming] = await Promise.all([
      api('GET', '/api/tasks?filter=overdue&limit=500'),
      api('GET', '/api/tasks?filter=today&limit=500'),
      api('GET', '/api/tasks?filter=upcoming&limit=500'),
    ]);
    const set = (id, n) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = n || '';
      el.style.display = n ? '' : 'none';
    };
    set('ttCountOverdue', overdue.items?.length || 0);
    set('ttCountToday',   today.items?.length || 0);
    set('ttCountUpcoming', upcoming.items?.length || 0);
  } catch (_) {}
}

function fmtTaskMinutes(min) {
  if (!min) return '';
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60), m = min % 60;
  return m ? `${h}h ${m}min` : `${h}h`;
}

function fmtTaskDue(ts) {
  if (!ts) return '';
  const d = new Date(ts * 1000);
  const today = new Date(); today.setHours(0,0,0,0);
  const dDate = new Date(d); dDate.setHours(0,0,0,0);
  const diffDays = Math.round((dDate - today) / (24*3600*1000));
  const time = d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  if (diffDays === 0)  return `Hoy ${time}`;
  if (diffDays === 1)  return `Mañana ${time}`;
  if (diffDays === -1) return `Ayer ${time}`;
  if (diffDays < 0)    return `${Math.abs(diffDays)} días vencido · ${d.toLocaleDateString('es-MX', {day:'numeric',month:'short'})} ${time}`;
  return d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' }) + ' ' + time;
}

function renderTaskList() {
  const root = document.getElementById('tasksList');
  if (!root) return;

  const q = _tasksSearch.trim().toLowerCase();
  const items = q
    ? _tasksItems.filter(t =>
        (t.title || '').toLowerCase().includes(q) ||
        (t.description || '').toLowerCase().includes(q) ||
        (t.assignedAdvisorName || '').toLowerCase().includes(q) ||
        fmtTaskDue(t.dueAt).toLowerCase().includes(q)
      )
    : _tasksItems;

  if (!items.length) {
    const emptyMsg = q ? `Sin resultados para "${q}"` : ({
      overdue:   '🎉 ¡Sin tareas vencidas!',
      today:     'No hay tareas para hoy',
      upcoming:  'No hay tareas próximas',
      completed: 'No hay tareas completadas',
    }[_tasksFilter] || 'No hay tareas');
    root.innerHTML = `<div class="tasks-empty">${emptyMsg}</div>`;
    return;
  }
  const now = Math.floor(Date.now() / 1000);
  const startOfToday = Math.floor(new Date(new Date().setHours(0,0,0,0)).getTime() / 1000);
  const endOfToday   = Math.floor(new Date(new Date().setHours(23,59,59,999)).getTime() / 1000);

  root.innerHTML = items.map(t => {
    const isOverdue  = !t.completed && t.dueAt < now;
    const isToday    = !t.completed && t.dueAt >= startOfToday && t.dueAt <= endOfToday;
    const dueClass   = isOverdue ? 'is-overdue' : isToday ? 'is-today' : '';
    const itemClass  = `task-item ${isOverdue ? 'is-overdue' : ''} ${t.completed ? 'is-completed' : ''}`;
    const checkSvg   = t.completed
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>'
      : '';
    const linkHtml = t.expedientName
      ? `<span class="task-link" data-go-to-exp="${t.expedientId}">📂 ${escapeHtml(t.expedientName)}</span>`
      : (t.contactName ? `<span class="task-link">👤 ${escapeHtml(t.contactName)}</span>` : '');
    const assignedHtml = t.assignedAdvisorName
      ? `<span class="task-meta-item">👤 ${escapeHtml(t.assignedAdvisorName)}</span>`
      : '<span class="task-meta-item" style="color:#94a3b8">Sin asignar</span>';
    const durHtml = t.durationMinutes
      ? `<span class="task-duration-badge">${fmtTaskMinutes(t.durationMinutes)}</span>`
      : '';
    return `
      <div class="${itemClass}" data-task-id="${t.id}">
        <div class="task-checkbox" data-task-toggle="${t.id}">${checkSvg}</div>
        <div class="task-body">
          <div class="task-title-row">
            <span class="task-title" data-task-edit="${t.id}">${escapeHtml(t.title)}</span>
            ${durHtml}
          </div>
          ${t.description ? `<div class="task-desc">${escapeHtml(t.description)}</div>` : ''}
          <div class="task-meta">
            <span class="task-meta-item task-due ${dueClass}">⏰ ${fmtTaskDue(t.dueAt)}</span>
            ${assignedHtml}
            ${linkHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Wire toggle complete
  root.querySelectorAll('[data-task-toggle]').forEach(el => {
    el.addEventListener('click', async (e) => {
      e.stopPropagation();
      const id = Number(el.dataset.taskToggle);
      const t = _tasksItems.find(x => x.id === id);
      if (!t) return;
      try {
        await api('PATCH', `/api/tasks/${id}`, { completed: !t.completed });
        await loadTasks();
      } catch (err) { toast(err.message, 'error'); }
    });
  });
  // Wire edit (click en título)
  root.querySelectorAll('[data-task-edit]').forEach(el => {
    el.addEventListener('click', () => openTaskModal(Number(el.dataset.taskEdit)));
  });
  // Wire link a expediente
  root.querySelectorAll('[data-go-to-exp]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const expId = Number(el.dataset.goToExp);
      if (typeof openExpDetail === 'function') openExpDetail(expId);
    });
  });
}

let _taskAdvisorHoursCache = {}; // advisorId → hours array
async function checkTaskAdvisorHours() {
  const warnEl = document.getElementById('taskHoursWarn');
  const warnText = document.getElementById('taskHoursWarnText');
  if (!warnEl || !warnText) return;

  const advisorId = document.getElementById('taskAssignedAdvisorId')?.value;
  const dueLocal  = document.getElementById('taskDueAt')?.value;
  if (!advisorId || !dueLocal) { warnEl.setAttribute('hidden', ''); return; }

  // Load hours (cached per session)
  if (!_taskAdvisorHoursCache[advisorId]) {
    try {
      const r = await api('GET', `/api/business/advisors/${advisorId}/hours`);
      _taskAdvisorHoursCache[advisorId] = r.items || [];
    } catch { _taskAdvisorHoursCache[advisorId] = []; }
  }
  const hours = _taskAdvisorHoursCache[advisorId];

  const d = new Date(dueLocal);
  const dow = d.getDay(); // 0=Sun…6=Sat
  const hhmm = d.toTimeString().slice(0, 5); // "HH:MM"

  const slot = hours.find(h => h.dayOfWeek === dow);
  let warn = null;
  if (!slot || slot.isClosed || slot.isOff) {
    const DAY_NAMES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    warn = `${DAY_NAMES[dow]} está marcado como día no laborable para este asesor`;
  } else if (slot.openTime && slot.closeTime) {
    if (hhmm < slot.openTime || hhmm >= slot.closeTime) {
      warn = `Fuera del horario laboral del asesor (${slot.openTime}–${slot.closeTime})`;
    }
  }

  if (warn) {
    warnText.textContent = warn;
    warnEl.removeAttribute('hidden');
  } else {
    warnEl.setAttribute('hidden', '');
  }
}

async function loadAdvisorsForTaskModal() {
  if (_tasksAdvisors.length) return;
  try {
    const r = await api('GET', '/api/advisors/list-min');
    _tasksAdvisors = r.items || [];
  } catch (_) { _tasksAdvisors = []; }
}

async function openTaskModal(taskId = null, presetExpedientId = null, presetExpedientName = null) {
  await loadAdvisorsForTaskModal();
  _tasksEditId = taskId;
  const modal = document.getElementById('taskModal');
  if (!modal) return;

  const titleEl = document.getElementById('taskModalTitle');
  const titleInput = document.getElementById('taskTitle');
  const descInput = document.getElementById('taskDescription');
  const dueInput = document.getElementById('taskDueAt');
  const assignSel = document.getElementById('taskAssignedAdvisorId');
  const expIdInput = document.getElementById('taskExpedientId');
  const expLabelInput = document.getElementById('taskExpedientLabel');
  const deleteBtn = document.getElementById('taskDeleteBtn');

  // Llenar dropdown asignados
  const me = _profile;
  assignSel.innerHTML = `<option value="">${t('task.field.assign.none')}</option>`
    + _tasksAdvisors.filter(a => a.active).map(a =>
      `<option value="${a.id}">${escapeHtml(a.name || a.username)}${a.id === me.id ? ' (yo)' : ''}</option>`
    ).join('');

  const durSel = document.getElementById('taskDuration');
  document.getElementById('taskHoursWarn')?.setAttribute('hidden', '');

  if (taskId) {
    const task = _tasksItems.find(x => x.id === taskId);
    if (!task) return;
    titleEl.textContent = t('task.edit');
    titleInput.value = task.title || '';
    descInput.value = task.description || '';
    const d = new Date(task.dueAt * 1000);
    const isoLocal = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    dueInput.value = isoLocal;
    if (durSel) durSel.value = task.durationMinutes || '';
    assignSel.value = task.assignedAdvisorId || '';
    expIdInput.value = task.expedientId || '';
    expLabelInput.value = task.expedientName || (task.contactName ? `Contacto: ${task.contactName}` : '');
    deleteBtn.hidden = false;
  } else {
    titleEl.textContent = t('task.new');
    titleInput.value = '';
    descInput.value = '';
    const d = new Date(Date.now() + 60 * 60 * 1000);
    d.setSeconds(0, 0);
    const isoLocal = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    dueInput.value = isoLocal;
    if (durSel) durSel.value = '';
    assignSel.value = me?.id || '';
    expIdInput.value = presetExpedientId || '';
    expLabelInput.value = presetExpedientName || '';
    deleteBtn.hidden = true;
  }

  modal.hidden = false;
  // Check hours for pre-selected advisor
  checkTaskAdvisorHours();
  setTimeout(() => titleInput.focus(), 50);
}

function closeTaskModal() {
  const modal = document.getElementById('taskModal');
  if (modal) modal.hidden = true;
  _tasksEditId = null;
}

async function saveTask() {
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const dueLocal = document.getElementById('taskDueAt').value;
  const assignedAdvisorId = document.getElementById('taskAssignedAdvisorId').value;
  const expedientId = document.getElementById('taskExpedientId').value;
  const durationMinutes = document.getElementById('taskDuration')?.value || '';
  if (!title) { toast('El título es requerido', 'warning'); return; }
  if (!dueLocal) { toast('La fecha y hora son requeridas', 'warning'); return; }
  const dueAt = Math.floor(new Date(dueLocal).getTime() / 1000);

  const body = {
    title,
    description: description || null,
    dueAt,
    durationMinutes: durationMinutes ? Number(durationMinutes) : null,
    assignedAdvisorId: assignedAdvisorId ? Number(assignedAdvisorId) : null,
    expedientId: expedientId ? Number(expedientId) : null,
  };
  try {
    if (_tasksEditId) {
      await api('PATCH', `/api/tasks/${_tasksEditId}`, body);
      toast('Tarea actualizada', 'success');
    } else {
      await api('POST', '/api/tasks', body);
      toast('Tarea creada', 'success');
    }
    closeTaskModal();
    if (_calSubView === 'calendar') loadCalendar(); else await loadTasks();
    if (typeof refreshPipelineTaskIcons === 'function') refreshPipelineTaskIcons();
  } catch (err) { toast(err.message, 'error'); }
}

async function deleteCurrentTask() {
  if (!_tasksEditId) return;
  if (!confirm('¿Eliminar esta tarea?')) return;
  try {
    await api('DELETE', `/api/tasks/${_tasksEditId}`);
    toast('Tarea eliminada', 'success');
    closeTaskModal();
    await loadTasks();
  } catch (err) { toast(err.message, 'error'); }
}

function setupTasksView() {
  // Sub-vista toggle (Lista / Mes)
  document.querySelectorAll('.cal-sub-btn').forEach(btn => {
    btn.addEventListener('click', () => switchCalSubView(btn.dataset.sub));
  });

  // Tabs de filtro
  document.querySelectorAll('.tasks-tabs .tt-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      _tasksFilter = btn.dataset.filter;
      document.querySelectorAll('.tasks-tabs .tt-tab').forEach(b => b.classList.toggle('is-active', b === btn));
      loadTasks();
    });
  });

  document.getElementById('taskNewBtn')?.addEventListener('click', () => openTaskModal(null));
  document.getElementById('taskCancelBtn')?.addEventListener('click', closeTaskModal);
  document.getElementById('taskCancelBtnFooter')?.addEventListener('click', closeTaskModal);
  document.getElementById('taskDeleteBtn')?.addEventListener('click', deleteCurrentTask);
  document.getElementById('taskForm')?.addEventListener('submit', (e) => { e.preventDefault(); saveTask(); });
  document.getElementById('taskModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'taskModal') closeTaskModal();
  });

  // Live check: horario del asesor cuando cambia asesor o fecha
  document.getElementById('taskAssignedAdvisorId')?.addEventListener('change', checkTaskAdvisorHours);
  document.getElementById('taskDueAt')?.addEventListener('change', checkTaskAdvisorHours);

  // Búsqueda de tareas desde topbar (cuando estamos en calendario)
  document.getElementById('topbarSearchInput')?.addEventListener('input', (e) => {
    if (document.body.dataset.viewActive !== 'calendario') return;
    _tasksSearch = e.target.value;
    renderTaskList();
  });

  // Tabs de aplicaciones (dentro del settings-pane)
  document.querySelector('.settings-pane[data-settings="aplicaciones"]')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.apps-tab-btn');
    if (!btn) return;
    document.querySelectorAll('.apps-tab-btn').forEach(b => b.classList.toggle('is-active', b === btn));
    const tab = btn.dataset.appsTab;
    document.getElementById('appsTabInstalled').hidden = (tab !== 'installed');
    document.getElementById('appsTabAvailable').hidden  = (tab !== 'available');
    filterAppsList(_appsSearch || '');
  });

  // Cargar al entrar a la vista unificada
  document.querySelectorAll('.nav-item[data-view="calendario"]').forEach(n => {
    n.addEventListener('click', () => setTimeout(() => {
      _tasksSearch = '';
      const si = document.getElementById('topbarSearchInput');
      if (si) si.value = '';
      if (_calSubView === 'list') loadTasks(); else loadCalendar();
    }, 50));
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupTasksView);
} else {
  setupTasksView();
}

// ─── Iconos calendario en pipeline cards (cierra Sección 2 pendiente) ───
let _pipelineTaskCounts = {}; // { expedientId: { pending, overdue } }
async function refreshPipelineTaskIcons(expedientIds = null) {
  // Si no se pasan ids, los infiero de los cards visibles
  if (!expedientIds) {
    const cards = document.querySelectorAll('.pl-card[data-exp-id]');
    expedientIds = Array.from(cards).map(c => Number(c.dataset.expId)).filter(Boolean);
  }
  if (!expedientIds.length) { _pipelineTaskCounts = {}; return; }
  try {
    const r = await api('GET', '/api/tasks/by-expedients?ids=' + expedientIds.join(','));
    _pipelineTaskCounts = r.counts || {};
    renderPipelineTaskIcons();
  } catch (_) { /* silent */ }
}

function renderPipelineTaskIcons() {
  document.querySelectorAll('.pl-card[data-exp-id]').forEach(card => {
    const expId = Number(card.dataset.expId);
    const counts = _pipelineTaskCounts[expId];
    // Quitar icono viejo
    card.querySelectorAll('.pl-card-task-icon').forEach(el => el.remove());
    if (!counts || !counts.pending) return;
    const nameRow = card.querySelector('.pl-card-name');
    if (!nameRow) return;
    const cls = counts.overdue > 0 ? 'has-overdue' : 'has-pending';
    const icon = counts.overdue > 0 ? '⏰' : '📅';
    const title = counts.overdue > 0
      ? `${counts.overdue} tarea(s) vencida(s) de ${counts.pending} total`
      : `${counts.pending} tarea(s) pendiente(s)`;
    const span = document.createElement('span');
    span.className = `pl-card-task-icon ${cls}`;
    span.title = title;
    span.textContent = icon;
    nameRow.appendChild(span);
  });
}

// Hook al render del kanban: cuando se redibuja, refresca iconos
const _origRenderKanban = window.renderPipelinesBoard;
if (typeof _origRenderKanban === 'function') {
  // Wrapper que re-fetcha tasks y agrega iconos
  window.renderPipelinesBoard = function(...args) {
    const result = _origRenderKanban.apply(this, args);
    setTimeout(() => refreshPipelineTaskIcons(), 100);
    return result;
  };
}

// ─── Tareas dentro del detalle del lead ───
async function renderExpDetailTasks() {
  const root = document.getElementById('expDetailTasks');
  if (!root || !EXP_DETAIL) return;
  try {
    const r = await api('GET', `/api/tasks?expedientId=${EXP_DETAIL.id}&filter=pending&limit=20`);
    const items = r.items || [];
    const itemsHtml = items.length
      ? items.map(t => {
          const now = Math.floor(Date.now() / 1000);
          const cls = t.dueAt < now ? 'is-overdue' : '';
          return `
            <div class="exp-detail-task ${cls}" data-task-id="${t.id}">
              <span class="exp-detail-task-due">${escapeHtml(fmtTaskDue(t.dueAt))}</span>
              <span class="exp-detail-task-title">${escapeHtml(t.title)}</span>
            </div>
          `;
        }).join('')
      : '<p class="exp-detail-task-empty">Sin tareas pendientes para este lead.</p>';
    root.innerHTML = `
      <div class="exp-detail-section-title">Tareas</div>
      <div class="exp-detail-tasks-body">
        ${itemsHtml}
        <button class="btn btn--ghost btn--sm" id="expDetailAddTaskBtn">+ Nueva tarea</button>
      </div>
    `;
    document.getElementById('expDetailAddTaskBtn')?.addEventListener('click', () => {
      openTaskModal(null, EXP_DETAIL.id, EXP_DETAIL.name || `Lead #${EXP_DETAIL.id}`);
    });
    root.querySelectorAll('[data-task-id]').forEach(el => {
      el.addEventListener('click', () => {
        // Cargar la tarea desde el server (no la tenemos en _tasksItems aquí)
        api('GET', `/api/tasks/${el.dataset.taskId}`).then(t => {
          _tasksItems = [t]; // hack para que openTaskModal la encuentre
          openTaskModal(Number(el.dataset.taskId));
        });
      });
    });
  } catch (err) {
    root.innerHTML = `<p class="exp-detail-task-empty" style="color:#ef4444">Error: ${escapeHtml(err.message)}</p>`;
  }
}

// Hook al render del lead detail para que cargue tareas
const _origRenderExpInfo = window.renderExpDetailInfo;
if (typeof _origRenderExpInfo === 'function') {
  window.renderExpDetailInfo = function(...args) {
    const r = _origRenderExpInfo.apply(this, args);
    setTimeout(renderExpDetailTasks, 50);
    return r;
  };
}

// ═══════ CHAT INFO PANEL (botón "i" del chat) ═══════
async function renderChatInfoPanel() {
  const body = document.getElementById('rhChatInfoBody');
  if (!body) return;
  if (!ACTIVE_CONVO_ID) {
    body.innerHTML = '<p class="ci-empty">Selecciona una conversación.</p>';
    return;
  }
  const convo = CONVERSATIONS.find(c => c.id === ACTIVE_CONVO_ID);
  if (!convo) {
    body.innerHTML = '<p class="ci-empty">Conversación no encontrada.</p>';
    return;
  }

  body.innerHTML = '<p class="ci-empty">Cargando…</p>';

  try {
    // Cargar contacto + leads + tareas pendientes en paralelo
    const [contactResp, leadsResp, tasksResp] = await Promise.all([
      convo.contactId ? api('GET', `/api/contacts/${convo.contactId}`).catch(() => null) : Promise.resolve(null),
      convo.contactId ? api('GET', `/api/expedients?contactId=${convo.contactId}&pageSize=10`).catch(() => ({ items: [] })) : Promise.resolve({ items: [] }),
      convo.contactId ? api('GET', `/api/tasks?contactId=${convo.contactId}&filter=pending&limit=10`).catch(() => ({ items: [] })) : Promise.resolve({ items: [] }),
    ]);
    // La API devuelve { item: {...} } — extraer el objeto real
    const contact = contactResp?.item || null;

    const name = contact ? `${contact.firstName || ''} ${contact.lastName || ''}`.trim() || 'Sin nombre' : (convo.name || convo.externalId || 'Sin nombre');
    const initials = name.split(/\s+/).slice(0,2).map(s => s.charAt(0).toUpperCase()).join('') || '?';
    const phone = contact?.phone || convo.externalId || '';
    const email = contact?.email || '';
    const tags = Array.isArray(contact?.tags) ? contact.tags : [];
    const avatarUrl = contact?.avatarUrl || null;

    const avatarHtml = avatarUrl
      ? `<img class="ci-avatar" src="${escapeHtml(avatarUrl)}" alt="" onerror="this.outerHTML='<div class=&quot;ci-avatar&quot;>${escapeHtml(initials)}</div>'" />`
      : `<div class="ci-avatar">${escapeHtml(initials)}</div>`;

    const leads = (leadsResp.items || []).filter(e => e.stageKind !== 'won' && e.stageKind !== 'lost');
    const leadsHtml = leads.length
      ? leads.map(e => {
          const pColor = e.pipelineColor || '#94a3b8';
          const sColor = e.stageColor || '#94a3b8';
          return `
            <div class="ci-lead-card">
              <div class="ci-lead-name" data-go-to-exp="${e.id}">${escapeHtml(e.name || 'Sin nombre')}</div>
              <div class="ci-lead-pipeline">
                <span class="ci-lead-pill" style="background:${pColor}24;border-color:${pColor}55">
                  <span class="ci-lead-dot" style="background:${pColor}"></span>${escapeHtml(e.pipelineName || '')}
                </span>
                <span class="ci-lead-arrow">›</span>
                <span class="ci-lead-pill" style="background:${sColor}24;border-color:${sColor}55">
                  <span class="ci-lead-dot" style="background:${sColor}"></span>${escapeHtml(e.stageName || '')}
                </span>
              </div>
            </div>
          `;
        }).join('')
      : '<p class="ci-empty">Sin leads abiertos.</p>';

    const tasks = tasksResp.items || [];
    const now = Math.floor(Date.now() / 1000);
    const tasksHtml = tasks.length
      ? tasks.map(t => {
          const isOverdue = t.dueAt < now;
          return `
            <div class="ci-row" style="${isOverdue ? 'color:#dc2626' : ''}" data-task-id="${t.id}" style="cursor:pointer">
              <span>⏰</span>
              <span style="flex:1">${escapeHtml(t.title)}</span>
              <span style="font-size:11px;color:#94a3b8">${fmtTaskDue ? fmtTaskDue(t.dueAt) : ''}</span>
            </div>
          `;
        }).join('')
      : '<p class="ci-empty">Sin tareas pendientes.</p>';

    body.innerHTML = `
      <div class="ci-avatar-block">
        ${avatarHtml}
        <div class="ci-name">${escapeHtml(name)}</div>
      </div>

      <div class="ci-section">
        <h4>Contacto</h4>
        <div class="ci-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>${escapeHtml(name)}</span>
        </div>
        ${phone ? `<div class="ci-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg><a href="tel:${escapeHtml(phone)}" style="color:#2563eb;text-decoration:none">${escapeHtml(phone)}</a></div>` : ''}
        <div class="ci-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          ${email
            ? `<a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none">${escapeHtml(email)}</a>`
            : `<span class="ci-muted">Sin email</span>`}
        </div>
        <div class="ci-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg><span style="text-transform:capitalize">${escapeHtml(convo.provider || '')}</span></div>
      </div>

      ${tags.length ? `
        <div class="ci-section">
          <h4>Etiquetas</h4>
          <div class="ci-tag-list">${tags.map(t => `<span class="ci-tag">${escapeHtml(t)}</span>`).join('')}</div>
        </div>
      ` : ''}

      <div class="ci-section">
        <h4>Leads abiertos</h4>
        ${leadsHtml}
      </div>

      <div class="ci-section">
        <h4>Tareas pendientes</h4>
        ${tasksHtml}
      </div>

      ${contact ? `
        <div class="ci-actions">
          <button class="btn btn--ghost" id="ciEditContactBtn">Editar contacto</button>
        </div>
      ` : ''}
    `;

    // Wire eventos
    body.querySelectorAll('[data-go-to-exp]').forEach(el => {
      el.addEventListener('click', () => {
        const id = Number(el.dataset.goToExp);
        if (typeof openExpDetail === 'function') openExpDetail(id);
        toggleChatInfoPanel(false);
      });
    });
    document.getElementById('ciEditContactBtn')?.addEventListener('click', () => {
      if (contact && typeof openCustomerModal === 'function') {
        toggleChatInfoPanel(false);
        openCustomerModal(contact);
      }
    });
  } catch (err) {
    body.innerHTML = `<p class="ci-empty" style="color:#ef4444">Error: ${escapeHtml(err.message)}</p>`;
  }
}

function toggleChatInfoPanel(forceState = null) {
  const panel = document.getElementById('rhChatInfoPanel');
  if (!panel) return;
  const willShow = forceState !== null ? forceState : panel.hidden;
  panel.hidden = !willShow;
  if (willShow) renderChatInfoPanel();
}

function setupChatInfoPanel() {
  document.getElementById('rhChatInfoBtn')?.addEventListener('click', () => toggleChatInfoPanel());
  document.getElementById('rhChatInfoClose')?.addEventListener('click', () => toggleChatInfoPanel(false));
}

// ═══════ MOBILE: toggle inbox vs conversation ═══════
function setMobileChatView(view) {
  // view: 'inbox' | 'conversation'
  document.body.dataset.chatMobileView = view;
}

function setupMobileChatToggle() {
  // Solo aplica si pantalla es mobile (≤720px). Default: ver inbox al entrar a chats.
  setMobileChatView('inbox');

  // Botón back en mobile (vive en .rh-conversation-header como rhMobileBackLeft).
  // El id viejo rhMobileBackBtn se mantiene como fallback en caso de cache stale.
  const backHandler = () => {
    setMobileChatView('inbox');
    toggleChatInfoPanel(false);
    // También resetea el chat activo para no quedarnos con la convo "pegada"
    if (typeof renderChatEmptyState === 'function') renderChatEmptyState();
  };
  document.getElementById('rhMobileBackLeft')?.addEventListener('click', backHandler);
  document.getElementById('rhMobileBackBtn')?.addEventListener('click', backHandler);

  // Cuando seleccionas un chat (click en lista), ir a conversation view
  // Lo hacemos con event delegation porque la lista se rendea dinámicamente.
  document.getElementById('rhChatList')?.addEventListener('click', (e) => {
    if (e.target.closest('.rh-chat-item')) {
      setMobileChatView('conversation');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setupChatInfoPanel();
    setupMobileChatToggle();
  });
} else {
  setupChatInfoPanel();
  setupMobileChatToggle();
}

// ═══════ VISTA CALENDARIO ═══════
let _calCurrent = new Date(); // mes actualmente visible
let _calTasks = [];          // tareas del mes cargadas
let _calSubView = 'list';    // 'list' | 'calendar'

function switchCalSubView(sub) {
  _calSubView = sub;
  document.getElementById('calSubList')?.setAttribute('hidden', sub !== 'list' ? '' : null);
  document.getElementById('calSubCalendar')?.setAttribute('hidden', sub !== 'calendar' ? '' : null);
  if (sub === 'list') {
    document.getElementById('calSubList').removeAttribute('hidden');
    document.getElementById('calSubCalendar').setAttribute('hidden', '');
  } else {
    document.getElementById('calSubList').setAttribute('hidden', '');
    document.getElementById('calSubCalendar').removeAttribute('hidden');
  }
  document.getElementById('calNavBar')?.toggleAttribute('hidden', sub !== 'calendar');
  document.getElementById('calListTabs')?.toggleAttribute('hidden', sub !== 'list');
  document.querySelectorAll('.cal-sub-btn').forEach(b => b.classList.toggle('is-active', b.dataset.sub === sub));
  if (sub === 'list') loadTasks();
  else loadCalendar();
}

const MONTH_NAMES_ES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DAY_HEADERS_ES = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

async function loadCalendar() {
  const grid = document.getElementById('calGrid');
  const label = document.getElementById('calCurrentLabel');
  if (!grid || !label) return;

  // Set label
  label.textContent = `${MONTH_NAMES_ES[_calCurrent.getMonth()]} ${_calCurrent.getFullYear()}`;

  // Cargar TODAS las tareas (pending + completed) del rango del mes
  // (incluyendo días previos/siguientes que se ven en el grid)
  const firstDayMonth = new Date(_calCurrent.getFullYear(), _calCurrent.getMonth(), 1);
  const lastDayMonth = new Date(_calCurrent.getFullYear(), _calCurrent.getMonth() + 1, 0);
  // Inicio del grid: domingo previo al primer día del mes
  const gridStart = new Date(firstDayMonth);
  gridStart.setDate(firstDayMonth.getDate() - firstDayMonth.getDay());
  const gridEnd = new Date(lastDayMonth);
  gridEnd.setDate(lastDayMonth.getDate() + (6 - lastDayMonth.getDay()));

  try {
    const r = await api('GET', '/api/tasks?filter=all&limit=500');
    _calTasks = (r.items || []).filter(t => {
      const d = new Date(t.dueAt * 1000);
      return d >= gridStart && d <= new Date(gridEnd.getTime() + 24*3600*1000);
    });
  } catch (_) { _calTasks = []; }

  // Construir grid
  const today = new Date(); today.setHours(0,0,0,0);
  let html = '';
  for (const dh of DAY_HEADERS_ES) html += `<div class="cal-day-header">${dh}</div>`;

  const cur = new Date(gridStart);
  // Recorrer 6 semanas (42 celdas) — siempre cubre cualquier mes
  for (let w = 0; w < 6; w++) {
    let weekHasMonthDay = false;
    for (let d = 0; d < 7; d++) {
      const isOtherMonth = cur.getMonth() !== _calCurrent.getMonth();
      if (!isOtherMonth) weekHasMonthDay = true;
      const isToday = cur.getTime() === today.getTime();
      const dayStart = new Date(cur); dayStart.setHours(0,0,0,0);
      const dayEnd = new Date(cur); dayEnd.setHours(23,59,59,999);
      const dayTasks = _calTasks.filter(t => {
        const td = new Date(t.dueAt * 1000);
        return td >= dayStart && td <= dayEnd;
      });
      const tasksHtml = dayTasks.slice(0, 3).map(t => {
        const cls = t.completed ? 'is-completed' : (t.dueAt < Math.floor(Date.now()/1000) ? 'is-overdue' : '');
        return `<div class="cal-task-pill ${cls}" data-task-id="${t.id}" title="${escapeHtml(t.title)}">${escapeHtml(t.title)}</div>`;
      }).join('');
      const moreHtml = dayTasks.length > 3 ? `<div class="cal-task-more">+${dayTasks.length - 3} más</div>` : '';
      const isoDate = cur.toISOString().slice(0, 10);
      html += `
        <div class="cal-cell ${isOtherMonth ? 'is-other-month' : ''} ${isToday ? 'is-today' : ''}" data-date="${isoDate}">
          <span class="cal-day-num">${cur.getDate()}</span>
          ${tasksHtml}
          ${moreHtml}
        </div>
      `;
      cur.setDate(cur.getDate() + 1);
    }
    // Si la semana siguiente ya no tiene días del mes actual, cortar
    if (!weekHasMonthDay && w >= 4) break;
  }
  grid.innerHTML = html;

  // Wire click en celda (crear tarea con esa fecha pre-cargada)
  grid.querySelectorAll('.cal-cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
      // Si clickearon en una task pill, abrir modal de edit
      const taskId = e.target.closest('.cal-task-pill')?.dataset?.taskId;
      if (taskId) {
        e.stopPropagation();
        api('GET', `/api/tasks/${taskId}`).then(t => {
          _tasksItems = [t];
          openTaskModal(Number(taskId));
        });
        return;
      }
      // Click en celda vacía → nueva tarea con fecha pre-cargada
      const dateStr = cell.dataset.date;
      if (!dateStr) return;
      const d = new Date(dateStr + 'T09:00:00');
      _tasksEditId = null;
      // Abrir modal y luego setear fecha
      setTimeout(() => {
        openTaskModal(null);
        setTimeout(() => {
          const dueInput = document.getElementById('taskDueAt');
          if (dueInput) {
            const isoLocal = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
            dueInput.value = isoLocal;
          }
        }, 100);
      }, 50);
    });
  });
}

function setupCalendarView() {
  document.getElementById('calPrevBtn')?.addEventListener('click', () => {
    _calCurrent.setMonth(_calCurrent.getMonth() - 1);
    loadCalendar();
  });
  document.getElementById('calNextBtn')?.addEventListener('click', () => {
    _calCurrent.setMonth(_calCurrent.getMonth() + 1);
    loadCalendar();
  });
  document.getElementById('calTodayBtn')?.addEventListener('click', () => {
    _calCurrent = new Date();
    loadCalendar();
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCalendarView);
} else {
  setupCalendarView();
}

// ═══════ Fuentes de Conocimiento (IA) ═══════
let _kbItems = [];
let _kbEditId = null;

async function loadKnowledgeSources() {
  const root = document.getElementById('kbList');
  if (!root) return;
  root.innerHTML = '<div class="kb-loading">Cargando…</div>';
  try {
    const r = await api('GET', '/api/ai-knowledge');
    _kbItems = r.items || [];
    renderKbList();
  } catch (err) {
    root.innerHTML = `<div class="kb-empty" style="color:#ef4444">Error: ${escapeHtml(err.message)}</div>`;
  }
}

function renderKbList() {
  const root = document.getElementById('kbList');
  if (!root) return;
  if (!_kbItems.length) {
    root.innerHTML = `
      <div class="kb-empty">
        <p>Aún no tienes fuentes de conocimiento.</p>
        <p style="font-size:12px;margin-top:8px">Agrega información sobre tu empresa, productos, políticas o tono de voz para que la IA responda mejor.</p>
      </div>
    `;
    return;
  }
  root.innerHTML = _kbItems.map(s => `
    <div class="kb-item ${s.active ? '' : 'is-inactive'}" data-kb-id="${s.id}">
      <div class="kb-item-head">
        <span class="kb-item-title">${escapeHtml(s.title)}</span>
        ${s.category ? `<span class="kb-item-cat">${escapeHtml(s.category)}</span>` : ''}
        <span class="kb-item-toggle ${s.active ? 'is-on' : ''}" data-kb-toggle="${s.id}" title="${s.active ? 'Activa (IA la usa)' : 'Desactivada (IA la ignora)'}"></span>
      </div>
      <div class="kb-item-content">${escapeHtml(s.content || '')}</div>
    </div>
  `).join('');

  root.querySelectorAll('[data-kb-toggle]').forEach(el => {
    el.addEventListener('click', async (e) => {
      e.stopPropagation();
      const id = Number(el.dataset.kbToggle);
      const item = _kbItems.find(x => x.id === id);
      if (!item) return;
      try {
        await api('PATCH', `/api/ai-knowledge/${id}`, { active: !item.active });
        await loadKnowledgeSources();
      } catch (err) { toast(err.message, 'error'); }
    });
  });
  root.querySelectorAll('[data-kb-id]').forEach(el => {
    el.addEventListener('click', () => openKbModal(Number(el.dataset.kbId)));
  });
}

function openKbModal(id = null) {
  _kbEditId = id;
  const titleEl = document.getElementById('kbModalTitle');
  const titleInput = document.getElementById('kbTitle');
  const categoryInput = document.getElementById('kbCategory');
  const contentInput = document.getElementById('kbContent');
  const deleteBtn = document.getElementById('kbDeleteBtn');
  if (!titleEl) return;

  if (id) {
    const it = _kbItems.find(x => x.id === id);
    if (!it) return;
    titleEl.textContent = 'Editar fuente';
    titleInput.value = it.title;
    categoryInput.value = it.category || '';
    contentInput.value = it.content || '';
    deleteBtn.hidden = false;
  } else {
    titleEl.textContent = 'Nueva fuente';
    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';
    deleteBtn.hidden = true;
  }
  document.getElementById('kbModal').hidden = false;
  setTimeout(() => titleInput.focus(), 50);
}

function closeKbModal() {
  const modal = document.getElementById('kbModal');
  if (modal) modal.hidden = true;
  _kbEditId = null;
}

async function saveKb() {
  const body = {
    title: document.getElementById('kbTitle').value.trim(),
    category: document.getElementById('kbCategory').value.trim(),
    content: document.getElementById('kbContent').value.trim(),
  };
  if (!body.title || !body.content) {
    toast('Título y contenido son requeridos', 'warning');
    return;
  }
  try {
    if (_kbEditId) {
      await api('PATCH', `/api/ai-knowledge/${_kbEditId}`, body);
      toast('Fuente actualizada', 'success');
    } else {
      await api('POST', '/api/ai-knowledge', body);
      toast('Fuente creada', 'success');
    }
    closeKbModal();
    await loadKnowledgeSources();
  } catch (err) { toast(err.message, 'error'); }
}

async function deleteKb() {
  if (!_kbEditId) return;
  if (!confirm('¿Eliminar esta fuente? La IA dejará de usarla.')) return;
  try {
    await api('DELETE', `/api/ai-knowledge/${_kbEditId}`);
    toast('Fuente eliminada', 'success');
    closeKbModal();
    await loadKnowledgeSources();
  } catch (err) { toast(err.message, 'error'); }
}

function setupKnowledgeBase() {
  document.getElementById('kbAddBtn')?.addEventListener('click', () => openKbModal(null));
  document.getElementById('kbCancelBtn')?.addEventListener('click', closeKbModal);
  document.getElementById('kbDeleteBtn')?.addEventListener('click', deleteKb);
  document.getElementById('kbForm')?.addEventListener('submit', (e) => { e.preventDefault(); saveKb(); });
  document.getElementById('kbModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'kbModal') closeKbModal();
  });

  // Cargar al entrar al tab IA dentro de Configuración (cuando se active)
  // Por ahora cargamos al abrir Configuración por primera vez
  document.querySelectorAll('.nav-item[data-view="ajustes"]').forEach(n => {
    n.addEventListener('click', () => setTimeout(loadKnowledgeSources, 100));
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupKnowledgeBase);
} else {
  setupKnowledgeBase();
}

// ═══════ PWA Install Prompt (Chrome/Edge desktop + Android) ═══════
let _pwaInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  _pwaInstallPrompt = e;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.hidden = false;
});

window.addEventListener('appinstalled', () => {
  _pwaInstallPrompt = null;
  const btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.hidden = true;
  if (typeof toast === 'function') toast('Wapi101 instalada como app ✓', 'success');
});

// ─── Vista Mail ───
let MAIL_FOLDER = 'inbox';
let MAIL_CONVOS = [];
let MAIL_SELECTED_ID = null;
let MAIL_EMAIL_INTEGRATIONS = [];
let MAIL_SEARCH = '';
let MAIL_ACCOUNT_FILTER = null; // null = todas las cuentas

function updateMailNavVisibility() {
  const EMAIL_PROVIDERS = ['email', 'gmail', 'outlook', 'icloud_mail', 'yahoo_mail'];
  MAIL_EMAIL_INTEGRATIONS = EMAIL_PROVIDERS.flatMap(key => {
    const prov = (INTEGRATIONS || []).find(p => p.key === key);
    return (prov?.integrations || []).filter(i => i.status === 'connected').map(i => ({ ...i, _provider: key }));
  });
  const hasEmail = MAIL_EMAIL_INTEGRATIONS.length > 0;
  const nav = document.getElementById('navMail');
  if (nav) nav.hidden = !hasEmail;
}

async function loadMailView() {
  updateMailNavVisibility();
  if (!MAIL_EMAIL_INTEGRATIONS.length) return;
  // Loader visible mientras pega — antes solo había "Cargando..." mudo.
  const list = document.getElementById('mailListItems');
  if (list && !MAIL_CONVOS.length) {
    list.innerHTML = '<div class="mail-loading-skeleton">' +
      Array.from({length:6}).map(() => '<div class="mail-skel-item"><div class="mail-skel-avatar"></div><div class="mail-skel-text"><div class="mail-skel-line w70"></div><div class="mail-skel-line w90"></div></div></div>').join('') +
      '</div>';
  }
  try {
    // Una sola query con todos los providers (antes eran 5 calls paralelos
    // que cada uno disparaba ~200 sub-queries por N+1 en hydrateConvo).
    const activeProviders = [...new Set(MAIL_EMAIL_INTEGRATIONS.map(i => i._provider || i.provider).filter(Boolean))];
    if (!activeProviders.length) { MAIL_CONVOS = []; renderMailList(); return; }
    const data = await api('GET', `/api/conversations?providersIn=${activeProviders.join(',')}&pageSize=200`).catch(() => ({ items: [] }));
    MAIL_CONVOS = data.items || [];
    renderMailList();
    renderMailAccounts();
    renderMailComposePicker();
    updateMailUnreadBadge();
  } catch(e) { console.error('[mail]', e); }
}

function updateMailUnreadBadge() {
  const unread = MAIL_CONVOS.filter(c => c.unreadCount > 0).length;
  const badge = document.getElementById('mailInboxBadge');
  if (badge) { badge.textContent = unread || ''; badge.hidden = !unread; }
  const navBadge = document.getElementById('navMailBadge');
  if (navBadge) { navBadge.textContent = unread > 0 ? String(unread) : ''; navBadge.style.display = unread > 0 ? '' : 'none'; }
}

function mailFilteredConvos() {
  let convos = MAIL_CONVOS;
  if (SPLIT_CONFIG.enabled) {
    const mailIds = SPLIT_ACTIVE_MAIL_COMPANY === 'a'
      ? (SPLIT_CONFIG.mailsA || [])
      : (SPLIT_CONFIG.mailsB || []);
    // Si la empresa no tiene cuentas asignadas, devuelve 0 correos (no falla al filtro vacío)
    convos = convos.filter(c => mailIds.includes(c.integrationId));
  }
  if (MAIL_ACCOUNT_FILTER !== null) {
    convos = convos.filter(c => c.integrationId === MAIL_ACCOUNT_FILTER);
  }
  if (MAIL_FOLDER === 'sent') {
    // El API no expone "direction" del último mensaje. Deducimos: si
    // lastIncomingAt es null/0 o menor que lastMessageAt, el último msj fue
    // saliente.
    convos = convos.filter(c => (c.lastIncomingAt || 0) < (c.lastMessageAt || 0));
  }
  if (MAIL_SEARCH) {
    const q = MAIL_SEARCH.toLowerCase();
    convos = convos.filter(c =>
      (c.name || '').toLowerCase().includes(q) ||
      (c.externalId || '').toLowerCase().includes(q) ||
      (c.lastMessage || '').toLowerCase().includes(q)
    );
  }
  return convos;
}

function parseEmailSubject(body) {
  if (!body) return t('mail.no_subject_paren');
  const m = body.match(/^📧\s*(.+)/);
  if (m) return m[1].split('\n')[0].trim();
  return body.split('\n')[0].slice(0, 60) || t('mail.no_subject_paren');
}

// Decodifica quoted-printable (=3D → =, =E2=80=99 → '…')
function _decodeQuotedPrintable(str) {
  // Soft line breaks (=\n o =\r\n) se eliminan
  str = str.replace(/=\r?\n/g, '');
  // Convierte secuencias de bytes =HH a UTF-8 correcto
  return str.replace(/(=[0-9A-Fa-f]{2})+/g, m => {
    const bytes = [];
    for (let i = 0; i < m.length; i += 3) {
      bytes.push(parseInt(m.slice(i + 1, i + 3), 16));
    }
    try { return new TextDecoder('utf-8').decode(new Uint8Array(bytes)); }
    catch { return m; }
  });
}

// Decodifica una "parte" individual del MIME según su Content-Transfer-Encoding.
function _decodePart(headers, content) {
  if (/content-transfer-encoding:\s*quoted-printable/i.test(headers)) {
    return _decodeQuotedPrintable(content);
  }
  if (/content-transfer-encoding:\s*base64/i.test(headers)) {
    try {
      const raw = atob(content.replace(/\s/g, ''));
      // Convertir bytes a UTF-8
      const bytes = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
      return new TextDecoder('utf-8').decode(bytes);
    } catch { return content; }
  }
  return content;
}

// Recursivo: parsea un bloque multipart y devuelve {html, text} de la primera parte que matchee.
function _parseMultipart(body, boundary, depth = 0) {
  if (depth > 5) return { html: null, text: null }; // safety
  const marker = '--' + boundary;
  const parts = body.split(marker);
  let htmlPart = null, textPart = null;

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed || trimmed === '--') continue;

    const headerEnd = part.search(/\r?\n\r?\n/);
    if (headerEnd === -1) continue;

    const rawHeaders = part.slice(0, headerEnd);
    const content = part.slice(headerEnd).replace(/^\r?\n\r?\n/, '');

    // Si esta parte es ella misma multipart, recurse (anidación)
    const nested = rawHeaders.match(/Content-Type:\s*multipart\/[^;]*;\s*boundary=["']?([^"'\r\n]+)["']?/i);
    if (nested) {
      const inner = _parseMultipart(content, nested[1], depth + 1);
      if (inner.html && !htmlPart) htmlPart = inner.html;
      if (inner.text && !textPart) textPart = inner.text;
      continue;
    }

    const decoded = _decodePart(rawHeaders, content.trim());
    if (/Content-Type:\s*text\/html/i.test(rawHeaders) && !htmlPart) htmlPart = decoded;
    else if (/Content-Type:\s*text\/plain/i.test(rawHeaders) && !textPart) textPart = decoded;
  }
  return { html: htmlPart, text: textPart };
}

// Parsea un email body crudo (puede ser MIME multipart o texto plano)
// Devuelve { content, isHtml }
function parseEmailBody(raw) {
  if (!raw) return { content: '', isHtml: false };
  let body = String(raw);

  // Saltar prefijo interno "📧 Subject\n\n" si lo tiene
  if (body.startsWith('📧')) {
    const idx = body.indexOf('\n\n');
    if (idx > -1) body = body.slice(idx + 2);
  }

  // Detectar boundary del MIME — puede venir de un Content-Type header,
  // O directamente al inicio del body (cuando el servidor ya quitó el header pero dejó las partes).
  let boundary = null;
  const ctMatch = body.match(/Content-Type:\s*multipart\/[^;]*;\s*boundary=["']?([^"'\r\n]+)["']?/i);
  if (ctMatch) {
    boundary = ctMatch[1];
  } else {
    // Buscar boundary "huérfano" en cualquier línea que empiece con 2+ guiones.
    // Patrones reales:
    //   --000000000000502b3606512d51e9          (Google/Gmail — solo 2 dashes)
    //   ------=_Part_5175109_149173476.xxx       (Zoho — 6 dashes)
    //   --Apple-Mail=_ABC-DEF                    (Apple Mail)
    //   --===============1234567890==            (clientes viejos)
    // Buscamos línea que empiece con --, tenga ≥8 chars de boundary,
    // y luego aparezca al menos una vez más en el body (señal fuerte de MIME).
    const candidates = body.match(/^--[A-Za-z0-9_=.+\-]{8,}/gm) || [];
    for (const c of candidates) {
      // Para descartar falsos positivos, el boundary debe aparecer ≥2 veces.
      const escaped = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const occurrences = (body.match(new RegExp(escaped, 'g')) || []).length;
      if (occurrences >= 2) {
        boundary = c.replace(/^--/, '');
        break;
      }
    }
  }

  if (boundary) {
    const result = _parseMultipart(body, boundary);
    if (result.html) return { content: result.html, isHtml: true };
    if (result.text) return { content: result.text, isHtml: false };
  }

  // Si no es multipart pero tiene headers + quoted-printable, decode
  if (/Content-Transfer-Encoding:\s*quoted-printable/i.test(body)) {
    const hEnd = body.search(/\r?\n\r?\n/);
    if (hEnd > -1) body = body.slice(hEnd).replace(/^\r?\n\r?\n/, '');
    body = _decodeQuotedPrintable(body);
  }

  // Detectar si parece HTML
  const isHtml = /<!DOCTYPE\s+html|<html[\s>]|<body[\s>]|<table[\s>]|<div[\s>]/i.test(body);
  return { content: body, isHtml };
}

function parseEmailPreview(body) {
  if (!body) return '';
  // Si es MIME/HTML, sacar texto plano para el preview
  const { content, isHtml } = parseEmailBody(body);
  let text = content;
  if (isHtml) {
    // Strip HTML tags y entities básicas
    text = text.replace(/<style[\s\S]*?<\/style>/gi, '')
               .replace(/<script[\s\S]*?<\/script>/gi, '')
               .replace(/<[^>]+>/g, ' ')
               .replace(/&nbsp;/g, ' ')
               .replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'");
  }
  return text.replace(/\s+/g, ' ').trim().slice(0, 100);
}

// Fecha+hora completa para el detalle del mail (ej. "13 may 2026, 14:32")
function mailFmtDateTimeFull(ts) {
  if (!ts) return '';
  const d = new Date(ts * 1000);
  const date = d.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
  const time = d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  return `${date} · ${time}`;
}

// Color de avatar a partir del email/nombre — consistente por persona.
// 8 colores curados que se ven bien con texto blanco.
function _avatarColorFor(seed) {
  const palette = ['#2563eb', '#0891b2', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0d9488', '#dc2626'];
  const s = String(seed || '').toLowerCase();
  let hash = 0;
  for (let i = 0; i < s.length; i++) hash = ((hash << 5) - hash) + s.charCodeAt(i) | 0;
  return palette[Math.abs(hash) % palette.length];
}

function mailFmtDate(ts) {
  if (!ts) return '';
  const d = new Date(ts * 1000);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  if (isToday) return d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  return d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
}

function renderMailList() {
  const el = document.getElementById('mailListItems');
  if (!el) return;
  const convos = mailFilteredConvos();
  if (!convos.length) {
    el.innerHTML = `<div class="mail-empty-list">${MAIL_SEARCH ? t('mail.no_results') : t('mail.no_emails')}</div>`;
    return;
  }
  el.innerHTML = convos.map(c => {
    const isUnread = (c.unreadCount || 0) > 0;
    const isSelected = c.id === MAIL_SELECTED_ID;
    const subject = parseEmailSubject(c.lastMessage);
    const preview = parseEmailPreview(c.lastMessage);
    const senderName = c.name || c.externalId || t('mail.unknown_sender');
    const avatar = senderName.slice(0, 2).toUpperCase();
    const avatarBg = _avatarColorFor(c.externalId || c.name);
    return `<div class="mail-item${isSelected ? ' mail-item--selected' : ''}${isUnread ? ' mail-item--unread' : ''}" data-id="${c.id}">
      <div class="mail-item-avatar" style="background:${avatarBg};color:#fff">${escapeHtml(avatar)}</div>
      <div class="mail-item-body">
        <div class="mail-item-top">
          <span class="mail-item-from">${escapeHtml(senderName)}</span>
          <span class="mail-item-date">${mailFmtDate(c.lastMessageAt)}</span>
        </div>
        <div class="mail-item-subject">${escapeHtml(subject)}</div>
        <div class="mail-item-preview">${escapeHtml(preview)}</div>
      </div>
      ${isUnread ? '<div class="mail-item-dot"></div>' : ''}
    </div>`;
  }).join('');

  el.querySelectorAll('.mail-item').forEach(item => {
    item.addEventListener('click', () => openMailConvo(Number(item.dataset.id)));
  });
}

async function openMailConvo(convoId) {
  MAIL_SELECTED_ID = convoId;

  // Marcar como leído optimista: si la convo tenía unread, actualizamos local
  // y disparamos el PATCH en paralelo (no esperamos al backend para renderear).
  const convoLocal = MAIL_CONVOS.find(c => c.id === convoId);
  if (convoLocal && (convoLocal.unreadCount || 0) > 0) {
    convoLocal.unreadCount = 0;
    updateMailUnreadBadge();
    api('PATCH', `/api/conversations/${convoId}/read`).catch(() => {});
  }
  renderMailList();
  const detail = document.getElementById('mailDetailCol');
  if (!detail) return;
  detail.innerHTML = `<div class="mail-loading">${t('mail.loading_email')}</div>`;
  try {
    const [convo, msgData] = await Promise.all([
      api('GET', `/api/conversations/${convoId}`),
      api('GET', `/api/conversations/${convoId}/messages?pageSize=50`),
    ]);
    const msgs = (msgData.items || []).slice().reverse();
    const subject = parseEmailSubject(msgs[0]?.body || '');
    const fromEmail = convo.externalId || '';
    const fromName = convo.name || fromEmail;

    const initials = (fromName || fromEmail || '?').slice(0, 2).toUpperCase();
    const avatarColor = _avatarColorFor(fromEmail || fromName);

    detail.innerHTML = `
      <div class="mail-detail-inner">
        <div class="mail-detail-header">
          <div class="mail-detail-header-row">
            <div class="mail-detail-avatar" style="background:${avatarColor}">${escapeHtml(initials)}</div>
            <div class="mail-detail-header-text">
              <h2 class="mail-detail-subject">${escapeHtml(subject)}</h2>
              <div class="mail-detail-meta">
                <span class="mail-detail-from-name">${escapeHtml(fromName)}</span>
                <span class="mail-detail-from-email">&lt;${escapeHtml(fromEmail)}&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mail-thread" id="mailThread">
          ${msgs.map(m => {
            const isOut = m.direction === 'outgoing';
            const { content, isHtml } = parseEmailBody(m.body || '');
            // Strip primer línea si es el subject duplicado en outgoing
            const stripped = isOut && content.split('\n')[0]?.startsWith('📧')
              ? content.split('\n').slice(2).join('\n')
              : content;
            // Inyectamos <meta name="referrer" content="no-referrer"> para que
            // los servidores de imágenes (Mailchimp, SendGrid, etc.) no bloqueen
            // los <img> por referrer "about:srcdoc". Si el HTML ya tiene <head>,
            // injectamos ahí; si no, lo envolvemos.
            const referrerMeta = '<meta name="referrer" content="no-referrer"><base target="_blank">';
            const htmlWithReferrer = /<head[^>]*>/i.test(stripped)
              ? stripped.replace(/<head[^>]*>/i, m => m + referrerMeta)
              : `<!DOCTYPE html><html><head><meta charset="utf-8">${referrerMeta}</head><body>${stripped}</body></html>`;
            const bodyHtml = isHtml
              ? `<iframe class="mail-message-iframe" loading="lazy" referrerpolicy="no-referrer" sandbox="allow-same-origin allow-popups" srcdoc="${escapeHtml(htmlWithReferrer)}" onload="try{const d=this.contentDocument;if(d){d.body.style.margin='0';d.body.style.fontFamily='-apple-system,BlinkMacSystemFont,sans-serif';d.body.style.fontSize='14px';this.style.height=(d.documentElement.scrollHeight+20)+'px';}}catch(e){}"></iframe>`
              : `<div class="mail-message-body-text">${escapeHtml(stripped).replace(/\n/g, '<br>')}</div>`;
            const who = isOut ? t('mail.you') : fromName;
            const whoInitials = (who || '?').slice(0, 2).toUpperCase();
            const whoColor = isOut ? '#2563eb' : avatarColor;
            return `<div class="mail-message${isOut ? ' mail-message--out' : ''}">
              <div class="mail-message-meta">
                <div class="mail-message-meta-left">
                  <div class="mail-message-avatar" style="background:${whoColor}">${escapeHtml(whoInitials)}</div>
                  <span class="mail-message-who">${escapeHtml(who)}</span>
                </div>
                <span class="mail-message-time" title="${escapeHtml(mailFmtDateTimeFull(m.createdAt))}">${escapeHtml(mailFmtDateTimeFull(m.createdAt))}</span>
              </div>
              <div class="mail-message-body">${bodyHtml}</div>
            </div>`;
          }).join('')}
        </div>
        <div class="mail-reply-box">
          <div class="mail-reply-label">${escapeHtml(t('mail.reply_to').replace('{name}', fromName))}</div>
          <textarea class="mail-reply-textarea" id="mailReplyText" placeholder="${escapeHtml(t('mail.reply_placeholder'))}" rows="4"></textarea>
          <div class="mail-reply-actions">
            <button class="btn btn--primary btn--sm" id="mailReplySendBtn" data-id="${convoId}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              ${escapeHtml(t('mail.reply_send'))}
            </button>
          </div>
        </div>
      </div>`;

    document.getElementById('mailReplySendBtn')?.addEventListener('click', async () => {
      const text = document.getElementById('mailReplyText')?.value?.trim();
      if (!text) return;
      const btn = document.getElementById('mailReplySendBtn');
      btn.disabled = true;
      try {
        await api('POST', `/api/conversations/${convoId}/messages`, { body: text });
        await openMailConvo(convoId);
        await loadMailView();
        toast(t('mail.sent_ok'), 'success');
      } catch(e) {
        toast(t('mail.send_error').replace('{msg}', e.message), 'error');
        btn.disabled = false;
      }
    });

    // Marcar como leído
    if (convo.unread_count > 0) {
      api('POST', `/api/conversations/${convoId}/read`).catch(() => {});
      const c = MAIL_CONVOS.find(x => x.id === convoId);
      if (c) c.unread_count = 0;
      updateMailUnreadBadge();
    }
  } catch(e) {
    detail.innerHTML = `<div class="mail-error">${escapeHtml(t('mail.error_prefix').replace('{msg}', e.message))}</div>`;
  }
}

function renderMailAccounts() {
  const el = document.getElementById('mailAccountsList');
  if (!el) return;
  const providerColor = { gmail: '#EA4335', outlook: '#0078D4', email: '#6366f1' };
  const allActive = MAIL_ACCOUNT_FILTER === null;
  const items = [
    `<div class="mail-account-item${allActive ? ' mail-account-item--active' : ''}" data-account="all" style="cursor:pointer">
      <div class="mail-account-dot" style="background:#64748b"></div>
      <span>${escapeHtml(t('mail.all_accounts'))}</span>
    </div>`,
    ...MAIL_EMAIL_INTEGRATIONS.map(i => {
      const color = providerColor[i._provider] || '#6366f1';
      const isActive = MAIL_ACCOUNT_FILTER === i.id;
      const label = i.displayName || 'Email';
      return `<div class="mail-account-item${isActive ? ' mail-account-item--active' : ''}" data-account="${i.id}" style="cursor:pointer">
        <div class="mail-account-dot" style="background:${color}"></div>
        <span>${escapeHtml(label)}</span>
      </div>`;
    }),
  ];
  el.innerHTML = items.join('');
  el.querySelectorAll('.mail-account-item').forEach(item => {
    item.addEventListener('click', () => {
      const val = item.dataset.account;
      MAIL_ACCOUNT_FILTER = val === 'all' ? null : Number(val);
      renderMailAccounts();
      renderMailList();
    });
  });
}

function renderMailComposePicker() {
  const sel = document.getElementById('mailComposeFrom');
  if (!sel) return;
  sel.innerHTML = MAIL_EMAIL_INTEGRATIONS.map(i =>
    `<option value="${i.id}">${escapeHtml(i.displayName || i.credentials?.fromEmail || 'Email')}</option>`
  ).join('');
}

function initMailView() {
  // Folders
  document.querySelectorAll('.mail-folder').forEach(f => {
    f.addEventListener('click', () => {
      document.querySelectorAll('.mail-folder').forEach(x => x.classList.remove('mail-folder--active'));
      f.classList.add('mail-folder--active');
      MAIL_FOLDER = f.dataset.folder;
      renderMailList();
    });
  });

  // Search
  document.getElementById('mailSearchInput')?.addEventListener('input', e => {
    MAIL_SEARCH = e.target.value;
    renderMailList();
  });

  // Compose
  document.getElementById('mailComposeBtn')?.addEventListener('click', () => {
    document.getElementById('mailComposePanel').hidden = false;
    document.getElementById('mailComposeTo')?.focus();
  });
  document.getElementById('mailComposeClose')?.addEventListener('click', () => {
    document.getElementById('mailComposePanel').hidden = true;
  });
  document.getElementById('mailComposeDiscard')?.addEventListener('click', () => {
    document.getElementById('mailComposePanel').hidden = true;
  });
  document.getElementById('mailComposeSendBtn')?.addEventListener('click', mailComposeSend);
}

async function mailComposeSend() {
  const to      = document.getElementById('mailComposeTo')?.value?.trim();
  const subject = document.getElementById('mailComposeSubject')?.value?.trim();
  const body    = document.getElementById('mailComposeBody')?.value?.trim();
  const integId = document.getElementById('mailComposeFrom')?.value;
  if (!to || !body) { toast(t('mail.compose_validate'), 'error'); return; }
  const btn = document.getElementById('mailComposeSendBtn');
  btn.disabled = true;
  try {
    await api('POST', '/api/mail/compose', { to, subject: subject || t('mail.no_subject_paren'), body, integrationId: Number(integId) });
    document.getElementById('mailComposePanel').hidden = true;
    document.getElementById('mailComposeTo').value = '';
    document.getElementById('mailComposeSubject').value = '';
    document.getElementById('mailComposeBody').value = '';
    await loadMailView();
    toast(t('mail.sent_ok'), 'success');
  } catch(e) {
    toast(t('mail.error_prefix').replace('{msg}', e.message), 'error');
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // ─── Tabs de integraciones ───
  document.querySelectorAll('.int-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.int-tab').forEach(t => t.classList.remove('int-tab--active'));
      tab.classList.add('int-tab--active');
      const isVote = tab.dataset.tab === 'vote';
      document.getElementById('intTabConnected').hidden = isVote;
      document.getElementById('intTabVote').hidden = !isVote;
      if (isVote) { initVoteTab(); renderVotes(); }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('pwaInstallBtn')?.addEventListener('click', async () => {
    if (!_pwaInstallPrompt) return;
    _pwaInstallPrompt.prompt();
    const { outcome } = await _pwaInstallPrompt.userChoice;
    if (outcome === 'accepted') {
      const btn = document.getElementById('pwaInstallBtn');
      if (btn) btn.hidden = true;
    }
    _pwaInstallPrompt = null;
  });
});

// ═══════════════════════════════════════════════════════════
// VISIBILIDAD CONDICIONAL — IA conectada
// ═══════════════════════════════════════════════════════════
async function applyAIConditionalVisibility() {
  let connected = false;
  try {
    const s = await api('GET', '/api/settings/ai');
    connected = !!s && (s.hasApiKey || s.provider === 'ollama');
  } catch {}
  const navItem = document.getElementById('navCopiloto');
  if (navItem) navItem.hidden = !connected;
  document.querySelectorAll('.sb-step-type-btn[data-type="ai_reply"]').forEach(btn => {
    btn.hidden = !connected;
  });
}

// ═══════════════════════════════════════════════════════════
// VISIBILIDAD CONDICIONAL — Comentarios FB/IG
// Solo se muestra el nav 'Comentarios' si hay al menos una integración
// de Messenger o Instagram conectada (status='connected').
// ═══════════════════════════════════════════════════════════
async function applySocialCommentsVisibility() {
  let connected = false;
  try {
    const data = await api('GET', '/api/integrations');
    // El endpoint devuelve un array de providers; cada provider tiene
    // su propio array .integrations con las instancias conectadas.
    // Ej: [{ key:'messenger', integrations:[{id, status, ...}] }, ...]
    const providers = data?.items || [];
    connected = providers.some(p =>
      (p.key === 'messenger' || p.key === 'instagram') &&
      Array.isArray(p.integrations) &&
      p.integrations.some(i => i.status === 'connected')
    );
  } catch {}
  const navItem = document.getElementById('navComments');
  if (navItem) navItem.hidden = !connected;
  // Si está oculto y el badge tenía número, también ocultarlo
  if (!connected) {
    const badge = document.getElementById('navCommentsBadge');
    if (badge) badge.hidden = true;
  }
}

// ═══════════════════════════════════════════════════════════
// COPILOTO IA
// ═══════════════════════════════════════════════════════════
let _cpHistory = [];
let _cpBusy    = false;
let _cpInited  = false;

function initCopiloto() {
  if (_cpInited) return;
  _cpInited = true;

  const form    = document.getElementById('copilotoForm');
  const input   = document.getElementById('copilotoInput');
  const sendBtn = document.getElementById('copilotoSendBtn');

  // Auto-resize textarea
  input?.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 140) + 'px';
  });

  // Enter = enviar, Shift+Enter = nueva línea
  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form?.requestSubmit(); }
  });

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const msg = input?.value.trim();
    if (!msg || _cpBusy) return;
    input.value = ''; input.style.height = 'auto';
    await cpSend(msg);
  });

  // Suggestions
  document.getElementById('copilotoMessages')?.addEventListener('click', e => {
    const btn = e.target.closest('.copiloto-suggestion');
    if (btn) cpSend(btn.dataset.q);
  });

  // Nueva conversación
  document.getElementById('copilotrClearBtn')?.addEventListener('click', () => {
    _cpHistory = [];
    cpRenderMessages();
  });

  // Config drawer
  document.getElementById('copilotoConfigBtn')?.addEventListener('click', async () => {
    await cpLoadConfig();
    document.getElementById('copilotoConfigDrawer').hidden = false;
  });
  document.getElementById('copilotoConfigClose')?.addEventListener('click', () => {
    document.getElementById('copilotoConfigDrawer').hidden = true;
  });
  document.getElementById('copilotoConfigSave')?.addEventListener('click', async () => {
    const body = {
      canMoveStage: document.getElementById('cpCfgMoveStage')?.checked ?? true,
      canAssign:    document.getElementById('cpCfgAssign')?.checked    ?? true,
      canAddTag:    document.getElementById('cpCfgAddTag')?.checked    ?? true,
      canAddNote:   document.getElementById('cpCfgAddNote')?.checked   ?? true,
      model:        document.getElementById('cpCfgModel')?.value       || '',
    };
    try {
      await api('PATCH', '/api/copilot/config', body);
      document.getElementById('copilotoConfigDrawer').hidden = true;
    } catch(e) { alert('Error guardando config: ' + e.message); }
  });
}

async function cpLoadConfig() {
  try {
    const cfg = await api('GET', '/api/copilot/config');
    const el = id => document.getElementById(id);
    if (el('cpCfgMoveStage')) el('cpCfgMoveStage').checked = cfg.canMoveStage !== false;
    if (el('cpCfgAssign'))    el('cpCfgAssign').checked    = cfg.canAssign    !== false;
    if (el('cpCfgAddTag'))    el('cpCfgAddTag').checked    = cfg.canAddTag    !== false;
    if (el('cpCfgAddNote'))   el('cpCfgAddNote').checked   = cfg.canAddNote   !== false;
    if (el('cpCfgModel'))     el('cpCfgModel').value        = cfg.model   || '';
  } catch(e) { console.error('cpLoadConfig', e); }
}

async function cpSend(message) {
  if (_cpBusy) return;
  _cpBusy = true;
  const sendBtn = document.getElementById('copilotoSendBtn');
  if (sendBtn) sendBtn.disabled = true;

  try {
    _cpHistory.push({ role: 'user', content: message });
    cpRenderMessages();
    cpShowTyping(true);

    const resp = await api('POST', '/api/copilot/chat', { message, history: _cpHistory.slice(0, -1) });
    const { reply, history } = resp || {};
    _cpHistory = Array.isArray(history) ? history : [..._cpHistory, { role: 'assistant', content: reply || 'Sin respuesta' }];
  } catch(e) {
    console.error('[copiloto] error:', e);
    _cpHistory.push({ role: 'assistant', content: '⚠️ ' + e.message });
  } finally {
    cpShowTyping(false);
    _cpBusy = false;
    if (sendBtn) sendBtn.disabled = false;
    cpRenderMessages();
    document.getElementById('copilotoInput')?.focus();
  }
}

function cpShowTyping(show) {
  const el = document.getElementById('cpTypingIndicator');
  if (show && !el) {
    const msgs = document.getElementById('copilotoMessages');
    const div = document.createElement('div');
    div.id = 'cpTypingIndicator';
    div.className = 'copiloto-msg copiloto-msg--ai';
    div.innerHTML = `<div class="copiloto-msg-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 2 C11.5 7.5 7.5 11.5 2 12 C7.5 12.5 11.5 16.5 12 22 C12.5 16.5 16.5 12.5 22 12 C16.5 11.5 12.5 7.5 12 2 Z"/></svg></div><div class="copiloto-typing"><span></span><span></span><span></span></div>`;
    msgs?.appendChild(div);
    msgs?.scrollTo({ top: msgs.scrollHeight, behavior: 'smooth' });
  } else if (!show && el) {
    el.remove();
  }
}

function cpRenderMessages(scrollOnly = false) {
  const container = document.getElementById('copilotoMessages');
  if (!container) return;

  if (!_cpHistory.length) {
    container.innerHTML = `<div class="copiloto-welcome">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40" style="opacity:.3"><path d="M12 2 C11.5 7.5 7.5 11.5 2 12 C7.5 12.5 11.5 16.5 12 22 C12.5 16.5 16.5 12.5 22 12 C16.5 11.5 12.5 7.5 12 2 Z"/></svg>
      <p>Hola, soy tu Copiloto.<br>Puedo consultar clientes, leads, pipelines y más.<br>¿En qué te ayudo?</p>
      <div class="copiloto-suggestions">
        <button class="copiloto-suggestion" data-q="¿Cuántos leads hay activos en total?">¿Cuántos leads activos?</button>
        <button class="copiloto-suggestion" data-q="Muéstrame el resumen de todos los pipelines">Resumen de pipelines</button>
        <button class="copiloto-suggestion" data-q="¿Qué estadísticas hay de los últimos 7 días?">Stats últimos 7 días</button>
        <button class="copiloto-suggestion" data-q="Lista los asesores y cuántos leads tiene cada uno">Carga por asesor</button>
      </div>
    </div>`;
    return;
  }

  const html = _cpHistory.map(m => {
    const isUser = m.role === 'user';
    const text   = typeof m.content === 'string' ? m.content : '';
    if (!text) return '';
    return `<div class="copiloto-msg copiloto-msg--${isUser ? 'user' : 'ai'}">
      <div class="copiloto-msg-avatar">${isUser ? ((getAdvisor()?.name?.[0])||'U') : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 2 C11.5 7.5 7.5 11.5 2 12 C7.5 12.5 11.5 16.5 12 22 C12.5 16.5 16.5 12.5 22 12 C16.5 11.5 12.5 7.5 12 2 Z"/></svg>`}</div>
      <div class="copiloto-msg-bubble">${escHtml(text)}</div>
    </div>`;
  }).filter(Boolean).join('');

  container.innerHTML = html;
  container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
}

function escHtml(str) {
  // Coerción a string para tolerar numbers, null, undefined, etc.
  // Esta es la 3ra declaración con el mismo nombre — function hoisting hace
  // que esta gane. Las otras dos versiones (líneas ~8125 y ~14038) ya hacían
  // String(str) pero esta no, lo que rompía a callers que pasaban números
  // (ej. buildAlarmRowHtml pasa amount como Number).
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════════════════════
// COMENTARIOS REDES SOCIALES (FB Page + Instagram)
// ═══════════════════════════════════════════════════════════
let _commentsStatus = 'unread';
let _commentsInited = false;
let _commentsActiveId = null;
let _commentsCountTimer = null;

function initComments() {
  if (!_commentsInited) {
    _commentsInited = true;
    document.querySelectorAll('#commentsTabs .comments-tab').forEach(t => {
      t.addEventListener('click', () => {
        document.querySelectorAll('#commentsTabs .comments-tab').forEach(x => x.classList.toggle('is-active', x === t));
        _commentsStatus = t.dataset.status;
        loadCommentsList();
      });
    });
    // Reply modal handlers
    document.getElementById('commentReplyClose')?.addEventListener('click', closeCommentReply);
    document.getElementById('commentReplyCancel')?.addEventListener('click', closeCommentReply);
    document.getElementById('commentReplyOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'commentReplyOverlay') closeCommentReply();
    });
    document.getElementById('commentReplySubmit')?.addEventListener('click', submitCommentReply);
    // Click delegation en la lista
    document.getElementById('commentsList')?.addEventListener('click', (e) => {
      const replyBtn = e.target.closest('[data-comment-reply]');
      if (replyBtn) {
        e.preventDefault();
        openCommentReply(Number(replyBtn.dataset.commentReply));
        return;
      }
      const archiveBtn = e.target.closest('[data-comment-archive]');
      if (archiveBtn) {
        e.preventDefault();
        updateCommentStatus(Number(archiveBtn.dataset.commentArchive), 'archived');
        return;
      }
      const readBtn = e.target.closest('[data-comment-read]');
      if (readBtn) {
        e.preventDefault();
        updateCommentStatus(Number(readBtn.dataset.commentRead), 'read');
        return;
      }
    });
  }
  loadCommentsList();
}

async function loadCommentsList() {
  const list = document.getElementById('commentsList');
  if (!list) return;
  list.innerHTML = '<div class="comments-empty">Cargando…</div>';
  try {
    const data = await api('GET', `/api/integrations/comments?status=${_commentsStatus}&limit=200`);
    const items = data?.items || [];
    if (!items.length) {
      const msg = _commentsStatus === 'unread' ? 'No tienes comentarios sin leer.'
                : _commentsStatus === 'replied' ? 'No has respondido comentarios todavía.'
                : 'Sin comentarios.';
      list.innerHTML = `<div class="comments-empty">${msg}</div>`;
      return;
    }
    list.innerHTML = items.map(_renderCommentCard).join('');
  } catch (e) {
    list.innerHTML = `<div class="comments-empty">Error: ${escHtml(e.message)}</div>`;
  }
  refreshCommentsBadge();
}

function _renderCommentCard(c) {
  const fromInitial = (c.from_name || c.from_id || '?').charAt(0).toUpperCase();
  const avatar = c.contact_avatar_url
    ? `<img src="${escHtml(c.contact_avatar_url)}" alt="">`
    : escHtml(fromInitial);
  const providerCls = c.provider === 'instagram' ? 'is-ig' : 'is-fb';
  const providerLabel = c.provider === 'instagram' ? 'Instagram' : 'Facebook';
  const timeAgo = _fmtCommentTime(c.created_at);
  const contactLink = c.contact_id
    ? `<a class="comment-card-link" href="#exp-detail" data-contact-id="${c.contact_id}" onclick="event.preventDefault();window.openContactByCommentLink&&openContactByCommentLink(${c.contact_id})">Ver ficha →</a>`
    : '';
  const postLink = c.permalink_url
    ? `<a class="comment-card-link" href="${escHtml(c.permalink_url)}" target="_blank" rel="noopener">Ver post ↗</a>`
    : '';
  const isReplied = c.status === 'replied';
  const repliedTag = isReplied ? `<span class="comment-card-status-replied">✓ Respondido</span>` : '';
  return `
    <div class="comment-card" data-comment-id="${c.id}" data-permalink="${escHtml(c.permalink_url || '')}">
      <div class="comment-card-head">
        <div class="comment-card-avatar">${avatar}</div>
        <div class="comment-card-meta">
          <div class="comment-card-from">${escHtml(c.from_name || c.from_id || 'Anónimo')}</div>
          <div class="comment-card-context">
            <span class="comment-card-provider-pill ${providerCls}">${providerLabel}</span>
            comentó en post${c.parent_comment_id ? ' (responde a otro comentario)' : ''}
          </div>
        </div>
        <div class="comment-card-time">${timeAgo}</div>
      </div>
      <div class="comment-card-body">${escHtml(c.body || '(sin texto)')}</div>
      <div class="comment-card-actions">
        ${postLink}
        ${contactLink}
        ${repliedTag}
        <div style="flex:1"></div>
        ${!isReplied ? `<button class="comment-card-btn is-primary" data-comment-reply="${c.id}">📢 Responder</button>` : ''}
        ${c.status !== 'read' && !isReplied ? `<button class="comment-card-btn" data-comment-read="${c.id}">Marcar leído</button>` : ''}
        ${c.status !== 'archived' ? `<button class="comment-card-btn" data-comment-archive="${c.id}">Archivar</button>` : ''}
      </div>
    </div>`;
}

function _fmtCommentTime(ts) {
  if (!ts) return '';
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (diff < 60) return 'hace un momento';
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 86400 * 7) return `hace ${Math.floor(diff / 86400)} d`;
  return new Date(ts * 1000).toLocaleDateString('es-MX', { day: '2-digit', month: 'short' });
}

async function updateCommentStatus(id, status) {
  try {
    await api('PATCH', `/api/integrations/comments/${id}`, { status });
    loadCommentsList();
  } catch (e) {
    if (typeof toast === 'function') toast('Error: ' + e.message, 'error');
  }
}

function openCommentReply(id) {
  _commentsActiveId = id;
  const card = document.querySelector(`.comment-card[data-comment-id="${id}"]`);
  if (!card) return;
  const fromName  = card.querySelector('.comment-card-from')?.textContent || '?';
  const body      = card.querySelector('.comment-card-body')?.textContent || '';
  const provLabel = card.querySelector('.comment-card-provider-pill')?.textContent || '';
  const permalink = card.dataset.permalink || '';
  document.getElementById('commentReplyTitle').textContent  = `Responder a ${fromName}`;
  document.getElementById('commentReplyProvider').textContent = provLabel;
  document.getElementById('commentReplyOriginal').innerHTML = `<strong>${escHtml(fromName)}:</strong> ${escHtml(body)}`;
  document.getElementById('commentReplyText').value = '';
  const fbLink = document.getElementById('commentReplyOpenFb');
  if (fbLink) { fbLink.href = permalink || '#'; fbLink.style.display = permalink ? '' : 'none'; }
  document.getElementById('commentReplyOverlay').hidden = false;
  setTimeout(() => document.getElementById('commentReplyText')?.focus(), 50);
}

function closeCommentReply() {
  _commentsActiveId = null;
  const ov = document.getElementById('commentReplyOverlay');
  if (ov) ov.hidden = true;
}

async function submitCommentReply() {
  if (!_commentsActiveId) return;
  const text = document.getElementById('commentReplyText')?.value?.trim() || '';
  if (!text) {
    if (typeof toast === 'function') toast('Escribe una respuesta', 'error');
    return;
  }
  const btn = document.getElementById('commentReplySubmit');
  btn.disabled = true; btn.textContent = 'Enviando…';
  try {
    await api('POST', `/api/integrations/comments/${_commentsActiveId}/reply`, { text });
    if (typeof toast === 'function') toast('Respuesta enviada', 'success');
    closeCommentReply();
    loadCommentsList();
  } catch (e) {
    if (typeof toast === 'function') toast('Error: ' + e.message, 'error');
  } finally {
    btn.disabled = false; btn.textContent = '📢 Responder públicamente';
  }
}

// Badge global de comentarios sin leer (poll cada 60s, similar a tasks)
async function refreshCommentsBadge() {
  try {
    const counts = await api('GET', '/api/integrations/comments/counts');
    const badge = document.getElementById('navCommentsBadge');
    if (badge) {
      const n = Number(counts?.unread || 0);
      badge.textContent = n > 0 ? (n > 99 ? '99+' : String(n)) : '';
      badge.style.display = n > 0 ? '' : 'none';
    }
  } catch {}
}

function startCommentsBadgePolling() {
  if (_commentsCountTimer) return;
  refreshCommentsBadge();
  _commentsCountTimer = setInterval(refreshCommentsBadge, 60 * 1000);
}

// ═══════════════════════════════════════════════════════════════════
// MODAL AGENDAR CITA (book_appointment)
// ═══════════════════════════════════════════════════════════════════

let _apptBookContext = null; // { expId, contactId, convoId, botSteps }

function _todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

async function openApptBookModal(context) {
  _apptBookContext = context;
  const modal = document.getElementById('apptBookModal');
  if (!modal) return;

  // Info del lead
  const infoEl = document.getElementById('apptBookLeadInfo');
  if (infoEl) infoEl.textContent = context.leadName ? `Lead: ${context.leadName}` : 'Agendando cita para el lead';

  // Cargar asesores
  const advisorSel = document.getElementById('apptBookAdvisor');
  if (advisorSel) {
    try {
      const { advisors } = await api('GET', '/api/advisors/list-min');
      advisorSel.innerHTML = advisors.map(a =>
        `<option value="${a.id}" ${a.id === context.currentAdvisorId ? 'selected' : ''}>${escHtml(a.name)}</option>`
      ).join('');
    } catch (_) {
      advisorSel.innerHTML = '<option value="">Sin asesores</option>';
    }
  }

  // Fecha mínima = hoy
  const dateInput = document.getElementById('apptBookDate');
  if (dateInput) {
    dateInput.min = _todayStr();
    dateInput.value = _todayStr();
  }

  // Resetear slot seleccionado y save btn
  _apptBookSelectedSlot = null;
  const saveBtn = document.getElementById('apptBookSaveBtn');
  if (saveBtn) saveBtn.disabled = true;

  modal.hidden = false;

  // Cargar slots para hoy
  await _loadApptSlots();
}

function closeApptBookModal() {
  const modal = document.getElementById('apptBookModal');
  if (modal) modal.hidden = true;
  _apptBookContext = null;
  _apptBookSelectedSlot = null;
}

let _apptBookSelectedSlot = null;

async function _loadApptSlots() {
  const date     = document.getElementById('apptBookDate')?.value;
  const advisorId= document.getElementById('apptBookAdvisor')?.value;
  const duration = document.getElementById('apptBookDuration')?.value || 30;
  const slotsEl  = document.getElementById('apptBookSlots');
  if (!date || !slotsEl) return;

  slotsEl.innerHTML = '<span class="appt-slot-loading">Cargando horarios…</span>';
  _apptBookSelectedSlot = null;
  const saveBtn = document.getElementById('apptBookSaveBtn');
  if (saveBtn) saveBtn.disabled = true;

  try {
    const params = new URLSearchParams({ date, duration });
    if (advisorId) params.set('advisorId', advisorId);
    const { slots } = await api('GET', `/api/appointments/slots?${params}`);

    if (!slots.length) {
      slotsEl.innerHTML = '<span style="color:#94a3b8;font-size:13px">Sin horario disponible este día</span>';
      _checkReminderWarnings(date);
      return;
    }

    slotsEl.innerHTML = slots.map(s => `
      <button type="button"
        class="appt-slot ${s.available ? '' : 'unavailable'}"
        data-time="${s.time}"
        ${!s.available ? 'disabled' : ''}>
        ${s.time}
      </button>
    `).join('');

    slotsEl.querySelectorAll('.appt-slot:not(.unavailable)').forEach(btn => {
      btn.addEventListener('click', () => {
        slotsEl.querySelectorAll('.appt-slot').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        _apptBookSelectedSlot = btn.dataset.time;
        if (saveBtn) saveBtn.disabled = false;
      });
    });
  } catch (err) {
    slotsEl.innerHTML = `<span style="color:#ef4444;font-size:13px">Error: ${escHtml(err.message)}</span>`;
  }

  _checkReminderWarnings(date);
}

function _checkReminderWarnings(dateStr) {
  // Verificar si el bot tiene reminder_timer steps y si alguno ya pasó
  const warnEl = document.getElementById('apptBookWarnings');
  if (!warnEl || !_apptBookContext?.botSteps) return;

  const reminderSteps = (_apptBookContext.botSteps || []).filter(s => s.type === 'reminder_timer');
  if (!reminderSteps.length) { warnEl.style.display = 'none'; return; }

  const warnings = [];
  const apptDate = new Date(dateStr + 'T12:00:00');

  for (const step of reminderSteps) {
    for (const rem of (step.config?.reminders || [])) {
      let fireDate;
      if (rem.mode === 'before') {
        const units = { min: 60_000, hour: 3_600_000, day: 86_400_000 };
        fireDate = new Date(apptDate.getTime() - Number(rem.value || 0) * (units[rem.unit] || 60_000));
      } else if (rem.mode === 'day_before_at') {
        fireDate = new Date(apptDate);
        fireDate.setDate(fireDate.getDate() - Number(rem.value || 1));
        const [hh, mm] = (rem.time || '20:00').split(':').map(Number);
        fireDate.setHours(hh, mm, 0, 0);
      }
      if (fireDate && fireDate <= new Date()) {
        const label = rem.mode === 'before'
          ? `${rem.value} ${rem.unit} antes`
          : `${rem.value} día(s) antes a las ${rem.time}`;
        warnings.push(`⚠️ El recordatorio "${label}" no se enviará — la cita es muy pronto para ese aviso.`);
      }
    }
  }

  if (warnings.length) {
    warnEl.innerHTML = warnings.join('<br>');
    warnEl.style.display = 'block';
  } else {
    warnEl.style.display = 'none';
  }
}

async function _saveApptBook() {
  if (!_apptBookSelectedSlot || !_apptBookContext) return;
  const saveBtn = document.getElementById('apptBookSaveBtn');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Agendando…'; }

  try {
    const date      = document.getElementById('apptBookDate')?.value;
    const advisorId = document.getElementById('apptBookAdvisor')?.value || null;
    const duration  = document.getElementById('apptBookDuration')?.value || 30;
    const notes     = document.getElementById('apptBookNotes')?.value || null;

    await api('POST', '/api/appointments', {
      contactId:   _apptBookContext.contactId,
      expedientId: _apptBookContext.expId || null,
      convoId:     _apptBookContext.convoId || null,
      advisorId:   advisorId ? Number(advisorId) : null,
      date,
      time:        _apptBookSelectedSlot,
      durationMin: Number(duration),
      notes,
    });

    toast('✅ Cita agendada correctamente', 'success');
    closeApptBookModal();
  } catch (err) {
    toast('Error al agendar: ' + err.message, 'error');
    if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Agendar cita'; }
  }
}

function setupApptBookModal() {
  document.getElementById('apptBookCloseBtn')?.addEventListener('click', closeApptBookModal);
  document.getElementById('apptBookBackdrop')?.addEventListener('click', closeApptBookModal);
  document.getElementById('apptBookCancelBtn')?.addEventListener('click', closeApptBookModal);
  document.getElementById('apptBookSaveBtn')?.addEventListener('click', _saveApptBook);

  // Recargar slots al cambiar fecha, asesor o duración
  ['apptBookDate','apptBookAdvisor','apptBookDuration'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', _loadApptSlots);
  });
}

// Hook en pipeline drop: si el stage destino tiene un bot con book_appointment → abrir modal
function _checkAndOpenApptModal(expId, stageId) {
  const pipeline = (PIPELINES || []).find(p => p.stages?.some(s => s.id === stageId));
  if (!pipeline) return;
  const stage = pipeline.stages.find(s => s.id === stageId);
  if (!stage?.bot_id) return;

  // Buscar el bot en sbBots (ya cargado en el builder)
  const bot = (sbBots || []).find(b => b.id === stage.bot_id);
  if (!bot) return;

  const steps = Array.isArray(bot.steps) ? bot.steps : (JSON.parse(bot.steps || '[]'));
  const hasBookAppt = steps.some(s => s.type === 'book_appointment');
  if (!hasBookAppt) return;

  // Obtener info del lead
  const exp = PL_EXP_CACHE?.find(x => x.id === expId);
  const contact = exp ? { name: exp.name } : null;

  openApptBookModal({
    expId,
    contactId: exp?.contactId || null,
    convoId:   null,
    leadName:  exp?.name || null,
    currentAdvisorId: window._SESSION?.advisor?.id || null,
    botSteps: steps,
  });
}

// ═══════════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════════
// BUILDER branch v2 UI — multi-regla AND/OR + sub-flujo por rama
// ═══════════════════════════════════════════════════════════════════

// Ops según el tipo de campo
function _branchFieldOps(field) {
  if (['tag', 'pipeline', 'stage'].includes(field)) {
    return [
      ['equals',     'tiene / es'],
      ['not_equals', 'no tiene / no es'],
    ];
  }
  if (field === 'message') {
    // Para mensaje el default es matches_any porque el UI usa pills (cada
    // pill es una palabra independiente). matches_any = OR, contains_all = AND.
    return [
      ['matches_any',      'contiene alguna de estas palabras'],
      ['contains_all',     'contiene todas estas palabras'],
      ['matches_none',     'no contiene ninguna de estas palabras'],
      ['not_contains_all', 'no contiene todas estas palabras'],
      ['contains',         'contiene la frase'],
      ['not_contains',     'no contiene la frase'],
      ['equals',           'es exactamente (frase exacta)'],
      ['starts_with',      'empieza con'],
      ['ends_with',        'termina con'],
    ];
  }
  return [
    ['contains',     'contiene'],
    ['not_contains', 'no contiene'],
    ['equals',       'es exactamente'],
    ['not_equals',   'no es'],
    ['starts_with',  'empieza con'],
    ['ends_with',    'termina con'],
    ['matches_any',  'es cualquiera de (coma)'],
  ];
}

// Input/select de valor según el campo
function _branchRuleValueHtml(sid, caseId, ruleIdx, field, value) {
  const attrs = `class="sb-branch-rule-value" data-rule-idx="${ruleIdx}" data-case-id="${escHtml(caseId)}" data-sid="${sid}"`;
  if (field === 'pipeline') {
    const opts = (typeof PIPELINES !== 'undefined' ? PIPELINES : [])
      .map(p => `<option value="${p.id}" ${String(value) == String(p.id) ? 'selected' : ''}>${escHtml(p.name)}</option>`)
      .join('');
    return `<select ${attrs}><option value="">— Pipeline —</option>${opts}</select>`;
  }
  if (field === 'stage') {
    const allStages = (typeof PIPELINES !== 'undefined' ? PIPELINES : [])
      .flatMap(p => (p.stages || []).map(s => ({ id: s.id, label: `${p.name} › ${s.name}` })));
    const opts = allStages.map(s => `<option value="${s.id}" ${String(value) == String(s.id) ? 'selected' : ''}>${escHtml(s.label)}</option>`).join('');
    return `<select ${attrs}><option value="">— Etapa —</option>${opts}</select>`;
  }
  if (field === 'message') {
    // Pills: cada palabra/frase es una "píldora" independiente. El value
    // se sigue persistiendo como CSV ("quiero,descuento,madre") para
    // compat con el engine que ya maneja matches_any splitteando por coma.
    const pills = String(value || '').split(',').map(s => s.trim()).filter(Boolean);
    const pillsHtml = pills.map(p => `
      <span class="sb-branch-pill" data-pill="${escHtml(p)}">${escHtml(p)}<button type="button" class="sb-branch-pill-del" tabindex="-1" aria-label="Eliminar">×</button></span>`).join('');
    return `<div ${attrs} data-pills="1">
      ${pillsHtml}
      <input type="text" class="sb-branch-pill-input" placeholder="palabra + Enter…" />
    </div>`;
  }
  const placeholder = field === 'tag' ? 'nombre de la etiqueta'
    : field === 'phone'        ? 'número o parte del teléfono'
    : field === 'contact_name' ? 'nombre o parte del nombre'
    : 'valor (o lista separada por coma)';
  return `<input type="text" ${attrs} value="${escHtml(value || '')}" placeholder="${placeholder}" />`;
}

function _renderBranchRuleRow(sid, caseId, ruleIdx, rule) {
  const field = rule.field || 'message';
  const op    = rule.op    || 'contains';
  const ops   = _branchFieldOps(field);
  const opsHtml = ops.map(([v, label]) => `<option value="${v}" ${op === v ? 'selected' : ''}>${label}</option>`).join('');
  const valueHtml = _branchRuleValueHtml(sid, caseId, ruleIdx, field, rule.value);
  return `
    <div class="sb-branch-rule" data-rule-idx="${ruleIdx}" data-case-id="${escHtml(caseId)}" data-sid="${sid}">
      <select class="sb-branch-rule-field" data-rule-idx="${ruleIdx}" data-case-id="${escHtml(caseId)}" data-sid="${sid}">
        <option value="message"      ${field === 'message'      ? 'selected' : ''}>Mensaje</option>
        <option value="tag"          ${field === 'tag'          ? 'selected' : ''}>Tiene etiqueta</option>
        <option value="pipeline"     ${field === 'pipeline'     ? 'selected' : ''}>Está en pipeline</option>
        <option value="stage"        ${field === 'stage'        ? 'selected' : ''}>Está en etapa</option>
        <option value="contact_name" ${field === 'contact_name' ? 'selected' : ''}>Nombre del contacto</option>
        <option value="phone"        ${field === 'phone'        ? 'selected' : ''}>Teléfono</option>
      </select>
      <select class="sb-branch-rule-op" data-rule-idx="${ruleIdx}" data-case-id="${escHtml(caseId)}" data-sid="${sid}">
        ${opsHtml}
      </select>
      ${valueHtml}
      <button type="button" class="sb-branch-rule-del" data-rule-idx="${ruleIdx}" data-case-id="${escHtml(caseId)}" data-sid="${sid}" title="Eliminar condición">×</button>
    </div>`;
}

function _renderBranchSubStepCard(parentSid, caseId, subStep, prevStep = null) {
  const label    = (typeof SB_STEP_LABELS !== 'undefined' && SB_STEP_LABELS[subStep.type]) || subStep.type;
  const iconHtml = typeof stepIconSvg === 'function' ? stepIconSvg(subStep.type) : '';
  const bodyHtml = typeof buildStepBody === 'function' ? buildStepBody(subStep) : '';
  const prevIsStop = prevStep && (prevStep.type === 'stop_bot' || prevStep.type === 'stop_and_start');
  const connectorHtml = (prevStep && !prevIsStop)
    ? `<div class="sb-step-connector">
        <button class="sb-insert-between"
          data-insert-after="${escHtml(prevStep._id)}"
          data-branch-parent-sid="${escHtml(parentSid)}"
          data-branch-case-id="${escHtml(caseId)}"
          title="Insertar paso aquí">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
        </button>
      </div>`
    : '';
  return connectorHtml + `
    <div class="sb-rem-substep" data-substep-id="${escHtml(subStep._id)}" data-substep-type="${escHtml(subStep.type)}">
      <div class="sb-rem-substep-header" data-toggle-sub="${escHtml(subStep._id)}">
        <div class="sb-step-icon type-${subStep.type}" style="width:24px;height:24px;min-width:24px">${iconHtml}</div>
        <span class="sb-rem-substep-label">${escHtml(label)}</span>
        <button type="button" class="sb-rem-substep-del"
          data-del-substep="${escHtml(subStep._id)}"
          data-parent-sid="${escHtml(parentSid)}"
          data-parent-case-id="${escHtml(caseId)}"
          title="Eliminar paso">×</button>
      </div>
      <div class="sb-step-body is-open" data-body-sid="${escHtml(subStep._id)}">
        ${bodyHtml}
      </div>
    </div>`;
}

function _renderBranchEditor(sid, c) {
  // Prefijo jerárquico: si este step está dentro de "Rama 11" del padre → prefijo "11."
  let casePrefix = '';
  if (typeof sbSteps !== 'undefined' && typeof _findStepLocation === 'function') {
    try {
      const loc = _findStepLocation(sbSteps, sid);
      if (loc?.depthInfo?.length) {
        const parts = loc.depthInfo
          .map(d => { const m = String(d.label || '').match(/\d+$/); return m ? m[0] : null; })
          .filter(Boolean);
        if (parts.length) casePrefix = parts.join('.') + '.';
      }
    } catch (_) {}
  }

  // Normalizar casos (compat con formato viejo field/op/value/branch Y condition antiguo)
  let rawCases = Array.isArray(c.cases) ? c.cases : [];
  if (!rawCases.length && c.field) {
    rawCases = [{ rules: [{ field: c.field, op: c.op || 'contains', value: c.value || '' }], steps: [] }];
  }
  // Si sigue vacío (step nuevo), arrancar con una rama+condición lista
  if (!rawCases.length) {
    rawCases = [{ id: `bc_${Date.now()}_0`, rules_op: 'and', rules: [{ field: 'message', op: 'matches_any', value: '' }], steps: [] }];
  }
  const cases = rawCases.map((cs, i) => {
    if (!cs.id) cs.id = `bc_${Date.now()}_${i}`;
    if (!Array.isArray(cs.rules)) {
      cs.rules = cs.field ? [{ field: cs.field, op: cs.op || 'contains', value: cs.value || '' }] : [];
    }
    if (!cs.rules_op) cs.rules_op = 'and';
    if (!Array.isArray(cs.steps)) cs.steps = Array.isArray(cs.branch) ? cs.branch : [];
    return cs;
  });

  const casesHtml = cases.map((cs, i) => {
    const rulesHtml = cs.rules.map((rule, ri) => {
      const row = _renderBranchRuleRow(sid, cs.id, ri, rule);
      const isLast = ri === cs.rules.length - 1;
      const connector = !isLast ? `
        <div class="sb-branch-rule-connector">
          <select class="sb-branch-rules-op" data-case-id="${escHtml(cs.id)}" data-sid="${sid}">
            <option value="and" ${(cs.rules_op || 'and') === 'and' ? 'selected' : ''}>Y — todas se cumplen</option>
            <option value="or"  ${cs.rules_op === 'or' ? 'selected' : ''}>O — basta una</option>
          </select>
        </div>` : '';
      return row + connector;
    }).join('');

    const caseLastIsStop = cs.steps.length > 0 && (cs.steps[cs.steps.length - 1].type === 'stop_bot' || cs.steps[cs.steps.length - 1].type === 'stop_and_start');
    const subStepsHtml = (cs.steps || []).map((ss, si) =>
      _renderBranchSubStepCard(sid, cs.id, ss, si > 0 ? cs.steps[si - 1] : null)
    ).join('');

    return `
      <div class="sb-branch-case-v2" data-case-id="${escHtml(cs.id)}">
        <div class="sb-branch-case-v2-header">
          <span class="sb-branch-case-v2-num">Rama ${casePrefix}${i + 1}</span>
          <button type="button" class="sb-branch-case-del-v2" data-del-case-id="${escHtml(cs.id)}" data-sid="${sid}" title="Eliminar rama">×</button>
        </div>
        <div class="sb-branch-rules" data-case-id="${escHtml(cs.id)}" data-sid="${sid}">
          ${rulesHtml || '<p class="sb-hint" style="margin:4px 0 8px">Sin condiciones — esta rama siempre ejecuta.</p>'}
        </div>
        <button type="button" class="sb-branch-add-rule" data-case-id="${escHtml(cs.id)}" data-sid="${sid}">+ Agregar condición</button>
        <div class="sb-rem-substeps" data-case-substeps="${escHtml(cs.id)}">
          ${subStepsHtml}
        </div>
        ${!caseLastIsStop ? `<button type="button" class="sb-branch-case-add-step-btn sb-rem-add-step-btn"
          data-parent-sid="${escHtml(sid)}" data-case-id="${escHtml(cs.id)}">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
          Agregar paso
        </button>` : ''}
      </div>`;
  }).join('');

  const defaultSteps    = Array.isArray(c.default) ? c.default : [];
  const defaultLastIsStop = defaultSteps.length > 0 && (defaultSteps[defaultSteps.length - 1].type === 'stop_bot' || defaultSteps[defaultSteps.length - 1].type === 'stop_and_start');
  const defaultSubHtml  = defaultSteps.map((ss, si) =>
    _renderBranchSubStepCard(sid, '__default__', ss, si > 0 ? defaultSteps[si - 1] : null)
  ).join('');

  return `
    ${casesHtml}
    <button type="button" class="sb-branch-add-case-v2" data-sid="${sid}" style="margin-top:8px">+ Agregar rama</button>
    <div class="sb-branch-default-section" style="margin-top:10px">
      <div class="sb-branch-default-header">↳ De lo contrario <span style="font-weight:400;font-size:11px;opacity:.7">(si ninguna rama coincide)</span></div>
      <div class="sb-branch-default-steps">
        <div class="sb-rem-substeps" data-case-substeps="__default__">
          ${defaultSubHtml}
        </div>
        ${!defaultLastIsStop ? `<button type="button" class="sb-branch-case-add-step-btn sb-rem-add-step-btn"
          data-parent-sid="${escHtml(sid)}" data-case-id="__default__"
          style="width:100%;padding:6px;border:1px dashed #cbd5e1;border-radius:6px;background:none;color:#64748b;font-size:12px;cursor:pointer;margin-top:4px">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="10" height="10"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
          Agregar paso
        </button>` : ''}
      </div>
    </div>`;
}

// BUILDER reminder_timer UI
// ═══════════════════════════════════════════════════════════════════

function _renderSubStepCard(parentSid, rid, subStep) {
  const label = (typeof SB_STEP_LABELS !== 'undefined' && SB_STEP_LABELS[subStep.type]) || subStep.type;
  const iconHtml = typeof stepIconSvg === 'function' ? stepIconSvg(subStep.type) : '';
  const bodyHtml = typeof buildStepBody === 'function' ? buildStepBody(subStep) : '';
  return `
    <div class="sb-rem-substep" data-substep-id="${escHtml(subStep._id)}" data-substep-type="${escHtml(subStep.type)}">
      <div class="sb-rem-substep-header" data-toggle-sub="${escHtml(subStep._id)}">
        <div class="sb-step-icon type-${subStep.type}" style="width:24px;height:24px;min-width:24px">${iconHtml}</div>
        <span class="sb-rem-substep-label">${escHtml(label)}</span>
        <button type="button" class="sb-rem-substep-del"
          data-del-substep="${escHtml(subStep._id)}"
          data-parent-sid="${escHtml(parentSid)}"
          data-parent-rid="${escHtml(rid)}"
          title="Eliminar paso">×</button>
      </div>
      <div class="sb-step-body is-open" data-body-sid="${escHtml(subStep._id)}">
        ${bodyHtml}
      </div>
    </div>`;
}

function _renderReminderTimerEditor(sid, c) {
  const reminders = Array.isArray(c.reminders) ? c.reminders : [];
  const branches  = reminders.map((rem, i) => {
    const rid      = rem.id || `r${i}`;
    const subSteps = Array.isArray(rem.steps) ? rem.steps : [];
    const subStepsHtml = subSteps.map(ss => _renderSubStepCard(sid, rid, ss)).join('');
    return `
      <div class="sb-reminder-branch" data-rid="${escHtml(rid)}">
        <div class="sb-reminder-branch-header">
          <select data-field="rem_mode" data-sid="${sid}" data-rid="${escHtml(rid)}">
            <option value="before"       ${rem.mode==='before'?'selected':''}>Antes de la cita</option>
            <option value="day_before_at" ${rem.mode==='day_before_at'?'selected':''}>Día anterior a hora fija</option>
          </select>
          ${rem.mode === 'day_before_at' ? `
            <input type="number" value="${rem.value||1}" min="1" max="30"
              data-field="rem_value" data-sid="${sid}" data-rid="${escHtml(rid)}" style="width:52px" />
            <span style="font-size:12px;white-space:nowrap">día(s) antes a las</span>
            <input type="time" value="${rem.time||'20:00'}"
              data-field="rem_time" data-sid="${sid}" data-rid="${escHtml(rid)}" />
          ` : `
            <input type="number" value="${rem.value||30}" min="1"
              data-field="rem_value" data-sid="${sid}" data-rid="${escHtml(rid)}" style="width:60px" />
            <select data-field="rem_unit" data-sid="${sid}" data-rid="${escHtml(rid)}">
              <option value="min"  ${rem.unit==='min'?'selected':''}>minutos antes</option>
              <option value="hour" ${rem.unit==='hour'?'selected':''}>horas antes</option>
              <option value="day"  ${rem.unit==='day'?'selected':''}>días antes</option>
            </select>
          `}
          <button type="button" class="sb-reminder-del-btn" data-del-rid="${escHtml(rid)}" title="Eliminar recordatorio">×</button>
        </div>
        <div class="sb-rem-substeps">
          ${subStepsHtml}
        </div>
        <button type="button" class="sb-rem-add-step-btn"
          data-parent-sid="${escHtml(sid)}" data-parent-rid="${escHtml(rid)}">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><line x1="8" y1="2" x2="8" y2="14"/><line x1="2" y1="8" x2="14" y2="8"/></svg>
          Agregar paso
        </button>
      </div>
    `;
  }).join('');

  return `
    ${reminders.length ? '' : '<p class="sb-hint" style="margin-bottom:8px">Sin recordatorios configurados. Agrega uno para definir qué pasos ejecutar antes de la cita.</p>'}
    ${branches}
    <button type="button" class="sb-reminder-add-btn" data-sid="${sid}" data-add-reminder>
      + Agregar recordatorio
    </button>
  `;
}



// ════════════════════════════════════════════════════════════════
// APPS SECTION
// ════════════════════════════════════════════════════════════════
let _appsData    = [];
let _wooPipelines = [];
let _wooProducts      = [];
let _wooRules         = [];
let _wooOrders        = [];
let _wooCarriers      = [];
let _wooOrderStatuses = [];   // estatus disponibles en WC para cambiar desde tracking
let _wooHasCredentials = false; // si hay consumer key/secret guardados
let _wooOrdersPage  = 1;
let _wooOrdersPages = 1;
let _pedidosPage         = 1;
let _pedidosPages        = 1;
let _pedidosStatusFilter = ''; // '' = todos

async function loadAppsSection() {
  try {
    const data = await api('GET', '/api/apps');
    _appsData = data.apps || [];
    renderApps();
  } catch (e) { console.error('loadApps', e); }
}

function renderApps() {
  const installed = _appsData.filter(a => a.installed);
  const catalog   = _appsData.filter(a => !a.installed);

  const installedEl = document.getElementById('appsTabInstalled');
  const installedGrid = document.getElementById('appsInstalledGrid');
  const catalogGrid   = document.getElementById('appsCatalogGrid');

  if (installed.length) {
    installedEl.hidden = false;
    installedGrid.innerHTML = installed.map(a => renderAppCard(a, true)).join('');
    installedGrid.querySelectorAll('[data-app-open]').forEach(btn =>
      btn.addEventListener('click', () => openApp(btn.dataset.appOpen)));
    installedGrid.querySelectorAll('[data-app-uninstall]').forEach(btn =>
      btn.addEventListener('click', () => uninstallApp(Number(btn.dataset.appUninstall))));
    installedGrid.querySelectorAll('[data-app-toggle]').forEach(chk =>
      chk.addEventListener('change', () => toggleApp(Number(chk.dataset.appToggle), chk.checked)));
  } else {
    installedEl.hidden = true;
  }

  catalogGrid.innerHTML = catalog.length
    ? catalog.map(a => renderAppCard(a, false)).join('')
    : '<p style="color:var(--text-muted);font-size:13px">No hay más apps disponibles.</p>';
  catalogGrid.querySelectorAll('[data-app-install]').forEach(btn =>
    btn.addEventListener('click', () => installApp(Number(btn.dataset.appInstall))));
}

function renderAppCard(a, installed) {
  const reqs = JSON.parse(a.requirements || '[]');
  const isEnabled = a.install_enabled !== 0; // default true
  return `
    <div class="app-card ${installed && !isEnabled ? 'app-card--paused' : ''}">
      <div class="app-card-icon">${a.icon_emoji || '🧩'}</div>
      <div class="app-card-body">
        <div class="app-card-name">${escapeHtml(a.name)}</div>
        <div class="app-card-desc">${escapeHtml(a.description || '')}</div>
        ${reqs.length ? `<div class="app-card-reqs">Requiere: ${reqs.map(r => `<span>${escapeHtml(r)}</span>`).join('')}</div>` : ''}
      </div>
      <div class="app-card-actions">
        <span class="app-version">v${a.version}</span>
        ${installed
          ? `<label class="toggle-switch app-card-toggle" title="${isEnabled ? 'Pausar app' : 'Activar app'}">
               <input type="checkbox" data-app-toggle="${a.id}" ${isEnabled ? 'checked' : ''}>
               <span class="toggle-slider"></span>
             </label>
             <button class="btn btn--sm btn--ghost" data-app-open="${a.slug}">Abrir</button>
             <button class="btn btn--sm btn--danger-ghost" data-app-uninstall="${a.id}">Desinstalar</button>`
          : `<button class="btn btn--sm btn--primary" data-app-install="${a.id}">Instalar</button>`
        }
      </div>
    </div>`;
}

async function toggleApp(id, enabled) {
  try {
    await api('PATCH', `/api/apps/${id}/toggle`, { enabled });
    toast(enabled ? 'App activada' : 'App pausada', 'success');
    await loadAppsSection();
    await updatePedidosNavVisibility();
  } catch (e) { toast(e.message, 'error'); }
}

async function installApp(id) {
  try {
    await api('POST', `/api/apps/${id}/install`);
    toast('App instalada', 'success');
    await loadAppsSection();
    await updatePedidosNavVisibility();
  } catch (e) { toast(e.message, 'error'); }
}

async function uninstallApp(id) {
  if (!confirm('¿Desinstalar esta app? Se perderá su configuración.')) return;
  try {
    await api('DELETE', `/api/apps/${id}/install`);
    toast('App desinstalada', 'success');
    await loadAppsSection();
    await updatePedidosNavVisibility();
    // Si el usuario está viendo Pedidos y desinstala la app, redirigir a chats
    if (document.body.dataset.viewActive === 'pedidos') showView('chats');
  } catch (e) { toast(e.message, 'error'); }
}

// ── Pedidos nav ───────────────────────────────────────────────────────────────
async function updatePedidosNavVisibility() {
  try {
    const data = await api('GET', '/api/apps');
    const wooApp = (data.apps || []).find(a => a.slug === 'reelance-woocommerce');
    const isInstalled = !!(wooApp?.installed);
    const navEl = document.getElementById('navPedidos');
    if (navEl) navEl.hidden = !isInstalled;
  } catch (e) {
    console.error('updatePedidosNavVisibility', e);
  }
}

let _pedidosEventsReady = false;
let _pedidosPoller = null;
let _kanbanWooPoller = null;
// Último last_webhook_at conocido — para detectar nuevos webhooks sin recargar en falso
let _wooLastWebhookAt = 0;

function startPedidosPoller() {
  stopPedidosPoller();
  _pedidosPoller = setInterval(() => {
    if (document.body.dataset.viewActive !== 'pedidos') return;
    // No refrescar si hay un formulario de tracking abierto — el render rebuild
    // borraría lo que el asesor está escribiendo.
    if (document.querySelector('.woo-tracking-form:not([hidden])')) return;
    loadPedidosView(_pedidosPage);
  }, 20_000);
}
function stopPedidosPoller() {
  if (_pedidosPoller) { clearInterval(_pedidosPoller); _pedidosPoller = null; }
}

function startKanbanWooPoller() {
  stopKanbanWooPoller();
  _kanbanWooPoller = setInterval(async () => {
    if (document.body.dataset.viewActive !== 'pipelines') return;
    try {
      const cfg = await api('GET', '/api/apps/woo/config');
      const ts = cfg?.lastWebhookAt || 0;
      if (ts && ts !== _wooLastWebhookAt) {
        _wooLastWebhookAt = ts;
        loadPipelinesKanban();
      }
    } catch (_) {}
  }, 20_000);
}
function stopKanbanWooPoller() {
  if (_kanbanWooPoller) { clearInterval(_kanbanWooPoller); _kanbanWooPoller = null; }
}

async function loadPedidosView(page = _pedidosPage) {
  if (!_pedidosEventsReady) {
    _pedidosEventsReady = true;
    document.getElementById('pedidosRefreshBtn')?.addEventListener('click', () => loadPedidosView(1));
    document.getElementById('topbarSearchInput')?.addEventListener('input', () => {
      if (document.body.dataset.viewActive !== 'pedidos') return;
      renderPedidosOrders();
    });
    document.getElementById('topbarPedidosExtras')?.addEventListener('click', (e) => {
      const chip = e.target.closest('.pedidos-sf-chip');
      if (!chip) return;
      _pedidosStatusFilter = chip.dataset.status;
      document.querySelectorAll('#topbarPedidosExtras .pedidos-sf-chip').forEach(c => c.classList.toggle('is-active', c === chip));
      renderPedidosOrders();
    });
    document.getElementById('pedidosSyncBtn')?.addEventListener('click', async () => {
      const btn = document.getElementById('pedidosSyncBtn');
      btn.disabled = true; btn.textContent = '⏳ Importando...';
      try {
        const res = await api('POST', '/api/apps/woo/orders/sync');
        toast(`✅ ${res.imported} órdenes importadas de WooCommerce`, 'success');
        await loadPedidosView(1);
      } catch (e) { toast(e.message || 'Error al importar', 'error'); }
      finally { btn.disabled = false; btn.textContent = '⬇ Importar de WooCommerce'; }
    });
  }
  _pedidosPage = page;
  const listEl = document.getElementById('pedidosOrdersList');
  // Solo mostrar "Cargando..." si no hay contenido previo (primera carga).
  // En refresh silencioso no parpadeamos el contenido existente.
  const isFirstLoad = !listEl || !listEl.querySelector('.woo-order-card');
  if (listEl && isFirstLoad) listEl.innerHTML = '<p class="woo-empty">Cargando pedidos...</p>';
  try {
    const [ordersData] = await Promise.all([
      api('GET', `/api/apps/woo/orders?page=${page}&limit=25`),
      loadWooCarriers(),
      loadWooOrderStatuses(),
      // Asegurar que _wooHasCredentials esté actualizado
      api('GET', '/api/apps/woo/config').then(cfg => { _wooHasCredentials = !!(cfg?.hasCredentials); }).catch(() => {}),
    ]);
    _wooOrders      = ordersData.orders || [];
    _pedidosPage    = ordersData.page  || 1;
    _pedidosPages   = ordersData.pages || 1;
    renderPedidosOrders();
  } catch (e) {
    if (listEl) listEl.innerHTML = '<p class="woo-empty">Error al cargar pedidos. Verifica la configuración de WooCommerce.</p>';
    console.error('loadPedidosView', e);
  }
}

function renderPedidosOrders() {
  const el = document.getElementById('pedidosOrdersList');
  if (!el) return;
  const q   = (document.getElementById('topbarSearchInput')?.value || '').trim().toLowerCase();
  const stf = _pedidosStatusFilter; // '' | 'completed' | 'on-hold' | 'facturado' | ...

  const orders = _wooOrders.filter(o => {
    // Filtro de estatus
    if (stf) {
      const slug = (o.status || '').replace(/^wc-/, '');
      if (stf === 'facturado') {
        if (!slug.includes('factura')) return false;
      } else {
        if (slug !== stf) return false;
      }
    }
    // Búsqueda de texto
    if (!q) return true;
    const addr = (() => { try { return JSON.parse(o.shipping_address_json || '{}'); } catch { return {}; } })();
    const addrStr = [addr.address1, addr.address2, addr.city, addr.state, addr.postcode].filter(Boolean).join(' ').toLowerCase();
    const dateStr = o.wc_order_date
      ? new Date(o.wc_order_date * 1000).toLocaleDateString('es-MX', { day:'2-digit', month:'short', year:'numeric' }).toLowerCase()
      : '';
    const slug = (o.status || '').replace(/^wc-/, '');
    return String(o.wc_order_number).includes(q) ||
           (o.customer_name  || '').toLowerCase().includes(q) ||
           (o.customer_email || '').toLowerCase().includes(q) ||
           (o.customer_phone || '').includes(q) ||
           addrStr.includes(q) ||
           dateStr.includes(q) ||
           slug.includes(q);
  });

  if (!orders.length) {
    el.innerHTML = '<p class="woo-empty">Sin pedidos. Importa desde WooCommerce o espera el próximo webhook.</p>';
    return;
  }

  el.innerHTML = _buildOrderRows(orders, 'pedidos', _wooCarriers)
    + _buildPagination(_pedidosPage, _pedidosPages, p => loadPedidosView(p));
  _bindOrderRows(el, 'pedidos', () => loadPedidosView(_pedidosPage));

  el.querySelectorAll('.woo-pg-btn').forEach(btn => {
    btn.addEventListener('click', () => loadPedidosView(Number(btn.dataset.pg)));
  });
}

function openApp(slug) {
  if (slug === 'reelance-woocommerce')    openWooModal();
  if (slug === 'reelance-abandoned-cart') openAbandonedCartModal();
}

// ── Woo App Modal ────────────────────────────────────────────────────────────
async function openWooModal() {
  document.getElementById('wooAppModal').hidden = false;
  const wooCfg = await loadWooConfig();
  await loadWooPipelines(wooCfg);
  await loadWooTriggerStatuses(wooCfg);
  await loadWooOrders();
  await loadWooCarriers();
  await loadWooOrderStatuses();
  await loadWooProducts();
  setupWooTabs();
  setupWooEvents();
}

// ─── App Carritos Abandonados (independiente) ──────────────────────────────
async function openAbandonedCartModal() {
  document.getElementById('acAppModal').hidden = false;
  // Requiere que woo_config exista — si no, mostrar aviso de que primero
  // hay que instalar/conectar la app de WooCommerce
  let cfg;
  try {
    cfg = await api('GET', '/api/apps/woo/config');
  } catch (e) {
    cfg = { connected: false };
  }
  if (!cfg.connected) {
    document.getElementById('acRequiresWoo').hidden = false;
    document.getElementById('acConfigBlock').hidden = true;
    return;
  }
  document.getElementById('acRequiresWoo').hidden = true;
  document.getElementById('acConfigBlock').hidden = false;
  await loadAbandonedCartConfig(cfg);
}

function closeAbandonedCartModal() {
  document.getElementById('acAppModal').hidden = true;
}

async function loadAbandonedCartConfig(cfg) {
  const ac = cfg?.abandonedCart || {};
  document.getElementById('acEnabledToggle').checked = !!ac.enabled;
  document.getElementById('acTagInput').value         = ac.tag || 'Carrito abandonado';
  document.getElementById('acDedupHours').value       = ac.dedupHours || 24;

  // Pipelines
  const pipelineSel = document.getElementById('acPipelineSel');
  const stageSel    = document.getElementById('acStageSel');
  try {
    const pipelinesData = await api('GET', '/api/apps/woo/pipelines');
    const pipelines = pipelinesData.pipelines || [];
    pipelineSel.innerHTML = '<option value="">— Selecciona pipeline —</option>' +
      pipelines.map(p => `<option value="${p.id}" ${p.id === ac.pipelineId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('');
    const renderStages = () => {
      const p = pipelines.find(x => x.id === Number(pipelineSel.value));
      const stages = p?.stages || [];
      stageSel.innerHTML = '<option value="">— Selecciona etapa —</option>' +
        stages.map(s => `<option value="${s.id}" ${s.id === ac.stageId ? 'selected' : ''}>${escapeHtml(s.name)}</option>`).join('');
    };
    renderStages();
    pipelineSel.onchange = renderStages;
  } catch (_) {}

  // Plantillas WA Business aprobadas
  const tplSel = document.getElementById('acTemplateSel');
  try {
    const tplsData = await api('GET', '/api/templates?type=wa_api');
    // El endpoint retorna array directo (no { items })
    const allTpls = Array.isArray(tplsData) ? tplsData : (tplsData?.items || []);
    const tpls = allTpls.filter(t => t.type === 'wa_api' && t.waStatus === 'approved');
    if (!tpls.length) {
      tplSel.innerHTML = '<option value="">— No tienes plantillas aprobadas —</option>';
    } else {
      tplSel.innerHTML = '<option value="">— Selecciona plantilla —</option>' +
        tpls.map(t => `<option value="${t.id}" ${t.id === ac.templateId ? 'selected' : ''}>${escapeHtml(t.name || t.displayName || `#${t.id}`)}</option>`).join('');
    }
  } catch (_) {}

  // Handlers
  document.getElementById('acSaveBtn')?.addEventListener('click', saveAbandonedCartConfig, { once: true });
  document.getElementById('acHistoryRefresh')?.addEventListener('click', () => loadAbandonedCartHistory(), { once: true });

  await loadAbandonedCartHistory();
}

async function saveAbandonedCartConfig() {
  const body = {
    enabled:    document.getElementById('acEnabledToggle').checked,
    pipelineId: Number(document.getElementById('acPipelineSel').value) || null,
    stageId:    Number(document.getElementById('acStageSel').value) || null,
    templateId: Number(document.getElementById('acTemplateSel').value) || null,
    tag:        document.getElementById('acTagInput').value.trim() || 'Carrito abandonado',
    dedupHours: Number(document.getElementById('acDedupHours').value) || 24,
  };
  if (body.enabled && !body.templateId) return toast('Selecciona una plantilla aprobada para activar', 'error');
  if (body.enabled && (!body.pipelineId || !body.stageId)) return toast('Configura el pipeline y la etapa', 'error');
  try {
    await api('PUT', '/api/apps/woo/abandoned-cart-config', body);
    toast('Configuración guardada', 'success');
    closeAbandonedCartModal();
  } catch (e) {
    toast(e.message, 'error');
    // Re-bind para próximo save (solo si falló — si tuvo éxito el modal se cierra)
    document.getElementById('acSaveBtn')?.addEventListener('click', saveAbandonedCartConfig, { once: true });
  }
}

async function loadAbandonedCartHistory() {
  const el = document.getElementById('acHistoryList');
  if (!el) return;
  try {
    const data = await api('GET', '/api/apps/woo/abandoned-carts?page=1&limit=20');
    const items = data.items || [];
    if (!items.length) {
      el.innerHTML = '<p class="woo-empty">Aún no hay carritos abandonados procesados.</p>';
      return;
    }
    el.innerHTML = items.map(c => {
      const date = new Date(c.created_at * 1000).toLocaleString('es-MX', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' });
      const name = c.customer_name || [c.contact_first_name, c.contact_last_name].filter(Boolean).join(' ') || '—';
      const total = c.cart_total ? `$${Number(c.cart_total).toLocaleString('es-MX')}` : '—';
      const status = c.message_sent
        ? '<span class="ac-status ac-sent">✓ Mensaje enviado</span>'
        : `<span class="ac-status ac-fail" title="${escapeHtml(c.send_error || '')}">✕ ${escapeHtml(c.send_error || 'No enviado')}</span>`;
      return `<div class="ac-history-row">
        <div class="ac-row-main">
          <strong>${escapeHtml(name)}</strong>
          <span class="ac-row-phone">${escapeHtml(c.customer_phone || '')}</span>
        </div>
        <div class="ac-row-meta">
          <span>${date}</span>
          <span>${total}</span>
          ${status}
        </div>
      </div>`;
    }).join('');
  } catch (e) {
    el.innerHTML = `<p class="woo-empty">Error al cargar: ${escapeHtml(e.message)}</p>`;
  }
}

function closeWooModal() {
  document.getElementById('wooAppModal').hidden = true;
}

function setupWooTabs() {
  document.querySelectorAll('.woo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.woo-tab').forEach(t => t.classList.remove('is-active'));
      document.querySelectorAll('.woo-tab-panel').forEach(p => p.hidden = true);
      tab.classList.add('is-active');
      document.querySelector(`.woo-tab-panel[data-panel="${tab.dataset.tab}"]`).hidden = false;
    });
  });
}

async function loadWooConfig() {
  try {
    const cfg = await api('GET', '/api/apps/woo/config');
    const notConn = document.getElementById('wooNotConnected');
    const conn    = document.getElementById('wooConnected');
    if (!cfg.connected) {
      notConn.hidden = false;
      conn.hidden    = true;
      return;
    }
    notConn.hidden = true;
    conn.hidden    = false;

    const statusDot   = document.getElementById('wooStatusDot');
    const statusLabel = document.getElementById('wooStatusLabel');
    if (cfg.enabled) {
      statusDot.className   = 'woo-status-dot woo-status-dot--on';
      statusLabel.textContent = 'Activo';
    } else {
      statusDot.className   = 'woo-status-dot woo-status-dot--off';
      statusLabel.textContent = 'Pausado';
    }
    document.getElementById('wooEnabledToggle').checked = cfg.enabled;
    document.getElementById('wooToken').textContent     = cfg.token;
    document.getElementById('wooWebhookUrl').textContent = `${location.origin}/webhooks/woo`;

    // Poblar campos de credenciales
    const siteUrlEl = document.getElementById('wooSiteUrl');
    if (siteUrlEl) siteUrlEl.value = cfg.site_url || '';
    const ckEl = document.getElementById('wooConsumerKey');
    const csEl = document.getElementById('wooConsumerSecret');
    if (ckEl && cfg.hasCredentials) ckEl.placeholder = 'ck_•••••••••••••••••••••••••• (guardado)';
    if (csEl && cfg.hasCredentials) csEl.placeholder = 'cs_•••••••••••••••••••••••••• (guardado)';

    _wooHasCredentials = !!(cfg.hasCredentials);
    _wooProducts = cfg.products || [];
    _wooRules    = cfg.pipelineRules || [];
    renderWooProducts();
    renderWooRules();
    return cfg;
  } catch (e) { console.error('loadWooConfig', e); }
}

async function loadWooPipelines(cfg) {
  try {
    const data = await api('GET', '/api/apps/woo/pipelines');
    _wooPipelines = data.pipelines || [];
    const pipelineOpts = '<option value="">Pipeline...</option>' +
      _wooPipelines.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('');

    // Selector de reglas por duración
    const sel = document.getElementById('wooRulePipeline');
    if (sel) {
      sel.innerHTML = pipelineOpts;
      sel.addEventListener('change', () => {
        const p = _wooPipelines.find(x => String(x.id) === sel.value);
        const stageSel = document.getElementById('wooRuleStage');
        stageSel.innerHTML = '<option value="">Etapa...</option>' +
          (p ? p.stages.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('') : '');
      });
    }

    // Selector de pipeline inicial (order.processing)
    const initPipSel = document.getElementById('wooInitialPipeline');
    const initStgSel = document.getElementById('wooInitialStage');
    if (initPipSel) {
      initPipSel.innerHTML = pipelineOpts;
      // Pre-seleccionar si ya está guardado
      if (cfg?.initialPipelineId) {
        initPipSel.value = String(cfg.initialPipelineId);
        const p = _wooPipelines.find(x => x.id === cfg.initialPipelineId);
        if (p && initStgSel) {
          initStgSel.innerHTML = '<option value="">Etapa...</option>' +
            p.stages.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
          initStgSel.value = String(cfg.initialStageId || '');
        }
      }
      initPipSel.addEventListener('change', () => {
        const p = _wooPipelines.find(x => String(x.id) === initPipSel.value);
        if (initStgSel) {
          initStgSel.innerHTML = '<option value="">Etapa...</option>' +
            (p ? p.stages.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('') : '');
        }
      });
    }
  } catch (e) { console.error('loadWooPipelines', e); }
}

async function loadWooTriggerStatuses(cfg) {
  const el = document.getElementById('wooTriggerStatusList');
  if (!el) return;
  try {
    const data = await api('GET', '/api/apps/woo/order-statuses');
    const statuses = data.statuses || [];
    const selected = new Set(cfg?.triggerStatuses || ['processing', 'on-hold']);
    el.innerHTML = statuses.map(s => `
      <label class="woo-status-chip">
        <input type="checkbox" value="${escapeHtml(s.slug)}" ${selected.has(s.slug) ? 'checked' : ''}>
        ${escapeHtml(s.name)}
      </label>`).join('');
  } catch (e) {
    el.innerHTML = '<p class="woo-empty">No se pudieron cargar los estatus.</p>';
  }
}

async function loadWooProducts() {
  const el = document.getElementById('wooProductsList');
  if (!el) return;
  try {
    const data = await api('GET', '/api/apps/woo/wc-products');
    _wooProducts = data.products || [];
    renderWooProducts();
  } catch (e) {
    // Sin credenciales o error — mostrar aviso
    el.innerHTML = '<p class="woo-empty">⚠️ Configura las credenciales WC REST API en la pestaña Conexión para ver tus productos.</p>';
  }
}

function renderWooProducts() {
  const el = document.getElementById('wooProductsList');
  if (!el) return;
  if (!_wooProducts.length) {
    el.innerHTML = '<p class="woo-empty">Sin productos. Haz click en ↺ Sincronizar para cargar los de WooCommerce.</p>';
    return;
  }
  el.innerHTML = _wooProducts.map((p, i) => `
    <div class="woo-product-row">
      <span class="woo-product-name">${escapeHtml(p.name)}${p.sku ? `<small style="color:var(--text-muted);margin-left:6px">SKU: ${escapeHtml(p.sku)}</small>` : ''}</span>
      <input type="number" class="int-input woo-days-input" value="${p.duration_days || 0}" min="0" data-pi="${i}" style="width:72px" />
      <span style="font-size:12px;color:var(--text-muted)">días</span>
    </div>`).join('');
  el.querySelectorAll('.woo-days-input').forEach(inp =>
    inp.addEventListener('input', () => { _wooProducts[Number(inp.dataset.pi)].duration_days = Number(inp.value); }));
}

function renderWooRules() {
  const el = document.getElementById('wooPipelineRulesList');
  const countEl = document.getElementById('wooRulesCount');
  if (countEl) countEl.textContent = _wooRules.length === 1 ? '1 regla' : `${_wooRules.length} reglas`;
  if (!_wooRules.length) { el.innerHTML = '<p class="woo-empty">Sin reglas configuradas. Agrega la primera abajo.</p>'; return; }
  el.innerHTML = _wooRules.map((r, i) => {
    const pip = _wooPipelines.find(p => p.id === r.pipeline_id);
    const stg = pip?.stages.find(s => s.id === r.stage_id);
    const warn = (!pip || !stg) ? '⚠️ Pipeline o etapa eliminada' : '';
    return `
      <div class="woo-rule-row ${warn ? 'woo-rule-row--warn' : ''}">
        <span class="woo-rule-days">${r.duration_days} días</span>
        <span>→</span>
        <span class="woo-rule-dest">${pip ? escapeHtml(pip.name) : '?'} / ${stg ? escapeHtml(stg.name) : '?'}</span>
        ${warn ? `<span class="woo-rule-warn">${warn}</span>` : ''}
        <button class="btn btn--xs btn--danger-ghost" data-del-rule="${i}">✕</button>
      </div>`;
  }).join('');
  el.querySelectorAll('[data-del-rule]').forEach(btn =>
    btn.addEventListener('click', () => { _wooRules.splice(Number(btn.dataset.delRule), 1); renderWooRules(); }));
}

async function loadWooOrders(page = _wooOrdersPage) {
  try {
    const data = await api('GET', `/api/apps/woo/orders?page=${page}&limit=25`);
    _wooOrders      = data.orders || [];
    _wooOrdersPage  = data.page  || 1;
    _wooOrdersPages = data.pages || 1;
    renderWooOrders();
  } catch (e) { console.error('loadWooOrders', e); }
}

async function loadWooCarriers() {
  try {
    const data = await api('GET', '/api/apps/woo/orders/carriers');
    _wooCarriers = data.carriers || [];
  } catch (e) { _wooCarriers = []; }
}

async function loadWooOrderStatuses() {
  try {
    const data = await api('GET', '/api/apps/woo/order-statuses');
    _wooOrderStatuses = (data.statuses || []).map(s => ({ slug: s.slug, label: s.name || s.slug }));
  } catch (e) { _wooOrderStatuses = []; }
}

function _fmtMXN(val) {
  const n = parseFloat(val || '0');
  return n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
}

function _buildOrderRows(orders, prefix, carriers) {
  if (!orders.length) return '<p class="woo-empty">Sin pedidos en esta página.</p>';
  const WOO_STATUS = { pending: 'Pendiente', processing: 'Procesando', 'on-hold': 'En espera', completed: 'Completado', cancelled: 'Cancelado', refunded: 'Reembolsado', failed: 'Fallido' };
  // Construir opciones de estatus WC
  const wcStatusOpts = _wooOrderStatuses.length
    ? [{ slug: '', label: 'No cambiar estatus en WC' }, ..._wooOrderStatuses.map(s => ({ slug: s.slug, label: s.label || s.slug }))]
    : [{ slug: '', label: _wooHasCredentials ? 'No cambiar estatus en WC' : '⚠️ Sin credenciales WC' }];
  return orders.map(o => {
    const products = o.products || JSON.parse(o.products_json || '[]');
    const addr     = (() => { try { return JSON.parse(o.shipping_address_json || '{}'); } catch { return {}; } })();
    const ts       = o.wc_order_date || o.created_at;
    const date     = ts ? new Date(ts * 1000).toLocaleDateString('es-MX', { day:'2-digit', month:'short', year:'numeric' }) : '—';
    const slug     = (o.status || '').replace(/^wc-/, '');
    const label    = WOO_STATUS[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const statusBadge = `<span class="woo-order-status woo-order-status--${slug}">${escapeHtml(label)}</span>`;

    const total    = parseFloat(o.order_total    || '0');
    const shipping = parseFloat(o.shipping_total || '0');
    const discount = parseFloat(o.discount_total || '0');
    const neto     = total - shipping + discount;
    const hasTotal = total > 0;

    const addrParts = [addr.address1, addr.address2, addr.city, addr.state, addr.postcode].filter(Boolean);
    const addrLine  = addrParts.join(', ');

    const _tsLabels = { pendiente: '⏳ Pendiente', en_camino: '🚚 En camino', entregado: '✅ Entregado' };
    const _tsKey    = o.tracking_status || (o.tracking_number ? 'pendiente' : '');
    const trackingBadge = o.tracking_number
      ? `<span class="woo-tracking-badge woo-tracking-badge--${_tsKey}">${_tsLabels[_tsKey] || _tsKey}</span><span class="woo-tracking-num">${escapeHtml(o.tracking_carrier||'')} · ${escapeHtml(o.tracking_number)}</span>`
      : `<span class="woo-tracking-badge woo-tracking-badge--none">Sin rastreo</span>`;

    return `<div class="woo-order-card">
  <div class="woo-oc-top">
    <strong class="woo-oc-num">#${escapeHtml(o.wc_order_number||String(o.wc_order_id))}</strong>
    ${statusBadge}
    <span class="woo-oc-date">${date}</span>
    <span class="woo-oc-flex"></span>
    ${(addrLine || o.customer_note) ? `<button class="woo-addr-btn"
      data-num="${escapeHtml(o.wc_order_number||String(o.wc_order_id))}"
      data-name="${escapeHtml(o.customer_name||'')}"
      data-phone="${escapeHtml(o.customer_phone||'')}"
      data-email="${escapeHtml(o.customer_email||'')}"
      data-addr1="${escapeHtml(addr.address1||'')}"
      data-addr2="${escapeHtml(addr.address2||'')}"
      data-city="${escapeHtml(addr.city||'')}"
      data-state="${escapeHtml(addr.state||'')}"
      data-postcode="${escapeHtml(addr.postcode||'')}"
      data-country="${escapeHtml(addr.country||'')}"
      data-note="${escapeHtml(o.customer_note||'')}">📍 Ver domicilio</button>` : ''}
  </div>
  <div class="woo-oc-client">
    <span>${escapeHtml(o.customer_name||'—')}</span>
    ${o.customer_phone ? `<span class="woo-oc-sep">·</span><span>${escapeHtml(o.customer_phone)}</span>` : ''}
    ${o.customer_email ? `<span class="woo-oc-sep">·</span><span class="woo-oc-muted">${escapeHtml(o.customer_email)}</span>` : ''}
  </div>
  <div class="woo-oc-products">
    ${products.length
      ? products.map(p => `<div class="woo-oc-product"><span class="woo-oc-dot">·</span><span class="woo-oc-pname">${escapeHtml(p.name)}</span><span class="woo-oc-qty">× ${p.quantity}</span>${p.total && parseFloat(p.total)>0 ? `<span class="woo-oc-ptotal">${_fmtMXN(p.total)}</span>` : ''}</div>`).join('')
      : '<span class="woo-oc-muted">Sin productos registrados — vuelve a importar</span>'}
  </div>
  <div class="woo-oc-footer">
    ${o.payment_method ? `<span class="woo-oc-pay">${escapeHtml(o.payment_method)}</span><span class="woo-oc-sep">·</span>` : ''}
    ${hasTotal ? `<strong>${_fmtMXN(o.order_total)}</strong>` : ''}
    ${hasTotal && shipping>0 ? `<span class="woo-oc-sep">·</span><span class="woo-oc-muted">Envío ${_fmtMXN(o.shipping_total)}</span>` : ''}
    ${hasTotal && discount>0 ? `<span class="woo-oc-sep">·</span><span class="woo-oc-muted">-${_fmtMXN(o.discount_total)}</span>` : ''}
    ${hasTotal ? `<span class="woo-oc-sep">·</span><span class="woo-neto">Neto ${_fmtMXN(neto)}</span>` : ''}
    <span class="woo-oc-flex"></span>
    ${trackingBadge}
    <button class="btn btn--xs btn--ghost woo-tracking-btn" data-order-id="${o.id}">${o.tracking_number ? '✏️' : '📦'}</button>
  </div>
  <div class="woo-tracking-form" id="${prefix}TrackingForm_${o.id}" hidden>
    ${!_wooHasCredentials ? `<div class="woo-no-creds-warn">⚠️ Sin credenciales WC — el rastreo se guardará solo en Wapi101. Configura las credenciales REST API para sincronizar con WooCommerce.</div>` : ''}
    <div class="woo-tracking-fields">
      <select class="int-input ${prefix}-carrier-sel" data-oid="${o.id}">
        <option value="">Paquetería...</option>
        ${carriers.map(c => `<option value="${escapeHtml(c.id)}" ${o.tracking_carrier===c.id?'selected':''}>${escapeHtml(c.name)}</option>`).join('')}
      </select>
      <input type="text" class="int-input ${prefix}-tracknum-inp" data-oid="${o.id}" placeholder="Número de rastreo" value="${escapeHtml(o.tracking_number||'')}" style="flex:1"/>
      <select class="int-input ${prefix}-trackstatus-sel" data-oid="${o.id}">
        <option value="pendiente" ${(o.tracking_status||'pendiente')==='pendiente'?'selected':''}>Pendiente</option>
        <option value="en_camino" ${o.tracking_status==='en_camino'?'selected':''}>En camino</option>
        <option value="entregado" ${o.tracking_status==='entregado'?'selected':''}>Entregado</option>
      </select>
    </div>
    <div class="woo-tracking-fields woo-tracking-fields--second">
      <span style="font-size:11px;color:var(--muted);white-space:nowrap">Estatus en WooCommerce:</span>
      <select class="int-input ${prefix}-wcstatus-sel" data-oid="${o.id}" style="flex:1" ${!_wooHasCredentials ? 'disabled title="Configura credenciales WC REST API"' : ''}>
        ${wcStatusOpts.map(s => `<option value="${escapeHtml(s.slug)}">${escapeHtml(s.label)}</option>`).join('')}
      </select>
      <button class="btn btn--primary btn--sm ${prefix}-save-tracking-btn" data-oid="${o.id}">Guardar</button>
      <button class="btn btn--ghost btn--sm ${prefix}-cancel-tracking-btn" data-oid="${o.id}">✕</button>
    </div>
  </div>
</div>`;
  }).join('');
}

const _MX_STATES = {
  AGS:'Aguascalientes', BC:'Baja California', BCS:'Baja California Sur',
  CAMP:'Campeche', CHIS:'Chiapas', CHIH:'Chihuahua', COAH:'Coahuila de Zaragoza',
  COL:'Colima', CDMX:'Ciudad de México', DF:'Ciudad de México', CMX:'Ciudad de México',
  DGO:'Durango', GTO:'Guanajuato', GRO:'Guerrero', HGO:'Hidalgo',
  JAL:'Jalisco', MEX:'Estado de México', MICH:'Michoacán', MOR:'Morelos',
  NAY:'Nayarit', NL:'Nuevo León', OAX:'Oaxaca', PUE:'Puebla',
  QRO:'Querétaro', QROO:'Quintana Roo', SLP:'San Luis Potosí', SIN:'Sinaloa',
  SON:'Sonora', TAB:'Tabasco', TAMPS:'Tamaulipas', TLAX:'Tlaxcala',
  VER:'Veracruz', YUC:'Yucatán', ZAC:'Zacatecas',
};

function _openAddrModal({ num, name, phone, email, addr1, addr2, city, state, postcode, country, note }) {
  document.getElementById('wooAddrModal')?.remove();
  // Formatear dirección en 3 líneas estilo MX
  const lineStreet   = [addr1, addr2].filter(Boolean).join(', ');          // Calle y núm, Colonia
  const lineCity     = [addr2 ? '' : '', city].filter(Boolean).join('');   // Municipio (city)
  const lineCityFull = addr2 && city ? city : '';                          // Municipio solo si ya mostramos addr2
  const lineState    = [state, postcode ? `CP ${postcode}` : ''].filter(Boolean).join(', '); // Estado, CP

  // Línea 1: calle + número (addr1)
  // Línea 2: colonia (addr2) + municipio (city)
  // Línea 3: estado + CP
  const addrLine1 = addr1 || '';
  const addrLine2 = [addr2, city].filter(Boolean).join(', ');
  const stateLabel = _MX_STATES[state] || state;
  const addrLine3  = [stateLabel, postcode ? `CP ${postcode}` : '', country].filter(Boolean).join(' · ');
  const hasAddr   = addrLine1 || addrLine2 || addrLine3;

  const m = document.createElement('div');
  m.id = 'wooAddrModal';
  m.className = 'woo-addr-modal-backdrop';
  m.innerHTML = `
    <div class="woo-addr-modal" role="dialog" aria-modal="true">
      <div class="woo-addr-modal-hdr">
        <strong>📦 Pedido #${escapeHtml(num)}</strong>
        <button class="woo-addr-modal-x" aria-label="Cerrar">✕</button>
      </div>
      <div class="woo-addr-modal-body">
        <div class="woo-addr-row"><span class="woo-addr-lbl">👤 Nombre</span><span>${escapeHtml(name||'—')}</span></div>
        ${phone ? `<div class="woo-addr-row"><span class="woo-addr-lbl">📞 Teléfono</span><a href="tel:${escapeHtml(phone)}" class="woo-addr-link">${escapeHtml(phone)}</a></div>` : ''}
        ${email ? `<div class="woo-addr-row"><span class="woo-addr-lbl">✉️ Email</span><a href="mailto:${escapeHtml(email)}" class="woo-addr-link">${escapeHtml(email)}</a></div>` : ''}
        ${hasAddr ? `<div class="woo-addr-row woo-addr-multiline">
          <span class="woo-addr-lbl">📍 Dirección</span>
          <span class="woo-addr-lines">
            ${addrLine1 ? `<span>${escapeHtml(addrLine1)}</span>` : ''}
            ${addrLine2 ? `<span>${escapeHtml(addrLine2)}</span>` : ''}
            ${addrLine3 ? `<span class="woo-addr-lbl2">${escapeHtml(addrLine3)}</span>` : ''}
          </span>
        </div>` : ''}
        ${note ? `<div class="woo-addr-row woo-addr-note-row"><span class="woo-addr-lbl">💬 Nota</span><span>${escapeHtml(note)}</span></div>` : ''}
      </div>
    </div>`;
  document.body.appendChild(m);
  m.querySelector('.woo-addr-modal-x').addEventListener('click', () => m.remove());
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
}

function _bindOrderRows(el, prefix, onSave) {
  el.querySelectorAll('.woo-addr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _openAddrModal({
        num:      btn.dataset.num,
        name:     btn.dataset.name,
        phone:    btn.dataset.phone,
        email:    btn.dataset.email,
        addr1:    btn.dataset.addr1,
        addr2:    btn.dataset.addr2,
        city:     btn.dataset.city,
        state:    btn.dataset.state,
        postcode: btn.dataset.postcode,
        country:  btn.dataset.country,
        note:     btn.dataset.note,
      });
    });
  });
  el.querySelectorAll('.woo-tracking-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const form = document.getElementById(`${prefix}TrackingForm_${btn.dataset.orderId}`);
      if (form) form.hidden = !form.hidden;
    });
  });
  el.querySelectorAll(`.${prefix}-cancel-tracking-btn`).forEach(btn => {
    btn.addEventListener('click', () => {
      const form = document.getElementById(`${prefix}TrackingForm_${btn.dataset.oid}`);
      if (form) form.hidden = true;
    });
  });
  el.querySelectorAll(`.${prefix}-save-tracking-btn`).forEach(btn => {
    btn.addEventListener('click', async () => {
      const oid             = btn.dataset.oid;
      const carrier         = el.querySelector(`.${prefix}-carrier-sel[data-oid="${oid}"]`).value;
      const tracking_number = el.querySelector(`.${prefix}-tracknum-inp[data-oid="${oid}"]`).value.trim();
      const tracking_status = el.querySelector(`.${prefix}-trackstatus-sel[data-oid="${oid}"]`).value;
      const wc_status_el    = el.querySelector(`.${prefix}-wcstatus-sel[data-oid="${oid}"]`);
      const wc_status       = wc_status_el ? wc_status_el.value : '';
      if (!carrier || !tracking_number) return toast('Selecciona paquetería y número de rastreo', 'error');
      try {
        btn.disabled = true;
        const payload = { carrier, tracking_number, tracking_status };
        if (wc_status) payload.wc_status = wc_status;
        const result = await api('PATCH', `/api/apps/woo/orders/${oid}/tracking`, payload);
        let msg = '✅ Rastreo guardado';
        if (result.wcPush) msg += ' y sincronizado con WooCommerce';
        if (wc_status && result.hasCredentials) msg += ` · Estatus → ${wc_status}`;
        if (!result.hasCredentials) msg += ' (configura credenciales WC para sincronizar)';
        toast(msg, 'success');
        await onSave();
      } catch (e) { toast(e.message, 'error'); } finally { btn.disabled = false; }
    });
  });
}

function _buildPagination(currentPage, totalPages, onPageChange) {
  if (totalPages <= 1) return '';
  const prev = currentPage > 1 ? `<button class="woo-pg-btn" data-pg="${currentPage - 1}">‹ Ant</button>` : '';
  const next = currentPage < totalPages ? `<button class="woo-pg-btn" data-pg="${currentPage + 1}">Sig ›</button>` : '';
  return `<div class="woo-pagination">${prev}<span class="woo-pg-info">Página ${currentPage} de ${totalPages}</span>${next}</div>`;
}

function renderWooOrders(filter = '') {
  const el = document.getElementById('wooOrdersList');
  if (!el) return;
  const orders = filter
    ? _wooOrders.filter(o =>
        String(o.wc_order_number).includes(filter) ||
        (o.customer_name || '').toLowerCase().includes(filter.toLowerCase()))
    : _wooOrders;

  if (!orders.length) {
    el.innerHTML = '<p class="woo-empty">Sin pedidos aún. Los pedidos aparecen cuando WooCommerce envía un evento.</p>';
    return;
  }

  el.innerHTML = _buildOrderRows(orders, 'woo', _wooCarriers)
    + _buildPagination(_wooOrdersPage, _wooOrdersPages, p => loadWooOrders(p));
  _bindOrderRows(el, 'woo', () => loadWooOrders(_wooOrdersPage));

  el.querySelectorAll('.woo-pg-btn').forEach(btn => {
    btn.addEventListener('click', () => loadWooOrders(Number(btn.dataset.pg)));
  });
}

function setupWooEvents() {
  // Conectar
  document.getElementById('wooConnectBtn')?.addEventListener('click', async () => {
    try {
      await api('POST', '/api/apps/woo/connect');
      await loadWooConfig();
      toast('Conectado', 'success');
    } catch (e) { toast(e.message, 'error'); }
  });

  // Toggle enabled
  document.getElementById('wooEnabledToggle')?.addEventListener('change', async (e) => {
    try {
      await api('PATCH', '/api/apps/woo/toggle', { enabled: e.target.checked });
      await loadWooConfig();
      toast(e.target.checked ? 'Activado' : 'Pausado', 'success');
    } catch (e2) { toast(e2.message, 'error'); }
  });

  // Desconectar
  document.getElementById('wooDisconnectBtn')?.addEventListener('click', async () => {
    if (!confirm('¿Desconectar WooCommerce? Se perderá el token y la configuración.')) return;
    try {
      await api('POST', '/api/apps/woo/disconnect');
      await loadWooConfig();
      toast('Desconectado', 'success');
    } catch (e) { toast(e.message, 'error'); }
  });

  // Copiar token
  document.getElementById('wooCopyToken')?.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('wooToken').textContent);
    toast('Token copiado', 'success');
  });
  document.getElementById('wooCopyUrl')?.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('wooWebhookUrl').textContent);
    toast('URL copiada', 'success');
  });

  // Sincronizar productos desde WooCommerce
  document.getElementById('wooSyncProductsBtn')?.addEventListener('click', async () => {
    const btn = document.getElementById('wooSyncProductsBtn');
    btn.disabled = true; btn.textContent = '⏳ Sincronizando...';
    try {
      await loadWooProducts();
      toast(`${_wooProducts.length} productos cargados de WooCommerce`, 'success');
    } catch (e) { toast(e.message, 'error'); }
    finally { btn.disabled = false; btn.textContent = '↺ Sincronizar'; }
  });

  // Guardar duraciones de productos
  document.getElementById('wooSaveProductsBtn')?.addEventListener('click', async () => {
    try {
      await api('PUT', '/api/apps/woo/products', { products: _wooProducts });
      toast('Duraciones guardadas', 'success');
    } catch (e) { toast(e.message, 'error'); }
  });

  // Guardar pipeline inicial (order.processing)
  document.getElementById('wooSaveInitialPipelineBtn')?.addEventListener('click', async () => {
    const pipeline_id = Number(document.getElementById('wooInitialPipeline')?.value);
    const stage_id    = Number(document.getElementById('wooInitialStage')?.value);
    if (!pipeline_id || !stage_id) return toast('Selecciona pipeline y etapa', 'error');
    try {
      await api('PUT', '/api/apps/woo/initial-pipeline', { pipeline_id, stage_id });
      toast('Pipeline inicial guardado', 'success');
    } catch (e) { toast(e.message, 'error'); }
  });

  // Guardar estatus que disparan lead
  document.getElementById('wooSaveTriggerStatusBtn')?.addEventListener('click', async () => {
    const checks = document.querySelectorAll('#wooTriggerStatusList input[type=checkbox]:checked');
    const statuses = Array.from(checks).map(c => c.value);
    if (!statuses.length) return toast('Selecciona al menos un estatus', 'error');
    try {
      await api('PUT', '/api/apps/woo/trigger-statuses', { statuses });
      toast('Estatus guardados', 'success');
    } catch (e) { toast(e.message, 'error'); }
  });

  // Agregar regla de pipeline
  document.getElementById('wooAddRuleBtn')?.addEventListener('click', () => {
    const days       = Number(document.getElementById('wooRuleDays').value);
    const pipelineId = Number(document.getElementById('wooRulePipeline').value);
    const stageId    = Number(document.getElementById('wooRuleStage').value);
    if (!days || !pipelineId || !stageId) return toast('Completa todos los campos', 'error');
    if (_wooRules.find(r => r.duration_days === days))
      return toast(`Ya existe una regla para ${days} días`, 'error');
    _wooRules.push({ duration_days: days, pipeline_id: pipelineId, stage_id: stageId });
    _wooRules.sort((a, b) => a.duration_days - b.duration_days);
    document.getElementById('wooRuleDays').value = '';
    document.getElementById('wooRulePipeline').value = '';
    document.getElementById('wooRuleStage').innerHTML = '<option value="">Etapa...</option>';
    renderWooRules();
    toast('Regla agregada — recuerda guardar', 'success');
  });

  // Guardar reglas
  document.getElementById('wooSaveRulesBtn')?.addEventListener('click', async () => {
    try {
      const errEl = document.getElementById('wooPipelineError');
      errEl.hidden = true;
      await api('PUT', '/api/apps/woo/pipeline-rules', { rules: _wooRules });
      toast('Reglas guardadas', 'success');
    } catch (e) {
      const errEl = document.getElementById('wooPipelineError');
      errEl.textContent = e.message;
      errEl.hidden = false;
    }
  });

  // Pedidos: refresh + búsqueda
  document.getElementById('wooOrdersRefresh')?.addEventListener('click', loadWooOrders);
  document.getElementById('wooOrdersSearch')?.addEventListener('input', (e) => renderWooOrders(e.target.value));

  // Pedidos: importar desde WooCommerce
  document.getElementById('wooSyncOrdersBtn')?.addEventListener('click', async () => {
    const btn = document.getElementById('wooSyncOrdersBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Importando...';
    try {
      const res = await api('POST', '/api/apps/woo/orders/sync');
      toast(`✅ ${res.imported} órdenes importadas de WooCommerce`, 'success');
      await loadWooOrders();
    } catch (e) { toast(e.message || 'Error al importar', 'error'); }
    finally { btn.disabled = false; btn.textContent = '⬇ Importar de WooCommerce'; }
  });

  // Guardar credenciales WC REST API
  document.getElementById('wooSaveCredentialsBtn')?.addEventListener('click', async () => {
    const site_url          = document.getElementById('wooSiteUrl')?.value.trim();
    const wc_consumer_key   = document.getElementById('wooConsumerKey')?.value.trim();
    const wc_consumer_secret = document.getElementById('wooConsumerSecret')?.value.trim();
    if (!site_url) return toast('Ingresa la URL de tu tienda', 'error');
    try {
      await api('PUT', '/api/apps/woo/config/credentials', { site_url, wc_consumer_key, wc_consumer_secret });
      toast('Credenciales guardadas', 'success');
      await loadWooConfig();
    } catch (e) { toast(e.message, 'error'); }
  });

  // Verificar plugin WP
  document.getElementById('wooPingBtn')?.addEventListener('click', async () => {
    const btn = document.getElementById('wooPingBtn');
    const dot = document.getElementById('wooPluginStatusDot');
    const lbl = document.getElementById('wooPluginStatusLabel');
    btn.disabled = true;
    btn.textContent = '🔄 Verificando...';
    try {
      const res = await api('GET', '/api/apps/woo/ping');
      if (res.ok) {
        dot.className = 'woo-status-dot woo-status-dot--on';
        lbl.textContent = '✅ Plugin detectado y vinculado';
        lbl.style.color = 'var(--success, #16a34a)';
      } else {
        dot.className = 'woo-status-dot woo-status-dot--off';
        lbl.textContent = `⚠️ No se pudo conectar (${res.reason})`;
        lbl.style.color = 'var(--warning, #d97706)';
      }
    } catch (e) {
      dot.className = 'woo-status-dot woo-status-dot--off';
      lbl.textContent = '⚠️ Error al verificar';
    }
    finally { btn.disabled = false; btn.textContent = '🔍 Verificar plugin'; }
  });
}
