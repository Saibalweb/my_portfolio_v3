import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeTableWrapper } from "@/lib/rehype-table-wrapper";
import { getAllPosts, getPostBySlug, getPostSlugs, formatPostDate } from "@/lib/posts";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Saibal Kole`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date || undefined },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts().filter(item => item.slug !== post.slug).slice(0, 2);

  return <main id="main-content">
    <article className="section post-article">
      <div className="container post-container">
        <Link href="/blog" className="post-back"><ArrowLeft /> All posts</Link>
        <header className="post-header">
          <div className="post-meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.readingTime && <><span aria-hidden="true">·</span><span>{post.readingTime}</span></>}
          </div>
          <h1>{post.title}</h1>
          {post.description && <p className="post-deck">{post.description}</p>}
          {post.tags.length > 0 && <div className="post-tags">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
        </header>
        <div className="post-body">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeTableWrapper,
                  rehypeSlug,
                  [rehypeAutolinkHeadings, {
                    behavior: "append",
                    properties: { className: ["heading-anchor"], ariaHidden: true, tabIndex: -1 },
                    content: { type: "text", value: "#" },
                  }],
                  [rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }],
                ],
              },
            }}
          />
        </div>
        {related.length > 0 && <aside className="post-related">
          <h2>Keep reading</h2>
          <div className="post-list">
            {related.map(item => <Link key={item.slug} href={`/blog/${item.slug}`} className="post-card">
              <div className="post-meta"><time dateTime={item.date}>{formatPostDate(item.date)}</time>{item.readingTime && <><span aria-hidden="true">·</span><span>{item.readingTime}</span></>}</div>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              <span className="post-read-more">Read post <ArrowUpRight /></span>
            </Link>)}
          </div>
        </aside>}
      </div>
    </article>
  </main>;
}
