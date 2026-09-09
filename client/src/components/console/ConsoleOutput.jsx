import React from 'react';
import clsx from 'clsx';

/**
 * ConsoleOutput — Structured Terminal Output Renderer
 * Formats command results cleanly into monospace lists, tables, and telemetry cards.
 */
export function ConsoleOutput({ entry }) {
  if (!entry) return null;

  const { type, content, command } = entry;

  // Render User Command Prompt
  if (type === 'command') {
    return (
      <div className="flex items-center gap-2 font-meta-technical text-[13px] pt-2">
        <span className="text-primary font-bold">smit@quest:~$</span>
        <span className="text-on-surface font-mono">{command}</span>
      </div>
    );
  }

  // Render Boot Sequence Lines
  if (type === 'boot') {
    return (
      <div className="font-meta-technical text-[12px] text-on-surface-variant/80 space-y-1 select-none border-b border-outline-variant/20 pb-4 mb-2">
        <p className="text-outline-variant">SMIT_OS v9.4.2 [Build 8402.11 // KERNEL ONLINE]</p>
        <p>Establishing secure connection to mainframe...</p>
        <p className="text-primary font-bold">Connection established // ARCHIVIST_01 authenticated.</p>
        <p className="pt-1 text-on-surface-variant">
          Welcome to the System Console. Type <strong className="text-primary font-bold">help</strong> for available protocols.
        </p>
      </div>
    );
  }

  // Render Error Response
  if (type === 'error') {
    return (
      <div className="font-meta-technical text-[12px] text-error pl-4 border-l-2 border-error/50 py-1 my-1">
        <p>{content || 'COMMAND NOT RECOGNIZED.'}</p>
        <p className="text-[11px] text-outline-variant mt-0.5">TYPE "HELP" FOR AVAILABLE ARCHIVIST PROTOCOLS.</p>
      </div>
    );
  }

  // Render Help Protocol List
  if (type === 'help') {
    return (
      <div className="my-2 pl-4 border-l-2 border-primary/40 font-meta-technical text-[12px] space-y-2">
        <div className="text-primary font-bold tracking-wider text-[11px] uppercase pb-1 border-b border-outline-variant/20">
          AVAILABLE ARCHIVIST PROTOCOLS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 pt-1">
          {content.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-primary font-bold w-24 shrink-0">{item.cmd}</span>
              <span className="text-on-surface-variant/90">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="text-[10px] text-outline-variant pt-2 border-t border-outline-variant/15">
          TIP: NAVIGATION PROTOCOLS (e.g. "hub", "quests", "skills") WILL NAVIGATE TO DESTINATION SECTOR.
        </div>
      </div>
    );
  }

  // Render System Status
  if (type === 'status') {
    return (
      <div className="my-2 pl-4 border-l-2 border-primary/40 font-meta-technical text-[12px] space-y-2 bg-surface-container-lowest/50 p-3 rounded-DEFAULT border border-outline-variant/20">
        <div className="text-primary font-bold tracking-wider text-[11px] uppercase pb-1 border-b border-outline-variant/20 flex justify-between">
          <span>SYSTEM_STATUS // DIAGNOSTIC MATRIX</span>
          <span className="text-primary-fixed">ALL SUBSYSTEMS NOMINAL</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <div><span className="text-outline-variant">CORE KERNEL: </span><span className="text-on-surface font-bold">SMIT_QUEST v3.0.0</span></div>
          <div><span className="text-outline-variant">OPERATIVE: </span><span className="text-primary font-bold">{content.name}</span></div>
          <div><span className="text-outline-variant">LEVEL: </span><span className="text-on-surface font-bold">LVL {content.level}</span></div>
          <div><span className="text-outline-variant">EXPERIENCE: </span><span className="text-primary-fixed font-bold">{content.xp} / {content.nextLevelXp} XP</span></div>
          <div><span className="text-outline-variant">VISITED SECTORS: </span><span className="text-on-surface">{content.visitedCount} OF 12</span></div>
          <div><span className="text-outline-variant">WEBGL CANVAS: </span><span className="text-primary font-bold">ACTIVE // 60FPS</span></div>
        </div>
      </div>
    );
  }

  // Render Identity Profile
  if (type === 'identity') {
    return (
      <div className="my-2 pl-4 border-l-2 border-primary/40 font-meta-technical text-[12px] space-y-2 bg-surface-container-lowest/50 p-3 rounded-DEFAULT border border-outline-variant/20">
        <div className="text-primary font-bold tracking-wider text-[11px] uppercase pb-1 border-b border-outline-variant/20">
          OPERATIVE NEURAL PROFILE // ARCHIVIST_01
        </div>
        <p className="text-on-surface text-[13px] font-sans leading-relaxed">{content.bio}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-2 border-t border-outline-variant/15">
          <div><span className="text-outline-variant">ROLE: </span><span className="text-on-surface">{content.role}</span></div>
          <div><span className="text-outline-variant">COORDINATES: </span><span className="text-primary font-mono">{content.coordinates}</span></div>
          <div className="sm:col-span-2"><span className="text-outline-variant">CORE PHILOSOPHY: </span><span className="text-on-surface-variant font-sans italic">"{content.philosophy}"</span></div>
        </div>
      </div>
    );
  }

  // Render Route Registry
  if (type === 'routes') {
    return (
      <div className="my-2 pl-4 border-l-2 border-primary/40 font-meta-technical text-[12px] space-y-2">
        <div className="text-primary font-bold tracking-wider text-[11px] uppercase pb-1 border-b border-outline-variant/20">
          ACTIVE SECTOR ROUTE MATRIX [12 ROUTES]
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1">
          {content.map((r, idx) => (
            <div key={idx} className="p-2 bg-surface-container-lowest/70 border border-outline-variant/25 rounded flex items-center justify-between gap-2">
              <div>
                <span className="text-primary font-bold block">{r.path}</span>
                <span className="text-[10px] text-outline-variant uppercase">{r.name}</span>
              </div>
              <span className="text-[9px] text-outline font-mono">{r.sector}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render Projects List
  if (type === 'projects') {
    return (
      <div className="my-2 pl-4 border-l-2 border-primary/40 font-meta-technical text-[12px] space-y-2">
        <div className="text-primary font-bold tracking-wider text-[11px] uppercase pb-1 border-b border-outline-variant/20">
          SCANNING DATABANKS // ACTIVE QUEST ARTIFACTS [{content.length}]
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {content.map((p) => (
            <div key={p.id} className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded flex flex-col gap-1.5">
              <div className="flex justify-between items-start">
                <span className="text-primary font-bold text-sm">{p.title}</span>
                <span className="text-[10px] text-outline-variant font-mono">{p.questNumber}</span>
              </div>
              <p className="text-[11px] text-on-surface-variant font-sans line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {p.techStack?.slice(0, 4).map((t, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-primary/10 text-primary-fixed text-[9px] rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render Generic Data Summary (Skills, Lab, Memory, Education, Achievements)
  if (type === 'generic-list') {
    return (
      <div className="my-2 pl-4 border-l-2 border-primary/40 font-meta-technical text-[12px] space-y-2">
        <div className="text-primary font-bold tracking-wider text-[11px] uppercase pb-1 border-b border-outline-variant/20">
          {content.title} [{content.items.length} RECORDS]
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {content.items.map((item, idx) => (
            <div key={idx} className="p-2.5 bg-surface-container-lowest/70 border border-outline-variant/25 rounded flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-on-surface font-bold text-[12px] block truncate">{item.label}</span>
                <span className="text-[10px] text-on-surface-variant/80 truncate block">{item.sub}</span>
              </div>
              <span className="text-primary text-[10px] font-mono shrink-0">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default Plain Text Line
  return (
    <div className="font-meta-technical text-[12px] text-on-surface-variant pl-4 border-l border-outline-variant/20 py-0.5">
      {typeof content === 'string' ? content : JSON.stringify(content)}
    </div>
  );
}

export default ConsoleOutput;
