import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * DestinationNode — 3D Monolithic Relic Destination in SMIT QUEST
 * Renders an ancient geometric icosahedron monolith with glowing gold core
 * and interactive hover/click behaviors.
 */
export function DestinationNode({
  destination,
  index = 0,
  isHovered = false,
  isSelected = false,
  onHover,
  onUnhover,
  onSelect,
  reducedMotion = false,
}) {
  const groupRef = useRef();
  const coreRef = useRef();
  const ringRef = useRef();
  const [internalHover, setInternalHover] = useState(false);

  const active = isHovered || internalHover || isSelected;

  // Base position
  const [x, y, z] = destination.position;
  const scale = destination.scale || 2.0;

  // Colors
  const coreColor = useMemo(() => new THREE.Color(destination.color || '#d4af37'), [destination.color]);
  const rockColor = useMemo(() => new THREE.Color('#161616'), []);
  const goldColor = useMemo(() => new THREE.Color('#f2ca50'), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      const time = state.clock.getElapsedTime();
      // Gentle floating oscillation with phase offset
      groupRef.current.position.y = y + Math.sin(time * 0.8 + index * 0.9) * 0.25;
      // Controlled slow rotation
      groupRef.current.rotation.y += delta * (active ? 0.4 : 0.15);

      if (ringRef.current) {
        ringRef.current.rotation.z -= delta * 0.3;
        ringRef.current.rotation.x += delta * 0.1;
      }
    } else {
      groupRef.current.position.y = y;
    }

    // Smooth hover scale interpolation
    const targetScale = active ? 1.15 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 6);

    // Emissive intensity animation on core
    if (coreRef.current) {
      const targetEmissive = active ? 1.6 : 0.45;
      coreRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        coreRef.current.material.emissiveIntensity,
        targetEmissive,
        delta * 6
      );
    }
  });

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setInternalHover(true);
    document.body.style.cursor = 'pointer';
    if (onHover) onHover(destination);
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setInternalHover(false);
    document.body.style.cursor = 'auto';
    if (onUnhover) onUnhover(destination);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (onSelect) onSelect(destination);
  };

  return (
    <group
      ref={groupRef}
      position={[x, y, z]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {/* Outer Monolithic Rock / Geometric Shell */}
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[scale * 0.85, 0]} />
        <meshStandardMaterial
          color={rockColor}
          roughness={0.25}
          metalness={0.85}
          flatShading
        />
      </mesh>

      {/* Glowing Inner Core Structure */}
      <mesh ref={coreRef} position={[0, scale * 0.3, 0]}>
        <boxGeometry args={[scale * 0.35, scale * 1.6, scale * 0.35]} />
        <meshStandardMaterial
          color={coreColor}
          emissive={coreColor}
          emissiveIntensity={0.45}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Decorative Gold Rim Ring for High-Tier/Major Destinations */}
      {scale >= 2.4 && (
        <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[scale * 1.2, 0.03, 16, 48]} />
          <meshBasicMaterial
            color={goldColor}
            transparent
            opacity={active ? 0.8 : 0.35}
          />
        </mesh>
      )}

      {/* Point Light emitted by active core */}
      {active && (
        <pointLight
          color={destination.color || '#f2ca50'}
          intensity={1.8}
          distance={scale * 6}
          decay={2}
        />
      )}
    </group>
  );
}

export default DestinationNode;
