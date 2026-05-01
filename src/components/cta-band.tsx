import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto border-y border-stone-950 py-10 lg:max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-stone-500">
              Start small, but start with the real problem
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Bring the workflow that wastes time every week.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              The audit turns it into a map, a build recommendation, a risk list and a plain answer:
              automate it, prototype it, document it, or leave it alone.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="border border-stone-950 bg-stone-950 px-6 py-4 text-center text-sm font-bold text-stone-50 transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 focus:ring-offset-[#f5f0e6]"
            >
              Request the audit
            </Link>
            <Link
              href="/pricing"
              className="border border-stone-400 px-6 py-4 text-center text-sm font-bold text-stone-950 transition hover:border-stone-950 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 focus:ring-offset-[#f5f0e6]"
            >
              Check pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
