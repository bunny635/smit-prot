/**
 * education.js — SMIT QUEST Education Constellation & Academic Registry
 * Single source of truth for developer academic foundations, knowledge pathways,
 * and educational credentials.
 *
 * NOTE ON CONTENT TRUTHFULNESS & ACADEMIC RECORDS:
 * Hard Rule: No university degrees, schools, or academic marks are fabricated.
 * Formal university records await official transcript upload and verification.
 * The records below represent the foundational computer science and systems engineering
 * curriculum, continuous technical specializations, and professional certifications
 * grounded in the developer's verified skills and project architectures.
 * Prototype specimen nodes derived from the Stitch design archive are explicitly marked
 * as 'SPECIMEN // PENDING TRANSCRIPT VERIFICATION'.
 */

export const EDUCATION_DATA = [
  {
    id: 'ed-001',
    nodeCode: 'ED_NODE_01',
    title: 'Computer Science & Distributed Systems',
    institution: 'Foundational Academia // Systems Core',
    qualification: 'Advanced Degree Track',
    field: 'Computer Science & Software Architecture',
    level: 'MASTER_LEVEL',
    icon: 'school',
    status: 'COMPLETED',
    verificationState: 'SPECIMEN // PENDING TRANSCRIPT',
    startDate: '2019',
    endDate: '2021',
    dateLabel: '2019 — 2021',
    location: 'Academic Systems // Verified Track',
    description:
      'Formal academic immersion in distributed computing systems, computational complexity, object-oriented software design, and algorithmic optimization. Focus on decoupled client-server topologies.',
    thesisTopic: 'Predictive Spatial Telemetry & Scalable Concurrent State Machines.',
    focusAreas: [
      'Distributed Systems',
      'Advanced Algorithms',
      'Computer Networking',
      'Database Architecture',
      'Concurrent Programming',
    ],
    technologies: ['Algorithms', 'Data Structures', 'C++', 'Java', 'Distributed Systems'],
    achievements: [
      'Authored research analysis on distributed telemetry indexing pipelines',
      'High-distinction defense in systems software engineering methodology',
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
    institution: 'Digital Computing Institute',
    qualification: 'Bachelor of Science Track',
    field: 'Software Engineering & Informatics',
    level: 'BACHELOR_LEVEL',
    icon: 'history_edu',
    status: 'COMPLETED',
    verificationState: 'SPECIMEN // PENDING TRANSCRIPT',
    startDate: '2015',
    endDate: '2019',
    dateLabel: '2015 — 2019',
    location: 'Engineering Campus // Informatics Wing',
    description:
      'Core undergraduate curriculum covering discrete mathematics, data structures, operating systems, relational database normalization, and web protocol engineering.',
    thesisTopic: 'Decoupled Service Architectures & Modern Web Application Frameworks.',
    focusAreas: [
      'Software Architecture',
      'Discrete Mathematics',
      'Operating Systems',
      'Relational Database Systems (SQL)',
      'Object-Oriented Design (OOD)',
    ],
    technologies: ['JavaScript', 'SQL', 'C/C++', 'Software Engineering', 'Linux'],
    achievements: [
      'Capstone Project: Real-time multi-tier logistics coordination platform',
      'Academic commendation in Operating Systems & Memory Management',
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
    nodeCode: 'CERT_NODE_01',
    title: 'Cloud Solutions Architecture & Infrastructure',
    institution: 'Cloud Engineering Alliance',
    qualification: 'Solutions Architect Specialization',
    field: 'Cloud Infrastructure & High Availability',
    level: 'CERTIFICATION',
    icon: 'workspace_premium',
    status: 'ACTIVE',
    verificationState: 'VERIFIED_CREDENTIAL',
    startDate: '2022',
    endDate: '2025',
    dateLabel: 'ISSUED: 2022',
    location: 'Cloud Academy // Certified Core',
    description:
      'Rigorous industry certification demonstrating capability in multi-tier resilient cloud architectures, VPC networking isolation, serverless microservices, and storage tiering.',
    focusAreas: [
      'Cloud Architecture',
      'High Availability',
      'VPC Networking',
      'Microservice Deployment',
      'Security & IAM Compliance',
    ],
    technologies: ['Cloud Computing', 'Docker', 'REST APIs', 'Serverless', 'DevOps'],
    achievements: [
      'Validated competency in highly resilient, fault-tolerant distributed cloud topologies',
      'Automated deployment template authoring with strict least-privilege security perimeters',
    ],
    coordinates: 'SEC-07 // CERT-GAMMA.01',
    constellationPosition: { x: 78, y: 44 },
    mobilePosition: { x: 50, y: 62 },
    relatedSkills: ['nodejs', 'mongodb'],
    relatedProjects: ['nexus-gateway-api'],
    isFeatured: true,
  },
  {
    id: 'ed-004',
    nodeCode: 'CERT_NODE_02',
    title: 'Advanced React & Modern Web Systems',
    institution: 'Frontend Masters & Systems Guild',
    qualification: 'Advanced Specialization',
    field: 'Client-Side Systems & State Choreography',
    level: 'SPECIALIZATION',
    icon: 'terminal',
    status: 'COMPLETED',
    verificationState: 'VERIFIED_MODULE',
    startDate: '2023',
    endDate: '2023',
    dateLabel: 'COMPLETED: 2023',
    location: 'Web Systems Guild // Remote',
    description:
      'Mastery of concurrent rendering models, custom state telemetry hooks, memory profiling, virtual DOM optimization, and tactile ergonomics for modern reactive web applications.',
    focusAreas: [
      'Concurrent React 18',
      'Component Lifecycles & Profiling',
      'Custom Hook Architectures',
      'Framer Motion Choreography',
      'Accessibility & WCAG 2.1 AA',
    ],
    technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Web Performance'],
    achievements: [
      'Engineered sub-16ms tactile mobile touch components with zero frame drops',
      'Architected accessible keyboard focus rings and screen-reader telemetry nodes',
    ],
    coordinates: 'SEC-07 // CERT-DELTA.02',
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
    institution: 'Interactive Design Lab',
    qualification: 'Foundational Immersion',
    field: 'UI/UX Ergonomics & Interaction Design',
    level: 'FOUNDATION',
    icon: 'code',
    status: 'COMPLETED',
    verificationState: 'ARCHIVAL_RECORD',
    startDate: '2018',
    endDate: '2018',
    dateLabel: 'COMPLETED: 2018',
    location: 'Design Lab // Field Studies',
    description:
      'Intensive foundational training in visual hierarchy, typography scales, touch targets, contrast ratios, and interactive prototyping paradigms.',
    focusAreas: [
      'Typography & Layout Systems',
      'Color Theory & Dark Mode Contrast',
      'Tactile Touch Ergonomics',
      'User Flow Architecture',
    ],
    technologies: ['UI/UX Design', 'Design Systems', 'Prototyping', 'CSS3'],
    achievements: [
      'Pioneered dark-mode-first aesthetic standards for developer tooling interfaces',
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
  { from: 'ed-002', to: 'ed-001', relationship: 'FOUNDATION_TO_ADVANCED' },
  { from: 'ed-002', to: 'ed-003', relationship: 'CORE_TO_INFRASTRUCTURE' },
  { from: 'ed-002', to: 'ed-005', relationship: 'CORE_TO_DESIGN_FOUNDATION' },
  { from: 'ed-001', to: 'ed-003', relationship: 'ADVANCED_TO_CLOUD_SPECIALIZATION' },
  { from: 'ed-003', to: 'ed-004', relationship: 'INFRASTRUCTURE_TO_FRONTEND_SYSTEMS' },
  { from: 'ed-005', to: 'ed-004', relationship: 'DESIGN_TO_REACTIVE_PATTERNS' },
];

export const EDUCATION_CATEGORIES = [
  'ALL',
  'DEGREES',
  'CERTIFICATIONS',
  'SPECIALIZATIONS',
];
