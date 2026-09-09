import React from 'react';
import { motion } from 'framer-motion';

/**
 * OriginHero — Monolithic Identity Chamber Hero
 * Features:
 * - Sacred Geometry concentric diamond wireframes with gold inner glow & triangular sigil
 * - Editorial S . M . I . T monogram & DIGITAL BUILDER // ARCHIVIST_01 designation
 * - Dual architectural identity pillars (Full Stack Developer & UI/UX Spatial Craft)
 * - Environmental telemetry markers
 */
export function OriginHero({ reducedMotion = false }) {
  return (
    <section
      aria-label="Origin Tower Identity Core"
      className="relative w-full min-h-[560px] lg:min-h-[640px] flex flex-col justify-center items-center py-8 md:py-12 select-none overflow-hidden"
    >
      {/* Background Energy Conduits & Telemetry */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Ambient Radial Beacons */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[500px] h-[340px] md:h-[500px] bg-primary/[0.04] rounded-full blur-[100px]" />
        
        {/* Subtle Vertical Conduits */}
        <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="hidden lg:block absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

        {/* Ambient Coordinates */}
        <div className="absolute top-2 left-0 font-meta-technical text-[10px] text-primary/70 tracking-[0.2em] uppercase">
          LOC: ORIGIN_TOWER<br />
          SEC: ALPHA-01<br />
          SYS: ONLINE
        </div>
        <div className="absolute top-2 right-0 font-meta-technical text-[10px] text-primary/70 text-right tracking-[0.2em] uppercase">
          DEPTH: 0m<br />
          COORD: 15.0.5 // MONOLITH_ONE
        </div>
      </div>

      {/* Main Spatial Core & Dual Pillars */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-2">
        {/* Left Architectural Pillar: Full Stack Developer */}
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full lg:w-72 xl:w-80 aethel-glass aethel-rim-border corner-brackets p-5 md:p-6 flex flex-col justify-between gap-4 border-l-2 border-l-primary group hover:border-primary/60 transition-all duration-300"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>CORE ARCHITECTURE</span>
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-[22px] md:text-[24px] text-primary font-bold tracking-wide leading-tight group-hover:text-primary-fixed transition-colors">
              FULL STACK DEVELOPER
            </h2>
            <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-relaxed mt-1">
              Architecting robust digital foundations. From databases to modern APIs, ensuring structural integrity and end-to-end resilience.
            </p>
          </div>
          <div className="font-meta-technical text-[10px] text-primary/70 border-t border-outline-variant/30 pt-3 tracking-widest uppercase">
            SKILL_NODE: ACTIVE
          </div>
        </motion.article>

        {/* Center Main Sacred Geometry Relic & Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center justify-center my-6 lg:my-0 py-6"
        >
          {/* Sacred Geometry Concentric Diamond Wireframes */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center mb-6">
            {/* Outer Rotated Diamond */}
            <motion.div
              animate={reducedMotion ? {} : { rotate: [45, 45] }}
              className="absolute inset-0 border border-primary/25 rotate-45 transform-gpu shadow-gold-border-inset"
            />
            {/* Middle Counter-Rotated Diamond */}
            <motion.div
              animate={reducedMotion ? {} : { rotate: [-20, -20] }}
              className="absolute inset-3 border border-primary/40 -rotate-[20deg] transform-gpu"
            />
            {/* Inner Sacred Geometric Core */}
            <div className="absolute inset-8 sm:inset-10 bg-surface-container/60 border border-primary/50 backdrop-blur-md flex items-center justify-center shadow-gold-glow-subtle rotate-45">
              <span
                className="material-symbols-outlined text-primary text-4xl sm:text-5xl drop-shadow-[0_0_15px_rgba(242,202,80,0.8)] -rotate-45"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
              >
                change_history
              </span>
            </div>
            {/* Ambient Floating Glow Points */}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary shadow-gold-glow animate-pulse" />
            <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-secondary/80 shadow-gold-glow-subtle" />
          </div>

          {/* Editorial Monogram S . M . I . T */}
          <div className="flex flex-col items-center text-center">
            <h1 className="font-display-hero text-[42px] sm:text-[54px] md:text-[64px] text-primary tracking-tight leading-none drop-shadow-[0_0_20px_rgba(242,202,80,0.35)]">
              S . M . I . T
            </h1>
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-DEFAULT font-meta-technical text-[10px] md:text-[11px] text-primary tracking-[0.25em] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>DIGITAL BUILDER // ARCHIVIST_01</span>
            </div>
          </div>
        </motion.div>

        {/* Right Architectural Pillar: UI/UX & Spatial Craft */}
        <motion.article
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full lg:w-72 xl:w-80 aethel-glass aethel-rim-border corner-brackets p-5 md:p-6 flex flex-col justify-between gap-4 border-r-2 border-r-primary group hover:border-primary/60 transition-all duration-300 text-left lg:text-right"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center lg:justify-end gap-2 font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase">
              <span>INTERFACE CRAFT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-[22px] md:text-[24px] text-primary font-bold tracking-wide leading-tight group-hover:text-primary-fixed transition-colors">
              UI/UX & SPATIAL
            </h2>
            <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-relaxed mt-1">
              Crafting intuitive spatial interfaces. Forging editorial, high-precision web experiences that guide users through the digital odyssey.
            </p>
          </div>
          <div className="font-meta-technical text-[10px] text-primary/70 border-t border-outline-variant/30 pt-3 tracking-widest uppercase">
            INTERFACE_NODE: ACTIVE
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default OriginHero;
