import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = ["", "/services", "/pricing", "/human-aspect", "/case-studies", "/contact", "/privacy", "/terms"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
