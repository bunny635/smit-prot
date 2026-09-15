"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { WebGLErrorBoundary } from "./WebGLErrorBoundary";

export const Atmosphere = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <WebGLErrorBoundary>
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]} gl={{ antialias: false, powerPreference: "default" }}>
        <Suspense fallback={null}>
          {!shouldReduceMotion ? (
            <Sparkles
              count={150}
              scale={12}
              size={1.5}
              speed={0.3}
              opacity={0.15}
              color="#D8B45A"
            />
          ) : (
            <Stars radius={50} depth={50} count={500} factor={4} saturation={0} fade speed={0} />
          )}
        </Suspense>
      </Canvas>
    </WebGLErrorBoundary>
  );
};
