/**
 * skills.js — SMIT QUEST Skill Registry & Knowledge Matrix Data
 * Ground truth data model for Skill Mountain / Knowledge Peak.
 * Compatible with future backend schema.
 */

export const SKILLS_DATA = [
  // =========================================================================
  // FRONTEND & SPATIAL WEB
  // =========================================================================
  {
    id: 'react',
    name: 'React 18',
    category: 'FRONTEND',
    level: 9,
    levelLabel: 'LEVEL 9 // MASTER',
    xpValue: 450,
    icon: 'terminal',
    description:
      'Architecting high-performance spatial interfaces with React 18, concurrent features, custom hooks, and context telemetry. Unifying cinematic UI states with optimized DOM re-rendering pipelines.',
    isUnlocked: true,
    dependencies: ['javascript', 'tailwind'],
    relatedProjects: ['quickgo', 'smit-quest-engine', 'mobile-relic-hud'],
    position: { x: 500, y: 120 },
    mobilePosition: { x: 50, y: 22 },
  },
  {
    id: 'javascript',
    name: 'JavaScript / TypeScript',
    category: 'FRONTEND',
    level: 9,
    levelLabel: 'LEVEL 9 // ADVANCED',
    xpValue: 400,
    icon: 'code',
    description:
      'Mastery of modern ESNext language paradigms, asynchronous event loops, static typing contracts, and high-velocity algorithmic routines across browser and runtime engines.',
    isUnlocked: true,
    dependencies: [],
    relatedProjects: ['quickgo', 'smit-quest-engine', 'archival-codex-cli'],
    position: { x: 370, y: 210 },
    mobilePosition: { x: 25, y: 38 },
  },
  {
    id: 'threejs',
    name: 'Three.js / WebGL',
    category: 'FRONTEND',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 450,
    icon: 'hub',
    description:
      'Constructing immersive 3D spatial viewports with React Three Fiber, scene graphs, custom lighting matrices, orbital camera kinematics, and 60fps canvas performance.',
    isUnlocked: true,
    dependencies: ['javascript', 'glsl'],
    relatedProjects: ['smit-quest-engine', 'aethelgard-shader-core'],
    position: { x: 630, y: 210 },
    mobilePosition: { x: 75, y: 38 },
  },
  {
    id: 'glsl',
    name: 'GLSL Shaders',
    category: 'FRONTEND',
    level: 7,
    levelLabel: 'LEVEL 7 // PROFICIENT',
    xpValue: 350,
    icon: 'auto_awesome',
    description:
      'Authoring GPU fragment and vertex shaders, procedural simplex noise algorithms, and real-time cosmic light refraction effects for dark sci-fi atmospheres.',
    isUnlocked: true,
    dependencies: [],
    relatedProjects: ['aethelgard-shader-core'],
    position: { x: 670, y: 550 },
    mobilePosition: { x: 80, y: 80 },
  },

  // =========================================================================
  // BACKEND & RUNTIME
  // =========================================================================
  {
    id: 'nodejs',
    name: 'Node.js Runtime',
    category: 'BACKEND',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 400,
    icon: 'dns',
    description:
      'Building event-driven, non-blocking asynchronous backend services, microservice orchestration, stream processing, and CLI developer tooling suites.',
    isUnlocked: true,
    dependencies: ['javascript'],
    relatedProjects: ['quickgo', 'archival-codex-cli', 'nexus-gateway-api'],
    position: { x: 300, y: 320 },
    mobilePosition: { x: 18, y: 54 },
  },
  {
    id: 'express',
    name: 'Express.js Framework',
    category: 'BACKEND',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 400,
    icon: 'api',
    description:
      'Designing robust middleware pipelines, controller subroutines, CORS security policies, centralized error handlers, and scalable server routing structures.',
    isUnlocked: true,
    dependencies: ['nodejs'],
    relatedProjects: ['quickgo', 'nexus-gateway-api'],
    position: { x: 440, y: 320 },
    mobilePosition: { x: 40, y: 54 },
  },
  {
    id: 'rest-api',
    name: 'RESTful API Architecture',
    category: 'BACKEND',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 350,
    icon: 'sync_alt',
    description:
      'Establishing clean HTTP contracts, resource-oriented endpoint modeling, status code discipline, query pagination, and high-throughput data ingress standards.',
    isUnlocked: true,
    dependencies: ['express'],
    relatedProjects: ['quickgo', 'nexus-gateway-api'],
    position: { x: 560, y: 320 },
    mobilePosition: { x: 60, y: 54 },
  },
  {
    id: 'jwt-auth',
    name: 'JWT & Security Protocols',
    category: 'BACKEND',
    level: 7,
    levelLabel: 'LEVEL 7 // PROFICIENT',
    xpValue: 300,
    icon: 'lock',
    description:
      'Implementing stateless token verification, cryptographic hashing, protected route guards, and role-based access control (RBAC) security perimeters.',
    isUnlocked: true,
    dependencies: ['rest-api'],
    relatedProjects: ['quickgo', 'nexus-gateway-api'],
    position: { x: 700, y: 320 },
    mobilePosition: { x: 82, y: 54 },
  },

  // =========================================================================
  // DATABASE & PERSISTENCE
  // =========================================================================
  {
    id: 'mongodb',
    name: 'MongoDB Document Vault',
    category: 'DATABASE',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 400,
    icon: 'database',
    description:
      'Schema modeling with Mongoose, complex aggregation pipelines, indexing strategies, and high-availability database cluster management.',
    isUnlocked: true,
    dependencies: ['nodejs'],
    relatedProjects: ['quickgo', 'nexus-gateway-api'],
    position: { x: 230, y: 440 },
    mobilePosition: { x: 15, y: 68 },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL Relational DB',
    category: 'DATABASE',
    level: 7,
    levelLabel: 'LEVEL 7 // PROFICIENT',
    xpValue: 350,
    icon: 'storage',
    description:
      'Relational data modeling, ACID transactions, complex joins, constraint enforcement, and query performance optimization.',
    isUnlocked: true,
    dependencies: ['nodejs'],
    relatedProjects: [],
    position: { x: 360, y: 440 },
    mobilePosition: { x: 35, y: 68 },
  },

  // =========================================================================
  // DEVOPS & INFRASTRUCTURE TOOLING
  // =========================================================================
  {
    id: 'git',
    name: 'Git & Version Control',
    category: 'DEVOPS',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 350,
    icon: 'commit',
    description:
      'Branching workflows, atomic commit history, rebasing, merge conflict resolution, and automated GitHub actions deployment pipelines.',
    isUnlocked: true,
    dependencies: [],
    relatedProjects: ['quickgo', 'smit-quest-engine', 'archival-codex-cli'],
    position: { x: 500, y: 440 },
    mobilePosition: { x: 50, y: 68 },
  },
  {
    id: 'vite',
    name: 'Vite Build Tooling',
    category: 'DEVOPS',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 300,
    icon: 'bolt',
    description:
      'Next-generation frontend tooling with instant Hot Module Replacement (HMR), Rollup chunk optimizations, and fast production bundle synthesis.',
    isUnlocked: true,
    dependencies: ['react'],
    relatedProjects: ['smit-quest-engine', 'quickgo'],
    position: { x: 640, y: 440 },
    mobilePosition: { x: 68, y: 68 },
  },
  {
    id: 'docker',
    name: 'Docker Containers',
    category: 'DEVOPS',
    level: 6,
    levelLabel: 'LEVEL 6 // WORKING KNOWLEDGE',
    xpValue: 250,
    icon: 'deployed_code',
    description:
      'Containerizing full-stack microservices, multi-stage Dockerfiles, compose definitions, and reproducible isolated developer environments.',
    isUnlocked: true,
    dependencies: ['nodejs'],
    relatedProjects: [],
    position: { x: 770, y: 440 },
    mobilePosition: { x: 85, y: 68 },
  },

  // =========================================================================
  // DESIGN SYSTEMS & SPATIAL ERGONOMICS
  // =========================================================================
  {
    id: 'tailwind',
    name: 'Tailwind CSS Engine',
    category: 'DESIGN',
    level: 9,
    levelLabel: 'LEVEL 9 // MASTER',
    xpValue: 350,
    icon: 'brush',
    description:
      'Configuring custom design systems, atomic utility tokens, responsive breakpoints, dark-mode color matrices, and micro-interaction classes.',
    isUnlocked: true,
    dependencies: [],
    relatedProjects: ['quickgo', 'smit-quest-engine', 'mobile-relic-hud'],
    position: { x: 190, y: 550 },
    mobilePosition: { x: 20, y: 82 },
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'DESIGN',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 350,
    icon: 'animation',
    description:
      'Kinematic springs, declarative exit animations, layout transitions, gesture physics, and accessible prefers-reduced-motion choreography.',
    isUnlocked: true,
    dependencies: ['react'],
    relatedProjects: ['smit-quest-engine', 'mobile-relic-hud'],
    position: { x: 330, y: 550 },
    mobilePosition: { x: 38, y: 82 },
  },
  {
    id: 'aethelgard-design',
    name: 'Aethelgard System',
    category: 'DESIGN',
    level: 9,
    levelLabel: 'LEVEL 9 // MASTER',
    xpValue: 400,
    icon: 'palette',
    description:
      'The signature dark sci-fi design language of SMIT QUEST: The Abyss (#050505), Polished Gold (#f2ca50), rim-light borders, and Bodoni Moda typography.',
    isUnlocked: true,
    dependencies: ['tailwind'],
    relatedProjects: ['smit-quest-engine', 'mobile-relic-hud'],
    position: { x: 500, y: 560 },
    mobilePosition: { x: 50, y: 82 },
  },
  {
    id: 'ui-ux',
    name: 'UI/UX & Accessibility',
    category: 'DESIGN',
    level: 8,
    levelLabel: 'LEVEL 8 // ADVANCED',
    xpValue: 350,
    icon: 'design_services',
    description:
      'Tactile ergonomics, 44px+ touch targets, semantic WCAG keyboard accessibility, focus rings, and high-contrast editorial hierarchy.',
    isUnlocked: true,
    dependencies: ['aethelgard-design'],
    relatedProjects: ['quickgo', 'mobile-relic-hud'],
    position: { x: 810, y: 550 },
    mobilePosition: { x: 80, y: 82 },
  },
];

export const SKILL_CATEGORIES = [
  'ALL',
  'FRONTEND',
  'BACKEND',
  'DATABASE',
  'DEVOPS',
  'DESIGN',
  'AI',
];
