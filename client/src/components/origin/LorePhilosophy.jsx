import React from 'react';
import { motion } from 'framer-motion';

/**
 * LorePhilosophy — Archival Story & Philosophy Section
 * Features:
 * - Developer Philosophy Lore
 * - Real-time terminal Current Focus output
 * - Expedition Goals archive
 */
export function LorePhilosophy() {
  return (
    <section aria-label="Developer Philosophy and Lore" className="w-full my-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
          01 // ARCHIVAL LOGS
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Developer Philosophy (7 cols) */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 aethel-glass aethel-rim-border corner-brackets p-6 md:p-8 flex flex-col gap-4 shadow-xl relative"
        >
          <div className="absolute top-4 right-4 font-meta-technical text-[10px] text-on-surface-variant/50 tracking-wider">
            COORD: 45.92.A
          </div>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">
              psychology
            </span>
            <h2 className="font-headline-lg text-[24px] sm:text-[28px] text-primary tracking-wide leading-tight">
              Developer Philosophy
            </h2>
          </div>

          <div className="w-16 h-0.5 bg-primary/50 mb-2" />

          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed text-[15px] md:text-[16px]">
            Building for the next digital era requires more than just code; it demands an architectural mindset. Treat digital spaces as ancient ruins waiting to be discovered—robust, atmospheric, and full of hidden depth. The intersection of logic and aesthetics is where true immersion begins.
          </p>

          <p className="font-sans text-body-md text-on-surface-variant/80 leading-relaxed text-[14px]">
            Every system is engineered from first principles: scalable foundational APIs, bulletproof data schemas, and high-precision user interfaces that reward curiosity and withstand technological change.
          </p>
        </motion.article>

        {/* Right Column: Current Focus & Expedition Goals (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Terminal: Current Focus */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="aethel-glass aethel-rim-border corner-brackets p-5 md:p-6 flex flex-col gap-3 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2.5">
              <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                <span>CURRENT FOCUS</span>
              </div>
              <span className="font-meta-technical text-[9px] text-outline-variant">
                SEC-00-ROOT
              </span>
            </div>

            {/* Terminal Window Box */}
            <div className="p-3.5 bg-surface-container-lowest/85 border border-outline-variant/40 rounded-DEFAULT font-meta-technical text-[11px] text-on-surface leading-loose">
              <div>
                <span className="text-primary font-semibold">&gt; RUNNING:</span> The SMIT QUEST Project
              </div>
              <div>
                <span className="text-primary font-semibold">&gt; OBJECTIVE:</span> Establish foundational digital presence.
              </div>
              <div>
                <span className="text-primary font-semibold">&gt; STATUS:</span> Optimal.
              </div>
              <div className="text-primary animate-pulse font-bold">_</div>
            </div>
          </motion.article>

          {/* Expedition Goals */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="aethel-glass aethel-rim-border corner-brackets p-5 md:p-6 flex flex-col gap-3 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2.5">
              <div className="flex items-center gap-2 font-meta-technical text-[10px] text-primary tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">flag</span>
                <span>EXPEDITION GOALS</span>
              </div>
              <span className="font-meta-technical text-[9px] text-outline-variant">
                COORD: 77.44.D
              </span>
            </div>

            <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-relaxed">
              Mastering spatial computing and robust distributed architectures to forge digital experiences that are not merely used, but explored.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default LorePhilosophy;
