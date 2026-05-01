import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/human-aspect", label: "Human aspect" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-300 bg-[#f5f0e6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center border border-stone-950 bg-stone-950 text-sm font-black text-stone-50">
              FM
            </span>
            <span className="text-lg font-semibold text-stone-950">FlowMason AI</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-stone-700">
            Boutique AI delivery consulting for teams that need a real workflow, not another demo.
          </p>
          <p className="mt-4 text-sm text-stone-500">Maximum 4 active client companies per month.</p>
        </div>

        <div className="grid gap-3 text-sm sm:grid-cols-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-stone-700 transition hover:text-stone-950">
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="text-stone-700 transition hover:text-stone-950">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
