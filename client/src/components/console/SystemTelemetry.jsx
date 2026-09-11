import React from 'react';
import { usePlayer } from '../../context/PlayerContext';

/**
 * SystemTelemetry — Live Diagnostic Telemetry Grid
 * Features:
 * - Dynamically computes metrics from real client-side registries
 * - Shows Operative status, level, XP, and sector databank totals
 */
export function SystemTelemetry({
  projectsCount = 4,
  skillsCount = 8,
  labCount = 5,
  memoryCount = 7,
  educationCount = 5,
  achievementsCount = 8,
  routesCount = 12,
}) {
  const { player } = usePlayer();

  return (
    <section
      aria-label="Live System Telemetry"
      className="w-full aethel-glass aethel-rim-border corner-brackets p-4 md:p-5 select-none"
    >
      <div className="flex items-center justify-between border-b border-outline-variant/25 pb-2 mb-4">
        <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase font-bold">
          <span className="material-symbols-outlined text-[16px]">monitoring</span>
          <span>LIVE_SYSTEM_DIAGNOSTICS</span>
        </div>

        <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary/80">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>TELEMETRY SYNCHRONIZED</span>
        </div>
      </div>

      {/* Grid of Telemetry Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 font-meta-technical text-[11px]">
        {/* Operative State */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">OPERATIVE</span>
          <span className="text-on-surface font-bold text-sm truncate">{player.name}</span>
          <span className="text-[9px] text-primary/70 mt-1">STATE: ONLINE</span>
        </div>

        {/* Level & XP */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">PLAYER LEVEL</span>
          <span className="text-primary font-bold text-sm">LVL {player.level}</span>
          <span className="text-[9px] text-primary-fixed mt-1">{player.currentXP} / {player.maxXP} XP</span>
        </div>

        {/* Active Sectors */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">WORLD SECTORS</span>
          <span className="text-on-surface font-bold text-sm">{routesCount} ROUTES</span>
          <span className="text-[9px] text-outline mt-1">{player.visitedPages?.length || 0} VISITED</span>
        </div>

        {/* Quest Projects */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">QUEST ARENA</span>
          <span className="text-primary-container font-bold text-sm">{projectsCount} MISSIONS</span>
          <span className="text-[9px] text-outline-variant mt-1">DATABANK: ACTIVE</span>
        </div>

        {/* Skill Peaks */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">SKILL MATRIX</span>
          <span className="text-secondary font-bold text-sm">{skillsCount} NODES</span>
          <span className="text-[9px] text-outline-variant mt-1">CAPABILITY PEAK</span>
        </div>

        {/* Lab & Milestones */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-DEFAULT flex flex-col justify-between">
          <span className="text-[9px] text-outline-variant uppercase tracking-widest block">LAB & HONORS</span>
          <span className="text-on-surface font-bold text-sm">{labCount + achievementsCount} RECORDS</span>
          <span className="text-[9px] text-outline-variant mt-1">{achievementsCount} HONORS</span>
        </div>
      </div>
    </section>
  );
}

export default SystemTelemetry;
