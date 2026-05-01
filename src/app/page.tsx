import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import {
  caseStudies,
  faqs,
  humanPrinciples,
  nameMeaning,
  processSteps,
  services,
} from "@/lib/content";

const symptoms = [
  {
    title: "The founder brief keeps changing",
    body: "Everyone understands the idea in conversation. Nobody can hand it to a designer, developer or agent without another call.",
  },
  {
    title: "AI is helping individuals, not the company",
    body: "Good prompts live in private chats. Useful outputs are not reusable. Nobody knows which version to trust.",
  },
  {
    title: "The prototype is impressive but fragile",
    body: "It demos well, then falls apart when someone asks about edge cases, data, ownership or what happens next.",
  },
  {
    title: "Documentation trails behind the work",
    body: "Decisions are made in calls, Slack threads and code changes. The next person has to rediscover the thinking.",
  },
];

const auditOutputs = [
  "A map of the workflow as it actually runs today",
  "The highest-value place to use AI, and where not to use it",
  "A build recommendation with scope, risks and owner responsibilities",
  "A fixed-price proposal if the next step should be built",
];

export default function Home() {
  return (
    <>
      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-stone-500">
                AI delivery systems for software-minded companies
              </p>
              <h1 className="mt-8 max-w-5xl text-6xl font-semibold tracking-[-0.055em] text-stone-950 sm:text-7xl lg:text-8xl">
                Your team does not need more AI demos.
              </h1>
              <p className="mt-8 max-w-3xl text-2xl leading-10 text-stone-800">
                It needs one messy, expensive workflow turned into something people can run,
                review, improve and hand off.
              </p>
            </div>

            <div className="border-l border-stone-300 pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">
                Working note
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                FlowMason AI works with founders, SaaS teams and agencies when the work is
                already real: a prototype needs shape, an internal process burns time, or a
                custom agent has to become more than a prompt experiment.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="border border-stone-950 bg-stone-950 px-6 py-4 text-center text-sm font-bold text-stone-50 transition hover:bg-stone-800"
                >
                  Send the workflow
                </Link>
                <Link
                  href="/human-aspect"
                  className="border border-stone-400 px-6 py-4 text-center text-sm font-bold text-stone-950 transition hover:border-stone-950 hover:bg-stone-100"
                >
                  How the human work stays visible
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-stone-950 md:grid-cols-3">
            {[
              ["5-7 days", "to turn one workflow into a decision-ready map"],
              ["3,000 EUR", "for the audit; no free strategy theatre"],
              ["4 clients", "maximum active companies at any time"],
            ].map(([value, label]) => (
              <div key={value} className="border-stone-300 py-6 md:border-r md:px-6 first:md:pl-0 last:md:border-r-0">
                <p className="text-3xl font-semibold tracking-tight text-stone-950">{value}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-400">
              The buying trigger
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              You can feel the waste before you can name it.
            </h2>
          </div>
          <div className="divide-y divide-stone-700 border-y border-stone-700">
            {symptoms.map((symptom) => (
              <article key={symptom.title} className="grid gap-4 py-6 md:grid-cols-[0.45fr_0.55fr]">
                <h3 className="text-xl font-semibold text-stone-50">{symptom.title}</h3>
                <p className="leading-7 text-stone-300">{symptom.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              First engagement
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
              Start with the audit, not a vague transformation plan.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              The audit is a working engagement. We take one real workflow, make the current
              mess visible, decide where AI belongs, and define what should be built next.
            </p>
          </div>
          <div className="border border-stone-950 bg-[#fffaf0] p-8">
            <div className="flex flex-col justify-between gap-6 border-b border-stone-300 pb-6 sm:flex-row">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-stone-950">
                  AI Delivery Audit
                </h3>
                <p className="mt-2 text-stone-600">5-7 business days</p>
              </div>
              <p className="text-3xl font-semibold text-stone-950">3,000 EUR</p>
            </div>
            <ul className="mt-6 space-y-4">
              {auditOutputs.map((item) => (
                <li key={item} className="flex gap-3 text-stone-800">
                  <span className="mt-2 size-2 shrink-0 bg-stone-950" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex border border-stone-950 bg-stone-950 px-6 py-4 text-sm font-bold text-stone-50 transition hover:bg-stone-800"
            >
              Request audit fit review
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Method
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
              The work is intentionally plain.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              No black-box automation pitch. No forty-slide AI roadmap. Just the sequence of
              decisions needed to make one workflow reliable.
            </p>
          </div>
          <div className="mt-12 divide-y divide-stone-300 border-y border-stone-950">
            {processSteps.map((step, index) => (
              <article key={step.title} className="grid gap-4 py-7 md:grid-cols-[120px_0.45fr_0.55fr]">
                <p className="font-mono text-sm text-stone-500">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{step.title}</h3>
                <p className="leading-7 text-stone-700">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
                Human aspect
              </p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
                The human part is not decoration.
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                It is the difference between an impressive output and a system your company can
                trust. Business judgment, ownership and taste stay visible.
              </p>
              <Link href="/human-aspect" className="mt-8 inline-flex font-bold text-stone-950 underline underline-offset-4">
                Read the human aspect
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {humanPrinciples.map((principle) => (
                <article key={principle.title} className="border border-stone-300 bg-[#fffaf0] p-6">
                  <h3 className="text-xl font-semibold text-stone-950">{principle.title}</h3>
                  <p className="mt-4 leading-7 text-stone-700">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-400">
                Offers
              </p>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em]">
                Buy a defined outcome, not a pile of AI hours.
              </h2>
            </div>
            <Link href="/pricing" className="font-bold text-stone-50 underline underline-offset-4">
              Full pricing
            </Link>
          </div>
          <div className="mt-12 divide-y divide-stone-700 border-y border-stone-700">
            {services.slice(0, 5).map((service) => (
              <article key={service.slug} className="grid gap-4 py-6 lg:grid-cols-[0.32fr_0.18fr_0.5fr]">
                <h3 className="text-2xl font-semibold">{service.name}</h3>
                <p className="font-mono text-sm text-stone-400">{service.price}</p>
                <p className="leading-7 text-stone-300">{service.purpose}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Proof before logos
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
              What you can inspect before trusting the work.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Public case studies come later. For now, serious buyers should be able to inspect
              the shape of the work itself: briefs, workflows, prototypes, tests and handoff notes.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.title} className="border border-stone-300 bg-[#fffaf0] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
                  {study.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                  {study.title}
                </h3>
                <p className="mt-4 leading-7 text-stone-700">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Name
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950">
              {nameMeaning.title}
            </h2>
          </div>
          <p className="text-2xl leading-10 text-stone-800">{nameMeaning.body}</p>
        </div>
      </section>

      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">FAQ</p>
          <div className="mt-8 divide-y divide-stone-300 border-y border-stone-950">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="cursor-pointer list-none text-xl font-semibold text-stone-950 marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-stone-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
