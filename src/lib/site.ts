export const siteConfig = {
  name: "StreamForge AI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://streamforge.ai",
  email: "hello@streamforge.ai",
  description:
    "StreamForge AI builds AI Delivery Streams that help companies turn ideas into documented, tested and production-ready software faster.",
  tagline: "Build software faster with an AI Delivery Stream.",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
