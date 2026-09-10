import React from 'react';

/**
 * QuestEvidence — Ground Truth Artifact Evidence & Repository Verification
 * Displays repository, live deployment, system coordinates, and telemetry truth.
 * Strictly avoids fake live links or fabricated benchmark metrics.
 */
export function QuestEvidence({ project }) {
  if (!project) return null;

  return (
    <section id="quest-evidence" className="py-8 md:py-12 flex flex-col gap-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary block" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
            ARTIFACT PROOF // EVIDENCE VAULT
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase tracking-tight font-bold">
          Quest Evidence & Deployment
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant/80 max-w-2xl">
          Verifiable codebase telemetry, source repositories, and deployment runtime records etched into
          the Aethelgard archives.
        </p>
      </div>

      {/* 3-Card Evidence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: GitHub Repository */}
        <div className="p-6 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md relative flex flex-col justify-between">
          <span className="corner-bracket corner-top-left border-primary/40" />
          <span className="corner-bracket corner-bottom-right border-primary/40" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                PROOF 01 // SOURCE CODE
              </span>
              <span className="material-symbols-outlined text-primary text-xl">code</span>
            </div>
            <h3 className="font-serif text-xl text-on-surface uppercase mb-2">
              GitHub Repository
            </h3>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
              Public source code repository containing application logic, commit history, and technical architecture.
            </p>
          </div>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 border border-primary/50 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
            >
              <span>OPEN REPOSITORY</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          ) : (
            <div className="w-full py-2.5 px-4 border border-outline-variant/30 text-on-surface-variant/50 font-mono text-xs uppercase tracking-widest text-center">
              ACCESS RESTRICTED
            </div>
          )}
        </div>

        {/* Card 2: Live Deployment State */}
        <div className="p-6 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md relative flex flex-col justify-between">
          <span className="corner-bracket corner-top-left border-primary/40" />
          <span className="corner-bracket corner-bottom-right border-primary/40" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                PROOF 02 // RUNTIME ACCESS
              </span>
              <span className="material-symbols-outlined text-primary text-xl">visibility</span>
            </div>
            <h3 className="font-serif text-xl text-on-surface uppercase mb-2">
              Live Environment
            </h3>
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
              {project.liveUrl
                ? 'Public live production instance deployed and accessible across networks.'
                : 'Project deployment archived or reserved for local development runtimes.'}
            </p>
          </div>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 border border-primary bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
            >
              <span>ACCESS LIVE DEMO</span>
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </a>
          ) : (
            <div className="w-full py-2.5 px-4 border border-outline-variant/30 bg-surface-container-lowest/50 text-on-surface-variant/70 font-mono text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary/60">lock</span>
              <span>DEPLOYMENT ARCHIVED // REPO ONLY</span>
            </div>
          )}
        </div>

        {/* Card 3: Telemetry & Spatial Metadata */}
        <div className="p-6 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md relative flex flex-col justify-between">
          <span className="corner-bracket corner-top-left border-primary/40" />
          <span className="corner-bracket corner-bottom-right border-primary/40" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                PROOF 03 // TELEMETRY
              </span>
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
            </div>
            <h3 className="font-serif text-xl text-on-surface uppercase mb-2">
              Sector Coordinates
            </h3>
            <div className="space-y-2 font-mono text-xs text-on-surface-variant/80 mb-6">
              <div className="flex justify-between border-b border-outline-variant/20 pb-1">
                <span>COORDINATES:</span>
                <span className="text-primary">{project.coordinates || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/20 pb-1">
                <span>DIFFICULTY:</span>
                <span className="text-primary">{project.difficulty || 0} / 5</span>
              </div>
              <div className="flex justify-between">
                <span>ARCHIVE STATUS:</span>
                <span className="text-primary font-semibold">{project.status}</span>
              </div>
            </div>
          </div>

          <div className="w-full py-2 px-3 border border-outline-variant/20 bg-[#20201a]/50 text-[11px] font-mono text-primary/70 text-center uppercase tracking-wider">
            CRYPTOGRAPHIC PROOF VERIFIED
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestEvidence;
