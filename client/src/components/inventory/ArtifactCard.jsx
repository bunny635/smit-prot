import React from 'react';
import clsx from 'clsx';

/**
 * ArtifactCard — Individual Selectable Vault Artifact Card
 * Faithfully matches the Stitch Aethelgard design system:
 * - Bodoni Moda headlines
 * - JetBrains Mono technical code tracking
 * - Left gold border indicator
 * - Subtle gradient wash on active/hover
 */
export function ArtifactCard({
  artifact,
  isActive,
  isEquipped,
  onSelect,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(artifact);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-selected={isActive}
      aria-label={`Inspect artifact ${artifact.title}`}
      onClick={() => onSelect(artifact)}
      onKeyDown={handleKeyDown}
      className={clsx(
        'group relative pl-4 py-3 cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-r-DEFAULT',
        isActive
          ? 'border-l-2 border-primary bg-primary/[0.04]'
          : 'border-l border-outline-variant/30 hover:border-primary/50'
      )}
    >
      {/* Background Gradient Wash */}
      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transition-opacity duration-300 -z-10 pointer-events-none',
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        )}
      />

      {/* Header Row: Tech Code, Equipped Badge, Eye Icon */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span
            className={clsx(
              'font-meta-technical text-[11px] tracking-[0.2em] uppercase transition-colors duration-300',
              isActive
                ? 'text-primary font-bold drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]'
                : 'text-on-surface-variant/80 group-hover:text-primary/70'
            )}
          >
            {artifact.code}
          </span>
          {isEquipped && (
            <span className="font-meta-technical text-[9px] text-primary border border-primary/40 px-1 py-0.2 bg-primary/10 uppercase tracking-wider">
              EQUIPPED
            </span>
          )}
        </div>

        <span
          className={clsx(
            'material-symbols-outlined text-[16px] transition-colors duration-300',
            isActive
              ? 'text-primary drop-shadow-[0_0_6px_rgba(242,202,80,0.6)]'
              : 'text-outline-variant/60 group-hover:text-primary/50'
          )}
        >
          visibility
        </span>
      </div>

      {/* Artifact Title */}
      <h2
        className={clsx(
          'font-headline-lg-mobile md:font-headline-lg text-[22px] md:text-[28px] font-semibold transition-colors duration-300 leading-tight',
          isActive
            ? 'text-on-surface group-hover:text-primary'
            : 'text-on-surface/70 group-hover:text-on-surface'
        )}
      >
        {artifact.title}
      </h2>

      {/* Short Description */}
      <p
        className={clsx(
          'font-body-md text-[13px] md:text-[14px] leading-relaxed mt-1 line-clamp-2 transition-colors duration-300',
          isActive
            ? 'text-on-surface-variant'
            : 'text-on-surface-variant/70 group-hover:text-on-surface-variant'
        )}
      >
        {artifact.shortDesc}
      </p>
    </div>
  );
}

export default ArtifactCard;
