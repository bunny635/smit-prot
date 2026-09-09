import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';
import MissionDifficulty from '../ui/MissionDifficulty';
import QuestButton from '../ui/QuestButton';

/**
 * DestinationDetailModal — Interactive Node Inspection Modal
 * Provides deep architectural telemetry for a selected destination node.
 */
export function DestinationDetailModal({
  destination = null,
  isOpen = false,
  onClose,
}) {
  const navigate = useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!destination) return null;

  const handleEnterProtocol = () => {
    navigate(destination.route);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-abyss/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg bg-surface-container/95 border border-primary/40 corner-brackets p-6 md:p-8 flex flex-col gap-6 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-outline-variant/30 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-meta-technical text-[11px] text-primary tracking-[0.2em] uppercase">
                  <span className="material-symbols-outlined text-[18px]">
                    {destination.icon}
                  </span>
                  <span>{destination.coordinate}</span>
                </div>
                <span className="font-meta-technical text-[10px] text-on-surface-variant/70 tracking-widest uppercase">
                  {destination.subtitle}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="min-w-[36px] min-h-[36px] flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-DEFAULT"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Destination Title & Lore */}
            <div className="flex flex-col gap-3">
              <h2
                id="modal-title"
                className="font-headline-lg text-[28px] md:text-[32px] text-primary leading-tight tracking-wide drop-shadow-[0_0_10px_rgba(242,202,80,0.3)]"
              >
                {destination.label}
              </h2>

              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-surface-container-lowest/60 border border-outline-variant/30 rounded-DEFAULT">
              <div className="flex flex-col gap-1">
                <span className="font-meta-technical text-[10px] text-outline-variant tracking-wider uppercase">
                  STATUS
                </span>
                <StatusBadge status={destination.status} size="sm" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-meta-technical text-[10px] text-outline-variant tracking-wider uppercase">
                  DIFFICULTY
                </span>
                <MissionDifficulty level={destination.difficulty} size="sm" />
              </div>

              <div className="col-span-2 flex flex-col gap-1 pt-2 border-t border-outline-variant/20">
                <span className="font-meta-technical text-[10px] text-outline-variant tracking-wider uppercase">
                  EXPEDITION YIELD
                </span>
                <span className="font-meta-technical text-[12px] text-primary font-semibold tracking-wider">
                  {destination.xpReward}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 pt-2">
              <QuestButton variant="subtle" size="md" onClick={onClose}>
                DISMISS
              </QuestButton>
              <QuestButton
                variant="solid"
                size="md"
                icon="arrow_forward"
                iconPosition="right"
                onClick={handleEnterProtocol}
              >
                ENTER PROTOCOL
              </QuestButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default DestinationDetailModal;
