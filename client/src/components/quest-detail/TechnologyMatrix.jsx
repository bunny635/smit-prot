import React from 'react';
import { Link } from 'react-router-dom';
import { SKILLS_DATA } from '../../data/skills';

/**
 * TechnologyMatrix — Verified Technology Stack & Related Skill Nodes
 * Strictly uses project.techStack as the authoritative source.
 * Discovers related skills ONLY if skill.relatedProjects.includes(project.slug).
 */
export function TechnologyMatrix({ project }) {
  if (!project) return null;

  const techStack = project.techStack || [];

  // Filter skills strictly matching this project's slug
  const relatedSkills = SKILLS_DATA.filter((skill) =>
    skill.relatedProjects && skill.relatedProjects.includes(project.slug)
  );

  return (
    <section id="technology-matrix" className="py-8 md:py-12 flex flex-col gap-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-primary block" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
            TECH MATRIX // COMPONENT REGISTRY
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase tracking-tight font-bold">
          Technology & Skill Matrix
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant/80 max-w-2xl">
          Authoritative technical stack utilized in constructing this quest, linked directly to verified
          matrix competencies in Skill Mountain.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Left: Project Tech Stack */}
        <div className="lg:col-span-6 p-6 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md relative">
          <span className="corner-bracket corner-top-left border-primary/40" />
          <span className="corner-bracket corner-bottom-right border-primary/40" />

          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">developer_mode</span>
              DEPLOYED TECHNOLOGIES ({techStack.length})
            </h3>
            <span className="font-mono text-[10px] text-on-surface-variant/60">
              REGISTRY: VERIFIED
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-3.5 py-1.5 border border-primary/30 bg-[#20201a] text-on-surface font-mono text-xs sm:text-sm tracking-wide flex items-center gap-2 hover:border-primary/60 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/20 font-mono text-[11px] text-on-surface-variant/70 leading-relaxed">
            Technologies registered above are strictly bound to this project&apos;s architectural codebase.
          </div>
        </div>

        {/* Right: Related Skill Nodes (Validated against SKILLS_DATA) */}
        <div className="lg:col-span-6 p-6 border border-outline-variant/30 bg-[#181814]/70 backdrop-blur-md relative flex flex-col justify-between">
          <span className="corner-bracket corner-top-left border-primary/40" />
          <span className="corner-bracket corner-bottom-right border-primary/40" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">hub</span>
                RELATED SKILL NODES ({relatedSkills.length})
              </h3>
              <Link
                to="/skills"
                className="font-mono text-[10px] text-primary hover:underline uppercase tracking-wider flex items-center gap-1"
              >
                VIEW MATRIX &rarr;
              </Link>
            </div>

            {relatedSkills.length > 0 ? (
              <div className="space-y-3">
                {relatedSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3 border border-outline-variant/20 bg-surface-container-lowest/70 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-primary/30 bg-primary/5 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-base">
                          {skill.icon || 'terminal'}
                        </span>
                      </div>
                      <div>
                        <div className="font-mono text-xs sm:text-sm font-semibold text-on-surface">
                          {skill.name}
                        </div>
                        <div className="font-mono text-[10px] text-primary/70 uppercase tracking-wider">
                          {skill.levelLabel || `LEVEL ${skill.level}`} // {skill.category}
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/skills"
                      className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors px-2.5 py-1 border border-outline-variant/30 hover:border-primary/40"
                    >
                      INSPECT
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center font-mono text-xs text-on-surface-variant/60">
                NO EXPLICIT SKILL RELATIONS REGISTERED
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
            <span className="font-mono text-[11px] text-on-surface-variant/70">
              KNOWLEDGE PEAK MATRIX
            </span>
            <Link
              to="/skills"
              className="font-mono text-xs text-primary hover:underline uppercase tracking-wider flex items-center gap-1"
            >
              EXPLORE SKILL MATRIX &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyMatrix;
