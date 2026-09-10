import React from 'react';

/**
 * ContactField — Accessible, tactile form field adhering to Aethelgard
 * terminal design system and Mobile Relic HUD touch ergonomics.
 *
 * Requirements:
 * - Real <label> with htmlFor
 * - Unique id matching htmlFor
 * - aria-invalid and aria-describedby for errors
 * - font-size >= 16px (prevents iOS auto-zoom on focus)
 * - Minimum 44px touch target height
 * - Visible gold focus states
 */
export default function ContactField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  as = 'input',
  rows = 4,
  required = false,
  icon,
  autoComplete,
}) {
  const errorId = `${id}-error`;
  const isTextarea = as === 'textarea';

  return (
    <div className="w-full flex flex-col gap-1.5 text-left">
      {/* Real Semantic Label in JetBrains Mono */}
      <label
        htmlFor={id}
        className="font-mono text-[11px] sm:text-xs text-primary/90 tracking-[0.2em] uppercase flex items-center gap-1.5"
      >
        {icon && (
          <span className="material-symbols-outlined text-sm text-outline-variant" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{label}</span>
        {required && <span className="text-primary font-bold" aria-hidden="true">*</span>}
      </label>

      {/* Input Container */}
      <div className="relative w-full">
        {isTextarea ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`w-full min-h-[110px] px-3.5 py-3 rounded-DEFAULT font-mono text-base sm:text-sm text-on-surface bg-surface-container-lowest/85 border transition-all duration-200 resize-y focus:outline-none ${
              error
                ? 'border-error focus:border-error focus:ring-1 focus:ring-error shadow-[0_0_10px_rgba(255,180,171,0.2)]'
                : 'border-outline-variant/30 hover:border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary shadow-inner'
            } placeholder:text-outline-variant/50`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-DEFAULT font-mono text-base sm:text-sm text-on-surface bg-surface-container-lowest/85 border transition-all duration-200 focus:outline-none ${
              error
                ? 'border-error focus:border-error focus:ring-1 focus:ring-error shadow-[0_0_10px_rgba(255,180,171,0.2)]'
                : 'border-outline-variant/30 hover:border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary shadow-inner'
            } placeholder:text-outline-variant/50`}
          />
        )}
      </div>

      {/* Accessible Error Message */}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="font-mono text-[11px] sm:text-xs text-error tracking-wide flex items-center gap-1 mt-0.5"
        >
          <span className="material-symbols-outlined text-xs shrink-0" aria-hidden="true">
            error
          </span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
