/**
 * inventoryData.js — SMIT QUEST Inventory Vault / Data Archives Data Registry
 * Ground truth relic records matching the Stitch design system archive.
 * Grounded strictly in verified developer technologies and skills.
 */

export const INVENTORY_CATEGORIES = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE'];

export const INVENTORY_ARTIFACTS = [
  {
    id: 'crys-react',
    code: 'CRYS-R34CT',
    title: 'React Crystal',
    tier: 'TIER_I',
    category: 'FRONTEND',
    shortDesc:
      'A highly volatile lattice structure capable of rendering complex state changes instantaneously. Radiates a pale blue aura.',
    lore:
      'A highly volatile lattice structure capable of rendering complex state changes instantaneously. Discovered in the early epochs of the Component Wars, it revolutionized front-end infrastructure. Radiates a pale blue aura when active dependencies are near.',
    type: 'Client State Lattice',
    bandwidth: '60 FPS Concurrent',
    stability: '99.4%',
    coordinates: 'POS: X:14.2 Y:9.0 Z:-2.4',
    scanStatus: 'SCAN: NOMINAL',
    geometryType: 'octahedron',
    primaryColor: '#61dafb',
    wireframeColor: '#f2ca50',
    relatedSkill: 'react',
    relatedProject: 'smit-quest-engine',
  },
  {
    id: 'nrg-js',
    code: 'NRG-J5',
    title: 'JavaScript Energy Core',
    tier: 'TIER_I',
    category: 'FRONTEND',
    shortDesc:
      'The primordial energy source. Unpredictable and wildly powerful, it powers nearly all artifacts in the chamber.',
    lore:
      'The primordial energy source. Unpredictable and wildly powerful, it powers nearly all artifacts in the chamber. Warning: Improper containment may lead to global scope pollution and memory leaks.',
    type: 'Event Loop Dynamo',
    bandwidth: 'Single-Threaded Non-Blocking',
    stability: '98.8%',
    coordinates: 'POS: X:-8.6 Y:12.4 Z:4.1',
    scanStatus: 'SCAN: HIGH ENERGY',
    geometryType: 'sphere',
    primaryColor: '#f7df1e',
    wireframeColor: '#f2ca50',
    relatedSkill: 'javascript',
    relatedProject: 'quickgo',
  },
  {
    id: 'srv-node',
    code: 'SRV-N0D3',
    title: 'Node Server Artifact',
    tier: 'TIER_I',
    category: 'BACKEND',
    shortDesc:
      'A heavy monolithic relay that processes vast streams of asynchronous data through its central conduit.',
    lore:
      'A heavy monolithic relay that processes vast streams of asynchronous data through its central conduit. Carved from a single block of silicon obsidian, it operates silently in the background void.',
    type: 'Asynchronous Stream Relay',
    bandwidth: '10K Req/sec Pipeline',
    stability: '99.9%',
    coordinates: 'POS: X:0.4 Y:3.2 Z:-15.0',
    scanStatus: 'SCAN: SYNCHRONIZED',
    geometryType: 'box',
    primaryColor: '#68a063',
    wireframeColor: '#f2ca50',
    relatedSkill: 'nodejs',
    relatedProject: 'nexus-gateway-api',
  },
  {
    id: 'sphr-mongo',
    code: 'SPHR-MD3',
    title: 'MongoDB Data Sphere',
    tier: 'TIER_I',
    category: 'DATABASE',
    shortDesc:
      'A fluid, schema-less containment orb where data fragments orbit in localized clusters.',
    lore:
      'A fluid, schema-less containment orb where data fragments orbit in localized clusters. It dynamically expands to accommodate vast accumulations of untyped artifacts.',
    type: 'BSON Document Cluster',
    bandwidth: 'Indexed Spatial Storage',
    stability: '99.2%',
    coordinates: 'POS: X:18.0 Y:-4.5 Z:8.2',
    scanStatus: 'SCAN: CLUSTER NOMINAL',
    geometryType: 'icosahedron',
    primaryColor: '#47a248',
    wireframeColor: '#f2ca50',
    relatedSkill: 'mongodb',
    relatedProject: 'quickgo',
  },
  {
    id: 'lat-three',
    code: 'LAT-3D01',
    title: 'Three.js Spatial Lattice',
    tier: 'TIER_I',
    category: 'FRONTEND',
    shortDesc:
      'A multi-dimensional optical matrix rendering depth projections and perspective geometry in real time.',
    lore:
      'A multi-dimensional optical matrix rendering depth projections and perspective geometry in real time across the canvas void. Unifies orbital camera kinematics with hardware-accelerated WebGL pipelines.',
    type: 'WebGL Spatial Matrix',
    bandwidth: 'Dynamic WebGL Buffer',
    stability: '99.7%',
    coordinates: 'POS: X:-12.1 Y:6.8 Z:-8.5',
    scanStatus: 'SCAN: 60 FPS LOCKED',
    geometryType: 'torusKnot',
    primaryColor: '#f2ca50',
    wireframeColor: '#ffe088',
    relatedSkill: 'threejs',
    relatedProject: 'smit-quest-engine',
  },
  {
    id: 'crc-tailwind',
    code: 'CRC-TLW2',
    title: 'Tailwind Token Crucible',
    tier: 'TIER_I',
    category: 'FRONTEND',
    shortDesc:
      'A high-density atomic utility crucible that condenses complex responsive styling into instantaneous utility tokens.',
    lore:
      'A high-density atomic utility crucible that condenses complex responsive styling into instantaneous utility tokens. Forged during the Great CSS Consolidation, ensuring zero styling runtime overhead.',
    type: 'Atomic Token Compiler',
    bandwidth: 'Zero Runtime Overhead',
    stability: '100%',
    coordinates: 'POS: X:7.5 Y:15.2 Z:1.8',
    scanStatus: 'SCAN: PURGED & COMPACT',
    geometryType: 'cylinder',
    primaryColor: '#38bdf8',
    wireframeColor: '#f2ca50',
    relatedSkill: 'tailwind',
    relatedProject: 'smit-quest-engine',
  },
];
