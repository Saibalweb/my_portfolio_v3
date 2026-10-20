import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPostDate, type PostMeta } from "@/lib/posts";
import { cn } from "@/lib/utils";

export function PostCard({ post, showDescription = true, showTags = true, className }: { post: PostMeta; showDescription?: boolean; showTags?: boolean; className?: string }) {
  return <Link href={`/blog/${post.slug}`} className={cn("group flex flex-col gap-2.5 rounded-[14px] border border-border bg-card px-7 py-[26px] transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-[0_10px_28px_-18px_rgb(var(--shadow-color)_/_0.35)] max-compact:px-[18px] max-compact:py-5", className)}>
    <div className="flex items-center gap-2 text-[13px] tracking-[0.01em] text-muted-foreground">
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      {post.readingTime && <><span aria-hidden="true">·</span><span>{post.readingTime}</span></>}
    </div>
    <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.03em] max-compact:text-[20px]">{post.title}</h3>
    {showDescription && post.description && <p className="max-w-[640px] text-sm leading-[1.75] text-muted-foreground">{post.description}</p>}
    {showTags && post.tags.length > 0 && <div className="flex flex-wrap gap-1.5">{post.tags.map(tag => <span key={tag} className="rounded-full bg-accent px-[9px] py-[3px] text-xs font-semibold tracking-[0.02em] text-accent-foreground">{tag}</span>)}</div>}
    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary [&_svg]:size-[15px] [&_svg]:transition-transform group-hover:[&_svg]:translate-x-0.5 group-hover:[&_svg]:-translate-y-0.5">Read post <ArrowUpRight /></span>
  </Link>;
}
