import React from 'react';

/**
 * SkillLegend — Compact Visual State Legend
 * Explains node and pathway states without cluttering the graph.
 */
export function SkillLegend() {
  return (
    <div
      aria-label="Skill Matrix Legend"
      className="flex flex-wrap items-center gap-5 px-4 py-2 bg-surface-container-lowest/70 border border-outline-variant/30 rounded-DEFAULT text-on-surface-variant font-meta-technical text-[10px] uppercase tracking-wider"
    >
      <span className="text-primary/70 font-semibold">LEGEND //</span>

      {/* State 1: Active Node */}
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full border border-primary bg-primary/20 shadow-gold-glow-subtle" />
        <span>ACTIVE NODE</span>
      </div>

      {/* State 2: Selected Node */}
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
        </span>
        <span className="text-primary font-bold">SELECTED TARGET</span>
      </div>

      {/* State 3: Dependency Path */}
      <div className="flex items-center gap-1.5">
        <span className="w-4 h-0 border-t border-dashed border-primary" />
        <span>ENERGY CABLE</span>
      </div>
    </div>
  );
}

export default SkillLegend;
