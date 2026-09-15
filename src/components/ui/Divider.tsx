import React from "react";
import { cn } from "@/utils/cn";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          "shrink-0 bg-museum-border border-none",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

