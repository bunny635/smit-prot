import React, { useRef, useEffect } from 'react';

/**
 * ConsolePrompt — Interactive Command Line Input
 * Features:
 * - smit@quest:~$ prompt prefix with glowing block cursor
 * - Command history navigation via Arrow Up / Arrow Down
 * - Tab key auto-completion for registered commands
 * - Touch-friendly quick command chips for mobile users
 */
export function ConsolePrompt({
  input,
  onInputChange,
  onSubmit,
  onKeyDown,
  availableCommands = [],
  onSelectQuickCommand,
}) {
  const inputRef = useRef(null);

  // Auto-focus terminal input on load & clicks
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  const quickCommands = ['help', 'status', 'identity', 'routes', 'projects', 'skills', 'clear'];

  return (
    <div className="w-full flex flex-col gap-3 pt-3 border-t border-outline-variant/30 select-none">
      {/* Active Command Input Line */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2.5 w-full">
        <label htmlFor="terminal-command-input" className="text-primary font-bold font-meta-technical text-[13px] shrink-0">
          smit@quest:~$
        </label>

        <div className="flex-1 relative flex items-center">
          <input
            id="terminal-command-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck="false"
            placeholder="type protocol (e.g. 'help', 'status', 'projects')..."
            aria-label="Terminal command input"
            className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-on-surface p-0 font-meta-technical text-[16px] md:text-[13px] placeholder:text-outline-variant/40"
          />
        </div>

        <button
          type="submit"
          aria-label="Execute command"
          className="px-3 py-1.5 bg-primary/15 hover:bg-primary/25 border border-primary/40 text-primary rounded-DEFAULT font-meta-technical text-[11px] uppercase tracking-wider transition-colors min-h-[40px] flex items-center justify-center shrink-0"
        >
          <span>RUN</span>
          <span className="material-symbols-outlined text-[14px] ml-1">keyboard_return</span>
        </button>
      </form>

      {/* Touch-Friendly Quick Command Chips (Handheld Relic HUD) */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="font-meta-technical text-[10px] text-outline-variant/70 uppercase tracking-widest mr-1 hidden sm:inline">
          QUICK PROTOCOLS:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => onSelectQuickCommand && onSelectQuickCommand(cmd)}
            className="px-2.5 py-1 bg-surface-container-lowest/80 hover:bg-primary/10 border border-outline-variant/30 hover:border-primary/50 text-on-surface-variant hover:text-primary font-meta-technical text-[10px] uppercase tracking-wider rounded-DEFAULT transition-all min-h-[36px] sm:min-h-[28px] flex items-center"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ConsolePrompt;
