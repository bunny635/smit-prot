import React from 'react';
import { Link } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import clsx from 'clsx';

/**
 * TopAppBar — Global Aethelgard Header
 * Fixed top application bar with dark translucent smoked-glass surface.
 * Displays: SMIT QUEST, LVL 05, XP 2450/3000, SYSTEM ONLINE.
 */
export function TopAppBar({ className = '' }) {
  const { player } = usePlayer();

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 h-16 z-40',
        'bg-surface/80 backdrop-blur-md border-b border-outline-variant/30',
        'px-4 md:px-margin-safe flex items-center justify-between',
        'transition-all duration-300 select-none',
        className
      )}
    >
      {/* Brand Identity */}
      <div className="flex items-center gap-4">
        <Link
          to="/hub"
          className="group flex items-center gap-3 text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary p-1"
          title="Return to World Hub"
        >
          <span className="w-2 h-2 bg-primary rounded-sm shadow-gold-glow-subtle group-hover:shadow-gold-glow transition-all" />
          <span className="font-headline-lg-mobile text-[18px] md:text-[20px] font-bold tracking-[0.18em] text-primary group-hover:text-primary-fixed transition-colors">
            SMIT QUEST
          </span>
        </Link>
        <span className="hidden sm:inline-block text-outline-variant/50 text-[10px] font-meta-technical">
          //
        </span>
        <span className="hidden sm:inline-block font-meta-technical text-[11px] text-on-surface-variant/70 tracking-widest uppercase">
          {player.title}
        </span>
      </div>

      {/* Right Technical Status & Player XP */}
      <div className="flex items-center gap-4 md:gap-6 font-meta-technical text-meta-technical">
        {/* System Online Badge */}
        <div className="hidden lg:flex items-center gap-2 text-on-surface-variant/80 tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-[11px] uppercase">SYSTEM ONLINE</span>
        </div>

        {/* Player Stats */}
        <div className="flex items-center gap-3 bg-surface-container/60 border border-outline-variant/40 px-3 py-1.5 rounded-DEFAULT">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-on-surface-variant/70 tracking-wider">LVL</span>
            <span className="text-primary font-semibold text-[13px] tracking-wider">
              {String(player.level).padStart(2, '0')}
            </span>
          </div>
          <span className="text-outline-variant/60">|</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-on-surface-variant/70 tracking-wider">XP</span>
            <span className="text-primary font-semibold text-[13px] tracking-wider">
              {player.currentXP}/{player.maxXP}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopAppBar;
