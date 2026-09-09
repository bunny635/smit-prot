import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlayer } from '../../context/PlayerContext';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';

/**
 * WorldHubHud — Central Interface Layer for SMIT QUEST World Hub
 * Renders the atmospheric architectural HUD overlay:
 * - World Title: THE DIGITAL ODYSSEY / WORLD HUB // NAVIGATION CORE
 * - Operative Identity: ARCHIVIST_01 | SYSTEM ONLINE | LVL 05 | XP 2450 / 3000
 * - Active Destination Inspector Card: Real-time telemetry on hovered/selected destination
 */
export function WorldHubHud({
  activeDestination = null,
  onNavigateToDestination,
  onOpenManifest,
  isMobile = false,
}) {
  const { player } = usePlayer();

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 md:p-margin-safe select-none">
      {/* Top Section: World Title & Technical Designation */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 w-full pt-1">
        {/* Monolithic World Title */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-1 max-w-lg"
        >
          <div className="flex items-center gap-2 font-meta-technical text-[10px] md:text-meta-technical text-primary tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>THE DIGITAL ODYSSEY</span>
            <span className="text-outline-variant/60">//</span>
            <span className="text-on-surface-variant/80">SECTOR ACTIVE</span>
          </div>

          <h1 className="font-display-hero text-[28px] sm:text-[38px] md:text-[46px] text-primary leading-none tracking-wide drop-shadow-[0_0_15px_rgba(242,202,80,0.3)]">
            WORLD HUB
          </h1>

          <div className="font-meta-technical text-[10px] md:text-[11px] text-on-surface-variant/70 tracking-[0.2em] uppercase">
            NAVIGATION CORE // ARCHIVIST TERMINAL
          </div>
        </motion.div>

        {/* Top-Right Telemetry Badge (Desktop) */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aethel-glass aethel-rim-border corner-brackets p-3 md:px-5 md:py-3 flex flex-col items-end gap-1.5 self-start"
          >
            <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.18em] uppercase">
              <span className="text-on-surface-variant/80">{player.name}</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="font-semibold">LVL {String(player.level).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2 font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
              <span>XP PROTOCOL:</span>
              <span className="text-primary font-medium">
                {player.currentXP} / {player.maxXP}
              </span>
            </div>

            <div className="w-36 h-1 bg-surface-container-highest/80 rounded-sm overflow-hidden mt-1">
              <div
                className="h-full bg-primary shadow-gold-glow-subtle transition-all duration-300"
                style={{ width: `${(player.currentXP / player.maxXP) * 100}%` }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Center/Bottom Area: Active Destination Telemetry Inspector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 md:pb-0">
        {/* Hovered / Selected Destination Telemetry Card */}
        <AnimatePresence mode="wait">
          {activeDestination ? (
            <motion.div
              key={activeDestination.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto aethel-glass aethel-rim-border corner-brackets p-4 md:p-6 max-w-md w-full shadow-2xl flex flex-col gap-3 group"
            >
              {/* Sector Header */}
              <div className="flex items-center justify-between gap-3 border-b border-outline-variant/30 pb-2.5">
                <div className="flex items-center gap-2 font-meta-technical text-[10px] md:text-[11px] text-primary tracking-[0.2em]">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    {activeDestination.icon}
                  </span>
                  <span>{activeDestination.coordinate}</span>
                </div>
                <StatusBadge status={activeDestination.status} size="sm" />
              </div>

              {/* Title & XP */}
              <div className="flex flex-col gap-1">
                <span className="font-meta-technical text-[10px] text-on-surface-variant/70 tracking-[0.18em] uppercase">
                  {activeDestination.subtitle}
                </span>
                <h2 className="font-headline-lg text-[22px] md:text-[26px] text-primary tracking-wide leading-tight group-hover:text-primary-fixed transition-colors">
                  {activeDestination.label}
                </h2>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed line-clamp-2">
                {activeDestination.description}
              </p>

              {/* Meta & CTA Footer */}
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-outline-variant/30 mt-1">
                <div className="font-meta-technical text-[10px] md:text-[11px] text-primary/90 tracking-wider">
                  {activeDestination.xpReward}
                </div>

                <QuestButton
                  size="sm"
                  variant="ghost"
                  icon="arrow_forward"
                  iconPosition="right"
                  onClick={() => onNavigateToDestination(activeDestination.route)}
                >
                  ENTER PROTOCOL
                </QuestButton>
              </div>
            </motion.div>
          ) : (
            /* Idle Ambient Prompt */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aethel-glass border border-outline-variant/20 px-4 py-2.5 rounded-DEFAULT max-w-sm"
            >
              <div className="font-meta-technical text-[10px] md:text-[11px] text-on-surface-variant/70 tracking-[0.18em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-ping" />
                <span>SELECT OR HOVER SECTOR NODE TO INSPECT TELEMETRY</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Quick Action Manifest Button */}
        {isMobile && onOpenManifest && (
          <div className="pointer-events-auto flex items-center justify-end">
            <QuestButton
              variant="subtle"
              size="md"
              icon="widgets"
              iconPosition="left"
              onClick={onOpenManifest}
              className="w-full sm:w-auto"
            >
              SYSTEM INDEX [11]
            </QuestButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorldHubHud;
