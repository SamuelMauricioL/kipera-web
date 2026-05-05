import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const duration = 8000; // 8 seconds for a longer cinematic breath
  const fadeDuration = 500; // 0.5s as requested

  useEffect(() => {
    let requestRef: number;
    
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const cycleTime = elapsed % duration;

      let opacity = 1;
      if (cycleTime < fadeDuration) {
        // Fade in over 0.5s at the start
        opacity = cycleTime / fadeDuration;
      } else if (cycleTime > duration - fadeDuration) {
        // Fade out over 0.5s before the end
        opacity = (duration - cycleTime) / fadeDuration;
      } else {
        opacity = 1;
      }

      setBgOpacity(opacity);
      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  const imageUrl = "https://lh3.googleusercontent.com/d/1MSl2wAWWDgifQP1JGapkuCv55C9xUJQv";

  return (
    <div id="hero-container" className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#D9AE71]">
      <div 
        id="bg-image-layer"
        className="absolute z-0 pointer-events-none w-full md:w-[70%] right-0 h-full"
        style={{ 
          top: '400px', // Pushed down further to avoid overlapping with headline on mobile
          opacity: bgOpacity,
        }}
      >
        <img 
          src={imageUrl}
          alt="Atmospheric Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          referrerPolicy="no-referrer"
        />
        
        {/* Artistic Flair Overlay: Horizontal and Vertical Fades to background */}
        <div 
          className="absolute inset-0 z-10 bg-gradient-to-b from-[#D9AE71] via-transparent via-50% to-[#D9AE71] pointer-events-none"
        />
        <div 
          className="absolute inset-x-0 inset-y-0 z-10 bg-gradient-to-r from-[#D9AE71] via-transparent via-30% to-transparent pointer-events-none"
        />
        
        {/* Stronger diffusion at the bottom to hide legs cut */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#D9AE71] to-transparent z-20 pointer-events-none" />
        
        {/* Minimal dot grid for texture */}
        <div 
          className="absolute inset-0 z-10 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 0.5px, transparent 0.5px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div 
        id="hero-content" 
        className="relative z-20 w-full px-8 md:px-16 flex flex-col items-start text-left max-w-7xl mx-auto pt-40 md:pt-60 pb-32" 
      >
        <div className="animate-fade-rise flex items-center space-x-2 mb-6">
          <div className="w-12 h-[1px] bg-black/30"></div>
          <span className="text-[12px] uppercase tracking-[0.2em] text-black/60 font-sans">Ahorro inteligente en pareja</span>
        </div>

        <h1 
          id="hero-headline"
          className="animate-fade-rise font-serif font-normal text-6xl sm:text-8xl md:text-[120px] max-w-5xl text-black tracking-[-0.04em] leading-[0.85] mb-12"
        >
          Construyan su <br />
          <span className="italic text-black/40">Futuro.</span>
        </h1>

        <div className="animate-fade-rise-delay flex flex-col items-start justify-between w-full space-y-8">
          <p 
            id="hero-description"
            className="font-sans text-lg md:text-xl max-w-lg leading-relaxed text-black/70"
          >
            Transforma el ahorro diario en un hábito divertido con métodos
            personalizados, rachas gamificadas y metas compartidas en pareja.
            Cada día cuenta.
          </p>

          <motion.button
            id="hero-cta"
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
