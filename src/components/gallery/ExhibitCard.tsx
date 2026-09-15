import React from "react";
import { cn } from "@/utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExhibitCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  artifactNumber: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technology: string[];
  imageUrl?: string;
  featured?: boolean;
}

export const ExhibitCard = React.forwardRef<HTMLAnchorElement, ExhibitCardProps>(
  ({ className, artifactNumber, title, category, year, description, technology, imageUrl, href = "#", featured = false, ...props }, ref) => {
    
    // Feature variant (12-column layout match)
    if (featured) {
      return (
        <Link
          href={href}
          ref={ref}
          className={cn(
            "group block overflow-hidden rounded-[6px] border border-museum-border bg-museum-surface transition-all duration-300 hover:border-museum-gold-dim hover:bg-museum-surface-elevated focus-ring w-full",
            className
          )}
          {...props}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Archival Media Bay */}
            <div className="lg:col-span-8 relative aspect-[16/10] lg:aspect-auto min-h-[420px] lg:min-h-[580px] bg-museum-charcoal overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-museum-border">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-museum-charcoal opacity-50" />
              )}
              <div className="absolute top-6 left-6 bg-museum-charcoal/80 backdrop-blur-md px-3 py-1.5 border border-museum-border text-museum-gold label-caps">
                CENTRAL PAVILION
              </div>
              <div className="absolute bottom-6 left-6 label-metadata text-museum-muted bg-museum-charcoal/70 backdrop-blur-sm px-3 py-1 border border-museum-border">
                {technology.slice(0,3).join(" / ").toUpperCase()}
              </div>
            </div>
            
            {/* Wall Text & Accession Placard */}
            <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-museum-surface">
              <div className="space-y-6">
                <div>
                  <p className="label-metadata text-museum-gold mb-2 uppercase">{category}</p>
                  <h3 className="heading-lg text-museum-white leading-tight">
                    {title}
                  </h3>
                </div>
                <div className="w-12 h-px bg-museum-border"></div>
                <p className="body-md text-museum-muted font-light line-clamp-4">
                  {description}
                </p>
                
                {/* Technical Specifications Placard */}
                <div className="bg-museum-charcoal p-5 border border-museum-border rounded space-y-3">
                  <span className="label-caps text-museum-muted block pb-2 border-b border-museum-border/60">
                    SPECIFICATION ARCHIVE
                  </span>
                  <div className="grid grid-cols-2 gap-2 label-metadata">
                    <span className="text-museum-dim">PRIMARY TECH</span>
                    <span className="text-right text-museum-white">{technology[0] || "N/A"}</span>
                    <span className="text-museum-dim">YEAR</span>
                    <span className="text-right text-museum-white">{year}</span>
                    <span className="text-museum-dim">STATUS</span>
                    <span className="text-right text-museum-gold font-mono uppercase">Catalogued</span>
                  </div>
                </div>
                
                {/* Tech Chips */}
                <div className="pt-2">
                  <span className="label-caps text-museum-muted block mb-3">ENGINEERING FRAMEWORK</span>
                  <div className="flex flex-wrap gap-2">
                    {technology.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-museum-charcoal text-museum-white label-metadata border border-museum-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Curatorial Action Plinth */}
              <div className="pt-10 border-t border-museum-border mt-8 flex items-center justify-between">
                <span className="inline-flex items-center space-x-3 text-museum-gold font-label-caps tracking-widest label-caps">
                  <span>INSPECT ARTIFACT</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
                <span className="label-metadata text-museum-dim">{artifactNumber}</span>
              </div>
            </div>
          </div>
        </Link>
      );
    }

    // Standard variant (Multi-column layout match)
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "group flex flex-col justify-between overflow-hidden rounded-[6px] border border-museum-border bg-museum-surface transition-all duration-300 hover:border-museum-gold-dim hover:bg-museum-surface-elevated focus-ring h-full",
          className
        )}
        {...props}
      >
        <div className="flex flex-col h-full">
          {/* Media Container */}
          <div className="relative aspect-[4/3] bg-museum-charcoal overflow-hidden border-b border-museum-border shrink-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title} 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-museum-charcoal opacity-50" />
            )}
            <div className="absolute top-4 left-4 bg-museum-charcoal/80 backdrop-blur-md px-2.5 py-1 border border-museum-border text-museum-white label-caps">
              {artifactNumber}
            </div>
            <div className="absolute bottom-4 right-4 bg-museum-charcoal/90 px-2 py-0.5 border border-museum-border text-museum-gold label-metadata font-mono uppercase">
              {year}
            </div>
          </div>
          
          {/* Content Bay */}
          <div className="p-6 space-y-4 flex-grow flex flex-col">
            <div className="flex justify-between items-baseline">
              <span className="label-caps text-museum-muted uppercase">{category}</span>
            </div>
            <h3 className="heading-md text-museum-white leading-tight transition-colors group-hover:text-museum-gold">
              {title}
            </h3>
            <p className="body-sm text-museum-muted line-clamp-3 mb-4">
              {description}
            </p>
            
            {/* Technical Chips */}
            <div className="pt-2 flex flex-wrap gap-1.5 mt-auto">
              {technology.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-museum-charcoal text-museum-dim label-metadata border border-museum-border/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Placard Bar */}
        <div className="px-6 py-4 border-t border-museum-border/70 flex items-center justify-between mt-auto shrink-0 bg-museum-surface">
          <span className="inline-flex items-center space-x-2 text-museum-gold label-caps tracking-widest group-hover:text-museum-gold-bright transition-colors">
            <span>VIEW EXHIBIT</span>
            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }
);
ExhibitCard.displayName = "ExhibitCard";

