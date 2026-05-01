import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { humanPrinciples, nameMeaning } from "@/lib/content";

export const metadata: Metadata = {
  title: "Human Aspect",
  description:
    "How FlowMason AI keeps human judgment, ownership and accountability inside AI-assisted delivery systems.",
};

export default function HumanAspectPage() {
  return (
    <>
      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Human aspect
            </p>
            <h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-[-0.055em] text-stone-950 sm:text-7xl">
              AI should reduce busywork, not outsource judgment.
            </h1>
          </div>
          <p className="border-l border-stone-300 pl-6 text-xl leading-9 text-stone-700">
            FlowMason AI keeps business judgment in the open: what matters, what can fail,
            who owns the workflow, and where a human needs to say yes, no or not yet.
          </p>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-400">
              Working definition
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A good AI workflow is a business process with better leverage.
            </h2>
          </div>
          <div className="divide-y divide-stone-700 border-y border-stone-700">
            {[
              "Clearer inputs before the model touches anything.",
              "Faster drafting where speed helps.",
              "Visible review rules where judgment matters.",
              "A named owner after the output exists.",
            ].map((item) => (
              <p key={item} className="py-6 text-2xl leading-9 text-stone-200">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Principles
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
              Where humans stay in the system.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {humanPrinciples.map((principle) => (
              <article key={principle.title} className="border border-stone-300 bg-[#fffaf0] p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{principle.title}</h3>
                <p className="mt-4 leading-8 text-stone-700">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">Name</p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
              {nameMeaning.title}
            </h2>
          </div>
          <div>
            <p className="text-2xl leading-10 text-stone-800">{nameMeaning.body}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex border border-stone-950 bg-stone-950 px-6 py-4 text-sm font-bold text-stone-50 transition hover:bg-stone-800"
            >
              Bring a workflow to review
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
