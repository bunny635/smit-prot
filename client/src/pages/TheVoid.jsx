import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePlayer } from '../context/PlayerContext';
import { VOID_RECORDS, VOID_TELEMETRY, getVoidArchiveStats } from '../data/voidArchive';
import VoidHero from '../components/void/VoidHero';
import VoidSignal from '../components/void/VoidSignal';
import VoidTelemetry from '../components/void/VoidTelemetry';
import VoidArchive from '../components/void/VoidArchive';
import VoidGate from '../components/void/VoidGate';

/**
 * TheVoid — Phase 12 Hidden Archive / Secret Room Experience.
 * Replaces /void with an atmospheric, quiet, cryptic, and technically deliberate sector.
 *
 * Visual & Narrative Equation:
 * SPACE + SIGNAL + FRAGMENTS
 *
 * Player State & Discovery:
 * Reuses existing PlayerContext (`player.isVoidUnlocked`, `toggleVoid()`).
 * Strictly awards NO fake XP and triggers NO fake achievements as no explicit Void XP
 * progression exists in the player state.
 */
export default function TheVoid() {
  const { player, toggleVoid } = usePlayer();
  const [isExtracted, setIsExtracted] = useState(player?.isVoidUnlocked || false);

  const archiveStats = getVoidArchiveStats(VOID_RECORDS);

  const handleExtractData = () => {
    setIsExtracted(true);
    // Reuses existing PlayerContext toggleVoid if not unlocked yet
    if (!player?.isVoidUnlocked && toggleVoid) {
      toggleVoid();
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none overflow-x-hidden">
      {/* Ambient Gold Spotlight - quiet and atmospheric */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_50%_20%,rgba(242,202,80,0.06)_0%,rgba(242,202,80,0.015)_45%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Subtle Noise / Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.025] bg-[linear-gradient(to_right,#f2ca50_1px,transparent_1px),linear-gradient(to_bottom,#f2ca50_1px,transparent_1px)] bg-[size:5rem_5rem]"
        aria-hidden="true"
      />

      {/* Depth & Coordinates Floater for Desktop */}
      <div 
        className="w-full flex flex-wrap justify-between items-center text-xs font-mono text-outline/60 py-2.5 border-b border-outline-variant/15 mb-6 px-2"
        aria-label="Sector Coordinates & Player State"
      >
        <div className="flex items-center gap-2">
          <span className="tracking-widest uppercase text-primary/80">
            {VOID_TELEMETRY.sector} // {VOID_TELEMETRY.node}
          </span>
          <span className="text-outline/30 hidden sm:inline">•</span>
          <span className="text-outline/70 hidden sm:inline">
            OPERATIVE: {player?.name || 'ARCHIVIST_01'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="tracking-wider text-outline/50 hidden md:inline">
            {VOID_TELEMETRY.depth}
          </span>
          <span className="tracking-wider text-outline/80">
            {VOID_TELEMETRY.coordinates}
          </span>
        </div>
      </div>

      {/* 1. Hero Monolith */}
      <VoidHero 
        telemetry={VOID_TELEMETRY} 
        player={player} 
      />

      {/* 2. Central Relic & Signal Extraction (Stitch Secret Room) */}
      <VoidSignal
        onExtract={handleExtractData}
        isExtracted={isExtracted}
        recordsCount={archiveStats.recordsCount}
      />

      {/* 3. Diagnostic Telemetry Stream */}
      <VoidTelemetry
        telemetry={VOID_TELEMETRY}
        isExtracted={isExtracted}
        recordsCount={archiveStats.recordsCount}
        stats={archiveStats}
      />

      {/* 4. Classified Records Archive & Mobile Detail Drawer */}
      <VoidArchive
        records={VOID_RECORDS}
        isExtractedAll={isExtracted}
      />

      {/* 5. Final Portal Transition Gate */}
      <VoidGate />

      {/* Return to Surface Navigation Anchor */}
      <div className="mt-8 mb-12">
        <Link
          to="/hub"
          className="flex items-center gap-2 text-outline hover:text-primary transition-colors font-mono text-xs tracking-widest uppercase group p-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          aria-label="Return to World Hub"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform" aria-hidden="true">
            arrow_back
          </span>
          <span>RETURN_TO_SURFACE</span>
        </Link>
      </div>
    </div>
  );
}
