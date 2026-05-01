import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, faqs, humanPrinciples, nameMeaning, processSteps, services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.18),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              For teams that need working delivery systems, not AI theatre
            </p>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turn messy product work into a flow your team can trust.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              FlowMason AI works with founders, software teams and agencies to turn vague ideas,
              scattered AI use and manual workflows into documented prototypes, custom agents and
              delivery routines that survive contact with real work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Start with a paid audit
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                See what gets built
              </Link>
            </div>
            <dl className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ["4", "active client companies maximum"],
                ["5-7", "business days to the first delivery map"],
                ["3k", "EUR starting point, not a free discovery call"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <dt className="text-3xl font-semibold text-white">{value}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-400">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950/80 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">What the name means</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{nameMeaning.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{nameMeaning.body}</p>
              <div className="mt-6 grid gap-3">
                {[
                  "messy product flow",
                  "human decisions",
                  "AI-assisted build",
                  "tested handoff",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-xs font-bold text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The real problem"
            title="AI is not the bottleneck. Unclear delivery is."
            body="Most teams already have access to capable tools. What they do not have is a reliable path from business context to specification, prototype, implementation, validation and handoff. That is where money, time and trust leak out."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "The founder idea is not specific enough to build",
              "AI outputs are useful but nobody owns the workflow",
              "The prototype looks good but cannot be handed to engineering",
              "Documentation describes yesterday's system, not today's decisions",
            ].map((problem) => (
              <div key={problem} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How the work moves"
            title="A practical delivery stream, built one valuable workflow at a time."
            body="The first goal is not to automate everything. It is to make one important flow clear enough, tested enough and documented enough that your team can trust it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm font-bold text-cyan-300">Step {index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Clear offers. Serious scope. No vague AI transformation theatre."
              body="Each engagement has a defined outcome: a map, a prototype, an agent, a delivery workflow or an ongoing delivery partnership."
            />
            <Link href="/services" className="text-sm font-bold text-cyan-200 transition hover:text-cyan-100">
              Explore all services →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{service.price}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.name}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{service.purpose}</p>
                <p className="mt-6 text-sm font-medium text-slate-300">{service.duration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Human aspect"
              title="The human work is deciding what should happen, what must never happen, and who owns the result."
              body="AI can accelerate drafting, research and implementation. It cannot replace business judgment, taste, prioritization, accountability or the uncomfortable work of saying no."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {humanPrinciples.map((principle) => (
                <article key={principle.title} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                  <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
          <Link href="/human-aspect" className="mt-8 inline-flex text-sm font-bold text-cyan-200 transition hover:text-cyan-100">
            Read the human aspect →
          </Link>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Proof formats"
            title="No fake logos. No imaginary ROI. Just inspectable delivery assets."
            body="Until client stories can be published, the proof is in demo-based artifacts a serious buyer can evaluate: briefs, workflows, prototypes, agent specs, test checklists and handoff notes."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm font-bold text-cyan-300">{study.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{study.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Philosophy"
            title="Preparation beats supervision theatre."
            body="Putting a human checkpoint after every AI action is not a strategy. The better work is designing context, constraints, review rules and fallback paths before the system starts producing output."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Strong context", "Clear constraints", "Testing workflows", "Auditability"].map((item) => (
              <div key={item} className="rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-6 font-semibold text-cyan-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="FAQ" title="Questions serious buyers ask before booking." align="center" />
          <div className="mt-12 divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-slate-950">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
