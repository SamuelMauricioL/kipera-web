import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#D9AE71] selection:bg-black selection:text-white">
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-serif text-5xl md:text-7xl text-black mb-4 leading-tight">Términos de Servicio</h1>
          <p className="font-sans text-sm text-black/50 mb-12">
            <strong>Fecha de vigencia:</strong> 5 de mayo, 2026 | <strong>Última actualización:</strong> 5 de mayo, 2026
          </p>

          <div className="space-y-6 text-black/80 font-sans text-sm leading-relaxed">
            <p>Bienvenido a Kipera. Estos Términos de Servicio ("Términos") rigen el uso de la aplicación móvil Kipera ("App") y sus servicios. Al acceder o usar Kipera, aceptas estar sujeto a estos Términos.</p>
            <p className="font-semibold text-black">Si no estás de acuerdo con estos Términos, no uses la App.</p>

            {/* 1 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">1. Proveedor del Servicio</h2>
              <p>Kipera es operado por:</p>
              <p className="bg-white/30 p-4 rounded-xl">
                <strong>Hans Leonel Jurado Muñoz & Samuel Mauricio Laime</strong><br />
                Lima, Perú<br />
                Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a>
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">2. Descripción del Servicio</h2>
              <p>Kipera es una aplicación de ahorro gamificado en pareja que permite a los usuarios:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Crear metas de ahorro individuales o compartidas</li>
                <li>Seleccionar entre 8 métodos de ahorro (3 gratis, 5 premium con Kipera Plus)</li>
                <li>Registrar check-ins diarios y construir rachas</li>
                <li>Visualizar el progreso con heatmaps y estadísticas</li>
                <li>Desbloquear logros al alcanzar hitos de ahorro</li>
                <li>Invitar a una pareja para ahorrar juntos hacia una meta común</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
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
                <li>5 métodos de ahorro premium: Progresivo Inverso, Sobres Aleatorios, Multiplicador, Pasos Quincenales y Penalty</li>
                <li>Estadísticas avanzadas con gráficos detallados</li>
                <li>Widget de pantalla de inicio con datos en tiempo real</li>
                <li>Sincronización en la nube para respaldo de datos</li>
                <li>Heatmap extendido con historial completo</li>
                <li>Experiencia sin publicidad</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">3.3 Términos de Auto-Renovación</h3>
              <p><strong>IMPORTANTE — Requisitos de Auto-Renovación (Apple App Store):</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>El pago se cargará a tu cuenta de iTunes en la confirmación de la compra</li>
                <li>La suscripción se renueva automáticamente a menos que la canceles al menos 24 horas antes del final del período actual</li>
                <li>Tu cuenta será cobrada por la renovación dentro de las 24 horas previas al final del período actual al mismo precio</li>
                <li>Puedes gestionar tus suscripciones y desactivar la auto-renovación en la configuración de tu cuenta de iTunes después de la compra</li>
                <li>Cualquier porción no utilizada de un período de prueba gratuito, si se ofrece, se perderá al comprar una suscripción</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">4. Cancelación y Reembolsos</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.1 Cómo Cancelar</h3>
              <p>Puedes cancelar tu suscripción en cualquier momento a través de la configuración de tu cuenta de iTunes:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Abre la app Configuración en tu dispositivo iOS</li>
                <li>Toca tu nombre en la parte superior</li>
                <li>Toca "Suscripciones"</li>
                <li>Selecciona Kipera</li>
                <li>Toca "Cancelar Suscripción"</li>
              </ol>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.2 Cuándo Toma Efecto la Cancelación</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>La cancelación toma efecto al final de tu período de facturación actual</li>
                <li>Conservarás acceso a las funciones premium hasta el final del período pagado</li>
                <li>No se proporcionan reembolsos parciales para el período de suscripción actual</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.3 Política de Reembolsos</h3>
              <p><strong>Los reembolsos son gestionados exclusivamente por Apple, no por Kipera.</strong></p>
              <p>Para solicitar un reembolso:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Visita la página de reembolsos de Apple: <a href="https://support.apple.com/en-us/118223" target="_blank" className="text-black underline decoration-black/30">https://support.apple.com/en-us/118223</a></li>
                <li>Inicia sesión con tu Apple ID</li>
                <li>Selecciona la compra de Kipera</li>
                <li>Elige tu motivo y envía la solicitud</li>
              </ol>
              <p className="mt-3"><strong>Notas importantes:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Los reembolsos quedan a discreción exclusiva de Apple (generalmente dentro de 14 días de la compra)</li>
                <li>Kipera no puede garantizar la aprobación del reembolso</li>
                <li>Para problemas técnicos, contáctanos primero en <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">5. Licencia de Uso</h2>
              <p>Sujeto a tu cumplimiento de estos Términos, Kipera te otorga una licencia limitada, no exclusiva, intransferible y revocable para:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Descargar e instalar la App en dispositivos que poseas o controles</li>
                <li>Usar la App para tu uso personal y no comercial</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">5.1 Restricciones</h3>
              <p>NO puedes:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Usar la App con fines comerciales sin nuestra autorización por escrito</li>
                <li>Modificar, hacer ingeniería inversa, descompilar o desensamblar la App</li>
                <li>Eliminar avisos de derechos de autor o propiedad</li>
                <li>Transferir, sublicenciar o vender tu licencia de uso de la App</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">6. Propiedad del Contenido</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">6.1 Propiedad Intelectual de Kipera</h3>
              <p>La App, incluyendo su código, diseño, marcas registradas, nombre "Kipera", logotipos y tecnología, es propiedad de Hans Leonel Jurado Muñoz & Samuel Mauricio Laime y está protegida por leyes de propiedad intelectual.</p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">6.2 Tus Datos de Ahorro</h3>
              <p>Tus datos de ahorro — incluyendo montos, rachas, logros, metas, check-ins e historial de heatmap — te pertenecen. Kipera solo los utiliza para proporcionar el servicio, sincronización en la nube y funcionalidades en pareja.</p>
              <p>Al usar Kipera, nos otorgas una licencia para usar tus datos únicamente para:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Proporcionar la funcionalidad principal de ahorro (check-ins, heatmaps, rachas, logros)</li>
                <li>Sincronizar datos entre dispositivos y con tu pareja (si aplica)</li>
                <li>Mejorar el servicio</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">7. Usos Prohibidos</h2>
              <p>Aceptas NO:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Violar cualquier ley o regulación aplicable</li>
                <li>Infringir los derechos de propiedad intelectual de terceros</li>
                <li>Compartir tus credenciales de cuenta con otras personas</li>
                <li>Usar sistemas automatizados (bots, scrapers) para acceder a la App</li>
                <li>Intentar eludir las funciones de seguridad o verificación de suscripción</li>
                <li>Interferir con el servicio o interrumpirlo</li>
                <li>Usar la App para actividades fraudulentas o ilícitas</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">8. Servicios de Terceros</h2>
              <p>Kipera utiliza los siguientes servicios de terceros:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Firebase (Google):</strong> Autenticación y notificaciones push</li>
                <li><strong>Supabase:</strong> Base de datos, autenticación y sincronización en tiempo real</li>
                <li><strong>RevenueCat:</strong> Gestión de suscripciones</li>
                <li><strong>Apple App Store / Google Play:</strong> Procesamiento de pagos</li>
              </ul>
              <p>Tu uso de estos servicios está sujeto a sus respectivos términos y políticas de privacidad.</p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">9. Privacidad y Protección de Datos</h2>
              <p>Tu privacidad es importante. Consulta nuestra <Link to="/privacy" className="text-black underline decoration-black/30">Política de Privacidad</Link> para entender cómo recopilamos, usamos y protegemos tus datos.</p>
              <p><strong>Puntos clave:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Los datos de ahorro se almacenan localmente y se sincronizan con Supabase para respaldo</li>
                <li>La información de pago es manejada exclusivamente por Apple/Google</li>
                <li>No vendemos tus datos a terceros</li>
                <li>No utilizamos analytics ni tracking SDKs</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">10. Disponibilidad del Servicio</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Nos esforzamos por proporcionar un servicio confiable pero no garantizamos acceso ininterrumpido</li>
                <li>Podemos realizar mantenimiento que afecte temporalmente la disponibilidad</li>
                <li>Nos reservamos el derecho de modificar o descontinuar funciones con aviso razonable</li>
                <li>Podemos suspender o terminar cuentas que violen estos Términos</li>
              </ul>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">11. Descargo de Garantías</h2>
              <p><strong>LA APP SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO.</strong></p>
              <p>Renunciamos a todas las garantías, expresas o implícitas, incluyendo:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Garantías de comerciabilidad</li>
                <li>Idoneidad para un propósito particular</li>
                <li>No infracción</li>
                <li>Precisión, confiabilidad o integridad del contenido</li>
              </ul>
              <p>No garantizamos que:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>La App esté libre de errores o sea ininterrumpida</li>
                <li>Los defectos serán corregidos</li>
                <li>La App esté libre de virus o componentes dañinos</li>
              </ul>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">12. Limitación de Responsabilidad</h2>
              <p><strong>HASTA EL MÁXIMO PERMITIDO POR LA LEY:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Nuestra responsabilidad total se limita al monto que pagaste en los últimos 12 meses, o $50 USD, lo que sea menor</li>
                <li>NO somos responsables por daños indirectos, incidentales, consecuentes, punitivos o especiales</li>
                <li>NO somos responsables por pérdida de datos, ganancias, ingresos u oportunidades de negocio</li>
                <li>NO somos responsables por acciones de servicios de terceros (Google, Apple, RevenueCat, Supabase)</li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">13. Indemnización</h2>
              <p>Aceptas indemnizar y mantener indemne a Kipera, Hans Leonel Jurado Muñoz, Samuel Mauricio Laime y nuestros afiliados de cualquier reclamo, daño, responsabilidad y gasto que surja de:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Tu violación de estos Términos</li>
                <li>Tu uso de la App</li>
                <li>Contenido que proporciones o generes</li>
                <li>Tu violación de los derechos de cualquier tercero</li>
              </ul>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">14. Requisitos de Edad</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Debes tener al menos <strong>13 años</strong> para usar Kipera (17+ en algunas regiones)</li>
                <li>Si eres menor de 18, debes tener consentimiento parental o del tutor</li>
                <li>Cumplimos con COPPA (Ley de Protección de Privacidad Infantil en Línea de EE.UU.)</li>
              </ul>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">15. Modificaciones a los Términos</h2>
              <p>Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Los cambios serán efectivos:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Cambios importantes:</strong> 30 días después de la notificación por correo o notificación en la App</li>
                <li><strong>Cambios menores:</strong> Inmediatamente después de su publicación</li>
              </ul>
              <p>El uso continuado de la App después de que los cambios entren en vigencia constituye la aceptación de los Términos actualizados.</p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">16. Modificaciones al Servicio y Precios</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Podemos modificar funciones, funcionalidades o precios con aviso razonable</li>
                <li>Los cambios de precio para suscripciones existentes se comunicarán con al menos 30 días de anticipación</li>
                <li>Puedes cancelar si no estás de acuerdo con los cambios de precio</li>
              </ul>
            </section>

            {/* 17 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">17. Terminación</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">17.1 Por Ti</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Cancelar suscripción a través de la configuración de tu cuenta de iTunes</li>
                <li>Solicitar la eliminación de tu cuenta en <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">17.2 Por Nosotros</h3>
              <p>Podemos suspender o terminar tu cuenta si:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Violas estos Términos</li>
                <li>Realizas actividades fraudulentas</li>
                <li>Usas la App de manera que dañe a otros o al servicio</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">17.3 Efectos de la Terminación</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Tu licencia para usar la App termina inmediatamente</li>
                <li>Debes dejar de usar la App</li>
                <li>Los datos locales en tu dispositivo no se eliminan automáticamente</li>
                <li>No hay reembolsos por tiempo de suscripción no utilizado (a menos que lo exija la ley)</li>
              </ul>
            </section>

            {/* 18 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">18. Ley Aplicable y Resolución de Disputas</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">18.1 Ley Aplicable</h3>
              <p>Estos Términos se rigen por las leyes de <strong>Perú (Lima)</strong>, sin considerar principios de conflicto de leyes.</p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">18.2 Resolución de Disputas</h3>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li><strong>Resolución Informal:</strong> Contáctanos en <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a> para resolver disputas de manera informal</li>
                <li><strong>Período de Negociación:</strong> Permite 30 días para negociación de buena fe</li>
                <li><strong>Arbitraje:</strong> Si la resolución informal falla, las disputas se resolverán mediante arbitraje vinculante en Lima, Perú</li>
                <li><strong>Renuncia a Demanda Colectiva:</strong> Aceptas resolver disputas individualmente, no como parte de una demanda colectiva</li>
              </ol>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">18.3 Jurisdicción</h3>
              <p>Jurisdicción exclusiva para cualquier disputa: Tribunales de Lima, Perú</p>
            </section>

            {/* 19 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">19. Divisibilidad</h2>
              <p>Si alguna disposición de estos Términos se considera inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto.</p>
            </section>

            {/* 20 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">20. Acuerdo Completo</h2>
              <p>Estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre tú y Kipera con respecto al uso de la App y reemplazan cualquier acuerdo anterior.</p>
            </section>

            {/* 21 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">21. Contacto</h2>
              <p>Para preguntas, inquietudes o solicitudes relacionadas con estos Términos:</p>
              <p className="bg-white/30 p-4 rounded-xl">
                <strong>Hans Leonel Jurado Muñoz & Samuel Mauricio Laime</strong><br />
                Lima, Perú<br />
                Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
                Tiempo de respuesta: Dentro de 7 días hábiles
              </p>
            </section>

            {/* 22 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">22. Términos Específicos para Apple</h2>
              <p>Si descargaste Kipera desde la App Store de Apple:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Estos Términos son entre tú y Kipera, no con Apple</li>
                <li>Apple no tiene obligación de proporcionar soporte para la App</li>
                <li>Apple no es responsable de la App ni de su contenido</li>
                <li>Apple es un beneficiario tercero de estos Términos</li>
                <li>Debes cumplir con los Términos de Servicio de la App Store de Apple</li>
              </ul>
            </section>

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
