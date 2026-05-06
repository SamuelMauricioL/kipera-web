import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#D9AE71] selection:bg-black selection:text-white">
      {/* Navbar-ish top bar */}
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
        <nav className="pointer-events-auto bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full px-6 py-3 flex items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
          <Link to="/" className="text-xl tracking-tighter font-serif font-normal text-black flex items-center mr-8">
            Kipera<span className="text-[10px] ml-0.5 align-top">®</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[12px] uppercase tracking-widest font-sans text-black/50 hover:text-black transition-all">Inicio</Link>
            <Link to="/privacy" className="text-[12px] uppercase tracking-widest font-sans text-black/50 hover:text-black transition-all">Privacidad</Link>
          </div>
        </nav>
      </div>

      <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-black mb-4 leading-tight">Términos de Servicio</h1>
          <p className="font-sans text-sm text-black/50 mb-12">
            <strong>Fecha de vigencia:</strong> 5 de mayo, 2026 | <strong>Última actualización:</strong> 5 de mayo, 2026
          </p>

          <div className="prose-custom space-y-6 text-black/80 font-sans text-sm leading-relaxed">
            <p>Bienvenido a Kipera. Estos Términos de Servicio ("Términos") rigen el uso de la aplicación móvil Kipera ("App") y sus servicios. Al acceder o usar Kipera, aceptas estar sujeto a estos Términos.</p>
            <p className="font-semibold text-black">Si no estás de acuerdo con estos Términos, no uses la App.</p>

            {/* 1 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">1. Proveedor del Servicio</h2>
            <p>Kipera es operado por:</p>
            <p className="bg-white/30 p-4 rounded-xl">
              <strong>Hans Leonel Jurado Muñoz & Samuel Mauricio Laime</strong><br />
              Lima, Perú<br />
              Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a>
            </p>

            {/* 2 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">2. Descripción del Servicio</h2>
            <p>Kipera es una aplicación de ahorro gamificado en pareja que permite a los usuarios:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Crear metas de ahorro individuales o compartidas</li>
              <li>Seleccionar entre 8 métodos de ahorro (3 gratis, 5 premium)</li>
              <li>Registrar check-ins diarios y construir rachas</li>
              <li>Visualizar el progreso con heatmaps y estadísticas</li>
              <li>Desbloquear logros al alcanzar hitos de ahorro</li>
              <li>Invitar a una pareja para ahorrar juntos hacia una meta común</li>
            </ul>

            {/* 3 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">3. Información de Suscripciones</h2>
            
            <h3 className="font-serif text-lg text-black mt-6 mb-3">3.1 Planes de Suscripción</h3>
            <p>Kipera ofrece las siguientes suscripciones auto-renovables:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Kipera Plus Mensual:</strong> $4.99 USD por mes</li>
              <li><strong>Kipera Plus Anual:</strong> $29.99 USD por año</li>
            </ul>
            <p className="text-black/40 italic">Los precios pueden variar por región y están sujetos a cambios con notificación previa.</p>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">3.2 Funciones Premium (Kipera Plus)</h3>
            <p>La suscripción Kipera Plus desbloquea:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>5 métodos de ahorro premium: Progresivo Inverso, Sobres Aleatorios, Multiplicador, Pasos Quincenales, Penalty</li>
              <li>Estadísticas avanzadas con gráficos detallados</li>
              <li>Widget de pantalla de inicio con datos en tiempo real</li>
              <li>Sincronización en la nube para respaldo de datos</li>
              <li>Heatmap extendido con historial completo</li>
              <li>Experiencia sin publicidad</li>
            </ul>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">3.3 Términos de Auto-Renovación</h3>
            <p><strong>IMPORTANTE - Requisitos de Auto-Renovación de Apple:</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>El pago se cargará a tu cuenta de iTunes en la confirmación de la compra</li>
              <li>La suscripción se renueva automáticamente a menos que la canceles al menos 24 horas antes del final del período actual</li>
              <li>Tu cuenta será cobrada por la renovación dentro de las 24 horas previas al final del período actual</li>
              <li>Puedes gestionar tus suscripciones y desactivar la auto-renovación en la configuración de tu cuenta de iTunes</li>
              <li>Cualquier porción no utilizada de un período de prueba gratuito, si se ofrece, se perderá al comprar una suscripción</li>
            </ul>

            {/* 4 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">4. Cancelación y Reembolsos</h2>
            
            <h3 className="font-serif text-lg text-black mt-6 mb-3">4.1 Cómo Cancelar</h3>
            <p>Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta de iTunes.</p>

            <h3 className="font-serif text-lg text-black mt-6 mb-3">4.2 Política de Reembolsos</h3>
            <p>Los reembolsos son gestionados exclusivamente por Apple, no por Kipera. Para solicitar un reembolso, visita <a href="https://support.apple.com/en-us/118223" target="_blank" className="text-black underline decoration-black/30">la página de reembolsos de Apple</a>.</p>

            {/* 5 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">5. Licencia de Uso</h2>
            <p>Kipera te otorga una licencia limitada, no exclusiva, intransferible y revocable para:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Descargar e instalar la App en dispositivos que poseas o controles</li>
              <li>Usar la App para tu uso personal y no comercial</li>
            </ul>

            {/* 6 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">6. Propiedad del Contenido</h2>
            <p>La App, incluyendo su código, diseño, marcas registradas y tecnología, es propiedad de Hans Leonel Jurado Muñoz & Samuel Mauricio Laime y está protegida por leyes de propiedad intelectual.</p>
            <p><strong>Tus datos de ahorro</strong> — montos, rachas, logros, metas — te pertenecen. Kipera solo los utiliza para proporcionar el servicio.</p>

            {/* 7 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">7. Usos Prohibidos</h2>
            <p>Aceptas NO:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Compartir tus credenciales de cuenta con otros</li>
              <li>Usar sistemas automatizados (bots, scrapers) para acceder a la App</li>
              <li>Intentar eludir las funciones de seguridad o verificación de suscripción</li>
              <li>Interferir con el servicio o interrumpirlo</li>
            </ul>

            {/* 8 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">8. Servicios de Terceros</h2>
            <p>Kipera utiliza los siguientes servicios de terceros:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong>Firebase (Google):</strong> Autenticación y notificaciones push</li>
              <li><strong>Supabase:</strong> Base de datos, autenticación y sincronización en tiempo real</li>
              <li><strong>RevenueCat:</strong> Gestión de suscripciones</li>
              <li><strong>Apple App Store / Google Play:</strong> Procesamiento de pagos</li>
            </ul>
            <p>Tu uso de estos servicios está sujeto a sus respectivos términos y políticas de privacidad.</p>

            {/* 9 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">9. Privacidad y Protección de Datos</h2>
            <p>Tu privacidad es importante. Consulta nuestra <Link to="/privacy" className="text-black underline decoration-black/30">Política de Privacidad</Link> para entender cómo recopilamos, usamos y protegemos tus datos.</p>
            <p><strong>Puntos clave:</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Los datos de ahorro se almacenan localmente y se sincronizan con Supabase para respaldo</li>
              <li>La información de pago es manejada exclusivamente por Apple/Google</li>
              <li>No vendemos tus datos a terceros</li>
              <li>No utilizamos analytics ni tracking SDKs</li>
            </ul>

            {/* 10 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">10. Descargo de Garantías</h2>
            <p><strong>LA APP SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO.</strong></p>
            <p>Renunciamos a todas las garantías, expresas o implícitas, incluyendo comerciabilidad, idoneidad para un propósito particular y no infracción.</p>

            {/* 11 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">11. Limitación de Responsabilidad</h2>
            <p><strong>HASTA EL MÁXIMO PERMITIDO POR LA LEY:</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Nuestra responsabilidad total se limita al monto que pagaste en los últimos 12 meses, o $50 USD, lo que sea menor</li>
              <li>NO somos responsables por daños indirectos, incidentales, consecuentes o especiales</li>
              <li>NO somos responsables por pérdida de datos, ganancias o ingresos</li>
            </ul>

            {/* 12 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">12. Requisitos de Edad</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Debes tener al menos <strong>13 años</strong> para usar Kipera</li>
              <li>Si eres menor de 18, debes tener consentimiento parental o del tutor</li>
              <li>Cumplimos con COPPA (Ley de Protección de Privacidad Infantil en Línea)</li>
            </ul>

            {/* 13 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">13. Modificaciones a los Términos</h2>
            <p>Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Los cambios importantes se notificarán con 30 días de anticipación por correo o notificación en la App.</p>

            {/* 14 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">14. Ley Aplicable y Resolución de Disputas</h2>
            <p>Estos Términos se rigen por las leyes de <strong>Perú (Lima)</strong>.</p>
            <p><strong>Resolución de disputas:</strong></p>
            <ol className="list-decimal pl-6 space-y-1.5">
              <li>Contáctanos en <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a> para resolver disputas de manera informal</li>
              <li>Permite 30 días para negociación de buena fe</li>
              <li>Si la resolución informal falla, las disputas se resolverán mediante arbitraje vinculante en Lima, Perú</li>
            </ol>

            {/* 15 */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">15. Contacto</h2>
            <p className="bg-white/30 p-4 rounded-xl">
              <strong>Hans Leonel Jurado Muñoz & Samuel Mauricio Laime</strong><br />
              Lima, Perú<br />
              Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
              Tiempo de respuesta: Dentro de 7 días hábiles
            </p>

            {/* Apple-specific */}
            <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">16. Términos Específicos para Apple</h2>
            <p>Si descargaste Kipera desde la App Store de Apple:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Estos Términos son entre tú y Kipera, no con Apple</li>
              <li>Apple no tiene obligación de proporcionar soporte para la App</li>
              <li>Apple no es responsable de la App ni de su contenido</li>
              <li>Debes cumplir con los Términos de Servicio de la App Store de Apple</li>
            </ul>

            <hr className="border-black/10 my-12" />

            <div className="flex flex-wrap gap-4">
              <Link to="/" className="inline-flex items-center gap-1.5 bg-black text-white rounded-full px-6 py-3 font-sans text-xs uppercase tracking-wider hover:bg-black/80 transition-all">
                ← Volver al inicio
              </Link>
              <Link to="/privacy" className="inline-flex items-center gap-1.5 bg-white/30 text-black rounded-full px-6 py-3 font-sans text-xs uppercase tracking-wider border border-white/30 hover:bg-white/50 transition-all">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
