import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuestButton from '../components/ui/QuestButton';
import StatusBadge from '../components/ui/StatusBadge';
import XPBar from '../components/ui/XPBar';
import MissionDifficulty from '../components/ui/MissionDifficulty';
import { usePlayer } from '../context/PlayerContext';

const ROUTE_CONFIG = {
  '/hub': {
    title: 'THE WORLD HUB',
    subtitle: 'NEXUS OF EXPEDITIONS',
    code: 'SEC-01-HUB',
    coord: '0.0.0 // SECTOR ALPHA',
    difficulty: 1,
    status: 'ACTIVE',
    desc: 'The central spatial crossroads connecting all sectors of the digital odyssey. 3D spatial world engine currently initialized in foundation mode.',
  },
  '/origin': {
    title: 'ORIGIN TOWER',
    subtitle: 'DEVELOPER IDENTITY CORE',
    code: 'SEC-02-ORIGIN',
    coord: '15.0.5 // MONOLITH_ONE',
    difficulty: 2,
    status: 'IN PROGRESS',
    desc: 'The monolithic archives chronicling ARCHIVIST_01 identity, core philosophies, developer genesis, and architectural origins.',
  },
  '/quests': {
    title: 'PROJECT ARENA',
    subtitle: 'ACTIVE QUEST SELECTION',
    code: 'SEC-03-ARENA',
    coord: '-15.2.-15 // SECTOR BETA',
    difficulty: 4,
    status: 'ACTIVE',
    desc: 'High-stakes developer missions and production applications. Inspect architectures, systems engineering, and deployed artifacts.',
  },
  '/journal': {
    title: 'QUEST JOURNAL',
    subtitle: 'MISSION EXPEDITION LOG',
    code: 'SEC-04-JOURNAL',
    coord: '04.12.88 // LOG_VAULT',
    difficulty: 2,
    status: 'ACTIVE',
    desc: 'Chronological mission reports, architectural decision logs, and campaign field notes from previous development operations.',
  },
  '/skills': {
    title: 'SKILL TREE',
    subtitle: 'KNOWLEDGE PEAK MATRIX',
    code: 'SEC-05-SKILLS',
    coord: '0.8.-25 // SUMMIT_ALPHA',
    difficulty: 5,
    status: 'ACTIVE',
    desc: 'An interconnected constellation of technological capabilities, languages, runtime frameworks, and cloud masteries.',
  },
  '/lab': {
    title: 'FORBIDDEN LAB',
    subtitle: 'EXPERIMENTAL CORE',
    code: 'SEC-06-LAB',
    coord: '-20.3.5 // ANOMALY_ZONE',
    difficulty: 5,
    status: 'IN PROGRESS',
    desc: 'Classified prototypes, experimental shaders, cutting-edge AI integrations, and high-performance sandbox tests.',
  },
  '/memory': {
    title: 'MEMORY VALLEY',
    subtitle: 'JOURNEY TIMELINE',
    code: 'SEC-07-MEMORY',
    coord: '18.1.15 // VALLEY_CANYON',
    difficulty: 3,
    status: 'IN PROGRESS',
    desc: 'An atmospheric canyon etched with milestones, career trajectories, key victories, and lessons carved into stone.',
  },
  '/education': {
    title: 'EDUCATION CONSTELLATION',
    subtitle: 'FOUNDATIONAL ACADEMIA',
    code: 'SEC-08-EDU',
    coord: '12.44.02 // CELESTIAL_CORE',
    difficulty: 2,
    status: 'COMPLETE',
    desc: 'Academic foundations, computer science credentials, formal algorithmic training, and certifications.',
  },
  '/achievements': {
    title: 'ACHIEVEMENT GALLERY',
    subtitle: 'HALL OF LEGENDS',
    code: 'SEC-09-HONORS',
    coord: '30.12.-8 // CITADEL_EAST',
    difficulty: 4,
    status: 'ACTIVE',
    desc: 'Trophies, industry recognitions, hackathon podiums, and exceptional engineering feats unlocked during the journey.',
  },
  '/console': {
    title: 'SYSTEM CONSOLE',
    subtitle: 'TERMINAL RUNTIME ACCESS',
    code: 'SEC-10-TERMINAL',
    coord: '0xFF.0x00 // SHELL_ROOT',
    difficulty: 3,
    status: 'ACTIVE',
    desc: 'Direct command-line interface to the SMIT QUEST kernel. Execute diagnostic commands and query hidden archives.',
  },
  '/void': {
    title: 'THE VOID',
    subtitle: 'RESTRICTED SECTOR',
    code: 'SEC-VOID-99',
    coord: '???.???.??? // UNMAPPED',
    difficulty: 5,
    status: 'IN PROGRESS',
    desc: 'A mysterious dimensional rift beneath the world hub. Only accessible by uncovering secret terminal protocols.',
  },
  '/portal': {
    title: 'THE FINAL PORTAL',
    subtitle: 'EXPEDITION CONCLUSION',
    code: 'SEC-11-PORTAL',
    coord: '0.10.30 // GATEWAY_SOUTH',
    difficulty: 4,
    status: 'ACTIVE',
    desc: 'The concluding gateway for direct contact, contracts, hiring opportunities, and real-time transmissions.',
  },
};

