/**
 * experience.js — SMIT QUEST Experience & Mission Expedition Registry
 * Single source of truth for developer engineering expeditions and operational logs.
 * Compatible with future MongoDB Experience schema.
 *
 * NOTE ON CONTENT TRUTHFULNESS:
 * All records represent verified development expeditions, architectural milestones,
 * and engineering operations from the SMIT QUEST codebase and project history.
 * Coordinates and Mission Codes (e.g., SEC-A9.1, Q-013) are Aethelgard interface/system metadata.
 */

export const EXPERIENCE_DATA = [
  {
    id: 'exp-001',
    missionNumber: 'MISSION 01',
    code: 'Q-014',
    organization: 'SMIT QUEST CORE LABS',
    role: 'Lead Spatial 3D & Full Stack Engineer',
    location: 'Remote // Digital Matrix',
    startDate: '2024.01',
    endDate: 'PRESENT',
    status: 'ACTIVE',
    difficulty: 5,
    xpReward: 6500,
    summary:
      'Architecting and deploying the high-performance SMIT QUEST engine, integrating React 18, Three.js / React Three Fiber, WebGL procedural shader pipelines, and real-time state telemetry.',
    responsibilities: [
      'Engineered an interconnected 3D cosmic world hub with orbital camera kinematics, glowing energy connections, and 60fps canvas performance.',
      'Authored custom GLSL vertex and fragment shaders calculating procedural simplex noise and dynamic light refraction rings in real time.',
      'Developed responsive fallback subsystems ensuring seamless rendering across mobile, tablet, and ultra-wide viewports.',
      'Architected the Aethelgard design system token pipeline in Tailwind CSS with high-contrast accessibility and prefers-reduced-motion choreography.',
    ],
    technologies: ['React 18', 'Three.js', 'React Three Fiber', 'WebGL', 'GLSL', 'Tailwind CSS', 'Framer Motion'],
    coordinates: 'SEC-A9.1 // COORD: 12.4 N, 77.6 E',
    sector: 'EXPEDITIONS // SPATIAL 3D & CORE ARCHITECTURE',
    relatedQuestSlug: 'smit-quest-engine',
  },
  {
    id: 'exp-002',
    missionNumber: 'MISSION 02',
    code: 'Q-013',
    organization: 'QUICKGO PLATFORM LABS',
    role: 'Full Stack Systems Architect',
    location: 'Remote // Systems Core',
    startDate: '2024.03',
    endDate: '2024.06',
    status: 'COMPLETED',
    difficulty: 4,
    xpReward: 4500,
    summary:
      'Designed and implemented an end-to-end decentralized logistics and home service platform optimizing real-time tracking, service dispatching, and secure stakeholder coordination.',
    responsibilities: [
      'Built a high-contrast React client interface with real-time tactical controls and optimistic UI state management.',
      'Implemented resilient Node.js and Express API routing with JWT authentication, role-based access control (RBAC), and centralized error handling.',
      'Optimized MongoDB document schemas and aggregation pipelines for rapid service indexing and low-latency query resolution.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT Auth', 'Tailwind CSS'],
    coordinates: 'SEC-B4.2 // COORD: 45.9 N, 12.4 E',
    sector: 'EXPEDITIONS // FULL STACK PLATFORMS',
    relatedQuestSlug: 'quickgo',
  },
  {
    id: 'exp-003',
    missionNumber: 'MISSION 03',
    code: 'Q-008',
    organization: 'NEXUS SECURITY HUB',
    role: 'Backend & API Security Engineer',
    location: 'Remote // Gateway Protocol',
    startDate: '2023.09',
    endDate: '2024.01',
    status: 'COMPLETED',
    difficulty: 4,
    xpReward: 4500,
    summary:
      'Engineered a high-throughput REST API microservice gateway implementing token-based authentication perimeters, rate limiting, and structured MongoDB data modeling.',
    responsibilities: [
      'Architected stateless JWT authentication middleware and secure HTTP-only cookie session handling with Helmet security headers.',
      'Implemented token-bucket rate limiting to mitigate DDoS vectors and protect sensitive API ingress routes.',
      'Constructed MongoDB indexing strategies and aggregation pipelines to handle high-velocity telemetry ingestion.',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT', 'Security Headers'],
    coordinates: 'SEC-C1.1 // COORD: 40.7 N, 74.0 W',
    sector: 'EXPEDITIONS // BACKEND & SECURITY',
    relatedQuestSlug: 'nexus-gateway-api',
  },
  {
    id: 'exp-004',
    missionNumber: 'MISSION 04',
    code: 'Q-005',
    organization: 'ARCHIVAL CODEX TOOLING',
    role: 'CLI & Developer Tooling Engineer',
    location: 'Remote // Terminal Node',
    startDate: '2023.06',
    endDate: '2023.11',
    status: 'ARCHIVED',
    difficulty: 3,
    xpReward: 3500,
    summary:
      'Developed a modular Node.js terminal utility suite for automated repository scaffolding, code analytics diagnostics, and automated project synchronization.',
    responsibilities: [
      'Authored an interactive CLI parser with argument validation, colored diagnostics output, and automated git branch synchronizers.',
      'Built automated project templating engines reducing repository setup friction and eliminating configuration drift.',
      'Created structured JSON telemetry loggers for measuring command latency and execution diagnostics.',
    ],
    technologies: ['Node.js', 'JavaScript', 'CLI Engine', 'Git', 'Terminal API'],
    coordinates: 'SEC-D0.8 // COORD: 51.5 N, 0.12 W',
    sector: 'EXPEDITIONS // DEVELOPER PRODUCTIVITY',
    relatedQuestSlug: 'archival-codex-cli',
  },
];

export const JOURNAL_STATUS_FILTERS = ['ALL', 'ACTIVE', 'COMPLETED', 'ARCHIVED'];
