import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import EducationNode from './EducationNode';
import ConstellationConnections from './ConstellationConnections';

/**
 * ConstellationScene — Central Spatial Education Constellation
 * Features:
 * - Desktop: Spatial 2D/3D constellation canvas matching Stitch education reference
 * - Mobile: Handheld Relic HUD vertical monolith with connected energy rail
 * - Data-driven node placement & connecting SVG energy lines
 * - Full keyboard & touch accessibility
 */
export function ConstellationScene({
  nodes = [],
  connections = [],
  selectedNode = null,
  onSelectNode,
  reducedMotion = false,
}) {
  return (
    <div className="relative w-full select-none">
      {/* =======================================================================
          1. DESKTOP / TABLET SPATIAL CONSTELLATION CANVAS (md:block)
          ======================================================================= */}
      <div className="hidden md:block relative w-full min-h-[640px] lg:min-h-[720px] aethel-glass aethel-rim-border corner-brackets rounded-lg overflow-hidden p-6 shadow-2xl">
        {/* Background Cosmic Star Dust & Coordinate Grids */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(242, 202, 80, 0.15) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Central Atmospheric Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
        />

        {/* Dynamic SVG Energy Connections */}
        <ConstellationConnections
          nodes={nodes}
          connections={connections}
          selectedNodeId={selectedNode?.id}
          viewBoxWidth={1000}
          viewBoxHeight={650}
        />

        {/* Spatial Node Positioning */}
        <div className="relative w-full h-[650px]">
          {nodes.map((node, index) => {
            const isSelected = selectedNode?.id === node.id;
            const pos = node.constellationPosition || { x: 50, y: 50 };

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.4,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                style={{
                  position: 'absolute',
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={clsx(
                  'z-10 transition-all duration-300',
                  isSelected ? 'z-30 scale-105' : 'hover:z-20'
                )}
              >
                <EducationNode
                  node={node}
                  isSelected={isSelected}
                  onSelect={onSelectNode}
                  reducedMotion={reducedMotion}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Telemetry Status Bar */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-meta-technical text-[10px] text-outline-variant/80 border-t border-outline-variant/20 pt-2 pointer-events-none">
          <span>SPATIAL MATRIX // 2D CONSTELLATION GRID</span>
          <span>SELECT ANY REPOSITORY NODE TO INSPECT ACADEMIC ARCHIVES</span>
        </div>
      </div>

      {/* =======================================================================
          2. MOBILE HANDHELD RELIC HUD MONOLITH (< md)
          ======================================================================= */}
      <div className="md:hidden relative w-full flex flex-col gap-6">
        {/* Continuous Mobile Left Energy Rail */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-4 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_8px_rgba(242,202,80,0.5)] pointer-events-none"
        />

        {/* Vertically Stacked Handheld Nodes */}
        <div className="flex flex-col gap-5 pl-8">
          {nodes.map((node, index) => {
            const isSelected = selectedNode?.id === node.id;

            return (
              <div key={node.id} className="relative">
                {/* Connector pip to left energy rail */}
                <div
                  aria-hidden="true"
                  className={clsx(
                    'absolute -left-6 top-8 w-4 h-0.5 transition-colors',
                    isSelected ? 'bg-primary shadow-[0_0_6px_#f2ca50]' : 'bg-primary/40'
                  )}
                />

                <EducationNode
                  node={node}
                  isSelected={isSelected}
                  onSelect={onSelectNode}
                  reducedMotion={reducedMotion}
                  className="w-full max-w-none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ConstellationScene;
