import React from 'react';
import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    num: '01',
    title: 'PRECISION',
    icon: 'tune',
    desc: 'Sub-millisecond latency mindset and pixel-perfect architectural execution across every layer of the full stack.',
  },
  {
    num: '02',
    title: 'CRAFT',
    icon: 'construction',
    desc: 'Writing code as enduring digital masonry—resilient, maintainable, and built to survive technological epochs.',
  },
  {
    num: '03',
    title: 'CURIOSITY',
    icon: 'explore',
    desc: 'Relentless exploration of uncharted technologies, spatial computing paradigms, and next-gen AI architectures.',
  },
  {
    num: '04',
    title: 'SYSTEMS',
    icon: 'hub',
    desc: 'Engineering end-to-end monolithic and distributed ecosystems with holistic scalability and structural integrity.',
  },
];

/**
 * ValuesArchive — Operational Principles Matrix
 * Renders 4 archival principle artifacts with Aethelgard styling.
 */
export function ValuesArchive() {
  return (
    <section aria-label="Values and Operational Principles" className="w-full my-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
          02 // OPERATIONAL PRINCIPLES
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
      </div>

      {/* 4 Archival Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRINCIPLES.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aethel-glass aethel-rim-border corner-brackets p-6 flex flex-col justify-between gap-6 group hover:border-primary/60 transition-all duration-300 shadow-xl"
          >
            {/* Card Header: Number & Icon */}
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
              <span className="font-meta-technical text-[12px] text-primary font-bold tracking-widest">
                {item.num}.
              </span>
              <span className="material-symbols-outlined text-primary/70 text-[20px] group-hover:text-primary group-hover:scale-110 transition-all">
                {item.icon}
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-2">
              <h3 className="font-headline-lg text-[20px] text-primary tracking-wide group-hover:text-primary-fixed transition-colors font-bold">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Bottom Status Tag */}
            <div className="font-meta-technical text-[9px] text-outline-variant uppercase tracking-widest pt-2 border-t border-outline-variant/20">
              PRINCIPLE_ACTIVE // CORE
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ValuesArchive;
