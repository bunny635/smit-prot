import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { EXPERIENCE_DATA } from '../data/experience';
import JournalHero from '../components/journal/JournalHero';
import MissionTelemetry from '../components/journal/MissionTelemetry';
import JournalFilters from '../components/journal/JournalFilters';
import MissionTimeline from '../components/journal/MissionTimeline';
import QuestButton from '../components/ui/QuestButton';

/**
 * QuestJournal — SMIT QUEST Phase 6: Quest Journal / Mission Expedition Log
 * Immersive operational archive chronicling developer engineering expeditions,
 * architectural systems implementations, and operational history.
 */
export function QuestJournal() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Local filtering states
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute status counts dynamically from EXPERIENCE_DATA
  const statusCounts = useMemo(() => {
    const counts = { ACTIVE: 0, COMPLETED: 0, ARCHIVED: 0 };
    EXPERIENCE_DATA.forEach((exp) => {
      if (counts[exp.status] !== undefined) {
        counts[exp.status] += 1;
      }
    });
    return counts;
  }, []);

  // Compute total XP and unique tech stack count
  const { totalXP, uniqueTechCount } = useMemo(() => {
    let xp = 0;
    const techSet = new Set();

    EXPERIENCE_DATA.forEach((exp) => {
      xp += exp.xpReward || 0;
      if (Array.isArray(exp.technologies)) {
        exp.technologies.forEach((t) => techSet.add(t));
      }
    });

    return { totalXP: xp, uniqueTechCount: techSet.size };
  }, []);

  // Filtered mission dataset
  const filteredMissions = useMemo(() => {
    let list = [...EXPERIENCE_DATA];

    // 1. Status filter
    if (selectedStatus !== 'ALL') {
      list = list.filter((item) => item.status === selectedStatus);
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        return (
          item.role?.toLowerCase().includes(q) ||
          item.organization?.toLowerCase().includes(q) ||
          item.summary?.toLowerCase().includes(q) ||
          item.code?.toLowerCase().includes(q) ||
          item.missionNumber?.toLowerCase().includes(q) ||
          item.technologies?.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [selectedStatus, searchQuery]);

  const handleResetFilters = () => {
    setSelectedStatus('ALL');
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
          1. MONOLITHIC JOURNAL HERO
          ========================================================================= */}
      <JournalHero
        totalCount={EXPERIENCE_DATA.length}
        activeCount={statusCounts.ACTIVE || 0}
        reducedMotion={prefersReducedMotion}
      />

      {/* =========================================================================
          2. DYNAMIC MISSION TELEMETRY HUD
          ========================================================================= */}
      <MissionTelemetry
        totalCount={EXPERIENCE_DATA.length}
        activeCount={statusCounts.ACTIVE || 0}
        completedCount={statusCounts.COMPLETED || 0}
        archivedCount={statusCounts.ARCHIVED || 0}
        totalXP={totalXP}
        uniqueTechCount={uniqueTechCount}
      />

      {/* =========================================================================
          3. TACTICAL STATUS FILTERS & SEARCH
          ========================================================================= */}
      <JournalFilters
        selectedStatus={selectedStatus}
        onSelectStatus={setSelectedStatus}
        statusCounts={statusCounts}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={EXPERIENCE_DATA.length}
      />

      {/* =========================================================================
          4. CENTRAL MISSION EXPEDITION TIMELINE
          ========================================================================= */}
      <section aria-label="Mission Expedition Log Timeline" className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            01 // CHRONOLOGICAL EXPEDITION LOGS
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            DISPLAYING {filteredMissions.length} OF {EXPERIENCE_DATA.length} ARCHIVES
          </span>
        </div>

        <MissionTimeline
          missions={filteredMissions}
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
            icon="account_tree"
            iconPosition="right"
            onClick={() => navigate('/skills')}
          >
            SKILL MOUNTAIN
          </QuestButton>
        </div>
      </section>
    </motion.div>
  );
}

export default QuestJournal;
