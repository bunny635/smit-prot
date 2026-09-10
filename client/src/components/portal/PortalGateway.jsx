import React from 'react';

/**
 * PortalGateway — The dimensional gateway aperture inspired by Stitch Screen 24
 * (`the_final_portal_mission_conclusion`).
 *
 * Visual construction:
 * - Concentric orbital rings with dashed borders and subtle radial illumination
 * - Central invitation: "WHAT SHOULD WE BUILD NEXT?" in Bodoni Moda
 * - Action: "ENTER_PORTAL" smoothly scrolling to the #transmission contact gateway
 * - Accessible and supports prefers-reduced-motion
 */
export default function PortalGateway({ onEnterPortal }) {
  const handleEnterClick = (e) => {
    e.preventDefault();
    if (onEnterPortal) {
      onEnterPortal();
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
      aria-label="Final Gateway Aperture"
      className="relative w-full max-w-4xl mx-auto my-12 sm:my-16 px-4 flex flex-col items-center text-center select-none"
    >
      {/* Massive Dimensional Aperture Visual (Stitch Screen 24) */}
      <div 
        className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full flex items-center justify-center mb-8 sm:mb-12 group"
        aria-hidden="true"
      >
        {/* Deep ambient radial glow */}
        <div className="absolute inset-0 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none group-hover:bg-primary/[0.08] transition-colors duration-700" />

        {/* Outer subtle concentric ring */}
        <div className="absolute inset-0 rounded-full border border-primary/20 scale-100 group-hover:border-primary/40 transition-colors duration-700" />

        {/* Middle orbital dashed ring with slow rotation */}
        <div className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite] motion-reduce:animate-none pointer-events-none" />

        {/* Inner reverse dashed ring */}
        <div className="absolute inset-14 sm:inset-16 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite_reverse] motion-reduce:animate-none pointer-events-none" />

        {/* Core aperture halo */}
        <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-surface-container-lowest/80 border border-primary/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(242,202,80,0.15)] group-hover:shadow-[0_0_70px_rgba(242,202,80,0.3)] transition-all duration-700">
          <span className="material-symbols-outlined text-4xl sm:text-5xl text-primary drop-shadow-[0_0_15px_rgba(242,202,80,0.5)] group-hover:scale-110 transition-transform duration-500">
            portal
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] text-primary/70 tracking-[0.25em] uppercase mt-2">
            APERTURE // ACTIVE
          </span>
        </div>
      </div>

      {/* Glass Panel Callout (Stitch Screen 24) */}
      <div className="relative w-full max-w-2xl bg-surface-container-highest/30 backdrop-blur-2xl border border-outline-variant/30 rounded-xl p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.7)] flex flex-col items-center">
        {/* Eyebrow: FINAL QUEST */}
        <span className="font-mono text-xs text-primary/90 tracking-[0.3em] uppercase mb-4">
          FINAL QUEST
        </span>

        {/* Monolithic Header: Bodoni Moda */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold text-on-surface tracking-tight mb-8 drop-shadow-[0_0_20px_rgba(242,202,80,0.2)]">
          WHAT SHOULD WE BUILD NEXT?
        </h2>

        {/* Primary Action Button: ENTER_PORTAL */}
        <a
          href="#transmission"
          onClick={handleEnterClick}
          aria-label="Enter Final Portal to initialize contact transmission"
          className="min-h-[48px] px-8 py-3.5 rounded border border-primary/50 bg-primary/10 hover:bg-primary hover:text-surface-container-lowest text-primary font-mono text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(242,202,80,0.15)] hover:shadow-[0_0_35px_rgba(242,202,80,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss group"
        >
          <span>ENTER_PORTAL</span>
          <span className="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform" aria-hidden="true">
            arrow_downward
          </span>
        </a>

        {/* Corner Brackets Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50 pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}
