import React from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex w-full rounded-[6px] border bg-museum-charcoal px-4 py-3 text-museum-white placeholder:text-museum-muted transition-colors duration-200 focus-ring disabled:opacity-50",
          error ? "border-error" : "border-museum-border",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

