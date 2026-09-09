/**
 * experiments.js — SMIT QUEST Forbidden Lab & Experimental Core Data Registry
 * Single source of truth for technical prototypes, WebGL shaders, spatial computing,
 * and experimental architectural research.
 *
 * NOTE ON CONTENT TRUTHFULNESS:
 * All records represent verified development experiments, shader prototypes,
 * and technical investigations directly grounded in the repository codebase.
 * Coordinates and Experiment Codes (e.g., EXP-001, SEC-05 // LAB-01) are Aethelgard interface/system metadata.
 */

export const EXPERIMENTS_DATA = [
  {
    id: 'exp-001',
    code: 'EXP-001',
    title: 'Aethelgard Shader Core',
    subtitle: 'PROCEDURAL SIMPLEX NOISE & LIGHT REFRACTION',
    category: 'SHADER',
    status: 'COMPLETE',
    difficulty: 5,
    xpReward: 550,
    description:
      'Mathematical procedural noise generation, golden particle dust fields, and cosmic arena floor GLSL shaders for immersive visual computing.',
    objective:
      'Author GPU-accelerated vertex and fragment shaders computing real-time procedural simplex noise and dynamic light refraction rings without bottlenecking the main thread.',
    result:
      'Proof of concept validated with 60fps GPU execution on WebGL canvas with procedural gold energy diffusion and dynamic mouse/viewport coordinates.',
    technologies: ['GLSL', 'WebGL', 'Three.js', 'Math / Shaders'],
    experimentType: 'SHADER / GRAPHICS',
    date: '2024.01',
    coordinates: 'SEC-05 // LAB-01',
    isFeatured: false,
    relatedQuestSlug: 'aethelgard-shader-core',
    githubUrl: 'https://github.com',
    liveUrl: null,
  },
  {
    id: 'exp-002',
    code: 'EXP-002',
    title: 'Spatial 3D Canvas Engine',
    subtitle: 'ORBITAL KINEMATICS & PROCEDURAL PARTICLES',
    category: 'SPATIAL',
    status: 'ACTIVE',
    difficulty: 5,
    xpReward: 650,
    description:
      'Spatial web portfolio engine combining React Three Fiber, custom scene graphs, and orbital camera physics for gamified architectural exploration.',
    objective:
      'Construct an interconnected 3D cosmic world hub with orbital camera kinematics, glowing energy connections, dynamic HUD telemetry, and responsive canvas fallback subsystems.',
    result:
      'Implementation active with real-time destination node coordinates, orbital raycasting, and automated WebGL context restoration.',
    technologies: ['React 18', 'Three.js', 'React Three Fiber', 'WebGL', 'Tailwind CSS'],
    experimentType: 'SPATIAL COMPUTING',
    date: '2024.04',
    coordinates: 'SEC-05 // LAB-02',
    isFeatured: true,
    relatedQuestSlug: 'smit-quest-engine',
    githubUrl: 'https://github.com',
    liveUrl: null,
  },
  {
    id: 'exp-003',
    code: 'EXP-003',
    title: 'Mobile Relic Touch HUD',
    subtitle: 'ATMOSPHERIC MOBILE TOUCH INTERACTION',
    category: 'UI/UX',
    status: 'ACTIVE',
    difficulty: 3,
    xpReward: 400,
    description:
      'High-precision mobile tactile navigation interface designed for compact viewports with gesture-based bottom sheets and responsive HUD controls.',
    objective:
      'Eliminate mobile navigation friction through hardware-accelerated gesture carousels, 44px+ touch targets, and frosted glass bottom sheets.',
    result:
      'Tactile ergonomics prototype completed with smooth spring physics and responsive drawer snap points across mobile devices.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Touch Events'],
    experimentType: 'UI/UX ERGONOMICS',
    date: '2024.02',
    coordinates: 'SEC-05 // LAB-03',
    isFeatured: false,
    relatedQuestSlug: 'mobile-relic-hud',
    githubUrl: 'https://github.com',
    liveUrl: null,
  },
  {
    id: 'exp-004',
    code: 'EXP-004',
    title: 'Archival Terminal Codex',
    subtitle: 'AUTOMATED SCAFFOLDING & TELEMETRY ENGINE',
    category: 'TOOLING',
    status: 'COMPLETE',
    difficulty: 3,
    xpReward: 350,
    description:
      'Command-line developer utility and archive management suite for automated scaffolding, code analytics, and project synchronization.',
    objective:
      'Mitigate manual setup friction and repository drift by engineering interactive command prompts, structured JSON telemetry loggers, and automated scaffolding routines.',
    result:
      'CLI toolchain prototype completed with automated branch verification and modular template synthesis routines.',
    technologies: ['Node.js', 'JavaScript', 'CLI Engine', 'Git'],
    experimentType: 'DEVELOPER TOOLING',
    date: '2023.11',
    coordinates: 'SEC-05 // LAB-04',
    isFeatured: false,
    relatedQuestSlug: 'archival-codex-cli',
    githubUrl: 'https://github.com',
    liveUrl: null,
  },
  {
    id: 'exp-005',
    code: 'EXP-005',
    title: 'Nexus Gateway Token Perimeter',
    subtitle: 'STATELESS JWT VERIFICATION & RATE LIMITER',
    category: 'SECURITY',
    status: 'COMPLETE',
    difficulty: 4,
    xpReward: 450,
    description:
      'High-throughput REST API gateway implementing token-based authentication perimeters, rate limiting, and structured MongoDB data modeling.',
    objective:
      'Validate decoupled stateless token validation, cryptographic password hashing, role-based access control (RBAC), and token-bucket rate limiting against high-velocity traffic.',
    result:
      'Security architecture validated with automated authorization guards, Helmet header sanitization, and isolated route middleware.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth'],
    experimentType: 'BACKEND SECURITY',
    date: '2023.09',
    coordinates: 'SEC-05 // LAB-05',
    isFeatured: false,
    relatedQuestSlug: 'nexus-gateway-api',
    githubUrl: 'https://github.com',
    liveUrl: null,
  },
];

export const LAB_CATEGORIES = ['ALL', 'SHADER', 'SPATIAL', 'UI/UX', 'TOOLING', 'SECURITY'];
export const LAB_STATUS_FILTERS = ['ALL', 'ACTIVE', 'COMPLETE', 'IN_PROGRESS'];
