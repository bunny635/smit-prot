import React from 'react';

/**
 * VoidTelemetry — Sparse technical status readout monitoring
 * signal integrity, access restrictions, and sector parameters.
 * Dynamic counts reflect actual archive records.
 */
export default function VoidTelemetry({ telemetry, isExtracted, recordsCount = 5, stats }) {
  const dynamicRecordsLabel = `${String(recordsCount).padStart(2, '0')} ARCHIVED`;

  const telemetryStats = [
    {
      label: 'ACCESS LEVEL',
      value: isExtracted ? 'ANOMALY_VERIFIED' : 'RESTRICTED',
      color: isExtracted ? 'text-primary' : 'text-outline',
    },
    {
      label: 'SIGNAL INTEGRITY',
      value: isExtracted ? 'SIGNAL_DECODED' : (telemetry?.signalIntegrity || 'UNRESOLVED'),
      color: isExtracted ? 'text-primary' : 'text-outline',
    },
    {
      label: 'CLASSIFIED RECORDS',
      value: dynamicRecordsLabel,
      color: 'text-on-surface',
    },
    {
      label: 'SECTOR DEPTH',
      value: 'MAX (-15.0 COORD)',
      color: 'text-on-surface',
    },
    {
      label: 'NEXT GATEWAY',
      value: 'FINAL PORTAL',
      color: 'text-primary/90',
    },
  ];

  return (
    <section 
      className="w-full max-w-4xl mx-auto my-6 px-4 select-none"
      aria-label="Sector Telemetry Readout"
    >
      <div className="bg-surface-container-lowest/70 border border-outline-variant/20 rounded-lg p-4 sm:p-5 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between border-b border-outline-variant/15 pb-2.5 mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary" aria-hidden="true">sensors</span>
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
              DIAGNOSTIC_TELEMETRY_STREAM
            </span>
          </div>
          <span className="font-mono text-[10px] text-outline/70 tracking-widest uppercase hidden sm:inline">
            NODE-99 // SECTOR-VOID
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {telemetryStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-[10px] text-outline tracking-wider uppercase mb-1">
                {stat.label}
              </span>
              <span className={`font-mono text-xs font-semibold tracking-wide ${stat.color}`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
