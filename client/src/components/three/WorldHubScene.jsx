import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import DestinationNode from './DestinationNode';
import EnergyConnections from './EnergyConnections';
import PlayerMarker from './PlayerMarker';
import { WORLD_DESTINATIONS } from '../../data/worldDestinations';

/**
 * AmbientDust — Sparse ambient gold particles drifting in the Abyss
 */
function AmbientDust({ count = 60, reducedMotion = false }) {
  const pointsRef = useRef();

  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, ph];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current || reducedMotion) return;
    const time = state.clock.getElapsedTime();
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Subtle upward drift and oscillation
      posArray[i * 3 + 1] += Math.sin(time * 0.5 + phases[i]) * 0.02;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#f2ca50"
        size={0.25}
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * WorldHubScene — 3D Scene Root for SMIT QUEST World Hub
 */
export function WorldHubScene({
  activeDestination = null,
  onHoverDestination,
  onUnhoverDestination,
  onSelectDestination,
  reducedMotion = false,
  isMobile = false,
}) {
  const platformGroupRef = useRef();

  useFrame((_, delta) => {
    if (!platformGroupRef.current || reducedMotion) return;
    platformGroupRef.current.rotation.y += delta * 0.04;
  });

  return (
    <>
      {/* Fog for Abyss atmospheric depth */}
      <fog attach="fog" args={['#050505', 18, 95]} />

      {/* Atmospheric Lighting */}
      <ambientLight color="#e6e2d9" intensity={0.35} />
      <pointLight position={[0, 14, 0]} color="#f2ca50" intensity={2.2} distance={70} decay={2} />
      <pointLight position={[-25, -10, -25]} color="#99907c" intensity={0.4} distance={60} />
      <directionalLight position={[30, 45, 25]} color="#d4af37" intensity={0.6} />

      {/* Central Origin Platform (Obsidian Cylinder + Gold Rim) */}
      <group ref={platformGroupRef} position={[0, -0.4, 0]}>
        {/* Obsidian Base Platform */}
        <mesh receiveShadow>
          <cylinderGeometry args={[5.5, 6.0, 0.8, 36]} />
          <meshStandardMaterial
            color="#111111"
            roughness={0.2}
            metalness={0.92}
            flatShading={false}
          />
        </mesh>

        {/* Outer Gold Rim Glow Ring */}
        <mesh position={[0, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5.55, 0.04, 16, 80]} />
          <meshBasicMaterial color="#d4af37" />
        </mesh>

        {/* Subtle Inner Concentric Ring */}
        <mesh position={[0, 0.41, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.2, 0.02, 16, 60]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.35} />
        </mesh>
      </group>

      {/* Player Marker (ARCHIVIST_01) */}
      <PlayerMarker reducedMotion={reducedMotion} />

      {/* Energy Connections Between Destinations */}
      <EnergyConnections activeDestinationId={activeDestination?.id} />

      {/* Destination Nodes */}
      <group name="destination-nodes">
        {WORLD_DESTINATIONS.map((dest, index) => (
          <DestinationNode
            key={dest.id}
            destination={dest}
            index={index}
            isHovered={activeDestination?.id === dest.id}
            isSelected={activeDestination?.id === dest.id}
            onHover={onHoverDestination}
            onUnhover={onUnhoverDestination}
            onSelect={onSelectDestination}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>

      {/* Sparse Ambient Gold Dust */}
      <AmbientDust count={isMobile ? 30 : 65} reducedMotion={reducedMotion} />
    </>
  );
}

export default WorldHubScene;
