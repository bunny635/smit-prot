/**
 * voidArchive.js — SMIT QUEST The Void / Hidden Archive Data Registry
 * Single source of truth for restricted records, classified architectural fragments,
 * and unresolved system signals.
 *
 * NOTE ON CONTENT TRUTHFULNESS & LORE:
 * All technical references are grounded 1-to-1 in verified repository artifacts
 * (experiments.js, projects.js, system console telemetry).
 * Fictional coordinates (e.g. SECTOR-VOID // NODE-99, RECORD_0X9A) and telemetry
 * serve strictly as Aethelgard simulation atmosphere. No fake credentials,
 * fake employers, fake clients, or fake performance numbers are introduced.
 *
 * Grounded Artifacts:
 * - rec-0x9a -> exp-001 (Aethelgard Shader Core GLSL noise & light refraction)
 * - rec-0x4f -> exp-005 / quest-005 (Nexus Gateway API JWT perimeter & rate limiter)
 * - rec-0x7b -> exp-002 / quest-002 (Spatial 3D Canvas Engine & orbital camera kinematics)
 * - rec-0x1c -> exp-004 / quest-003 (Archival Codex CLI tooling & JSON logging)
 * - rec-0xff -> Interface Lore (Final Portal expedition horizon to Phase 13)
 */

