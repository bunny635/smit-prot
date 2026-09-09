
import React from 'react';
import clsx from 'clsx';

/**
 * MissionDifficulty — Reusable 5-Star Aethelgard Rating
 * Filled: Polished Gold with soft glow
 * Empty: Muted outline
 */
export function MissionDifficulty({
  level = 3,
  max = 5,
  showLabel = false,
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
}) {
  const stars = Array.from({ length: max }, (_, index) => index + 1);

  const starSizes = {
    sm: 'text-[14px]',
    md: 'text-[18px]',
    lg: 'text-[22px]',
  };

  return (
    <div className={clsx('inline-flex items-center gap-1.5', className)}>
      {showLabel && (
        <span className="font-meta-technical text-meta-technical text-on-surface-variant/70 tracking-widest mr-1 uppercase">
          DIFF:
        </span>
      )}
      <div className="flex items-center gap-0.5">
        {stars.map((starNum) => {
          const isFilled = starNum <= level;
          return (
            <span
              key={starNum}
              className={clsx(
                'material-symbols-outlined transition-all duration-200 select-none',
                starSizes[size] || starSizes.md,
                isFilled
                  ? 'text-primary drop-shadow-[0_0_6px_rgba(242,202,80,0.5)] fill'
                  : 'text-outline-variant/40'
              )}
              style={{
                fontVariationSettings: isFilled ? "'FILL' 1" : "'FILL' 0",
              }}
              title={`Difficulty: ${level}/${max}`}
            >
              star
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default MissionDifficulty;
