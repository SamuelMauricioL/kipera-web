import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const menuItems = [
  { name: 'Inicio', href: '#hero-container' },
  { name: 'Métodos', href: '#features' },
  { name: 'Onboarding', href: '#onboarding' },
  { name: 'Funciones', href: '#functions' },
  { name: 'Logros', href: '#achievements' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav
        className={`
          pointer-events-auto backdrop-blur-2xl border rounded-full px-6 py-3
          flex items-center transition-all duration-500
          ${scrolled
            ? 'bg-white/40 border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]'
            : 'bg-white/20 border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-white/30'
          }
        `}
      >
        <a href="#hero-container" className="text-xl tracking-tighter font-serif font-normal text-black flex items-center mr-8">
          Kipera<span className="text-[10px] ml-0.5 align-top">®</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.slice(1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[12px] uppercase tracking-widest font-sans transition-all duration-300 text-black/50 hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-8 bg-black text-white rounded-full px-5 py-2 text-[12px] font-sans font-medium transition-all"
        >
          Empezar
        </motion.button>
      </nav>
    </div>
  );
}
