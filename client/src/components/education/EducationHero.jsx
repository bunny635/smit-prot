import React from 'react';
import { motion } from 'framer-motion';

/**
 * EducationHero — Monolithic Header for Education Constellation / Academic Archive
 * Faithfully implements Stitch education_constellation visual hierarchy:
 * - Bodoni Moda editorial headline: "KNOWLEDGE REPOSITORIES"
 * - JetBrains Mono technical breadcrumb & sector metadata
 * - Left gold divider line on description
 * - Dynamic academic metrics & archival disclosure
 */
export function EducationHero({
  totalRecords = 5,
  degreesCount = 2,
  certificationsCount = 1,
  specializationsCount = 2,
  reducedMotion = false,
}) {
  return (
    <header className="relative w-full border-b border-outline-variant/30 pb-6 md:pb-8 select-none">
      {/* Decorative Atmospheric Depth Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-64 md:w-96 h-64 md:h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Sector Breadcrumb Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase">
          <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
          <span>SECTOR: SEC-07 // NODE-24</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-on-surface-variant">ACADEMIC ARCHIVES</span>
        </div>

        <div className="flex items-center gap-4 font-meta-technical text-[10px] text-primary/80 tracking-widest uppercase">
          <span>ARCHIVIST_01 // KNOWLEDGE RECORD</span>
          <span className="text-outline-variant/60">//</span>
          <span className="text-outline">ACADEMIC MATRIX</span>
        </div>
      </div>

      {/* Main Display Headline */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.5 }}
          >
            <div className="font-meta-technical text-[11px] text-primary/70 tracking-[0.3em] uppercase mb-2">
              SEC_07 // KNOWLEDGE_REPOSITORIES
            </div>
            <h1 className="font-display-hero text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] text-on-surface leading-[1.05] tracking-tight md:tracking-normal drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]">
              KNOWLEDGE <br className="hidden sm:inline" />
              <span className="text-primary italic font-bold">REPOSITORIES</span>
            </h1>
          </motion.div>

          <div className="border-l-2 border-primary/40 pl-4 mt-5">
            <p className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant/90 leading-relaxed max-w-2xl">
              Accessing verified educational nodes and knowledge pathways. Neural pathways established to foundational computing degree repositories, cloud architectures, and specialized client-side systems modules.
            </p>
          </div>
        </div>

        {/* Tactical Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 font-meta-technical text-[11px] self-start lg:self-end">
          <div className="px-3.5 py-2 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
            <span className="text-[9px] text-outline-variant uppercase tracking-widest block">REPOSITORIES</span>
            <span className="text-primary font-bold text-sm">{totalRecords} NODES</span>
          </div>

          <div className="px-3.5 py-2 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
            <span className="text-[9px] text-outline-variant uppercase tracking-widest block">DEGREE TRACKS</span>
            <span className="text-on-surface font-bold text-sm">{degreesCount} TRACKS</span>
          </div>

          <div className="px-3.5 py-2 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
            <span className="text-[9px] text-outline-variant uppercase tracking-widest block">CERTIFICATIONS</span>
            <span className="text-primary-fixed font-bold text-sm">{certificationsCount} CREDENTIAL</span>
          </div>

          <div className="px-3.5 py-2 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT text-on-surface">
            <span className="text-[9px] text-outline-variant uppercase tracking-widest block">SPECIALIZATIONS</span>
            <span className="text-secondary font-bold text-sm">{specializationsCount} MODULES</span>
          </div>
        </div>
      </div>

      {/* Archival Content Integrity Notice */}
      <div className="mt-6 px-4 py-2.5 bg-surface-container-lowest/70 border border-outline-variant/30 rounded-DEFAULT flex items-center justify-between gap-4 font-meta-technical text-[10px] text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[15px]">verified_user</span>
          <span>ARCHIVAL TRUTHFULNESS: Academic registry grounded in core computer science curriculum and verified technical credentials.</span>
        </div>
        <span className="hidden sm:inline text-primary/80 font-mono tracking-wider">SEC-07 // VERIFIED_MATRIX</span>
      </div>
    </header>
  );
}

export default EducationHero;
