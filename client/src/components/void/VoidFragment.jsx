import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * VoidFragment — Asymmetric classified record card with clipped corners,
 * gold micro-accents, technical metadata, decode transitions, and evidence badges.
 *
 * Requirements:
 * - Bodoni Moda for titles
 * - JetBrains Mono for metadata
 * - Inter for narrative descriptions
 * - Evidence Badge: VERIFIED REPOSITORY ARTIFACT vs EXPLICIT INTERFACE LORE
 * - Short, interruptible decoding transition
 * - Mobile Detail Drawer (<768px) with backdrop, visible close button, Escape key support
 */
export default function VoidFragment({
  record,
  isInitiallyDecrypted = false,
  onOpenMobileDrawer,
}) {
  const [decodeState, setDecodeState] = useState(
    isInitiallyDecrypted || record.status === 'DECRYPTED' ? 'DECODED' : 'LOCKED'
  );
  const [isExpanded, setIsExpanded] = useState(
    isInitiallyDecrypted || record.status === 'DECRYPTED'
  );
  const timeoutRef = useRef(null);

  // Synchronize when global extraction occurs
  useEffect(() => {
    if (isInitiallyDecrypted && decodeState === 'LOCKED') {
      setDecodeState('DECODED');
      setIsExpanded(true);
    }
  }, [isInitiallyDecrypted]);

  // Clean up any pending timer
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDecodeToggle = () => {
    // Check if on mobile: trigger drawer if handler provided and width < 768
    if (window.innerWidth < 768 && onOpenMobileDrawer) {
      onOpenMobileDrawer(record, decodeState);
      return;
    }

    if (decodeState === 'LOCKED') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setDecodeState('DECODED');
        setIsExpanded(true);
        return;
      }

      setDecodeState('DECODING');
      timeoutRef.current = setTimeout(() => {
        setDecodeState('DECODED');
        setIsExpanded(true);
      }, 500);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const isDecoded = decodeState === 'DECODED';
  const isDecoding = decodeState === 'DECODING';

  return (
    <article
      className={`relative w-full rounded-lg transition-all duration-500 overflow-hidden border select-none ${
        isDecoded
          ? 'bg-surface-container-low/75 border-primary/30 shadow-[0_0_30px_rgba(0,0,0,0.6)]'
          : 'bg-surface-container-lowest/40 border-outline-variant/20 hover:border-primary/25'
      }`}
      aria-label={`Void Record ${record.code}: ${record.title}`}
    >
      {/* Top Header Rail: Code, Classification, Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-4 sm:p-5 border-b border-outline-variant/15">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-primary tracking-[0.2em]">
            {record.code}
          </span>
          <span className="text-outline/30" aria-hidden="true">•</span>
          <span className="font-mono text-[11px] text-outline tracking-wider uppercase">
            {record.securityLevel}
          </span>
        </div>

        {/* Status Indicator & Evidence Badge Tag */}
        <div className="flex items-center gap-2">
          {record.evidenceType === 'VERIFIED_ARTIFACT' ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider bg-primary/10 border border-primary/30 text-primary uppercase">
              <span className="material-symbols-outlined text-[12px]" aria-hidden="true">verified</span>
              <span>VERIFIED ARTIFACT</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider bg-surface-container-highest/60 border border-outline-variant/30 text-outline uppercase">
              <span className="material-symbols-outlined text-[12px]" aria-hidden="true">auto_awesome</span>
              <span>INTERFACE LORE</span>
            </span>
          )}

          <div className="flex items-center gap-1.5 ml-1">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isDecoded ? 'bg-primary' : isDecoding ? 'bg-secondary animate-ping' : 'bg-outline-variant'
              }`}
              aria-hidden="true"
            />
            <span
              className={`font-mono text-[10px] tracking-widest uppercase ${
                isDecoded ? 'text-primary font-semibold' : 'text-outline/70'
              }`}
            >
              {decodeState}
            </span>
          </div>
        </div>
      </div>

      {/* Main Body Content */}
      <div className="p-4 sm:p-6">
        {/* Record Type & Signal Frequency */}
        <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-outline-variant mb-2">
          <span className="tracking-widest uppercase">{record.category}</span>
          <span>FREQ: {record.signalFrequency}</span>
        </div>

        {/* Title: Bodoni Moda */}
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-on-surface hover:text-primary transition-colors tracking-tight mb-3">
          {record.title}
        </h3>

        {/* Summary Description: Inter */}
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed opacity-90 mb-4">
          {record.description}
        </p>

        {/* Expanded Decoded Narrative Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-4">
            {/* Decoded Narrative */}
            <div>
              <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase block mb-1.5">
                DECRYPTED ARCHIVE NARRATIVE
              </span>
              <p className="font-sans text-xs sm:text-sm text-on-surface/80 leading-relaxed bg-surface-container-lowest/80 p-3.5 rounded border border-outline-variant/15">
                {record.narrative}
              </p>
            </div>

            {/* Evidence Verification Details */}
            {record.evidenceType === 'VERIFIED_ARTIFACT' ? (
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono bg-surface-container-lowest/90 px-3.5 py-2 rounded border border-primary/25">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary" aria-hidden="true">verified</span>
                  <span className="text-outline uppercase">VERIFIED CODEBASE ARTIFACT:</span>
                  <span className="text-primary font-semibold">{record.realArtifact}</span>
                </div>

                {record.relatedExperiment && (
                  <Link
                    to="/lab"
                    className="text-xs text-secondary hover:text-primary underline uppercase tracking-wider font-mono"
                    aria-label={`Inspect ${record.realArtifact} in Forbidden Lab`}
                  >
                    INSPECT IN LAB →
                  </Link>
                )}
                {record.relatedProject && !record.relatedExperiment && (
                  <Link
                    to="/quests"
                    className="text-xs text-secondary hover:text-primary underline uppercase tracking-wider font-mono"
                    aria-label={`Inspect ${record.realArtifact} in Quest Arena`}
                  >
                    INSPECT IN ARENA →
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono bg-surface-container-lowest/90 px-3.5 py-2 rounded border border-outline-variant/20">
                <span className="material-symbols-outlined text-sm text-outline" aria-hidden="true">info</span>
                <span className="text-outline uppercase">SIMULATION CONSTRUCT:</span>
                <span className="text-on-surface-variant/80">EXPLICIT SMIT QUEST INTERFACE LORE</span>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {record.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-surface-container-highest/60 border border-outline-variant/30 font-mono text-[10px] text-on-surface-variant tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="font-mono text-[10px] text-outline/60 tracking-wider">
            COORD: {record.coordinates}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile-only Full Briefing Button */}
            <button
              type="button"
              onClick={() => onOpenMobileDrawer?.(record, decodeState)}
              aria-label={`Open mobile drawer for ${record.title}`}
              className="md:hidden min-h-[44px] px-3 py-2 rounded border border-outline-variant/30 hover:border-primary/40 text-outline hover:text-primary font-mono text-xs tracking-wider uppercase transition-colors"
            >
              BRIEFING
            </button>

            {/* Main Decode / Collapse Button */}
            <button
              type="button"
              onClick={handleDecodeToggle}
              disabled={isDecoding}
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Collapse' : 'Decode'} record ${record.code}`}
              className="min-h-[44px] px-4 py-2 rounded border border-primary/25 hover:border-primary hover:bg-primary/10 text-primary font-mono text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss"
            >
              {isDecoding ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" aria-hidden="true" />
                  <span>DECODING...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {isExpanded ? 'unfold_less' : 'lock_open'}
                  </span>
                  <span>{isExpanded ? 'COLLAPSE' : isDecoded ? 'INSPECT' : 'DECODE_RECORD'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clipped Corner Brackets Accents */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary/40 pointer-events-none" aria-hidden="true" />
    </article>
  );
}
