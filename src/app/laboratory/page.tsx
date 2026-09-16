import React from "react";
import { getExperiments } from "@/lib/experiment-api";
import { ExperimentCard } from "@/components/laboratory/ExperimentCard";

export const metadata = {
  title: "Laboratory | The Digital Museum",
  description: "Technical proofs, prototypes, and unpolished computational sketches.",
};

export default function LaboratoryPage() {
  const experiments = getExperiments();
  
  return (
    <div className="relative min-h-[calc(100vh-72px)] w-full overflow-x-hidden bg-museum-black selection:bg-museum-gold selection:text-museum-black">
      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 pt-16 md:pt-24 pb-20">
        
        {/* Header Section */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="label-caps uppercase tracking-widest text-museum-gold block mb-4">
              LABORATORY // EXPERIMENTAL WING
            </span>
            <h1 className="heading-lg md:display-lg text-museum-white mb-6">
              Research &amp; <br />
              <span className="text-museum-muted">Development</span>
            </h1>
            <p className="body-lg font-light text-museum-muted leading-relaxed">
              Technical proofs, prototypes, and unpolished computational sketches. The repository for volatile WebGL systems, non-linear shaders, and structural UI concepts before formal accession.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-6 border border-museum-border bg-museum-surface rounded-[6px] md:min-w-[280px]">
            <div className="flex items-center justify-between border-b border-museum-border/60 pb-2">
              <span className="label-metadata text-museum-dim">STATUS</span>
              <span className="label-metadata text-museum-gold animate-pulse flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-museum-gold"></span>
                ACTIVE
              </span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="label-metadata text-museum-dim">LOGGED EXPERIMENTS</span>
              <span className="font-mono text-sm text-museum-white">{String(experiments.length).padStart(3, '0')}</span>
            </div>
          </div>
        </header>

        {/* Experiments Grid */}
        {experiments.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {experiments.map((exp) => (
              <ExperimentCard
                key={exp.id}
                experimentNumber={exp.experimentNumber}
                title={exp.title}
                status={exp.status}
                description={exp.description}
                technology={exp.technologies.map(t => t.name)}
                imageUrl={exp.previewMedia?.src}
                runHref={`/laboratory/${exp.slug}`}
              />
            ))}
          </section>
        ) : (
          <section className="py-24 border border-museum-border bg-museum-surface/30 rounded-[6px] flex flex-col items-center justify-center text-center px-6">
            <span className="label-metadata text-museum-gold mb-4">000 LOGGED</span>
            <h2 className="heading-md text-museum-white mb-2">No Active Experiments</h2>
            <p className="body-md text-museum-muted">The research wing is currently re-calibrating.</p>
          </section>
        )}

        {/* Archival Research Notes & System Telemetry Drawer */}
        <section className="border border-museum-border bg-museum-charcoal rounded-[6px] p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-museum-border">
            <div>
              <span className="label-caps tracking-widest uppercase text-museum-gold block mb-1">
                LABORATORY PROTOCOL // COMPLIANCE SPECIFICATION
              </span>
              <h3 className="heading-sm text-museum-white">
                Research Archival Ledger &amp; Computational Rig Requirements
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="label-metadata text-museum-dim font-mono">COMMIT: c98fa42-prod</span>
              <button className="px-4 py-2 rounded-[6px] border border-museum-border text-museum-muted hover:text-museum-white hover:border-museum-muted label-caps tracking-widest uppercase transition-colors duration-200 focus-ring">
                Download Citations (RIS)
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            <div>
              <h4 className="label-caps tracking-wider uppercase text-museum-white mb-2">Minimum Compute Tier</h4>
              <p className="label-metadata text-museum-dim leading-relaxed">
                WebGPU Tier 2 Compatible Browser. Hardware FP16 shader float support mandated for Experiment 018 tensor fields.
              </p>
            </div>
            <div>
              <h4 className="label-caps tracking-wider uppercase text-museum-white mb-2">Peer Review Status</h4>
              <p className="label-metadata text-museum-dim leading-relaxed">
                Verified by Sanctum Board of Curatorial Engineering. Protocols 017 &amp; 021 cleared for permanent vault accession in Q4.
              </p>
            </div>
            <div>
              <h4 className="label-caps tracking-wider uppercase text-museum-white mb-2">Spatial Audio Pipeline</h4>
              <p className="label-metadata text-museum-dim leading-relaxed">
                HRTF convolutions require high-resolution binaural headphones. Stereo downmix engaged automatically when uncalibrated.
              </p>
            </div>
            <div>
              <h4 className="label-caps tracking-wider uppercase text-museum-white mb-2">Open Access Protocol</h4>
              <p className="label-metadata text-museum-dim leading-relaxed">
                WGSL source code matrices deposited in institutional repository under Open Curatorial License (Sanctum OCL-3).
              </p>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
