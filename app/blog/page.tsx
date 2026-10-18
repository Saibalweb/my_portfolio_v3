import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Saibal Kole",
  description: "Notes on mobile and full-stack development, interface design, and building reliable products.",
  openGraph: { title: "Blog — Saibal Kole", description: "Notes on mobile and full-stack development, interface design, and building reliable products.", type: "website" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <main id="main-content">
    <section className="section blog-index">
      <div className="container">
        <SectionHeading eyebrow="Writing" title="Notes from building things" description="Practical write-ups on mobile and web engineering, interface decisions, and the details that make products hold up." />
        {posts.length > 0 ? (
          <div className="post-list">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
                <div className="post-meta">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  {post.readingTime && <><span aria-hidden="true">·</span><span>{post.readingTime}</span></>}
                </div>
                <h3>{post.title}</h3>
                {post.description && <p>{post.description}</p>}
                {post.tags.length > 0 && <div className="post-tags">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
                <span className="post-read-more">Read post <ArrowUpRight /></span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="post-empty">No posts published yet — check back soon.</p>
        )}
      </div>
    </section>
  </main>;
}
