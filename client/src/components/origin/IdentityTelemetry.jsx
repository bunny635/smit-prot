import React from 'react';
import { motion } from 'framer-motion';
import { usePlayer } from '../../context/PlayerContext';
import StatusBadge from '../ui/StatusBadge';
import XPBar from '../ui/XPBar';

/**
 * IdentityTelemetry — Architectural Metadata Panel
 * Displays verified operative identity, level, XP synchronization, and sector coordinates.
 */
export function IdentityTelemetry() {
  const { player } = usePlayer();

  const telemetryFields = [
    {
      label: 'OPERATIVE DESIGNATION',
      value: player.name, // 'ARCHIVIST_01'
      icon: 'badge',
    },
    {
      label: 'CORE ROLE',
      value: player.title, // 'FULL STACK DEVELOPER'
      icon: 'architecture',
    },
    {
      label: 'SECTOR CLEARANCE',
      value: `LEVEL ${String(player.level).padStart(2, '0')}`,
      icon: 'military_tech',
    },
    {
      label: 'SPATIAL TELEMETRY',
      value: '15.0.5 // MONOLITH_ONE',
      icon: 'radar',
    },
  ];

  return (
    <section aria-label="Identity Telemetry Matrix" className="w-full my-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full aethel-glass aethel-rim-border corner-brackets p-6 md:p-8 flex flex-col gap-6 shadow-2xl"
      >
        {/* Panel Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/30 pb-4">
          <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-sm bg-primary shadow-gold-glow-subtle" />
            <span>ARCHIVAL CODEX // OPERATIVE TELEMETRY</span>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status="ACTIVE" size="sm" />
            <span className="font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
              SYS: SYNCHRONIZED
            </span>
          </div>
        </div>

        {/* Telemetry Key-Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {telemetryFields.map((field) => (
            <div
              key={field.label}
              className="p-3.5 bg-surface-container-lowest/70 border border-outline-variant/30 rounded-DEFAULT flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2 font-meta-technical text-[10px] text-outline-variant tracking-wider uppercase">
                <span className="material-symbols-outlined text-[14px] text-primary/80">
                  {field.icon}
                </span>
                <span>{field.label}</span>
              </div>
              <div className="font-meta-technical text-[13px] md:text-[14px] font-bold text-on-surface tracking-wide">
                {field.value}
              </div>
            </div>
          ))}
        </div>

        {/* XP Protocol Meter Bar */}
        <div className="pt-2 border-t border-outline-variant/20">
          <XPBar
            currentXP={player.currentXP}
            maxXP={player.maxXP}
            label="EXPEDITION PROTOCOL SYNCHRONIZATION"
            size="md"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default IdentityTelemetry;
