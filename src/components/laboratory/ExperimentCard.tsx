import React from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";

interface ExperimentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experimentNumber: string;
  title: string;
  status: "EXPERIMENTAL" | "IN PROGRESS" | "COMPLETED" | "ARCHIVED";
  technology: string[];
  description: string;
  imageUrl?: string;
  onRun?: () => void;
}

export const ExperimentCard = React.forwardRef<HTMLDivElement, ExperimentCardProps>(
  ({ className, experimentNumber, title, status, technology, description, imageUrl, onRun, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex flex-col overflow-hidden rounded-[6px] border border-museum-border bg-museum-surface transition-all duration-200 hover:border-museum-gold-dim",
          className
        )}
        {...props}
      >
        <div className="relative aspect-video overflow-hidden bg-museum-charcoal">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-museum-charcoal opacity-50" />
          )}
        </div>
        
        <div className="flex flex-col gap-6 p-6 md:p-8 flex-1">
          <div className="flex items-center justify-between">
            <span className="label-caps text-museum-muted">{experimentNumber}</span>
            <span className="label-caps text-museum-dim">{status}</span>
          </div>
          
          <div>
            <h3 className="heading-md text-museum-white mb-2">{title}</h3>
            <p className="body-sm text-museum-muted line-clamp-2">{description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {technology.map((tech) => (
              <span key={tech} className="label-metadata text-museum-dim">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-auto pt-6">
            <Button variant="primary" className="w-full" onClick={onRun}>
              RUN EXPERIMENT ?
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
ExperimentCard.displayName = "ExperimentCard";

