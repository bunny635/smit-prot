import React from 'react';
import { ArtifactViewer3D } from './ArtifactViewer3D';
import clsx from 'clsx';

/**
 * ArtifactInspectionPanel — Holographic Relic Inspection Chamber
 * Smoked glass container with inner rim-light, top-right telemetry coordinates,
 * 3D rotating viewport, Bodoni Moda title, Tier badge, lore, technical specs,
 * and the corner-bracketed "EQUIP ARTIFACT +" button.
 */
export function ArtifactInspectionPanel({
  artifact,
  isEquipped,
  onToggleEquip,
  reducedMotion = false,
}) {
  if (!artifact) return null;

  return (
    <div
      aria-label={`Inspection Chamber for ${artifact.title}`}
      className={clsx(
        'w-full max-w-2xl bg-[#181818]/70 backdrop-blur-2xl border border-outline-variant/30',
        'p-6 sm:p-8 flex flex-col relative overflow-hidden group shadow-2xl rounded-DEFAULT'
      )}
    >
      {/* Inner Rim Light */}
      <div
        aria-hidden="true"
        className="absolute inset-0 border border-primary/20 pointer-events-none z-10 m-1"
      />

      {/* Atmospheric Radial Corner Flare */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Telemetry Coordinates (Top Right) */}
      <div className="absolute top-4 right-4 z-20 font-meta-technical text-[10px] sm:text-[11px] text-primary/70 text-right tracking-widest leading-tight select-none">
        <div>{artifact.coordinates}</div>
        <div className="text-primary font-bold animate-pulse mt-0.5">
          {artifact.scanStatus}
        </div>
      </div>

      {/* Telemetry Relic Type (Top Left) */}
      <div className="mb-3 font-meta-technical text-[10px] sm:text-[11px] text-outline-variant uppercase tracking-[0.2em] select-none">
        INSPECTION CHAMBER // {artifact.code}
      </div>

      {/* 3D Holographic Display Frame */}
      <div className="relative w-full aspect-video sm:aspect-square max-h-[340px] mb-6 flex items-center justify-center bg-surface-container-lowest/70 border border-outline-variant/25 overflow-hidden rounded-DEFAULT">
        {/* Subtle Radial Glow in Center */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent pointer-events-none"
        />

        {/* Technical Grid Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(233,195,73,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(233,195,73,0.25)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
        />

        {/* 3D WebGL Hologram */}
        <ArtifactViewer3D artifact={artifact} reducedMotion={reducedMotion} />

        {/* Corner Reticle Brackets */}
        <div
          aria-hidden="true"
          className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/50 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/50 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/50 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/50 pointer-events-none"
        />
      </div>

      {/* Details Container */}
      <div className="flex flex-col gap-3.5 z-20">
        {/* Title & Tier Badge */}
        <div className="flex justify-between items-end flex-wrap gap-2">
          <h3 className="font-headline-lg-mobile sm:font-headline-lg text-[26px] sm:text-[34px] font-bold text-on-surface tracking-wide">
            {artifact.title}
          </h3>
          <span className="font-meta-technical text-[11px] text-primary border border-primary/50 px-2.5 py-1 bg-primary/10 tracking-widest uppercase font-semibold">
            {artifact.tier}
          </span>
        </div>

        {/* Gold Gradient Divider */}
        <div
          aria-hidden="true"
          className="h-[1px] w-full bg-gradient-to-r from-primary via-primary/40 to-transparent opacity-60"
        />

        {/* Lore Description */}
        <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed">
          {artifact.lore}
        </p>

        {/* Telemetry Engineering Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-outline-variant/20 font-meta-technical text-[10px] text-outline-variant">
          <div className="p-2 bg-surface-container-lowest/40 border border-outline-variant/20 rounded-DEFAULT">
            <span className="block text-primary/70 tracking-widest uppercase">CLASSIFICATION</span>
            <span className="text-on-surface font-semibold truncate block mt-0.5">
              {artifact.type}
            </span>
          </div>
          <div className="p-2 bg-surface-container-lowest/40 border border-outline-variant/20 rounded-DEFAULT">
            <span className="block text-primary/70 tracking-widest uppercase">BANDWIDTH</span>
            <span className="text-on-surface font-semibold truncate block mt-0.5">
              {artifact.bandwidth}
            </span>
          </div>
          <div className="p-2 bg-surface-container-lowest/40 border border-outline-variant/20 rounded-DEFAULT">
            <span className="block text-primary/70 tracking-widest uppercase">STABILITY</span>
            <span className="text-primary font-semibold truncate block mt-0.5">
              {artifact.stability}
            </span>
          </div>
        </div>

        {/* Interactive Action Row: Equip Artifact Button */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-4 pt-2">
          <button
            type="button"
            onClick={() => onToggleEquip(artifact.id)}
            aria-pressed={isEquipped}
            className={clsx(
              'font-meta-technical text-[12px] tracking-[0.16em] uppercase px-8 py-3.5',
              'transition-all duration-300 flex items-center gap-2.5 relative overflow-hidden group',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              isEquipped
                ? 'border border-primary bg-primary/20 text-primary shadow-gold-glow'
                : 'border border-primary bg-transparent text-primary hover:bg-gradient-to-r hover:from-primary/25 hover:to-transparent'
            )}
          >
            <span className="relative z-10 font-bold group-hover:-translate-y-0.5 transition-transform duration-200">
              {isEquipped ? 'EQUIPPED // ACTIVE' : 'EQUIP ARTIFACT +'}
            </span>
            <span
              className="material-symbols-outlined text-[16px] relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                fontVariationSettings: isEquipped ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {isEquipped ? 'check' : 'add'}
            </span>

            {/* Corner Brackets Accents matching Stitch */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary"
            />
          </button>

          {/* Linked Skill Indicator */}
          <div className="font-meta-technical text-[10px] text-on-surface-variant/70 tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>LINKED TECH // {artifact.relatedSkill.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtifactInspectionPanel;
