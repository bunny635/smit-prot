import React, { useMemo } from 'react';

/**
 * SkillConnections — Dynamic SVG Energy Cable Pathways
 * Renders smooth connection paths between dependent skills based on data dependencies.
 * Highlights paths connected to the currently selected skill node.
 */
export function SkillConnections({
  skills,
  selectedSkillId = null,
  activeCategory = 'ALL',
}) {
  // Build lookup dictionary for O(1) position access
  const skillsMap = useMemo(() => {
    const map = {};
    skills.forEach((s) => {
      map[s.id] = s;
    });
    return map;
  }, [skills]);

  // Generate list of directed connection pairs
  const connections = useMemo(() => {
    const list = [];
    skills.forEach((targetSkill) => {
      if (targetSkill.dependencies && targetSkill.dependencies.length > 0) {
        targetSkill.dependencies.forEach((depId) => {
          const sourceSkill = skillsMap[depId];
          if (sourceSkill) {
            list.push({
              id: `${sourceSkill.id}->${targetSkill.id}`,
              source: sourceSkill,
              target: targetSkill,
            });
          }
        });
      }
    });
    return list;
  }, [skills, skillsMap]);

  return (
    <g className="skill-connections-layer">
      {connections.map((conn) => {
        const { source, target } = conn;
        const x1 = source.position.x;
        const y1 = source.position.y;
        const x2 = target.position.x;
        const y2 = target.position.y;

        // Quadratic curve control point
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 - 15;

        const isRelatedToSelected =
          selectedSkillId &&
          (source.id === selectedSkillId || target.id === selectedSkillId);

        const isCategoryActive =
          activeCategory === 'ALL' ||
          source.category === activeCategory ||
          target.category === activeCategory;

        const pathData = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;

        return (
          <g key={conn.id} className="transition-all duration-300">
            {/* Background halo path for active connections */}
            {isRelatedToSelected && (
              <path
                d={pathData}
                fill="none"
                stroke="#f2ca50"
                strokeWidth="4"
                strokeOpacity="0.25"
                className="animate-pulse"
              />
            )}

            {/* Main Energy Line */}
            <path
              d={pathData}
              fill="none"
              stroke={
                isRelatedToSelected
                  ? '#f2ca50'
                  : isCategoryActive
                  ? 'rgba(212, 175, 55, 0.3)'
                  : 'rgba(212, 175, 55, 0.08)'
              }
              strokeWidth={isRelatedToSelected ? 2 : 1}
              strokeDasharray={isRelatedToSelected ? 'none' : '4 4'}
              opacity={!isCategoryActive ? 0.2 : 1}
              className="transition-all duration-300"
            />
          </g>
        );
      })}
    </g>
  );
}

export default SkillConnections;
