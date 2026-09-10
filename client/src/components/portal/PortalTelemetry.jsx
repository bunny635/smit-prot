import React from 'react';

/**
 * PortalTelemetry — Restrained final-system diagnostic readout monitoring
 * mission status, archive synchronization, and realistic contact channel status.
 * Reuses existing PlayerContext state without adding fake XP rewards.
 */
export default function PortalTelemetry({ telemetry, player }) {
  const telemetryMetrics = [
    {
      label: 'MISSION STATUS',
      value: telemetry?.missionStatus || 'COMPLETE',
      color: 'text-primary font-bold',
    },
    {
      label: 'ARCHIVE STATUS',
      value: telemetry?.archiveStatus || 'SYNCHRONIZED (12 SECTORS)',
      color: 'text-on-surface',
    },
    {
      label: 'CONTACT CHANNEL',
      // Reflects reality honestly: client-side active, server-side unconfigured
      value: 'READY (CLIENT ONLY)',
      color: 'text-secondary font-semibold',
    },
    {
      label: 'OPERATIVE RECORD',
      value: `${player?.name || 'ARCHIVIST_01'} // LVL ${String(player?.level || 5).padStart(2, '0')}`,
      color: 'text-on-surface',
    },
    {
      label: 'NEXT EXPEDITION',
      value: telemetry?.nextExpedition || 'OPEN FOR COLLABORATION',
      color: 'text-primary/90 font-semibold',
    },
  ];

  return (
    <section 
      aria-label="Portal System Telemetry"
      className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-4 select-none"
    >
      <div className="bg-surface-container-lowest/70 border border-outline-variant/20 rounded-lg p-4 sm:p-5 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-outline-variant/15 pb-2.5 mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary" aria-hidden="true">
              terminal
            </span>
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
              FINAL_MISSION_TELEMETRY
            </span>
          </div>

          <div className="font-mono text-[10px] text-outline/70 tracking-widest uppercase hidden sm:flex items-center gap-3">
            <span>XP: {player?.currentXP || 2450} / {player?.maxXP || 3000}</span>
            <span>•</span>
            <span>SEC-11 // TERMINAL</span>
          </div>
        </div>

        {/* Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {telemetryMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-[10px] text-outline tracking-wider uppercase mb-1">
                {metric.label}
              </span>
              <span className={`font-mono text-xs tracking-wide ${metric.color}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
