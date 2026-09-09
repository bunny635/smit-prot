import React from 'react';
import clsx from 'clsx';

/**
 * QuestButton — Aethelgard Ghost-Style Technical Button
 * Features:
 * - 1px Gold border
 * - Transparent background
 * - Technical uppercase JetBrains Mono typography
 * - Subtle hover gold fill & 2px upward micro-lift
 * - Optional corner brackets and icon slot
 */
export function QuestButton({
  children,
  onClick,
  variant = 'ghost', // 'ghost' | 'solid' | 'subtle'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  iconPosition = 'right',
  cornerAccents = true,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-[10px] tracking-[0.12em] min-h-[32px]',
    md: 'px-6 py-3 text-meta-technical tracking-[0.15em] min-h-[44px]',
    lg: 'px-8 py-4 text-quest-stat tracking-[0.2em] min-h-[52px]',
  };

  const variantClasses = {
    ghost: clsx(
      'bg-surface-container-highest/10 text-primary border border-primary/40',
      'hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-gold-glow',
      'active:bg-primary/20'
    ),
    solid: clsx(
      'bg-primary text-abyss font-bold border border-primary',
      'hover:bg-primary-fixed-dim hover:shadow-gold-glow',
      'active:bg-primary-container'
    ),
    subtle: clsx(
      'bg-surface-container/40 text-on-surface-variant border border-outline-variant/50',
      'hover:border-primary/50 hover:text-primary hover:bg-primary/5',
      'active:bg-surface-container-high'
    ),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'group relative inline-flex items-center justify-center gap-2.5',
        'font-meta-technical uppercase font-medium',
        'transition-all duration-300 ease-out select-none',
        'hover:-translate-y-0.5 active:translate-y-0',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
        sizeClasses[size] || sizeClasses.md,
        variantClasses[variant] || variantClasses.ghost,
        cornerAccents && 'corner-brackets',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative z-10 leading-none">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}

export default QuestButton;
