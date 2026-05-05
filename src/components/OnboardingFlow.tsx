import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    title: '¿Para qué ahorrar?',
    subtitle: 'Elige tu meta',
    emoji: '🎯',
    color: 'bg-purple-500/10 border-purple-500/20',
    textColor: 'text-purple-700',
    content: (
      <div className="space-y-3">
        {[
          { emoji: '✈️', label: 'Viajes' },
          { emoji: '🏠', label: 'Hogar' },
          { emoji: '🎓', label: 'Educación' },
          { emoji: '🎮', label: 'Diversión' },
          { emoji: '💰', label: 'Emergencia' },
          { emoji: '📱', label: 'Tecnología' },
        ].map((g) => (
          <div key={g.label} className="flex items-center gap-3 px-4 py-3 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30">
            <span className="text-lg">{g.emoji}</span>
            <span className="font-sans text-sm font-medium text-black/70">{g.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Elige tu método',
    subtitle: '¿Cómo quieres ahorrar?',
    emoji: '📊',
    color: 'bg-pink-500/10 border-pink-500/20',
    textColor: 'text-pink-700',
    content: (
      <div className="space-y-3">
        {[
          { emoji: '📈', label: 'Progresivo', badge: 'Gratis' },
          { emoji: '💰', label: 'Monto Fijo', badge: 'Gratis' },
          { emoji: '📅', label: 'Reto Semanal', badge: 'Gratis' },
          { emoji: '🚀', label: 'Multiplicador', badge: 'Plus' },
        ].map((m) => (
          <div key={m.label} className="flex items-center justify-between px-4 py-3 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30">
            <div className="flex items-center gap-3">
              <span className="text-lg">{m.emoji}</span>
              <span className="font-sans text-sm font-medium text-black/70">{m.label}</span>
            </div>
            <span className={`text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              m.badge === 'Gratis'
                ? 'bg-green-500/20 text-green-700 border border-green-500/20'
                : 'bg-purple-500/20 text-purple-700 border border-purple-500/20'
            }`}>
              {m.badge}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Sigue tu progreso',
    subtitle: 'Rachas, heatmaps y logros',
    emoji: '🔥',
    color: 'bg-amber-500/10 border-amber-500/20',
    textColor: 'text-amber-700',
    content: (
      <div className="space-y-4">
        {/* Mini heatmap preview */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 p-4">
          <p className="font-sans text-xs uppercase tracking-wider text-black/50 mb-3">Heatmap de Actividad</p>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 7 * 8 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm ${
                  i % 3 === 0 ? 'bg-purple-300/60' :
                  i % 5 === 0 ? 'bg-pink-300/60' :
                  i % 7 === 0 ? 'bg-purple-500/40' :
                  'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Achievement previews */}
        <div className="flex gap-2">
          {['🔥 7 días', '🏆 Meta 25%', '⭐ 100 ahorrados'].map(a => (
            <div key={a} className="px-3 py-2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 font-sans text-xs text-black/60">
              {a}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section id="onboarding" className="relative z-20 py-32 px-8 bg-black/5 rounded-[3rem] max-w-7xl mx-auto mt-20">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-black mb-6"
        >
          Empieza en 3 pasos.
          <br />
          <span className="text-black/40 italic">Así de simple.</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, i) => (
          <motion.button
            key={step.title}
            onClick={() => setCurrentStep(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              text-left p-6 rounded-[1.5rem] backdrop-blur-xl border transition-all duration-300
              ${currentStep === i
                ? `${step.color} shadow-lg`
                : 'bg-white/10 border-white/10 hover:bg-white/20'
              }
            `}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-sans
                ${currentStep === i
                  ? 'bg-black text-white'
                  : 'bg-black/10 text-black/50'
                }
              `}>
                {i + 1}
              </span>
              <span className="text-2xl">{step.emoji}</span>
            </div>
            <h3 className={`font-serif text-xl mb-1 ${currentStep === i ? 'text-black' : 'text-black/60'}`}>
              {step.title}
            </h3>
            <p className="font-sans text-xs text-black/40">{step.subtitle}</p>
          </motion.button>
        ))}
      </div>

      {/* Step content */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto"
          >
            <div className="p-6 bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/20">
              {steps[currentStep].content}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${currentStep === i ? 'w-8 bg-black' : 'w-2 bg-black/20'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
