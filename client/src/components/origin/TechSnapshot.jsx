import React from 'react';
import { motion } from 'framer-motion';

const CAPABILITY_DOMAINS = [
  {
    title: 'FRONTEND & SPATIAL WEB',
    icon: 'web',
    items: ['React', 'JavaScript / TypeScript', 'Three.js / WebGL', 'Tailwind CSS'],
    status: 'ACTIVE DOMAIN',
  },
  {
    title: 'BACKEND & RUNTIME',
    icon: 'dns',
    items: ['Node.js', 'Express', 'RESTful APIs', 'System Architecture'],
    status: 'ACTIVE DOMAIN',
  },
  {
    title: 'DATA & STORAGE',
    icon: 'database',
    items: ['MongoDB', 'PostgreSQL', 'Schema Optimization', 'Data Modeling'],
    status: 'ACTIVE DOMAIN',
  },
  {
    title: 'TOOLING & DEVOPS',
    icon: 'terminal',
    items: ['Git / GitHub', 'Vite', 'Docker', 'Postman'],
    status: 'ACTIVE DOMAIN',
  },
];

/**
 * TechSnapshot — Concise Technical Identity Snapshot
 * High-level overview of core full-stack masteries and runtime proficiencies.
 */
export function TechSnapshot() {
  return (
    <section aria-label="Technical Profile Snapshot" className="w-full my-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
          03 // CAPABILITY MATRIX SNAPSHOT
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
      </div>

      {/* 4 Domains Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITY_DOMAINS.map((domain, index) => (
          <motion.article
            key={domain.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aethel-glass aethel-rim-border corner-brackets p-6 flex flex-col justify-between gap-5 shadow-xl group hover:border-primary/60 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
              <span className="material-symbols-outlined text-primary text-[20px]">
                {domain.icon}
              </span>
              <span className="font-meta-technical text-[9px] text-primary/80 tracking-widest uppercase">
                {domain.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-headline-lg-mobile text-[16px] text-primary font-bold tracking-wide">
              {domain.title}
            </h3>

            {/* Chips List */}
            <div className="flex flex-wrap gap-2">
              {domain.items.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT font-meta-technical text-[11px] text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer Metric */}
            <div className="pt-2 border-t border-outline-variant/20 font-meta-technical text-[9px] text-outline-variant uppercase tracking-widest">
              SNAPSHOT_V3 // VERIFIED
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default TechSnapshot;
