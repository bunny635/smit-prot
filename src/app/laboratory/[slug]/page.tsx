import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Terminal, ExternalLink } from "lucide-react";
import { getExperimentBySlug, getExperiments } from "@/lib/experiment-api";
import { ExperimentRunner } from "@/components/laboratory/ExperimentRunner";


interface ExperimentPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const experiments = getExperiments();
  return experiments.map((exp) => ({
    slug: exp.slug,
  }));
}

export function generateMetadata({ params }: ExperimentPageProps) {
  const experiment = getExperimentBySlug(params.slug);
  if (!experiment) return { title: "Experiment Not Found" };
  
  return {
    title: `EXP ${String(experiment.experimentNumber).padStart(3, '0')} | ${experiment.title}`,
    description: experiment.description,
  };
}

export default function ExperimentPage({ params }: ExperimentPageProps) {
  const experiment = getExperimentBySlug(params.slug);

  if (!experiment) {
    notFound();
  }

  const expNumberString = String(experiment.experimentNumber).padStart(3, '0');

  return (
    <div className="min-h-screen bg-museum-black selection:bg-museum-gold selection:text-museum-black pb-24">
      <main className="mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-16 pt-12 md:pt-20">
        
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-12">
          <Link 
            href="/laboratory" 
            className="inline-flex items-center gap-2 label-caps text-museum-muted hover:text-museum-gold transition-colors duration-200 focus-ring rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO LABORATORY</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-museum-border">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="label-caps tracking-widest text-museum-gold">
                  EXPERIMENT {expNumberString}
                </span>
                <span className="px-2 py-0.5 border border-museum-gold/60 rounded-[4px] label-caps text-[9px] tracking-widest text-museum-gold bg-museum-charcoal/40">
                  {experiment.status}
                </span>
              </div>
              <h1 className="heading-xl md:display-md text-museum-white">
                {experiment.title}
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-2 md:max-w-[320px] md:justify-end">
              {experiment.technologies.map(tech => (
                <span key={tech.name} className="px-3 py-1 bg-museum-surface border border-museum-border rounded-[4px] label-metadata text-[11px] text-museum-muted">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          <p className="body-lg font-light text-museum-muted mt-6 max-w-3xl">
            {experiment.description}
          </p>
        </header>

        {/* Interactive Runner */}
        <section className="mb-20">
          <ExperimentRunner experiment={experiment} />
        </section>

        {/* Narrative Sections */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* SECTION 02 // QUESTION */}
          {experiment.question && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-museum-border">
              <div className="lg:col-span-4">
                <span className="label-caps text-museum-gold uppercase tracking-widest block mb-1">
                  SECTION 02
                </span>
                <h2 className="heading-sm text-museum-white">QUESTION</h2>
                <div className="label-metadata text-museum-dim mt-2 tracking-wider">
                  What is being explored?
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="body-lg text-museum-muted font-light leading-relaxed">
                  {experiment.question}
                </p>
              </div>
            </section>
          )}

          {/* SECTION 03 // APPROACH */}
          {experiment.approach && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-museum-border">
              <div className="lg:col-span-4">
                <span className="label-caps text-museum-gold uppercase tracking-widest block mb-1">
                  SECTION 03
                </span>
                <h2 className="heading-sm text-museum-white">APPROACH</h2>
                <div className="label-metadata text-museum-dim mt-2 tracking-wider">
                  Methodology & Implementation
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="body-lg text-museum-muted font-light leading-relaxed">
                  {experiment.approach}
                </p>
              </div>
            </section>
          )}

          {/* SECTION 04 // RESULT */}
          {experiment.result && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-museum-border">
              <div className="lg:col-span-4">
                <span className="label-caps text-museum-gold uppercase tracking-widest block mb-1">
                  SECTION 04
                </span>
                <h2 className="heading-sm text-museum-white">RESULT</h2>
                <div className="label-metadata text-museum-dim mt-2 tracking-wider">
                  Technical telemetry & evidence
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="body-lg text-museum-muted font-light leading-relaxed">
                  {experiment.result}
                </p>
              </div>
            </section>
          )}

          {/* SECTION 05 // OBSERVATIONS */}
          {experiment.observations && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-museum-border">
              <div className="lg:col-span-4">
                <span className="label-caps text-museum-gold uppercase tracking-widest block mb-1">
                  SECTION 05
                </span>
                <h2 className="heading-sm text-museum-white">OBSERVATIONS / LEARNINGS</h2>
                <div className="label-metadata text-museum-dim mt-2 tracking-wider">
                  Curatorial Synthesis
                </div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <h3 className="heading-sm text-museum-white">What was discovered?</h3>
                <blockquote className="border-l-2 border-museum-gold pl-6 py-2 my-4">
                  <p className="text-[20px] text-museum-white italic font-serif leading-relaxed">
                    &quot;{experiment.observations}&quot;
                  </p>
                  <cite className="block label-metadata text-museum-dim mt-3 not-italic uppercase tracking-widest">
                    — Curatorial Monograph Note, Vol. IV
                  </cite>
                </blockquote>
              </div>
            </section>
          )}

          {/* SECTION 06 // ARCHIVE REPOSITORY */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-museum-border">
            <div className="lg:col-span-4">
              <span className="label-caps text-museum-gold uppercase tracking-widest block mb-1">
                SECTION 06
              </span>
              <h2 className="heading-sm text-museum-white">ARCHIVE REPOSITORY</h2>
              <div className="label-metadata text-museum-dim mt-2 tracking-wider">
                Public Academic Artifacts
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="p-6 md:p-8 bg-museum-surface border border-museum-border rounded flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-museum-gold/60 transition-all duration-300">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-museum-gold" />
                    <span className="label-caps tracking-widest text-museum-gold uppercase">
                      EXPERIMENT SOURCE ARCHIVE
                    </span>
                  </div>
                  <h3 className="heading-sm text-museum-white">
                    Accession Specimen EXP-{expNumberString} Raw Assets
                  </h3>
                  <p className="body-sm text-museum-muted max-w-xl">
                    Contains verbatim source code, constants, and reproducible test suites under Sanctum Curatorial License.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {experiment.sourceUrl ? (
                    <a 
                      href={experiment.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-museum-black border border-museum-gold text-museum-white hover:bg-museum-surface label-caps tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-colors focus-ring"
                    >
                      <span>VIEW SOURCE</span>
                      <ExternalLink className="w-4 h-4 text-museum-gold" />
                    </a>
                  ) : (
                    <span className="px-5 py-2.5 bg-museum-surface border border-museum-border text-museum-dim label-caps tracking-widest uppercase rounded flex items-center justify-center text-center cursor-not-allowed">
                      SOURCE UNAVAILABLE
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
