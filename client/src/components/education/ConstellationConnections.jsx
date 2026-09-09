import React from 'react';

/**
 * ConstellationConnections — SVG Energy Network for the Education Constellation
 * Renders data-driven connecting paths between related academic nodes.
 * Highlights active paths when a connected node is selected.
 */
export function ConstellationConnections({
  nodes = [],
  connections = [],
  selectedNodeId = null,
  viewBoxWidth = 1000,
  viewBoxHeight = 600,
}) {
  // Build a fast lookup map for node positions
  const nodeMap = React.useMemo(() => {
    const map = new Map();
    nodes.forEach((n) => {
      const x = (n.constellationPosition?.x / 100) * viewBoxWidth;
      const y = (n.constellationPosition?.y / 100) * viewBoxHeight;
      map.set(n.id, { ...n, pixelX: x, pixelY: y });
    });
    return map;
  }, [nodes, viewBoxWidth, viewBoxHeight]);

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Glow filter for active/highlighted energy paths */}
        <filter id="gold-path-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map((conn, idx) => {
        const fromNode = nodeMap.get(conn.from);
        const toNode = nodeMap.get(conn.to);

        if (!fromNode || !toNode) return null;

        const isHighlighted =
          selectedNodeId && (conn.from === selectedNodeId || conn.to === selectedNodeId);

        return (
          <g key={`${conn.from}-${conn.to}-${idx}`}>
            {/* Base Dashed Energy Line */}
            <line
              x1={fromNode.pixelX}
              y1={fromNode.pixelY}
              x2={toNode.pixelX}
              y2={toNode.pixelY}
              stroke="#f2ca50"
              strokeWidth={isHighlighted ? 2 : 1}
              strokeDasharray={isHighlighted ? '6 3' : '4 4'}
              opacity={isHighlighted ? 0.9 : 0.25}
              filter={isHighlighted ? 'url(#gold-path-glow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Subtle traveling energy particle on highlighted path */}
            {isHighlighted && (
              <circle
                r="3"
                fill="#ffe088"
                className="animate-pulse"
                cx={(fromNode.pixelX + toNode.pixelX) / 2}
                cy={(fromNode.pixelY + toNode.pixelY) / 2}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default ConstellationConnections;
