import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { PostCard } from "@/components/post-card";
import { Container } from "@/components/primitives";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Saibal Kole",
  description: "Notes on mobile and full-stack development, interface design, and building reliable products.",
  openGraph: { title: "Blog — Saibal Kole", description: "Notes on mobile and full-stack development, interface design, and building reliable products.", type: "website" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <main id="main-content">
    <section className="w-full pb-[100px] pt-[76px] max-mobile:pb-[76px] max-mobile:pt-[76px] max-compact:pb-[60px] max-compact:pt-[54px]">
      <Container>
        <SectionHeading className="mx-auto max-w-[860px]" eyebrow="Writing" title="Notes from building things" description="Practical write-ups on mobile and web engineering, interface decisions, and the details that make products hold up." />
        {posts.length > 0 ? (
          <div className="mx-auto grid max-w-[860px] gap-5">
            {posts.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts published yet — check back soon.</p>
        )}
      </Container>
    </section>
  </main>;
}
