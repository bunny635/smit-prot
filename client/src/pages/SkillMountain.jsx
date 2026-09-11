import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { SKILLS_DATA } from '../data/skills';
import SkillMountainScene from '../components/skills/SkillMountainScene';
import SkillCategoryNav from '../components/skills/SkillCategoryNav';
import SkillDetailPanel from '../components/skills/SkillDetailPanel';
import SkillLegend from '../components/skills/SkillLegend';
import QuestButton from '../components/ui/QuestButton';

/**
 * SkillMountain — SMIT QUEST Phase 5: Knowledge Peak Matrix
 * Interactive technological knowledge network where visitor explores
 * full-stack proficiencies, runtime architectures, and system capabilities.
 */
export function SkillMountain() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Selected state
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSkill, setSelectedSkill] = useState(() => {
    return SKILLS_DATA.find((s) => s.id === 'react') || SKILLS_DATA[0];
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute category counts dynamically from source data
  const categoryCounts = useMemo(() => {
    const counts = {};
    SKILLS_DATA.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Compute total registered XP across all skills
  const totalSkillXP = useMemo(() => {
    return SKILLS_DATA.reduce((acc, s) => acc + (s.xpValue || 0), 0);
  }, []);

  // Filter skills by category if needed
  const visibleSkills = useMemo(() => {
    return SKILLS_DATA;
  }, []);

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
      className="relative w-full max-w-7xl mx-auto py-6 sm:py-10 flex flex-col gap-8 select-none overflow-x-hidden"
    >
      {/* =========================================================================
          1. KNOWLEDGE PEAK TELEMETRY & HEADER
          ========================================================================= */}
      <section aria-label="Sector Telemetry" className="w-full flex flex-col gap-4">
        {/* Top Telemetry Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/30 pb-3">
          <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
            <span>SECTOR: SEC-03 // NODE-09</span>
            <span className="text-outline-variant/60">//</span>
            <span className="text-on-surface-variant">SKILL MOUNTAIN</span>
          </div>

          <div className="flex items-center gap-4 font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
            <span>SYS.STAT: OPTIMAL</span>
            <span className="text-outline-variant/60">//</span>
            <span>ELEVATION: 12,400M</span>
          </div>
        </div>

        {/* Major Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/stitch/avatars/skill-mountain-avatar.webp" 
              alt="Architect Profile" 
              className="w-16 h-16 rounded border border-primary/20 object-cover shrink-0" 
            />
            <div>
              <span className="font-meta-technical text-[11px] text-primary/80 tracking-[0.25em] uppercase font-bold">
                KNOWLEDGE PEAK MATRIX
              </span>
              <h1 className="font-display-hero text-[38px] sm:text-[52px] md:text-[64px] text-on-surface leading-tight tracking-tight uppercase drop-shadow-2xl">
                SKILL MOUNTAIN
              </h1>
            </div>
          </div>

          {/* Technical Summary Stats */}
          <div className="flex flex-wrap items-center gap-3 font-meta-technical text-[11px]">
            <div className="px-3 py-1.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
              <span className="text-primary font-bold">{SKILLS_DATA.length}</span> NODES
            </div>
            <div className="px-3 py-1.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
              <span className="text-primary font-bold">5</span> DOMAINS
            </div>
            <div className="px-3 py-1.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-primary font-semibold">
              +{totalSkillXP} TOTAL XP
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DOMAIN CATEGORY NAVIGATION
          ========================================================================= */}
      <SkillCategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
        totalCount={SKILLS_DATA.length}
      />

      {/* =========================================================================
          3. MASTER SVG KNOWLEDGE PEAK MATRIX SCENE
          ========================================================================= */}
      <section aria-label="Interactive Knowledge Graph" className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            01 // TOPOLOGICAL KNOWLEDGE GRAPH
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            CLICK OR USE TAB/ENTER TO INSPECT NODE
          </span>
        </div>

        <SkillMountainScene
          skills={visibleSkills}
          selectedSkill={selectedSkill}
          onSelectSkill={handleSelectSkill}
          activeCategory={selectedCategory}
        />

        {/* Legend */}
        <div className="flex justify-end pt-1">
          <SkillLegend />
        </div>
      </section>

      {/* =========================================================================
          4. HOLOGRAPHIC SELECTED NODE INSPECTOR PANEL
          ========================================================================= */}
      <section aria-label="Selected Skill Inspector" className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            02 // TELEMETRIC NODE INSPECTOR
          </span>
          {selectedSkill && (
            <span className="font-meta-technical text-[10px] text-primary uppercase tracking-wider">
              TARGET: {selectedSkill.name.toUpperCase()}
            </span>
          )}
        </div>

        <SkillDetailPanel
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      </section>

      {/* =========================================================================
          5. EXPEDITION VECTOR FOOTER CONTROLS
          ========================================================================= */}
      <section
        aria-label="Expedition Navigation Controls"
        className="w-full my-6 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-meta-technical text-[10px] text-primary tracking-[0.25em] uppercase">
            EXPEDITION VECTOR // SECTOR TRAVERSAL
          </span>
          <div className="font-headline-lg-mobile text-[18px] md:text-[20px] text-on-surface font-bold">
            Continue the Digital Odyssey
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <QuestButton
            variant="ghost"
            size="md"
            icon="hub"
            iconPosition="left"
            onClick={() => navigate('/hub')}
          >
            RETURN TO HUB
          </QuestButton>

          <QuestButton
            variant="solid"
            size="md"
            icon="military_tech"
            iconPosition="right"
            onClick={() => navigate('/quests')}
          >
            PROJECT ARENA
          </QuestButton>
        </div>
      </section>
    </motion.div>
  );
}

export default SkillMountain;
