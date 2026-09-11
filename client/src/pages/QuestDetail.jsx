import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import QuestDetailHero from '../components/quest-detail/QuestDetailHero';
import QuestVisualGallery from '../components/quest-detail/QuestVisualGallery';
import MissionBriefing from '../components/quest-detail/MissionBriefing';
import ArchitectureTopology from '../components/quest-detail/ArchitectureTopology';
import TechnologyMatrix from '../components/quest-detail/TechnologyMatrix';
import QuestEvidence from '../components/quest-detail/QuestEvidence';
import QuestActions from '../components/quest-detail/QuestActions';
import QuestComplete from '../components/quest-detail/QuestComplete';
import QuestNotFound from '../components/quest-detail/QuestNotFound';

/**
 * QuestDetail — Deep Technical Inspection & Quest Complete Layer
 * Replaces the /quests/:id placeholder with an immersive Aethelgard mission archive.
 * Resolves against PROJECTS_DATA by slug or id.
 */
export function QuestDetail() {
  const { id } = useParams();

  // Scroll to top upon navigation or ID change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Resolve project strictly against authoritative PROJECTS_DATA
  const { project, prevQuest, nextQuest } = useMemo(() => {
    if (!id) return { project: null, prevQuest: null, nextQuest: null };
    const cleanId = id.toLowerCase().trim();
    const index = PROJECTS_DATA.findIndex(
      (p) => (p.slug && p.slug.toLowerCase() === cleanId) || (p.id && p.id.toLowerCase() === cleanId)
    );

    if (index === -1) {
      return { project: null, prevQuest: null, nextQuest: null };
    }

    const current = PROJECTS_DATA[index];
    const prev = index > 0 ? PROJECTS_DATA[index - 1] : null;
    const next = index < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[index + 1] : null;

    return { project: current, prevQuest: prev, nextQuest: next };
  }, [id]);

  // Update document title dynamically
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Quest Detail | SMIT QUEST`;
    } else {
      document.title = `Quest Not Found | SMIT QUEST`;
    }
  }, [project]);

  // If project cannot be found, render dedicated error state (no crash, no random fallback)
  if (!project) {
    return <QuestNotFound requestedId={id} />;
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16 pb-16">
      {/* 1. Hero Showcase: Identity, Metadata, Relic Graphic */}
      <QuestDetailHero project={project} />

      {/* Holographic UI Gallery (QuickGo reference) */}
      <QuestVisualGallery project={project} />

      {/* 2. Mission Briefing: Problem Statement & Solution Matrix */}
      <MissionBriefing project={project} />

      {/* 3. Architecture Topology: Lightweight SVG/CSS multi-tier pipeline */}
      <ArchitectureTopology project={project} />

      {/* 4. Technology & Skill Matrix: Tech chips & validated SKILLS_DATA links */}
      <TechnologyMatrix project={project} />

      {/* 5. Quest Evidence: Repositories, live runtime status, coordinates */}
      <QuestEvidence project={project} />

      {/* 6. Tactile Quest Actions */}
      <QuestActions project={project} />

      {/* 7. Concluding State: Quest Complete or Operational Active Quest */}
      <QuestComplete project={project} />

      {/* 8. Chronological Navigation Footer (Previous / Next / Return) */}
      <nav
        aria-label="Chronological Quest Navigation"
        className="pt-8 border-t border-outline-variant/30 flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Previous Quest */}
          {prevQuest ? (
            <Link
              to={`/quests/${prevQuest.slug || prevQuest.id}`}
              className="p-4 border border-outline-variant/30 bg-[#14140f]/60 hover:border-primary/50 hover:bg-[#1c1c16] transition-all flex flex-col items-start group"
            >
              <div className="font-mono text-[10px] text-primary/70 uppercase tracking-widest flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-xs group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
                <span>PREVIOUS QUEST</span>
              </div>
              <div className="font-serif text-lg text-on-surface group-hover:text-primary transition-colors font-medium truncate w-full">
                {prevQuest.title}
              </div>
              <div className="font-mono text-[11px] text-on-surface-variant/60 uppercase">
                {prevQuest.questNumber || prevQuest.id}
              </div>
            </Link>
          ) : (
            <div className="p-4 border border-outline-variant/15 bg-surface-container-lowest/30 flex flex-col items-start opacity-40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50">
                FIRST ARCHIVED QUEST
              </span>
              <span className="font-serif text-base text-on-surface-variant/40">
                Beginning of Chronicles
              </span>
            </div>
          )}

          {/* Next Quest */}
          {nextQuest ? (
            <Link
              to={`/quests/${nextQuest.slug || nextQuest.id}`}
              className="p-4 border border-outline-variant/30 bg-[#14140f]/60 hover:border-primary/50 hover:bg-[#1c1c16] transition-all flex flex-col items-end text-right group"
            >
              <div className="font-mono text-[10px] text-primary/70 uppercase tracking-widest flex items-center gap-1 mb-1">
                <span>NEXT QUEST</span>
                <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
              <div className="font-serif text-lg text-on-surface group-hover:text-primary transition-colors font-medium truncate w-full">
                {nextQuest.title}
              </div>
              <div className="font-mono text-[11px] text-on-surface-variant/60 uppercase">
                {nextQuest.questNumber || nextQuest.id}
              </div>
            </Link>
          ) : (
            <div className="p-4 border border-outline-variant/15 bg-surface-container-lowest/30 flex flex-col items-end text-right opacity-40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/50">
                FINAL ARCHIVED QUEST
              </span>
              <span className="font-serif text-base text-on-surface-variant/40">
                Culmination of Current Arc
              </span>
            </div>
          )}
        </div>

        {/* Global Hub Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-center font-mono text-xs text-on-surface-variant">
          <Link
            to="/quests"
            className="hover:text-primary uppercase tracking-widest flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">view_agenda</span>
            <span>RETURN TO QUEST ARENA</span>
          </Link>
          <span className="text-outline-variant/40">•</span>
          <Link
            to="/hub"
            className="hover:text-primary uppercase tracking-widest flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">explore</span>
            <span>RETURN TO WORLD HUB</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default QuestDetail;
