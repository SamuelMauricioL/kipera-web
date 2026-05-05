import React from 'react';
import { motion } from 'motion/react';

export default function WidgetShowcase() {
  return (
    <section id="widgets" className="relative z-20 py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-black mb-6"
        >
          Tu progreso,
          <br />
          <span className="text-black/40 italic">siempre visible.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black/60 font-sans max-w-xl text-lg"
        >
          Los widgets de Kipera llevan tu meta y tu racha directo a la pantalla de inicio.
          Sin abrir la app, un vistazo y sabes cómo vas.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Widget 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group"
        >
          <div className="relative bg-white/15 backdrop-blur-xl rounded-[2rem] border border-white/20 p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/25 hover:scale-[1.02]">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <img
              src="/images/kipera-widget-1.jpg"
              alt="Widget Kipera - Vista general"
              className="w-full h-auto rounded-2xl relative z-10 shadow-sm"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center font-sans text-xs text-black/40 tracking-wide">
            Widget de meta principal
          </p>
        </motion.div>

        {/* Widget 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group mt-8 md:mt-0"
        >
          <div className="relative bg-white/15 backdrop-blur-xl rounded-[2rem] border border-white/20 p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/25 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <img
              src="/images/kipera-widget-2.jpg"
              alt="Widget Kipera - Rachas y progreso"
              className="w-full h-auto rounded-2xl relative z-10 shadow-sm"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center font-sans text-xs text-black/40 tracking-wide">
            Widget de rachas y check-in
          </p>
        </motion.div>

        {/* Widget 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group mt-16 md:mt-0"
        >
          <div className="relative bg-white/15 backdrop-blur-xl rounded-[2rem] border border-white/20 p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/25 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <img
              src="/images/kipera-widget-3.jpg"
              alt="Widget Kipera - Meta en pareja"
              className="w-full h-auto rounded-2xl relative z-10 shadow-sm"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center font-sans text-xs text-black/40 tracking-wide">
            Widget de meta compartida
          </p>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute -top-10 left-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