export const VOID_RECORDS = [
  {
    id: 'rec-0x9a',
    code: 'RECORD_0X9A',
    title: 'THE OBSIDIAN SHADER RUNTIME',
    category: 'SHADER',
    status: 'DECRYPTED',
    securityLevel: 'CLASSIFIED // LEVEL-5',
    description:
      'Beyond standard DOM render pipelines lies the low-level GPU rasterization core. Procedural simplex noise and dynamic light refraction authored directly in GLSL fragment shaders.',
    summary:
      'Custom GPU-accelerated vertex and fragment shaders generating mathematical procedural noise and golden light refraction rings without blocking the main event loop.',
    narrative:
      'Analysis reveals that DOM-based transformations reach execution bottlenecks when rendering complex particle fields. The obsidian runtime operates directly via raw GLSL mathematical buffers dispatched to WebGL hardware texture units, delivering 60fps procedural energy diffusion.',
    technologies: ['GLSL', 'WebGL', 'Three.js', 'Procedural Math'],
    sourceType: 'EXPERIMENT',
    sourceId: 'exp-001',
    relatedProject: 'aethelgard-shader-core',
    relatedExperiment: 'exp-001',
    coordinates: 'SEC-05 // LAB-01',
    isLocked: false,
    isDecoded: true,
    evidenceType: 'VERIFIED_ARTIFACT',
    realArtifact: 'Aethelgard Shader Core (EXP-001)',
    anomalyDetected: true,
    signalFrequency: '0.154 THz',
    depth: 'MAX // -15.0 COORD',
  },
  {
    id: 'rec-0x4f',
    code: 'RECORD_0X4F',
    title: 'STATELESS PERIMETER ARCHITECTURE',
    category: 'SECURITY',
    status: 'ENCRYPTED',
    securityLevel: 'RESTRICTED // KERNEL-SEC',
    description:
      'Decoupled stateless token validation perimeter protocol designed to isolate core transaction layers from untrusted client execution environments.',
    summary:
      'Session-less authentication architecture employing cryptographically signed JWTs alongside token-bucket rate limiting middleware to safeguard MongoDB document stores.',
    narrative:
      'Security architecture isolating API routes using automated authorization guards, Helmet header sanitization, and isolated route middleware. Prevents unauthenticated request traversal prior to data serialization pipelines.',
    technologies: ['Node.js', 'Express', 'JWT Auth', 'MongoDB'],
    sourceType: 'EXPERIMENT',
    sourceId: 'exp-005',
    relatedProject: 'nexus-gateway-api',
    relatedExperiment: 'exp-005',
    coordinates: 'SEC-05 // LAB-05',
    isLocked: true,
    isDecoded: false,
    evidenceType: 'VERIFIED_ARTIFACT',
    realArtifact: 'Nexus Gateway Token Perimeter (EXP-005)',
    anomalyDetected: false,
    signalFrequency: '0.412 THz',
    depth: 'HIGH // -12.4 COORD',
  },
  {
    id: 'rec-0x7b',
    code: 'RECORD_0X7B',
    title: 'SPATIAL WEB RUNTIME HORIZON',
    category: 'SPATIAL',
    status: 'ENCRYPTED',
    securityLevel: 'RESTRICTED // DIMENSION-3D',
    description:
      'Decoupled scene graphs and kinematic orbital camera matrices binding WebGL coordinate spaces directly to responsive CSS viewport bounds.',
    summary:
      'Spatial web portfolio engine combining React Three Fiber, custom scene graphs, and orbital camera physics with responsive 2D canvas fallback subsystems.',
    narrative:
      'Explores the boundary where 2D web layouts fuse with 3D spatial environments. By normalizing raycast projection vectors against variable aspect ratios, the canvas maintains tactile spatial cohesion across ultrawide monitors and compact mobile screens alike.',
    technologies: ['React 18', 'Three.js', 'React Three Fiber', 'Tailwind CSS'],
    sourceType: 'EXPERIMENT',
    sourceId: 'exp-002',
    relatedProject: 'smit-quest-engine',
    relatedExperiment: 'exp-002',
    coordinates: 'SEC-05 // LAB-02',
    isLocked: true,
    isDecoded: false,
    evidenceType: 'VERIFIED_ARTIFACT',
    realArtifact: 'Spatial 3D Canvas Engine (EXP-002)',
    anomalyDetected: false,
    signalFrequency: '0.781 THz',
    depth: 'HIGH // -10.8 COORD',
  },
  {
    id: 'rec-0x1c',
    code: 'RECORD_0X1C',
    title: 'ARCHIVAL CLI TOOLCHAIN & DIAGNOSTICS',
    category: 'TOOLING',
    status: 'ENCRYPTED',
    securityLevel: 'CONFIDENTIAL // ARCHIVE-TOOL',
    description:
      'Command-line developer utility and archive management suite for automated scaffolding, code analytics, and project synchronization.',
    summary:
      'Interactive terminal application engineered with modular command parsers, structured JSON activity logging, and rapid repository scaffolding routines.',
    narrative:
      'Mitigates manual configuration friction and repository drift through interactive command prompts, structured diagnostic logging, and automated template synthesis routines.',
    technologies: ['Node.js', 'JavaScript', 'CLI Engine', 'Git'],
    sourceType: 'PROJECT',
    sourceId: 'quest-003',
    relatedProject: 'archival-codex-cli',
    relatedExperiment: 'exp-004',
    coordinates: 'SEC-05 // LAB-04',
    isLocked: true,
    isDecoded: false,
    evidenceType: 'VERIFIED_ARTIFACT',
    realArtifact: 'Archival Codex CLI (QUEST-003 / EXP-004)',
    anomalyDetected: false,
    signalFrequency: '0.923 THz',
    depth: 'MID // -08.2 COORD',
  },
  {
    id: 'rec-0xff',
    code: 'RECORD_0XFF',
    title: 'THE GATEWAY HORIZON',
    category: 'INTERFACE_LORE',
    status: 'ENCRYPTED',
    securityLevel: 'ANOMALOUS // HORIZON-APERTURE',
    description:
      'The terminal horizon of SMIT QUEST. A dimensional contact aperture linking the simulation to external communication channels.',
    summary:
      '[EXPLICIT INTERFACE LORE] All preceding sectors—from Origin Tower to The Void—converge into a unified destination vector for Phase 13 conclusion.',
    narrative:
      'Classified simulation mythology: having traversed the depths of the memory archive and experimental labs, the archivist approaches the dimensional threshold where digital artifacts dissolve into real-world collaboration and engineering partnerships.',
    technologies: ['Simulation Protocol', 'Phase 13 Horizon', 'Transmission Gateway'],
    sourceType: 'INTERFACE_LORE',
    sourceId: 'interface-portal-bridge',
    relatedProject: null,
    relatedExperiment: null,
    coordinates: 'LAT: 00.000 / LON: 00.000',
    isLocked: true,
    isDecoded: false,
    evidenceType: 'INTERFACE_LORE',
    realArtifact: null,
    anomalyDetected: true,
    signalFrequency: '1.420 THz',
    depth: 'ZERO-POINT // HORIZON',
  },
];

export const VOID_TELEMETRY = {
  sector: 'SECTOR-VOID',
  node: 'NODE-99',
  coordinates: 'LAT: 00.000 / LON: 00.000',
  depth: 'DEPTH: MAXIMUM (-15.0)',
  signalIntegrity: 'UNRESOLVED',
  accessLevel: 'RESTRICTED // ROOT_ANOMALY',
  encryptionStandard: 'QUANTUM-OBSIDIAN // 4096-BIT',
  nextGateway: 'FINAL PORTAL (/portal)',
};

/**
 * Helper to compute dynamic statistics from records without hardcoding counts
 */
export function getVoidArchiveStats(records = VOID_RECORDS) {
  const recordsCount = records.length;
  const verifiedCount = records.filter((r) => r.evidenceType === 'VERIFIED_ARTIFACT').length;
  const loreCount = records.filter((r) => r.evidenceType === 'INTERFACE_LORE').length;
  const lockedCount = records.filter((r) => r.isLocked).length;
  const decodedCount = records.filter((r) => r.isDecoded).length;
  const anomalyCount = records.filter((r) => r.anomalyDetected).length;

  return {
    recordsCount,
    verifiedCount,
    loreCount,
    lockedCount,
    decodedCount,
    anomalyCount,
  };
}
