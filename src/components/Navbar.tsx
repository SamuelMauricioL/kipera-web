import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const menuItems = [
    { name: 'Inicio', href: '#hero-container', active: true },
    { name: 'Funciones', href: '#features', active: false },
    { name: 'Cómo funciona', href: '#functions', active: false },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav 
        id="navbar" 
        className="pointer-events-auto bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full px-6 py-3 flex items-center space-x-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white/30"
      >
        <div id="logo" className="text-xl tracking-tighter font-serif font-normal text-black flex items-center">
          Kipera<span className="text-[10px] ml-0.5 align-top">®</span>
        </div>
        
        <div id="menu-items" className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              id={`nav-item-${item.name.toLowerCase().replace(' ', '-').replace('í', 'i')}`}
              href={item.href}
              className={`text-[12px] uppercase tracking-widest font-sans transition-all duration-300 ${
                item.active ? 'text-black font-semibold' : 'text-black/50 hover:text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.button
          id="cta-nav"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white rounded-full px-5 py-2 text-[12px] font-sans font-medium transition-all"
        >
          Empezar
        </motion.button>
      </nav>
    </div>
  );
}
