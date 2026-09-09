import React from 'react';
import clsx from 'clsx';
import { EDUCATION_CATEGORIES } from '../../data/education';

/**
 * EducationLegend — Compact Legend & Filter Bar for the Education Constellation
 * Explains node classifications, visual states, and provides interactive category filtering.
 */
export function EducationLegend({
  selectedCategory = 'ALL',
  onSelectCategory,
  categoryCounts = {},
  totalCount = 5,
}) {
  return (
    <section
      aria-label="Education Constellation Legend and Filters"
      className="w-full aethel-glass aethel-rim-border corner-brackets p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 select-none"
    >
      {/* Category Tabs */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Filter academic repositories by classification"
      >
        {EDUCATION_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === 'ALL' ? totalCount : categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory && onSelectCategory(cat)}
              className={clsx(
                'group relative flex items-center gap-2 px-3 py-1.5 rounded-DEFAULT font-meta-technical text-[11px] uppercase tracking-[0.15em] transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[36px]',
                isActive
                  ? 'bg-primary/15 text-primary border border-primary font-bold shadow-gold-glow-subtle'
                  : 'bg-surface-container-lowest/50 text-on-surface-variant/80 border border-outline-variant/30 hover:border-primary/40 hover:text-on-surface hover:bg-surface-container/60'
              )}
            >
              <span>{cat}</span>
              <span
                className={clsx(
                  'px-1.5 py-0.2 rounded text-[10px] font-mono',
                  isActive ? 'bg-primary/20 text-primary-fixed' : 'bg-surface-container-highest/60 text-outline'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend Indicators */}
      <div className="flex flex-wrap items-center gap-4 text-outline font-meta-technical text-[10px] tracking-wider uppercase border-t md:border-t-0 md:border-l border-outline-variant/30 pt-3 md:pt-0 md:pl-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_6px_#f2ca50]" />
          <span className="text-on-surface">DEGREE TRACK</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_6px_#d4af37]" />
          <span className="text-on-surface">CERTIFICATION</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim" />
          <span className="text-on-surface">SPECIALIZATION</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 bg-primary border-t border-dashed border-primary" />
          <span className="text-on-surface-variant">KNOWLEDGE PATH</span>
        </div>
      </div>
    </section>
  );
}

export default EducationLegend;
