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
            title="Request an AI Delivery Audit fit review."
            body="Use this form if your company is ready to evaluate a serious AI delivery system, prototype sprint, custom agent build or implementation engagement."
          />

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-semibold text-white">Good-fit signals</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>• You already use AI but lack a controlled delivery workflow.</li>
              <li>• You need prototypes, agents or documentation that can move toward production.</li>
              <li>• You can invest at least 3,000 EUR for the audit or 12,000+ EUR for implementation work.</li>
              <li>• You value preparation, validation and handoff over ad-hoc prompt experiments.</li>
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
