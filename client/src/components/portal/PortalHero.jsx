import React from 'react';

/**
 * PortalHero — Monolithic sector header for the Final Portal & Mission Conclusion.
 * Implements strict typography:
 * - Bodoni Moda (font-serif) for FINAL PORTAL and MISSION CONCLUSION
 * - JetBrains Mono (font-mono) for ARCHIVIST_01 and technical telemetry
 * - Inter (font-sans) for atmospheric descriptions
 */
export default function PortalHero({ telemetry, player }) {
  return (
    <header className="relative w-full text-center flex flex-col items-center pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 select-none">
      {/* Background ambient radial gold aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-primary/[0.035] rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Eyebrow Breadcrumb: FINAL PORTAL */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/25 bg-surface-container-lowest/80 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(242,202,80,0.06)]">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" aria-hidden="true" />
        <span className="font-mono text-[10px] sm:text-xs text-primary/90 tracking-[0.25em] uppercase">
          FINAL PORTAL // SECTOR 11
        </span>
        <span className="text-outline/40" aria-hidden="true">|</span>
        <span className="font-mono text-[10px] sm:text-xs text-outline tracking-widest uppercase">
          MISSION CONCLUSION
        </span>
      </div>

      {/* Monolithic Primary Headline: Bodoni Moda */}
      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary drop-shadow-[0_0_35px_rgba(242,202,80,0.25)] mb-3 text-center">
        MISSION CONCLUSION
      </h1>

      {/* Subtitle Hierarchy: ARCHIVIST_01 // READY FOR NEXT EXPEDITION */}
      <p className="font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] text-on-surface-variant uppercase mb-6 px-4 text-center max-w-2xl">
        {player?.name || 'ARCHIVIST_01'} // READY FOR NEXT EXPEDITION
      </p>

      {/* Technical Metadata Rail */}
      <div 
        className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 font-mono text-[11px] sm:text-xs text-outline border-t border-b border-outline-variant/20 py-3 px-4 sm:px-8 w-full max-w-3xl text-center"
        aria-label="Portal Metadata"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-primary/70">SECTOR:</span>
          <span className="text-on-surface font-semibold">{telemetry?.sector || 'SEC-11 // NODE-77'}</span>
        </div>
        <span className="text-outline/30 hidden xs:inline" aria-hidden="true">•</span>
        <div className="flex items-center gap-1.5">
          <span className="text-primary/70">MISSION STATUS:</span>
          <span className="text-on-surface font-semibold">{telemetry?.missionStatus || 'COMPLETE'}</span>
        </div>
        <span className="text-outline/30 hidden xs:inline" aria-hidden="true">•</span>
        <div className="flex items-center gap-1.5">
          <span className="text-primary/70">TRANSMISSION:</span>
          <span className="text-on-surface font-semibold">{telemetry?.contactChannel?.split('//')[0]?.trim() || 'READY'}</span>
        </div>
      </div>
    </header>
  );
}
