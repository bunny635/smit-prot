import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperimentCard from './ExperimentCard';
import QuestButton from '../ui/QuestButton';

/**
 * ExperimentArchive — Matrix / Bento Grid of Research Prototypes
 * Features:
 * - Responsive grid of ExperimentCard items
 * - AnimatePresence transition for dynamic filtering
 * - Tactical empty state with filter reset action
 */
export function ExperimentArchive({
  experiments = [],
  selectedExperiment = null,
  onInspect,
  onResetFilters,
  reducedMotion = false,
}) {
  if (experiments.length === 0) {
    return (
      <div className="w-full py-16 px-6 aethel-glass aethel-rim-border corner-brackets flex flex-col items-center justify-center gap-4 text-center select-none">
        <span className="material-symbols-outlined text-outline-variant text-[48px]">
          search_off
        </span>
        <div className="font-display-hero text-[20px] text-on-surface">
          No Classified Experiments Match Filter
        </div>
        <p className="font-sans text-[13px] text-on-surface-variant max-w-md">
          Adjust the category or status filter, or clear your search query to inspect recorded research prototypes.
        </p>
        {onResetFilters && (
          <QuestButton
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="mt-2"
          >
            RESET LAB FILTERS
          </QuestButton>
        )}
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 select-none">
      <AnimatePresence mode="popLayout">
        {experiments.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.35,
              delay: reducedMotion ? 0 : index * 0.06,
            }}
          >
            <ExperimentCard
              experiment={exp}
              onInspect={onInspect}
              isSelected={selectedExperiment?.id === exp.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ExperimentArchive;
