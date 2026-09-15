import React from "react";
import { cn } from "@/utils/cn";
import { Button } from "./Button";

interface StateMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  variant?: "loading" | "empty" | "error";
  actionLabel?: string;
  onAction?: () => void;
}

export const StateMessage = React.forwardRef<HTMLDivElement, StateMessageProps>(
  ({ className, message, variant = "empty", actionLabel, onAction, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-[400px] flex-col items-center justify-center p-8 text-center",
          className
        )}
        {...props}
      >
        <p className={cn("label-caps mb-6", variant === "error" ? "text-error" : "text-museum-muted")}>
          {message}
        </p>
        
        {variant === "loading" && (
          <div className="h-[1px] w-24 overflow-hidden bg-museum-border">
            <div className="h-full w-1/3 bg-museum-gold animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
        )}

        {actionLabel && onAction && (
          <Button variant="secondary" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    );
  }
);
StateMessage.displayName = "StateMessage";

