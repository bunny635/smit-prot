/**
 * education.js — SMIT QUEST Education Constellation & Academic Registry
 * Single source of truth for developer foundational knowledge pathways,
 * curriculum domains, and technical specializations.
 *
 * NOTE ON CONTENT TRUTHFULNESS & ACADEMIC RECORDS:
 * Hard Rule: No university degrees, schools, or academic marks are fabricated.
 * Formal university records and external certifications await official verification upload.
 * The records below represent self-directed computer science foundations, systems engineering
 * curriculum, continuous technical specializations, and portfolio-derived architectures
 * grounded in verified codebase implementations.
 * No record is marked as an externally verified credential.
 */

export const EDUCATION_DATA = [
  {
    id: 'ed-001',
    nodeCode: 'ED_NODE_01',
    title: 'Computer Science & Distributed Systems',
    institution: 'Independent Study // Systems Core',
    qualification: 'Foundational Curriculum Study',
    field: 'Computer Science & Software Architecture',
    level: 'FOUNDATION',
    icon: 'school',
    status: 'COMPLETED',
    verificationState: 'PORTFOLIO_KNOWLEDGE',
    dateLabel: 'FOUNDATIONAL STUDY',
    location: 'Aethelgard Codex // Systems Core',
    description:
      'Foundational curriculum immersion in distributed computing systems, computational complexity, object-oriented software design, and algorithmic optimization. Focus on decoupled client-server topologies.',
    focusAreas: [
      'Distributed Systems',
      'Advanced Algorithms',
      'Computer Networking',
      'Database Architecture',
      'Concurrent Programming',
    ],
    technologies: ['Algorithms', 'Data Structures', 'C++', 'Java', 'Distributed Systems'],
    achievements: [
      'Studied distributed telemetry indexing topologies and scalable stream processing models',
      'Analyzed concurrent state machine patterns and decoupled client-server protocols',
    ],
    coordinates: 'SEC-07 // ED-ALPHA.01',
    constellationPosition: { x: 22, y: 38 },
    mobilePosition: { x: 50, y: 15 },
    relatedSkills: ['javascript', 'nodejs'],
    relatedProjects: ['nexus-gateway-api'],
    isFeatured: true,
  },
  {
    id: 'ed-002',
    nodeCode: 'ED_NODE_02',
    title: 'Software Engineering & Computing Foundations',
    institution: 'Independent Study // Computing Core',
    qualification: 'Foundational Curriculum Study',
    field: 'Software Engineering & Informatics',
    level: 'FOUNDATION',
    icon: 'history_edu',
    status: 'COMPLETED',
    verificationState: 'PORTFOLIO_KNOWLEDGE',
    dateLabel: 'FOUNDATIONAL STUDY',
    location: 'Aethelgard Codex // Computing Core',
    description:
      'Foundational computing curriculum covering discrete mathematics, data structures, operating systems, relational database normalization, and web protocol engineering.',
    focusAreas: [
      'Software Architecture',
      'Discrete Mathematics',
      'Operating Systems',
      'Relational Database Systems (SQL)',
      'Object-Oriented Design (OOD)',
    ],
    technologies: ['JavaScript', 'SQL', 'C/C++', 'Software Engineering', 'Linux'],
    achievements: [
      'Applied discrete mathematics and data structure analysis to systems engineering',
      'Studied operating system process scheduling, memory virtualization, and relational SQL normalization',
    ],
    coordinates: 'SEC-07 // ED-BETA.02',
    constellationPosition: { x: 50, y: 22 },
    mobilePosition: { x: 50, y: 38 },
    relatedSkills: ['javascript', 'react'],
    relatedProjects: ['quickgo'],
    isFeatured: true,
  },
  {
    id: 'ed-003',
    nodeCode: 'ED_NODE_03',
    title: 'Cloud Solutions Architecture & Infrastructure',
    institution: 'Portfolio Architecture // Cloud Practice',
    qualification: 'Applied Architecture Track',
    field: 'Cloud Infrastructure & High Availability',
    level: 'ARCHITECTURE',
    icon: 'cloud',
    status: 'ACTIVE',
    verificationState: 'PORTFOLIO_KNOWLEDGE',
    dateLabel: 'ACTIVE PRACTICE',
    location: 'Aethelgard Codex // Cloud Sector',
    description:
      'Applied cloud systems practice exploring multi-tier resilient architectures, VPC networking isolation, serverless microservices, and storage tiering.',
    focusAreas: [
      'Cloud Architecture',
      'High Availability',
      'VPC Networking',
      'Microservice Deployment',
      'Security & IAM Compliance',
    ],
    technologies: ['Cloud Computing', 'Docker', 'REST APIs', 'Serverless', 'DevOps'],
    achievements: [
      'Architected containerized microservice gateways with isolated networking and secure ingress',
      'Configured automated deployment environments with least-privilege credential controls',
    ],
    coordinates: 'SEC-07 // ED-GAMMA.03',
    constellationPosition: { x: 78, y: 44 },
    mobilePosition: { x: 50, y: 62 },
    relatedSkills: ['nodejs', 'mongodb'],
    relatedProjects: ['nexus-gateway-api'],
    isFeatured: true,
  },
  {
    id: 'ed-004',
    nodeCode: 'ED_NODE_04',
    title: 'Advanced React & Modern Web Systems',
    institution: 'Technical Specialization // Web Systems',
    qualification: 'Specialized Practice Track',
    field: 'Client-Side Systems & State Choreography',
    level: 'SPECIALIZATION',
    icon: 'terminal',
    status: 'ACTIVE',
    verificationState: 'PORTFOLIO_KNOWLEDGE',
    dateLabel: 'ACTIVE PRACTICE',
    location: 'Aethelgard Codex // Frontend Sector',
    description:
      'Advanced technical study of concurrent rendering models, custom state telemetry hooks, memory profiling, virtual DOM optimization, and tactile ergonomics for modern reactive web applications.',
    focusAreas: [
      'Concurrent React 18',
      'Component Lifecycles & Profiling',
      'Custom Hook Architectures',
      'Framer Motion Choreography',
      'Accessibility & WCAG 2.1 AA',
    ],
    technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Web Performance'],
    achievements: [
      'Implemented concurrent React 18 rendering lifecycles with custom state telemetry hooks',
      'Architected accessible keyboard navigation rings and screen-reader telemetry nodes',
    ],
    coordinates: 'SEC-07 // ED-DELTA.04',
    constellationPosition: { x: 62, y: 78 },
    mobilePosition: { x: 50, y: 82 },
    relatedSkills: ['react', 'tailwind'],
    relatedProjects: ['smit-quest-engine', 'mobile-relic-hud'],
    isFeatured: false,
  },
  {
    id: 'ed-005',
    nodeCode: 'ED_NODE_05',
    title: 'Visual Computing & Human-Computer Interface',
    institution: 'Design Practice // Interface Lab',
    qualification: 'Foundational Design Study',
    field: 'UI/UX Ergonomics & Interaction Design',
    level: 'SPECIALIZATION',
    icon: 'code',
    status: 'COMPLETED',
    verificationState: 'PORTFOLIO_KNOWLEDGE',
    dateLabel: 'PORTFOLIO PRACTICE',
    location: 'Aethelgard Codex // Design Sector',
    description:
      'Foundational study in visual hierarchy, typography scales, touch targets, contrast ratios, and interactive prototyping paradigms.',
    focusAreas: [
      'Typography & Layout Systems',
      'Color Theory & Dark Mode Contrast',
      'Tactile Touch Ergonomics',
      'User Flow Architecture',
    ],
    technologies: ['UI/UX Design', 'Design Systems', 'Prototyping', 'CSS3'],
    achievements: [
      'Designed high-contrast dark mode interfaces adhering to WCAG AA color accessibility standards',
    ],
    coordinates: 'SEC-07 // ED-EPSILON.05',
    constellationPosition: { x: 28, y: 72 },
    mobilePosition: { x: 50, y: 95 },
    relatedSkills: ['tailwind'],
    relatedProjects: ['mobile-relic-hud'],
    isFeatured: false,
  },
];

/**
 * Knowledge pathway connections linking academic nodes in the constellation
 */
export const EDUCATION_CONNECTIONS = [
  { from: 'ed-002', to: 'ed-001', relationship: 'FOUNDATION_TO_SYSTEMS' },
  { from: 'ed-002', to: 'ed-003', relationship: 'CORE_TO_INFRASTRUCTURE' },
  { from: 'ed-002', to: 'ed-005', relationship: 'CORE_TO_DESIGN_FOUNDATION' },
  { from: 'ed-001', to: 'ed-003', relationship: 'SYSTEMS_TO_CLOUD_ARCHITECTURE' },
  { from: 'ed-003', to: 'ed-004', relationship: 'INFRASTRUCTURE_TO_FRONTEND_SYSTEMS' },
  { from: 'ed-005', to: 'ed-004', relationship: 'DESIGN_TO_REACTIVE_PATTERNS' },
];

export const EDUCATION_CATEGORIES = [
  'ALL',
  'FOUNDATIONS',
  'ARCHITECTURE',
  'SPECIALIZATIONS',
];

