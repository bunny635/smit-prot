import React from 'react';
import { Link } from 'react-router-dom';

/**
 * QuestNotFound — Aethelgard Error State
 * Renders when a requested project ID or slug cannot be resolved in PROJECTS_DATA.
 * Conforms strictly to Aethelgard aesthetics with zero React crashes or random fallbacks.
 */
export function QuestNotFound({ requestedId }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full text-center relative p-8 md:p-12 border border-outline-variant/30 bg-[#14140f]/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        {/* Corner Brackets */}
        <span className="corner-bracket corner-top-left border-primary/50" />
        <span className="corner-bracket corner-top-right border-primary/50" />
        <span className="corner-bracket corner-bottom-left border-primary/50" />
        <span className="corner-bracket corner-bottom-right border-primary/50" />

        {/* Warning Glyph */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-primary/40 bg-primary/5 text-primary">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>
            error_outline
          </span>
        </div>

        {/* Technical Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-6 h-[1px] bg-primary/40" />
          <span className="font-mono text-xs text-primary/80 uppercase tracking-widest">
            ARCHIVE REGISTRY // ERROR 404
          </span>
          <span className="w-6 h-[1px] bg-primary/40" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-5xl text-on-surface mb-4 tracking-tight">
          QUEST NOT FOUND
        </h1>

        {/* Error Code & Details */}
        <div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/20 mb-6 font-mono text-xs text-on-surface-variant">
          ARCHIVE RECORD DOES NOT EXIST
          {requestedId && (
            <div className="text-primary/70 mt-1 truncate">
              ID_QUERY: &quot;{requestedId}&quot;
            </div>
          )}
        </div>

        <p className="font-sans text-sm md:text-base text-on-surface-variant/80 mb-8 leading-relaxed">
          The requested quest coordinates or identifier could not be verified within the authoritative
          chronicles of Aethelgard. Verify telemetry parameters or return to the tactical project archive.
        </p>

        {/* Return Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/quests"
            className="w-full sm:w-auto px-6 py-3 border border-primary text-primary font-mono text-xs uppercase tracking-widest bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            RETURN TO QUEST ARENA
          </Link>
          <Link
            to="/hub"
            className="w-full sm:w-auto px-6 py-3 border border-outline-variant/40 text-on-surface-variant font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">explore</span>
            WORLD HUB
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestNotFound;
