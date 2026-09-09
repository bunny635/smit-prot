import React from 'react';
import { motion } from 'framer-motion';

/**
 * AchievementHero — Ceremonial Header for Achievement Gallery / Hall of Legends
 * Faithfully implements Stitch achievement_gallery_hall_of_legends visual hierarchy:
 * - Ceremonial Rank Pill: "RANK: LEAD ARCHITECT" flanked by military sigils
 * - Bodoni Moda display headline: "HALL OF LEGENDS"
 * - JetBrains Mono technical breadcrumb & sector metadata
 * - Tactical counters: Unlocked artifacts, verified feats, total XP valuation
 */
export function AchievementHero({
  totalCount = 8,
  unlockedCount = 7,
  verifiedCount = 6,
  totalXP = 3850,
  reducedMotion = false,
}) {
  return (
    <header className="relative w-full border-b border-outline-variant/30 pb-6 md:pb-8 select-none flex flex-col items-center text-center">
      {/* Decorative Atmospheric Depth Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 md:w-[600px] h-48 md:h-72 bg-primary/[0.05] rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Sector Breadcrumb Telemetry */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-5 text-left">
        <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase">
          <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
          <span>SECTOR: SEC-08 // NODE-28</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-on-surface-variant">HALL OF LEGENDS</span>
        </div>

        <div className="flex items-center gap-4 font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
          <span>ARCHIVIST_01 // VERIFIED HONORS</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-outline">SIGIL VAULT</span>
        </div>
      </div>

      {/* Ceremonial Rank Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.4 }}
        className="inline-flex items-center gap-3.5 mb-4 border border-primary/30 px-6 py-2 bg-surface-container-lowest/80 backdrop-blur-sm rounded-DEFAULT shadow-gold-glow-subtle"
      >
        <span className="material-symbols-outlined text-primary text-[18px]">military_tech</span>
        <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
          RANK: LEAD ARCHITECT
        </span>
        <span className="material-symbols-outlined text-primary text-[18px]">military_tech</span>
      </motion.div>

      {/* Main Display Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.5, delay: 0.1 }}
        className="font-display-hero text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-on-surface leading-tight tracking-tight md:tracking-normal drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase"
      >
        HALL OF <span className="text-primary font-bold">LEGENDS</span>
      </motion.h1>

      {/* Narrative Subtitle */}
      <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant max-w-xl mx-auto mt-3 leading-relaxed">
        Physical representations of digital milestones and verified engineering feats. Select an artifact to decrypt its metadata and inspect architectural evidence.
      </p>

      {/* Tactical Telemetry Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 w-full max-w-4xl font-meta-technical text-[11px]">
        <div className="px-4 py-2.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface flex flex-col items-center">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">UNLOCKED SIGILS</span>
          <span className="text-primary font-bold text-base mt-0.5">{unlockedCount} / {totalCount}</span>
        </div>

        <div className="px-4 py-2.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface flex flex-col items-center">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">VERIFIED ARTIFACTS</span>
          <span className="text-primary-fixed font-bold text-base mt-0.5">{verifiedCount} FEATS</span>
        </div>

        <div className="px-4 py-2.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface flex flex-col items-center">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">PROGRESSION TIER</span>
          <span className="text-on-surface font-bold text-base mt-0.5">TIER 5 // MASTER</span>
        </div>

        <div className="px-4 py-2.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface flex flex-col items-center">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">TOTAL XP VALUATION</span>
          <span className="text-secondary font-bold text-base mt-0.5">+{totalXP} XP</span>
        </div>
      </div>
    </header>
  );
}

export default AchievementHero;
