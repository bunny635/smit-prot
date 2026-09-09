import React from 'react';
import clsx from 'clsx';

/**
 * MemoryNode — Luminous milestone node anchor on the timeline path
 * Features:
 * - Glowing gold outer ring with pulse animations for active/current nodes
 * - Inner core pip indicator
 * - Technical year/date chip
 */
export function MemoryNode({
  date = '',
  isCurrent = false,
  status = 'COMPLETE',
  type = 'MILESTONE',
  className = '',
}) {
  const isHorizon = date.includes('2025') || type === 'HORIZON';

  return (
    <div className={clsx('relative flex items-center justify-center select-none', className)}>
      {/* Outer Pulse Glow (for current or horizon nodes) */}
      {(isCurrent || isHorizon) && (
        <span
          className="absolute w-10 h-10 rounded-full bg-primary/20 animate-ping pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Halo Ring */}
      <div
        className={clsx(
          'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
          'bg-surface-container-lowest border',
          isCurrent
            ? 'border-primary shadow-[0_0_15px_rgba(242,202,80,0.8)]'
            : isHorizon
            ? 'border-primary/80 border-dashed animate-spin-slow shadow-[0_0_12px_rgba(242,202,80,0.5)]'
            : 'border-outline-variant/60 group-hover:border-primary/80 group-hover:shadow-[0_0_10px_rgba(242,202,80,0.4)]'
        )}
      >
        {/* Core Dot */}
        <div
          className={clsx(
            'w-2.5 h-2.5 rounded-full transition-transform duration-300',
            isCurrent
              ? 'bg-primary scale-110 shadow-[0_0_8px_#f2ca50]'
              : isHorizon
              ? 'bg-primary/90'
              : 'bg-primary/60 group-hover:bg-primary group-hover:scale-125'
          )}
        />
      </div>
    </div>
  );
}

export default MemoryNode;
