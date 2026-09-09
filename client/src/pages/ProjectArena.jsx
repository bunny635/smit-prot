import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { PROJECTS_DATA } from '../data/projects';
import ActiveQuestShowcase from '../components/quests/ActiveQuestShowcase';
import QuestFilterBar from '../components/quests/QuestFilterBar';
import QuestCard from '../components/quests/QuestCard';
import MobileQuestDrawer from '../components/quests/MobileQuestDrawer';
import QuestButton from '../components/ui/QuestButton';

/**
 * ProjectArena — SMIT QUEST Phase 4: Project Arena & Quest Selection
 * Monumental mission-selection archive where developer projects are inspected
 * as high-stakes tactical quests with real-time telemetry, difficulty ratings,
 * and system architectures.
 */
export function ProjectArena() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // State management
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSort, setSelectedSort] = useState('XP');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuest, setActiveQuest] = useState(() => {
    return PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
  });
  const [drawerQuest, setDrawerQuest] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute category counts dynamically from source data
  const categoryCounts = useMemo(() => {
    const counts = {};
    PROJECTS_DATA.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & sort project items
  const filteredProjects = useMemo(() => {
    let list = [...PROJECTS_DATA];

    // 1. Category filter
    if (selectedCategory !== 'ALL') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        return (
          p.title?.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.techStack?.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    // 3. Sorting
    list.sort((a, b) => {
      if (selectedSort === 'XP') {
        return (b.xpReward || 0) - (a.xpReward || 0);
      }
      if (selectedSort === 'DIFFICULTY') {
        return (b.difficulty || 0) - (a.difficulty || 0);
      }
      if (selectedSort === 'DATE') {
        return (b.date || '').localeCompare(a.date || '');
      }
      return 0;
    });

    return list;
  }, [selectedCategory, searchQuery, selectedSort]);

  const handleInspectQuest = (project) => {
    setActiveQuest(project);
    // On mobile screens, also open the bottom sheet briefing
    if (window.innerWidth < 768) {
      setDrawerQuest(project);
      setIsDrawerOpen(true);
    }
  };

  const handleMobileViewMission = (project, e) => {
    e.stopPropagation();
    setDrawerQuest(project);
    setIsDrawerOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
      className="relative w-full max-w-7xl mx-auto py-6 sm:py-10 flex flex-col gap-10 select-none overflow-x-hidden"
    >
      {/* =========================================================================
          1. ARENA TELEMETRY & ARCHIVE BREADCRUMB
          ========================================================================= */}
      <section aria-label="Sector Telemetry" className="w-full flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/30 pb-3">
          <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
            <span>SECTOR: SEC-02 // NODE-05</span>
            <span className="text-outline-variant/60">//</span>
            <span className="text-on-surface-variant">PROJECT ARENA</span>
          </div>

          <div className="font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
            ARCHIVES ONLINE // {PROJECTS_DATA.length} QUESTS REGISTERED
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MONOLITHIC ACTIVE QUEST SHOWCASE (Desktop Primary Hero)
          ========================================================================= */}
      <ActiveQuestShowcase
        quest={activeQuest}
        onInspect={(q) => navigate(`/quests/${q.slug || q.id}`)}
      />

      {/* =========================================================================
          3. TECHNICAL FILTER, SEARCH & SORT HUD BAR
          ========================================================================= */}
      <QuestFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedSort={selectedSort}
        onSelectSort={setSelectedSort}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryCounts={categoryCounts}
        totalCount={PROJECTS_DATA.length}
      />

      {/* =========================================================================
          4. MOBILE PROJECT PRESENTATION (Snap Carousel on Small Viewports)
          ========================================================================= */}
      <div className="block md:hidden w-full flex flex-col gap-4">
        <div className="flex items-end justify-between border-b border-outline-variant/30 pb-2">
          <h2 className="font-headline-lg-mobile text-[20px] text-on-surface font-semibold">
            Quest Artifacts
          </h2>
          <span className="font-meta-technical text-[11px] text-primary">
            {String(filteredProjects.length).padStart(2, '0')} ARTIFACTS
          </span>
        </div>

        {/* Horizontal Snap Carousel */}
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 -mx-4 px-4 no-scrollbar">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleInspectQuest(project)}
              className="snap-center shrink-0 w-[85vw] max-w-[320px] aethel-glass aethel-rim-border corner-brackets rounded-lg p-5 flex flex-col justify-between gap-4 relative"
            >
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                <span className="font-meta-technical text-[10px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-DEFAULT">
                  {project.questNumber}
                </span>
                <span className="font-meta-technical text-[10px] text-primary font-semibold">
                  +{project.xpReward} XP
                </span>
              </div>

              <div>
                <h3 className="font-headline-lg-mobile text-[20px] text-on-surface font-semibold">
                  {project.title}
                </h3>
                <p className="font-meta-technical text-[10px] text-on-surface-variant uppercase tracking-wider mt-1 line-clamp-1">
                  {project.subtitle}
                </p>
                <p className="font-sans text-[12px] text-on-surface-variant/90 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-outline-variant/20 flex flex-col gap-3">
                <div className="flex justify-between font-meta-technical text-[10px] text-on-surface-variant">
                  <span>DIFFICULTY</span>
                  <span className="text-primary font-bold">{project.difficulty} / 5</span>
                </div>

                <QuestButton
                  variant="ghost"
                  size="sm"
                  icon="arrow_forward"
                  iconPosition="right"
                  onClick={(e) => handleMobileViewMission(project, e)}
                  className="w-full"
                >
                  VIEW MISSION
                </QuestButton>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =========================================================================
          5. DESKTOP & TABLET QUEST GRID
          ========================================================================= */}
      <section
        aria-label="Quest Artifacts Matrix"
        className="hidden md:flex flex-col gap-6 w-full"
      >
        <div className="flex items-center justify-between">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            02 // DISCOVERED QUEST ARTIFACTS
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            DISPLAYING {filteredProjects.length} OF {PROJECTS_DATA.length} MISSIONS
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <QuestCard
                  key={project.id}
                  project={project}
                  isActive={activeQuest?.id === project.id}
                  onInspect={handleInspectQuest}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="w-full py-16 flex flex-col items-center justify-center gap-3 aethel-glass aethel-rim-border corner-brackets text-center">
            <span className="material-symbols-outlined text-outline-variant text-[48px]">
              search_off
            </span>
            <div className="font-headline-lg-mobile text-[18px] text-on-surface">
              No matching quest archives found
            </div>
            <p className="font-meta-technical text-[11px] text-on-surface-variant max-w-sm">
              Adjust your category filter or search query to locate active protocols.
            </p>
            <QuestButton
              variant="subtle"
              size="sm"
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-2"
            >
              RESET FILTERS
            </QuestButton>
          </div>
        )}
      </section>

      {/* =========================================================================
          6. EXPEDITION VECTOR FOOTER CONTROLS
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
            icon="arrow_forward"
            iconPosition="right"
            onClick={() => navigate('/skills')}
          >
            SKILL MOUNTAIN
          </QuestButton>
        </div>
      </section>

      {/* =========================================================================
          7. MOBILE QUEST DETAIL DRAWER (Bottom Sheet Overlay)
          ========================================================================= */}
      <MobileQuestDrawer
        quest={drawerQuest}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </motion.div>
  );
}

export default ProjectArena;
