import React from 'react';

/**
 * ProblemStatement — Mission Objective & Domain Friction
 * Displays project.problemStatement truthfully from PROJECTS_DATA.
 * Follows Stitch reference `quest_quickgo_project_detail`.
 */
export function ProblemStatement({ problemStatement }) {
  return (
    <div className="flex flex-col h-full">
      {/* Section Subheading */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="material-symbols-outlined text-primary text-2xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
          aria-hidden="true"
        >
          report_problem
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-on-surface uppercase tracking-wide">
          Problem
        </h3>
        <span className="font-mono text-xs text-primary/70 ml-auto uppercase tracking-widest">
          01 // CONTEXT
        </span>
      </div>

      {/* Relic Panel */}
      <div className="relative flex-1 p-6 md:p-8 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {/* Corner Brackets */}
        <span className="corner-bracket corner-top-left border-primary/40" />
        <span className="corner-bracket corner-top-right border-primary/40" />
        <span className="corner-bracket corner-bottom-left border-primary/40" />
        <span className="corner-bracket corner-bottom-right border-primary/40" />

        <div className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
          {problemStatement ? (
            problemStatement
          ) : (
            <span className="font-mono text-xs text-on-surface-variant/60 uppercase tracking-widest">
              PROBLEM STATEMENT: DATA NOT PROVIDED
            </span>
          )}
        </div>

        {/* Diagnostic Metadata Footer */}
        <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between font-mono text-[11px] text-primary/60">
          <span>OPERATIONAL FRICTION</span>
          <span>DIAGNOSTIC: VERIFIED</span>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatement;
