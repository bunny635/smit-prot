import React from 'react';
import { Link } from 'react-router-dom';
import { VERIFIED_CONTACT } from '../../data/portalData';

/**
 * PortalConclusion — Grand finale sector inspired by Stitch Screen 28
 * (`the_final_portal_mission_conclusion`).
 *
 * Requirements:
 * - QUEST COMPLETE in Bodoni Moda with gold glow
 * - SMIT — ARCHITECT // ARCHIVIST_01
 * - Full-width 100% SMIT QUEST sector progress rail
 * - "The Odyssey Continues" with blinking terminal cursor
 * - Closing statement: "The quest was never the destination. It was the system of discovery. The next expedition begins here."
 * - Actions:
 *   - START A NEW EXPEDITION -> #transmission
 *   - RETURN TO WORLD HUB -> /hub
 *   - REVISIT QUEST ARENA -> /quests
 */
export default function PortalConclusion({ onStartNewExpedition }) {
  const handleScrollToTransmission = (e) => {
    e.preventDefault();
    if (onStartNewExpedition) {
      onStartNewExpedition();
    } else {
      const target = document.getElementById('transmission');
      if (target) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  return (
    <section 
      aria-label="Mission Conclusion Finale"
      className="relative w-full max-w-4xl mx-auto my-16 sm:my-24 px-4 py-12 sm:py-16 text-center flex flex-col items-center justify-center select-none"
    >
      {/* Ambient Halo */}
      <div 
        className="absolute inset-0 z-0 opacity-35 bg-[radial-gradient(ellipse_at_center,rgba(242,202,80,0.08)_0%,transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        {/* Monolithic Grand Headline: Bodoni Moda */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-primary tracking-wider uppercase drop-shadow-[0_0_35px_rgba(242,202,80,0.35)] mb-3">
          QUEST COMPLETE
        </h2>

        {/* Subtitle / Operative Title */}
        <p className="font-mono text-xs sm:text-sm text-on-surface-variant tracking-[0.25em] uppercase mb-6">
          {VERIFIED_CONTACT.name} — ARCHITECT // {VERIFIED_CONTACT.handle}
        </p>

        {/* 100% Frontend Sector Progression Rail (Stitch Screen 28) */}
        <div 
          className="w-full max-w-md h-2 bg-surface-container-highest/60 rounded-full mb-6 overflow-hidden border border-outline-variant/30"
          role="progressbar"
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="SMIT QUEST 12-Sector Completion Rail"
        >
          <div className="h-full bg-primary w-full shadow-[0_0_12px_rgba(242,202,80,0.8)]" />
        </div>

        <span className="font-mono text-[10px] sm:text-[11px] text-outline tracking-[0.2em] uppercase mb-6">
          12 OF 12 WORLD SECTORS TRAVERSED // ODYSSEY 100% SYNCHRONIZED
        </span>

        {/* Closing Narrative */}
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-on-surface italic mb-4">
          The Odyssey Continues<span className="inline-block w-2.5 h-6 bg-primary ml-1.5 animate-pulse motion-reduce:animate-none align-middle" aria-hidden="true" />
        </p>

        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed opacity-85 mb-10">
          The quest was never the destination. It was the system of discovery. 
          Architecture, spatial physics, and low-level shader craft converged to forge this digital reality. 
          The next expedition begins here.
        </p>

        {/* Primary & Secondary Action Cluster */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Action: START A NEW EXPEDITION */}
          <a
            href="#transmission"
            onClick={handleScrollToTransmission}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded border border-primary/60 bg-primary/15 hover:bg-primary hover:text-surface-container-lowest text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,202,80,0.2)] hover:shadow-[0_0_35px_rgba(242,202,80,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss text-center"
          >
            <span>START A NEW EXPEDITION</span>
            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_upward</span>
          </a>

          {/* Navigation Action: RETURN TO WORLD HUB */}
          <Link
            to="/hub"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded border border-outline-variant/30 hover:border-primary/40 text-outline hover:text-primary font-mono text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss text-center"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">hub</span>
            <span>RETURN TO WORLD HUB</span>
          </Link>

          {/* Navigation Action: REVISIT QUEST ARENA */}
          <Link
            to="/quests"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded border border-outline-variant/30 hover:border-primary/40 text-outline hover:text-primary font-mono text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss text-center"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">military_tech</span>
            <span>REVISIT QUEST ARENA</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
