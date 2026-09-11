import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * ArtifactViewer3D — Interactive 3D Holographic Chamber Viewer
 * Renders high-fidelity rotating geometric relics inside the smoked-glass inspection frame.
 * Includes interactive mouse/touch orbit control, floating energy dust, and pedestal.
 */
export function ArtifactViewer3D({ artifact, reducedMotion = false }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const userRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 300;
    let height = container.clientHeight || 300;
    let animationFrameId;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.8);
    camera.lookAt(0, -0.1, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.replaceChildren(renderer.domElement);

    // 2. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.PointLight(0xf2ca50, 2.5, 30);
    goldKeyLight.position.set(3, 4, 4);
    scene.add(goldKeyLight);

    const rimLight = new THREE.PointLight(0x61dafb, 1.4, 25);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // 3. Artifact Relic Geometry Factory
    const group = new THREE.Group();
    scene.add(group);

    const primaryColor = new THREE.Color(artifact?.primaryColor || '#61dafb');
    const wireColor = new THREE.Color(artifact?.wireframeColor || '#f2ca50');

    let relicGeo;
    switch (artifact?.geometryType) {
      case 'sphere':
        relicGeo = new THREE.SphereGeometry(1.15, 32, 32);
        break;
      case 'box':
        relicGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
        break;
      case 'icosahedron':
        relicGeo = new THREE.IcosahedronGeometry(1.35, 1);
        break;
      case 'torusKnot':
        relicGeo = new THREE.TorusKnotGeometry(0.9, 0.28, 64, 16);
        break;
      case 'cylinder':
        relicGeo = new THREE.CylinderGeometry(1.0, 1.25, 1.8, 6);
        break;
      case 'octahedron':
      default:
        relicGeo = new THREE.OctahedronGeometry(1.4, 0);
        break;
    }

    const relicMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      emissive: primaryColor,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.78,
    });
    const relicMesh = new THREE.Mesh(relicGeo, relicMat);
    group.add(relicMesh);

    // Subtle holographic wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: wireColor,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const wireMesh = new THREE.Mesh(relicGeo.clone(), wireMat);
    wireMesh.scale.set(1.015, 1.015, 1.015);
    group.add(wireMesh);

    // 4. Dark Pedestal & Gold Accent Ring
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, -1.75, 0);

    const pedGeo = new THREE.CylinderGeometry(1.5, 1.9, 0.35, 32);
    const pedMat = new THREE.MeshStandardMaterial({
      color: 0x12120e,
      roughness: 0.85,
      metalness: 0.2,
    });
    const pedestal = new THREE.Mesh(pedGeo, pedMat);
    pedestalGroup.add(pedestal);

    const ringGeo = new THREE.TorusGeometry(1.55, 0.025, 16, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf2ca50,
      emissive: 0xf2ca50,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.17;
    pedestalGroup.add(ring);

    scene.add(pedestalGroup);

    // 5. Ambient Energy Sparks (30 particles)
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.4 + Math.random() * 1.2;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 2.2;
      particlePositions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xf2ca50,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Drag Controls
    const handlePointerDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: e.clientX || (e.touches && e.touches[0]?.clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0]?.clientY) || 0,
      };
    };

    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;

      const deltaX = clientX - previousMousePositionRef.current.x;
      const deltaY = clientY - previousMousePositionRef.current.y;

      userRotationRef.current.y += deltaX * 0.008;
      userRotationRef.current.x = Math.max(
        -0.8,
        Math.min(0.8, userRotationRef.current.x + deltaY * 0.008)
      );

      previousMousePositionRef.current = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // 7. Responsive ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // 8. Render loop
    let startTime = performance.now();

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = (currentTime - startTime) * 0.001;

      if (!reducedMotion) {
        // Automatic gentle spin when not dragging
        if (!isDraggingRef.current) {
          userRotationRef.current.y += 0.008;
        }

        // Float hovering oscillation
        group.position.y = Math.sin(elapsed * 1.5) * 0.1;
        particles.rotation.y = -elapsed * 0.08;
      } else {
        group.position.y = 0;
      }

      group.rotation.y = userRotationRef.current.y;
      group.rotation.x = userRotationRef.current.x;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);

      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      relicGeo.dispose();
      relicMat.dispose();
      wireMesh.geometry.dispose();
      wireMat.dispose();
      pedGeo.dispose();
      pedMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      
      renderer.dispose();
      renderer.forceContextLoss();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [artifact, reducedMotion]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing relative select-none touch-none"
      title={`3D View of ${artifact?.title || 'Relic'}. Drag to inspect.`}
      aria-label={`Interactive 3D Holographic Chamber for ${artifact?.title || 'Relic'}`}
    />
  );
}

export default ArtifactViewer3D;
