import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

/**
 * HudScrollProgress — Desktop Vertical Scroll HUD Indicator
 * Fixed to the right edge with vertical rail, gold active segment,
 * and technical altitude / depth readouts.
 */
export function HudScrollProgress({ className = '' }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [altitude, setAltitude] = useState(2400);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        setAltitude(2400);
        return;
      }
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);
      // Simulate descending from 2400m into deep archive at 120m
      const calculatedAlt = Math.round(2400 - (progress / 100) * 2280);
      setAltitude(calculatedAlt);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        'hidden lg:flex fixed right-4 top-24 bottom-12 z-30 pointer-events-none',
        'flex-col items-center justify-between select-none font-meta-technical',
        className
      )}
      aria-hidden="true"
    >
      {/* Top Altitude HUD Readout */}
      <div className="rotate-90 origin-right translate-x-2 text-[10px] text-outline tracking-widest whitespace-nowrap mb-6">
        ALT: <span className="text-primary font-semibold">{altitude}m</span>
      </div>

      {/* Rail & Progress Line */}
      <div className="w-[2px] flex-1 bg-outline-variant/30 relative rounded-full overflow-hidden my-4">
        <div
          className="absolute top-0 left-0 w-full bg-primary transition-all duration-150 ease-out shadow-gold-glow"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Bottom Depth HUD Readout */}
      <div className="text-[9px] text-on-surface-variant/70 tracking-widest whitespace-nowrap mt-4">
        DEPTH: <span className="text-primary font-semibold">{Math.round(scrollProgress)}%</span>
      </div>
    </div>
  );
}

export default HudScrollProgress;
