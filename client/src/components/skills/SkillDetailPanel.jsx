import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projects';
import QuestButton from '../ui/QuestButton';

/**
 * SkillDetailPanel — Holographic Selected Node Inspector
 * Implements the Stitch skill_matrix_node_detail reference:
 * - Left: Skill Identity, Level, XP Value, & Mastery Narrative
 * - Right: Related Projects & Co-Requisite Technologies Relic Cards
 */
export function SkillDetailPanel({ skill, onClose }) {
  const navigate = useNavigate();

  // Escape key listener to close panel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  // Lookup related projects from projects.js data
  const matchedProjects = (skill.relatedProjects || [])
    .map((slug) => PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug))
    .filter(Boolean);

  return (
    <AnimatePresence>
      <motion.div
        key={skill.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35 }}
        role="region"
        aria-label={`Skill Details: ${skill.name}`}
        className="w-full aethel-glass aethel-rim-border corner-brackets p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Skill Inspector"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-outline-variant hover:text-primary active:text-primary bg-surface-container-lowest/80 border border-outline-variant/30 rounded-full transition-colors z-20"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =========================================================================
              LEFT COLUMN: SKILL IDENTITY, LEVEL & MASTERY DESCRIPTION
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* System Status Telemetry */}
            <div className="mb-4 border-b border-primary/20 pb-2 inline-block w-max">
              <p className="font-meta-technical text-[10px] text-primary/80 uppercase tracking-widest font-semibold">
                SYS.DATA.SKILL // NODE_ID: 0x{skill.id.toUpperCase()} // STATUS: ONLINE
              </p>
            </div>

            {/* Skill Name */}
            <h2 className="font-display-hero text-[36px] sm:text-[48px] md:text-[54px] text-primary leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(242,202,80,0.4)] uppercase">
              {skill.name}
            </h2>

            {/* Level & XP Contribution Strip */}
            <div className="flex flex-wrap items-center gap-4 my-4">
              <span className="w-8 h-px bg-primary/60" />
              <span className="font-meta-technical text-[11px] text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-2.5 py-1 rounded-DEFAULT border border-secondary/30">
                {skill.levelLabel || `LEVEL ${skill.level} // ADVANCED`}
              </span>
              <span className="font-meta-technical text-[11px] text-primary font-semibold uppercase tracking-wider">
                XP +{skill.xpValue}
              </span>
              <span className="font-meta-technical text-[10px] text-on-surface-variant/70 uppercase border border-outline-variant/30 px-2 py-0.5 rounded-DEFAULT">
                SECTOR: {skill.category}
              </span>
            </div>

            {/* Narrative Architectural Description */}
            <p className="font-sans text-body-md text-on-surface-variant max-w-xl leading-relaxed border-l-2 border-primary/40 pl-4 sm:pl-6 my-2">
              {skill.description}
            </p>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: RELIC CARDS (PROJECTS & RELATED TECH)
              ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* 1. Projects Using This Skill */}
            <div className="bg-surface-container-lowest/80 border border-outline-variant/40 p-5 rounded-DEFAULT relative group hover:border-primary/50 transition-all">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(242,202,80,0.8)] transition-all" />

              <h3 className="font-meta-technical text-[11px] text-on-surface mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  architecture
                </span>
                <span>PROJECTS USING THIS SKILL</span>
              </h3>

              {matchedProjects.length > 0 ? (
                <div className="flex flex-col gap-2.5">
                  {matchedProjects.map((proj) => (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => navigate(`/quests/${proj.slug || proj.id}`)}
                      className="w-full text-left px-3.5 py-2.5 border border-primary/30 bg-surface-container/40 hover:bg-primary/10 hover:border-primary transition-all duration-200 flex justify-between items-center group/btn rounded-DEFAULT"
                    >
                      <div className="flex flex-col">
                        <span className="font-meta-technical text-[11px] text-on-surface group-hover/btn:text-primary transition-colors uppercase font-semibold">
                          {proj.title}
                        </span>
                        <span className="font-meta-technical text-[9px] text-on-surface-variant/70 uppercase">
                          {proj.subtitle}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-primary/70 text-[16px] group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="font-meta-technical text-[10px] text-on-surface-variant/60 uppercase">
                  FOUNDATIONAL CAPABILITY // ACTIVE ACROSS MULTIPLE INTERNAL REPOSITORIES
                </p>
              )}
            </div>

            {/* 2. Co-Requisite & Related Technologies */}
            {skill.dependencies && skill.dependencies.length > 0 && (
              <div className="bg-surface-container-lowest/80 border border-outline-variant/40 p-5 rounded-DEFAULT relative group hover:border-secondary/50 transition-all">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(226,197,89,0.8)] transition-all" />

                <h3 className="font-meta-technical text-[11px] text-on-surface mb-3 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    account_tree
                  </span>
                  <span>FOUNDATIONAL DEPENDENCIES</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.dependencies.map((dep) => (
                    <span
                      key={dep}
                      className="px-2.5 py-1 border border-outline-variant text-on-surface-variant font-meta-technical text-[10px] uppercase rounded-DEFAULT bg-surface-container-high/40 hover:border-secondary hover:text-secondary transition-colors"
                    >
                      {dep}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SkillDetailPanel;
