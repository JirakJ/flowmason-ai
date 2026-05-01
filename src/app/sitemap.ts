import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

const routes = ["", "/services", "/pricing", "/blog", "/human-aspect", "/case-studies", "/contact", "/privacy", "/terms"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route || "/"),
      lastModified: new Date(),
      changeFrequency: route === "" || route === "/blog" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
