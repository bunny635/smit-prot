import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const MOBILE_DESTINATIONS = [
  { name: 'HUB', path: '/hub', icon: 'hub' },
  { name: 'QUESTS', path: '/quests', icon: 'military_tech' },
  { name: 'INVENTORY', path: '/inventory', icon: 'backpack' },
  { name: 'SKILLS', path: '/skills', icon: 'account_tree' },
  { name: 'ORIGIN', path: '/origin', icon: 'person' },
  { name: 'CONSOLE', path: '/console', icon: 'terminal' },
];

/**
 * MobileBottomNav — Handheld Relic HUD Bottom Navigation
 * Mobile only (md:hidden).
 * Minimum 44px touch targets, dark smoked glass surface, 1px top rim-light.
 */
export function MobileBottomNav({ className = '' }) {
  return (
    <nav
      className={clsx(
        'md:hidden fixed bottom-0 left-0 right-0 z-50 h-16',
        'bg-surface-container/90 backdrop-blur-xl border-t border-primary/20',
        'px-2 flex items-center justify-around select-none shadow-[0_-4px_20px_rgba(0,0,0,0.6)]',
        className
      )}
      aria-label="Mobile Navigation Bar"
    >
      {MOBILE_DESTINATIONS.map((dest) => (
        <NavLink
          key={dest.path}
          to={dest.path}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-1 py-1 rounded-DEFAULT',
              'font-meta-technical text-[10px] tracking-wider uppercase transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
              isActive
                ? 'text-primary drop-shadow-[0_0_8px_rgba(242,202,80,0.6)] scale-105 font-bold'
                : 'text-on-surface-variant/70 hover:text-primary hover:opacity-100'
            )
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined text-[20px] mb-0.5"
                style={{
                  fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {dest.icon}
              </span>
              <span className="leading-none">{dest.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default MobileBottomNav;
