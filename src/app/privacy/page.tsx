import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for FlowMason AI.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Privacy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">Privacy Policy</h1>
        <div className="mt-8 space-y-6 leading-8 text-slate-300">
          <p>
            FlowMason AI collects only the information you submit through the contact form or by email,
            such as your name, work email, company, budget range and project context.
          </p>
          <p>
            This information is used to evaluate fit, respond to your request and prepare a relevant
            business conversation. It is not sold or shared with advertisers.
          </p>
          <p>
            If a lead-capture webhook is configured, submitted form data is sent to that configured
            business system. No payment information is collected on this website.
          </p>
          <p>
            To request deletion or correction of information you submitted, email hello@flowmason.ai.
          </p>
        </div>
      </div>
    </section>
  );
}
