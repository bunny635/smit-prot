import { Experiment } from "@/types/experiment";

export const experimentsData: Experiment[] = [
  {
    id: "exp-001",
    slug: "raymarched-sockets",
    experimentNumber: 22,
    title: "Real-Time Raymarched Sockets",
    status: "EXPERIMENTAL",
    description: "Single-pass volumetric shadow tracing utilizing low-discrepancy Halton sequences. Generates soft contact shadows for floating specimen lightboxes under dynamic point sources.",
    technologies: [
      { name: "WGSL Compute" },
      { name: "Shadow Rays" },
      { name: "Archival Lightbox" },
    ],
    previewMedia: {
      src: "/images/experiments/raymarched-sockets.jpg",
      alt: "Raymarched Sockets WebGPU experiment",
      type: "image"
    },
    featured: true,
    sortOrder: 10,
    question: "Can we achieve soft volumetric shadows without relying on multi-pass blurring?",
    approach: "Explored a raymarching approach, stepping through a signed distance field (SDF) representing the museum pedestals, rather than rendering traditional polygon shadows.",
    result: "The compute-shader pipeline successfully renders distinct, soft-edged contact shadows. Noise artifacting is present but visually integrates with the museum's grain-heavy aesthetic.",
    observations: "The visual noise inherently produced by the Halton sequence feels less like a rendering defect and more like physical film grain, adding an unexpected layer of analog texture to the digital specimen."
  },
  {
    id: "exp-002",
    slug: "spectral-diffusion",
    experimentNumber: 18,
    title: "Spectral Diffusion Lattice",
    status: "PROTOTYPE",
    description: "Web-based particle simulation exploring non-linear fluid dynamics within strict architectural boundary constraints.",
    technologies: [
      { name: "WebGL" },
      { name: "Particle System" },
      { name: "Fluid Dynamics" },
    ],
    previewMedia: {
      src: "/images/experiments/spectral-diffusion.jpg",
      alt: "Spectral Diffusion WebGL experiment",
      type: "image"
    },
    featured: false,
    sortOrder: 20,
    question: "How do simulated particle systems react to programmatic containment fields resembling museum gallery walls?",
    approach: "Designed a shader-driven simulation where vertices behave as autonomous light emitters. Walls and invisible obstacles are modeled as infinite-mass static boundaries pushing back on the fluid.",
    result: "Particles flow organically around solid objects, exhibiting localized vortex formation when passing through narrow structural corridors.",
    observations: "Human spatial cognition perceives denser clusters of warm gold points as significantly heavier than scattered vertices, demonstrating that non-physical weight can be modeled purely via localized density and chromatic shifts."
  }
];
