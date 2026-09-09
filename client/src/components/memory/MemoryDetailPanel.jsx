import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';

/**
 * MemoryDetailPanel — Holographic Milestone Detail Inspector Dialog
 * Features:
 * - Holographic Aethelgard styling with corner brackets and frosted glass
 * - Keyboard accessible (Escape key listener)
 * - Complete architectural summary & significance readout
 * - Core technologies stack
 * - Grounded cross-links to /quests, /lab, and /journal
 */
export function MemoryDetailPanel({
  milestone,
  isOpen = false,
  onClose,
  reducedMotion = false,
}) {
  const navigate = useNavigate();

  // Escape key handler & body overflow lock
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

  if (!milestone) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="memory-detail-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-abyss/85 backdrop-blur-xl select-none"
        >
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto aethel-glass border border-primary/40 corner-brackets p-6 sm:p-8 rounded-DEFAULT shadow-[0_0_40px_rgba(0,0,0,0.85)] flex flex-col gap-6"
          >
            {/* Header: Coordinates, Title & Close Button */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>MEMORY_RECORD // {milestone.id}</span>
                  <span className="text-outline-variant/60">//</span>
                  <span className="text-on-surface-variant">{milestone.coordinates}</span>
                </div>
                <h2
                  id="memory-detail-title"
                  className="font-display-hero text-[24px] sm:text-[30px] md:text-[34px] text-on-surface font-bold leading-tight"
                >
                  {milestone.title}
                </h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-meta-technical text-primary text-lg font-bold tracking-widest">
                    {milestone.date}
                  </span>
                  <span className="text-outline-variant/60 font-meta-technical text-[11px]">//</span>
                  <span className="font-meta-technical text-[11px] text-on-surface-variant uppercase tracking-wider">
                    {milestone.category}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close memory inspector"
                className="w-9 h-9 border border-outline-variant/40 hover:border-primary/60 bg-surface-container-lowest/70 rounded-DEFAULT flex items-center justify-center text-on-surface-variant hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-lowest/70 p-4 border border-outline-variant/25 rounded-DEFAULT font-meta-technical text-[11px]">
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  STATUS
                </span>
                <StatusBadge status={milestone.status} size="sm" />
              </div>
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  TYPE
                </span>
                <span className="text-primary font-bold">{milestone.type}</span>
              </div>
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  TIMELINE ERA
                </span>
                <span className="text-on-surface">{milestone.year}</span>
              </div>
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  INTERFACE STATE
                </span>
                <span className={milestone.isCurrent ? 'text-primary font-bold' : 'text-on-surface-variant'}>
                  {milestone.isCurrent ? 'CURRENT_FOCUS' : 'ARCHIVED'}
                </span>
              </div>
            </div>

            {/* Main Content Sections */}
            <div className="flex flex-col gap-4">
              {/* Narrative Summary */}
              <div className="p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-2">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-widest uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">history_edu</span>
                  <span>CHRONOLOGICAL_SUMMARY</span>
                </div>
                <p className="font-sans text-[14px] text-on-surface-variant/90 leading-relaxed">
                  {milestone.summary}
                </p>
              </div>

              {/* Architectural Significance */}
              <div className="p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-2">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-widest uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">account_tree</span>
                  <span>ARCHITECTURAL_SIGNIFICANCE</span>
                </div>
                <p className="font-sans text-[14px] text-on-surface-variant/90 leading-relaxed">
                  {milestone.significance}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-3">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-on-surface tracking-widest uppercase font-bold border-b border-outline-variant/20 pb-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
                  <span>DEPLOYED_TECHNOLOGY_STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {milestone.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface-container-highest/60 border border-primary/30 text-primary-fixed font-meta-technical text-[11px] uppercase tracking-wider rounded-DEFAULT flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Area & Cross-Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-variant/30 mt-2">
              <div className="flex items-center gap-2 font-meta-technical text-[10px] text-outline-variant uppercase">
                <span>COORD: {milestone.coordinates}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {milestone.relatedProject && (
                  <QuestButton
                    variant="solid"
                    size="md"
                    icon="architecture"
                    iconPosition="left"
                    onClick={() => {
                      onClose && onClose();
                      navigate('/quests');
                    }}
                  >
                    INSPECT QUEST ARENA
                  </QuestButton>
                )}

                {milestone.relatedExperiment && (
                  <QuestButton
                    variant="ghost"
                    size="md"
                    icon="biotech"
                    iconPosition="left"
                    onClick={() => {
                      onClose && onClose();
                      navigate('/lab');
                    }}
                  >
                    INSPECT FORBIDDEN LAB
                  </QuestButton>
                )}

                {milestone.relatedExperience && (
                  <QuestButton
                    variant="ghost"
                    size="md"
                    icon="auto_stories"
                    iconPosition="left"
                    onClick={() => {
                      onClose && onClose();
                      navigate('/journal');
                    }}
                  >
                    INSPECT QUEST JOURNAL
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

export default MemoryDetailPanel;
