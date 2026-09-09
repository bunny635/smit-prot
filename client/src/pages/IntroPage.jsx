import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuestButton from '../components/ui/QuestButton';

/**
 * IntroPage — SMIT QUEST Initial Identity Screen ('/')
 * Establishes the digital archaeology atmosphere, monolithic typography,
 * and entry points to the World Hub.
 */
export function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-abyss text-on-surface flex flex-col justify-between p-6 md:p-margin-safe overflow-hidden bg-grid-pattern">
      {/* Ambient Atmospheric Light Beacons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Top Header Row: System Initializing & SKIP Link */}
      <header className="relative z-10 w-full flex items-center justify-between">
        <div className="flex items-center gap-3 font-meta-technical text-[11px] md:text-meta-technical text-on-surface-variant/80 tracking-[0.2em] uppercase">
          <span className="w-8 md:w-12 h-px bg-primary/40" />
          <span>SMIT QUEST v3.0 — INITIALIZING...</span>
        </div>

        {/* SKIP ↗ Navigation */}
        <Link
          to="/hub"
          className="group flex items-center gap-1.5 font-meta-technical text-[11px] md:text-meta-technical tracking-[0.2em] uppercase text-on-surface-variant/70 hover:text-primary transition-colors py-2 px-3 border border-outline-variant/30 hover:border-primary/50 bg-surface-container/30 backdrop-blur-sm rounded-DEFAULT"
        >
          <span>SKIP</span>
          <span className="text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </Link>
      </header>

      {/* Center Monolithic Identity Canvas */}
      <main className="relative z-10 my-auto py-12 flex flex-col items-start max-w-4xl">
        {/* Technical Decorator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container/50 border border-outline-variant/40 rounded-DEFAULT mb-6 font-meta-technical text-[10px] md:text-[11px] text-primary tracking-[0.25em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>ARCHIVAL CODEX // SECTOR 00</span>
        </motion.div>

        {/* Monolithic Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col select-none"
        >
          <h1 className="font-display-hero text-[64px] sm:text-[90px] md:text-[120px] leading-[0.9] text-primary tracking-tight drop-shadow-[0_0_25px_rgba(242,202,80,0.35)]">
            SMIT
          </h1>
          <h2 className="font-display-hero text-[56px] sm:text-[80px] md:text-[108px] leading-[0.9] text-on-surface tracking-tight mt-1">
            QUEST
          </h2>
        </motion.div>

        {/* Technical Sub-Identity Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 p-4 bg-surface-container/60 backdrop-blur-md border-l-2 border-primary/70 corner-brackets max-w-2xl"
        >
          <p className="font-meta-technical text-[12px] sm:text-meta-technical text-on-surface-variant tracking-[0.18em] uppercase leading-relaxed">
            A FULL STACK DEVELOPER PORTFOLIO
          </p>
          <p className="font-sans text-body-md text-on-surface-variant/80 mt-2 text-[14px] leading-relaxed">
            An ancient architectural construct preserving digital relics, legendary engineering quests, and full stack artifacts.
          </p>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          {/* ENTER WORLD CTA */}
          <QuestButton
            size="lg"
            icon="arrow_forward"
            iconPosition="right"
            onClick={() => navigate('/hub')}
          >
            ENTER WORLD
          </QuestButton>

          {/* System Online Status Indicator */}
          <div className="flex items-center gap-3 font-meta-technical text-meta-technical text-on-surface-variant/80 tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-[11px] uppercase">PLAYER 001 ● SYSTEM ONLINE</span>
          </div>
        </motion.div>
      </main>

      {/* Footer Technical Coordinates */}
      <footer className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-outline-variant/20 pt-4 font-meta-technical text-[10px] text-outline-variant/70 tracking-[0.2em] uppercase">
        <div>SYS.COORD: 34.0522° N, 118.2437° W</div>
        <div>EXPEDITION: DIGITAL ODYSSEY // PHASE 1 FOUNDATION</div>
      </footer>
    </div>
  );
}

export default IntroPage;
