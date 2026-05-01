import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-slate-900 to-violet-500/10 p-8 shadow-2xl shadow-cyan-950/30 sm:p-12 lg:max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              Serious delivery work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bring one messy workflow. Leave with a decision-ready plan.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              The audit is not a brainstorm. It is a paid working engagement that maps the current flow,
              identifies the highest-value intervention, and makes the next build obvious enough to approve or reject.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start with the audit
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              See pricing and fit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
