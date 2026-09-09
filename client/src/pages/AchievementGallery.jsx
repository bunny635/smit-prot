import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import AchievementHero from '../components/achievements/AchievementHero';
import AchievementFilters from '../components/achievements/AchievementFilters';
import AchievementCard from '../components/achievements/AchievementCard';
import AchievementDetailPanel from '../components/achievements/AchievementDetailPanel';
import QuestButton from '../components/ui/QuestButton';

/**
 * AchievementGallery — SMIT QUEST Phase 10: Achievement Gallery / Hall of Legends
 * Ceremonial archive showcasing verified accomplishments, technical artifacts,
 * and interface progression milestones.
 */
export function AchievementGallery() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Local filtering & modal inspector states
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute dynamic category counts and telemetry metrics
  const { categoryCounts, unlockedCount, verifiedCount, totalXP } = useMemo(() => {
    const counts = {
      PROJECTS: 0,
      EXPERIMENTS: 0,
      MILESTONES: 0,
      INTERFACE: 0,
      CERTIFICATIONS: 0, // Explicitly 0 to honor truthfulness rule
    };

    let unlocked = 0;
    let verified = 0;
    let xp = 0;

    ACHIEVEMENTS_DATA.forEach((item) => {
      if (item.category && counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
      if (item.isUnlocked) unlocked += 1;
      if (item.verificationState === 'VERIFIED_ARTIFACT') verified += 1;
      xp += item.xpReward || 0;
    });

    return {
      categoryCounts: counts,
      unlockedCount: unlocked,
      verifiedCount: verified,
      totalXP: xp,
    };
  }, []);

  // Filtered achievement list
  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'CERTIFICATIONS') {
      return [];
    }

    let list = [...ACHIEVEMENTS_DATA];

    if (selectedCategory !== 'ALL') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        return (
          item.title?.toLowerCase().includes(q) ||
          item.subtitle?.toLowerCase().includes(q) ||
          item.code?.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.evidence?.toLowerCase().includes(q) ||
          item.rarity?.toLowerCase().includes(q)
        );
      });
    }

    return list;
  }, [selectedCategory, searchQuery]);

  // Modal open / close handlers
  const handleSelectAchievement = (achievement) => {
    setSelectedAchievement(achievement);
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
          1. CEREMONIAL ACHIEVEMENT HERO
          ========================================================================= */}
      <AchievementHero
        totalCount={ACHIEVEMENTS_DATA.length}
        unlockedCount={unlockedCount}
        verifiedCount={verifiedCount}
        totalXP={totalXP}
        reducedMotion={prefersReducedMotion}
      />

      {/* =========================================================================
          2. TACTICAL CLASSIFICATION FILTERS & SEARCH
          ========================================================================= */}
      <AchievementFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryCounts={categoryCounts}
        totalCount={ACHIEVEMENTS_DATA.length}
      />

      {/* =========================================================================
          3. SIGIL ARCHIVE GRID & EMPTY STATES
          ========================================================================= */}
      <section
        aria-label="Hall of Legends Sigil Gallery"
        className="w-full flex flex-col gap-6"
      >
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            01 // CEREMONIAL SIGIL ARCHIVE // MATRIX
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            DISPLAYING {filteredAchievements.length} OF {ACHIEVEMENTS_DATA.length} ARTIFACTS
          </span>
        </div>

        {/* Special Certifications Zero-State (Strict Truthfulness) */}
        {selectedCategory === 'CERTIFICATIONS' ? (
          <div className="w-full py-16 px-6 aethel-glass aethel-rim-border corner-brackets flex flex-col items-center justify-center gap-4 text-center">
            <span className="material-symbols-outlined text-primary text-[48px]">
              verified_user
            </span>
            <div className="font-display-hero text-[22px] text-on-surface">
              NO VERIFIED EXTERNAL CERTIFICATIONS
            </div>
            <div className="font-meta-technical text-[11px] text-primary/80 uppercase tracking-widest">
              ARCHIVE AWAITING CREDENTIAL EVIDENCE
            </div>
            <p className="font-sans text-[13px] text-on-surface-variant max-w-lg leading-relaxed">
              In accordance with SMIT QUEST strict content truthfulness standards, external institutional certificates or third-party exam credentials are not displayed without direct verified evidence.
            </p>
            <QuestButton
              variant="ghost"
              size="sm"
              onClick={handleResetFilters}
              className="mt-2"
            >
              VIEW ALL VERIFIED ARTIFACTS
            </QuestButton>
          </div>
        ) : filteredAchievements.length === 0 ? (
          /* General Filter Empty State */
          <div className="w-full py-16 px-6 aethel-glass aethel-rim-border corner-brackets flex flex-col items-center justify-center gap-4 text-center">
            <span className="material-symbols-outlined text-outline-variant text-[48px]">
              search_off
            </span>
            <div className="font-display-hero text-[22px] text-on-surface">
              No Sigils Match Active Query
            </div>
            <p className="font-sans text-[13px] text-on-surface-variant max-w-md">
              Adjust your classification filter or clear search terms to inspect recorded artifacts.
            </p>
            <QuestButton
              variant="ghost"
              size="sm"
              onClick={handleResetFilters}
              className="mt-2"
            >
              RESET GALLERY FILTERS
            </QuestButton>
          </div>
        ) : (
          /* Main Ceremonial Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <AnimatePresence mode="popLayout">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.4,
                    delay: prefersReducedMotion ? 0 : index * 0.06,
                  }}
                >
                  <AchievementCard
                    achievement={achievement}
                    isSelected={selectedAchievement?.id === achievement.id}
                    onSelect={handleSelectAchievement}
                    reducedMotion={prefersReducedMotion}
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Empty Slot for visual balance matching Stitch layout */}
            {selectedCategory === 'ALL' && (
              <div className="hidden lg:flex opacity-30 border border-dashed border-primary/40 aethel-glass rounded-DEFAULT flex-col items-center justify-center p-6 text-center min-h-[340px] select-none">
                <span className="material-symbols-outlined text-primary/60 text-[32px] mb-2">
                  lock_clock
                </span>
                <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
                  EMPTY ARTIFACT SLOT
                </span>
                <span className="font-meta-technical text-[9px] text-outline-variant mt-1 uppercase">
                  RESERVED FOR FUTURE EXPEDITIONS
                </span>
              </div>
            )}
          </div>
        )}
      </section>

      {/* =========================================================================
          4. EXPEDITION VECTOR FOOTER TRAVERSAL CONTROLS
          ========================================================================= */}
      <section
        aria-label="Hall of Legends Sector Traversal Controls"
        className="w-full my-4 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-meta-technical text-[10px] text-primary tracking-[0.25em] uppercase">
            SECTOR TRAVERSAL // HALL OF LEGENDS
          </span>
          <div className="font-headline-lg-mobile text-[18px] md:text-[20px] text-on-surface font-bold">
            Traverse Completed Sectors
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
            icon="military_tech"
            iconPosition="right"
            onClick={() => navigate('/quests')}
          >
            QUEST ARENA
          </QuestButton>
        </div>
      </section>

      {/* =========================================================================
          5. CEREMONIAL ACHIEVEMENT DETAIL INSPECTOR MODAL
          ========================================================================= */}
      <AchievementDetailPanel
        achievement={selectedAchievement}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        reducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}

export default AchievementGallery;
