import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proof Formats",
  description:
    "Inspectable FlowMason AI proof formats for prototypes, custom AI agents, documentation pipelines and delivery workflows.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Proof formats
            </p>
            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.055em] text-stone-950 sm:text-7xl">
              No fake logos. Inspect the work.
            </h1>
          </div>
          <p className="border-l border-stone-300 pl-6 text-xl leading-9 text-stone-700">
            Until public client stories can be shown, serious buyers should inspect the shape
            of the work itself: briefs, workflow maps, prototypes, tests and handoff notes.
          </p>
        </div>
      </section>

      <section className="bg-[#eee7da] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="border border-stone-300 bg-[#fffaf0] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
                {study.category}
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-950">
                {study.title}
              </h2>
              <p className="mt-5 leading-8 text-stone-700">{study.result}</p>
              <div className="mt-8 border-t border-stone-300 pt-5">
                <h3 className="font-semibold text-stone-950">What buyers can inspect</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Workflow map, specifications, validation checklist, documentation structure and
                  operating rules that make the output repeatable.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
