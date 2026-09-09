import React from 'react';
import clsx from 'clsx';
import { SKILL_CATEGORIES } from '../../data/skills';

/**
 * SkillCategoryNav — Category Sector Filter Navigation
 * Computes dynamic category counts and provides high-precision filtering.
 */
export function SkillCategoryNav({
  selectedCategory,
  onSelectCategory,
  categoryCounts = {},
  totalCount = 0,
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter Skills by Domain"
      className="w-full flex items-center gap-2 py-3 border-b border-outline-variant/20 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap"
    >
      <span className="font-meta-technical text-[10px] text-primary/70 tracking-[0.2em] uppercase font-bold mr-2 hidden sm:inline">
        SECTOR //
      </span>

      {SKILL_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat;
        const count = cat === 'ALL' ? totalCount : categoryCounts[cat] || 0;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat)}
            className={clsx(
              'group relative px-3 py-1.5 rounded-DEFAULT font-meta-technical text-[11px] tracking-wider uppercase',
              'transition-all duration-200 select-none flex items-center gap-2 border min-h-[36px]',
              isSelected
                ? 'border-primary bg-primary/10 text-primary font-semibold shadow-gold-glow-subtle'
                : 'border-outline-variant/40 bg-surface-container-lowest/40 text-on-surface-variant hover:border-primary/50 hover:text-primary hover:bg-primary/5'
            )}
          >
            <span>{cat}</span>
            <span
              className={clsx(
                'text-[9px] px-1.5 py-0.2 rounded-DEFAULT font-mono',
                isSelected
                  ? 'bg-primary/20 text-primary'
                  : 'bg-surface-container-high/60 text-outline-variant group-hover:text-primary'
              )}
            >
              {String(count).padStart(2, '0')}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default SkillCategoryNav;
