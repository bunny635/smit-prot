import React from 'react';

/**
 * SolutionMatrix — Architectural Implementation & Resolution
 * Displays project.solutionMatrix truthfully from PROJECTS_DATA.
 * Follows Stitch reference `quest_quickgo_project_detail`.
 */
export function SolutionMatrix({ solutionMatrix, techStack = [] }) {
  return (
    <div className="flex flex-col h-full">
      {/* Section Subheading */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="material-symbols-outlined text-primary text-2xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
          aria-hidden="true"
        >
          lightbulb
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-on-surface uppercase tracking-wide">
          Solution
        </h3>
        <span className="font-mono text-xs text-primary/70 ml-auto uppercase tracking-widest">
          02 // RESOLUTION
        </span>
      </div>

      {/* Relic Panel */}
      <div className="relative flex-1 p-6 md:p-8 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {/* Corner Brackets */}
        <span className="corner-bracket corner-top-left border-primary/40" />
        <span className="corner-bracket corner-top-right border-primary/40" />
        <span className="corner-bracket corner-bottom-left border-primary/40" />
        <span className="corner-bracket corner-bottom-right border-primary/40" />

        <div className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
          {solutionMatrix ? (
            solutionMatrix
          ) : (
            <span className="font-mono text-xs text-on-surface-variant/60 uppercase tracking-widest">
              SOLUTION MATRIX: DATA NOT PROVIDED
            </span>
          )}
        </div>

        {/* Tech Highlights from TechStack */}
        {techStack.length > 0 && (
          <div className="pt-4 border-t border-outline-variant/20">
            <div className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-widest mb-2">
              CORE RESOLUTION STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#20201a] border border-primary/30 text-primary font-mono text-xs tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SolutionMatrix;
