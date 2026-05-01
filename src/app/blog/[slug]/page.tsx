import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  buildArticleSections,
  getBlogPost,
  getBlogPostUrl,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.keywords,
    alternates: {
      canonical: getBlogPostUrl(post),
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: getBlogPostUrl(post),
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.keywords,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const sections = buildArticleSections(post);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: getBlogPostUrl(post),
    keywords: post.keywords.join(", "),
  };

  return (
    <article className="bg-[#f5f0e6] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500 hover:text-stone-950">
          Back to blog
        </Link>

        <header className="mt-10 border-b border-stone-300 pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-stone-500">
            {post.category}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-stone-950 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-9 text-stone-700">{post.description}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
            <p>By {post.author}</p>
            <time dateTime={post.publishedAt}>
              {new Intl.DateTimeFormat("en", {
                dateStyle: "full",
                timeStyle: "short",
                timeZone: "Europe/Prague",
              }).format(new Date(post.publishedAt))}
            </time>
            <p>{post.readingTime}</p>
          </div>
        </header>

        <div className="mt-12 space-y-12">
          <p className="text-2xl leading-10 text-stone-800">
            This note is for {post.audience}. The useful question is not which AI tool should be
            used. The useful question is which workflow is painful enough, clear enough and owned
            enough to improve.
          </p>

          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-700">{section.body}</p>
            </section>
          ))}

          <section className="border-y border-stone-950 py-8">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
              Practical checklist
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-stone-700">
              <li>• Who owns the workflow after the first version ships?</li>
              <li>• What input quality does the workflow need to produce useful output?</li>
              <li>• What should AI draft, and what should a human decide?</li>
              <li>• What artifact will prove the work can be handed off?</li>
            </ul>
          </section>

          <section className="bg-stone-950 p-8 text-stone-50">
            <h2 className="text-3xl font-semibold tracking-tight">If this sounds familiar</h2>
            <p className="mt-4 leading-8 text-stone-300">
              Start with one workflow. FlowMason AI can map it, identify the right intervention,
              and define whether the next step should be a prototype, agent, documentation
              pipeline or delivery system.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex border border-stone-50 px-5 py-3 text-sm font-bold text-stone-50 transition hover:bg-stone-50 hover:text-stone-950"
            >
              Request audit fit review
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
