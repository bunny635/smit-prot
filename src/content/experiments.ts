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
  },
  {
    id: "exp-002",
    slug: "spectral-diffusion",
    experimentNumber: 18,
    title: "Spectral Diffusion Lattice",
    status: "PROTOTYPE",
    description: "Multi-threaded WebGL particle simulation exploring non-linear fluid dynamics within a strict architectural bounds constraint.",
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
  }
];
