import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { EXPERIMENTS_DATA } from '../data/experiments';
import LabHero from '../components/lab/LabHero';
import LabTelemetry from '../components/lab/LabTelemetry';
import LabFilters from '../components/lab/LabFilters';
import ExperimentArchive from '../components/lab/ExperimentArchive';
import ExperimentDetailPanel from '../components/lab/ExperimentDetailPanel';
import QuestButton from '../components/ui/QuestButton';

/**
 * ForbiddenLab — SMIT QUEST Phase 7: Forbidden Lab / Experimental Core
 * Restricted research chamber chronicling WebGL shaders, spatial computing prototypes,
 * UI/UX kinetics, and technical exploratory architectures.
 */
export function ForbiddenLab() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Local filtering states
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected experiment for detail inspector
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute status counts dynamically from EXPERIMENTS_DATA
  const statusCounts = useMemo(() => {
    const counts = { ACTIVE: 0, COMPLETE: 0, IN_PROGRESS: 0 };
    EXPERIMENTS_DATA.forEach((exp) => {
      if (counts[exp.status] !== undefined) {
        counts[exp.status] += 1;
      }
    });
    return counts;
  }, []);

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts = {};
    EXPERIMENTS_DATA.forEach((exp) => {
      counts[exp.category] = (counts[exp.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Compute total XP and unique tech count
  const { totalXP, uniqueTechCount, featuredExperiment } = useMemo(() => {
    let xp = 0;
    const techSet = new Set();
    let featured = null;

    EXPERIMENTS_DATA.forEach((exp) => {
      xp += exp.xpReward || 0;
      if (exp.isFeatured && !featured) {
        featured = exp;
      }
      if (Array.isArray(exp.technologies)) {
        exp.technologies.forEach((t) => techSet.add(t));
      }
    });

    if (!featured && EXPERIMENTS_DATA.length > 0) {
      featured = EXPERIMENTS_DATA[0];
    }

    return {
      totalXP: xp,
      uniqueTechCount: techSet.size,
      featuredExperiment: featured,
    };
  }, []);

  // Filtered experiments dataset
  const filteredExperiments = useMemo(() => {
    let list = [...EXPERIMENTS_DATA];

    // 1. Status filter
    if (selectedStatus !== 'ALL') {
      list = list.filter((item) => item.status === selectedStatus);
    }

    // 2. Category filter
    if (selectedCategory !== 'ALL') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    // 3. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        return (
          item.title?.toLowerCase().includes(q) ||
          item.subtitle?.toLowerCase().includes(q) ||
          item.code?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.technologies?.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [selectedStatus, selectedCategory, searchQuery]);

  const handleInspectExperiment = (exp) => {
    setSelectedExperiment(exp);
    setIsDetailOpen(true);
  };

  const handleResetFilters = () => {
    setSelectedStatus('ALL');
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
          1. MONOLITHIC LAB HERO
          ========================================================================= */}
      <LabHero
        totalCount={EXPERIMENTS_DATA.length}
        activeCount={statusCounts.ACTIVE || 0}
        reducedMotion={prefersReducedMotion}
      />

      {/* =========================================================================
          2. DYNAMIC TELEMETRY HUD & FEATURED PROTOTYPE SHOWCASE
          ========================================================================= */}
      <LabTelemetry
        totalCount={EXPERIMENTS_DATA.length}
        activeCount={statusCounts.ACTIVE || 0}
        completeCount={statusCounts.COMPLETE || 0}
        totalXP={totalXP}
        uniqueTechCount={uniqueTechCount}
        featuredExperiment={featuredExperiment}
        onInspectFeatured={handleInspectExperiment}
      />

      {/* =========================================================================
          3. TACTICAL STATUS & DOMAIN FILTERS WITH SEARCH
          ========================================================================= */}
      <LabFilters
        selectedStatus={selectedStatus}
        onSelectStatus={setSelectedStatus}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusCounts={statusCounts}
        categoryCounts={categoryCounts}
        totalCount={EXPERIMENTS_DATA.length}
      />

      {/* =========================================================================
          4. EXPERIMENT ARCHIVE MATRIX
          ========================================================================= */}
      <section aria-label="Classified Research Prototypes" className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            01 // CLASSIFIED PROTOTYPE ARCHIVES
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            DISPLAYING {filteredExperiments.length} OF {EXPERIMENTS_DATA.length} EXPERIMENTS
          </span>
        </div>

        <ExperimentArchive
          experiments={filteredExperiments}
          selectedExperiment={selectedExperiment}
          onInspect={handleInspectExperiment}
          onResetFilters={handleResetFilters}
          reducedMotion={prefersReducedMotion}
        />
      </section>

      {/* =========================================================================
          5. EXPEDITION VECTOR FOOTER TRAVERSAL CONTROLS
          ========================================================================= */}
      <section
        aria-label="Expedition Navigation Controls"
        className="w-full my-4 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
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

      {/* =========================================================================
          6. HOLOGRAPHIC EXPERIMENT DETAIL INSPECTOR PANEL
          ========================================================================= */}
      <ExperimentDetailPanel
        experiment={selectedExperiment}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        reducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}

export default ForbiddenLab;
