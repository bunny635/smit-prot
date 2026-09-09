import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { EDUCATION_DATA, EDUCATION_CONNECTIONS } from '../data/education';
import EducationHero from '../components/education/EducationHero';
import EducationLegend from '../components/education/EducationLegend';
import ConstellationScene from '../components/education/ConstellationScene';
import EducationDetailPanel from '../components/education/EducationDetailPanel';
import QuestButton from '../components/ui/QuestButton';

/**
 * EducationConstellation — SMIT QUEST Phase 9: Education Constellation / Academic Archive
 * Aethelgard astronomical archive charting foundational computing degrees,
 * cloud engineering credentials, and specialized client-side systems modules.
 */
export function EducationConstellation() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Local filtering & modal inspector states
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedNode, setSelectedNode] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute category counts dynamically from EDUCATION_DATA
  const { categoryCounts, degreesCount, certificationsCount, specializationsCount } =
    useMemo(() => {
      const counts = {
        DEGREES: 0,
        CERTIFICATIONS: 0,
        SPECIALIZATIONS: 0,
      };

      EDUCATION_DATA.forEach((item) => {
        if (item.level === 'MASTER_LEVEL' || item.level === 'BACHELOR_LEVEL') {
          counts.DEGREES += 1;
        } else if (item.level === 'CERTIFICATION') {
          counts.CERTIFICATIONS += 1;
        } else {
          counts.SPECIALIZATIONS += 1;
        }
      });

      return {
        categoryCounts: counts,
        degreesCount: counts.DEGREES,
        certificationsCount: counts.CERTIFICATIONS,
        specializationsCount: counts.SPECIALIZATIONS,
      };
    }, []);

  // Filtered nodes based on active category tab
  const filteredNodes = useMemo(() => {
    if (selectedCategory === 'ALL') return EDUCATION_DATA;

    return EDUCATION_DATA.filter((node) => {
      if (selectedCategory === 'DEGREES') {
        return node.level === 'MASTER_LEVEL' || node.level === 'BACHELOR_LEVEL';
      }
      if (selectedCategory === 'CERTIFICATIONS') {
        return node.level === 'CERTIFICATION';
      }
      if (selectedCategory === 'SPECIALIZATIONS') {
        return node.level === 'SPECIALIZATION' || node.level === 'FOUNDATION';
      }
      return true;
    });
  }, [selectedCategory]);

  // Modal open / close handlers
  const handleSelectNode = (node) => {
    setSelectedNode(node);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
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
          1. MONOLITHIC EDUCATION HERO
          ========================================================================= */}
      <EducationHero
        totalRecords={EDUCATION_DATA.length}
        degreesCount={degreesCount}
        certificationsCount={certificationsCount}
        specializationsCount={specializationsCount}
        reducedMotion={prefersReducedMotion}
      />

      {/* =========================================================================
          2. CONSTELLATION CLASSIFICATION LEGEND & FILTERS
          ========================================================================= */}
      <EducationLegend
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
        totalCount={EDUCATION_DATA.length}
      />

      {/* =========================================================================
          3. CENTRAL CONSTELLATION SCENE
          ========================================================================= */}
      <section
        aria-label="Education Constellation Graph"
        className="w-full flex flex-col gap-4"
      >
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            01 // CONSTELLATION GRAPH // SPATIAL ARCHIVES
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            DISPLAYING {filteredNodes.length} OF {EDUCATION_DATA.length} NODES
          </span>
        </div>

        <ConstellationScene
          nodes={filteredNodes}
          connections={EDUCATION_CONNECTIONS}
          selectedNode={selectedNode}
          onSelectNode={handleSelectNode}
          reducedMotion={prefersReducedMotion}
        />
      </section>

      {/* =========================================================================
          4. EXPEDITION VECTOR FOOTER TRAVERSAL CONTROLS
          ========================================================================= */}
      <section
        aria-label="Academic Sector Traversal Controls"
        className="w-full my-4 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-meta-technical text-[10px] text-primary tracking-[0.25em] uppercase">
            SECTOR TRAVERSAL // ACADEMIC CONSTELLATION
          </span>
          <div className="font-headline-lg-mobile text-[18px] md:text-[20px] text-on-surface font-bold">
            Expand the Knowledge Horizon
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
            icon="account_tree"
            iconPosition="left"
            onClick={() => navigate('/skills')}
          >
            SKILL MOUNTAIN
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
          5. HOLOGRAPHIC ACADEMIC DETAIL INSPECTOR MODAL
          ========================================================================= */}
      <EducationDetailPanel
        node={selectedNode}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
        reducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}

export default EducationConstellation;
