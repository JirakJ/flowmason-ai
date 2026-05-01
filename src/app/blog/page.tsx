import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Weekly writing on AI delivery systems, custom AI agents, prototyping, documentation, validation and workflow design.",
};

export default function BlogPage() {
  return (
    <section className="bg-[#f5f0e6] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-stone-500">
              Field notes
            </p>
            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.055em] text-stone-950 sm:text-7xl">
              Weekly notes on AI delivery work.
            </h1>
          </div>
          <p className="border-l border-stone-300 pl-6 text-xl leading-9 text-stone-700">
            Practical writing for founders, SaaS teams, agencies and operators building custom
            agents, prototypes, documentation systems and AI-assisted delivery workflows.
          </p>
        </div>

        <div className="mt-16 divide-y divide-stone-300 border-y border-stone-950">
          {blogPosts.map((post) => (
            <article key={post.slug} className="grid gap-5 py-7 lg:grid-cols-[170px_1fr_0.4fr]">
              <time className="font-mono text-sm text-stone-500" dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: "Europe/Prague",
                }).format(new Date(post.publishedAt))}
              </time>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">
                  {post.category}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
                  <Link href={`/blog/${post.slug}`} className="hover:underline hover:underline-offset-4">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-stone-700">{post.description}</p>
              </div>
              <div className="text-sm leading-6 text-stone-500 lg:text-right">
                <p>By {post.author}</p>
                <p>{post.readingTime}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
