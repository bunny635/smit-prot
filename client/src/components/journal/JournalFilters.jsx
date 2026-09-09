import React from 'react';
import clsx from 'clsx';

/**
 * JournalFilters — Tactical Filter & Search Bar for Quest Journal
 * Features:
 * - Status Filter Tabs (ALL, ACTIVE, COMPLETED, ARCHIVED) with dynamic entry counters
 * - Restrained technical search input
 * - Clear filters reset trigger
 */
export function JournalFilters({
  selectedStatus = 'ALL',
  onSelectStatus,
  statusCounts = {},
  searchQuery = '',
  onSearchChange,
  totalCount = 0,
}) {
  const FILTERS = ['ALL', 'ACTIVE', 'COMPLETED', 'ARCHIVED'];

  return (
    <section
      aria-label="Mission Filters and Search"
      className="w-full aethel-glass aethel-rim-border corner-brackets p-4 md:p-5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 select-none"
    >
      {/* Status Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter missions by status">
        {FILTERS.map((status) => {
          const isActive = selectedStatus === status;
          const count = status === 'ALL' ? totalCount : statusCounts[status] || 0;

          return (
            <button
              key={status}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectStatus(status)}
              className={clsx(
                'group relative flex items-center gap-2 px-3.5 py-2 rounded-DEFAULT font-meta-technical text-[11px] uppercase tracking-[0.15em] transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[38px]',
                isActive
                  ? 'bg-primary/15 text-primary border border-primary font-bold shadow-gold-glow-subtle'
                  : 'bg-surface-container-lowest/50 text-on-surface-variant/80 border border-outline-variant/30 hover:border-primary/40 hover:text-on-surface hover:bg-surface-container/60'
              )}
            >
              {status === 'ACTIVE' && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )}
              <span>{status}</span>
              <span
                className={clsx(
                  'px-1.5 py-0.2 rounded text-[10px] font-mono',
                  isActive
                    ? 'bg-primary/20 text-primary-fixed'
                    : 'bg-surface-container-highest/60 text-outline'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Input Bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 lg:w-72">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none"
            aria-hidden="true"
          >
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="FILTER EXPEDITIONS / TECH..."
            aria-label="Search missions by role, organization, technology, or keywords"
            className="w-full bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT pl-9 pr-8 py-2 font-meta-technical text-[11px] text-on-surface tracking-wider uppercase placeholder:text-outline-variant placeholder:normal-case focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search input"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>

        {/* Quick Reset if filters active */}
        {(selectedStatus !== 'ALL' || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              onSelectStatus('ALL');
              onSearchChange('');
            }}
            title="Reset active filters"
            className="px-3 py-2 bg-surface-container/60 hover:bg-primary/10 border border-outline-variant/40 hover:border-primary/50 text-on-surface-variant hover:text-primary font-meta-technical text-[10px] uppercase tracking-wider rounded-DEFAULT transition-all min-h-[38px] flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">restart_alt</span>
            <span className="hidden sm:inline">RESET</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default JournalFilters;
