import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

/**
 * EducationNode — Interactive Star/Knowledge Node in the Education Constellation
 * Faithfully implements the Stitch education card visual language:
 * - Glass panel with corner brackets
 * - Left vertical energy line accent
 * - Material symbol academic icon
 * - Bodoni Moda qualification title & JetBrains Mono institution
 * - Verification status badge
 * - Keyboard & touch accessibility
 */
export function EducationNode({
  node,
  isSelected = false,
  onSelect,
  reducedMotion = false,
  className = '',
}) {
  if (!node) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect && onSelect(node);
    }
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Knowledge Node: ${node.title} // ${node.institution}`}
      onClick={() => onSelect && onSelect(node)}
      onKeyDown={handleKeyDown}
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className={clsx(
        'group relative cursor-pointer select-none rounded-DEFAULT transition-all duration-300',
        'aethel-glass aethel-rim-border corner-brackets p-5 sm:p-6 overflow-hidden flex flex-col justify-between',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[280px] max-w-[340px]',
        isSelected
          ? 'border-primary bg-surface-container-high/90 shadow-[0_0_30px_rgba(242,202,80,0.35)] ring-1 ring-primary'
          : 'border-outline-variant/30 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(242,202,80,0.15)] bg-surface-container/70',
        className
      )}
    >
      {/* Vertical Left Accent Energy Line */}
      <div
        className={clsx(
          'absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 pointer-events-none',
          isSelected
            ? 'bg-primary shadow-[0_0_10px_#f2ca50]'
            : 'bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_#f2ca50]'
        )}
      />

      {/* Top Row: Academic Icon & Coordinates */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div
          className={clsx(
            'w-10 h-10 rounded-DEFAULT border flex items-center justify-center transition-colors',
            isSelected
              ? 'border-primary bg-primary/20 text-primary'
              : 'border-outline-variant/40 bg-surface-container-lowest text-primary/80 group-hover:border-primary/60 group-hover:text-primary'
          )}
        >
          <span
            className="material-symbols-outlined text-[22px]"
            style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
          >
            {node.icon || 'school'}
          </span>
        </div>

        <div className="text-right font-meta-technical text-[10px]">
          <span className="block text-primary/70 tracking-widest uppercase">{node.nodeCode}</span>
          <span className="block text-outline-variant tracking-wider uppercase">
            {node.level?.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Main Title & Institution */}
      <div className="flex flex-col gap-1 mb-3">
        <h3 className="font-display-hero text-[18px] sm:text-[20px] text-on-surface font-bold leading-snug group-hover:text-primary transition-colors">
          {node.title}
        </h3>
        <div className="font-meta-technical text-[11px] text-primary tracking-wide">
          {node.institution}
        </div>
      </div>

      {/* Narrative Snippet */}
      {node.description && (
        <p className="font-sans text-[12px] text-on-surface-variant/85 line-clamp-2 leading-relaxed mb-4 border-t border-outline-variant/15 pt-2">
          {node.description}
        </p>
      )}

      {/* Footer: Date & Verification Badge */}
      <div className="flex items-center justify-between border-t border-outline-variant/20 pt-3 mt-auto font-meta-technical text-[10px]">
        <span className="text-on-surface-variant bg-surface-container-lowest/80 px-2 py-1 rounded border border-outline-variant/20">
          {node.dateLabel || `${node.startDate} - ${node.endDate}`}
        </span>

        <span
          className={clsx(
            'flex items-center gap-1 font-bold tracking-wider uppercase',
            node.verificationState?.includes('VERIFIED')
              ? 'text-primary'
              : 'text-outline-variant group-hover:text-primary/70'
          )}
        >
          <span className="material-symbols-outlined text-[13px]">
            {node.verificationState?.includes('VERIFIED') ? 'verified' : 'history_toggle_off'}
          </span>
          <span>{node.verificationState?.includes('VERIFIED') ? 'VERIFIED' : 'PORTFOLIO'}</span>
        </span>
      </div>
    </motion.article>
  );
}

export default EducationNode;
