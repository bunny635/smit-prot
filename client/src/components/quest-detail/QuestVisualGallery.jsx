import React from 'react';

/**
 * QuestVisualGallery - 3D Holographic Gallery for Project Screenshots
 * Implements the Stitch reference 'quest_quickgo_project_detail' perspective layout.
 */
export default function QuestVisualGallery({ project }) {
  if (project.id !== 'quest-001') return null;

  return (
    <section className="relative pt-6 pb-12 flex flex-col gap-6 w-full">
      <div className="flex items-center gap-4">
        <span className="w-8 h-[1px] bg-primary block" />
        <h2 className="font-serif text-3xl sm:text-4xl text-on-surface uppercase font-bold">
          HOLOGRAPHIC GALLERY
        </h2>
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] perspective-[1000px] overflow-hidden flex items-center justify-center mt-8">
        
        {/* Center Panel - Dashboard */}
        <div className="absolute w-[90%] md:w-[60%] h-[80%] md:h-[70%] bg-[#181818]/70 backdrop-blur-xl border border-primary/20 rounded-xl z-30 transform translate-z-0 hover:scale-[1.02] transition-transform duration-500 overflow-hidden flex flex-col shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <div className="bg-surface/90 border-b border-primary/20 p-2 flex justify-between items-center shrink-0">
            <span className="font-mono text-[10px] uppercase text-primary/70 tracking-widest">VIEW_MAIN_DASHBOARD</span>
            <span className="material-symbols-outlined text-primary/50 text-sm">fullscreen</span>
          </div>
          <div className="flex-1 relative w-full h-full bg-surface-variant">
            <img 
              className="w-full h-full object-cover opacity-80 mix-blend-screen" 
              alt="Dashboard Interface" 
              src="/assets/stitch/projects/quickgo-dashboard.webp" 
            />
          </div>
        </div>

        {/* Left Panel - Map */}
        <div 
          className="hidden md:flex absolute left-[5%] w-[40%] h-[50%] bg-[#181818]/70 backdrop-blur-xl border border-primary/20 rounded-xl z-20 opacity-70 blur-[2px] transition-all duration-500 hover:opacity-100 hover:blur-none hover:z-40 overflow-hidden"
          style={{ transform: 'translateX(-20%) rotateY(-15deg) translateZ(-100px)' }}
        >
          <div className="flex-1 w-full h-full relative">
            <img 
              className="w-full h-full object-cover opacity-80 mix-blend-screen" 
              alt="Map Interface" 
              src="/assets/stitch/projects/quickgo-map.webp" 
            />
          </div>
        </div>

        {/* Right Panel - Code */}
        <div 
          className="hidden md:flex absolute right-[5%] w-[40%] h-[50%] bg-[#181818]/70 backdrop-blur-xl border border-primary/20 rounded-xl z-20 opacity-70 blur-[2px] transition-all duration-500 hover:opacity-100 hover:blur-none hover:z-40 overflow-hidden"
          style={{ transform: 'translateX(20%) rotateY(15deg) translateZ(-100px)' }}
        >
          <div className="flex-1 w-full h-full relative">
            <img 
              className="w-full h-full object-cover opacity-80 mix-blend-screen" 
              alt="Smart Contract Interface" 
              src="/assets/stitch/projects/quickgo-code.webp" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
