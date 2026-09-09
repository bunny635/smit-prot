import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { MEMORY_TIMELINE_DATA } from '../data/memoryTimeline';
import MemoryHero from '../components/memory/MemoryHero';
import MemoryFilters from '../components/memory/MemoryFilters';
import MemoryTimeline from '../components/memory/MemoryTimeline';
import MemoryDetailPanel from '../components/memory/MemoryDetailPanel';
import QuestButton from '../components/ui/QuestButton';

/**
 * MemoryValley — SMIT QUEST Phase 8: Memory Valley / Journey Timeline
 * Cinematic landscape timeline charting the developer's digital evolution,
 * architectural systems genesis, and forward horizon trajectory.
 */
export function MemoryValley() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Local filtering & modal states
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute category counts dynamically from MEMORY_TIMELINE_DATA
  const categoryCounts = useMemo(() => {
    const counts = {
      MILESTONES: 0,
      PROJECTS: 0,
      EXPERIMENTS: 0,
      TOOLING: 0,
    };

    MEMORY_TIMELINE_DATA.forEach((item) => {
      const cat = item.type || item.category;
      if (cat === 'MILESTONE' || item.category === 'HORIZON') {
        counts.MILESTONES += 1;
      } else if (cat === 'PROJECT') {
        counts.PROJECTS += 1;
      } else if (cat === 'EXPERIMENT') {
        counts.EXPERIMENTS += 1;
      } else if (cat === 'TOOLING') {
        counts.TOOLING += 1;
      }
    });

    return counts;
  }, []);

  // Filtered milestone list
  const filteredMilestones = useMemo(() => {
    let list = [...MEMORY_TIMELINE_DATA];

    // 1. Category filter
    if (selectedCategory !== 'ALL') {
      list = list.filter((item) => {
        if (selectedCategory === 'MILESTONES') {
          return item.type === 'MILESTONE' || item.category === 'HORIZON';
        }
        if (selectedCategory === 'PROJECTS') {
          return item.type === 'PROJECT';
        }
        if (selectedCategory === 'EXPERIMENTS') {
          return item.type === 'EXPERIMENT';
        }
        if (selectedCategory === 'TOOLING') {
          return item.type === 'TOOLING';
        }
        return item.category === selectedCategory || item.type === selectedCategory;
      });
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        return (
          item.title?.toLowerCase().includes(q) ||
          item.date?.toLowerCase().includes(q) ||
          item.year?.toLowerCase().includes(q) ||
          item.summary?.toLowerCase().includes(q) ||
          item.significance?.toLowerCase().includes(q) ||
          item.coordinates?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q) ||
          item.technologies?.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [selectedCategory, searchQuery]);

  // Modal open / close handlers
  const handleSelectMilestone = (milestone) => {
    setSelectedMilestone(milestone);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSearchQuery('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
      className="relative w-full max-w-7xl mx-auto py-6 sm:py-10 flex flex-col gap-8 md:gap-10 select-none overflow-x-hidden"
    >
      {/* =========================================================================
          1. MONOLITHIC MEMORY HERO
          ========================================================================= */}
      <MemoryHero
        totalMilestones={MEMORY_TIMELINE_DATA.length}
        currentYear="2024.04"
        reducedMotion={prefersReducedMotion}
      />

      {/* =========================================================================
          2. TACTICAL FILTER & SEARCH CONTROLS
          ========================================================================= */}
      <MemoryFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryCounts={categoryCounts}
        totalCount={MEMORY_TIMELINE_DATA.length}
      />

      {/* =========================================================================
          3. CENTRAL CHRONOLOGICAL TIMELINE MATRIX
          ========================================================================= */}
      <section aria-label="Chronological Memory Valley Timeline" className="w-full flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
              01 // CHRONOLOGICAL MEMORY VECTOR
            </span>
          </div>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            DISPLAYING {filteredMilestones.length} OF {MEMORY_TIMELINE_DATA.length} RECORDS
          </span>
        </div>

        <MemoryTimeline
          milestones={filteredMilestones}
          onSelectMilestone={handleSelectMilestone}
          onResetFilters={handleResetFilters}
          reducedMotion={prefersReducedMotion}
        />
      </section>

      {/* =========================================================================
          4. EXPEDITION VECTOR FOOTER TRAVERSAL CONTROLS
          ========================================================================= */}
      <section
        aria-label="Memory Sector Traversal Controls"
        className="w-full my-4 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-meta-technical text-[10px] text-primary tracking-[0.25em] uppercase">
            SECTOR TRAVERSAL // MEMORY VALLEY
          </span>
          <div className="font-headline-lg-mobile text-[18px] md:text-[20px] text-on-surface font-bold">
            Navigate the Aethelgard Matrix
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
            variant="ghost"
            size="md"
            icon="biotech"
            iconPosition="left"
            onClick={() => navigate('/lab')}
          >
            FORBIDDEN LAB
          </QuestButton>

          <QuestButton
            variant="solid"
            size="md"
            icon="architecture"
            iconPosition="right"
            onClick={() => navigate('/quests')}
          >
            QUEST ARENA
          </QuestButton>
        </div>
      </section>

      {/* =========================================================================
          5. HOLOGRAPHIC MILESTONE DETAIL INSPECTOR MODAL
          ========================================================================= */}
      <MemoryDetailPanel
        milestone={selectedMilestone}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        reducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}

export default MemoryValley;
