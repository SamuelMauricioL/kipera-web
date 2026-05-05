import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, LayoutGrid, BellRing, BarChart3 } from 'lucide-react';

const functions = [
  {
    title: "Metas en Pareja",
    desc: "Ahorren juntos hacia un objetivo común. Invita a tu pareja por correo, y cada uno registra su propio ahorro. Heatmaps de dos colores y notificaciones en tiempo real cuando tu pareja ahorra.",
    icon: <HeartHandshake className="w-8 h-8" />
  },
  {
    title: "Heatmap de Actividad",
    desc: "Visualiza tu progreso con un mapa de calor interactivo. Cada día completado se ilumina, y en metas de pareja ves dos colores distintos — tú y tu compañero — lado a lado.",
    icon: <LayoutGrid className="w-8 h-8" />
  },
  {
    title: "Notificaciones y Recordatorios",
    desc: "Recibe recordatorios diarios a la hora que elijas para no saltarte ningún ahorro. Notificaciones push cuando tu pareja hace check-in, alcanza un hito o completa una meta.",
    icon: <BellRing className="w-8 h-8" />
  },
  {
    title: "Estadísticas en Tiempo Real",
    desc: "Gráficos de barras, anillos de progreso y desglose de contribución individual. Sincronización offline-first con Supabase para que nunca pierdas tu progreso.",
    icon: <BarChart3 className="w-8 h-8" />
  }
];

export default function AppFunctions() {
  return (
    <section id="functions" className="relative z-20 py-32 px-8 max-w-7xl mx-auto bg-black/5 rounded-[3rem] mt-20">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-serif text-black mb-6">Funciones pensadas <br />para los dos.</h2>
        <p className="text-black/60 font-sans max-w-xl text-lg">
          Kipera no es solo una app de ahorro; es un hábito diario gamificado que convierte el ahorro en un juego en pareja, con logros, rachas y estadísticas en tiempo real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {functions.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="text-black mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-serif text-black mb-4">{f.title}</h3>
            <p className="text-black/60 font-sans text-sm leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
