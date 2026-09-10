import React from 'react';
import ProblemStatement from './ProblemStatement';
import SolutionMatrix from './SolutionMatrix';

/**
 * MissionBriefing — Complete Technical Narrative
 * Orchestrates Problem Statement and Solution Matrix with Aethelgard styling.
 */
export function MissionBriefing({ project }) {
  if (!project) return null;

  return (
    <section id="mission-briefing" className="py-8 md:py-12 flex flex-col gap-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary block" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
            MISSION BRIEFING // ARCHIVAL ANALYSIS
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase tracking-tight font-bold">
          Problem & Solution Matrix
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant/80 max-w-2xl">
          Detailed technical exploration outlining the operational bottlenecks encountered and the
          architectural patterns engineered to overcome them.
        </p>
      </div>

      {/* Two-Column Problem & Solution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <ProblemStatement problemStatement={project.problemStatement} />
        <SolutionMatrix solutionMatrix={project.solutionMatrix} techStack={project.techStack} />
      </div>
    </section>
  );
}

export default MissionBriefing;
