import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import { usePlayer } from '../context/PlayerContext';
import {
  INVENTORY_ARTIFACTS,
  INVENTORY_CATEGORIES,
} from '../data/inventoryData';
import ArtifactCard from '../components/inventory/ArtifactCard';
import ArtifactInspectionPanel from '../components/inventory/ArtifactInspectionPanel';
import clsx from 'clsx';

/**
 * InventoryVault — SMIT QUEST Phase: Inventory Vault / Data Archives
 * Implements the Aethelgard data archives and 3D relic inspection room
 * matching stitch_smit_quest_design_system/inventory_vault_data_archives.
 */
export function InventoryVault() {
  const { player, gainXP, toggleEquipArtifact } = usePlayer();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [selectedId, setSelectedId] = useState(INVENTORY_ARTIFACTS[0].id);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [discoveredList, setDiscoveredList] = useState(['crys-react', 'nrg-js']);
  const mobileInspectRef = useRef(null);

  const equippedList = player.equippedArtifacts || ['crys-react'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter artifacts by category
  const filteredArtifacts = useMemo(() => {
    if (selectedCategory === 'ALL') return INVENTORY_ARTIFACTS;
    return INVENTORY_ARTIFACTS.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  // Currently selected artifact
  const selectedArtifact = useMemo(() => {
    return (
      INVENTORY_ARTIFACTS.find((a) => a.id === selectedId) ||
      INVENTORY_ARTIFACTS[0]
    );
  }, [selectedId]);

  // Collection sync percentage calculation matching Stitch HUD
  const collectionSyncPercent = useMemo(() => {
    const total = INVENTORY_ARTIFACTS.length;
    const count = equippedList.length;
    // Base 70% + up to 30% for equipped items
    return Math.min(100, Math.round(70 + (count / total) * 30));
  }, [equippedList]);

  // Select artifact handler
  const handleSelect = (artifact) => {
    setSelectedId(artifact.id);
    if (!discoveredList.includes(artifact.id)) {
      setDiscoveredList((prev) => [...prev, artifact.id]);
    }
    // On mobile, scroll smoothly to inspection panel
    if (isMobile && mobileInspectRef.current) {
      setTimeout(() => {
        mobileInspectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  // Toggle equip handler
  const handleToggleEquip = (id) => {
    if (toggleEquipArtifact) {
      toggleEquipArtifact(id);
    }
  };

  // Keyboard navigation for cycling artifacts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) return;

      const currentIndex = filteredArtifacts.findIndex((a) => a.id === selectedId);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % filteredArtifacts.length;
        handleSelect(filteredArtifacts[nextIndex]);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex =
          (currentIndex - 1 + filteredArtifacts.length) % filteredArtifacts.length;
        handleSelect(filteredArtifacts[prevIndex]);
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        handleToggleEquip(selectedId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredArtifacts, selectedId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.4 }}
      className="relative w-full max-w-7xl mx-auto py-6 sm:py-8 flex flex-col gap-6 md:gap-8 select-none"
    >
      {/* =========================================================================
          1. TOP TELEMETRY & COLLECTION STATUS HEADER (MATCHING STITCH)
          ========================================================================= */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-outline-variant/30">
        <div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[22px]">
              backpack
            </span>
            <span className="font-meta-technical text-[11px] text-primary tracking-[0.25em] uppercase font-bold">
              VAULT SECTOR // DATA ARCHIVES
            </span>
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-[32px] md:text-[44px] font-bold text-on-surface tracking-wider mt-1">
            INVENTORY VAULT
          </h1>
          <p className="font-body-md text-[13px] md:text-[14px] text-on-surface-variant max-w-xl mt-1">
            High-integrity digital museum inspecting core technological relics, state lattices,
            and runtime dynamos powering the SMIT QUEST architecture.
          </p>
        </div>

        {/* Telemetry Indicator matching Stitch */}
        <div className="flex flex-col sm:items-end gap-1.5 p-3 bg-surface-container/60 border border-outline-variant/30 rounded-DEFAULT">
          <div className="font-meta-technical text-[10px] text-outline-variant tracking-widest uppercase">
            OPERATIVE LVL {player.level || 5} // XP {player.currentXP || 2450}/{player.maxXP || 3000}
          </div>
          <div className="font-meta-technical text-[11px] text-primary font-bold tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]">
            COLLECTION STATUS: {collectionSyncPercent}% SYNCED
          </div>
          <div className="font-meta-technical text-[9px] text-on-surface-variant/70 tracking-wider">
            {equippedList.length} OF {INVENTORY_ARTIFACTS.length} RELICS EQUIPPED
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. CATEGORY FILTER TABS
          ========================================================================= */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 font-meta-technical text-[11px] tracking-widest uppercase">
        <span className="text-outline-variant mr-2 text-[10px]">FILTER:</span>
        {INVENTORY_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                'px-3 py-1.5 border transition-all duration-200 rounded-DEFAULT',
                isActive
                  ? 'border-primary text-primary bg-primary/10 font-bold shadow-gold-glow-subtle'
                  : 'border-outline-variant/30 text-on-surface-variant/70 hover:border-primary/50 hover:text-on-surface'
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          3. MAIN SPLIT CHAMBER LAYOUT (MATCHING STITCH)
          ========================================================================= */}
      <div className="relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        {/* Ambient Spotlight behind Inspection Panel */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none -z-10"
        />

        {/* -------------------------------------------------------------
            LEFT COLUMN: ARTIFACT INDEX LIST (1/3 width on desktop)
            ------------------------------------------------------------- */}
        <section
          aria-label="Artifact Index Directory"
          className="w-full md:w-[360px] lg:w-[400px] flex-shrink-0 flex flex-col gap-3"
        >
          <div className="flex justify-between items-center font-meta-technical text-[11px] text-primary/80 border-b border-outline-variant/30 pb-2">
            <span className="tracking-[0.2em] font-bold">INDEX // ARTIFACTS</span>
            <span className="text-outline-variant text-[10px]">
              {filteredArtifacts.length} RECORDS
            </span>
          </div>

          <div className="flex flex-col gap-3 max-h-[calc(100vh-280px)] overflow-y-auto pr-2 custom-scrollbar">
            {filteredArtifacts.map((artifact) => (
              <ArtifactCard
                key={artifact.id}
                artifact={artifact}
                isActive={selectedArtifact.id === artifact.id}
                isEquipped={equippedList.includes(artifact.id)}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {/* Quick Keyboard Tip */}
          <div className="hidden md:flex items-center justify-between pt-2 border-t border-outline-variant/20 font-meta-technical text-[10px] text-outline-variant/60">
            <span>KEYBOARD: [↑/↓] NAVIGATE</span>
            <span>[E] EQUIP/UNEQUIP</span>
          </div>
        </section>

        {/* -------------------------------------------------------------
            RIGHT COLUMN: HOLOGRAPHIC INSPECTION CHAMBER (2/3 width on desktop)
            ------------------------------------------------------------- */}
        <section
          ref={mobileInspectRef}
          aria-label="Artifact Holographic Inspection Chamber"
          className="w-full flex-1 flex justify-center md:sticky md:top-24"
        >
          <ArtifactInspectionPanel
            artifact={selectedArtifact}
            isEquipped={equippedList.includes(selectedArtifact.id)}
            onToggleEquip={handleToggleEquip}
            reducedMotion={prefersReducedMotion}
          />
        </section>
      </div>
    </motion.div>
  );
}

export default InventoryVault;
