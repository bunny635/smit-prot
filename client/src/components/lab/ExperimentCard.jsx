import React from 'react';
import clsx from 'clsx';
import MissionDifficulty from '../ui/MissionDifficulty';
import QuestButton from '../ui/QuestButton';

/**
 * ExperimentCard — Tactical Research Prototype Card
 * Visual Composition based on Stitch forbidden_lab_experimental_core:
 * - Smoked-glass background with 1px rim-light
 * - Left activation rail with active/hover gold illumination
 * - Corner brackets & technical metadata
 * - Bodoni Moda title & JetBrains Mono taxonomy
 */
export function ExperimentCard({ experiment, onInspect, isSelected = false }) {
  const isActive = experiment.status === 'ACTIVE';

  const categoryIcons = {
    SHADER: 'auto_awesome',
    SPATIAL: 'view_in_ar',
    'UI/UX': 'dashboard_customize',
    TOOLING: 'terminal',
    SECURITY: 'lock',
  };

  return (
    <article
      onClick={() => onInspect && onInspect(experiment)}
      className={clsx(
        'group relative flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-DEFAULT',
        'bg-surface-container-high/40 backdrop-blur-md border border-outline-variant/30',
        'transition-all duration-300 select-none cursor-pointer overflow-hidden',
        isSelected
          ? 'border-primary bg-surface-container-high/70 shadow-gold-border-inset'
          : 'hover:border-primary/50 hover:bg-surface-container-high/60 hover:-translate-y-1'
      )}
    >
      {/* 1. Left Activation Rail */}
      <div
        aria-hidden="true"
        className={clsx(
          'absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300',
          isSelected || isActive
            ? 'bg-primary shadow-gold-glow'
            : 'bg-outline-variant/30 group-hover:bg-primary group-hover:shadow-gold-glow'
        )}
      />

      {/* 2. Top Header: Code, Domain Icon & Status */}
      <div className="flex justify-between items-start z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 border border-primary/40 bg-surface-container-lowest/60 flex items-center justify-center text-primary rounded-DEFAULT">
            <span className="material-symbols-outlined text-[18px]">
              {categoryIcons[experiment.category] || 'science'}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-meta-technical text-[11px] font-bold text-primary tracking-widest">
              {experiment.code}
            </span>
            <span className="font-meta-technical text-[9px] text-on-surface-variant/70 tracking-wider uppercase">
              {experiment.category}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          {isActive ? (
            <span className="px-2 py-0.5 border border-primary text-primary font-meta-technical text-[9px] tracking-widest bg-primary/10 rounded-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>ACTIVE</span>
            </span>
          ) : (
            <span className="px-2 py-0.5 border border-outline-variant/50 text-on-surface-variant/80 font-meta-technical text-[9px] tracking-widest bg-surface-container-lowest/80 rounded-sm">
              {experiment.status}
            </span>
          )}
        </div>
      </div>

      {/* 3. Narrative Title & Description */}
      <div className="flex flex-col gap-1.5 z-10">
        <h3 className="font-display-hero text-[20px] sm:text-[22px] text-on-surface group-hover:text-primary transition-colors font-bold leading-tight">
          {experiment.title}
        </h3>
        <p className="font-meta-technical text-[10px] text-primary/70 uppercase tracking-wider">
          {experiment.subtitle}
        </p>
        <p className="font-sans text-[13px] text-on-surface-variant/90 line-clamp-3 leading-relaxed mt-1">
          {experiment.description}
        </p>
      </div>

      {/* 4. Restrained Technology Chips */}
      {experiment.technologies && (
        <div className="flex flex-wrap gap-1.5 z-10 pt-1">
          {experiment.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-outline-variant/30 bg-surface-container-lowest/60 px-2 py-0.5 font-meta-technical text-[9px] text-on-surface-variant uppercase tracking-wider rounded-DEFAULT"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* 5. Footer: Difficulty, XP & Inspect Action */}
      <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between z-10 mt-1">
        <div className="flex flex-col gap-0.5">
          <MissionDifficulty level={experiment.difficulty || 4} size="sm" />
          <span className="font-meta-technical text-[10px] text-primary/80 font-semibold tracking-wider">
            +{experiment.xpReward} XP
          </span>
        </div>

        <QuestButton
          variant={isSelected ? 'solid' : 'ghost'}
          size="sm"
          icon="arrow_forward"
          iconPosition="right"
          onClick={(e) => {
            e.stopPropagation();
            onInspect && onInspect(experiment);
          }}
        >
          INSPECT
        </QuestButton>
      </div>
    </article>
  );
}

export default ExperimentCard;
