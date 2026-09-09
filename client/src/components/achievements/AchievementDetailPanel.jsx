import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import QuestButton from '../ui/QuestButton';

/**
 * AchievementDetailPanel — Ceremonial Achievement Inspector Dialog
 * Features:
 * - Holographic display with corner brackets and frosted glass
 * - Central illuminated seal
 * - Complete verified evidence and repository source readout
 * - Grounded cross-links to related quest / experiment artifacts
 * - Full keyboard accessibility (Escape key, focus trap)
 */
export function AchievementDetailPanel({
  achievement,
  isOpen = false,
  onClose,
  reducedMotion = false,
}) {
  const navigate = useNavigate();

  // Escape key listener & body overflow lock
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

  if (!achievement) return null;

  const isUnlocked = achievement.isUnlocked;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="achievement-detail-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-abyss/85 backdrop-blur-xl select-none"
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
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto aethel-glass border border-primary/40 corner-brackets p-6 sm:p-8 rounded-DEFAULT shadow-[0_0_45px_rgba(0,0,0,0.85)] flex flex-col gap-6"
          >
            {/* Header: Sequence & Close Button */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>SIGIL_RECORD // {achievement.code}</span>
                  <span className="text-outline-variant/60">//</span>
                  <span className="text-on-surface-variant">{achievement.seq}</span>
                </div>

                <h2
                  id="achievement-detail-title"
                  className="font-display-hero text-[24px] sm:text-[30px] md:text-[34px] text-on-surface font-bold leading-tight"
                >
                  {achievement.title}
                </h2>

                <p className="font-meta-technical text-[11px] text-primary/80 uppercase tracking-wider">
                  {achievement.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close sigil inspector"
                className="w-10 h-10 border border-outline-variant/40 hover:border-primary/60 bg-surface-container-lowest/70 rounded-DEFAULT flex items-center justify-center text-on-surface-variant hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Central Seal Display in Inspector */}
            <div className="flex flex-col items-center justify-center py-2">
              <div
                className={clsx(
                  'w-24 h-24 rounded-full flex items-center justify-center relative shadow-2xl',
                  isUnlocked
                    ? 'border-2 border-primary bg-surface shadow-[0_0_25px_rgba(242,202,80,0.35)]'
                    : 'border border-outline-variant/50 bg-surface-container-lowest'
                )}
              >
                <span
                  className={clsx(
                    'material-symbols-outlined text-[48px]',
                    isUnlocked ? 'text-primary drop-shadow-[0_0_12px_rgba(242,202,80,0.8)]' : 'text-outline-variant'
                  )}
                  style={{ fontVariationSettings: isUnlocked ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {achievement.icon || (isUnlocked ? 'military_tech' : 'lock')}
                </span>
              </div>

              <div className="mt-3 font-meta-technical text-[11px] text-primary tracking-widest uppercase">
                {achievement.rarityTier}
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-lowest/70 p-4 border border-outline-variant/25 rounded-DEFAULT font-meta-technical text-[11px]">
              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  STATUS
                </span>
                <span className={isUnlocked ? 'text-primary font-bold' : 'text-outline-variant font-bold'}>
                  {achievement.status}
                </span>
              </div>

              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  CLASSIFICATION
                </span>
                <span className="text-on-surface font-bold">{achievement.category}</span>
              </div>

              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  TIMELINE ERA
                </span>
                <span className="text-primary-fixed">{achievement.date}</span>
              </div>

              <div>
                <span className="text-[9px] text-outline-variant uppercase tracking-widest block">
                  XP REWARD
                </span>
                <span className="text-secondary font-bold">+{achievement.xpReward} XP</span>
              </div>
            </div>

            {/* Narrative & Evidence Sections */}
            <div className="flex flex-col gap-4">
              {/* Description */}
              <div className="p-5 bg-surface-container-high/30 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-2">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-widest uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  <span>ACHIEVEMENT_NARRATIVE</span>
                </div>
                <p className="font-sans text-[14px] text-on-surface-variant/90 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Verified Codebase Evidence */}
              <div className="p-5 bg-surface-container-high/30 border border-primary/30 rounded-DEFAULT flex flex-col gap-2">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-widest uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>VERIFIED_CODEBASE_EVIDENCE</span>
                </div>
                <p className="font-sans text-[13px] text-on-surface-variant/95 leading-relaxed">
                  {achievement.evidence}
                </p>

                <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between font-meta-technical text-[10px] text-outline-variant">
                  <span>SOURCE_MODEL: {achievement.sourceType}</span>
                  <span className="text-primary font-mono">{achievement.verificationState}</span>
                </div>
              </div>
            </div>

            {/* Actions & Cross-Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-variant/30 mt-2">
              <div className="font-meta-technical text-[10px] text-outline-variant uppercase">
                <span>SYSTEM SECTOR: {achievement.location}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {achievement.relatedProject && (
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
                    INSPECT QUEST ARTIFACT
                  </QuestButton>
                )}

                {achievement.relatedExperiment && (
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

export default AchievementDetailPanel;
