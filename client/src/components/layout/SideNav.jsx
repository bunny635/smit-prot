import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import clsx from 'clsx';

const NAV_ITEMS = [
  { name: 'WORLD HUB', path: '/hub', icon: 'hub' },
  { name: 'ORIGIN TOWER', path: '/origin', icon: 'apartment' },
  { name: 'QUEST ARENA', path: '/quests', icon: 'military_tech' },
  { name: 'SKILL TREE', path: '/skills', icon: 'account_tree' },
  { name: 'MISSION LOG', path: '/journal', icon: 'auto_stories' },
  { name: 'FORBIDDEN LAB', path: '/lab', icon: 'biotech' },
  { name: 'MEMORY VALLEY', path: '/memory', icon: 'history_edu' },
  { name: 'EDUCATION', path: '/education', icon: 'school' },
  { name: 'ACHIEVEMENTS', path: '/achievements', icon: 'workspace_premium' },
  { name: 'CONSOLE', path: '/console', icon: 'terminal' },
];

/**
 * SideNav — Desktop Fixed Left Navigation
 * Width: ~256px, fixed left, translucent smoked-glass aesthetic.
 * Displays ARCHIVIST_01 identity, coordinates, and navigation nodes.
 */
export function SideNav({ className = '' }) {
  const { player } = usePlayer();

  return (
    <aside
      className={clsx(
        'hidden md:flex flex-col w-64 fixed left-0 top-16 bottom-0 z-30',
        'bg-surface-container/75 backdrop-blur-md border-r border-outline-variant/30',
        'p-4 select-none overflow-y-auto',
        className
      )}
      aria-label="Primary Expedition Navigation"
    >
      {/* Identity Core Header */}
      <div className="p-3 mb-4 border-b border-outline-variant/30 bg-surface-container-lowest/50 rounded-DEFAULT">
        <div className="flex items-center justify-between font-meta-technical text-[10px] text-outline-variant tracking-widest uppercase mb-1">
          <span>OPERATIVE ID</span>
          <span className="text-primary font-semibold">ONLINE</span>
        </div>
        <div className="font-meta-technical text-[13px] font-bold text-on-surface tracking-wider">
          {player.name}
        </div>
        <div className="font-meta-technical text-[10px] text-on-surface-variant/60 tracking-widest mt-0.5">
          COORD: 34.0522° N // 0x7F
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 flex flex-col gap-1">
        <div className="font-meta-technical text-[10px] text-outline-variant/70 tracking-[0.2em] uppercase px-3 py-1.5">
          SECTORS & ARCHIVES
        </div>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'group relative flex items-center gap-3 px-3 py-2.5 rounded-DEFAULT',
                'font-meta-technical text-meta-technical uppercase tracking-[0.14em]',
                'transition-all duration-200 ease-out',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
                isActive
                  ? 'bg-primary/10 text-primary border-l-2 border-primary font-semibold shadow-gold-glow-subtle'
                  : 'text-on-surface-variant/80 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent'
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={clsx(
                    'material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:scale-110',
                    isActive ? 'text-primary fill' : 'text-on-surface-variant/70 group-hover:text-primary'
                  )}
                  style={{
                    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {item.icon}
                </span>
                <span className="truncate">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer System Diagnostics */}
      <div className="pt-4 mt-auto border-t border-outline-variant/30 font-meta-technical text-[10px] text-outline-variant/70 flex flex-col gap-1 px-2">
        <div className="flex justify-between">
          <span>CORE ENGINE:</span>
          <span className="text-on-surface">v3.0.0</span>
        </div>
        <div className="flex justify-between">
          <span>ODYSSEY STATE:</span>
          <span className="text-primary">ACTIVE</span>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
