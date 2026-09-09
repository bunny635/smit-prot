import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * XPBar — Reusable Experience Bar
 * Features:
 * - Dark architectural track
 * - Polished Gold animated progress fill
 * - Soft gold ambient glow
 * - Technical XP label with JetBrains Mono typography
 */
export function XPBar({
  currentXP = 2450,
  maxXP = 3000,
  label = 'XP PROGRESS',
  showValues = true,
  showLabel = true,
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, (currentXP / maxXP) * 100));

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={clsx('w-full flex flex-col gap-1.5 font-meta-technical', className)}>
      {(showLabel || showValues) && (
        <div className="flex justify-between items-center text-meta-technical tracking-[0.15em]">
          {showLabel && (
            <span className="text-on-surface-variant/70 uppercase">
              {label}
            </span>
          )}
          {showValues && (
            <span className="text-primary font-medium">
              {currentXP.toLocaleString()} <span className="text-outline-variant">/</span> {maxXP.toLocaleString()}
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        className={clsx(
          'w-full bg-surface-container-highest/60 border border-outline-variant/30 rounded-DEFAULT overflow-hidden relative',
          heightClasses[size] || heightClasses.md
        )}
      >
        {/* Animated Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-primary-container via-primary to-primary-fixed shadow-gold-glow relative"
        >
          {/* Subtle pulse highlight on tip */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-[1px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default XPBar;
