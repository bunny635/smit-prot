import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import MissionDifficulty from '../ui/MissionDifficulty';
import QuestButton from '../ui/QuestButton';

/**
 * ExperimentDetailPanel — Holographic Experiment Inspector
 * Directly implements Stitch lab_log_experiment_detail visual structure:
 * - Holographic display frame with corner brackets
 * - Purpose & Concept / Objective readout
 * - Core Technology stack list
 * - Preliminary Results / Result status readout with technical telemetry
 * - Action buttons with verified related quest links and external repository
 */
export function ExperimentDetailPanel({
  experiment,
  isOpen = false,
  onClose,
  reducedMotion = false,
}) {
  const navigate = useNavigate();

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose && onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!experiment) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="experiment-detail-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-abyss/85 backdrop-blur-xl"
        >
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto aethel-glass border border-primary/40 corner-brackets p-6 sm:p-8 rounded-DEFAULT shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col gap-6"
          >
            {/* 1. Header Bar: Code, Status & Close Button */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>EXPERIMENT_RECORD // {experiment.code}</span>
                  <span className="text-outline-variant/60">//</span>
                  <span className="text-on-surface-variant">{experiment.category}</span>
                </div>
                <h2
                  id="experiment-detail-title"
                  className="font-display-hero text-[24px] sm:text-[30px] md:text-[34px] text-on-surface font-bold leading-tight"
                >
                  {experiment.title}
                </h2>
                <p className="font-meta-technical text-[11px] text-primary/80 uppercase tracking-wider">
                  {experiment.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close experiment inspector"
                className="w-9 h-9 border border-outline-variant/40 hover:border-primary/60 bg-surface-container-lowest/70 rounded-DEFAULT flex items-center justify-center text-on-surface-variant hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* 2. Top Stats & Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-lowest/60 p-4 border border-outline-variant/20 rounded-DEFAULT font-meta-technical text-[11px]">
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  STATUS
                </span>
                <span className="text-primary font-bold">{experiment.status}</span>
              </div>
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  DATE
                </span>
                <span className="text-on-surface">{experiment.date}</span>
              </div>
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  DIFFICULTY
                </span>
                <MissionDifficulty level={experiment.difficulty || 4} size="sm" />
              </div>
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  XP VALUATION
                </span>
                <span className="text-primary-fixed font-bold">+{experiment.xpReward} XP</span>
              </div>
            </div>

            {/* 3. Main Technical Readouts (Bento Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Purpose & Concept */}
              <div className="md:col-span-12 p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-2">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-widest uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                  <span>PURPOSE_AND_CONCEPT</span>
                </div>
                <p className="font-sans text-[14px] text-on-surface-variant/90 leading-relaxed">
                  {experiment.objective || experiment.description}
                </p>
              </div>

              {/* Core Technology Stack */}
              <div className="md:col-span-5 p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-3">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-on-surface tracking-widest uppercase font-bold border-b border-outline-variant/20 pb-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">api</span>
                  <span>CORE_TECHNOLOGY</span>
                </div>
                <ul className="flex flex-col gap-2 font-meta-technical text-[11px] text-on-surface-variant">
                  {experiment.technologies?.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preliminary Results */}
              <div className="md:col-span-7 p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-widest uppercase font-bold">
                    <span className="material-symbols-outlined text-[16px]">analytics</span>
                    <span>PRELIMINARY_RESULTS</span>
                  </div>
                  <p className="font-sans text-[13px] text-on-surface-variant/90 leading-relaxed">
                    {experiment.result || 'Prototype validation successful and integrated into development archive.'}
                  </p>
                </div>

                {/* Technical status indicator */}
                <div className="pt-2 border-t border-outline-variant/20 flex justify-between items-center font-meta-technical text-[10px] text-on-surface-variant">
                  <span>VALIDATION_STATE</span>
                  <span className="text-primary font-bold">COMPLETED // VERIFIED</span>
                </div>
              </div>
            </div>

            {/* 4. Action Area */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-variant/30 mt-2">
              <div className="flex items-center gap-2 font-meta-technical text-[10px] text-outline-variant uppercase">
                <span>COORD: {experiment.coordinates}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {experiment.relatedQuestSlug && (
                  <QuestButton
                    variant="solid"
                    size="md"
                    icon="military_tech"
                    iconPosition="left"
                    onClick={() => {
                      onClose && onClose();
                      navigate('/quests');
                    }}
                  >
                    INSPECT QUEST ARTIFACT
                  </QuestButton>
                )}

                <QuestButton
                  variant="ghost"
                  size="md"
                  onClick={onClose}
                >
                  CLOSE INSPECTOR
                </QuestButton>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ExperimentDetailPanel;