/**
 * RoutePlaceholder — Aethelgard Branded Route Anchor
 * Provides a high-fidelity cinematic placeholder for routes pending future phase implementation.
 */
export function RoutePlaceholder() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const { player } = usePlayer();

  // Handle dynamic /quests/:id or static routes
  const pathKey = params.id ? '/quests' : location.pathname;
  const config = ROUTE_CONFIG[pathKey] || {
    title: params.id ? `QUEST: ${params.id.toUpperCase()}` : 'EXPEDITION SECTOR',
    subtitle: 'ARCHIVE ARCHITECTURE',
    code: `SEC-${location.pathname.replace('/', '').toUpperCase() || 'ROOT'}`,
    coord: '34.0522° N // 0x7F',
    difficulty: 3,
    status: 'IN PROGRESS',
    desc: 'A specialized archive within the SMIT QUEST digital construct.',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full py-8 flex flex-col items-start gap-8"
    >
      {/* Sector Header Box */}
      <div className="w-full p-6 md:p-8 bg-surface-container/40 backdrop-blur-md border border-outline-variant/30 rounded-DEFAULT relative overflow-hidden corner-brackets">
        {/* Decorative Top Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/30 pb-4 mb-6">
          <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.2em]">
            <span className="w-2 h-2 rounded-sm bg-primary" />
            <span>SECTOR: {config.code}</span>
            <span className="text-outline-variant/60">//</span>
            <span className="text-on-surface-variant/80">{config.coord}</span>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status={config.status} size="sm" />
            <MissionDifficulty level={config.difficulty} size="sm" />
          </div>
        </div>

        {/* Sector Titles */}
        <div className="flex flex-col gap-2">
          <span className="font-meta-technical text-[12px] text-primary/80 tracking-[0.25em] uppercase">
            {config.subtitle}
          </span>
          <h1 className="font-display-hero text-[36px] sm:text-[48px] md:text-[60px] text-primary leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(242,202,80,0.3)]">
            {config.title}
          </h1>
        </div>

        {/* Description */}
        <p className="font-sans text-body-md text-on-surface-variant max-w-3xl mt-4 leading-relaxed">
          {config.desc}
        </p>

        {/* Technical Status & XP Demonstration */}
        <div className="mt-8 pt-6 border-t border-outline-variant/30 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-2">
            <div className="font-meta-technical text-[11px] text-on-surface-variant/70 tracking-widest uppercase">
              SECTOR READINESS: PHASE 1 FOUNDATION ESTABLISHED
            </div>
            <div className="font-meta-technical text-[10px] text-outline tracking-wider">
              FULL ENVIRONMENT RENDERING SCHEDULED FOR NEXT EXPEDITION PHASE.
            </div>
          </div>

          <div className="w-full">
            <XPBar
              currentXP={player.currentXP}
              maxXP={player.maxXP}
              label="SYNCHRONIZATION METRIC"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-wrap items-center gap-4">
        <QuestButton
          variant="ghost"
          icon="hub"
          iconPosition="left"
          onClick={() => navigate('/hub')}
        >
          RETURN TO HUB
        </QuestButton>

        <QuestButton
          variant="subtle"
          icon="arrow_back"
          iconPosition="left"
          onClick={() => navigate(-1)}
        >
          PREVIOUS SECTOR
        </QuestButton>
      </div>
    </motion.div>
  );
}

export default RoutePlaceholder;
