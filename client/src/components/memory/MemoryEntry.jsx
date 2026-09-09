import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';
import MemoryNode from './MemoryNode';

/**
 * MemoryEntry — Asymmetric Milestone Card along the Memory Valley timeline
 * Features:
 * - Alternating desktop layout (left/right) with centered timeline anchor
 * - Mobile stacked layout with left timeline anchor
 * - Technical telemetry header (date, coordinates, status)
 * - Bodoni Moda display title & Inter narrative summary
 * - Code/architectural telemetry preview container
 * - Interactive inspect button triggering MemoryDetailPanel
 */
export function MemoryEntry({
  milestone,
  index = 0,
  isLeft = true,
  onSelect,
  reducedMotion = false,
}) {
  if (!milestone) return null;

  const isCurrent = milestone.isCurrent;
  const isHorizon = milestone.category === 'HORIZON';

  return (
    <div
      className={clsx(
        'relative w-full flex flex-col md:flex-row items-center group',
        isLeft ? 'md:justify-start' : 'md:justify-end'
      )}
    >
      {/* 1. Mobile Timeline Node (Anchored Left on Small Screens) */}
      <div className="md:hidden absolute left-0 top-8 -translate-x-1/2 z-20">
        <MemoryNode
          date={milestone.date}
          isCurrent={isCurrent}
          status={milestone.status}
          type={milestone.type}
        />
      </div>

      {/* 2. Desktop Center Timeline Node (Fixed at 50% along the energy line) */}
      <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
        <MemoryNode
          date={milestone.date}
          isCurrent={isCurrent}
          status={milestone.status}
          type={milestone.type}
        />
      </div>

      {/* 3. Milestone Card Container */}
      <motion.div
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.2 }}
        className={clsx(
          'w-full md:w-[calc(50%-48px)] ml-8 md:ml-0',
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        )}
      >
        <article
          className={clsx(
            'w-full aethel-glass aethel-rim-border corner-brackets p-5 sm:p-7 rounded-DEFAULT transition-all duration-300',
            'border flex flex-col gap-4',
            isCurrent
              ? 'border-primary/50 bg-surface-container/80 shadow-[0_0_25px_rgba(242,202,80,0.15)]'
              : 'border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(242,202,80,0.1)]'
          )}
        >
          {/* Header Row: Date & Coordinates */}
          <div className="flex items-center justify-between gap-2 border-b border-outline-variant/25 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-meta-technical text-primary text-xl sm:text-2xl font-bold tracking-widest drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]">
                {milestone.date}
              </span>
              {isCurrent && (
                <span className="px-2 py-0.5 bg-primary/20 text-primary border border-primary/40 font-meta-technical text-[9px] uppercase tracking-wider rounded">
                  ACTIVE
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-widest hidden sm:inline">
                {milestone.coordinates}
              </span>
              <StatusBadge status={milestone.status} size="sm" />
            </div>
          </div>

          {/* Title & Category */}
          <div className="flex flex-col gap-1">
            <div className="font-meta-technical text-[10px] text-primary/80 uppercase tracking-[0.2em] font-medium">
              SECTOR_CHRONO // {milestone.category}
            </div>
            <h3 className="font-display-hero text-[20px] sm:text-[24px] md:text-[26px] text-on-surface font-bold leading-tight">
              {milestone.title}
            </h3>
          </div>

          {/* Narrative Summary */}
          <p className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant/90 leading-relaxed">
            {milestone.summary}
          </p>

          {/* Telemetry Architecture Snapshot Box */}
          <div className="w-full bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT p-3 sm:p-4 font-meta-technical text-[11px] text-outline flex flex-col gap-1.5 select-none">
            <div className="flex items-center justify-between text-[10px] text-primary/70 pb-1 border-b border-outline-variant/15">
              <span>ARCHITECTURAL_INSIGHT</span>
              <span className="text-[9px] font-mono">{milestone.id}</span>
            </div>
            <p className="text-[11px] text-on-surface-variant/80 font-sans italic line-clamp-2">
              "{milestone.significance}"
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {milestone.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-surface-container-highest/40 border border-outline-variant/30 text-on-surface font-meta-technical text-[10px] uppercase tracking-wider rounded-DEFAULT"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Action Area */}
          <div className="flex items-center justify-between pt-3 border-t border-outline-variant/20 mt-1">
            <span className="font-meta-technical text-[10px] text-outline sm:hidden">
              {milestone.coordinates}
            </span>

            <QuestButton
              variant={isCurrent ? 'solid' : 'ghost'}
              size="sm"
              icon="open_in_new"
              iconPosition="right"
              onClick={() => onSelect && onSelect(milestone)}
              className="ml-auto"
            >
              INSPECT MEMORY // SYS.LOG
            </QuestButton>
          </div>
        </article>
      </motion.div>
    </div>
  );
}

export default MemoryEntry;
