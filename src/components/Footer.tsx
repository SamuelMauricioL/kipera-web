import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-20 py-20 px-8 border-t border-black/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-black/40 text-[10px] uppercase tracking-widest font-sans">
      <div className="flex items-center space-x-12 mb-8 md:mb-0">
        <span>© 2025 Kipera App</span>
        <Link to="/privacy" className="hover:text-black transition-colors">Privacidad</Link>
        <Link to="/terms" className="hover:text-black transition-colors">Términos</Link>
      </div>
      <div className="flex space-x-8">
        <a href="#" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">Instagram</a>
        <a href="#" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">Twitter/X</a>
        <a href="#" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">LinkedIn</a>
      </div>
    </footer>
  );
}
