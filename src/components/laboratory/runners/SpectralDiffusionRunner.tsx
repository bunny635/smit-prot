"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function generateParticles(count: number): [Float32Array, Float32Array] {
  const pos = new Float32Array(count * 3);
  const scale = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const r = 24 + Math.random() * 18;

    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
    
    scale[i] = Math.random() * 1.5 + 0.5;
  }
  return [pos, scale];
}

export function SpectralDiffusionRunner({ reducedMotion, wireframe }: { reducedMotion: boolean, wireframe: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 85], fov: 60 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <ParticleSystem reducedMotion={reducedMotion} wireframe={wireframe} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reducedMotion} autoRotateSpeed={0.5} />
    </Canvas>
  );
}

function ParticleSystem({ reducedMotion, wireframe }: { reducedMotion: boolean, wireframe: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = reducedMotion ? 1000 : 2800;
  
  const [positions, scales] = useMemo(() => {
    return generateParticles(particleCount);
  }, [particleCount]);

  useFrame((state) => {
    if (reducedMotion || !pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const material = pointsRef.current.material as THREE.ShaderMaterial;
    if (material.uniforms) {
      material.uniforms.uTime.value = time;
    }
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0xd8b45a) },
    uAccentColor: { value: new THREE.Color(0xffffff) }
  }), []);

  const vertexShader = `
    attribute float scale;
    uniform float uTime;
    varying float vDistance;
    void main() {
      vec3 pos = position;
      float dist = length(pos);
      vDistance = dist;
      
      float displacement = sin(dist * 0.15 - uTime * 1.2) * 2.2;
      pos += normalize(pos) * displacement;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = scale * (220.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    uniform vec3 uAccentColor;
    varying float vDistance;
    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      float alpha = smoothstep(0.5, 0.05, d) * 0.85;
      vec3 finalColor = mix(uColor, uAccentColor, smoothstep(20.0, 42.0, vDistance) * 0.4);
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  return (
    <group>
      {wireframe && (
        <mesh>
          <torusGeometry args={[32, 0.15, 16, 100]} />
          <meshBasicMaterial color={0xd8b45a} wireframe transparent opacity={0.18} />
        </mesh>
      )}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-scale" args={[scales, 1]} />
        </bufferGeometry>
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </points>
    </group>
  );
}
