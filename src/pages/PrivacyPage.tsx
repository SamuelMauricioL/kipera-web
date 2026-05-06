import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#D9AE71] selection:bg-black selection:text-white">
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-serif text-5xl md:text-7xl text-black mb-4 leading-tight">Política de Privacidad</h1>
          <p className="font-sans text-sm text-black/50 mb-12">
            <strong>Fecha de vigencia:</strong> 5 de mayo, 2026 | <strong>Última actualización:</strong> 5 de mayo, 2026
          </p>

          <div className="space-y-6 text-black/80 font-sans text-sm leading-relaxed">
            <p>Bienvenido a Kipera. Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando usas la aplicación móvil Kipera ("App").</p>
            <p className="font-semibold text-black">Al usar Kipera, aceptas la recopilación y uso de información de acuerdo con esta Política de Privacidad.</p>

            {/* Quick Summary */}
            <div className="bg-white/30 border-l-4 border-black/50 p-5 rounded-r-xl my-8">
              <h3 className="font-serif text-lg text-black mb-3">Resumen Rápido</h3>
              <ul className="space-y-1.5">
                <li><strong>📊 Qué recopilamos:</strong> Datos de ahorro (metas, montos, rachas, check-ins), correo electrónico si creas una cuenta</li>
                <li><strong>🎯 Por qué lo recopilamos:</strong> Para proporcionar la funcionalidad principal de ahorro gamificado en pareja</li>
                <li><strong>🤝 Con quién lo compartimos:</strong> Supabase para almacenamiento en la nube y sincronización</li>
                <li><strong>✅ Tu consentimiento:</strong> Das permiso al crear una cuenta y usar la App</li>
                <li><strong>❌ Lo que NO recopilamos:</strong> Datos de ubicación, contactos, fotos, historial de navegación, analytics de uso</li>
                <li><strong>📧 Contacto:</strong> <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></li>
              </ul>
            </div>

            {/* 1 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">1. Información del Proveedor del Servicio</h2>
              <p>Kipera es operado por:</p>
              <p className="bg-white/30 p-4 rounded-xl">
                <strong>Hans Leonel Jurado Muñoz & Samuel Mauricio Laime</strong><br />
                Lima, Perú<br />
                Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a>
              </p>
              <p className="mt-3">Para consultas relacionadas con privacidad: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">2. Información que Recopilamos</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">2.1 Datos de Cuenta (Opcional)</h3>
              <p>Si decides crear una cuenta, recopilamos:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Nombre completo (opcional, desde Apple/Google Sign-In)</li>
                <li>Correo electrónico</li>
                <li>Nombre de usuario (elegido por ti)</li>
                <li>ID de usuario (autogenerado por Supabase)</li>
                <li>Credenciales de autenticación (si usas registro por correo/contraseña)</li>
                <li>Foto de perfil (opcional, desde Google Sign-In)</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">2.2 Datos de Ahorro</h3>
              <p>Cuando usas Kipera para ahorrar, procesamos:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Metas de ahorro:</strong> nombre, monto objetivo, método de ahorro, color, ícono, fecha de inicio</li>
                <li><strong>Check-ins diarios:</strong> montos ahorrados, fechas, método utilizado, día número de la racha</li>
                <li><strong>Rachas (streaks):</strong> días consecutivos de ahorro, hitos alcanzados</li>
                <li><strong>Logros:</strong> logros desbloqueados y fecha de desbloqueo</li>
                <li><strong>Datos de pareja:</strong> vinculación entre usuarios, progreso compartido, notificaciones de actividad</li>
                <li><strong>Preferencias de método:</strong> configuración del método de ahorro elegido (monto base, multiplicador, etc.)</li>
                <li>Zona horaria (para heatmap y recordatorios)</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">2.3 Datos Recopilados Automáticamente</h3>
              <p><strong>Actividad de la cuenta:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Fecha de creación de la cuenta</li>
                <li>Último inicio de sesión</li>
                <li>Proveedor de autenticación utilizado (correo, Apple o Google)</li>
                <li>Estado de suscripción (Kipera Plus activo o no)</li>
                <li>Tipo de suscripción (mensual o anual)</li>
                <li>Fecha de expiración de la suscripción</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">2.4 Almacenamiento Local (En Tu Dispositivo)</h3>
              <p>La siguiente información se almacena <strong>solo en tu dispositivo</strong> en una base de datos local y NO se transmite a nuestros servidores:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Historial completo de check-ins</li>
                <li>Datos del heatmap</li>
                <li>Datos de rachas calculadas localmente</li>
                <li>Borradores de metas no guardadas (eliminados automáticamente después de 2 días)</li>
                <li>Preferencias y configuración de la App</li>
              </ul>

              {/* What we DON'T collect */}
              <div className="bg-white/30 p-5 rounded-xl my-6">
                <h3 className="font-serif text-lg text-black mb-3">✅ Lo que NO recopilamos</h3>
                <ul className="space-y-1">
                  <li>• Modelo o fabricante del dispositivo</li>
                  <li>• Versión del sistema operativo para fines de tracking</li>
                  <li>• Identificadores únicos del dispositivo (IDFA, IDFV) para tracking</li>
                  <li>• Tiempo de uso en la App</li>
                  <li>• Analytics detallados o tracking de comportamiento</li>
                  <li>• Reportes de crash o errores</li>
                  <li>• Direcciones IP con fines de tracking</li>
                  <li>• Datos de ubicación (GPS)</li>
                  <li>• Contactos, fotos u otras apps en tu dispositivo</li>
                  <li>• Historial de navegación fuera de la App</li>
                </ul>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">3. Cómo Usamos tu Información</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">3.1 Para Proporcionar el Servicio de Ahorro</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Mostrar tu progreso:</strong> Visualizar metas, heatmaps, rachas, logros y estadísticas</li>
                <li><strong>Sincronización en pareja:</strong> Compartir el progreso con tu pareja cuando usas metas compartidas</li>
                <li><strong>Calcular rachas:</strong> Determinar días consecutivos de ahorro y desbloquear logros</li>
                <li><strong>Generar heatmap:</strong> Crear el mapa de calor de actividad con tus check-ins</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">3.2 Para Gestionar tu Cuenta</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Crear y mantener tu cuenta de usuario</li>
                <li>Autenticar tu identidad al iniciar sesión</li>
                <li>Recordar tus preferencias y configuración</li>
                <li>Verificar el estado de tu suscripción Kipera Plus</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">3.3 Para Notificaciones</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Enviar recordatorios diarios de check-in a la hora que elijas</li>
                <li>Notificar cuando tu pareja hace check-in</li>
                <li>Notificar cuando se alcanza un hito (25%, 50%, 75%, 100%)</li>
                <li>Notificar cuando tu pareja completa una meta</li>
                <li>Comunicar cambios importantes en el servicio o estos términos</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">3.4 Para Soporte y Seguridad</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Responder a tus solicitudes de soporte</li>
                <li>Solucionar problemas técnicos</li>
                <li>Proteger contra acceso no autorizado a tu cuenta</li>
                <li>Prevenir actividad fraudulenta en suscripciones</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <div className="bg-white/30 border-l-4 border-black/30 p-4 rounded-r-xl my-6">
                <p><strong>NO usamos tus datos para:</strong> publicidad, marketing dirigido, venta a terceros, tracking de comportamiento, entrenamiento de modelos de IA, ni elaboración de perfiles comerciales.</p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">4. Servicios de Terceros y Compartición de Datos</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.1 Supabase (Backend y Autenticación)</h3>
              <p><strong>Propósito:</strong> Autenticación de usuarios, gestión de cuentas, almacenamiento de datos y sincronización en tiempo real</p>
              <p><strong>Datos almacenados:</strong> Información de cuenta (correo, nombre, user ID), tokens de autenticación, datos de metas, check-ins, rachas y logros, estado de suscripción</p>
              <p><strong>Política de Privacidad:</strong> <a href="https://supabase.com/privacy" target="_blank" className="text-black underline decoration-black/30">supabase.com/privacy</a></p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.2 Firebase (Notificaciones)</h3>
              <p><strong>Propósito:</strong> Notificaciones push para recordatorios de check-in y actividad de pareja</p>
              <p><strong>Datos compartidos:</strong> Tokens de dispositivo para notificaciones push</p>
              <p><strong>Política de Privacidad:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" className="text-black underline decoration-black/30">firebase.google.com/support/privacy</a></p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.3 RevenueCat (Suscripciones)</h3>
              <p><strong>Propósito:</strong> Gestión de suscripciones in-app, verificación de compras y sincronización entre dispositivos</p>
              <p><strong>Datos compartidos:</strong> Tu Supabase User ID (identificador anónimo), estado y tipo de suscripción, recibos de compra de Apple/Google, información de plataforma (iOS/Android)</p>
              <p><strong>NO compartimos:</strong> Correo electrónico, nombre u otra información personal</p>
              <p><strong>Política de Privacidad:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" className="text-black underline decoration-black/30">revenuecat.com/privacy</a></p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.4 Apple Sign-In y Google Sign-In</h3>
              <p><strong>Apple Sign-In:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" className="text-black underline decoration-black/30">Apple Privacy Policy</a></p>
              <p><strong>Google Sign-In:</strong> <a href="https://policies.google.com/privacy" target="_blank" className="text-black underline decoration-black/30">Google Privacy Policy</a></p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">4.5 Apple App Store / Google Play (Pagos)</h3>
              <p><strong>Importante:</strong> Todo el procesamiento de pagos es manejado exclusivamente por Apple o Google. Nunca vemos ni almacenamos tu información de tarjeta de crédito.</p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">5. Cómo Almacenamos y Protegemos tus Datos</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">5.1 Almacenamiento</h3>
              <p><strong>Almacenamiento en la nube (Supabase):</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Información de cuenta y datos de perfil</li>
                <li>Datos de metas, check-ins y logros</li>
                <li>Cifrado en tránsito mediante TLS/SSL</li>
                <li>Cifrado en reposo con estándares de la industria</li>
              </ul>
              <p><strong>Almacenamiento local (tu dispositivo):</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Historial completo de check-ins y datos de heatmap</li>
                <li>Preferencias de la App</li>
                <li>NO se transmiten a nuestros servidores</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">5.2 Retención de Datos</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Datos de cuenta:</strong> Retenidos mientras tu cuenta esté activa; eliminados dentro de 30 días de la solicitud de eliminación</li>
                <li><strong>Datos de ahorro local:</strong> Las metas en borrador se eliminan después de 2 días; los datos guardados permanecen hasta que los elimines</li>
                <li><strong>RevenueCat:</strong> El historial de suscripciones puede retenerse para cumplimiento financiero/legal (generalmente 7 años)</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">5.3 Medidas de Seguridad</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>✅ Transmisión de datos cifrada (HTTPS/TLS 1.2+)</li>
                <li>✅ Protocolos de autenticación seguros (OAuth 2.0, JWT)</li>
                <li>✅ Hash de contraseñas (bcrypt para autenticación por correo/contraseña)</li>
                <li>✅ Controles de acceso y autenticación</li>
                <li>✅ Gestión segura de claves API</li>
              </ul>
              <p className="mt-3 text-black/50 italic">Sin embargo, ningún método de transmisión o almacenamiento es 100% seguro. Si bien nos esforzamos por proteger tus datos, no podemos garantizar una seguridad absoluta.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">6. Tus Derechos de Privacidad</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">6.1 Derechos Generales (Todos los Usuarios)</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
                <li><strong>Corrección:</strong> Solicitar la corrección de datos inexactos</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de tu cuenta y datos asociados</li>
                <li><strong>Exportación:</strong> Solicitar tus datos en formato JSON portátil</li>
              </ul>
              <p><strong>Cómo ejercer:</strong> Escríbenos a <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a> con el asunto correspondiente. Respondemos dentro de 30 días.</p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">6.2 Derechos GDPR (Residentes de la Unión Europea)</h3>
              <p><strong>Nota:</strong> Kipera actualmente no está disponible en la Unión Europea. Esta sección se proporciona con fines informativos para cuando expandamos a mercados de la UE.</p>
              <p>Los residentes de la UE tendrán derechos adicionales bajo el GDPR, incluyendo:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Derecho de Acceso</li>
                <li>Derecho de Rectificación</li>
                <li>Derecho al Olvido (Eliminación)</li>
                <li>Derecho a la Portabilidad de Datos</li>
                <li>Derecho a Presentar una Reclamación ante tu autoridad local de protección de datos</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">6.3 Derechos CCPA/CPRA (Residentes de California)</h3>
              <p><strong>Categorías de Información Personal Recopilada:</strong></p>
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white/30">
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Categoría</th>
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Ejemplos</th>
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">¿Recopilado?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black/10 p-3">Identificadores</td>
                      <td className="border border-black/10 p-3">Nombre, correo, nombre de usuario, user ID</td>
                      <td className="border border-black/10 p-3">✅ Sí</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Información Comercial</td>
                      <td className="border border-black/10 p-3">Estado de suscripción, historial de compras</td>
                      <td className="border border-black/10 p-3">✅ Sí</td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 p-3">Datos de Ahorro</td>
                      <td className="border border-black/10 p-3">Metas, montos, check-ins, rachas, logros</td>
                      <td className="border border-black/10 p-3">✅ Sí</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Actividad de Cuenta</td>
                      <td className="border border-black/10 p-3">Fechas de inicio de sesión, actualizaciones de perfil</td>
                      <td className="border border-black/10 p-3">✅ Sí</td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 p-3">Datos Biométricos</td>
                      <td className="border border-black/10 p-3">Huellas dactilares, reconocimiento facial</td>
                      <td className="border border-black/10 p-3">❌ No</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Geolocalización</td>
                      <td className="border border-black/10 p-3">Ubicación GPS precisa</td>
                      <td className="border border-black/10 p-3">❌ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/30 border-l-4 border-black/30 p-4 rounded-r-xl my-4">
                <p><strong>✅ NO VENDEMOS TU INFORMACIÓN PERSONAL A NADIE.</strong></p>
              </div>

              <p><strong>Categorías de Terceros con Quienes Compartimos:</strong></p>
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white/30">
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Tercero</th>
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Datos Compartidos</th>
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Propósito</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black/10 p-3">Supabase</td>
                      <td className="border border-black/10 p-3">Información de cuenta, datos de ahorro</td>
                      <td className="border border-black/10 p-3">Autenticación, almacenamiento, sincronización</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Firebase</td>
                      <td className="border border-black/10 p-3">Tokens de dispositivo</td>
                      <td className="border border-black/10 p-3">Notificaciones push</td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 p-3">RevenueCat</td>
                      <td className="border border-black/10 p-3">User ID, estado de suscripción</td>
                      <td className="border border-black/10 p-3">Gestión de suscripciones</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Apple / Google</td>
                      <td className="border border-black/10 p-3">Recibos de suscripción</td>
                      <td className="border border-black/10 p-3">Procesamiento de pagos</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p><strong>Tus derechos bajo CCPA:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Derecho a Saber (qué datos recopilamos en los últimos 12 meses)</li>
                <li>Derecho a Eliminar</li>
                <li>Derecho a Optar por No Vender (NO vendemos datos)</li>
                <li>Derecho a Corregir</li>
                <li>Derecho a No Discriminación</li>
              </ul>
              <p><strong>Cómo ejercer:</strong> Email a <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a> con asunto "Solicitud CCPA - [Access/Delete/Correct]". Tiempo de respuesta: 45 días.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">7. Privacidad Infantil</h2>
              <p>Kipera está dirigida a usuarios mayores de <strong>13 años</strong> (17+ en algunas regiones).</p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">7.1 Cumplimiento COPPA (EE.UU.)</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>No recopilamos datos de niños menores de 13 años a sabiendas</li>
                <li>No dirigimos el servicio a niños menores de 13 años</li>
                <li>No vendemos información de menores de 16 años</li>
              </ul>
              <p>Si descubrimos que hemos recopilado información de un niño menor de 13 años sin consentimiento parental verificado, eliminaremos esa información de inmediato.</p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">7.2 Aviso para Padres</h3>
              <p>Si eres padre o tutor y crees que tu hijo menor de 13 años nos ha proporcionado información personal:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Envíanos un correo inmediatamente a: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a></li>
                <li>Incluye el nombre de usuario o correo de tu hijo</li>
                <li>Eliminaremos la cuenta y todos los datos asociados dentro de 24 horas</li>
              </ol>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">8. Transferencias Internacionales de Datos</h2>
              <p>Kipera es operado desde Perú y atiende principalmente a usuarios en Estados Unidos y América Latina. Utilizamos servicios de terceros que pueden almacenar datos en varias ubicaciones:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Supabase:</strong> Almacena datos en regiones de EE.UU.</li>
                <li><strong>Firebase:</strong> Procesa notificaciones en infraestructura de Google en EE.UU.</li>
                <li><strong>RevenueCat:</strong> Almacena datos en EE.UU.</li>
              </ul>
              <p><strong>Medidas de protección:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Cumplimiento con leyes de protección de datos de EE.UU. (CCPA)</li>
                <li>Cumplimiento con leyes de protección de datos de América Latina</li>
                <li>Procesadores externos con medidas de protección de datos adecuadas</li>
                <li>Transmisión y almacenamiento de datos cifrados</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">9. Cookies y Tecnologías de Tracking</h2>
              <p>Kipera es una aplicación móvil y <strong>no utiliza cookies de navegador</strong>.</p>
              <p><strong>Lo que usamos:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Almacenamiento local (SQLite):</strong> Guardar tus datos de ahorro y preferencias en tu dispositivo</li>
                <li><strong>Gestión de sesiones:</strong> Tokens JWT almacenados de forma segura para mantener tu sesión iniciada</li>
              </ul>
              <p><strong>Lo que NO usamos:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>❌ SDKs de analytics (no Firebase Analytics, Amplitude, Mixpanel)</li>
                <li>❌ SDKs de publicidad</li>
                <li>❌ Huellas digitales del dispositivo para tracking</li>
                <li>❌ Identificadores de tracking entre aplicaciones</li>
              </ul>
              <div className="bg-white/30 border-l-4 border-black/30 p-4 rounded-r-xl my-4">
                <p><strong>Importante:</strong> Kipera NO solicita permiso de App Tracking porque no te rastreamos a través de aplicaciones o sitios web de otras empresas.</p>
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">10. Notificación de Fugas de Datos</h2>
              <p>En el improbable caso de una fuga de datos que afecte tu información personal:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li><strong>Investigación Inmediata:</strong> Evaluaremos el alcance y el impacto</li>
                <li><strong>Notificación:</strong> Te notificaremos dentro de <strong>72 horas</strong> de descubrir la fuga</li>
                <li><strong>Transparencia:</strong> Explicaremos qué sucedió, qué datos se vieron afectados y nuestra respuesta</li>
                <li><strong>Cumplimiento Regulatorio:</strong> Notificaremos a las autoridades relevantes según lo exija la ley</li>
                <li><strong>Orientación:</strong> Te proporcionaremos pasos que puedes seguir para protegerte</li>
              </ol>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">11. Cambios a esta Política de Privacidad</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">11.1 Notificación de Cambios</h3>
              <p><strong>Cambios importantes:</strong></p>
              <p>Te notificaremos al menos <strong>30 días</strong> antes de que los cambios importantes entren en vigencia a través de:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Correo electrónico a tu dirección registrada</li>
                <li>Notificación en la App</li>
                <li>Aviso destacado en esta página</li>
              </ul>
              <p><strong>Cambios no importantes:</strong> Las actualizaciones menores (correcciones tipográficas, aclaraciones, formato) pueden publicarse sin previo aviso.</p>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">11.2 Tu Aceptación</h3>
              <p>El uso continuado de Kipera después de que los cambios entren en vigencia constituye la aceptación de la Política de Privacidad actualizada. Si no estás de acuerdo con los cambios:</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Deja de usar la App</li>
                <li>Cancela tu suscripción (a través de la configuración de tu cuenta de iTunes)</li>
                <li>Solicita la eliminación de tu cuenta (correo a <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a>)</li>
              </ol>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">12. Tus Controles y Opciones</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">12.1 Gestión de Permisos</h3>
              <p><strong>Tú tienes el control de tus datos en todo momento:</strong></p>
              <div className="bg-white/30 border-l-4 border-green-600/50 p-4 rounded-r-xl my-4">
                <p><strong>✅ Consentimiento Explícito:</strong> Das permiso <strong>antes de compartir</strong> cualquier contenido. Kipera solo accede a los datos necesarios para el funcionamiento del servicio. Puedes denegar permisos en cualquier momento.</p>
              </div>
              <p><strong>Cómo gestionar permisos:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>iOS:</strong> Configuración → Kipera → Activar/desactivar permisos de Notificaciones</li>
                <li><strong>Revocación:</strong> Puedes revocar permisos en cualquier momento desde la configuración del sistema</li>
                <li><strong>Sin acceso automático:</strong> Nunca accedemos a tu contenido sin tu acción explícita</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">12.2 Configuración de la Cuenta (En la App)</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>✅ Actualizar tu información de perfil (nombre, correo)</li>
                <li>✅ Crear, modificar o eliminar metas de ahorro</li>
                <li>✅ Ver tu historial completo de check-ins</li>
                <li>✅ Gestionar preferencias de notificaciones</li>
                <li>✅ Ver estado de suscripción</li>
                <li>✅ Revocar permisos de contenido a través de la configuración del dispositivo</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">12.3 Eliminación de Datos</h3>
              <p><strong>Eliminar cuenta:</strong></p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Envía un correo a <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a> con asunto "Solicitud de Eliminación de Cuenta"</li>
                <li>Proporciona tu correo electrónico registrado</li>
                <li>Procesaremos la solicitud dentro de 30 días</li>
              </ol>
              <p><strong>Qué sucede:</strong></p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Tu cuenta y datos personales se eliminan de Supabase</li>
                <li>Los datos locales en tu dispositivo permanecen hasta que elimines la App</li>
                <li>Las suscripciones activas continúan hasta el final del período de facturación</li>
                <li>RevenueCat retiene el historial de suscripciones para cumplimiento (generalmente 7 años)</li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">13. Contacto</h2>
              <p>Para preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o tus datos personales:</p>

              <p className="bg-white/30 p-4 rounded-xl mt-4">
                <strong>Consultas Generales de Privacidad:</strong><br />
                Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
                Asunto: "Consulta de Privacidad"<br />
                Tiempo de respuesta: Dentro de 7 días hábiles
              </p>
              <p className="bg-white/30 p-4 rounded-xl mt-4">
                <strong>Solicitudes de Derechos de Privacidad (GDPR, CCPA, etc.):</strong><br />
                Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
                Asunto: "Solicitud de Derechos de Privacidad - [GDPR/CCPA] - [Acceso/Eliminación/Corrección]"<br />
                Tiempo de respuesta: Dentro de 30 días (GDPR) o 45 días (CCPA)
              </p>
              <p className="bg-white/30 p-4 rounded-xl mt-4">
                <strong>Eliminación de Cuenta:</strong><br />
                Correo: <a href="mailto:support@kipera.app" className="text-black underline decoration-black/30">support@kipera.app</a><br />
                Asunto: "Solicitud de Eliminación de Cuenta"<br />
                Procesado dentro de 30 días
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">14. Autoridad de Supervisión</h2>
              <p><strong>Para Residentes de la UE:</strong></p>
              <p>Si consideras que no hemos abordado adecuadamente tus inquietudes de privacidad, tienes derecho a presentar una reclamación ante tu autoridad local de protección de datos.</p>
              <p><strong>Encuentra tu autoridad de protección de datos:</strong> <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" className="text-black underline decoration-black/30">edpb.europa.eu</a></p>
            </section>

            {/* 15 — Summary */}
            <section>
              <h2 className="font-serif text-2xl text-black mt-10 mb-4 border-b border-black/10 pb-2">15. Resumen: Lo que Debes Saber</h2>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">✅ Qué SÍ Recopilamos</h3>
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white/30">
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Tipo de Dato</th>
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Propósito</th>
                      <th className="border border-black/10 p-3 text-left font-sans text-xs uppercase tracking-wider">Compartido Con</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black/10 p-3">Información de cuenta (correo, nombre, usuario)</td>
                      <td className="border border-black/10 p-3">Gestión de cuenta</td>
                      <td className="border border-black/10 p-3">Supabase</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Metas y check-ins de ahorro</td>
                      <td className="border border-black/10 p-3">Funcionalidad principal</td>
                      <td className="border border-black/10 p-3">Supabase</td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 p-3">Rachas y logros</td>
                      <td className="border border-black/10 p-3">Gamificación</td>
                      <td className="border border-black/10 p-3">Supabase</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="border border-black/10 p-3">Estado de suscripción</td>
                      <td className="border border-black/10 p-3">Acceso premium</td>
                      <td className="border border-black/10 p-3">RevenueCat</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">❌ Qué NO Recopilamos</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Información del dispositivo para tracking (modelo, SO, identificadores)</li>
                <li>Analytics de uso (tiempo en la App, funciones usadas)</li>
                <li>Reportes de crash o errores</li>
                <li>Datos de ubicación (GPS)</li>
                <li>Direcciones IP con fines de tracking</li>
                <li>Tus contactos u otras apps</li>
                <li>Historial de navegación</li>
              </ul>

              <h3 className="font-serif text-lg text-black mt-6 mb-3">🔒 Datos Clave de Privacidad</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  { icon: '💳', title: 'Pagos', desc: 'Manejados por Apple/Google — no vemos tu tarjeta' },
                  { icon: '📱', title: 'Datos locales', desc: 'Tu historial se guarda en tu dispositivo' },
                  { icon: '🔔', title: 'Notificaciones', desc: 'Solo para check-ins y actividad de pareja' },
                  { icon: '🚫', title: 'Sin anuncios', desc: 'No compartimos datos con anunciantes' },
                  { icon: '💰', title: 'Sin venta', desc: 'Nunca vendemos tus datos' },
                  { icon: '✅', title: 'Tus derechos', desc: 'Acceder, corregir, eliminar, exportar' },
                  { icon: '🔞', title: 'Edad mínima', desc: '13 años o más' },
                  { icon: '🔐', title: 'Cifrado', desc: 'Datos cifrados en tránsito y reposo' },
                ].map(item => (
                  <div key={item.title} className="bg-white/20 rounded-xl p-3 flex items-start gap-3">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-sans text-sm font-medium text-black">{item.title}</div>
                      <div className="font-sans text-xs text-black/50">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

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
