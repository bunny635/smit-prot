import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WORLD_DESTINATIONS } from '../../data/worldDestinations';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';

/**
 * WorldHubFallback — Graceful Non-WebGL Fallback View
 * Activated if WebGL is unavailable or fails initialization.
 * Preserves full keyboard navigation, Aethelgard styling, and destination telemetry.
 */
export function WorldHubFallback() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-abyss text-on-surface flex flex-col justify-between p-4 md:p-margin-safe overflow-y-auto">
      {/* Fallback Ambient Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col gap-2 max-w-2xl pt-2">
        <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-sm bg-primary" />
          <span>SPATIAL ENGINE // 2D TELEMETRY MODE</span>
        </div>

        <h1 className="font-display-hero text-[32px] sm:text-[44px] text-primary tracking-wide leading-tight">
          WORLD HUB
        </h1>

        <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
          The 3D spatial canvas is operating in low-overhead archival mode. All digital odyssey sectors remain fully operational and navigable below.
        </p>
      </div>

      {/* Destination Grid */}
      <div className="relative z-10 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {WORLD_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            className="aethel-glass aethel-rim-border corner-brackets p-5 flex flex-col justify-between gap-4 hover:border-primary/60 transition-all group"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 border-b border-outline-variant/30 pb-2">
                <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">
                    {dest.icon}
                  </span>
                  <span>{dest.coordinate}</span>
                </div>
                <StatusBadge status={dest.status} size="sm" />
              </div>

              <h2 className="font-headline-lg text-[20px] text-on-surface group-hover:text-primary transition-colors font-semibold">
                {dest.label}
              </h2>

              <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                {dest.description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-2 pt-3 border-t border-outline-variant/20">
              <span className="font-meta-technical text-[10px] text-primary/80 tracking-wider">
                {dest.xpReward}
              </span>

              <QuestButton
                size="sm"
                variant="ghost"
                icon="arrow_forward"
                iconPosition="right"
                onClick={() => navigate(dest.route)}
              >
                ENTER
              </QuestButton>
            </div>
          </div>
        ))}
      </div>

      {/* Footer System Telemetry */}
      <div className="relative z-10 border-t border-outline-variant/30 pt-4 font-meta-technical text-[10px] text-outline-variant/70 flex flex-col sm:flex-row justify-between gap-2 uppercase tracking-widest">
        <span>STATUS: ARCHIVAL CORE SYNCHRONIZED</span>
        <span>ARCHIVIST_01 // SEC-00-CODEX</span>
      </div>
    </div>
  );
}

export default WorldHubFallback;
