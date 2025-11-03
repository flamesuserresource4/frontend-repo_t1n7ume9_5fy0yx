import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ theme, onToggleTheme }) => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden bg-[#0f0f11]">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Luxury red gradient overlay to enhance depth while keeping clarity */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f0f11]/20 via-[#9a2923]/20 to-[#0f0f11]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-16 md:pb-24 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        {/* Profile block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 rounded-full px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span className="text-xs tracking-wider uppercase">Personal CV</span>
          </div>

          <h1 className="font-['Oswald',ui-sans-serif] text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold text-white drop-shadow-md">
            Benedictus Richard Ricardo
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
            Results-driven and adaptable professional with leadership experience in student organizations, project management, and process optimization.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
            <a
              href="https://tr.ee/dictuzzcv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#9a2923] text-white px-5 py-3 font-medium shadow-lg shadow-[#9a2923]/30 hover:bg-[#821f1a] transition-colors"
            >
              Download CV (PDF)
            </a>
            <a
              href="https://www.linktr.ee/dictuzz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              Linktree
            </a>
          </div>

          {/* Contact quick links */}
          <div className="mt-5 text-white/90 text-sm space-y-1">
            <div>
              Phone: <a className="underline hover:text-white" href="https://tr.ee/dictuzzwa" target="_blank" rel="noreferrer">+6285186888630</a>
            </div>
            <div>
              Email: <a className="underline hover:text-white" href="mailto:cadrichardricardo@gmail.com">cadrichardricardo@gmail.com</a>
            </div>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9a2923] via-[#d4af37] to-white opacity-20 blur-2xl" />
            <img
              src="https://ibb.co.com/S4LmXmhq"
              alt="Benedictus Richard Ricardo"
              className="relative w-full h-full object-cover rounded-full border-2 border-[#d4af37]/80 shadow-xl"
              onError={(e) => {
                // Fallback if the provided link blocks hotlinking
                e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop';
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          className="relative inline-flex h-9 w-16 items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-1 transition-colors"
        >
          <span
            className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-md transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
          />
          <span className="sr-only">Theme toggle</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
