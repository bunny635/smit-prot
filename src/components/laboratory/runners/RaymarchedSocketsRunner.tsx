"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export function RaymarchedSocketsRunner({ reducedMotion, wireframe }: { reducedMotion: boolean, wireframe: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <Lightbox reducedMotion={reducedMotion} wireframe={wireframe} />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reducedMotion} autoRotateSpeed={0.5} />
    </Canvas>
  );
}

function Lightbox({ reducedMotion, wireframe }: { reducedMotion: boolean, wireframe: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (reducedMotion || !meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time) * 0.5;
  });

  return (
    <group>
      {/* Outer Cage */}
      <mesh ref={meshRef}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial 
          color={0xd8b45a} 
          wireframe={wireframe}
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Inner Core */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color={0xffffff} wireframe={wireframe} />
      </mesh>
    </group>
  );
}
