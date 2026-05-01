import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-black text-cyan-200">
              SF
            </span>
            <span className="text-lg font-semibold text-white">StreamForge AI</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            AI Delivery Stream consulting for companies that want to move from idea to documented,
            tested and production-ready software faster.
          </p>
          <p className="mt-4 text-sm text-slate-500">Maximum 4 active client companies per month.</p>
        </div>

        <div className="grid gap-3 text-sm sm:grid-cols-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-400 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="text-slate-400 transition hover:text-white">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
