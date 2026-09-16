import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { ArrowRight } from "lucide-react";

interface ExperimentCardProps extends React.HTMLAttributes<HTMLElement> {
  experimentNumber: string | number;
  title: string;
  status: string;
  technology: string[];
  description: string;
  imageUrl?: string;
  onRun?: () => void;
  runHref?: string;
}

export const ExperimentCard = React.forwardRef<HTMLElement, ExperimentCardProps>(
  ({ className, experimentNumber, title, status, technology, description, imageUrl, onRun, runHref, ...props }, ref) => {
    
    const Component = runHref ? "a" : "article";
    
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        href={runHref}
        onClick={!runHref ? onRun : undefined}
        className={cn(
          "group flex flex-col h-full bg-museum-surface p-6 border border-museum-border/60 rounded-[6px] hover:border-museum-gold/80 hover:bg-museum-surface-elevated transition-colors duration-300 block focus-ring",
          className
        )}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...props as any}
      >
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-museum-border/60">
          <span className="label-caps tracking-widest uppercase text-museum-gold">
            EXPERIMENT {String(experimentNumber).padStart(3, '0')}
          </span>
          <span className="px-2 py-0.5 border border-museum-gold/60 rounded-[4px] label-caps text-[9px] tracking-widest uppercase text-museum-gold bg-museum-charcoal/40">
            {status}
          </span>
        </div>
        
        <div className="relative w-full aspect-video rounded-[4px] overflow-hidden border border-museum-border bg-museum-black mb-6 flex items-center justify-center">
          {imageUrl ? (
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-museum-charcoal opacity-50" />
          )}
        </div>
        
        <h2 className="heading-sm text-museum-white mb-2 group-hover:text-museum-gold transition-colors duration-200">
          {title}
        </h2>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technology.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-[4px] bg-museum-charcoal border border-museum-border label-metadata text-[11px] text-museum-muted">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="body-sm text-museum-muted/90 leading-relaxed font-light mb-6 flex-grow">
          {description}
        </p>
        
        <div className="pt-3 border-t border-museum-border/60 flex items-center justify-between mt-auto">
          <div className="label-metadata text-museum-dim font-mono">
            EXP-ID: #{String(experimentNumber).padStart(3, '0')}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-museum-black border border-museum-gold text-museum-gold label-caps tracking-widest uppercase group-hover:bg-museum-surface group-hover:border-museum-gold-bright transition-all duration-200">
            <span>RUN EXPERIMENT</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Component>
    );
  }
);
ExperimentCard.displayName = "ExperimentCard";
