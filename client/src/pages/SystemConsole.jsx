import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { usePlayer } from '../context/PlayerContext';
import { PROJECTS_DATA } from '../data/projects';
import { SKILLS_DATA } from '../data/skills';
import { EXPERIENCE_DATA } from '../data/experience';
import { EXPERIMENTS_DATA } from '../data/experiments';
import { MEMORY_TIMELINE_DATA } from '../data/memoryTimeline';
import { EDUCATION_DATA } from '../data/education';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { WORLD_DESTINATIONS } from '../data/worldDestinations';
import { INVENTORY_ARTIFACTS } from '../data/inventoryData';

import ConsoleHero from '../components/console/ConsoleHero';
import SystemTelemetry from '../components/console/SystemTelemetry';
import ConsoleTerminal from '../components/console/ConsoleTerminal';
import QuestButton from '../components/ui/QuestButton';

/**
 * SystemConsole — SMIT QUEST Phase 11: System Console / Terminal Core
 * Simulated technical command matrix granting archivist access to live databanks,
 * route diagnostics, and sector navigation.
 */
export function SystemConsole() {
  const navigate = useNavigate();
  const { player } = usePlayer();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Terminal state
  const [history, setHistory] = useState([
    { type: 'boot', content: null },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Registered Available Protocols
  const AVAILABLE_PROTOCOLS = [
    { cmd: 'help', desc: 'Display all available archivist protocols' },
    { cmd: 'status', desc: 'Show system diagnostics, level, and XP' },
    { cmd: 'identity', desc: 'Display architect neural profile and lore' },
    { cmd: 'routes', desc: 'List all active sector paths and status' },
    { cmd: 'projects', desc: 'Query active Quest Arena mission databank' },
    { cmd: 'skills', desc: 'Scan Skill Mountain proficiency matrix' },
    { cmd: 'journal', desc: 'Index Quest Journal expedition logs' },
    { cmd: 'lab', desc: 'Query Forbidden Lab experimental prototypes' },
    { cmd: 'memory', desc: 'Inspect Memory Valley chronological timeline' },
    { cmd: 'education', desc: 'Query foundational academic repositories' },
    { cmd: 'achievements', desc: 'Inspect Hall of Legends sigil honors' },
    { cmd: 'inventory', desc: 'Query Inventory Vault technological relics' },
    { cmd: 'clear', desc: 'Purge terminal output buffer' },
    { cmd: 'hub', desc: 'Navigate to World Hub sector' },
    { cmd: 'origin', desc: 'Navigate to Origin Tower sector' },
    { cmd: 'quests', desc: 'Navigate to Project Arena sector' },
  ];

  // Execute command handler
  const executeCommand = (cmdString) => {
    const raw = cmdString || input;
    const trimmed = raw.trim();

    if (!trimmed) return;

    // Add command line to history
    const newHistory = [...history, { type: 'command', command: trimmed }];
    const lower = trimmed.toLowerCase();

    // Update command history for Up/Down navigation
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);
    setInput('');

    // Process commands
    switch (lower) {
      case 'help':
        setHistory([
          ...newHistory,
          { type: 'help', content: AVAILABLE_PROTOCOLS },
        ]);
        break;

      case 'clear':
        setHistory([{ type: 'boot', content: null }]);
        break;

      case 'status':
        setHistory([
          ...newHistory,
          {
            type: 'status',
            content: {
              name: player.name,
              level: player.level,
              xp: player.currentXP,
              nextLevelXp: player.maxXP,
              visitedCount: player.visitedPages?.length || 0,
            },
          },
        ]);
        break;

      case 'identity':
        setHistory([
          ...newHistory,
          {
            type: 'identity',
            content: {
              role: 'Full Stack & Spatial Web Systems Architect',
              coordinates: '34.0522° N // 0x7F // SEC-09',
              bio: 'Architecting immersive 3D web applications, decentralized full stack platforms, and high-contrast ergonomic interfaces through the lens of Digital Archaeology.',
              philosophy: 'Code as ancient relic, interface as architectural journey.',
            },
          },
        ]);
        break;

      case 'routes':
        setHistory([
          ...newHistory,
          {
            type: 'routes',
            content: WORLD_DESTINATIONS.map((d) => ({
              path: d.route,
              name: d.label,
              sector: d.coordinate,
            })),
          },
        ]);
        break;

      case 'projects':
        setHistory([
          ...newHistory,
          { type: 'projects', content: PROJECTS_DATA },
        ]);
        break;

      case 'skills':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'SKILL MATRIX CAPABILITIES',
              items: SKILLS_DATA.map((s) => ({
                label: s.name,
                sub: s.levelLabel,
                meta: `${s.xpValue} XP`,
              })),
            },
          },
        ]);
        break;

      case 'journal':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'EXPEDITION MISSION LOGS',
              items: EXPERIENCE_DATA.map((e) => ({
                label: `${e.missionNumber}: ${e.role}`,
                sub: e.organization,
                meta: e.status,
              })),
            },
          },
        ]);
        break;

      case 'lab':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'FORBIDDEN LAB PROTOTYPES',
              items: EXPERIMENTS_DATA.map((exp) => ({
                label: `${exp.code}: ${exp.title}`,
                sub: exp.category,
                meta: exp.status,
              })),
            },
          },
        ]);
        break;

      case 'memory':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'MEMORY VALLEY CHRONOLOGY',
              items: MEMORY_TIMELINE_DATA.map((m) => ({
                label: `${m.date}: ${m.title}`,
                sub: m.category,
                meta: m.status,
              })),
            },
          },
        ]);
        break;

      case 'education':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'ACADEMIC KNOWLEDGE REPOSITORIES',
              items: EDUCATION_DATA.map((ed) => ({
                label: ed.title,
                sub: ed.institution,
                meta: ed.dateLabel,
              })),
            },
          },
        ]);
        break;

      case 'achievements':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'HALL OF LEGENDS SIGIL HONORS',
              items: ACHIEVEMENTS_DATA.map((ach) => ({
                label: `${ach.seq}: ${ach.title}`,
                sub: ach.subtitle,
                meta: ach.status,
              })),
            },
          },
        ]);
        break;

      case 'inventory':
        setHistory([
          ...newHistory,
          {
            type: 'generic-list',
            content: {
              title: 'INVENTORY VAULT // DATA ARCHIVES',
              items: INVENTORY_ARTIFACTS.map((a) => ({
                label: `${a.code}: ${a.title}`,
                sub: a.type,
                meta: a.tier,
              })),
            },
          },
        ]);
        break;

      // Safe Navigation Protocols
      case 'hub':
        navigate('/hub');
        break;
      case 'origin':
        navigate('/origin');
        break;
      case 'quests':
        navigate('/quests');
        break;
      case 'inventory-nav':
      case 'inventory_nav':
        navigate('/inventory');
        break;
      case 'skills-nav':
      case 'skills_nav':
        navigate('/skills');
        break;
      case 'journal-nav':
        navigate('/journal');
        break;
      case 'lab-nav':
        navigate('/lab');
        break;
      case 'memory-nav':
        navigate('/memory');
        break;
      case 'education-nav':
        navigate('/education');
        break;
      case 'achievements-nav':
        navigate('/achievements');
        break;
      case 'void':
        navigate('/void');
        break;
      case 'portal':
        navigate('/portal');
        break;

      default:
        setHistory([
          ...newHistory,
          {
            type: 'error',
            content: `PROTOCOL ERROR: '${trimmed}' NOT RECOGNIZED BY KERNEL.`,
          },
        ]);
    }
  };

  // Keyboard navigation & tab completion
  const handleKeyDown = (e) => {
    // Arrow Up: Command history back
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    }
    // Arrow Down: Command history forward
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
    // Tab: Auto-complete
    else if (e.key === 'Tab') {
      e.preventDefault();
      if (input.trim()) {
        const match = AVAILABLE_PROTOCOLS.find((p) =>
          p.cmd.startsWith(input.trim().toLowerCase())
        );
        if (match) {
          setInput(match.cmd);
        }
      }
    }
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
          1. MONOLITHIC CONSOLE HERO
          ========================================================================= */}
      <ConsoleHero
        systemStatus="ONLINE"
        accessLevel="ARCHIVIST_01"
        reducedMotion={prefersReducedMotion}
      />

      {/* =========================================================================
          2. DYNAMIC SYSTEM TELEMETRY GRID
          ========================================================================= */}
      <SystemTelemetry
        projectsCount={PROJECTS_DATA.length}
        skillsCount={SKILLS_DATA.length}
        labCount={EXPERIMENTS_DATA.length}
        memoryCount={MEMORY_TIMELINE_DATA.length}
        educationCount={EDUCATION_DATA.length}
        achievementsCount={ACHIEVEMENTS_DATA.length}
        routesCount={WORLD_DESTINATIONS.length}
      />

      {/* =========================================================================
          3. MAIN TERMINAL CORE VIEWPORT
          ========================================================================= */}
      <section
        aria-label="Terminal Core Viewport"
        className="w-full flex flex-col gap-3"
      >
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
          <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
            01 // TERMINAL_CORE // COMMAND INTERFACE
          </span>
          <span className="font-meta-technical text-[10px] text-outline-variant uppercase tracking-wider">
            STATUS: ACTIVE // LOCAL PROTOCOLS ONLY
          </span>
        </div>

        <ConsoleTerminal
          history={history}
          input={input}
          onInputChange={setInput}
          onSubmit={() => executeCommand()}
          onKeyDown={handleKeyDown}
          onClear={() => setHistory([{ type: 'boot', content: null }])}
          availableCommands={AVAILABLE_PROTOCOLS.map((p) => p.cmd)}
          onSelectQuickCommand={(cmd) => executeCommand(cmd)}
        />
      </section>

      {/* =========================================================================
          4. EXPEDITION VECTOR FOOTER TRAVERSAL CONTROLS
          ========================================================================= */}
      <section
        aria-label="Console Sector Traversal Controls"
        className="w-full my-4 p-6 md:p-8 aethel-glass aethel-rim-border corner-brackets flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="font-meta-technical text-[10px] text-primary tracking-[0.25em] uppercase">
            SECTOR TRAVERSAL // TERMINAL ACCESS
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
            icon="person"
            iconPosition="left"
            onClick={() => navigate('/origin')}
          >
            ORIGIN TOWER
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
    </motion.div>
  );
}

export default SystemConsole;
