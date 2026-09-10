import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { PORTAL_TELEMETRY, VERIFIED_CONTACT } from '../data/portalData';
import PortalHero from '../components/portal/PortalHero';
import PortalGateway from '../components/portal/PortalGateway';
import PortalTelemetry from '../components/portal/PortalTelemetry';
import ContactTransmission from '../components/portal/ContactTransmission';
import SocialLinks from '../components/portal/SocialLinks';
import PortalConclusion from '../components/portal/PortalConclusion';

/**
 * FinalPortal — Phase 13 Final Destination of the SMIT QUEST Digital Odyssey.
 * Culminates the 12-sector journey into an intentional, atmospheric, and
 * professional contact & mission conclusion gateway.
 *
 * Core Equation:
 * GATEWAY APERTURE + TELEMETRY + TRANSMISSION + SOCIAL ANCHORS + QUEST COMPLETE
 */
export default function FinalPortal() {
  const { player } = usePlayer();

  const handleScrollToTransmission = () => {
    const target = document.getElementById('transmission');
    if (target) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center select-none overflow-x-hidden">
      {/* Ambient Gold Radial Spotlight */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_50%_15%,rgba(242,202,80,0.07)_0%,rgba(242,202,80,0.02)_40%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Subtle Noise / Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.025] bg-[linear-gradient(to_right,#f2ca50_1px,transparent_1px),linear-gradient(to_bottom,#f2ca50_1px,transparent_1px)] bg-[size:5rem_5rem]"
        aria-hidden="true"
      />

      {/* Top Floating Coordinates Rail */}
      <div 
        className="w-full flex flex-wrap justify-between items-center text-xs font-mono text-outline/60 py-2.5 border-b border-outline-variant/15 mb-6 px-2"
        aria-label="Portal Vector & Operative Identity"
      >
        <div className="flex items-center gap-2">
          <span className="tracking-widest uppercase text-primary/80">
            {PORTAL_TELEMETRY.sector}
          </span>
          <span className="text-outline/30 hidden sm:inline">•</span>
          <span className="text-outline/70 hidden sm:inline">
            OPERATIVE: {player?.name || VERIFIED_CONTACT.handle}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="tracking-wider text-outline/50 hidden md:inline">
            STATUS: {PORTAL_TELEMETRY.missionStatus}
          </span>
          <span className="tracking-wider text-outline/80">
            {VERIFIED_CONTACT.coordinates}
          </span>
        </div>
      </div>

      {/* 1. Hero Monolith */}
      <PortalHero 
        telemetry={PORTAL_TELEMETRY} 
        player={player} 
      />

      {/* 2. Central Dimensional Gateway Aperture (Stitch Screen 24) */}
      <PortalGateway 
        onEnterPortal={handleScrollToTransmission} 
      />

      {/* 3. System Diagnostic Telemetry Stream */}
      <PortalTelemetry 
        telemetry={PORTAL_TELEMETRY} 
        player={player} 
      />

      {/* 4. Contact Transmission Form (Stitch Screen 25 & Mobile Reference) */}
      <ContactTransmission />

      {/* 5. Verified External Anchors (Stitch Screen 27) */}
      <SocialLinks />

      {/* 6. Grand Conclusion Finale (Stitch Screen 28) */}
      <PortalConclusion 
        onStartNewExpedition={handleScrollToTransmission} 
      />
    </div>
  );
}
