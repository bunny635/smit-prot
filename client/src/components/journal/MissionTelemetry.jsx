import React from 'react';

/**
 * MissionTelemetry — Tactical HUD Telemetry for Quest Journal
 * Computes and displays dynamic metrics derived directly from the experience registry:
 * - TOTAL EXPEDITIONS
 * - ACTIVE MISSIONS
 * - ARCHIVED RECORDS
 * - CUMULATIVE XP REWARD
 * - PRIMARY STACK CORES
 */
export function MissionTelemetry({
  totalCount = 0,
  activeCount = 0,
  completedCount = 0,
  archivedCount = 0,
  totalXP = 0,
  uniqueTechCount = 0,
}) {
  return (
    <section
      aria-label="Mission Telemetry Overview"
      className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 select-none"
    >
      {/* 1. Total Expeditions */}
      <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
        <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
          <span>EXPEDITIONS</span>
          <span className="material-symbols-outlined text-[14px] text-primary">auto_stories</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display-hero text-[24px] sm:text-[28px] text-primary font-bold leading-none">
            {String(totalCount).padStart(2, '0')}
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant">LOGS</span>
        </div>
      </div>

      {/* 2. Active Operations */}
      <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2 border-l-2 border-l-primary">
        <div className="flex items-center justify-between font-meta-technical text-[10px] text-primary tracking-widest uppercase">
          <span>ACTIVE</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display-hero text-[24px] sm:text-[28px] text-primary font-bold leading-none drop-shadow-[0_0_8px_rgba(242,202,80,0.5)]">
            {String(activeCount).padStart(2, '0')}
          </span>
          <span className="font-meta-technical text-[10px] text-primary/80">CURRENT</span>
        </div>
      </div>

      {/* 3. Completed Missions */}
      <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
        <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
          <span>COMPLETED</span>
          <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display-hero text-[24px] sm:text-[28px] text-on-surface font-bold leading-none">
            {String(completedCount).padStart(2, '0')}
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant">MISSIONS</span>
        </div>
      </div>

      {/* 4. Archived Operations */}
      <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
        <div className="flex items-center justify-between font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
          <span>ARCHIVED</span>
          <span className="material-symbols-outlined text-[14px] text-outline">inventory_2</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display-hero text-[24px] sm:text-[28px] text-on-surface-variant font-bold leading-none">
            {String(archivedCount).padStart(2, '0')}
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant">VAULTED</span>
        </div>
      </div>

      {/* 5. Cumulative XP Reward */}
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

      {/* 6. Unique Tech Stack Cores */}
      <div className="aethel-glass aethel-rim-border corner-brackets p-3.5 sm:p-4 flex flex-col justify-between gap-2">
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
    </section>
  );
}

export default MissionTelemetry;
