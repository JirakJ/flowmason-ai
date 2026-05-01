# Copilot instructions for StreamForge AI

StreamForge AI is a premium B2B consulting website for AI Delivery Stream implementation. Every change should protect the positioning: structured AI delivery systems for serious startups, software companies, agencies, SaaS teams, and mid-sized businesses.

## Product and business context

- Core promise: from idea to documented, tested software faster.
- Main offer: AI Delivery Stream Implementation.
- Entry CTA: Book an AI Delivery Audit.
- Capacity rule: maximum 4 active client companies per month.
- Pricing must remain transparent and premium; do not introduce low-ticket offers.
- Primary geographies: United States, Canada, United Kingdom, European Union, and Czech Republic.

## Engineering standards

- Use Next.js App Router, TypeScript, React Server Components by default, and Tailwind CSS.
- Keep pages production-ready for Vercel: no hard-coded secrets, no local-only dependencies, and clear environment variable names.
- Prefer static rendering for marketing pages. Use API routes only for server-side integrations such as lead capture.
- Keep accessibility strong: semantic headings, descriptive links, focus states, sufficient contrast, and usable forms.
- Keep SEO metadata current when adding or changing public pages.
- Validate changes with `npm run check` before release-level work.

## Copy and UX standards

- Write direct, high-trust B2B copy. Avoid generic "AI agency" language.
- Emphasize systems, validation, documentation, handoff, governance, and business outcomes.
- CTAs should qualify serious companies, not maximize unqualified volume.
- When adding testimonials or case studies, do not fabricate client names or unverifiable metrics.
- Keep pricing in EUR unless the business model is intentionally changed.

## Security and operations

- Never commit secrets or real customer data.
- Lead capture integrations must fail explicitly when not configured.
- Do not add analytics, tracking pixels, or third-party scripts without documenting the privacy impact.
- Preserve the Vercel deployment path and environment-variable based configuration.
