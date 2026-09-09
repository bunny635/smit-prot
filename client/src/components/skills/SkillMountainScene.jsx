import React from 'react';
import SkillConnections from './SkillConnections';
import SkillNode from './SkillNode';

/**
 * SkillMountainScene — Interactive SVG Knowledge Peak Graph
 * Renders the geometric mountain wireframe, dynamic energy cables,
 * and clickable skill nodes.
 */
export function SkillMountainScene({
  skills,
  selectedSkill,
  onSelectSkill,
  activeCategory = 'ALL',
}) {
  return (
    <div className="relative w-full aspect-[16/10] min-h-[420px] max-h-[680px] aethel-glass aethel-rim-border corner-brackets rounded-lg overflow-hidden shadow-2xl flex items-center justify-center p-2 sm:p-4">
      {/* Background Cosmic Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(242, 202, 80, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Central Peak Atmospheric Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Main SVG Knowledge Mountain Scene */}
      <svg
        viewBox="0 0 1000 680"
        className="w-full h-full relative z-10 select-none overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gold Glow Filter */}
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Geometric Knowledge Mountain Wireframe */}
        <g className="mountain-wireframe opacity-20 pointer-events-none">
          {/* Outer Triangle Peak */}
          <polygon
            points="500,60 120,640 880,640"
            fill="none"
            stroke="#f2ca50"
            strokeWidth="1"
            strokeDasharray="6 6"
          />

          {/* Internal Geometric Elevation Ridges */}
          <line x1="500" y1="60" x2="500" y2="640" stroke="#f2ca50" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="500" y1="60" x2="310" y2="640" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="500" y1="60" x2="690" y2="640" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="2 4" />

          {/* Horizontal Elevation Strata Lines */}
          <line x1="390" y1="210" x2="610" y2="210" stroke="#f2ca50" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="280" y1="320" x2="720" y2="320" stroke="#f2ca50" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="190" y1="440" x2="810" y2="440" stroke="#f2ca50" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="140" y1="550" x2="860" y2="550" stroke="#f2ca50" strokeWidth="0.75" strokeDasharray="4 4" />

          {/* Elevation Labels */}
          <text x="50" y="215" fill="#d0c5af" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
            ELEV: 10,000M
          </text>
          <text x="50" y="325" fill="#d0c5af" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
            ELEV: 7,500M
          </text>
          <text x="50" y="445" fill="#d0c5af" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
            ELEV: 5,000M
          </text>
          <text x="50" y="555" fill="#d0c5af" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
            ELEV: 2,500M
          </text>
        </g>

        {/* 2. Dynamic Energy Connection Paths */}
        <SkillConnections
          skills={skills}
          selectedSkillId={selectedSkill?.id}
          activeCategory={activeCategory}
        />

        {/* 3. Interactive Skill Nodes */}
        <g className="skill-nodes-layer">
          {skills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            const isDimmed =
              activeCategory !== 'ALL' && skill.category !== activeCategory;
            const isDependency =
              selectedSkill?.dependencies?.includes(skill.id) || false;

            return (
              <SkillNode
                key={skill.id}
                skill={skill}
                isSelected={isSelected}
                isDimmed={isDimmed}
                isDependency={isDependency}
                onSelect={onSelectSkill}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default SkillMountainScene;
