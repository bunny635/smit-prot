import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { WORLD_DESTINATIONS } from '../../data/worldDestinations';
import StatusBadge from '../ui/StatusBadge';

/**
 * DestinationManifest — Keyboard-Accessible Destination Directory
 * Acts as the authoritative accessibility source of truth and mobile Quick Access drawer.
 * Desktop: Docked secondary panel.
 * Mobile: Full bottom drawer with >=44px touch targets.
 */
export function DestinationManifest({
  activeDestination = null,
  onHoverDestination,
  onUnhoverDestination,
  isOpen = false,
  onClose,
  isMobile = false,
}) {
  const navigate = useNavigate();
  const [desktopCollapsed, setDesktopCollapsed] = useState(true);

  const handleSelect = (destination) => {
    navigate(destination.route);
    if (onClose) onClose();
  };

  /* --------------------------------------------------------------------------
     Mobile Drawer Mode
     -------------------------------------------------------------------------- */
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-abyss/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Bottom Drawer Container */}
            <motion.div
              role="dialog"
              aria-label="World Destinations Index"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative z-10 w-full max-h-[85vh] bg-surface-container/95 backdrop-blur-xl border-t border-primary/30 rounded-t-xl p-4 pb-20 flex flex-col gap-4 overflow-hidden shadow-2xl"
            >
              {/* Drag handle / Close bar */}
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase font-bold">
                  <span className="material-symbols-outlined text-[18px]">widgets</span>
                  <span>SYSTEM INDEX // DESTINATIONS [11]</span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-DEFAULT"
                  aria-label="Close Destinations Index"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Destination Scroll List */}
              <div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-1">
                {WORLD_DESTINATIONS.map((dest) => {
                  const isActive = activeDestination?.id === dest.id;
                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => handleSelect(dest)}
                      className={clsx(
                        'w-full min-h-[52px] px-3.5 py-2.5 rounded-DEFAULT flex items-center justify-between gap-3 text-left transition-all duration-200',
                        'border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
                        isActive
                          ? 'bg-primary/15 border-primary text-primary shadow-gold-glow-subtle'
                          : 'bg-surface-container-lowest/70 border-outline-variant/30 text-on-surface hover:border-primary/50 hover:bg-primary/5'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={clsx(
                            'material-symbols-outlined text-[20px]',
                            isActive ? 'text-primary' : 'text-on-surface-variant/70'
                          )}
                        >
                          {dest.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-headline-lg-mobile text-[15px] font-semibold tracking-wide">
                            {dest.label}
                          </span>
                          <span className="font-meta-technical text-[10px] text-on-surface-variant/60 tracking-wider">
                            {dest.coordinate}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <StatusBadge status={dest.status} size="sm" />
                        <span className="material-symbols-outlined text-[16px] text-primary/70">
                          chevron_right
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  /* --------------------------------------------------------------------------
     Desktop Docked Manifest
     -------------------------------------------------------------------------- */
  return (
    <aside
      className="hidden xl:flex fixed right-16 bottom-8 z-30 flex-col items-end pointer-events-auto"
      aria-label="Destinations Directory"
    >
      <div className="aethel-glass aethel-rim-border corner-brackets p-3 flex flex-col gap-2 max-w-xs shadow-2xl transition-all duration-300">
        {/* Manifest Header Toggle */}
        <button
          type="button"
          onClick={() => setDesktopCollapsed((prev) => !prev)}
          className="flex items-center justify-between gap-4 w-full p-1 font-meta-technical text-[11px] text-primary tracking-[0.18em] uppercase hover:text-primary-fixed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          aria-expanded={!desktopCollapsed}
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">travel_explore</span>
            <span>SECTOR MANIFEST</span>
          </div>
          <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: desktopCollapsed ? 'rotate(0deg)' : 'rotate(180deg)' }}>
            expand_less
          </span>
        </button>

        {/* Collapsible Destination Items List */}
        {!desktopCollapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-1 pt-2 border-t border-outline-variant/30 max-h-72 overflow-y-auto pr-1"
          >
            {WORLD_DESTINATIONS.map((dest) => {
              const isActive = activeDestination?.id === dest.id;
              return (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => handleSelect(dest)}
                  onMouseEnter={() => onHoverDestination && onHoverDestination(dest)}
                  onMouseLeave={() => onUnhoverDestination && onUnhoverDestination(dest)}
                  onFocus={() => onHoverDestination && onHoverDestination(dest)}
                  onBlur={() => onUnhoverDestination && onUnhoverDestination(dest)}
                  className={clsx(
                    'flex items-center justify-between gap-3 px-2.5 py-1.5 rounded-DEFAULT text-left transition-colors duration-150',
                    'font-meta-technical text-[11px] tracking-wider uppercase',
                    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
                    isActive
                      ? 'bg-primary/15 text-primary border-l-2 border-primary font-semibold'
                      : 'text-on-surface-variant/80 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent'
                  )}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="material-symbols-outlined text-[14px]">
                      {dest.icon}
                    </span>
                    <span className="truncate">{dest.label}</span>
                  </div>
                  <span className="text-[9px] text-outline-variant shrink-0">
                    {dest.coordinate.split('//')[1]?.trim() || ''}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </div>
    </aside>
  );
}

export default DestinationManifest;
