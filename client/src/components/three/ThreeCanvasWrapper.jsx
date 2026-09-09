import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';

/**
 * Fallback component for WebGL or rendering delays
 */
function CanvasFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-abyss text-outline-variant font-meta-technical text-meta-technical tracking-widest">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span>INITIALIZING 3D SPATIAL ENGINE...</span>
      </div>
    </div>
  );
}

/**
 * ThreeCanvasWrapper — Phase 1 Three.js Foundation
 * Lightweight, safe mounting wrapper providing standard lighting and camera setup
 * for future Phase 2 World Hub expansion.
 */
export function ThreeCanvasWrapper({
  children,
  cameraPosition = [0, 2, 8],
  fov = 60,
  className = '',
  enableAlpha = true,
  ...props
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return <CanvasFallback />;
  }

  return (
    <div className={clsx('relative w-full h-full overflow-hidden', className)}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        gl={{
          alpha: enableAlpha,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        {...props}
      >
        <Suspense fallback={null}>
          {/* Subtle ambient light matching Aethelgard palette */}
          <ambientLight intensity={0.4} color="#e6e2d9" />
          
          {/* Warm gold point light representing ancient core energy */}
          <pointLight position={[5, 10, 5]} intensity={1.2} color="#f2ca50" />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#99907c" />

          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeCanvasWrapper;
