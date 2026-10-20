import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeTableWrapper } from "@/lib/rehype-table-wrapper";
import { PostCard } from "@/components/post-card";
import { Container } from "@/components/primitives";
import { getAllPosts, getPostBySlug, getPostSlugs, formatPostDate } from "@/lib/posts";
import styles from "@/components/post-body.module.css";

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
    <article className="w-full py-[100px] max-mobile:py-[76px] max-compact:py-[60px]">
      <Container className="max-w-none compact:max-w-[760px] tablet:max-w-[clamp(720px,50vw,880px)] wide:max-w-[clamp(720px,50vw,880px)]">
        <Link href="/blog" className="mb-[26px] inline-flex items-center gap-[7px] text-[13px] font-semibold text-muted-foreground hover:text-primary [&_svg]:size-[15px]"><ArrowLeft /> All posts</Link>
        <header className="mb-[34px] border-b border-border pb-7">
          <div className="flex items-center gap-2 text-[13px] tracking-[0.01em] text-muted-foreground">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.readingTime && <><span aria-hidden="true">·</span><span>{post.readingTime}</span></>}
          </div>
          <h1 className="mt-3 text-[clamp(30px,4vw,42px)] font-bold leading-[1.15] tracking-[-0.04em] max-compact:text-[31px]">{post.title}</h1>
          {post.description && <p className="mt-4 text-[17px] leading-[1.7] text-muted-foreground max-compact:text-base">{post.description}</p>}
          {post.tags.length > 0 && <div className="mt-[18px] flex flex-wrap gap-1.5">{post.tags.map(tag => <span key={tag} className="rounded-full bg-accent px-[9px] py-[3px] text-xs font-semibold tracking-[0.02em] text-accent-foreground">{tag}</span>)}</div>}
        </header>
        <div className={styles.postBody}>
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
        {related.length > 0 && <aside className="mt-16 border-t border-border pt-9">
          <h2 className="mb-5 text-[22px] font-semibold tracking-[-0.02em]">Keep reading</h2>
          <div className="grid gap-5">
            {related.map(item => <PostCard key={item.slug} post={item} showTags={false} />)}
          </div>
        </aside>}
      </Container>
    </article>
  </main>;
}
