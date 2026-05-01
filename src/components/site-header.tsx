import Link from "next/link";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/human-aspect", label: "Human aspect" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Book audit" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="FlowMason AI home">
          <span className="flex size-10 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.22)]">
            FM
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            FlowMason <span className="text-cyan-200">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Qualify a project
        </Link>
      </div>
    </header>
  );
}
