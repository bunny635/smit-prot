import React from 'react';
import { Link } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';

/**
 * QuestComplete — Concluding Mission Ceremony or Operational Status
 * Directly inspired by Stitch `quest_complete_quickgo_reward`.
 * Truthfulness: Shows completion ceremony ONLY when project.status === 'COMPLETE'.
 * For active projects, displays active operational status without fake completion.
 * Displays player state from PlayerContext read-only; does NOT mutate XP or level.
 */
export function QuestComplete({ project }) {
  const { player } = usePlayer();

  if (!project) return null;

  const isComplete = project.status === 'COMPLETE';

  return (
    <section
      id="quest-complete"
      className="py-12 md:py-16 my-8 border border-outline-variant/30 bg-[#12120e]/90 backdrop-blur-2xl relative overflow-hidden text-center flex flex-col items-center justify-center p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
    >
      {/* Corner Brackets */}
      <span className="corner-bracket corner-top-left border-primary/50" />
      <span className="corner-bracket corner-top-right border-primary/50" />
      <span className="corner-bracket corner-bottom-left border-primary/50" />
      <span className="corner-bracket corner-bottom-right border-primary/50" />

      {/* Ambient Radial Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {isComplete ? (
        /* COMPLETED STATE CEREMONY */
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
          {/* Trophy Hologram Artifact Icon */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-25" />
            <div className="absolute inset-2 rounded-full border border-dashed border-primary/40 animate-[spin_30s_linear_infinite]" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-primary/60 bg-[#1e1e17] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <span
                className="material-symbols-outlined text-primary text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-2 font-mono text-xs uppercase tracking-widest text-primary/80">
            <span className="w-6 h-[1px] bg-primary/50" />
            <span>QUEST TERMINATED SUCCESSFULLY</span>
            <span className="w-6 h-[1px] bg-primary/50" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary font-bold tracking-tight drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] uppercase mb-2">
            QUEST COMPLETE
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-on-surface font-medium mb-6">
            {project.title}
          </p>

          {/* Rewards Card */}
          <div className="w-full max-w-lg p-6 sm:p-8 border border-primary/40 bg-[#1a1a14]/80 backdrop-blur-md rounded-none mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative">
            <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-2">
              REWARD ACQUIRED
            </div>

            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                military_tech
              </span>
              <span className="font-mono text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                +{project.xpReward || 0} XP
              </span>
            </div>

            {/* Read-Only Player Level Progress Bar from PlayerContext */}
            <div className="w-full h-1.5 bg-surface-variant/60 rounded-none overflow-hidden relative mb-2">
              <div
                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                style={{
                  width: `${Math.min(100, ((player?.currentXP || 2450) / (player?.maxXP || 3000)) * 100)}%`,
                }}
              />
            </div>

            <div className="flex justify-between items-center font-mono text-xs text-on-surface-variant">
              <span>LVL {String(player?.level || 5).padStart(2, '0')}</span>
              <span className="text-primary font-medium">
                {player?.currentXP || 2450} / {player?.maxXP || 3000} XP MATRIX
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary font-mono text-xs uppercase tracking-widest bg-primary/10 hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                VIEW GITHUB
              </a>
            ) : (
              <div
                className="px-6 py-3 border border-outline-variant/30 text-outline-variant/70 font-mono text-xs uppercase tracking-widest bg-surface-container-low/30 flex items-center justify-center gap-2 cursor-not-allowed select-none"
                title="Repository not configured in archives"
                aria-disabled="true"
              >
                <span className="material-symbols-outlined text-sm">code_off</span>
                <span>REPO NOT CONFIGURED</span>
              </div>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary/50 text-primary font-mono text-xs uppercase tracking-widest bg-surface-container-low hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
                VIEW LIVE
              </a>
            )}
            <Link
              to="/quests"
              className="px-6 py-3 border border-outline-variant/40 text-on-surface-variant font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              BACK TO ARENA
            </Link>
          </div>
        </div>
      ) : (
        /* ACTIVE / IN PROGRESS STATE */
        <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
          {/* Active Pulse Glyph */}
          <div className="w-16 h-16 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-3xl animate-pulse">
              hourglass_top
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-2 font-mono text-xs uppercase tracking-widest text-primary/80">
            <span className="w-6 h-[1px] bg-primary/40" />
            <span>EXPEDITION OPERATIONAL // ACTIVE QUEST</span>
            <span className="w-6 h-[1px] bg-primary/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase font-bold tracking-tight mb-2">
            Active Quest in Progress
          </h2>

          <p className="font-serif text-lg sm:text-xl text-primary mb-6">
            {project.title}
          </p>

          <div className="w-full p-6 border border-outline-variant/30 bg-[#181814]/70 mb-8 font-mono text-xs text-on-surface-variant space-y-2">
            <div className="flex justify-between border-b border-outline-variant/15 pb-2">
              <span>STATUS:</span>
              <span className="text-primary font-bold">ACTIVE_QUEST</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/15 pb-2">
              <span>DIFFICULTY RATING:</span>
              <span className="text-on-surface">{project.difficulty || 0} / 5</span>
            </div>
            <div className="flex justify-between">
              <span>POTENTIAL XP YIELD:</span>
              <span className="text-primary font-bold">+{project.xpReward || 0} XP UPON CONCLUSION</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary/50 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                INSPECT REPO
              </a>
            ) : (
              <div
                className="px-6 py-3 border border-outline-variant/30 text-outline-variant/70 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed select-none"
                title="Repository not configured in archives"
                aria-disabled="true"
              >
                <span className="material-symbols-outlined text-sm">code_off</span>
                <span>REPO NOT CONFIGURED</span>
              </div>
            )}
            <Link
              to="/quests"
              className="px-6 py-3 border border-outline-variant/40 text-on-surface-variant font-mono text-xs uppercase tracking-widest hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              RETURN TO QUEST ARENA
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default QuestComplete;
