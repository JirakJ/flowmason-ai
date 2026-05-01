import type { Metadata } from "next";
import Link from "next/link";
import { partnerTiers, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for FlowMason AI audits, prototype sprints, custom AI agents, full delivery stream implementations and retainers.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">Pricing</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-semibold tracking-[-0.055em] text-stone-950 sm:text-7xl">
            Transparent pricing filters out the wrong conversations.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-stone-700">
            FlowMason AI is not built for small experiments or open-ended AI hours.
            It is for defined delivery work where the buyer wants scope, ownership and handoff.
          </p>
          <div className="mt-10 border-y border-stone-950 py-5 text-lg font-semibold text-stone-950">
            Maximum 4 active client companies per month.
          </div>
        </div>
      </section>

      <section className="bg-[#eee7da] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl divide-y divide-stone-300 border-y border-stone-950">
          {services.map((service) => (
            <article key={service.slug} className="grid gap-5 py-7 lg:grid-cols-[0.32fr_0.22fr_0.46fr]">
              <h2 className="text-3xl font-semibold tracking-tight text-stone-950">{service.name}</h2>
              <p className="font-mono text-sm text-stone-500">{service.price}</p>
              <div>
                <p className="leading-7 text-stone-700">{service.purpose}</p>
                <Link href={`/services#${service.slug}`} className="mt-4 inline-flex font-bold text-stone-950 underline underline-offset-4">
                  View service detail
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-400">
              Retainers
            </p>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em]">
              Ongoing capacity for teams that keep shipping.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {partnerTiers.map((tier) => (
              <article key={tier.name} className="border border-stone-700 p-6">
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-4 text-3xl font-semibold">{tier.price}</p>
                <p className="mt-4 leading-7 text-stone-300">{tier.fit}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-stone-300">
                  {tier.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
