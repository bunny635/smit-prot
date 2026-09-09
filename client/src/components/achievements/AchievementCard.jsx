import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

/**
 * AchievementCard — Monumental Sigil Relic Card in the Hall of Legends
 * Faithfully implements the Stitch sigil-card aesthetic:
 * - Central circular ceremonial seal with glowing icon
 * - Left vertical energy line accent
 * - Sequence code & location metadata
 * - Bodoni Moda display title
 * - Rarity tier & verified evidence state
 * - Full keyboard and touch accessibility
 */
export function AchievementCard({
  achievement,
  isSelected = false,
  onSelect,
  reducedMotion = false,
}) {
  if (!achievement) return null;

  const isUnlocked = achievement.isUnlocked;
  const isLocked = !isUnlocked;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect && onSelect(achievement);
    }
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Achievement Sigil: ${achievement.title}, ${achievement.status}, ${achievement.rarityTier}`}
      onClick={() => onSelect && onSelect(achievement)}
      onKeyDown={handleKeyDown}
      whileHover={reducedMotion || isLocked ? {} : { y: -6 }}
      transition={{ duration: 0.2 }}
      className={clsx(
        'group relative select-none rounded-DEFAULT transition-all duration-300',
        'aethel-glass aethel-rim-border corner-brackets p-6 flex flex-col items-center text-center overflow-hidden min-h-[340px] justify-between',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        isUnlocked
          ? isSelected
            ? 'border-primary bg-surface-container-high/90 shadow-[0_0_35px_rgba(242,202,80,0.4)] ring-1 ring-primary'
            : 'border-outline-variant/40 hover:border-primary/60 hover:shadow-[0_0_25px_rgba(242,202,80,0.2)] bg-surface-container/70 cursor-pointer'
          : 'border-outline-variant/20 bg-surface-container-lowest/50 opacity-65 cursor-not-allowed'
      )}
    >
      {/* Left Accent Energy Line */}
      <div
        className={clsx(
          'absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 pointer-events-none',
          isUnlocked
            ? isSelected
              ? 'bg-primary shadow-[0_0_10px_#f2ca50]'
              : 'bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_#f2ca50]'
            : 'bg-outline-variant/30'
        )}
      />

      {/* Top Telemetry Header: Sequence & Location */}
      <div className="w-full flex items-start justify-between font-meta-technical text-[10px] text-outline-variant mb-2">
        <span className="text-primary/70 tracking-widest uppercase">{achievement.code}</span>
        <div className="text-right">
          <span className="block text-primary/60">{achievement.seq}</span>
          <span className="block text-outline-variant/70">{achievement.location}</span>
        </div>
      </div>

      {/* Central Ceremonial Sigil Seal */}
      <div className="my-3 flex flex-col items-center">
        <div
          className={clsx(
            'w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center relative z-10 transition-transform duration-300',
            isUnlocked
              ? 'border-2 border-primary bg-surface shadow-[0_0_20px_rgba(242,202,80,0.3)] group-hover:scale-105'
              : 'border border-outline-variant/40 bg-surface-container-lowest text-outline-variant'
          )}
        >
          <span
            className={clsx(
              'material-symbols-outlined text-[38px] sm:text-[44px]',
              isUnlocked ? 'text-primary drop-shadow-[0_0_10px_rgba(242,202,80,0.8)]' : 'text-outline-variant'
            )}
            style={{ fontVariationSettings: isUnlocked ? "'FILL' 1" : "'FILL' 0" }}
          >
            {achievement.icon || (isUnlocked ? 'military_tech' : 'lock')}
          </span>
        </div>

        {/* Small Rarity Pill beneath Seal */}
        <span
          className={clsx(
            'mt-2.5 px-2 py-0.5 rounded font-meta-technical text-[9px] uppercase tracking-widest border',
            isUnlocked
              ? 'bg-primary/10 text-primary border-primary/30'
              : 'bg-surface-container-lowest text-outline-variant border-outline-variant/30'
          )}
        >
          {achievement.rarityTier?.split('//')[1]?.trim() || achievement.rarity}
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="flex flex-col gap-1 my-1">
        <h3
          className={clsx(
            'font-display-hero text-[19px] sm:text-[22px] font-bold leading-tight transition-colors',
            isUnlocked
              ? 'text-primary group-hover:text-primary-fixed drop-shadow-[0_0_6px_rgba(242,202,80,0.4)]'
              : 'text-outline-variant'
          )}
        >
          {achievement.title}
        </h3>
        <p className="font-meta-technical text-[10px] text-on-surface-variant/80 tracking-wider uppercase">
          {achievement.subtitle}
        </p>
      </div>

      {/* Short Narrative */}
      <p className="font-sans text-[12px] text-on-surface-variant/85 line-clamp-2 leading-relaxed mb-3 px-1">
        {achievement.description}
      </p>

      {/* Footer Status & XP Reward */}
      <div className="w-full flex items-center justify-between border-t border-outline-variant/20 pt-3 mt-auto font-meta-technical text-[10px]">
        <span
          className={clsx(
            'flex items-center gap-1 font-bold tracking-wider uppercase',
            isUnlocked ? 'text-primary' : 'text-outline-variant'
          )}
        >
          <span className="material-symbols-outlined text-[13px]">
            {isUnlocked ? 'verified' : 'lock'}
          </span>
          <span>{isUnlocked ? 'UNLOCKED' : 'CLASSIFIED'}</span>
        </span>

        <span className="text-on-surface-variant bg-surface-container-lowest/80 px-2 py-1 rounded border border-outline-variant/25">
          +{achievement.xpReward} XP
        </span>
      </div>
    </motion.article>
  );
}

export default AchievementCard;
