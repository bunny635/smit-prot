import React from 'react';
import { motion } from 'framer-motion';

/**
 * MemoryHero — Monolithic Header for Memory Valley / Journey Timeline
 * Directly implements Stitch Memory Valley visual hierarchy:
 * - Bodoni Moda editorial display headline: "MEMORY VALLEY"
 * - JetBrains Mono technical breadcrumb & chronological sector metadata
 * - Subtle ambient gold gradient line & atmospheric depth
 */
export function MemoryHero({ totalMilestones = 7, currentYear = '2024.04', reducedMotion = false }) {
  return (
    <header className="relative w-full border-b border-outline-variant/30 pb-6 md:pb-8 select-none">
      {/* Decorative Atmospheric Depth Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-64 md:w-96 h-64 md:h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Sector Breadcrumb Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
          <span>SECTOR: SEC-06 // NODE-20</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-on-surface-variant">MEMORY VALLEY</span>
        </div>

        <div className="flex items-center gap-4 font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
          <span>ARCHIVE STATE: CHRONOLOGICAL</span>
          <span className="text-outline-variant/60">//</span>
          <span>SYS.ID: ARCHIVIST_01</span>
        </div>
      </div>

      {/* Main Display Headline */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.5 }}
            className="font-display-hero text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-on-surface leading-none tracking-tight md:tracking-normal drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] uppercase"
          >
            MEMORY <span className="text-primary font-bold">VALLEY</span>
          </motion.h1>

          <div className="flex items-center gap-4 mt-4">
            <div className="h-px bg-gradient-to-r from-primary to-transparent w-16 sm:w-28 shadow-[0_0_8px_#d4af37]" />
            <p className="font-meta-technical text-[11px] sm:text-[12px] text-on-surface-variant tracking-[0.2em] uppercase font-medium">
              A Cinematic Landscape Timeline Charting the Digital Odyssey
            </p>
          </div>
        </div>

        {/* Tactical Status Pill */}
        <div className="flex items-center gap-3 font-meta-technical text-[11px] self-start md:self-end">
          <div className="px-3.5 py-1.5 bg-surface-container-lowest/80 border border-primary/40 rounded-DEFAULT text-on-surface flex items-center gap-2 shadow-gold-glow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>CURRENT: <strong className="text-primary font-bold">{currentYear}</strong></span>
          </div>
          <div className="px-3.5 py-1.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
            <span><strong className="text-primary font-bold">{totalMilestones}</strong> MILESTONES ETCHED</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MemoryHero;
