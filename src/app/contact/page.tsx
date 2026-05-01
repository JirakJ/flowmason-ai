import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an AI Delivery Audit",
  description:
    "Request a fit review for an AI Delivery Audit, prototype sprint, custom AI agent or AI Delivery Stream implementation.",
};

export default function ContactPage() {
  return (
    <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Book audit"
            title="Bring the workflow that keeps bothering you."
            body="The best starting point is specific: a prototype that stalled, a manual workflow that burns hours, a founder idea that needs structure, or an AI experiment that needs senior judgment before it touches real work."
          />

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">Good-fit signals</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• There is a real workflow, product idea or delivery bottleneck behind the request.</li>
              <li>• Someone on your side can explain the business rules and judge output quality.</li>
              <li>• You can invest at least 3,000 EUR for the audit or 12,000+ EUR for implementation work.</li>
              <li>• You want a system your team can operate, not a pile of impressive prompts.</li>
            </ul>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Prefer email? Contact{" "}
            <a className="font-semibold text-cyan-200 hover:text-cyan-100" href={`mailto:${siteConfig.email}`}>
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
