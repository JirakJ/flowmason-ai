const defaultSiteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://jirakj.github.io/streamforge-ai"
    : "https://streamforge.ai";

export const siteConfig = {
  name: "StreamForge AI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, ""),
  email: "hello@streamforge.ai",
  description:
    "StreamForge AI builds AI Delivery Streams that help companies turn ideas into documented, tested and production-ready software faster.",
  tagline: "Build software faster with an AI Delivery Stream.",
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}
