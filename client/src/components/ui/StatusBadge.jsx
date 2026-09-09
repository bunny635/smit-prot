
import React from 'react';
import clsx from 'clsx';

/**
 * StatusBadge — Reusable Aethelgard Status Indicator
 * Supports: 'ACTIVE' | 'COMPLETE' | 'IN PROGRESS'
 */
export function StatusBadge({ status = 'ACTIVE', size = 'md', className = '' }) {
  const normalized = status.toUpperCase();

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px] tracking-[0.1em]',
    md: 'px-2.5 py-1 text-meta-technical tracking-[0.15em]',
    lg: 'px-3.5 py-1.5 text-[13px] tracking-[0.2em]',
  };

  const renderBadge = () => {
    switch (normalized) {
      case 'ACTIVE':
        return (
          <span
            className={clsx(
              'inline-flex items-center gap-2 border border-primary/60 bg-primary/10 text-primary rounded-DEFAULT font-meta-technical uppercase font-medium shadow-gold-glow-subtle',
              sizeClasses[size] || sizeClasses.md,
              className
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>ACTIVE</span>
          </span>
        );

      case 'COMPLETE':
        return (
          <span
            className={clsx(
              'inline-flex items-center gap-1.5 border border-primary/80 bg-primary-container/20 text-primary-fixed rounded-DEFAULT font-meta-technical uppercase font-medium',
              sizeClasses[size] || sizeClasses.md,
              className
            )}
          >
            <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <span>COMPLETE</span>
          </span>
        );

      case 'IN PROGRESS':
        return (
          <span
            className={clsx(
              'inline-flex items-center gap-1.5 border border-outline-variant/60 bg-surface-container/60 text-on-surface-variant rounded-DEFAULT font-meta-technical uppercase font-medium',
              sizeClasses[size] || sizeClasses.md,
              className
            )}
          >
            <span className="inline-block w-1.5 h-1.5 bg-secondary animate-pulse rounded-full" />
            <span>IN PROGRESS</span>
          </span>
        );

      default:
        return (
          <span
            className={clsx(
              'inline-flex items-center gap-1.5 border border-outline/40 bg-surface-container/40 text-on-surface-variant rounded-DEFAULT font-meta-technical uppercase font-medium',
              sizeClasses[size] || sizeClasses.md,
              className
            )}
          >
            <span>{status}</span>
          </span>
        );
    }
  };

  return renderBadge();
}

export default StatusBadge;
