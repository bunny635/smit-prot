import React from 'react';
import { Link } from 'react-router-dom';

/**
 * VoidGate — Transition gateway leading toward Phase 13 Final Portal.
 * Establishes visual continuity with `the_final_portal_mission_conclusion`
 * without implementing contact forms or external submission handlers.
 */
export default function VoidGate() {
  return (
    <section 
      className="w-full max-w-3xl mx-auto my-16 sm:my-20 px-4 text-center flex flex-col items-center select-none"
      aria-label="Final Portal Gateway Transition"
    >
      {/* Dimensional Aperture Ring Visual - quiet, restrained gold glow */}
      <div 
        className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-primary/25 flex items-center justify-center mb-8 group"
        aria-hidden="true"
      >
        {/* Ambient Ring Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/[0.02] group-hover:bg-primary/[0.06] transition-colors duration-700 blur-md" />
        
        {/* Concentric Dotted Ring */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-dashed border-primary/35 animate-[spin_25s_linear_infinite] motion-reduce:animate-none" />

        {/* Center Portal Icon */}
        <div className="absolute w-16 h-16 rounded-full bg-surface-container-lowest border border-primary/40 flex items-center justify-center shadow-[0_0_25px_rgba(242,202,80,0.15)] group-hover:border-primary/70 transition-all duration-300">
          <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
            explore
          </span>
        </div>
      </div>

      {/* Gateway Telemetry Header */}
      <span className="font-mono text-xs text-primary/80 tracking-[0.3em] uppercase mb-2">
        FINAL HORIZON // PHASE 13 TRANSITION
      </span>

      {/* Monolithic Title: Bodoni Moda */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface tracking-tight mb-4 drop-shadow-[0_0_20px_rgba(242,202,80,0.15)]">
        THE NEXT TRANSMISSION
      </h2>

      {/* Continuity Body: Inter */}
      <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-lg leading-relaxed opacity-85 mb-8">
        Having traversed the deepest archive sector, the final dimensional threshold opens. 
        Beyond lies the terminal mission gateway for direct transmissions, partnership queries, and professional inquiries.
      </p>

      {/* Navigation Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Link
          to="/portal"
          aria-label="Approach Final Portal"
          className="min-h-[48px] w-full sm:w-auto px-8 py-3.5 rounded border border-primary/50 bg-primary/10 hover:bg-primary hover:text-surface-container-lowest text-primary font-mono text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(242,202,80,0.15)] hover:shadow-[0_0_30px_rgba(242,202,80,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss text-center"
        >
          <span>APPROACH FINAL PORTAL</span>
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
        </Link>

        <Link
          to="/hub"
          aria-label="Return to World Hub surface"
          className="min-h-[48px] w-full sm:w-auto px-6 py-3.5 rounded border border-outline-variant/30 hover:border-primary/40 text-outline hover:text-primary font-mono text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss text-center"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          <span>RETURN_TO_SURFACE</span>
        </Link>
      </div>
    </section>
  );
}
