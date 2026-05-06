import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#D9AE71] selection:bg-black selection:text-white">
      {/* Top bar */}
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
        <nav className="pointer-events-auto bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full px-6 py-3 flex items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
          <Link to="/" className="text-xl tracking-tighter font-serif font-normal text-black flex items-center mr-8">
            Kipera<span className="text-[10px] ml-0.5 align-top">®</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[12px] uppercase tracking-widest font-sans text-black/50 hover:text-black transition-all">Inicio</Link>
            <Link to="/terms" className="text-[12px] uppercase tracking-widest font-sans text-black/50 hover:text-black transition-all">Términos</Link>
          </div>
        </nav>
      </div>

      <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-black mb-4 leading-tight">Política de Privacidad</h1>
          <p className="font-sans text-sm text-black/50 mb-12">
            <strong>Fecha de vigencia:</strong> 5 de mayo, 2026 | <strong>Última actualización:</strong> 5 de mayo, 2026
          </p>

          <div className="space-y-6 text-black/80 font-sans text-sm leading-relaxed">
            <p>Bienvenido a Kipera. Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando usas la aplicación móvil Kipera ("App").</p>
            <p className="font-semibold text-black">Al usar Kipera, aceptas la recopilación y uso de información de acuerdo con esta Política de Privacidad.</p>

            {/* Quick summary */}
            <div className="bg-white/30 border-l-4 border-black/50 p-5 rounded-r-xl my-8">
              <h3 className="font-serif text-lg text-black mb-3">Resumen Rápido</h3>
              <ul className="space-y-2">
                <li><strong>📊 Qué recopilamos:</strong> Datos de ahorro (metas, montos, rachas, check-ins), correo electrónico si creas una cuenta</li>
                <li><strong>🎯 Por qué lo recopilamos:</strong> Para proporcionar la funcionalidad principal de ahorro gamificado en pareja</li>
                <li><strong>🤝 Con quién lo compartimos:</strong> Supabase para almacenamiento en la nube y sincronización</li>
                <li><strong>✅ Tu consentimiento:</strong> Das permiso al crear una cuenta y usar la App</li>
                <li><strong>❌ Lo que NO recopilamos:</strong> Datos de ubicación, contactos, fotos, historial de navegación, analytics de uso</li>
                <li><strong>📧 Contacto:</strong> <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></li>
              </ul>
            </div>

            {/* 1 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">1. Información del Proveedor del Servicio</h2>
            <p className="bg-white/30 p-4 rounded-xl">
              <strong>Hans Leonel Jurado Muñoz & Samuel Mauricio Laime</strong><br />
              Lima, Perú<br />
              Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a>
            </p>

            {/* 2 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">2. Información que Recopilamos</h2>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">🔹 Datos de Cuenta (si creas una cuenta)</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Nombre completo (opcional, desde Apple/Google Sign-In)</li>
              <li>Correo electrónico</li>
              <li>ID de usuario (autogenerado por Supabase)</li>
              <li>Credenciales de autenticación (si usas registro por correo/contraseña)</li>
            </ul>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">🔹 Datos de Ahorro</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Metas de ahorro:</strong> nombre, monto objetivo, método de ahorro, color, ícono</li>
              <li><strong>Check-ins diarios:</strong> montos ahorrados, fechas, método utilizado</li>
              <li><strong>Rachas y logros:</strong> días consecutivos, logros desbloqueados</li>
              <li><strong>Datos de pareja:</strong> si usas la función en pareja, registramos la vinculación y los check-ins de ambos</li>
            </ul>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">🔹 Datos Recopilados Automáticamente</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Fecha de creación de la cuenta</li>
              <li>Último inicio de sesión</li>
              <li>Proveedor de autenticación (correo, Apple o Google)</li>
              <li>Estado de suscripción (Kipera Plus activo o no)</li>
              <li>Tipo de suscripción y fecha de expiración</li>
              <li>Zona horaria (para recordatorios y heatmap)</li>
            </ul>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">🔹 Almacenamiento Local (en tu dispositivo)</h3>
            <p>Los siguientes datos se almacenan <strong>solo en tu dispositivo</strong> y NO se transmiten a nuestros servidores:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Historial completo de check-ins</li>
              <li>Datos del heatmap</li>
              <li>Preferencias de la App</li>
              <li>Borradores de metas no guardadas</li>
            </ul>

            {/* What we DON'T collect */}
            <div className="bg-white/30 p-5 rounded-xl my-6">
              <h3 className="font-serif text-lg text-black mb-3">✅ Lo que NO recopilamos</h3>
              <ul className="space-y-1">
                <li>• Modelo o fabricante del dispositivo</li>
                <li>• Versión del sistema operativo para tracking</li>
                <li>• Identificadores únicos del dispositivo (IDFA, IDFV)</li>
                <li>• Tiempo de uso en la App</li>
                <li>• Analytics detallados o tracking de comportamiento</li>
                <li>• Reportes de crash o errores</li>
                <li>• Direcciones IP</li>
                <li>• Datos de ubicación (GPS)</li>
                <li>• Contactos, fotos u otras apps</li>
                <li>• Historial de navegación fuera de la App</li>
              </ul>
            </div>

            {/* 3 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">3. Cómo Usamos tu Información</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Proporcionar el servicio:</strong> Mostrar tu progreso, rachas, heatmap y logros</li>
              <li><strong>Sincronización en pareja:</strong> Compartir el progreso con tu pareja cuando usas una meta compartida</li>
              <li><strong>Notificaciones:</strong> Enviar recordatorios de check-in y notificaciones de actividad de tu pareja</li>
              <li><strong>Gestión de suscripción:</strong> Verificar el estado de Kipera Plus</li>
              <li><strong>Soporte:</strong> Responder a tus solicitudes de ayuda</li>
            </ul>

            <div className="bg-white/30 border-l-4 border-black/30 p-4 rounded-r-xl my-6">
              <p className="font-sans text-sm"><strong>NO usamos tus datos para:</strong> publicidad, marketing, venta a terceros, tracking de comportamiento, o entrenamiento de modelos de IA.</p>
            </div>

            {/* 4 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">4. Servicios de Terceros y Compartición de Datos</h2>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">4.1 Supabase (Backend y Autenticación)</h3>
            <p><strong>Propósito:</strong> Autenticación de usuarios, gestión de cuentas, almacenamiento y sincronización en tiempo real</p>
            <p><strong>Datos almacenados:</strong> Información de cuenta (correo, nombre, user ID), tokens de autenticación, datos de metas y check-ins, estado de suscripción</p>
            <p><strong>Política de Privacidad:</strong> <a href="https://supabase.com/privacy" target="_blank" className="text-black underline decoration-black/30">supabase.com/privacy</a></p>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">4.2 Firebase (Notificaciones)</h3>
            <p><strong>Propósito:</strong> Notificaciones push para recordatorios de check-in y actividad de pareja</p>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">4.3 RevenueCat (Suscripciones)</h3>
            <p><strong>Propósito:</strong> Gestión de suscripciones in-app, verificación de compras</p>
            <p><strong>Datos compartidos:</strong> User ID (anónimo), estado y tipo de suscripción, recibos de compra de Apple/Google</p>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">4.4 Apple App Store / Google Play (Pagos)</h3>
            <p><strong>Importante:</strong> Todo el procesamiento de pagos es manejado exclusivamente por Apple o Google. Nunca vemos ni almacenamos tu información de tarjeta de crédito.</p>

            {/* 5 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">5. Cómo Almacenamos y Protegemos tus Datos</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Cifrado en tránsito:</strong> Todas las comunicaciones usan HTTPS/TLS 1.2+</li>
              <li><strong>Cifrado en reposo:</strong> Los datos se almacenan cifrados con estándares de la industria</li>
              <li><strong>Autenticación segura:</strong> Protocolos OAuth 2.0 y JWT</li>
              <li><strong>Contraseñas:</strong> Hash con bcrypt para autenticación por correo/contraseña</li>
            </ul>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">Retención de Datos</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Datos de cuenta:</strong> Retenidos mientras tu cuenta esté activa, eliminados dentro de 30 días de la solicitud de eliminación</li>
              <li><strong>Datos de ahorro:</strong> Eliminados al eliminar la meta o la cuenta</li>
              <li><strong>RevenueCat:</strong> El historial de suscripciones puede retenerse para cumplimiento financiero (generalmente 7 años)</li>
            </ul>

            {/* 6 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">6. Tus Derechos de Privacidad</h2>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">Derechos Generales (Todos los Usuarios)</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
              <li><strong>Corrección:</strong> Solicitar corrección de datos inexactos</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tu cuenta y datos</li>
              <li><strong>Exportación:</strong> Solicitar tus datos en formato JSON portátil</li>
            </ul>
            <p className="mt-3">Para ejercer estos derechos, escríbenos a <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></p>

            {/* 7 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">7. Privacidad Infantil</h2>
            <p>Kipera está dirigida a usuarios mayores de <strong>13 años</strong>.</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>No recopilamos datos de niños menores de 13 años a sabiendas</li>
              <li>Si descubrimos que hemos recopilado información de un niño menor de 13 años, la eliminaremos de inmediato</li>
            </ul>

            {/* 8 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">8. Cookies y Tecnologías de Tracking</h2>
            <p>Kipera es una aplicación móvil y <strong>no utiliza cookies de navegador</strong>.</p>
            <p><strong>Lo que usamos:</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Almacenamiento local (SQLite):</strong> Guardar tus datos de ahorro y preferencias en tu dispositivo</li>
              <li><strong>Tokens JWT:</strong> Mantener tu sesión iniciada de forma segura</li>
            </ul>
            <p><strong>Lo que NO usamos:</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>❌ SDKs de analytics (no Firebase Analytics, Amplitude, etc.)</li>
              <li>❌ SDKs de publicidad</li>
              <li>❌ Huellas digitales del dispositivo para tracking</li>
              <li>❌ Identificadores de tracking entre apps</li>
            </ul>

            {/* 9 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">9. Cambios a esta Política de Privacidad</h2>
            <p>Los cambios importantes se notificarán con al menos <strong>30 días</strong> de anticipación por correo electrónico o notificación en la App. Los cambios menores pueden publicarse sin previo aviso.</p>

            {/* 10 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">10. Tus Controles y Opciones</h2>
            <p><strong>Tú tienes el control de tus datos en todo momento:</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>✅ Actualizar tu perfil (nombre, correo)</li>
              <li>✅ Crear, modificar o eliminar metas de ahorro</li>
              <li>✅ Ver tu historial completo de check-ins</li>
              <li>✅ Eliminar tu cuenta y todos tus datos</li>
              <li>✅ Gestionar notificaciones desde la configuración de la App</li>
            </ul>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">Eliminación de Cuenta</h3>
            <p>Para eliminar tu cuenta:</p>
            <ol className="list-decimal pl-6 space-y-1.5">
              <li>Envía un correo a <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a> con el asunto "Solicitud de Eliminación de Cuenta"</li>
              <li>Proporciona tu correo electrónico registrado</li>
              <li>Procesaremos la solicitud dentro de 30 días</li>
            </ol>

            {/* 11 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">11. Contacto</h2>
            <p className="bg-white/30 p-4 rounded-xl">
              <strong>Consultas Generales de Privacidad:</strong><br />
              Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
              Asunto: "Consulta de Privacidad"<br />
              Tiempo de respuesta: Dentro de 7 días hábiles
            </p>
            <p className="mt-4 bg-white/30 p-4 rounded-xl">
              <strong>Solicitudes de Derechos de Privacidad:</strong><br />
              Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
              Asunto: "Solicitud de Derechos de Privacidad - [Acceso/Eliminación/Corrección]"<br />
              Tiempo de respuesta: Dentro de 30 días
            </p>

            <hr className="border-black/10 my-12" />

            <div className="flex flex-wrap gap-4">
              <Link to="/" className="inline-flex items-center gap-1.5 bg-black text-white rounded-full px-6 py-3 font-sans text-xs uppercase tracking-wider hover:bg-black/80 transition-all">
                ← Volver al inicio
              </Link>
              <Link to="/terms" className="inline-flex items-center gap-1.5 bg-white/30 text-black rounded-full px-6 py-3 font-sans text-xs uppercase tracking-wider border border-white/30 hover:bg-white/50 transition-all">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
