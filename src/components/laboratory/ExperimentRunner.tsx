"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize, Minimize, RotateCcw, AlertTriangle, Eye, ArrowDown } from "lucide-react";
import { Experiment } from "@/types/experiment";
import { SpectralDiffusionRunner } from "./runners/SpectralDiffusionRunner";
import { RaymarchedSocketsRunner } from "./runners/RaymarchedSocketsRunner";
import { ExperimentErrorBoundary } from "./ErrorBoundary";

interface RunnerProps {
  experiment: Experiment;
}

export function ExperimentRunner({ experiment }: RunnerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [wireframe, setWireframe] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        setWebGLSupported(!!gl);
      } catch {
        setWebGLSupported(false);
      }
    }, 0);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setTimeout(() => setReducedMotion(mediaQuery.matches), 0);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleReset = () => {
    setKey(prev => prev + 1);
  };

  if (webGLSupported === null) {
    return <div className="aspect-video bg-museum-charcoal animate-pulse rounded-[4px]" />;
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-[4px] border border-museum-border bg-museum-black shadow-2xl group transition-all duration-500 ${isFullscreen ? "fixed inset-0 z-50 rounded-none border-none aspect-auto" : "aspect-video md:aspect-[21/9] lg:aspect-[16/8]"}`}>
      
      {/* 3D / WebGL Container */}
      <div className="absolute inset-0 z-0">
        <ExperimentErrorBoundary>
          {!webGLSupported ? (
            <StaticFallback experiment={experiment} />
          ) : experiment.slug === "spectral-diffusion" ? (
            <SpectralDiffusionRunner key={key} reducedMotion={reducedMotion} wireframe={wireframe} />
          ) : experiment.slug === "raymarched-sockets" ? (
            <RaymarchedSocketsRunner key={key} reducedMotion={reducedMotion} wireframe={wireframe} />
          ) : (
            <StaticFallback experiment={experiment} />
          )}
        </ExperimentErrorBoundary>
      </div>

      {/* Overlay Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-museum-black/80 via-transparent to-museum-black/40 z-10" />

      {/* HUD: Top-Left */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2.5 px-3 py-1.5 bg-museum-surface/80 backdrop-blur-md border border-museum-border rounded-[4px]">
        {!webGLSupported ? (
          <AlertTriangle className="w-3 h-3 text-museum-dim" />
        ) : (
          <span className="w-2 h-2 rounded-full bg-museum-gold animate-pulse" />
        )}
        <span className="label-metadata text-[11px] tracking-wider text-museum-white">
          {!webGLSupported ? "VIEWPORT: STATIC PREVIEW (WEBGL UNAVAILABLE)" : "VIEWPORT: LIVE BUFFER"}
        </span>
      </div>

      {/* HUD: Top-Right Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        {webGLSupported && (
          <>
            <button 
              onClick={handleReset}
              className="px-2.5 py-1 bg-museum-surface/80 hover:bg-museum-surface-elevated border border-museum-border hover:border-museum-gold text-museum-dim hover:text-museum-white label-caps text-[10px] tracking-widest uppercase backdrop-blur-md rounded transition-all focus-ring"
            >
              <RotateCcw className="w-3 h-3 inline mr-1" />
              RESET
            </button>
            <button 
              onClick={() => setWireframe(!wireframe)}
              className={`px-2.5 py-1 border label-caps text-[10px] tracking-widest uppercase backdrop-blur-md rounded transition-all focus-ring ${wireframe ? "bg-museum-surface-elevated border-museum-gold text-museum-gold" : "bg-museum-surface/80 hover:bg-museum-surface border-museum-border text-museum-dim hover:text-museum-white"}`}
            >
              <Eye className="w-3 h-3 inline mr-1" />
              WIREFRAME [{wireframe ? "ON" : "OFF"}]
            </button>
          </>
        )}
        <button 
          onClick={toggleFullscreen}
          className="p-1.5 bg-museum-surface/80 hover:bg-museum-surface-elevated border border-museum-border hover:border-museum-gold text-museum-dim hover:text-museum-gold backdrop-blur-md rounded transition-all focus-ring" 
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>

      {/* HUD: Bottom-Left Directives */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 bg-museum-black/80 backdrop-blur-md border border-museum-border/60 rounded-[4px]">
        <span className="label-metadata text-[11px] tracking-wider text-museum-muted">
          {reducedMotion ? "REDUCED MOTION: ACTIVE" : "DRAG TO ROTATE — HOVER TO DISPLACE"}
        </span>
      </div>

      {/* HUD: Bottom-Right Scroll Anchor */}
      {!isFullscreen && (
        <div className="absolute bottom-4 right-4 z-20">
          <a 
            className="inline-flex items-center gap-1.5 text-museum-gold label-caps tracking-widest uppercase hover:underline underline-offset-4 bg-museum-surface/90 px-3 py-1.5 border border-museum-border hover:border-museum-gold rounded backdrop-blur-md transition-all focus-ring" 
            href="#monograph-dossier"
          >
            <span>VIEW DOSSIER</span>
            <ArrowDown className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
}

function StaticFallback({ experiment }: { experiment: Experiment }) {
  return (
    <div className="relative w-full h-full bg-museum-charcoal">
      {experiment.previewMedia?.src ? (
        <Image 
          src={experiment.previewMedia.src} 
          alt={experiment.previewMedia.alt || "Experiment Preview"} 
          fill
          className="object-cover opacity-60"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-museum-dim label-caps tracking-widest uppercase">
            No Preview Available
          </span>
        </div>
      )}
    </div>
  );
}
