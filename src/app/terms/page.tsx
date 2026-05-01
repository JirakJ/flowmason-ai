import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for FlowMason AI.",
};

export default function TermsPage() {
  return (
    <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Terms</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">Website Terms</h1>
        <div className="mt-8 space-y-6 leading-8 text-slate-300">
          <p>
            The information on this website is provided for general business evaluation. It does not
            create a client relationship, implementation commitment or guarantee of specific results.
          </p>
          <p>
            Pricing shown on the website is indicative of standard engagement models. Final scope,
            deliverables, responsibilities and commercial terms are confirmed in a written proposal or
            agreement.
          </p>
          <p>
            FlowMason AI may decline projects that are outside its expertise, capacity, ethical
            standards or security requirements.
          </p>
          <p>
            All website content, positioning and service descriptions are owned by FlowMason AI unless
            otherwise stated.
          </p>
        </div>
      </div>
    </section>
  );
}
