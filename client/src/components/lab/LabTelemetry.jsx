import React from 'react';
import clsx from 'clsx';
import QuestButton from '../ui/QuestButton';

/**
 * LabTelemetry — Tactical HUD Telemetry & Featured Experiment Showcase
 * Features:
 * - Dynamic 5-column metric grid (computed from real data)
 * - Featured Active Experiment Showcase container inspired by Stitch forbidden_lab_experimental_core
 */
export function LabTelemetry({
  totalCount = 0,
  activeCount = 0,
  completeCount = 0,
  totalXP = 0,
  uniqueTechCount = 0,
  featuredExperiment = null,
  onInspectFeatured,
}) {
  return (
    <section aria-label="Lab Telemetry and Active Core" className="w-full flex flex-col gap-6 select-none">
      {/* 1. Dynamic Metric Readouts */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Total Experiments */}
        <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
            <span>EXPERIMENTS</span>
            <span className="material-symbols-outlined text-[14px] text-primary">science</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display-hero text-[24px] sm:text-[28px] text-primary font-bold leading-none">
              {String(totalCount).padStart(2, '0')}
            </span>
            <span className="font-meta-technical text-[10px] text-outline-variant">TOTAL</span>
          </div>
        </div>

        {/* Active Prototypes */}
        <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2 border-l-2 border-l-primary">
          <div className="flex items-center justify-between font-meta-technical text-[10px] text-primary tracking-widest uppercase">
            <span>ACTIVE</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display-hero text-[24px] sm:text-[28px] text-primary font-bold leading-none drop-shadow-[0_0_8px_rgba(242,202,80,0.5)]">
              {String(activeCount).padStart(2, '0')}
            </span>
            <span className="font-meta-technical text-[10px] text-primary/80">PROTOTYPES</span>
          </div>
        </div>

        {/* Completed Tests */}
        <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
            <span>COMPLETED</span>
            <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display-hero text-[24px] sm:text-[28px] text-on-surface font-bold leading-none">
              {String(completeCount).padStart(2, '0')}
            </span>
            <span className="font-meta-technical text-[10px] text-outline-variant">VALIDATED</span>
          </div>
        </div>

        {/* Total XP Reward */}
        <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
            <span>XP VALUATION</span>
            <span className="material-symbols-outlined text-[14px] text-primary">military_tech</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display-hero text-[22px] sm:text-[26px] text-primary-fixed font-bold leading-none">
              +{totalXP.toLocaleString()}
            </span>
            <span className="font-meta-technical text-[10px] text-primary/70">XP</span>
          </div>
        </div>

        {/* Unique Tech Cores */}
        <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
            <span>TECH MATRIX</span>
            <span className="material-symbols-outlined text-[14px] text-primary">hub</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display-hero text-[24px] sm:text-[28px] text-on-surface font-bold leading-none">
              {String(uniqueTechCount).padStart(2, '0')}
            </span>
            <span className="font-meta-technical text-[10px] text-outline-variant">CORES</span>
          </div>
        </div>
      </div>

      {/* 2. Featured Active Experiment Showcase Card */}
      {featuredExperiment && (
        <article className="w-full aethel-glass aethel-rim-border corner-brackets p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 relative overflow-hidden group">
          {/* Subtle Ambient Scanline Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          />

          {/* Left Holographic Chamber Graphic */}
          <div className="w-full lg:w-1/2 h-48 sm:h-56 bg-surface-container-lowest/90 border border-primary/25 rounded-DEFAULT relative overflow-hidden flex flex-col justify-between p-4 shadow-gold-border-inset">
            {/* Top Status Indicators */}
            <div className="flex justify-between items-center z-10 font-meta-technical text-[10px] tracking-widest">
              <span className="px-2 py-0.5 border border-primary/40 text-primary bg-primary/10 rounded-sm">
                CORE: {featuredExperiment.code}
              </span>
              <span className="flex items-center gap-1 text-primary animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>ONLINE // STABLE</span>
              </span>
            </div>

            {/* Center Animated Schematic Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-32 h-32 border border-primary/40 rounded-full animate-spin-slow" />
              <div className="absolute w-24 h-24 border border-dashed border-primary/60 rounded-full" />
              <div className="absolute w-40 h-40 border border-primary/20 rotate-45" />
            </div>

            {/* Bottom Coordinate Telemetry */}
            <div className="flex justify-between items-end z-10 font-meta-technical text-[10px] text-on-surface-variant/70">
              <span>{featuredExperiment.experimentType}</span>
              <span className="text-primary/80">{featuredExperiment.coordinates}</span>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3.5 z-10">
            <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>ACTIVE RESEARCH PROTOTYPE</span>
            </div>

            <h2 className="font-display-hero text-[26px] sm:text-[32px] md:text-[36px] text-on-surface group-hover:text-primary transition-colors font-bold leading-tight">
              {featuredExperiment.title}
            </h2>

            <p className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant/90 leading-relaxed">
              {featuredExperiment.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredExperiment.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="border border-outline-variant/40 bg-surface-container-lowest/60 px-2.5 py-0.5 font-meta-technical text-[10px] text-on-surface-variant uppercase tracking-wider rounded-DEFAULT"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <QuestButton
                variant="solid"
                size="md"
                icon="science"
                iconPosition="left"
                onClick={() => onInspectFeatured && onInspectFeatured(featuredExperiment)}
              >
                INSPECT EXPERIMENT
              </QuestButton>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default LabTelemetry;
