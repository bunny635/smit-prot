import React from 'react';
import clsx from 'clsx';

/**
 * SkillNode — Interactive SVG Circular Skill Node
 * Supports LOCKED, ACTIVE, SELECTED, and DIMMED states.
 * Fully keyboard accessible with Enter/Space triggers and ARIA attributes.
 */
export function SkillNode({
  skill,
  isSelected = false,
  isDimmed = false,
  isDependency = false,
  onSelect,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(skill);
    }
  };

  const radius = isSelected ? 26 : 22;

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${skill.name}, Category: ${skill.category}, ${skill.levelLabel}`}
      aria-pressed={isSelected}
      onClick={() => onSelect(skill)}
      onKeyDown={handleKeyDown}
      transform={`translate(${skill.position.x}, ${skill.position.y})`}
      className={clsx(
        'cursor-pointer select-none transition-all duration-300 focus:outline-none group',
        isDimmed && 'opacity-25 pointer-events-none'
      )}
    >
      {/* Outer Selected Gold Glow Pulse Ring */}
      {isSelected && (
        <circle
          r={radius + 8}
          fill="none"
          stroke="#f2ca50"
          strokeWidth="1.5"
          className="animate-ping opacity-40 origin-center"
        />
      )}

      {/* Outer Halo on Selected or Dependency */}
      <circle
        r={radius + 4}
        fill="none"
        stroke={isSelected ? '#f2ca50' : isDependency ? '#e2c559' : 'rgba(212, 175, 55, 0.2)'}
        strokeWidth={isSelected ? '2' : '1'}
        strokeDasharray={isSelected ? 'none' : '3 3'}
        className={clsx(
          'transition-all duration-300',
          isSelected && 'shadow-gold-glow'
        )}
      />

      {/* Node Base Circle */}
      <circle
        r={radius}
        fill="#14140f"
        stroke={isSelected ? '#f2ca50' : isDependency ? '#e2c559' : 'rgba(212, 175, 55, 0.5)'}
        strokeWidth={isSelected ? '2.5' : '1.5'}
        className="transition-colors duration-300 group-hover:stroke-primary group-hover:fill-surface-container"
        filter={isSelected ? 'drop-shadow(0 0 8px rgba(242, 202, 80, 0.8))' : 'none'}
      />

      {/* Central Technology Icon */}
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fill={isSelected ? '#f2ca50' : '#e6e2d9'}
        className="material-symbols-outlined text-[18px] group-hover:fill-primary transition-colors pointer-events-none"
        style={{
          fontFamily: 'Material Symbols Outlined',
          fontSize: isSelected ? '20px' : '17px',
          fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0",
        }}
      >
        {skill.icon || 'terminal'}
      </text>

      {/* Technical Skill Nameplate Label */}
      <g transform={`translate(0, ${radius + 16})`}>
        {/* Label background badge */}
        <rect
          x={-skill.name.length * 3.8 - 6}
          y={-8}
          width={skill.name.length * 7.6 + 12}
          height={16}
          fill="#0f0e0a"
          fillOpacity="0.85"
          stroke={isSelected ? '#f2ca50' : 'rgba(212, 175, 55, 0.25)'}
          strokeWidth="1"
          rx="2"
          className="group-hover:stroke-primary/70 transition-colors"
        />
        <text
          textAnchor="middle"
          dominantBaseline="central"
          fill={isSelected ? '#f2ca50' : '#d0c5af'}
          className="font-mono text-[10px] tracking-wider uppercase font-semibold group-hover:fill-primary transition-colors"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {skill.name}
        </text>
      </g>
    </g>
  );
}

export default SkillNode;
