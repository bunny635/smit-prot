import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * PlayerMarker — ARCHIVIST_01 Player Beacon
 * Minimalist glowing gold orb representing the explorer at the central origin platform.
 */
export function PlayerMarker({ reducedMotion = false }) {
  const markerGroupRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (!markerGroupRef.current) return;

    if (!reducedMotion) {
      const time = state.clock.getElapsedTime();
      markerGroupRef.current.position.y = 1.0 + Math.sin(time * 1.4) * 0.08;
      markerGroupRef.current.rotation.y += delta * 0.5;

      if (ringRef.current) {
        ringRef.current.rotation.x += delta * 0.3;
        ringRef.current.rotation.y -= delta * 0.2;
      }
    } else {
      markerGroupRef.current.position.y = 1.0;
    }
  });

  return (
    <group ref={markerGroupRef} position={[0, 1.0, 0]}>
      {/* Central Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshStandardMaterial
          color="#f2ca50"
          emissive="#f2ca50"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Tech Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.55, 0.02, 12, 32]} />
        <meshBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Subtle Player Beacon Light */}
      <pointLight
        color="#f2ca50"
        intensity={2.0}
        distance={12}
        decay={2}
      />
    </group>
  );
}

export default PlayerMarker;
