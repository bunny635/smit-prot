import React from 'react';

/**
 * ArchitectureTopology — Multi-Tier System Topology & Data Flow
 * Directly inspired by Stitch `quickgo_system_architecture` and `mobile_project_arena_detail`.
 * Visualizes project.architectureNodes cleanly with SVG/CSS without heavy WebGL.
 * Fully accessible with screen-reader text alternatives.
 */
export function ArchitectureTopology({ project }) {
  if (!project || !project.architectureNodes || project.architectureNodes.length === 0) {
    return null;
  }

  const nodes = project.architectureNodes;

  // Layer designations based on node position/role
  const getLayerLabel = (index, role = '') => {
    const r = role.toLowerCase();
    if (r.includes('presentation') || r.includes('canvas') || r.includes('terminal') || r.includes('touch') || index === 0) {
      return 'LAYER 01 // PRESENTATION & INGRESS';
    }
    if (r.includes('logic') || r.includes('routing') || r.includes('auth') || r.includes('hud') || r.includes('controller') || index === 1) {
      return 'LAYER 02 // LOGIC & ORCHESTRATION';
    }
    return 'LAYER 03 // PERSISTENCE & COMPUTE';
  };

  return (
    <section
      id="architecture-topology"
      className="py-8 md:py-14 flex flex-col gap-8 scroll-mt-20"
      role="region"
      aria-label={`System Architecture Topology for ${project.title}`}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary block" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
            SYSTEM ARCHITECTURE // TOPOLOGY
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase tracking-tight font-bold">
          System Architecture: {project.title}
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant/80 max-w-2xl">
          Multi-tier data pipeline topology tracing interaction ingress, operational business logic,
          and backend state synchronization.
        </p>
      </div>

      {/* Screen-Reader Accessible Summary */}
      <div className="sr-only">
        <h3>Architecture Node Breakdown</h3>
        <ol>
          {nodes.map((node, i) => (
            <li key={node.name || i}>
              Node {i + 1}: {node.name}. Role: {node.role}. Technologies:{' '}
              {node.tech?.join(', ') || 'N/A'}.
            </li>
          ))}
        </ol>
      </div>

      {/* Main Grid: Pipeline Telemetry Rail + Main Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left Telemetry Sidebar (Stitch inspired) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="p-5 md:p-6 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md relative">
            <span className="corner-bracket corner-top-left border-primary/40" />
            <span className="corner-bracket corner-bottom-right border-primary/40" />

            <div className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-4 flex items-center justify-between">
              <span>PIPELINE METRICS</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                <span className="text-on-surface-variant/70 uppercase">TOPOLOGY</span>
                <span className="text-primary font-semibold">MULTI-TIER</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                <span className="text-on-surface-variant/70 uppercase">ACTIVE NODES</span>
                <span className="text-primary font-semibold">{nodes.length} UNITS</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                <span className="text-on-surface-variant/70 uppercase">INGRESS PROTOCOL</span>
                <span className="text-on-surface font-semibold uppercase">
                  {project.category === 'TOOLS' ? 'CLI STDIO' : 'REST / JSON'}
                </span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-on-surface-variant/70 uppercase">DATA INTEGRITY</span>
                <span className="text-primary font-semibold">SYNCHRONIZED</span>
              </div>
            </div>
          </div>

          {/* Tactical Diagram Flow Indicator */}
          <div className="hidden lg:flex flex-col items-center justify-center p-4 border border-outline-variant/20 bg-surface-container-lowest/60 text-center font-mono text-[11px] text-on-surface-variant/60">
            <div className="flex items-center gap-2 text-primary/80 mb-1">
              <span className="material-symbols-outlined text-sm">swap_vert</span>
              <span>UNIDIRECTIONAL / DUPLEX FLOW</span>
            </div>
            <span>CLIENT &rarr; ROUTING &rarr; VAULT</span>
          </div>
        </div>

        {/* Right Content Area: Nodes (Desktop & Mobile Vertical Flow) */}
        <div className="lg:col-span-8 flex flex-col gap-6 relative">
          {/* Continuous Vertical Connector Line */}
          <div
            className="absolute left-[23px] sm:left-[27px] top-[30px] bottom-[30px] w-[1px] bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10 pointer-events-none"
            aria-hidden="true"
          />

          {nodes.map((node, index) => {
            const layerLabel = getLayerLabel(index, node.role);
            const coord = index === 0 ? '45.92°N 12.04°W' : index === 1 ? '88.21°S 04.99°E' : '12.44°N 55.12°W';

            return (
              <div
                key={node.name || index}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Node Icon Marker on the Vertical Rail */}
                <div className="absolute left-0 top-1 w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] border border-primary/50 bg-[#14140f] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 z-10">
                  <span
                    className="material-symbols-outlined text-primary text-xl sm:text-2xl"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                    aria-hidden="true"
                  >
                    {node.icon || 'hub'}
                  </span>
                </div>

                {/* Node Details Card */}
                <div className="p-5 sm:p-6 border border-outline-variant/30 bg-[#181814]/80 backdrop-blur-xl relative shadow-[0_4px_20px_rgba(0,0,0,0.4)] group-hover:border-primary/40 transition-colors">
                  {/* Top Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-mono text-[11px]">
                    <span className="text-primary font-medium tracking-wider">
                      NODE 0{index + 1} // {layerLabel}
                    </span>
                    <span className="text-on-surface-variant/50 tracking-wider">
                      COORD: {coord}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-semibold uppercase mb-2 group-hover:text-primary transition-colors">
                    {node.name}
                  </h3>

                  {/* Role / Description */}
                  <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
                    {node.role}
                  </p>

                  {/* Tech Badges */}
                  {node.tech && node.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/15">
                      {node.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 font-mono text-xs border border-primary/30 text-primary bg-primary/5 tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ArchitectureTopology;
