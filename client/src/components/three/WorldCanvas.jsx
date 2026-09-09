import React, { Suspense, useEffect, useRef, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import WorldHubScene from './WorldHubScene';

/**
 * CameraRig — Handles subtle cinematic camera drift and responsive framing
 */
function CameraRig({ isMobile = false, isTablet = false, reducedMotion = false }) {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Responsive base camera framing
  const basePos = isMobile
    ? new THREE.Vector3(0, 10, 36)
    : isTablet
    ? new THREE.Vector3(0, 9, 32)
    : new THREE.Vector3(0, 8, 28);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (event) => {
      const nx = (event.clientX / window.innerWidth) * 2 - 1;
      const ny = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (reducedMotion) {
      camera.position.copy(basePos);
      camera.lookAt(0, 2, 0);
      return;
    }

    const time = state.clock.getElapsedTime();
    const mouse = mouseRef.current;

    // Smoothly interpolate mouse coordinates
    mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, delta * 3);
    mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, delta * 3);

    // Subtle parallax + slow ambient drift
    const driftX = Math.sin(time * 0.18) * 0.6;
    const driftY = Math.cos(time * 0.14) * 0.4;

    camera.position.x = basePos.x + mouse.x * 2.8 + driftX;
    camera.position.y = basePos.y + mouse.y * 1.6 + driftY;
    camera.position.z = basePos.z;

    camera.lookAt(0, 2, 0);
  });

  return null;
}

/**
 * WorldCanvas — R3F Canvas Container for the World Hub
 */
export function WorldCanvas({
  activeDestination = null,
  onHoverDestination,
  onUnhoverDestination,
  onSelectDestination,
  reducedMotion = false,
  isMobile = false,
  isTablet = false,
  onError,
}) {
  const [hasWebGLError, setHasWebGLError] = useState(false);

  const handleCreated = useCallback(
    (state) => {
      try {
        state.gl.setClearColor('#050505', 1);
        state.gl.toneMapping = THREE.ACESFilmicToneMapping;
        state.gl.toneMappingExposure = 1.0;
      } catch (err) {
        console.error('WebGL setup issue:', err);
        setHasWebGLError(true);
        if (onError) onError(err);
      }
    },
    [onError]
  );

  if (hasWebGLError) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{
          position: isMobile ? [0, 10, 36] : isTablet ? [0, 9, 32] : [0, 8, 28],
          fov: isMobile ? 65 : 55,
          near: 0.1,
          far: 200,
        }}
        dpr={[1, 2]}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        onCreated={handleCreated}
        className="w-full h-full"
      >
        <CameraRig
          isMobile={isMobile}
          isTablet={isTablet}
          reducedMotion={reducedMotion}
        />
        <Suspense fallback={null}>
          <WorldHubScene
            activeDestination={activeDestination}
            onHoverDestination={onHoverDestination}
            onUnhoverDestination={onUnhoverDestination}
            onSelectDestination={onSelectDestination}
            reducedMotion={reducedMotion}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default WorldCanvas;
