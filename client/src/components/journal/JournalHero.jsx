import React from 'react';
import { motion } from 'framer-motion';

/**
 * JournalHero — Monolithic Header for Quest Journal / Mission Expedition Log
 * Implements Stitch visual hierarchy:
 * - Bodoni Moda editorial title: "QUEST JOURNAL"
 * - Gold energy separator rule
 * - JetBrains Mono technical breadcrumb & metadata
 * - Atmospheric background energy diffusion
 */
export function JournalHero({ totalCount = 4, activeCount = 1, reducedMotion = false }) {
  return (
    <header className="relative w-full border-b border-outline-variant/30 pb-6 md:pb-8 select-none">
      {/* Decorative atmospheric diffusion */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-64 md:w-96 h-64 md:h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Sector Telemetry Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
          <span>SECTOR: SEC-04 // NODE-12</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-on-surface-variant">MISSION EXPEDITION LOG</span>
        </div>

        <div className="flex items-center gap-4 font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
          <span>ARCHIVE STATUS: ACTIVE</span>
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
            className="font-display-hero text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-primary leading-none tracking-tight md:tracking-normal drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] uppercase"
          >
            QUEST JOURNAL
          </motion.h1>

          <div className="flex items-center gap-4 mt-4">
            <div className="h-px bg-primary w-12 sm:w-20 shadow-[0_0_8px_#d4af37]" />
            <p className="font-meta-technical text-[11px] sm:text-[12px] text-on-surface-variant tracking-[0.2em] uppercase font-medium">
              Archive of Completed & Active Engineering Expeditions
            </p>
          </div>
        </div>

        {/* Tactical Status Pill */}
        <div className="flex items-center gap-3 font-meta-technical text-[11px] self-start md:self-end">
          <div className="px-3.5 py-1.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span><strong className="text-primary font-bold">{activeCount}</strong> ACTIVE EXPEDITION</span>
          </div>
          <div className="px-3.5 py-1.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
            <span><strong className="text-primary font-bold">{totalCount}</strong> TOTAL ARCHIVED</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default JournalHero;
