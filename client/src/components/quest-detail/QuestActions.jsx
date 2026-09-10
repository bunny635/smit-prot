import React from 'react';
import { Link } from 'react-router-dom';

/**
 * QuestActions — Tactile Interaction Hub
 * Provides accessible direct action triggers for returning to arena,
 * accessing external repositories, or navigating to skills.
 */
export function QuestActions({ project }) {
  if (!project) return null;

  return (
    <div className="py-6 border-y border-outline-variant/20 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
      {/* Return to Arena Anchor */}
      <Link
        to="/quests"
        className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-outline-variant/40 text-on-surface-variant font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        <span>BACK TO QUEST ARENA</span>
      </Link>

      {/* External Repository & Matrix Actions */}
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-primary/50 bg-[#181814] text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            <span>OPEN GITHUB</span>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-primary bg-primary/15 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/25 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">visibility</span>
            <span>OPEN LIVE DEMO</span>
          </a>
        )}

        <Link
          to="/skills"
          className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-outline-variant/40 text-on-surface-variant font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary/40 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">terminal</span>
          <span>VIEW SKILLS</span>
        </Link>
      </div>
    </div>
  );
}

export default QuestActions;
