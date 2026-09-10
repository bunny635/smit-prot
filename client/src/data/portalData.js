/**
 * portalData.js — SMIT QUEST Final Portal & Contact Gateway Registry
 * Single source of truth for public contact endpoints, transmission parameters,
 * and mission conclusion metadata.
 *
 * NOTE ON DATA TRUTHFULNESS & VERIFICATION:
 * All contact information is strictly grounded in verified repository configurations:
 * - Email: smitghoghari9@gmail.com (Verified from repository Git commit history)
 * - GitHub: https://github.com/bunny635 (Verified from repository Git remote origin)
 * - LinkedIn: null (NOT CONFIGURED — not invented)
 * - Fictional coordinates (SEC-11 // NODE-77) serve strictly as Aethelgard simulation atmosphere.
 */

export const VERIFIED_CONTACT = {
  handle: 'ARCHIVIST_01',
  name: 'Smit Ghoghari',
  email: 'smitghoghari9@gmail.com',
  github: 'https://github.com/bunny635',
  linkedin: null, // Explicitly not configured in repository; no fake URL created
  status: 'ACCEPTING NEW EXPEDITIONS',
  sector: 'SEC-11 // NODE-77',
  coordinates: 'LAT: 00.000 / LON: 00.000 // VECTOR: FINAL',
  completedSectorsCount: 12,
  odysseyProgress: '100%',
};

export const PORTAL_TELEMETRY = {
  sector: 'SEC-11 // NODE-77',
  missionStatus: 'COMPLETE',
  archiveStatus: 'SYNCHRONIZED (12 SECTORS)',
  contactChannel: 'READY // CLIENT-SIDE ONLY',
  nextExpedition: 'OPEN FOR COLLABORATION',
  backendStatus: 'UNCONFIGURED (PHASE 15 BOUNDARY)',
};
