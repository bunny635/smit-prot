import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import SideNav from './SideNav';
import HudScrollProgress from './HudScrollProgress';
import MobileBottomNav from './MobileBottomNav';
import clsx from 'clsx';

/**
 * AppLayout — Global Orchestrator Shell
 * Coordinates TopAppBar, SideNav, HudScrollProgress, MobileBottomNav,
 * and the main content viewport.
 */
export function AppLayout({ children, hideNav = false }) {
  const location = useLocation();

  // Root intro screen ('/') presents an immersive full-canvas layout
  const isIntroPage = location.pathname === '/';
  const shouldHideNav = hideNav || isIntroPage;

  return (
    <div className="min-h-screen bg-abyss text-on-surface flex flex-col relative overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      {/* Global Architectural Ambient Glows */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
        {/* Deep ambient radial glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Global Noise Overlay */}
      <div className="noise-texture" />

      {/* Top App Bar (Suppressed on intro page) */}
      {!shouldHideNav && <TopAppBar />}

      <div className="flex-1 flex w-full relative z-10">
        {/* Desktop Side Navigation */}
        {!shouldHideNav && <SideNav />}

        {/* Main Viewport */}
        <main
          className={clsx(
            'flex-1 w-full min-h-screen transition-all duration-300',
            !shouldHideNav && 'pt-16 md:ml-64 pb-20 md:pb-12 px-4 md:px-margin-safe',
            shouldHideNav && 'p-0'
          )}
        >
          {children || <Outlet />}
        </main>

        {/* Desktop HUD Scroll Indicator */}
        {!shouldHideNav && <HudScrollProgress />}
      </div>

      {/* Mobile Bottom Navigation */}
      {!shouldHideNav && <MobileBottomNav />}
    </div>
  );
}

export default AppLayout;
