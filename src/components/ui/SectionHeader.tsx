import React from "react";
import { cn } from "@/utils/cn";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  title: string;
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, number, title, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
        <span className="label-caps text-museum-muted">{number}</span>
        <h2 className="display-md text-museum-white">{title}</h2>
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

