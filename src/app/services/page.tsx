import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Delivery Audit, AI Prototype Sprint, development acceleration, custom AI agents, full AI Delivery Stream implementation and monthly partner retainers.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="AI delivery services designed for premium, capacity-controlled implementation."
            body="Each engagement turns fragmented AI usage into documented workflows, tested outputs and maintainable operating systems."
          />
        </div>
      </section>

      <section className="bg-slate-900/60 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">{service.price}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{service.name}</h2>
                  <p className="mt-3 text-sm font-medium text-slate-300">{service.duration}</p>
                  <p className="mt-5 leading-7 text-slate-400">{service.purpose}</p>
                  <Link href="/contact" className="mt-6 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
                    Discuss this service
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="font-semibold text-white">Best for</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                      {service.bestFor.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Includes</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                      {service.includes.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Outputs</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                      {service.outputs.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
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
