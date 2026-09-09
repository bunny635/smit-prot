import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MissionDifficulty from '../ui/MissionDifficulty';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';

/**
 * MobileQuestDrawer — Atmospheric Mobile Mission Briefing Overlay
 * Implements the mobile bottom sheet / drawer specified in Stitch:
 * - 01 // PROBLEM_STATEMENT
 * - 02 // SOLUTION_MATRIX
 * - 03 // ARCHITECTURE_TOPOLOGY (with vertical connecting lines)
 * - Access Core CTA & external links
 */
export function MobileQuestDrawer({ quest, isOpen, onClose }) {
  const navigate = useNavigate();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!quest) return null;

  const handleAccessCore = () => {
    onClose();
    navigate(`/quests/${quest.slug || quest.id}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Mission Briefing: ${quest.title}`}
          className="fixed inset-0 z-[100] flex flex-col justify-end"
        >
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-abyss/85 backdrop-blur-md"
          />

          {/* Bottom Sheet Modal Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative z-10 w-full max-h-[90vh] bg-surface-container-low/95 backdrop-blur-2xl border-t border-outline-variant/40 rounded-t-xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Drawer Top Grab Handle & Header */}
            <header className="px-6 pt-5 pb-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-lowest/60">
              <div className="flex flex-col">
                <span className="font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold">
                  {quest.questNumber} // QUEST_DATA_STREAM
                </span>
                <h2 className="font-headline-lg-mobile text-[22px] text-on-surface font-semibold tracking-wide">
                  {quest.title} Analysis
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Mission Briefing"
                className="w-11 h-11 flex items-center justify-center text-outline-variant hover:text-primary active:text-primary bg-surface-container rounded-full border border-outline-variant/40 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </header>

            {/* Scrollable Mission Briefing Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
              {/* Telemetry Summary Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT">
                <div className="flex items-center gap-2">
                  <StatusBadge status={quest.status} size="sm" />
                  <span className="font-meta-technical text-[10px] text-primary font-bold">
                    +{quest.xpReward} XP
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-meta-technical text-[9px] text-on-surface-variant/70 uppercase">
                    DIFF:
                  </span>
                  <MissionDifficulty level={quest.difficulty} size="sm" />
                </div>
              </div>

              {/* 01 // PROBLEM_STATEMENT */}
              <section className="flex flex-col gap-2.5">
                <h3 className="font-meta-technical text-[11px] text-primary tracking-[0.2em] border-l-2 border-primary pl-3 uppercase font-semibold">
                  01 // PROBLEM_STATEMENT
                </h3>
                <div className="bg-surface-container-lowest/60 p-4 rounded-DEFAULT border border-outline-variant/30">
                  <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
                    {quest.problemStatement || quest.description}
                  </p>
                </div>
              </section>

              {/* 02 // SOLUTION_MATRIX */}
              <section className="flex flex-col gap-2.5">
                <h3 className="font-meta-technical text-[11px] text-primary tracking-[0.2em] border-l-2 border-primary pl-3 uppercase font-semibold">
                  02 // SOLUTION_MATRIX
                </h3>
                <div className="bg-surface-container-highest/30 p-4 rounded-DEFAULT border border-outline-variant/30 flex flex-col gap-3">
                  <p className="font-sans text-[13px] text-on-surface leading-relaxed">
                    {quest.solutionMatrix}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/20">
                    {quest.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-surface-container-high text-primary font-meta-technical text-[10px] rounded-DEFAULT border border-outline-variant/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* 03 // ARCHITECTURE_TOPOLOGY */}
              {quest.architectureNodes && quest.architectureNodes.length > 0 && (
                <section className="flex flex-col gap-3">
                  <h3 className="font-meta-technical text-[11px] text-primary tracking-[0.2em] border-l-2 border-primary pl-3 uppercase font-semibold">
                    03 // ARCHITECTURE_TOPOLOGY
                  </h3>
                  <div className="relative flex flex-col gap-4 pl-2">
                    {/* Vertical Connecting Cable */}
                    <div className="absolute left-[22px] top-[20px] bottom-[20px] w-px bg-gradient-to-b from-primary via-primary/50 to-outline-variant/30" />

                    {quest.architectureNodes.map((node, index) => (
                      <div key={node.name} className="flex items-start gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-surface-container border border-primary/60 flex items-center justify-center shrink-0 shadow-gold-glow-subtle">
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            {node.icon || 'hub'}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="font-meta-technical text-[12px] text-on-surface font-semibold">
                            {node.name}
                          </span>
                          <span className="font-meta-technical text-[10px] text-on-surface-variant">
                            {node.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Action Buttons */}
              <div className="pt-4 pb-6 flex flex-col gap-3">
                <QuestButton
                  variant="solid"
                  size="md"
                  icon="arrow_forward"
                  iconPosition="right"
                  onClick={handleAccessCore}
                  className="w-full"
                >
                  ACCESS CORE
                </QuestButton>

                {quest.githubUrl && (
                  <a
                    href={quest.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 border border-outline-variant/50 hover:border-primary text-on-surface font-meta-technical text-[11px] tracking-widest uppercase transition-colors rounded-DEFAULT bg-surface-container/40"
                  >
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    <span>VIEW GITHUB REPOSITORY</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileQuestDrawer;
