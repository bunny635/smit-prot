import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import WorldCanvas from '../components/three/WorldCanvas';
import WorldHubHud from '../components/hub/WorldHubHud';
import DestinationManifest from '../components/hub/DestinationManifest';
import DestinationDetailModal from '../components/hub/DestinationDetailModal';
import WorldHubFallback from '../components/hub/WorldHubFallback';

/**
 * WorldHubPage — SMIT QUEST Phase 2 World Hub & Immersive Navigation Core
 * Coordinates the 3D WebGL environment, HUD interface layers, accessible destination manifest,
 * and responsive states across desktop, tablet, and mobile.
 */
export function WorldHubPage() {
  const navigate = useNavigate();
  const [activeDestination, setActiveDestination] = useState(null);
  const [modalDestination, setModalDestination] = useState(null);
  const [isManifestOpen, setIsManifestOpen] = useState(false);
  const [webGLError, setWebGLError] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Handlers
  const handleHoverDestination = useCallback((dest) => {
    setActiveDestination(dest);
  }, []);

  const handleUnhoverDestination = useCallback((dest) => {
    setActiveDestination((prev) => (prev?.id === dest?.id ? null : prev));
  }, []);

  const handleSelectDestination = useCallback(
    (dest) => {
      // Direct navigation on click
      navigate(dest.route);
    },
    [navigate]
  );

  const handleNavigate = useCallback(
    (route) => {
      navigate(route);
    },
    [navigate]
  );

  const handleWebGLError = useCallback(() => {
    setWebGLError(true);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (webGLError) {
    return <WorldHubFallback />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-[calc(100vh-4rem)] md:h-screen overflow-hidden bg-abyss text-on-surface select-none"
    >
      {/* 3D WebGL Spatial Canvas Layer */}
      <WorldCanvas
        activeDestination={activeDestination}
        onHoverDestination={handleHoverDestination}
        onUnhoverDestination={handleUnhoverDestination}
        onSelectDestination={handleSelectDestination}
        reducedMotion={prefersReducedMotion}
        isMobile={isMobile}
        isTablet={isTablet}
        onError={handleWebGLError}
      />

      {/* Atmospheric Vignette Overlay to ensure HUD contrast */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-abyss/80 via-transparent to-abyss/60"
        aria-hidden="true"
      />

      {/* Central World Hub HUD Layer */}
      <WorldHubHud
        activeDestination={activeDestination}
        onNavigateToDestination={handleNavigate}
        onOpenManifest={() => setIsManifestOpen(true)}
        isMobile={isMobile}
      />

      {/* Authoritative Accessible Destination Directory & Mobile Drawer */}
      <DestinationManifest
        activeDestination={activeDestination}
        onHoverDestination={handleHoverDestination}
        onUnhoverDestination={handleUnhoverDestination}
        isOpen={isManifestOpen}
        onClose={() => setIsManifestOpen(false)}
        isMobile={isMobile}
      />

      {/* Optional Deep Telemetry Modal */}
      <DestinationDetailModal
        destination={modalDestination}
        isOpen={Boolean(modalDestination)}
        onClose={() => setModalDestination(null)}
      />
    </motion.div>
  );
}

export default WorldHubPage;
