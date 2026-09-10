import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';

/**
 * QuestDetailHero — Top Viewport Mission Showcase
 * Follows Stitch reference `quest_quickgo_project_detail`.
 * Establishes identity, mission scope, metadata grid, and holographic artifact preview.
 */
export function QuestDetailHero({ project }) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  if (!project) return null;

  // Format date timeline if available (e.g. 2024-03 -> March 2024)
  const formatTimeline = (dateStr) => {
    if (!dateStr) return 'ARCHIVE ACTIVE';
    try {
      const [year, month] = dateStr.split('-');
      const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
    } catch {
      return dateStr.toUpperCase();
    }
  };

  const scrollToBriefing = () => {
    const el = document.getElementById('mission-briefing');
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-12 md:pb-16 flex flex-col gap-8 md:gap-12">
      {/* Technical Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-on-surface-variant flex-wrap">
        <Link
          to="/quests"
          className="text-primary hover:underline hover:text-primary-fixed-dim transition-colors uppercase tracking-widest flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-xs">arrow_back</span>
          QUEST ARENA
        </Link>
        <span className="text-outline-variant/60">/</span>
        <span className="text-primary/70 uppercase tracking-widest">
          {project.questNumber || `QUEST ${project.id?.replace('quest-', '')}`}
        </span>
        <span className="text-outline-variant/60">/</span>
        <span className="text-on-surface uppercase tracking-wider font-semibold truncate max-w-[200px] sm:max-w-none">
          {project.title}
        </span>
      </nav>

      {/* Hero Showcase (Grid on desktop, stacked on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Quest Identity & Telemetry */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Project ID Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-primary block" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
              PROJECT_ID: {project.id?.toUpperCase()}
            </span>
          </div>

          {/* Title in Bodoni Moda */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface tracking-tight leading-[1.08] mb-3 uppercase font-bold drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            {project.title}
          </h1>

          {/* Subtitle in JetBrains Mono */}
          <p className="font-mono text-xs sm:text-sm text-primary tracking-widest uppercase mb-4 font-semibold">
            {project.subtitle}
          </p>

          {/* Description in Inter */}
          <p className="font-sans text-sm sm:text-base text-on-surface-variant/90 max-w-xl leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToBriefing}
              className="px-6 py-3 border border-primary/40 bg-[#20201a]/80 text-primary font-mono text-xs uppercase tracking-widest hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">assignment</span>
              MISSION BRIEFING
            </button>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-outline-variant/40 bg-surface-container-low/60 text-on-surface-variant font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary/50 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                DEPLOY ARCHIVE
              </a>
            ) : (
              <div
                className="px-6 py-3 border border-outline-variant/30 bg-surface-container-low/30 text-outline-variant/70 font-mono text-xs uppercase tracking-widest flex items-center gap-2 cursor-not-allowed select-none"
                title="Repository not configured in archives"
                aria-disabled="true"
              >
                <span className="material-symbols-outlined text-sm">code_off</span>
                REPO NOT CONFIGURED
              </div>
            )}
          </div>
        </div>

        {/* Right: Holographic Relic Showcase Container */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="relative w-full max-w-md h-[280px] sm:h-[340px] md:h-[380px] p-6 border border-outline-variant/30 bg-[#14140f]/80 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] group">
            {/* Corner Brackets */}
            <span className="corner-bracket corner-top-left border-primary/50" />
            <span className="corner-bracket corner-top-right border-primary/50" />
            <span className="corner-bracket corner-bottom-left border-primary/50" />
            <span className="corner-bracket corner-bottom-right border-primary/50" />

            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.04] via-transparent to-primary/[0.08] pointer-events-none" />
            <div className="absolute w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Geometric Holographic SVG Relic */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-4">
                {/* Outer Concentric Orbital Ring */}
                <div
                  className={`absolute inset-0 rounded-full border border-dashed border-primary/30 ${
                    prefersReducedMotion ? '' : 'animate-[spin_40s_linear_infinite]'
                  }`}
                />
                {/* Secondary Ring */}
                <div
                  className={`absolute inset-3 rounded-full border border-primary/20 ${
                    prefersReducedMotion ? '' : 'animate-[spin_25s_linear_infinite_reverse]'
                  }`}
                />
                {/* Inner Hexagonal Shield SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className={`w-28 h-28 sm:w-32 sm:h-32 text-primary drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] ${
                    prefersReducedMotion ? '' : 'animate-pulse'
                  }`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    className="opacity-70"
                  />
                  <polygon
                    points="50,15 80,32 80,68 50,85 20,68 20,32"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-90"
                  />
                  {/* Central Node Matrix */}
                  <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="4" fill="currentColor" />
                  {/* Radial Energy Lines */}
                  <line x1="50" y1="15" x2="50" y2="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="50" y1="60" x2="50" y2="85" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="20" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="60" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
                </svg>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-semibold">
                  ARTIFACT_CORE_ONLINE
                </span>
              </div>
              <div className="font-mono text-[10px] text-on-surface-variant/60 tracking-wider mt-0.5">
                SECTOR ARCHIVE // ENCRYPTED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relic Metadata Grid (4 Columns, per Stitch reference) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4 border-t border-outline-variant/20">
        {/* Metric 1: Category */}
        <div className="relative pl-4 py-2 border-l-2 border-primary/70 bg-[#181814]/40">
          <div className="absolute top-1 right-2 font-mono text-[10px] text-primary/40 tracking-wider">
            COORD: 45.1
          </div>
          <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-1">
            CATEGORY
          </div>
          <div className="font-mono text-sm sm:text-base font-semibold text-on-surface uppercase">
            {project.category || 'GENERAL ARCHIVE'}
          </div>
        </div>

        {/* Metric 2: Timeline */}
        <div className="relative pl-4 py-2 border-l-2 border-primary/70 bg-[#181814]/40">
          <div className="absolute top-1 right-2 font-mono text-[10px] text-primary/40 tracking-wider">
            COORD: 45.2
          </div>
          <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-1">
            TIMELINE
          </div>
          <div className="font-mono text-sm sm:text-base font-semibold text-on-surface uppercase">
            {formatTimeline(project.date)}
          </div>
        </div>

        {/* Metric 3: Status */}
        <div className="relative pl-4 py-2 border-l-2 border-primary/70 bg-[#181814]/40">
          <div className="absolute top-1 right-2 font-mono text-[10px] text-primary/40 tracking-wider">
            COORD: 45.3
          </div>
          <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-1">
            STATUS
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                project.status === 'COMPLETE'
                  ? 'bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                  : 'bg-primary/80 animate-pulse'
              }`}
            />
            <span className="font-mono text-sm sm:text-base font-semibold text-on-surface uppercase">
              {project.status === 'COMPLETE' ? 'Archived / Complete' : 'Active Quest'}
            </span>
          </div>
        </div>

        {/* Metric 4: XP Reward */}
        <div className="relative pl-4 py-2 border-l-2 border-primary/70 bg-[#181814]/40">
          <div className="absolute top-1 right-2 font-mono text-[10px] text-primary/40 tracking-wider">
            COORD: 45.4
          </div>
          <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-1">
            XP REWARD
          </div>
          <div className="font-mono text-sm sm:text-base font-bold text-primary uppercase">
            +{project.xpReward || 0} XP
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestDetailHero;
