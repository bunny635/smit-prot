import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import MemoryEntry from './MemoryEntry';
import QuestButton from '../ui/QuestButton';

/**
 * MemoryTimeline — Central Journey Timeline Container
 * Features:
 * - Continuous structural gold energy path linking consecutive chronological milestones
 * - Alternating asymmetric composition (left/right on desktop, vertical stack on mobile)
 * - Concluding "The Next Quest // 2025+ Horizon Odyssey" portal terminal
 * - Empty state with filter reset action
 */
export function MemoryTimeline({
  milestones = [],
  onSelectMilestone,
  onResetFilters,
  reducedMotion = false,
}) {
  if (milestones.length === 0) {
    return (
      <div className="w-full py-16 px-6 aethel-glass aethel-rim-border corner-brackets flex flex-col items-center justify-center gap-4 text-center select-none">
        <span className="material-symbols-outlined text-outline-variant text-[48px]">
          history_toggle_off
        </span>
        <div className="font-display-hero text-[22px] text-on-surface">
          No Timeline Milestones Found
        </div>
        <p className="font-sans text-[13px] text-on-surface-variant max-w-md">
          Adjust the category filter or search query to inspect recorded milestones along the Memory Valley.
        </p>
        {onResetFilters && (
          <QuestButton
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="mt-2"
          >
            RESET TIMELINE FILTERS
          </QuestButton>
        )}
      </div>
    );
  }

  // Check if horizon milestone (2025+) is in current list
  const standardMilestones = milestones.filter((m) => m.category !== 'HORIZON');
  const horizonMilestone = milestones.find((m) => m.category === 'HORIZON');

  return (
    <div className="relative w-full flex flex-col gap-12 sm:gap-16 select-none">
      {/* Structural Central Energy Line Background Guide */}
      {/* 1. Mobile Left Guide */}
      <div
        aria-hidden="true"
        className="md:hidden absolute left-0 top-8 bottom-32 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary/10 shadow-[0_0_8px_rgba(242,202,80,0.4)] pointer-events-none"
      />

      {/* 2. Desktop Center Guide */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-44 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 shadow-[0_0_12px_rgba(242,202,80,0.4)] pointer-events-none"
      />

      {/* Milestone List */}
      <div className="flex flex-col gap-10 sm:gap-14 relative z-10">
        <AnimatePresence mode="popLayout">
          {standardMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.4,
                delay: reducedMotion ? 0 : index * 0.07,
              }}
            >
              <MemoryEntry
                milestone={milestone}
                index={index}
                isLeft={index % 2 === 0}
                onSelect={onSelectMilestone}
                reducedMotion={reducedMotion}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Concluding Terminal Horizon Portal Node */}
      {horizonMilestone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.5, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center justify-center text-center mt-6 pt-10 border-t border-outline-variant/30"
        >
          {/* Centered Portal Ring */}
          <div className="relative w-20 h-20 rounded-full border-2 border-primary border-dashed animate-spin-slow flex items-center justify-center mb-6 shadow-gold-glow">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-md" />
            <span
              className="material-symbols-outlined text-primary text-[32px] z-10"
              aria-hidden="true"
            >
              change_history
            </span>
          </div>

          <div className="font-meta-technical text-primary text-2xl sm:text-3xl font-bold tracking-widest mb-2 drop-shadow-[0_0_15px_rgba(242,202,80,0.5)]">
            {horizonMilestone.date}
          </div>

          <h3 className="font-display-hero text-[26px] sm:text-[34px] md:text-[40px] text-on-surface font-bold mb-3">
            {horizonMilestone.title}
          </h3>

          <p className="font-sans text-[14px] sm:text-[15px] text-on-surface-variant max-w-lg leading-relaxed mb-6">
            {horizonMilestone.summary}
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-surface-container-lowest/80 border border-primary/40 rounded-DEFAULT font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase shadow-gold-glow-subtle mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>THE NEXT QUEST IS STILL BEING WRITTEN</span>
          </div>

          <QuestButton
            variant="solid"
            size="md"
            icon="visibility"
            iconPosition="left"
            onClick={() => onSelectMilestone && onSelectMilestone(horizonMilestone)}
          >
            INSPECT HORIZON ODYSSEY // SYS.LOG
          </QuestButton>
        </motion.div>
      )}

      {/* Archive Traversal Status */}
      <div className="flex flex-col items-center justify-center gap-2 pt-6 text-center">
        <div className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-widest">
          CHRONOLOGICAL REGISTRY: 2023 — 2025+ // ALL {milestones.length} MILESTONES SYNCHRONIZED
        </div>
      </div>
    </div>
  );
}

export default MemoryTimeline;
