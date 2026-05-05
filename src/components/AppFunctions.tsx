import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, LayoutGrid, BellRing, BarChart3, Sparkles, Smartphone, Users } from 'lucide-react';

const tabs = [
  { id: 'checkin', label: 'Check-in Diario', emoji: '✅' },
  { id: 'couple', label: 'Metas en Pareja', emoji: '👫' },
  { id: 'heatmap', label: 'Heatmap', emoji: '📊' },
  { id: 'stats', label: 'Estadísticas', emoji: '📈' },
];

export default function AppFunctions() {
  const [activeTab, setActiveTab] = useState('checkin');

  return (
    <section id="functions" className="relative z-20 py-32 px-8 bg-black/5 rounded-[3rem] max-w-7xl mx-auto mt-20">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-black mb-6"
        >
          Funciones que enamoran.
          <br />
          <span className="text-black/40 italic">Hasta ahorrar se vuelve adictivo.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black/60 font-sans max-w-xl text-lg"
        >
          Kipera no es solo una app de ahorro. Es un hábito diario gamificado con
          rachas, heatmaps, logros y progreso en tiempo real con tu pareja.
        </motion.p>
      </div>

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tabs.map(t => (
          <motion.button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`
              px-5 py-3 rounded-2xl font-sans text-sm transition-all duration-200 border
              ${activeTab === t.id
                ? 'bg-black text-white shadow-lg border-black'
                : 'bg-white/20 backdrop-blur-sm border-white/20 text-black/60 hover:bg-white/40'
              }
            `}
          >
            <span className="mr-2">{t.emoji}</span>
            {t.label}
          </motion.button>
        ))}
      </div>

      {/* Tab content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'checkin' && (
            <motion.div
              key="checkin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Check-in mock */}
              <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                    <span className="text-4xl">🐷</span>
                  </div>
                  <h3 className="font-serif text-2xl text-black mb-2">Ahorro del día</h3>
                  <p className="text-4xl font-bold font-sans text-purple-600 mb-1">$5.00</p>
                  <p className="text-sm font-sans text-black/40 mb-6">Día #12 · Método Progresivo</p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg">🔥</span>
                      <span className="font-sans font-bold text-black">12</span>
                      <span className="text-xs text-black/40">días</span>
                    </div>
                    <div className="w-px h-6 bg-black/10" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg">💰</span>
                      <span className="font-sans font-bold text-black">$78</span>
                      <span className="text-xs text-black/40">ahorrados</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-sans font-medium shadow-lg flex items-center gap-2"
                  >
                    <span>✅</span>
                    Marcar como ahorrado
                  </motion.button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <h4 className="font-serif text-lg text-black mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    Lo que pasa al hacer check-in
                  </h4>
                  <ul className="space-y-3 font-sans text-sm text-black/60">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">🔥</span>
                      <span>Tu racha crece y el heatmap se ilumina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">🏆</span>
                      <span>Puedes desbloquear logros automáticamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">🔔</span>
                      <span>Tu pareja recibe una notificación al instante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">📊</span>
                      <span>El widget de pantalla de inicio se actualiza</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BellRing className="w-5 h-5 text-black/60" />
                    <h4 className="font-serif text-lg text-black">Recordatorios inteligentes</h4>
                  </div>
                  <p className="font-sans text-sm text-black/50">
                    Recibe notificaciones push a la hora que elijas, según tu zona horaria.
                    Nunca se te pasará un check-in.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'couple' && (
            <motion.div
              key="couple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-purple-300 flex items-center justify-center text-white font-bold font-sans text-lg shadow-lg">
                    T
                  </div>
                  <HeartHandshake className="w-8 h-8 text-pink-500" />
                  <div className="w-14 h-14 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold font-sans text-lg shadow-lg">
                    P
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-black text-center mb-2">Viaje a Japón ✈️</h3>
                <p className="text-center font-sans text-sm text-black/40 mb-8">Meta en pareja · $5,000</p>

                {/* Two progress bars side by side */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-sans mb-1">
                      <span className="text-purple-700 font-medium">Tú</span>
                      <span className="text-black/50">$1,200 / $2,500</span>
                    </div>
                    <div className="h-2 bg-white/40 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '48%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-sans mb-1">
                      <span className="text-pink-700 font-medium">Pareja</span>
                      <span className="text-black/50">$980 / $2,500</span>
                    </div>
                    <div className="h-2 bg-white/40 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500 rounded-full" style={{ width: '39%' }} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/20 rounded-xl text-center">
                  <span className="font-sans text-xs text-black/50">
                    Progreso total: <span className="font-bold text-black">43%</span>
                    {' · '}Racha en pareja: <span className="font-bold text-black">🔥 8 días</span>
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <h4 className="font-serif text-lg text-black mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-600" />
                    ¿Cómo funciona?
                  </h4>
                  <ul className="space-y-3 font-sans text-sm text-black/60">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">📧</span>
                      <span>Invita a tu pareja por correo desde la app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">👀</span>
                      <span>Cada uno ve el progreso del otro en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">📊</span>
                      <span>Heatmaps de dos colores: violeta (tú) y rosa (pareja)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">🔔</span>
                      <span>Notificaciones cuando tu pareja ahorra, llega a un hito o completa la meta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">🎉</span>
                      <span>Celebren juntos cada milestone: 25%, 50%, 75%, 100%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'heatmap' && (
            <motion.div
              key="heatmap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-8">
                <h3 className="font-serif text-xl text-black mb-2">Activity Heatmap</h3>
                <p className="font-sans text-xs text-black/40 mb-6">Últimos 2 meses de actividad</p>

                {/* Month labels */}
                <div className="flex gap-1 mb-2 font-sans text-[10px] text-black/30">
                  {['Mar', 'Abr', 'May'].map(m => (
                    <span key={m} className="flex-1">{m}</span>
                  ))}
                </div>

                {/* Heatmap grid */}
                <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1 mb-4">
                  {Array.from({ length: 26 * 7 }).map((_, i) => {
                    const intensity = i % 5;
                    const isPartner = i % 7 === 0 || i % 11 === 0;
                    return (
                      <div
                        key={i}
                        className={`
                          aspect-square rounded-sm transition-colors duration-200
                          ${intensity === 0 ? 'bg-white/20' :
                            isPartner
                              ? ['bg-pink-200/40','bg-pink-300/50','bg-pink-400/60','bg-pink-500/70','bg-pink-600/80'][intensity - 1]
                              : ['bg-purple-200/40','bg-purple-300/50','bg-purple-400/60','bg-purple-500/70','bg-purple-600/80'][intensity - 1]
                          }
                        `}
                        title={isPartner ? 'Pareja' : 'Tú'}
                      />
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs font-sans text-black/40">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-purple-400/50" />
                    <span>Tú</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-pink-400/50" />
                    <span>Pareja</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <span>Menos</span>
                    {[0, 1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-3 h-3 rounded-sm ${i === 0 ? 'bg-white/20' : `bg-purple-${200 + i*100}/50`}`} />
                    ))}
                    <span>Más</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/20 rounded-xl">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-black/60">Tu racha actual:</span>
                    <span className="font-bold text-purple-600">🔥 12 días</span>
                    <span className="text-black/60">Pareja:</span>
                    <span className="font-bold text-pink-600">🔥 8 días</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <h4 className="font-serif text-lg text-black mb-3 flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-purple-600" />
                    Visualiza tu consistencia
                  </h4>
                  <p className="font-sans text-sm text-black/60 leading-relaxed">
                    El heatmap estilo GitHub muestra cada día que ahorraste. En metas de pareja,
                    el violeta eres tú y el rosa es tu compañero — así ven de un vistazo quién
                    está al día.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <h4 className="font-serif text-lg text-black mb-3">Streaks & Rachas</h4>
                  <ul className="space-y-2 font-sans text-sm text-black/60">
                    <li className="flex items-center gap-2">🔥 3 días → Streak Starter</li>
                    <li className="flex items-center gap-2">⚔️ 7 días → Weekly Warrior</li>
                    <li className="flex items-center gap-2">🏆 14 días → Biweekly Champion</li>
                    <li className="flex items-center gap-2">👑 30 días → Monthly Master</li>
                    <li className="flex items-center gap-2">💯 100 días → Centurion</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-8">
                <h3 className="font-serif text-xl text-black mb-6">Tu progreso en tiempo real</h3>

                {/* Progress ring mock */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="8" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * 0.43}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold font-sans text-purple-600">43%</span>
                      <span className="text-xs font-sans text-black/40">completado</span>
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Días ahorrando', value: '47' },
                    { label: 'Total ahorrado', value: '$2,180' },
                    { label: 'Racha actual', value: '🔥 12' },
                    { label: 'Logros', value: '🏆 5/15' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/20 rounded-xl p-3 text-center">
                      <div className="font-bold font-sans text-black text-lg">{s.value}</div>
                      <div className="font-sans text-[10px] text-black/40">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <h4 className="font-serif text-lg text-black mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-black/60" />
                    Datos que importan
                  </h4>
                  <ul className="space-y-3 font-sans text-sm text-black/60">
                    <li className="flex items-start gap-2">
                      <span>📊</span>
                      <span>Gráficos de barras con tu progreso semanal y mensual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>💜</span>
                      <span>Desglose de contribución individual en metas de pareja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>🔄</span>
                      <span>Sincronización offline-first con Supabase — nunca pierdes tu progreso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>📱</span>
                      <span>Widget en pantalla de inicio con tu meta y racha actual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>🌍</span>
                      <span>Soporte multi-zona horaria para parejas en diferentes husos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6">
                  <h4 className="font-serif text-lg text-black mb-3">Widget de pantalla de inicio</h4>
                  <div className="bg-black/5 rounded-xl p-4 flex items-center gap-4">
                    <Smartphone className="w-10 h-10 text-black/40" />
                    <div>
                      <p className="font-sans text-sm text-black/70 font-medium">Viaje a Japón ✈️</p>
                      <p className="font-sans text-xs text-black/40">$2,180 / $5,000 · 🔥 12 días</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
