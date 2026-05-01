const defaultSiteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://jirakj.github.io/flowmason-ai"
    : "https://flowmason.ai";

export const siteConfig = {
  name: "FlowMason AI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, ""),
  email: "hello@flowmason.ai",
  description:
    "FlowMason AI builds AI Delivery Streams that help companies turn ideas into documented, tested and production-ready software faster.",
  tagline: "Build software faster with an AI Delivery Stream.",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}
