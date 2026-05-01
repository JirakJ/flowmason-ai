import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, faqs, processSteps, services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.18),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              AI-powered prototyping, development, testing, documentation and custom agents
            </p>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build software faster with an AI Delivery Stream.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              FlowMason AI helps startups, software companies and mid-sized businesses turn
              ideas into documented, tested and production-ready software through structured
              AI delivery systems.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Book an AI Delivery Audit
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                View services
              </Link>
            </div>
            <dl className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ["4", "maximum active client companies per month"],
                ["3k+", "entry audit investment"],
                ["60k+", "full implementation engagements"],
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
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
                Delivery stream
              </p>
              <div className="mt-6 grid gap-3">
                {["Idea", "Context", "Specification", "Prototype", "Development", "Testing", "Documentation", "Deployment", "Handoff"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-xs font-bold text-cyan-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-white">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Problem"
            title="Most companies are using AI incorrectly."
            body="Developers use AI in private chats. Founders generate product ideas but cannot turn them into structured execution. Prototypes are created quickly but rarely become production-ready. Documentation is incomplete. Testing comes too late. The missing system around AI is the problem."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Prompts live in private chats",
              "Generated code lacks architecture",
              "Testing and validation arrive late",
              "Custom agents are discussed but not operated",
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
            eyebrow="Solution"
            title="The AI Delivery Stream turns scattered AI usage into a controlled delivery pipeline."
            body="The result is not another AI experiment. The result is a repeatable system for context, specifications, prototypes, development, testing, documentation, deployment and continuous improvement."
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
              title="Premium, productized engagements for serious delivery work."
              body="Transparent pricing keeps the conversation focused on fit, scope and strategic value."
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
          <SectionHeading
            eyebrow="Case-study formats"
            title="Initial proof can be built through internal and demo-based case studies."
            body="The website does not invent client results. It shows the kinds of deliverables serious buyers can evaluate before a call."
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

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Philosophy"
            title="Preparation over constant correction."
            body="Human-in-the-loop is not the default operating model. If the system is prepared correctly, AI can operate inside clear context, constraints, architectural rules, documentation standards, validation gates and fallback paths."
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
