import React from "react";
import { cn } from "@/utils/cn";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16", className)}
      {...props}
    />
  )
);
Container.displayName = "Container";

export type GridProps = React.HTMLAttributes<HTMLDivElement>;

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12",
        className
      )}
      {...props}
    />
  )
);
Grid.displayName = "Grid";
