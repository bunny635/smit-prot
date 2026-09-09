import React, { useRef, useEffect } from 'react';
import ConsoleOutput from './ConsoleOutput';
import ConsolePrompt from './ConsolePrompt';

/**
 * ConsoleTerminal — Central Holographic Terminal Window Frame
 * Faithfully implements the Stitch system_console_terminal_access layout:
 * - Monolithic window frame with corner brackets
 * - Window controls (● ● ●) and header telemetry
 * - Monospace output log with auto-scrolling
 * - Background watermark sigil
 * - Integrated ConsolePrompt
 */
export function ConsoleTerminal({
  history = [],
  input = '',
  onInputChange,
  onSubmit,
  onKeyDown,
  onClear,
  availableCommands = [],
  onSelectQuickCommand,
}) {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom when new history is appended
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <div className="w-full aethel-glass aethel-rim-border corner-brackets rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.85)] flex flex-col select-none">
      {/* 1. Terminal Window Header Bar */}
      <div className="bg-surface-container-high/80 border-b border-outline-variant/30 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase font-bold">
            SYSTEM_ACCESS // TERMINAL CORE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClear}
            title="Clear terminal buffer"
            className="font-meta-technical text-[10px] text-outline-variant hover:text-primary transition-colors uppercase tracking-wider hidden sm:inline"
          >
            CLEAR BUFFER
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest border border-outline-variant/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest border border-outline-variant/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/70 border border-primary/50" />
          </div>
        </div>
      </div>

      {/* 2. Terminal Body Viewport */}
      <div className="relative bg-surface-dim/95 p-4 sm:p-6 min-h-[440px] max-h-[580px] overflow-y-auto flex flex-col justify-between custom-scrollbar">
        {/* Low-Opacity Watermark Sigil in Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none"
        >
          <span
            className="material-symbols-outlined text-[240px] sm:text-[320px] text-primary"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            fingerprint
          </span>
        </div>

        {/* Output Stream List */}
        <div className="relative z-10 flex flex-col gap-2 flex-1">
          {history.map((entry, idx) => (
            <ConsoleOutput key={idx} entry={entry} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Active Command Prompt */}
        <div className="relative z-10 mt-4">
          <ConsolePrompt
            input={input}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onKeyDown={onKeyDown}
            availableCommands={availableCommands}
            onSelectQuickCommand={onSelectQuickCommand}
          />
        </div>
      </div>
    </div>
  );
}

export default ConsoleTerminal;
