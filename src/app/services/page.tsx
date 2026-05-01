import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "FlowMason AI services for audits, prototype sprints, custom AI agents, delivery workflows and ongoing AI delivery partnership.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Services
            </p>
            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.055em] text-stone-950 sm:text-7xl">
              Buy the outcome, not the AI excitement.
            </h1>
          </div>
          <p className="border-l border-stone-300 pl-6 text-xl leading-9 text-stone-700">
            Each offer exists for a different level of uncertainty: first map the workflow,
            then prototype it, build an agent around it, or turn it into a repeatable delivery system.
          </p>
        </div>
      </section>

      <section className="bg-[#eee7da] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl divide-y divide-stone-300 border-y border-stone-950">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="grid gap-8 py-10 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <p className="font-mono text-sm text-stone-500">{service.price}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
                  {service.name}
                </h2>
                <p className="mt-3 text-stone-600">{service.duration}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex border border-stone-950 bg-stone-950 px-5 py-3 text-sm font-bold text-stone-50 transition hover:bg-stone-800"
                >
                  Discuss this
                </Link>
              </div>
              <div>
                <p className="max-w-3xl text-xl leading-9 text-stone-800">{service.purpose}</p>
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  {[
                    ["Best for", service.bestFor],
                    ["Includes", service.includes],
                    ["Outputs", service.outputs],
                  ].map(([heading, items]) => (
                    <div key={heading as string}>
                      <h3 className="font-semibold text-stone-950">{heading as string}</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                        {(items as string[]).map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
