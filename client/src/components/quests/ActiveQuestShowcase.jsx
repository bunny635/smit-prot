import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MissionDifficulty from '../ui/MissionDifficulty';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';

/**
 * ActiveQuestShowcase — Monolithic Featured Quest Highlight
 * Matches the primary Stitch desktop reference:
 * Left: Project Identity & Subtitle
 * Center: Floating Monolithic Holographic Artifact
 * Right: Relic Card with Difficulty, XP, Architecture Nodes, & Core Access
 */
export function ActiveQuestShowcase({ quest, onInspect }) {
  const navigate = useNavigate();

  if (!quest) return null;

  const handleAccess = () => {
    if (onInspect) {
      onInspect(quest);
    } else {
      navigate(`/quests/${quest.slug || quest.id}`);
    }
  };

  return (
    <section
      aria-label="Active Featured Quest"
      className="relative w-full py-8 md:py-12 border border-primary/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.1)] before:absolute before:inset-0 before:bg-gradient-to-t before:from-background before:to-transparent before:z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/stitch/backgrounds/project-arena-bg.webp')` }}
    >
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center px-4 sm:px-8">
        {/* =========================================================================
            LEFT COLUMN: IDENTITY & MISSION CLASSIFICATION
            ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col items-start gap-6 order-1 lg:order-1">
          <div className="relative pl-0 lg:pl-5">
            {/* 1px Vertical Accent Rail */}
            <div className="hidden lg:block absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="flex items-center gap-2 mb-2">
              <span className="font-meta-technical text-[10px] text-primary/80 tracking-[0.25em] uppercase font-bold">
                FEATURED MISSION // {quest.questNumber}
              </span>
            </div>

            <h1 className="font-display-hero text-[42px] sm:text-[56px] lg:text-[68px] text-on-surface leading-[1.05] tracking-tight uppercase drop-shadow-2xl">
              {quest.title}
            </h1>

            <p className="font-meta-technical text-meta-technical text-on-surface-variant mt-4 max-w-[320px] leading-relaxed tracking-wider uppercase">
              {quest.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={quest.status} size="md" />
            <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-widest">
              SECTOR CLASSIFICATION: {quest.category}
            </span>
          </div>

          <p className="font-sans text-body-md text-on-surface-variant max-w-md leading-relaxed hidden sm:block">
            {quest.description}
          </p>
        </div>

        {/* =========================================================================
            CENTER COLUMN: THE FLOATING RELIC ARTIFACT
            ========================================================================= */}
        <div className="lg:col-span-4 flex justify-center items-center order-2 lg:order-2 py-4 lg:py-0">
          <div className="relative w-64 sm:w-72 h-80 sm:h-96 group">
            {/* Ambient Gold Halo Aura */}
            <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/30 transition-all duration-700 pointer-events-none" />

            {/* Monolithic Artifact Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full h-full aethel-glass aethel-rim-border corner-brackets rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-between p-6"
            >
              {/* Subtle Tech Grid Lines Overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-25"
                style={{
                  backgroundImage:
                    'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Artifact Top Status */}
              <div className="relative z-20 w-full flex items-center justify-between font-meta-technical text-[9px] text-primary/80 tracking-widest uppercase">
                <span>ARTIFACT // CORE_01</span>
                <span>SYNC 99.4%</span>
              </div>

              {/* Center Monolithic Icon & Geometric Core */}
              <div className="relative z-20 flex flex-col items-center justify-center my-auto">
                <div className="relative flex items-center justify-center w-28 h-28 rounded-full border border-primary/40 bg-surface-container/60 shadow-gold-glow">
                  {/* Outer Pulsing Orbit */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-30" />
                  <span
                    className="material-symbols-outlined text-[56px] text-primary drop-shadow-[0_0_15px_rgba(242,202,80,0.8)] fill"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    rocket_launch
                  </span>
                </div>
                <span className="font-meta-technical text-[10px] text-primary font-bold tracking-[0.25em] uppercase mt-4">
                  {quest.questNumber} // {quest.title}
                </span>
                <span className="font-meta-technical text-[9px] text-outline-variant tracking-wider mt-1">
                  ACTIVE MATRIX STABLE
                </span>
              </div>

              {/* Artifact Bottom Coordinate Stamp */}
              <div className="relative z-20 w-full flex items-center justify-between font-meta-technical text-[9px] text-outline-variant border-t border-outline-variant/30 pt-3">
                <span>COORD: {quest.coordinates}</span>
                <span className="text-primary font-semibold">+{quest.xpReward} XP</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: QUEST TELEMETRY RELIC CARD
            ========================================================================= */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end order-3 lg:order-3 w-full">
          <div className="relative w-full max-w-sm border-l-2 border-primary bg-[#181818]/80 backdrop-blur-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl corner-brackets">
            {/* Top Right Coordinates */}
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
              <span className="font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold">
                MISSION LOG
              </span>
              <span className="font-meta-technical text-[9px] text-on-surface-variant/60 tracking-wider">
                {quest.coordinates}
              </span>
            </div>

            {/* Mission Log Header */}
            <div>
              <h3 className="font-headline-lg-mobile text-[28px] sm:text-[32px] text-on-surface font-semibold tracking-wide">
                {quest.questNumber}
              </h3>
              <p className="font-sans text-[13px] text-on-surface-variant mt-1 leading-snug">
                {quest.title} — {quest.subtitle}
              </p>
            </div>

            <div className="w-full h-px bg-outline-variant/30" />

            {/* Difficulty & XP Reward Metrics */}
            <div className="flex flex-col gap-4">
              {/* Difficulty */}
              <div>
                <p className="font-meta-technical text-[10px] text-on-surface-variant/80 tracking-widest uppercase mb-1.5">
                  MISSION DIFFICULTY
                </p>
                <MissionDifficulty level={quest.difficulty} size="md" />
              </div>

              {/* XP Reward */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent group-hover:h-10 transition-all duration-300" />
                <div>
                  <p className="font-meta-technical text-[10px] text-on-surface-variant/80 tracking-widest uppercase mb-0.5">
                    EXPEDITION REWARD
                  </p>
                  <p className="font-quest-stat text-quest-stat text-primary group-hover:scale-105 transition-transform origin-left font-bold">
                    XP +{quest.xpReward}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-outline-variant/30" />

            {/* System Architecture */}
            <div>
              <p className="font-meta-technical text-[10px] text-on-surface-variant/80 tracking-widest uppercase mb-2.5">
                SYSTEM ARCHITECTURE
              </p>
              <div className="flex flex-wrap gap-2">
                {quest.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 border border-outline-variant/50 bg-surface-container-lowest/60 font-meta-technical text-[10px] text-on-surface hover:border-primary hover:text-primary transition-colors cursor-crosshair rounded-DEFAULT"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <QuestButton
              variant="solid"
              size="md"
              icon="arrow_forward"
              iconPosition="right"
              onClick={handleAccess}
              className="w-full mt-2"
            >
              ACCESS CORE
            </QuestButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveQuestShowcase;
