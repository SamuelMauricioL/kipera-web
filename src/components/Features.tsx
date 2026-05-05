import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const methods = [
  {
    emoji: '📈',
    title: 'Progresivo',
    desc: 'Comienza con montos pequeños y aumenta gradualmente cada día. El método más popular para empezar sin presión.',
    isFree: true,
    icon: 'trending_up',
  },
  {
    emoji: '💰',
    title: 'Monto Fijo Diario',
    desc: 'Ahorra la misma cantidad todos los días. Simple, predecible y efectivo para construir el hábito.',
    isFree: true,
    icon: 'attach_money',
  },
  {
    emoji: '📅',
    title: 'Reto Semanal',
    desc: 'Metas semanales que se ajustan a tu ritmo. Ideal si prefieres pensar en semanas, no en días.',
    isFree: true,
    icon: 'calendar_month',
  },
  {
    emoji: '📉',
    title: 'Progresivo Inverso',
    desc: 'Empieza con montos altos y ve reduciéndolos. Aprovecha tu motivación inicial al máximo.',
    isFree: false,
    icon: 'trending_down',
  },
  {
    emoji: '🎲',
    title: 'Sobres Aleatorios',
    desc: 'Cada día un monto sorpresa. La emoción de no saber cuánto toca hace que ahorrar sea un juego.',
    isFree: false,
    icon: 'shuffle',
  },
  {
    emoji: '🚀',
    title: 'Multiplicador',
    desc: 'Define una base y un multiplicador. Cada día aumenta el factor, acelerando tu ahorro exponencialmente.',
    isFree: false,
    icon: 'rocket_launch',
  },
  {
    emoji: '📊',
    title: 'Pasos Quincenales',
    desc: 'Escalones de ahorro cada 15 días. Un balance entre constancia y variedad para no aburrirte.',
    isFree: false,
    icon: 'stacked_line_chart',
  },
  {
    emoji: '⚖️',
    title: 'Penalty',
    desc: 'Un monto extra cuando saltas un día. La leve presión positiva te mantiene en racha sin culpa.',
    isFree: false,
    icon: 'gavel',
  },
];

export default function Features() {
  const [filter, setFilter] = useState<'all' | 'free' | 'premium'>('all');

  const filtered = filter === 'all' ? methods : methods.filter(m => filter === 'free' ? m.isFree : !m.isFree);

  return (
    <section id="features" className="relative z-20 py-32 px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-black mb-6"
        >
          8 métodos de ahorro.
          <br />
          <span className="text-black/40 italic">Tú eliges cómo.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black/60 font-sans max-w-xl text-lg"
        >
          Desde métodos progresivos hasta desafíos semanales y sobres sorpresa.
          Cada método tiene su propia personalidad — encuentra el tuyo.
        </motion.p>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 mb-12">
        {(['all', 'free', 'premium'] as const).map(f => (
          <motion.button
            key={f}
            onClick={() => setFilter(f)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`
              px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-200
              ${filter === f
                ? 'bg-black text-white shadow-lg'
                : 'bg-white/30 backdrop-blur-sm border border-white/30 text-black/60 hover:bg-white/50'
              }
            `}
          >
            {f === 'all' ? 'Todos' : f === 'free' ? 'Gratis' : 'Kipera Plus'}
          </motion.button>
        ))}
      </div>

      {/* Methods grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((m, i) => (
            <motion.div
              key={m.title}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="relative bg-white/20 backdrop-blur-xl border border-white/20 rounded-[2rem] p-7 flex flex-col hover:bg-white/30 transition-all duration-300 min-h-[280px] group"
            >
              {/* Free/Premium badge */}
              {m.isFree ? (
                <span className="absolute top-4 right-4 bg-green-500/20 text-green-800 text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-green-500/20">
                  Gratis
                </span>
              ) : (
                <span className="absolute top-4 right-4 bg-purple-500/20 text-purple-800 text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  Kipera Plus
                </span>
              )}

              <div className="flex flex-col flex-1">
                <div className="mb-5">
                  <span className="text-4xl">{m.emoji}</span>
                </div>
                <h3 className="text-xl font-serif text-black mb-3">{m.title}</h3>
                <p className="text-black/60 font-sans text-sm leading-relaxed flex-1">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-6 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center gap-8 text-sm font-sans text-black/50"
      >
        <span>✨ <span className="font-medium">3 métodos gratis</span> incluidos en todas las cuentas</span>
        <span className="hidden sm:inline">·</span>
        <span>💎 <span className="font-medium">5 métodos premium</span> con Kipera Plus</span>
      </motion.div>
    </section>
  );
}
