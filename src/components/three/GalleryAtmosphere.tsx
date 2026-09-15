"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";

export const GalleryAtmosphere = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <WebGLErrorBoundary>
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }} dpr={[1, 2]} gl={{ antialias: false, powerPreference: "default" }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#080808"]} />
          <fog attach="fog" args={["#080808", 5, 20]} />
          <ambientLight intensity={0.2} />
          
          {!shouldReduceMotion && (
            <Sparkles 
              count={50} 
              scale={12} 
              size={2} 
              speed={0.1} 
              opacity={0.1} 
              color="#D8B45A" 
              position={[0, 2, 0]} 
            />
          )}
        </Suspense>
      </Canvas>
    </WebGLErrorBoundary>
  );
};
