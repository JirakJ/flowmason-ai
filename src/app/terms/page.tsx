import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for FlowMason AI.",
};

export default function TermsPage() {
  return (
    <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-stone-500">Terms</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-stone-950">Website Terms</h1>
        <div className="mt-8 space-y-6 leading-8 text-stone-700">
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
