import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import MissionDifficulty from '../ui/MissionDifficulty';
import StatusBadge from '../ui/StatusBadge';
import QuestButton from '../ui/QuestButton';

/**
 * QuestCard — Reusable Aethelgard Mission Relic Card
 * Renders individual project artifacts with technical telemetry, difficulty rating,
 * XP rewards, tech chips, and action node trigger.
 */
export const QuestCard = React.forwardRef(function QuestCard(
  {
    project,
    onInspect,
    isActive = false,
    className = '',
  },
  ref
) {
  const navigate = useNavigate();

  const handleAccess = (e) => {
    e.stopPropagation();
    if (onInspect) {
      onInspect(project);
    } else {
      navigate(`/quests/${project.slug || project.id}`);
    }
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      onClick={() => onInspect && onInspect(project)}
      className={clsx(
        'group relative flex flex-col justify-between p-6 rounded-DEFAULT',
        'aethel-glass aethel-rim-border corner-brackets',
        'transition-all duration-300 ease-out cursor-pointer select-none',
        'hover:border-primary/60 hover:shadow-gold-glow-subtle hover:-translate-y-1',
        isActive && 'border-primary/80 shadow-gold-glow bg-[#181818]/90',
        className
      )}
    >
      {/* Ambient hover gold gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-DEFAULT" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-outline-variant/30 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-meta-technical text-[10px] text-primary font-bold tracking-[0.2em] uppercase bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-DEFAULT">
            {project.questNumber}
          </span>
          <StatusBadge status={project.status} size="sm" />
        </div>

        <div className="font-meta-technical text-[10px] text-primary tracking-widest font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>+{project.xpReward} XP</span>
        </div>
      </div>

      {/* Project Identity */}
      <div className="relative z-10 flex flex-col gap-1.5 mb-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-headline-lg-mobile text-[22px] font-semibold text-on-surface group-hover:text-primary transition-colors tracking-wide">
            {project.title}
          </h3>
          <span className="font-meta-technical text-[9px] text-outline-variant tracking-wider whitespace-nowrap mt-1">
            {project.coordinates}
          </span>
        </div>
        <p className="font-meta-technical text-[10px] text-on-surface-variant/80 tracking-widest uppercase line-clamp-1">
          {project.subtitle}
        </p>
      </div>

      {/* Narrative Description */}
      <p className="relative z-10 font-sans text-[13px] text-on-surface-variant leading-relaxed line-clamp-3 mb-5">
        {project.description}
      </p>

      {/* Card Footer: Metadata & Action CTA */}
      <div className="relative z-10 pt-4 border-t border-outline-variant/20 flex flex-col gap-4 mt-auto">
        {/* Difficulty & Category */}
        <div className="flex items-center justify-between text-on-surface-variant text-[11px]">
          <div className="flex items-center gap-2">
            <span className="font-meta-technical text-[9px] text-on-surface-variant/60 tracking-wider uppercase">
              DIFF:
            </span>
            <MissionDifficulty level={project.difficulty} size="sm" />
          </div>
          <span className="font-meta-technical text-[9px] text-primary/70 tracking-widest uppercase border border-primary/20 px-2 py-0.5 rounded-DEFAULT">
            {project.category}
          </span>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-surface-container-lowest/80 border border-outline-variant/40 rounded-DEFAULT font-meta-technical text-[10px] text-on-surface-variant group-hover:border-primary/40 group-hover:text-on-surface transition-colors cursor-crosshair"
            >
              {tech}
            </span>
          ))}
          {project.techStack?.length > 4 && (
            <span className="px-1.5 py-0.5 font-meta-technical text-[9px] text-outline-variant">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <QuestButton
          variant={isActive ? 'solid' : 'ghost'}
          size="sm"
          icon="arrow_forward"
          iconPosition="right"
          onClick={handleAccess}
          className="w-full mt-2"
        >
          {isActive ? 'CURRENT TARGET' : 'ACCESS CORE'}
        </QuestButton>
      </div>
    </motion.article>
  );
});
export default QuestCard;
