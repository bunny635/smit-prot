import React from 'react';
import clsx from 'clsx';
import { CATEGORIES, SORT_OPTIONS } from '../../data/projects';

/**
 * QuestFilterBar — Technical Filter, Sorting, and Search HUD Controls
 * Computes dynamic category counts and provides high-precision filtering.
 */
export function QuestFilterBar({
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  searchQuery,
  onSearchChange,
  categoryCounts = {},
  totalCount = 0,
}) {
  return (
    <div className="w-full flex flex-col gap-5 py-4 border-b border-outline-variant/20">
      {/* Top Filter HUD Line: Category Chips & Sort Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter Quests by Category"
          className="flex flex-wrap items-center gap-2"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'ALL' ? totalCount : (categoryCounts[cat] || 0);

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectCategory(cat)}
                className={clsx(
                  'group relative px-3 py-1.5 rounded-DEFAULT font-meta-technical text-[11px] tracking-wider uppercase',
                  'transition-all duration-200 select-none flex items-center gap-2 border',
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

        {/* Right: Sort Controls & Search Input */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative flex items-center min-w-[220px] flex-1 sm:flex-initial">
            <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline-variant/70 pointer-events-none select-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="SEARCH PROTOCOLS..."
              aria-label="Search Quests"
              className={clsx(
                'w-full bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT',
                'pl-10 pr-8 py-2 font-meta-technical text-[11px] text-on-surface placeholder:text-outline-variant/60',
                'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all'
              )}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                aria-label="Clear Search"
                className="absolute right-2 text-outline-variant hover:text-primary transition-colors text-[14px]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-surface-container-lowest/60 border border-outline-variant/40 px-2.5 py-1.5 rounded-DEFAULT">
            <span className="font-meta-technical text-[9px] text-outline-variant tracking-wider uppercase">
              SORT:
            </span>
            <select
              value={selectedSort}
              onChange={(e) => onSelectSort(e.target.value)}
              aria-label="Sort Quests"
              className="bg-transparent font-meta-technical text-[11px] text-primary focus:outline-none cursor-pointer uppercase tracking-wider"
            >
              {SORT_OPTIONS.map((opt) => (
                <option
                  key={opt.id}
                  value={opt.id}
                  className="bg-surface-container-high text-on-surface"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestFilterBar;
