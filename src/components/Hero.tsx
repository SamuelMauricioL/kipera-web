import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const goals = [
  { emoji: '✈️', label: 'Viajes', desc: 'Para ese viaje soñado en pareja' },
  { emoji: '🏠', label: 'Hogar', desc: 'Tu primer hogar o una renovación' },
  { emoji: '🎓', label: 'Educación', desc: 'Cursos, libros o un posgrado' },
  { emoji: '🎮', label: 'Diversión', desc: 'Consolas, conciertos, experiencias' },
  { emoji: '💰', label: 'Emergencia', desc: 'Fondo de emergencia financiera' },
  { emoji: '📱', label: 'Tecnología', desc: 'Gadgets y dispositivos nuevos' },
];

export default function Hero() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = 8000;
  const fadeDuration = 500;

  useEffect(() => {
    let requestRef: number;
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const cycleTime = elapsed % duration;
      let opacity = 1;
      if (cycleTime < fadeDuration) opacity = cycleTime / fadeDuration;
      else if (cycleTime > duration - fadeDuration) opacity = (duration - cycleTime) / fadeDuration;
      else opacity = 1;
      setBgOpacity(opacity);
      requestRef = requestAnimationFrame(animate);
    };
    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  const imageUrl = "https://lh3.googleusercontent.com/d/1MSl2wAWWDgifQP1JGapkuCv55C9xUJQv";

  return (
    <div id="hero-container" className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#D9AE71]">
      {/* Background image layer */}
      <div
        className="absolute z-0 pointer-events-none w-full md:w-[70%] right-0 h-full"
        style={{ top: '400px', opacity: bgOpacity }}
      >
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover z-0" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#D9AE71] via-transparent via-50% to-[#D9AE71] pointer-events-none" />
        <div className="absolute inset-x-0 inset-y-0 z-10 bg-gradient-to-r from-[#D9AE71] via-transparent via-30% to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#D9AE71] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-0 z-10 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 0.5px, transparent 0.5px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-20 w-full px-8 md:px-16 flex flex-col items-start text-left max-w-7xl mx-auto pt-36 md:pt-52 pb-20">
        <div className="animate-fade-rise flex items-center space-x-2 mb-6">
          <div className="w-12 h-[1px] bg-black/30"></div>
          <span className="text-[12px] uppercase tracking-[0.2em] text-black/60 font-sans">Ahorro inteligente en pareja</span>
        </div>

        <h1 className="animate-fade-rise font-serif font-normal text-6xl sm:text-8xl md:text-[120px] max-w-5xl text-black tracking-[-0.04em] leading-[0.85] mb-8">
          Ahorren juntos,
          <br />
          <span className="italic text-black/40">celebren en grande.</span>
        </h1>

        <div className="animate-fade-rise-delay flex flex-col items-start justify-between w-full space-y-8">
          <p className="font-sans text-lg md:text-xl max-w-lg leading-relaxed text-black/70">
            Elige tu meta, empieza con el método que más te guste, y deja que Kipera
            convierta el ahorro diario en un juego de pareja con rachas, logros y mucho ritmo.
          </p>

          {/* Interactive Goal Selector — inspired by the actual onboarding */}
          <div className="w-full max-w-2xl">
            <p className="font-sans text-sm uppercase tracking-widest text-black/50 mb-4">
              ¿Para qué quieres ahorrar?
            </p>
            <div className="flex flex-wrap gap-2.5">
              {goals.map((goal, i) => (
                <motion.button
                  key={goal.label}
                  onClick={() => setSelectedGoal(selectedGoal === i ? null : i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative px-4 py-2.5 rounded-2xl font-sans text-sm font-medium
                    transition-all duration-200
                    ${selectedGoal === i
                      ? 'bg-black/10 border-2 border-black/40 shadow-lg'
                      : 'bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/40'
                    }
                  `}
                >
                  <span className="mr-1.5">{goal.emoji}</span>
                  {goal.label}
                </motion.button>
              ))}
            </div>
            <AnimatePresence>
              {selectedGoal !== null && (
                <motion.p
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  className="mt-3 font-sans text-sm text-black/60 italic"
                >
                  {goals[selectedGoal].desc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white rounded-full px-12 py-5 text-base font-sans shadow-2xl transition-all"
          >
            Comenzar ahora
          </motion.button>
        </div>
      </div>
    </div>
  );
}
