import Link from "next/link";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/human-aspect", label: "Human aspect" },
  { href: "/contact", label: "Book audit" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300 bg-[#f5f0e6]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="FlowMason AI home">
          <span className="flex size-10 items-center justify-center border border-stone-900 bg-stone-900 text-sm font-black text-stone-50">
            FM
          </span>
          <span className="text-base font-semibold tracking-tight text-stone-950">
            FlowMason <span className="text-stone-500">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="border border-stone-950 bg-stone-950 px-4 py-2 text-sm font-bold text-stone-50 transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 focus:ring-offset-[#f5f0e6]"
        >
          Send a workflow
        </Link>
      </div>
    </header>
  );
}
