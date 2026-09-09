/**
 * memoryTimeline.js — SMIT QUEST Memory Valley Chronological Registry
 * Single source of truth for developer digital evolution, architectural milestones,
 * and chronological journey progression.
 *
 * NOTE ON CHRONOLOGY & CONTENT TRUTHFULNESS:
 * All records represent verified development milestones, shader investigations,
 * and project progressions directly grounded in the repository codebase.
 * Coordinates (e.g., COORD: ALPHA.01, SEC-06 // NODE-20) are Aethelgard interface/system metadata.
 */

export const MEMORY_TIMELINE_DATA = [
  {
    id: 'mem-001',
    date: '2023.06',
    year: '2023',
    title: 'The Terminal Genesis // Archival Codex',
    type: 'TOOLING',
    category: 'TOOLING',
    status: 'ARCHIVED',
    coordinates: 'COORD: ALPHA.01',
    summary:
      'A small monolithic ruin where the first command-line developer utilities, automated repository scaffolding, and JSON telemetry loggers were inscribed.',
    significance:
      'Established foundational Node.js CLI toolchain routines and automated git branch synchronization routines, eliminating manual repository setup friction.',
    technologies: ['Node.js', 'JavaScript', 'CLI Engine', 'Git'],
    relatedProject: 'archival-codex-cli',
    relatedExperiment: 'exp-004',
    isCurrent: false,
  },
  {
    id: 'mem-002',
    date: '2023.09',
    year: '2023',
    title: 'The Security Perimeter // Nexus Gateway',
    type: 'PROJECT',
    category: 'SECURITY',
    status: 'COMPLETE',
    coordinates: 'COORD: ALPHA.04',
    summary:
      'Navigating decoupled microservice architectures, authoring stateless JWT authentication perimeters, and implementing token-bucket rate limiters.',
    significance:
      'Engineered resilient Express middleware routing and high-velocity MongoDB aggregation pipelines to handle secure authentication and data ingress.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT Auth', 'REST APIs'],
    relatedProject: 'nexus-gateway-api',
    relatedExperience: 'exp-003',
    relatedExperiment: 'exp-005',
    isCurrent: false,
  },
  {
    id: 'mem-003',
    date: '2024.01',
    year: '2024',
    title: 'The Shader Forge // Aethelgard GLSL Core',
    type: 'EXPERIMENT',
    category: 'SHADER',
    status: 'COMPLETE',
    coordinates: 'COORD: BETA.01',
    summary:
      'Establishing GPU shader pipelines within the ruins, calculating procedural simplex noise and dynamic light refraction rings for Aethelgard dark atmospheres.',
    significance:
      'Unlocked 60fps GPU mathematical visual computing without bottlenecking the main UI thread, proving procedural noise rendering capabilities.',
    technologies: ['GLSL', 'WebGL', 'Three.js', 'Math / Shaders'],
    relatedProject: 'aethelgard-shader-core',
    relatedExperiment: 'exp-001',
    isCurrent: false,
  },
  {
    id: 'mem-004',
    date: '2024.02',
    year: '2024',
    title: 'The Tactile Shift // Mobile Relic HUD',
    type: 'MILESTONE',
    category: 'UI/UX',
    status: 'ACTIVE',
    coordinates: 'COORD: BETA.07',
    summary:
      'Forging tactile touch ergonomics for handheld viewports with 44px+ touch targets, hardware-accelerated carousel snaps, and frosted glass bottom sheets.',
    significance:
      'Transformed mobile web navigation from cramped traditional menus into a high-precision field operative HUD with smooth gesture physics.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Touch Events'],
    relatedProject: 'mobile-relic-hud',
    relatedExperiment: 'exp-003',
    isCurrent: false,
  },
  {
    id: 'mem-005',
    date: '2024.03',
    year: '2024',
    title: 'Full Stack Expedition // QuickGo Platform',
    type: 'PROJECT',
    category: 'FULLSTACK',
    status: 'COMPLETE',
    coordinates: 'COORD: GAMMA.02',
    summary:
      'Architecting an end-to-end decentralized logistics and home service platform optimizing real-time tracking, service dispatching, and secure coordination.',
    significance:
      'United client-side tactical controls with Express API routing and indexed MongoDB document stores under production-scale data flows.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    relatedProject: 'quickgo',
    relatedExperience: 'exp-002',
    isCurrent: false,
  },
  {
    id: 'mem-006',
    date: '2024.04',
    year: '2024',
    title: 'Spatial Odyssey Core // SMIT QUEST Engine',
    type: 'MILESTONE',
    category: 'SPATIAL',
    status: 'ACTIVE',
    coordinates: 'COORD: GAMMA.09',
    summary:
      'Constructing an interconnected 3D cosmic world hub with orbital camera kinematics, glowing energy connections, and real-time state telemetry.',
    significance:
      'Unified React 18, React Three Fiber, procedural GLSL shaders, and Aethelgard design system tokens into a cohesive spatial developer portfolio.',
    technologies: ['React 18', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'WebGL'],
    relatedProject: 'smit-quest-engine',
    relatedExperience: 'exp-001',
    relatedExperiment: 'exp-002',
    isCurrent: true,
  },
  {
    id: 'mem-007',
    date: '2025+',
    year: '2025+',
    title: 'The Next Quest // Horizon Odyssey',
    type: 'MILESTONE',
    category: 'HORIZON',
    status: 'IN_PROGRESS',
    coordinates: 'COORD: HORIZON.00',
    summary:
      'A portal shrouded in atmospheric fog and gold particles. Expanding spatial web architectures, generative shaders, and autonomous multi-agent systems.',
    significance:
      'The next quest is still being written as developer architectures push into WebGPU, spatial computing, and intelligent autonomous workflows.',
    technologies: ['AI / Autonomous Agents', 'Spatial Computing', 'WebGPU'],
    isCurrent: false,
  },
];

export const MEMORY_CATEGORIES = [
  'ALL',
  'MILESTONES',
  'PROJECTS',
  'EXPERIMENTS',
  'TOOLING',
];
