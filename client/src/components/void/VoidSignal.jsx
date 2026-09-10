import React, { useState, useEffect } from 'react';

/**
 * VoidSignal — Central floating relic & interactive signal extraction trigger.
 * Faithfully brings the Stitch `the_void_secret_room` visual architecture
 * into the SMIT QUEST ecosystem with CSS/SVG animations and high tactile polish.
 */
export default function VoidSignal({ onExtract, isExtracted, recordsCount = 5 }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle parallax tilt effect on desktop
  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleExtractClick = () => {
    if (isExtracted || isProcessing) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onExtract?.();
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onExtract?.();
    }, 650);
  };

  return (
    <section 
      aria-label="Central Void Artifact and Signal Extraction"
      className="relative w-full max-w-xl mx-auto my-8 sm:my-12 px-4 select-none"
    >
      {/* Relic Artifact Container with 3D Parallax Tilt */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative w-full rounded-lg bg-surface-container-highest/35 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-700 p-6 sm:p-8 md:p-10 text-center flex flex-col items-center group shadow-[0_0_60px_rgba(0,0,0,0.85)]"
      >
        {/* Animated Energy Line on Left Border (Stitch Continuity) */}
        <div 
          className="absolute -left-px top-1/4 bottom-1/4 w-[2px] overflow-hidden opacity-70 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[flow_3s_linear_infinite]" />
        </div>

        {/* Ambient Relic Glow Box Shadow */}
        <div 
          className="absolute inset-0 rounded-lg bg-primary/[0.015] group-hover:bg-primary/[0.035] transition-colors duration-700 pointer-events-none"
          aria-hidden="true"
        />

        {/* Central Sigil / Obsidian Relic Emblem */}
        <div 
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-primary/35 flex items-center justify-center bg-surface-container-lowest shadow-[inset_0_0_20px_rgba(242,202,80,0.12)] relative overflow-hidden group-hover:scale-105 group-hover:border-primary/70 transition-all duration-500 mb-6"
          aria-hidden="true"
        >
          {/* Subtle rotating radar sweep */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(242,202,80,0.18)_360deg)] animate-[spin_8s_linear_infinite] motion-reduce:hidden pointer-events-none" />
          
          {/* Concentric Gold Ring Accent */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-primary/25 flex items-center justify-center bg-primary/[0.03]">
            {/* Isometric Token Glyph */}
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary drop-shadow-[0_0_12px_rgba(242,202,80,0.5)]">
              token
            </span>
          </div>
        </div>

        {/* Technical Identifier */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
          <span 
            className="w-1.5 h-1.5 rounded-full bg-primary animate-ping motion-reduce:animate-none shrink-0" 
            aria-hidden="true" 
          />
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-outline uppercase text-center break-words">
            CLASSIFIED_RECORD_0X9A // ANOMALY_DETECTED
          </span>
        </div>

        {/* Headline: Bodoni Moda */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-3 drop-shadow-[0_0_20px_rgba(242,202,80,0.25)]">
          {isExtracted ? 'Signal Decoded' : 'Truth Found'}
        </h2>

        {/* Atmospheric Narrative Body: Inter */}
        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed opacity-85 mb-8">
          {isExtracted
            ? 'Beyond the documented systems lies the core architecture. The dimensional partition has subsided, illuminating classified telemetry fragments.'
            : 'Beyond the documented systems lies the core architecture. You have reached the absolute depths of the simulation. Record this anomaly.'}
        </p>

        {/* Action Trigger Button */}
        <button
          type="button"
          onClick={handleExtractClick}
          disabled={isExtracted || isProcessing}
          aria-label={isExtracted ? 'Signal stabilized, classified records unlocked' : 'Extract classified data and decode anomaly'}
          className={`relative min-h-[48px] px-8 py-3.5 rounded border font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss ${
            isExtracted
              ? 'border-primary/50 bg-primary/10 text-primary cursor-default shadow-[0_0_20px_rgba(242,202,80,0.15)]'
              : 'border-primary/35 text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(242,202,80,0.25)] active:scale-95'
          }`}
        >
          {isProcessing ? (
            <>
              <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" aria-hidden="true" />
              <span>DECRYPTING_SIGNAL...</span>
            </>
          ) : isExtracted ? (
            <>
              <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">verified</span>
              <span>DATA_EXTRACTED // {String(recordsCount).padStart(2, '0')}_RECORDS_REVEALED</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">download</span>
              <span>EXTRACT_DATA</span>
            </>
          )}
        </button>

        {/* Corner Brackets Accents (Aethelgard Relic HUD style) */}
        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-primary/50 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-primary/50 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-primary/50 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-primary/50 pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}
