import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import OriginHero from '../components/origin/OriginHero';
import IdentityTelemetry from '../components/origin/IdentityTelemetry';
import LorePhilosophy from '../components/origin/LorePhilosophy';
import ValuesArchive from '../components/origin/ValuesArchive';
import TechSnapshot from '../components/origin/TechSnapshot';
import QuestButton from '../components/ui/QuestButton';

/**
 * OriginTower — SMIT QUEST Phase 3: Identity Core Experience
 * Monumental personal identity archive chronicling ARCHIVIST_01 origins,
 * core philosophy, operational principles, and full-stack capabilities.
 */
export function OriginTower() {
  const navigate = useNavigate();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-6xl mx-auto py-6 sm:py-10 flex flex-col gap-12 sm:gap-20 select-none overflow-x-hidden"
    >
      {/* 1. Monolithic Origin Hero & Sacred Geometry Identity Core */}
      <OriginHero reducedMotion={prefersReducedMotion} />

      {/* 2. Identity Telemetry Matrix & XP Synchronization */}
      <IdentityTelemetry />

      {/* 3. Archival Lore & Developer Philosophy */}
      <LorePhilosophy />

      {/* 4. Operational Values & Principles Archive */}
      <ValuesArchive />

      {/* 5. Capability Matrix Snapshot */}
      <TechSnapshot />

      {/* 6. Expedition Progression Navigation Footer */}
      <section
        aria-label="Expedition Navigation Controls"
        className="w-full my-8 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-meta-technical text-[10px] text-primary tracking-[0.25em] uppercase">
            EXPEDITION VECTOR // NEXT ARCHIVE
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
            onClick={() => navigate('/quests')}
          >
            QUEST ARENA
          </QuestButton>
        </div>
      </section>
    </motion.div>
  );
}

export default OriginTower;
