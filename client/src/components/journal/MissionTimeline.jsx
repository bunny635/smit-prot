import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MissionEntry from './MissionEntry';
import QuestButton from '../ui/QuestButton';

/**
 * MissionTimeline — Central Expedition Timeline Container
 * Features:
 * - Structural energy rail linking consecutive mission records
 * - Gold milestone markers
 * - AnimatePresence transitions for filtered entries
 * - Access older records trigger
 */
export function MissionTimeline({
  missions = [],
  onResetFilters,
  reducedMotion = false,
}) {
  if (missions.length === 0) {
    return (
      <div className="w-full py-16 px-6 aethel-glass aethel-rim-border corner-brackets flex flex-col items-center justify-center gap-4 text-center select-none">
        <span className="material-symbols-outlined text-outline-variant text-[48px]">
          manage_search
        </span>
        <div className="font-display-hero text-[20px] text-on-surface">
          No Expeditions Match Active Filter
        </div>
        <p className="font-sans text-[13px] text-on-surface-variant max-w-md">
          Adjust the status filter or clear your search query to inspect recorded expedition logs.
        </p>
        {onResetFilters && (
          <QuestButton
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="mt-2"
          >
            RESET EXPEDITION FILTERS
          </QuestButton>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col gap-6 select-none">
      {/* Structural Central Energy Line Background Guide (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden xl:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-outline-variant/20 to-transparent pointer-events-none"
      />

      {/* Mission Entry List */}
      <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.4,
                delay: reducedMotion ? 0 : index * 0.08,
              }}
            >
              <MissionEntry
                mission={mission}
                isExpandedDefault={mission.status === 'ACTIVE'}
                reducedMotion={reducedMotion}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Older Records / Archive Pagination Footer */}
      <div className="flex flex-col items-center justify-center gap-3 pt-6 border-t border-outline-variant/20 mt-4">
        <div className="flex items-center gap-2 font-meta-technical text-[10px] text-outline-variant uppercase tracking-widest">
          <span>ARCHIVE INDEX: COMPLETE</span>
          <span>//</span>
          <span>ALL {missions.length} CURRENT EXPEDITIONS LOADED</span>
        </div>
      </div>
    </div>
  );
}

export default MissionTimeline;
