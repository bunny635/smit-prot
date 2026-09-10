import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VoidFragment from './VoidFragment';

/**
 * VoidArchive — Sparse, atmospheric collection of classified Void records.
 * Prioritizes generous negative space, technical rails, dark surfaces, and dynamic filtering.
 * Includes accessible Mobile Detail Drawer (<768px) with Escape key and touch targets.
 */
export default function VoidArchive({ records = [], isExtractedAll = false }) {
  const [filter, setFilter] = useState('ALL');
  const [activeDrawerRecord, setActiveDrawerRecord] = useState(null);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeDrawerRecord) {
        setActiveDrawerRecord(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDrawerRecord]);

  // Lock body scroll while mobile drawer is active
  useEffect(() => {
    if (activeDrawerRecord) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeDrawerRecord]);

  const filteredRecords = records.filter((rec) => {
    if (filter === 'ALL') return true;
    if (filter === 'ANOMALY') return rec.anomalyDetected;
    if (filter === 'VERIFIED') return rec.evidenceType === 'VERIFIED_ARTIFACT';
    if (filter === 'LORE') return rec.evidenceType === 'INTERFACE_LORE';
    return true;
  });

  const filterTabs = [
    { id: 'ALL', label: 'ALL', count: records.length },
    { id: 'ANOMALY', label: 'ANOMALIES', count: records.filter((r) => r.anomalyDetected).length },
    { id: 'VERIFIED', label: 'VERIFIED', count: records.filter((r) => r.evidenceType === 'VERIFIED_ARTIFACT').length },
    { id: 'LORE', label: 'LORE', count: records.filter((r) => r.evidenceType === 'INTERFACE_LORE').length },
  ];

  return (
    <section 
      className="w-full max-w-4xl mx-auto my-12 sm:my-16 px-4 select-none"
      aria-label="Classified Void Archive"
    >
      {/* Archive Header & Technical Rail */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/25 pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">
              folder_special
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
              CLASSIFIED_ARCHIVE_LOGS
            </h2>
          </div>
          <p className="font-mono text-[11px] sm:text-xs text-outline tracking-wider uppercase">
            RESTRICTED SYSTEM FRAGMENTS // {records.length} TOTAL RECORDS ARCHIVED
          </p>
        </div>

        {/* Filter Controls with Dynamic Counts */}
        <div 
          role="tablist"
          aria-label="Archive record filters"
          className="flex flex-wrap items-center gap-1.5 font-mono text-xs"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              onClick={() => setFilter(tab.id)}
              aria-selected={filter === tab.id}
              aria-controls="archive-fragments-grid"
              className={`min-h-[44px] px-3.5 py-2 rounded transition-colors uppercase tracking-wider flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-abyss ${
                filter === tab.id
                  ? 'bg-primary/15 text-primary border border-primary/40 font-semibold shadow-[0_0_15px_rgba(242,202,80,0.1)]'
                  : 'text-outline/80 hover:text-on-surface hover:bg-surface-container/50 border border-transparent'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-70">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sparse Fragments Grid with Large Gaps */}
      <div 
        id="archive-fragments-grid"
        role="tabpanel"
        className="grid grid-cols-1 gap-8"
      >
        {filteredRecords.map((record) => (
          <VoidFragment
            key={record.id}
            record={record}
            isInitiallyDecrypted={isExtractedAll || record.status === 'DECRYPTED'}
            onOpenMobileDrawer={(rec) => setActiveDrawerRecord(rec)}
          />
        ))}
      </div>

      {/* Mobile Detail Drawer (<768px) per Section 28 & Aethelgard Mobile Relic HUD */}
      {activeDrawerRecord && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-drawer-title"
          className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md md:hidden animate-fadeIn"
          onClick={() => setActiveDrawerRecord(null)}
        >
          {/* Drawer Surface */}
          <div 
            className="w-full max-h-[85vh] overflow-y-auto bg-surface-container-low border-t border-primary/40 rounded-t-2xl p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.9)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Drag Bar Accent */}
            <div className="w-12 h-1 bg-outline-variant/60 rounded-full mx-auto mb-4" aria-hidden="true" />

            {/* Header with Close Button */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-primary tracking-widest">
                  {activeDrawerRecord.code}
                </span>
                <span className="text-outline/40">•</span>
                <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                  {activeDrawerRecord.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveDrawerRecord(null)}
                aria-label="Close record detail drawer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-outline hover:text-primary rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
              </button>
            </div>

            {/* Title & Evidence Badge */}
            <h3 id="mobile-drawer-title" className="font-serif text-2xl font-bold text-primary mb-2">
              {activeDrawerRecord.title}
            </h3>

            <div className="mb-4">
              {activeDrawerRecord.evidenceType === 'VERIFIED_ARTIFACT' ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider bg-primary/10 border border-primary/30 text-primary uppercase">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">verified</span>
                  <span>VERIFIED REPOSITORY ARTIFACT</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider bg-surface-container-highest/70 border border-outline-variant/30 text-outline uppercase">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">auto_awesome</span>
                  <span>EXPLICIT INTERFACE LORE</span>
                </span>
              )}
            </div>

            {/* Summary & Narrative */}
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-4">
              {activeDrawerRecord.description}
            </p>

            <div className="bg-surface-container-lowest/90 p-4 rounded border border-outline-variant/20 mb-4 space-y-2">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase block">
                FULL NARRATIVE LOG
              </span>
              <p className="font-sans text-xs text-on-surface/85 leading-relaxed">
                {activeDrawerRecord.narrative}
              </p>
            </div>

            {/* Grounded Artifact Link */}
            {activeDrawerRecord.realArtifact && (
              <div className="bg-surface-container-lowest p-3 rounded border border-primary/20 mb-4 flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">verified</span>
                  <span className="font-semibold">{activeDrawerRecord.realArtifact}</span>
                </div>
                {activeDrawerRecord.relatedExperiment && (
                  <Link
                    to="/lab"
                    onClick={() => setActiveDrawerRecord(null)}
                    className="text-xs text-secondary hover:text-primary underline uppercase tracking-wider"
                  >
                    INSPECT IN FORBIDDEN LAB →
                  </Link>
                )}
                {activeDrawerRecord.relatedProject && !activeDrawerRecord.relatedExperiment && (
                  <Link
                    to="/quests"
                    onClick={() => setActiveDrawerRecord(null)}
                    className="text-xs text-secondary hover:text-primary underline uppercase tracking-wider"
                  >
                    INSPECT IN QUEST ARENA →
                  </Link>
                )}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeDrawerRecord.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-surface-container-highest/70 border border-outline-variant/30 font-mono text-[10px] text-on-surface tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Close action */}
            <button
              type="button"
              onClick={() => setActiveDrawerRecord(null)}
              className="w-full min-h-[48px] py-3 rounded bg-surface-container border border-outline-variant/30 text-primary font-mono text-xs uppercase tracking-widest hover:bg-surface-container-high transition-colors text-center"
            >
              DISMISS_DRAWER
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
