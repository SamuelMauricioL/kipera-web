import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, CalendarCheck, Award } from 'lucide-react';

const features = [
  {
    title: "8 Métodos de Ahorro",
    desc: "Desde el clásico monto fijo diario hasta métodos progresivos, semanales, sobres aleatorios y multiplicadores. Elige el que mejor se adapte a tu ritmo.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-white/40"
  },
  {
    title: "Check-in Diario",
    desc: "Registra tu ahorro cada día y construye rachas. Visualiza tu consistencia con un heatmap tipo GitHub que muestra exactamente cuándo ahorraste.",
    icon: <CalendarCheck className="w-6 h-6" />,
    color: "bg-white/20"
  },
  {
    title: "Logros y Rachas",
    desc: "15 logros que premian tu constancia: rachas de 7, 14, 30 y 100 días, hitos de progreso al 25%, 50%, 75% y 100%, y metas de ahorro total.",
    icon: <Award className="w-6 h-6" />,
    color: "bg-black/10"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-20 py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${f.color} backdrop-blur-md rounded-[2rem] p-10 border border-white/10 flex flex-col justify-between min-h-[320px]`}
          >
            <div className="bg-white/90 p-3 rounded-2xl w-fit shadow-sm text-black">
              {f.icon}
            </div>
            <div>
              <h3 className="text-2xl font-serif text-black mb-3">{f.title}</h3>
              <p className="text-black/60 font-sans text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
