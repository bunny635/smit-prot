import React from "react";
import { cn } from "@/utils/cn";
import { Loader2, ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  isLoading?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", isLoading, href, icon, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans transition-colors duration-200 focus-ring disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-museum-surface border border-museum-gold text-museum-white rounded-[6px] px-6 py-3 hover:bg-museum-surface-elevated hover:border-museum-gold-bright disabled:bg-[#1A1A1A] disabled:border-[#1A1A1A] disabled:text-[#66635D]",
      secondary: "bg-transparent border border-museum-border text-museum-muted rounded-[6px] px-6 py-3 hover:text-museum-white disabled:opacity-50",
      text: "bg-transparent text-museum-gold hover:underline underline-offset-4 disabled:opacity-50 group",
    };

    if (href) {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={cn(baseStyles, variants[variant], className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && icon && <span className="mr-2">{icon}</span>}
          {children}
          {variant === "text" && !isLoading && (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        {children}
        {variant === "text" && !isLoading && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
