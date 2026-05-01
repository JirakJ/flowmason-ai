const defaultSiteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://jirakj.github.io/flowmason-ai"
    : "https://flowmason.ai";

export const siteConfig = {
  name: "FlowMason AI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, ""),
  email: "hello@flowmason.ai",
  author: "JirakJ",
  description:
    "FlowMason AI turns messy product workflows, prototypes and custom agent ideas into delivery systems teams can run, review and hand off.",
  tagline: "Turn messy product work into a flow your team can trust.",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}
