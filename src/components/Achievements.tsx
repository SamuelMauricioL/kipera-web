import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const achievements = [
  { key: 'firstStep', icon: '⭐', title: 'First Step', desc: 'Tu primer ahorro', category: 'streak' },
  { key: 'streak3', icon: '🔥', title: 'Streak Starter', desc: '3 días seguidos', category: 'streak' },
  { key: 'weeklyWarrior', icon: '⚔️', title: 'Weekly Warrior', desc: '7 días seguidos', category: 'streak' },
  { key: 'biweeklyChampion', icon: '🏆', title: 'Biweekly Champion', desc: '14 días seguidos', category: 'streak' },
  { key: 'monthlyMaster', icon: '👑', title: 'Monthly Master', desc: '30 días seguidos', category: 'streak' },
  { key: 'centurion', icon: '💯', title: 'Centurion', desc: '100 días de racha', category: 'streak' },
  { key: 'quarterWay', icon: '🌱', title: 'Quarter Way', desc: 'Llegaste al 25% de tu meta', category: 'milestone' },
  { key: 'halfWay', icon: '🌿', title: 'Halfway There', desc: '50% de tu meta alcanzado', category: 'milestone' },
  { key: 'almostThere', icon: '🌳', title: 'Almost There', desc: 'Llegaste al 75%', category: 'milestone' },
  { key: 'goalAchieved', icon: '🎯', title: 'Goal Crusher', desc: 'Meta completada al 100%', category: 'milestone' },
  { key: 'club100', icon: '💵', title: '$100 Club', desc: 'Ahorraste $100 en total', category: 'savings' },
  { key: 'club1000', icon: '💎', title: '$1K Club', desc: 'Ahorraste $1,000 acumulados', category: 'savings' },
  { key: 'perfectWeek', icon: '📅', title: 'Perfect Week', desc: 'Ahorraste cada día de la semana', category: 'consistency' },
  { key: 'perfectMonth', icon: '📆', title: 'Perfect Month', desc: 'Ahorraste todos los días del mes', category: 'consistency' },
  { key: 'comeback', icon: '🔄', title: 'The Comeback', desc: 'Volviste después de saltar un día', category: 'consistency' },
];

const categories = [
  { id: 'all', label: 'Todos', color: 'bg-black/10 text-black' },
  { id: 'streak', label: '🔥 Rachas', color: 'bg-orange-500/10 text-orange-700' },
  { id: 'milestone', label: '🎯 Metas', color: 'bg-green-500/10 text-green-700' },
  { id: 'savings', label: '💰 Ahorro', color: 'bg-blue-500/10 text-blue-700' },
  { id: 'consistency', label: '📆 Constancia', color: 'bg-purple-500/10 text-purple-700' },
];

export default function Achievements() {
  const [category, setCategory] = useState('all');
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const filtered = category === 'all'
    ? achievements
    : achievements.filter(a => a.category === category);

  return (
    <section id="achievements" className="relative z-20 py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-black mb-6"
        >
          15 logros por descubrir.
          <br />
          <span className="text-black/40 italic">¿Cuántos puedes desbloquear?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black/60 font-sans max-w-xl text-lg"
        >
          Cada racha, cada hito, cada dólar ahorrado cuenta. Kipera celebra cada paso
          con logros que hacen del ahorro un juego adictivo.
        </motion.p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(c => (
          <motion.button
            key={c.id}
            onClick={() => setCategory(c.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`
              px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-200
              ${category === c.id
                ? `${c.color} shadow-md border border-black/5`
                : 'bg-white/20 backdrop-blur-sm border border-white/20 text-black/50 hover:bg-white/40'
              }
            `}
          >
            {c.label}
          </motion.button>
        ))}
      </div>

      {/* Achievements grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((a, i) => {
            const isHovered = hoveredKey === a.key;
            return (
              <motion.div
                key={a.key}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onMouseEnter={() => setHoveredKey(a.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className={`
                  relative p-5 rounded-2xl backdrop-blur-xl border text-center
                  transition-all duration-300 cursor-default
                  ${isHovered
                    ? 'bg-white/40 border-white/40 shadow-lg scale-105'
                    : 'bg-white/10 border-white/10 hover:bg-white/20'
                  }
                `}
              >
                <span className="text-3xl block mb-2">{a.icon}</span>
                <h4 className={`font-serif text-sm font-medium mb-1 transition-colors ${isHovered ? 'text-black' : 'text-black/70'}`}>
                  {a.title}
                </h4>
                <AnimatePresence>
                  {isHovered && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="font-sans text-[10px] text-black/50 leading-tight overflow-hidden"
                    >
                      {a.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
                {/* Locked indicator */}
                <div className="absolute top-2 right-2">
                  <span className="text-[10px] opacity-40">🔒</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Unlocked preview hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-block p-4 rounded-2xl bg-white/10 border border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <span className="font-sans text-sm text-black/50">
              Los logros se desbloquean automáticamente al alcanzar cada hito.
              <br />
              <span className="text-black/30">¡Sin trampas, solo constancia!</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
