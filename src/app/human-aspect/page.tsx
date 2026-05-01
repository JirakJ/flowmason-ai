import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { humanPrinciples, nameMeaning } from "@/lib/content";

export const metadata: Metadata = {
  title: "Human Aspect",
  description:
    "How FlowMason AI keeps human judgment, ownership and accountability inside AI-assisted delivery systems.",
};

export default function HumanAspectPage() {
  return (
    <>
      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
              Human aspect
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              AI speeds up the work. Humans still decide what matters.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              FlowMason AI is built around a simple belief: automation is only useful when the
              business judgment around it is explicit. The point is not to remove humans from the
              system. The point is to stop wasting human attention on work that should have been
              structured.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Bring a workflow to review
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                See services
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{nameMeaning.title}</h2>
            <p className="mt-5 leading-8 text-slate-300">{nameMeaning.body}</p>
            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                Working definition
              </p>
              <p className="mt-4 text-lg leading-8 text-cyan-50">
                A good AI workflow is not a bot. It is a business process with better leverage:
                clearer inputs, faster drafting, better memory, visible risk and a human owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Principles"
            title="Where humans stay in the system."
            body="FlowMason AI separates the work AI can accelerate from the decisions that should remain human, visible and accountable."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {humanPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[2rem] border border-white/10 bg-slate-950 p-8">
                <h2 className="text-2xl font-semibold text-white">{principle.title}</h2>
                <p className="mt-4 leading-8 text-slate-400">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            {
              title: "Before AI acts",
              body: "We define the job, business constraints, acceptable sources, review criteria and what failure looks like.",
            },
            {
              title: "While AI works",
              body: "We keep the flow narrow, observable and testable instead of letting one prompt become a hidden business process.",
            },
            {
              title: "After output exists",
              body: "We decide what can be trusted, what needs review, what must be documented and what should be improved next.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
