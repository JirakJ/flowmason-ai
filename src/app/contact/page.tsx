import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an AI Delivery Audit",
  description:
    "Request a fit review for an AI Delivery Audit, prototype sprint, custom AI agent or AI Delivery Stream implementation.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">Book audit</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-6xl">
            Bring the workflow that keeps bothering you.
          </h1>
          <p className="mt-6 text-xl leading-9 text-stone-700">
            A stalled prototype. A manual process that eats Fridays. A founder idea that
            needs enough structure to hand to a builder. Start there.
          </p>

          <div className="mt-10 border border-stone-300 bg-[#fffaf0] p-6">
            <h2 className="text-xl font-semibold text-stone-950">Good-fit signals</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
              <li>• There is a real workflow, product idea or delivery bottleneck behind the request.</li>
              <li>• Someone on your side can explain the business rules and judge output quality.</li>
              <li>• You can invest at least 3,000 EUR for the audit or 12,000+ EUR for implementation work.</li>
              <li>• You want a system your team can operate, not a pile of impressive prompts.</li>
            </ul>
          </div>

          <p className="mt-6 text-sm leading-6 text-stone-600">
            Prefer email? Contact{" "}
            <a className="font-semibold text-stone-950 underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
