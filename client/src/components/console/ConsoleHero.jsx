import React from 'react';
import { motion } from 'framer-motion';

/**
 * ConsoleHero — Monolithic Header for System Console / Terminal Core
 * Implements Aethelgard & Stitch terminal visual hierarchy:
 * - Bodoni Moda editorial title: "SYSTEM CONSOLE"
 * - JetBrains Mono technical breadcrumb & sector metadata
 * - Tactical telemetry tags: "SECTOR: SEC-09 // NODE-32", "SYSTEM: ONLINE", "ACCESS: ARCHIVIST"
 */
export function ConsoleHero({
  systemStatus = 'ONLINE',
  accessLevel = 'ARCHIVIST_01',
  reducedMotion = false,
}) {
  return (
    <header className="relative w-full border-b border-outline-variant/30 pb-6 md:pb-8 select-none">
      {/* Decorative Atmospheric Depth Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-10 left-0 w-72 md:w-96 h-48 md:h-72 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Sector Breadcrumb Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase">
          <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
          <span>SECTOR: SEC-09 // NODE-32</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-on-surface-variant">SYSTEM CONSOLE</span>
        </div>

        <div className="flex items-center gap-4 font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
          <span>ACCESS: {accessLevel}</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-outline">SYSTEM: {systemStatus}</span>
        </div>
      </div>

      {/* Main Display Headline */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.5 }}
          >
            <div className="font-meta-technical text-[11px] text-primary/70 tracking-[0.3em] uppercase mb-2">
              SEC_09 // TERMINAL_CORE
            </div>
            <h1 className="font-display-hero text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] text-on-surface leading-tight tracking-tight md:tracking-normal drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] uppercase">
              SYSTEM <span className="text-primary font-bold">CONSOLE</span>
            </h1>
          </motion.div>

          <div className="border-l-2 border-primary/40 pl-4 mt-4">
            <p className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant/90 leading-relaxed max-w-2xl">
              The technical control matrix and simulated command core of SMIT QUEST. Query live databanks, execute archivist protocols, inspect route diagnostics, and traverse the digital universe.
            </p>
          </div>
        </div>

        {/* Tactical Status Pill */}
        <div className="flex items-center gap-3 font-meta-technical text-[11px] self-start md:self-end">
          <div className="px-3.5 py-1.5 bg-surface-container-lowest/80 border border-primary/40 rounded-DEFAULT text-on-surface flex items-center gap-2 shadow-gold-glow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>KERNEL: <strong className="text-primary font-bold">v9.4.2 [LIVE]</strong></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ConsoleHero;
