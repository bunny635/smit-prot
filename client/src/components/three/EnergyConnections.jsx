import React, { useMemo } from 'react';
import * as THREE from 'three';
import { WORLD_CONNECTIONS, WORLD_DESTINATIONS } from '../../data/worldDestinations';

/**
 * EnergyConnections — Gold Energy Path Network
 * Renders curved quadratic bezier lines connecting related destinations in the 3D space.
 */
export function EnergyConnections({ activeDestinationId = null }) {
  const destMap = useMemo(() => {
    const map = new Map();
    WORLD_DESTINATIONS.forEach((d) => map.set(d.id, d));
    return map;
  }, []);

  const connectionLines = useMemo(() => {
    const lines = [];

    WORLD_CONNECTIONS.forEach(([idA, idB], index) => {
      const nodeA = destMap.get(idA);
      const nodeB = destMap.get(idB);
      if (!nodeA || !nodeB) return;

      const pA = new THREE.Vector3(...nodeA.position);
      const pB = new THREE.Vector3(...nodeB.position);

      // Calculate an elevated midpoint for an architectural arc
      const mid = new THREE.Vector3()
        .addVectors(pA, pB)
        .multiplyScalar(0.5);
      mid.y += Math.min(8, pA.distanceTo(pB) * 0.18);

      const curve = new THREE.QuadraticBezierCurve3(pA, mid, pB);
      const points = curve.getPoints(24);
      
      const positions = new Float32Array(points.length * 3);
      points.forEach((p, i) => {
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      });

      const isConnectedToActive =
        activeDestinationId === idA || activeDestinationId === idB;

      lines.push({
        positions,
        pointsCount: points.length,
        key: `${idA}-${idB}-${index}`,
        isConnectedToActive,
      });
    });

    return lines;
  }, [destMap, activeDestinationId]);

  return (
    <group name="energy-connections">
      {connectionLines.map(({ positions, pointsCount, key, isConnectedToActive }) => (
        <line key={key}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pointsCount}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={isConnectedToActive ? '#f2ca50' : '#d4af37'}
            transparent
            opacity={isConnectedToActive ? 0.75 : 0.28}
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
}

export default EnergyConnections;
