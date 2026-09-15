import React from "react";
import { getProjects } from "@/lib/project-api";
import { Container, Grid } from "@/components/ui/Grid";
import { ExhibitCard } from "@/components/gallery/ExhibitCard";
import { StateMessage } from "@/components/ui/StateMessage";
import { MUSEUM_ROUTES } from "@/config/navigation";
import { GalleryAtmosphereWrapper } from "@/components/three/GalleryAtmosphereWrapper";

export const metadata = {
  title: "Selected Project Collection | The Digital Museum",
  description: "Featured works exploring digital product engineering.",
};

export default function CollectionPage() {
  const allProjects = getProjects();
  const featuredProject = allProjects.find(p => p.featured) || allProjects[0];
  const remainingProjects = allProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <div className="relative min-h-[calc(100vh-72px)] w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <GalleryAtmosphereWrapper />
      </div>
      
      <Container className="relative z-10 py-12 md:py-20 flex flex-col space-y-20">
        {/* CURATORIAL HEADER BLOCK */}
        <section className="w-full border-b border-museum-border pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <span className="label-caps text-museum-gold tracking-widest">ARCHIVE REGISTRY // SERIES 2025 – ROOM 03</span>
                <span className="w-8 h-px bg-museum-border"></span>
                <span className="label-metadata text-museum-muted">CURATORIAL BAY WEST</span>
              </div>
              <h1 className="heading-lg md:display-md text-museum-white tracking-tight">
                SELECTED COLLECTION
              </h1>
              <p className="body-lg text-museum-muted max-w-2xl font-light">
                Featured works exploring digital product engineering, physical computing artifacts, and interactive spatial topologies rendered in real time.
              </p>
            </div>
          </div>
        </section>

        {allProjects.length === 0 ? (
          <StateMessage variant="empty" message="NO EXHIBITS ON DISPLAY" />
        ) : (
          <>
            {/* FEATURED SPECIMEN */}
            {featuredProject && (
              <section className="w-full flex flex-col space-y-6">
                <div className="flex justify-between items-baseline border-b border-museum-border pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-museum-gold rounded-full animate-pulse"></span>
                    <h2 className="label-caps text-museum-white tracking-widest">ARTIFACT {featuredProject.artifactNumber.toString().padStart(3, "0")} - FEATURED SPECIMEN</h2>
                  </div>
                  <span className="label-metadata text-museum-muted font-mono hidden md:inline-block">ACCESSION: #2025-MN-098</span>
                </div>
                <ExhibitCard
                  artifactNumber={`ARTIFACT ${featuredProject.artifactNumber.toString().padStart(3, "0")}`}
                  title={featuredProject.title}
                  category={featuredProject.category}
                  year={featuredProject.year.toString()}
                  description={featuredProject.description}
                  technology={featuredProject.technologies.map(t => t.name)}
                  imageUrl={featuredProject.thumbnail.src}
                  featured={true} 
                  href={`${MUSEUM_ROUTES.COLLECTION}/${featuredProject.slug}`}
                />
              </section>
            )}

            {/* PERMANENT REPOSITORY (3-COLUMN GRID) */}
            {remainingProjects.length > 0 && (
              <section className="w-full flex flex-col space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-museum-border pb-4 gap-4">
                  <div>
                    <span className="label-caps text-museum-gold tracking-widest block mb-1">ARCHIVAL SECTOR // SUBSYSTEMS</span>
                    <h2 className="heading-md text-museum-white">Gallery Chambers</h2>
                  </div>
                  <div className="flex items-center space-x-4 label-metadata text-museum-muted">
                    <span className="hidden md:inline-block">SORT: CATALOGUE NUMBER</span>
                    <span className="w-1 h-1 bg-museum-border rounded-full hidden md:inline-block"></span>
                    <span>STATUS: CATALOGUED</span>
                  </div>
                </div>
                
                <Grid>
                  {remainingProjects.map((project) => (
                    <div key={project.id} className="col-span-4">
                      <ExhibitCard
                        artifactNumber={`ARTIFACT ${project.artifactNumber.toString().padStart(3, "0")}`}
                        title={project.title}
                        category={project.category}
                        year={project.year.toString()}
                        description={project.description}
                        technology={project.technologies.map(t => t.name)}
                        imageUrl={project.thumbnail.src}
                        featured={false} 
                        href={`${MUSEUM_ROUTES.COLLECTION}/${project.slug}`}
                      />
                    </div>
                  ))}
                </Grid>
              </section>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

