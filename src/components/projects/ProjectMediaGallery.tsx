import React from "react";
import type { Media } from "@/types/project";
import Image from "next/image";

interface ProjectMediaGalleryProps {
  gallery: Media[];
  artifactNumber: number | string;
}

export function ProjectMediaGallery({ gallery, artifactNumber }: ProjectMediaGalleryProps) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const formatArtifact = (num: number | string) => {
    return num.toString().padStart(3, '0');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {gallery.map((media, idx) => (
        <figure key={idx} className="flex flex-col bg-museum-surface border border-museum-border rounded overflow-hidden group m-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-museum-charcoal">
            {media.type === "video" ? (
              <video 
                src={media.src}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                controls
                playsInline
                preload="metadata"
                aria-label={media.alt || `Gallery video ${idx + 1}`}
              >
                <track kind="captions" />
              </video>
            ) : (
              <Image
                src={media.src}
                alt={media.alt || `Gallery visual ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={idx < 2}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            <div className="absolute top-4 left-4 bg-museum-charcoal/85 backdrop-blur px-2.5 py-1 rounded border border-museum-border label-metadata text-[10px] text-museum-gold">
              RECORD #{formatArtifact(artifactNumber)}0{idx + 1}-{media.type === "video" ? "V" : "A"}
            </div>
          </div>
          
          {/* Wall Label Placard Style */}
          <figcaption className="p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between label-caps uppercase text-museum-muted">
              <span>{media.type === "video" ? "MOTION RECORD" : "INSTALLATION VIEW"} {String.fromCharCode(65 + idx)}</span>
              <span>{media.type === "video" ? "MP4" : "ARCHIVAL STILL"}</span>
            </div>
            
            {media.caption && (
              <p className="body-sm text-museum-dim leading-relaxed">
                {media.caption}
              </p>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}