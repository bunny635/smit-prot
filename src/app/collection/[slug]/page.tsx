import React from "react";
import { getProjectBySlug, getProjects } from "@/lib/project-api";
import { notFound } from "next/navigation";
import { GalleryAtmosphereWrapper } from "@/components/three/GalleryAtmosphereWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, ExternalLink, ArrowLeft } from "lucide-react";
import { MUSEUM_ROUTES } from "@/config/navigation";
import { ExhibitCard } from "@/components/gallery/ExhibitCard";
import { ProjectMediaGallery } from "@/components/projects/ProjectMediaGallery";

export const dynamicParams = true;

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(p => {
    const project = getProjectBySlug(p.slug);
    if (!project) return { title: "Not Found" };
    return {
      title: `${project.title} | Case Study | The Digital Museum`,
      description: project.description,
    };
  });
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const project = getProjectBySlug(p.slug);
  
  if (!project) {
    notFound();
  }

  // Get related projects for the footer (excluding current)
  const relatedProjects = getProjects().filter((pItem) => pItem.id !== project.id).slice(0, 3);

  return (
    <div className="relative min-h-[calc(100vh-72px)] w-full overflow-x-hidden bg-museum-black selection:bg-museum-gold selection:text-museum-black">
      {/* Decorative 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <GalleryAtmosphereWrapper />
      </div>

      <div className="relative z-10">
        {/* BACK TO COLLECTION NAV */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 pt-8 pb-4">
          <Link 
            href={MUSEUM_ROUTES.COLLECTION}
            className="inline-flex items-center gap-2 label-caps text-museum-muted hover:text-museum-white transition-colors focus-ring py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO COLLECTION</span>
          </Link>
        </div>

        {/* 1. CASE STUDY HERO */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 pt-4 pb-16 md:pb-24">
          {/* Breadcrumb / Curatorial Accession Strip */}
          <div className="flex flex-wrap items-center justify-between gap-y-3 pb-6 border-b border-museum-border text-museum-muted">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest label-metadata">
              <span className="text-museum-gold font-medium">ARTIFACT {project.artifactNumber.toString().padStart(3, "0")}</span>
              <span className="text-museum-border">{`//`}</span>
              <span>CATALOGUE #{project.year}-MN-098</span>
              <span className="hidden sm:inline text-museum-border">{`//`}</span>
              <span className="hidden sm:inline">HALL 03 – SPATIAL</span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[11px] tracking-widest text-museum-dim">
              <span className="px-2 py-0.5 border border-museum-border rounded bg-museum-surface">SERIES VIII</span>
              <span className="hidden md:inline text-museum-muted">PERMANENT REGISTER</span>
            </div>
          </div>

          {/* Title & Headline */}
          <div className="pt-12 pb-10">
            <h1 className="heading-lg md:display-lg text-museum-white max-w-5xl leading-tight">
              {project.title}
            </h1>
            <p className="mt-6 body-lg text-museum-muted max-w-3xl font-light">
              {project.description}
            </p>
          </div>

          {/* Metadata Sub-bar (Placard Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-museum-surface border border-museum-border rounded mb-12">
            <div className="flex flex-col gap-1">
              <span className="label-caps uppercase text-museum-muted">Medium &amp; Category</span>
              <span className="label-metadata text-museum-white">{project.category}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="label-caps uppercase text-museum-muted">Accession Year</span>
              <span className="label-metadata text-museum-white">MMXXV [{project.year}]</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="label-caps uppercase text-museum-muted">Provenance Record</span>
              <span className="label-metadata text-museum-white">Sanctum Archive</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="label-caps uppercase text-museum-muted">Curation Edition</span>
              <span className="label-metadata text-museum-gold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-museum-gold animate-pulse"></span>
                01 of 01 (Original Plinth)
              </span>
            </div>
          </div>

          {/* Cinematic Artifact 16:9 Showcase Frame */}
          <div className="relative w-full rounded border border-museum-border bg-museum-charcoal overflow-hidden group">
            {/* Corner crosshair registration markers */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none label-metadata text-[9px] text-museum-dim tracking-wider flex items-center gap-1">
              <span>+</span> <span>SEC_01.POS</span>
            </div>
            <div className="absolute top-4 right-4 z-20 pointer-events-none label-metadata text-[9px] text-museum-gold tracking-wider bg-museum-charcoal/80 backdrop-blur px-3 py-1.5 border border-museum-border rounded flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-museum-gold animate-ping"></span>
              {project.technologies[0]?.name?.toUpperCase() || "WEBGL"} RUNTIME
            </div>
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none label-metadata text-[9px] text-museum-dim tracking-wider">
              COORDINATES [52.5200° N, 13.4050° E]
            </div>

            <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-museum-black">
              {project.heroImage ? (
                <Image 
                  src={project.heroImage.src} 
                  alt={project.heroImage.alt} 
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                  sizes="100vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-museum-charcoal text-museum-dim label-caps">
                  NO IMAGERY ARCHIVED
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-museum-black via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </section>

        {/* 01 OVERVIEW */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-16 md:py-24 border-t border-museum-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="label-metadata text-museum-gold tracking-widest block mb-4">01 // OVERVIEW</span>
              <h2 className="heading-md text-museum-white">{project.title}</h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6 text-museum-muted body-lg font-light">
              <p>
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* 02 PROBLEM & 03 APPROACH */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-16 md:py-24 border-t border-museum-border">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-museum-border">
            {/* Column 1: Problem */}
            <div className="pb-12 md:pb-0 md:pr-16 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="label-metadata text-museum-gold tracking-widest">02 // COMPUTATIONAL CHALLENGE</span>
                <span className="label-caps text-museum-dim hidden sm:inline-block">DIAGNOSTIC #A1</span>
              </div>
              <h3 className="heading-sm text-museum-white">Problem Statement</h3>
              <p className="body-md text-museum-muted leading-relaxed whitespace-pre-wrap">
                {project.problem}
              </p>
            </div>
            
            {/* Column 2: Approach */}
            <div className="pt-12 md:pt-0 md:pl-16 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="label-metadata text-museum-gold tracking-widest">03 // CURATORIAL APPROACH</span>
                <span className="label-caps text-museum-dim hidden sm:inline-block">METHODOLOGY #C4</span>
              </div>
              <h3 className="heading-sm text-museum-white">Implementation Strategy</h3>
              <p className="body-md text-museum-muted leading-relaxed whitespace-pre-wrap">
                {project.approach}
              </p>
            </div>
          </div>
        </section>

        {/* 04 TECHNOLOGY ARCHIVE & STACK */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-16 md:py-24 border-t border-museum-border bg-museum-surface/30">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="label-metadata text-museum-gold tracking-widest">04 // SPECIFICATION ARCHIVE &amp; TECH STACK</span>
              <span className="label-metadata text-museum-dim hidden sm:inline-block">ENGINEERING PROTOCOL V3.8</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="p-4 border border-museum-border bg-museum-surface rounded flex flex-col justify-between min-h-[96px] hover:border-museum-gold/50 transition-colors">
                  <span className="label-metadata text-[10px] text-museum-dim">FRAMEWORK</span>
                  <span className="body-sm font-medium text-museum-white my-2">{tech.name}</span>
                  <span className="label-metadata text-[10px] text-museum-gold uppercase">INTEGRATED</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 CHALLENGES & 06 SOLUTION */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-20 md:py-32 border-t border-museum-border">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <div className="flex items-center gap-3 label-metadata text-museum-gold tracking-widest">
              <span>05 // DIALECTIC</span>
              <span className="text-museum-dim">&amp;</span>
              <span>06 // SYNTHESIS</span>
            </div>
            
            {/* Pull Quote */}
            <blockquote className="p-8 md:p-12 bg-museum-surface border-l-2 border-museum-gold border-y border-r border-museum-border rounded">
              <p className="heading-md md:heading-lg text-museum-white italic leading-snug">
                &quot;Rendering interactive artifacts requires forgetting the boundaries between sculpture and calculation.&quot;
              </p>
              <cite className="mt-6 block label-caps text-museum-dim uppercase tracking-widest not-italic">
                — Curatorial Log, Sanctum Archive
              </cite>
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 body-md text-museum-muted">
              <div>
                <h4 className="heading-sm text-museum-white mb-4">Technical Impediments</h4>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="leading-relaxed flex gap-3">
                      <span className="text-museum-gold mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="heading-sm text-museum-white mb-4">Engineered Resolution</h4>
                <ul className="space-y-4">
                  {project.solutions.map((solution, idx) => (
                    <li key={idx} className="leading-relaxed flex gap-3">
                      <span className="text-museum-gold mt-1">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 07 GALLERY: ARCHIVAL VISUAL RECORD */}
        {project.gallery.length > 0 && (
          <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-16 md:py-24 border-t border-museum-border">
            <div className="flex flex-col gap-10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="label-metadata text-museum-gold tracking-widest block mb-2">07 // ARCHIVAL VISUAL RECORD — HALL 03</span>
                  <h2 className="heading-md text-museum-white">Spatial Installations &amp; Resonances</h2>
                </div>
                <span className="label-metadata text-[11px] text-museum-dim hidden md:inline-block">EXHIBIT PHOTOGRAMMETRY &amp; SPECTRAL LOG</span>
              </div>
              
              <ProjectMediaGallery gallery={project.gallery} artifactNumber={project.artifactNumber} />
            </div>
          </section>
        )}

        {/* 08 RESULT & CURATORIAL METRICS */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-16 md:py-24 border-t border-museum-border bg-museum-surface/20">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <span className="label-metadata text-museum-gold tracking-widest">08 // PERFORMANCE &amp; ARCHIVAL IMPACT</span>
              <span className="label-metadata text-museum-dim hidden md:inline-block">BENCHMARK MMXXV</span>
            </div>
            
            <p className="body-md text-museum-muted max-w-4xl pt-2 leading-relaxed whitespace-pre-wrap">
              {project.results}
            </p>
          </div>
        </section>

        {/* 09 LINKS & CURATORIAL ACTIONS */}
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-16 md:py-24 border-t border-museum-border">
          <div className="p-8 md:p-12 bg-museum-surface border border-museum-border rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <span className="label-metadata text-museum-gold tracking-widest">09 // ACCESSION &amp; CODE REPOSITORY</span>
              <h3 className="heading-sm text-museum-white">Experience Real-Time Simulation</h3>
              <p className="body-sm text-museum-muted">Inspect the artifact in your active environment.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-museum-surface border border-museum-gold/50 text-museum-white label-caps tracking-widest uppercase rounded hover:bg-museum-surface-elevated hover:border-museum-gold transition-all duration-200 shadow-sm flex items-center gap-2 focus-ring"
                >
                  <span>LIVE PROJECT</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.sourceUrl && (
                <a 
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent border border-museum-border text-museum-dim label-caps tracking-widest uppercase rounded hover:border-museum-muted hover:text-museum-white transition-all duration-200 flex items-center gap-2 focus-ring"
                >
                  <span>VIEW SOURCE</span>
                  <Code className="w-4 h-4" />
                </a>
              )}
              {(!project.liveUrl && !project.sourceUrl) && (
                <span className="label-caps text-museum-dim">NO EXTERNAL ACCESSIONS AVAILABLE</span>
              )}
            </div>
          </div>
        </section>

        {/* 10 MORE FROM THE COLLECTION (Footer Showcase) */}
        {relatedProjects.length > 0 && (
          <section className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 py-20 md:py-32 border-t border-museum-border bg-museum-surface-elevated">
            <div className="flex flex-col gap-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="label-caps uppercase text-museum-dim tracking-widest block mb-2">CHAMBER ROTATION</span>
                  <h2 className="heading-md text-museum-white">Related Chamber Exhibits</h2>
                </div>
                <Link 
                  href={MUSEUM_ROUTES.COLLECTION}
                  className="label-caps uppercase tracking-widest text-museum-gold hover:text-museum-gold-bright transition-colors focus-ring flex items-center gap-2"
                >
                  <span>VIEW ENTIRE ARCHIVE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* 3-Column Exhibition Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map(related => (
                  <ExhibitCard
                    key={related.id}
                    artifactNumber={`ARTIFACT ${related.artifactNumber.toString().padStart(3, "0")}`}
                    title={related.title}
                    category={related.category}
                    year={related.year.toString()}
                    description={related.description}
                    technology={related.technologies.map(t => t.name)}
                    imageUrl={related.thumbnail.src}
                    href={`${MUSEUM_ROUTES.COLLECTION}/${related.slug}`}
                    featured={false}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}