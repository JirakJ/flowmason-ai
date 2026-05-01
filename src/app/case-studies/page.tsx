import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Demo-based StreamForge AI case-study formats for prototypes, custom AI agents, documentation pipelines and full AI delivery workflows.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case studies"
            title="Proof formats without fake client claims."
            body="Before public client stories exist, StreamForge AI uses internal and demo-based case studies to show how delivery systems are structured, documented and validated."
          />
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-white/10 bg-slate-950 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{study.category}</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">{study.title}</h2>
              <p className="mt-5 leading-7 text-slate-400">{study.result}</p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-semibold text-white">What buyers can inspect</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Workflow map, specifications, validation checklist, documentation structure and the
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
