import React from 'react';
import { VERIFIED_CONTACT } from '../../data/portalData';

/**
 * SocialLinks — Verified external anchors inspired by Stitch Screen 27
 * (`the_final_portal_mission_conclusion`).
 *
 * Strict Truthfulness Rules:
 * - Only verified channels (GitHub, Email) are rendered as active links
 * - Unconfigured channels (LinkedIn) are explicitly designated as NOT CONFIGURED
 *   rather than inventing fake profile URLs.
 * - External anchors use target="_blank" rel="noopener noreferrer".
 */
export default function SocialLinks() {
  const anchors = [
    {
      id: 'github',
      label: 'GITHUB',
      icon: 'code',
      url: VERIFIED_CONTACT.github,
      isConfigured: true,
      sublabel: 'SOURCE_REPOSITORIES',
      isExternal: true,
    },
    {
      id: 'email',
      label: 'EMAIL',
      icon: 'mail',
      url: `mailto:${VERIFIED_CONTACT.email}`,
      isConfigured: true,
      sublabel: 'DIRECT_TRANSMISSION',
      isExternal: false,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      icon: 'work',
      url: null,
      isConfigured: false,
      sublabel: 'NOT_CONFIGURED',
      isExternal: true,
    },
  ];

  return (
    <section 
      aria-label="External Verified Anchors"
      className="relative w-full max-w-4xl mx-auto my-12 sm:my-16 px-4 py-8 sm:py-12 border-t border-outline-variant/15 flex flex-col items-center justify-center text-center select-none"
    >
      {/* Eyebrow in JetBrains Mono */}
      <span className="font-mono text-xs text-primary/80 tracking-[0.25em] uppercase mb-8">
        EXTERNAL_ANCHORS // VERIFIED CHANNELS
      </span>

      {/* Anchor Circles Row */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {anchors.map((anchor) => {
          if (!anchor.isConfigured) {
            return (
              <div
                key={anchor.id}
                className="flex flex-col items-center gap-2.5 opacity-40 cursor-not-allowed group"
                title={`${anchor.label} is currently not configured in the repository`}
                aria-disabled="true"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-outline-variant/30 flex items-center justify-center bg-surface-container-lowest/60">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-outline">
                    {anchor.icon}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-xs text-outline font-semibold tracking-wider">
                    {anchor.label}
                  </span>
                  <span className="font-mono text-[9px] text-outline/60 tracking-widest uppercase">
                    {anchor.sublabel}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <a
              key={anchor.id}
              href={anchor.url}
              target={anchor.isExternal ? '_blank' : undefined}
              rel={anchor.isExternal ? 'noopener noreferrer' : undefined}
              aria-label={`Open verified ${anchor.label} channel`}
              className="flex flex-col items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-primary/35 flex items-center justify-center bg-surface-container-lowest/80 group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(242,202,80,0.3)] group-hover:scale-105 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-on-surface-variant group-hover:text-primary transition-colors">
                  {anchor.icon}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-xs text-on-surface-variant group-hover:text-primary font-semibold tracking-wider transition-colors">
                  {anchor.label}
                </span>
                <span className="font-mono text-[9px] text-outline tracking-widest uppercase">
                  {anchor.sublabel}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
