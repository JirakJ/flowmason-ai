import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { partnerTiers, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for StreamForge AI audits, prototype sprints, custom AI agents, full AI Delivery Stream implementations and monthly retainers.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing for companies ready to invest in delivery infrastructure."
            body="StreamForge AI does not sell low-ticket experiments. Engagements are scoped for implementation quality, documented handoff and measurable delivery leverage."
          />
          <div className="mt-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 text-cyan-50">
            We work with a maximum of 4 active client companies per month to protect delivery quality.
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-white/10 bg-slate-950 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{service.price}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{service.name}</h2>
              <p className="mt-3 text-sm font-medium text-slate-300">{service.duration}</p>
              <p className="mt-5 leading-7 text-slate-400">{service.purpose}</p>
              <Link href={`/services#${service.slug}`} className="mt-6 inline-flex text-sm font-bold text-cyan-200 hover:text-cyan-100">
                View details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Retainers"
            title="Monthly AI Delivery Partner tiers."
            body="For companies that want continuous workflow improvement, new prototypes, agent evolution and delivery system ownership."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {partnerTiers.map((tier) => (
              <article key={tier.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-2xl font-semibold text-white">{tier.name}</h2>
                <p className="mt-4 text-3xl font-semibold text-cyan-200">{tier.price}</p>
                <p className="mt-4 leading-7 text-slate-400">{tier.fit}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
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
