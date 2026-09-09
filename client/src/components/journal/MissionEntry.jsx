import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import MissionDifficulty from '../ui/MissionDifficulty';

/**
 * MissionEntry — Asymmetric Operational Mission Card
 * Directly implements the Stitch Quest Journal visual composition:
 * - Left energy rail with active/hover gold illumination
 * - Mission code / number column (Q-014 / MISSION 01)
 * - Bodoni Moda editorial title & organization hierarchy
 * - Inter body summary & expandable technical responsibilities log
 * - JetBrains Mono restrained technology metadata
 * - 5-star difficulty rating & XP reward rail
 * - Aethelgard status badges & top-right coordinate decal
 */
export function MissionEntry({
  mission,
  isExpandedDefault = false,
  reducedMotion = false,
}) {
  const [isExpanded, setIsExpanded] = useState(isExpandedDefault);
  const isActive = mission.status === 'ACTIVE';
  const isArchived = mission.status === 'ARCHIVED';

  return (
    <article
      className={clsx(
        'group relative flex flex-col xl:flex-row gap-5 xl:gap-6',
        'bg-surface-container-high/40 backdrop-blur-md border border-outline-variant/30',
        'p-5 sm:p-6 lg:p-7 rounded-DEFAULT transition-all duration-400 overflow-hidden select-none',
        isActive
          ? 'hover:bg-surface-container-high/70 border-primary/40 shadow-gold-border-inset'
          : isArchived
          ? 'opacity-85 hover:opacity-100 hover:bg-surface-container-high/60'
          : 'hover:bg-surface-container-high/60'
      )}
    >
      {/* 1. Subtle Hover Ambient Light Leak */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* 2. Left Structural Energy Rail */}
      <div
        aria-hidden="true"
        className={clsx(
          'absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300',
          isActive
            ? 'bg-primary shadow-gold-glow'
            : 'bg-outline-variant/40 group-hover:bg-primary group-hover:shadow-gold-glow'
        )}
      />

      {/* 3. Top-Right Corner Coordinate Decal */}
      {mission.coordinates && (
        <div
          aria-hidden="true"
          className="absolute top-2.5 right-3 font-meta-technical text-[9px] sm:text-[10px] text-on-surface-variant/40 group-hover:text-primary/70 transition-colors hidden sm:block tracking-widest uppercase"
        >
          {mission.coordinates}
        </div>
      )}

      {/* 4. Left Mission Identifier Column */}
      <div className="flex-none xl:w-28 border-b xl:border-b-0 border-outline-variant/20 xl:border-r pb-4 xl:pb-0 xl:pr-5 flex flex-row xl:flex-col items-center xl:items-start justify-between xl:justify-start gap-2 z-10">
        <div className="flex flex-col">
          <span className="font-meta-technical text-[12px] sm:text-[13px] font-bold text-primary tracking-widest">
            {mission.code || 'Q-000'}
          </span>
          <span className="font-meta-technical text-[10px] text-on-surface-variant/60 tracking-wider uppercase">
            {mission.missionNumber}
          </span>
        </div>

        <span
          className={clsx(
            'material-symbols-outlined text-[24px] xl:mt-auto xl:pb-1 transition-colors duration-300',
            isActive ? 'text-primary' : 'text-outline-variant/70 group-hover:text-primary'
          )}
        >
          {isActive ? 'memory' : isArchived ? 'inventory_2' : 'terminal'}
        </span>
      </div>

      {/* 5. Center Main Mission Content */}
      <div className="flex-1 flex flex-col gap-3.5 z-10">
        {/* Role & Organization Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-1.5 font-meta-technical text-[11px] tracking-wider uppercase">
            <span className="text-primary font-bold">{mission.organization}</span>
            <span className="text-outline-variant/60">//</span>
            <span className="text-on-surface-variant/80">
              {mission.startDate} — {mission.endDate}
            </span>
            {mission.location && (
              <>
                <span className="text-outline-variant/60 hidden sm:inline">//</span>
                <span className="text-outline-variant hidden sm:inline">{mission.location}</span>
              </>
            )}
          </div>

          <h2 className="font-display-hero text-[22px] sm:text-[26px] md:text-[30px] text-on-surface group-hover:text-primary-fixed transition-colors font-bold leading-tight">
            {mission.role}
          </h2>
        </div>

        {/* Narrative Summary */}
        <p className="font-sans text-[14px] sm:text-[15px] text-on-surface-variant/90 leading-relaxed max-w-4xl">
          {mission.summary}
        </p>

        {/* Expandable Responsibilities Log */}
        {mission.responsibilities && mission.responsibilities.length > 0 && (
          <div className="mt-1 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-controls={`responsibilities-${mission.id}`}
              className="self-start inline-flex items-center gap-2 font-meta-technical text-[11px] text-primary hover:text-primary-fixed uppercase tracking-[0.18em] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-DEFAULT"
            >
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
                expand_more
              </span>
              <span>{isExpanded ? 'COLLAPSE OPERATIONAL LOG' : 'INSPECT OPERATIONAL LOG'}</span>
              <span className="text-[10px] text-outline-variant font-normal">
                ({mission.responsibilities.length} SUB-ROUTINES)
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={`responsibilities-${mission.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-2.5 pl-3 border-l border-primary/30 my-2">
                    {mission.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 font-sans text-[13px] text-on-surface-variant/85 leading-relaxed"
                      >
                        <span className="text-primary text-[10px] font-mono mt-1 select-none">▶</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Restrained Technology Metadata Chips */}
        {mission.technologies && mission.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {mission.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-outline-variant/40 bg-surface-container-lowest/60 px-2.5 py-1 font-meta-technical text-[11px] text-on-surface-variant/90 uppercase tracking-wider rounded-DEFAULT group-hover:border-primary/30 group-hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 6. Right Telemetry, Difficulty & Status Column */}
      <div className="flex-none flex flex-row xl:flex-col justify-between items-end xl:w-48 pt-4 xl:pt-0 border-t xl:border-t-0 border-outline-variant/20 z-10 gap-3">
        {/* Difficulty Stars */}
        <div className="flex flex-col items-start xl:items-end gap-1">
          <span className="font-meta-technical text-[9px] text-outline-variant uppercase tracking-widest">
            DIFFICULTY
          </span>
          <MissionDifficulty level={mission.difficulty || 4} size="sm" />
        </div>

        <div className="flex flex-col items-end gap-2.5">
          {/* XP Reward with Vertical Energy Line */}
          <div className="flex items-center gap-2.5">
            <div
              className={clsx(
                'w-px h-6 transition-colors duration-300',
                isActive ? 'bg-primary' : 'bg-primary/30 group-hover:bg-primary'
              )}
            />
            <span className="font-quest-stat text-[13px] sm:text-[14px] text-primary-fixed-dim tracking-widest font-bold group-hover:drop-shadow-[0_0_8px_rgba(242,202,80,0.5)] transition-all">
              XP {mission.xpReward}
            </span>
          </div>

          {/* Tactical Status Badge */}
          {isActive ? (
            <div className="border border-primary text-primary font-meta-technical text-[10px] sm:text-[11px] px-3 py-1 uppercase tracking-widest bg-surface/60 backdrop-blur-sm shadow-gold-glow-subtle flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>IN PROGRESS</span>
              <span className="inline-block w-1.5 h-3 bg-primary animate-pulse ml-0.5" />
            </div>
          ) : isArchived ? (
            <div className="bg-surface-container-lowest/80 text-on-surface-variant/70 border border-outline-variant/40 font-meta-technical text-[10px] sm:text-[11px] px-3 py-1 uppercase tracking-widest">
              ARCHIVED
            </div>
          ) : (
            <div className="bg-primary text-abyss font-meta-technical text-[10px] sm:text-[11px] font-bold px-3 py-1 uppercase tracking-widest border border-primary relative overflow-hidden flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                check
              </span>
              <span>COMPLETED</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default MissionEntry;
