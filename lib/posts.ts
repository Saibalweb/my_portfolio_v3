import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function getSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter(file => file.endsWith(".mdx") || file.endsWith(".md"))
    .map(file => file.replace(/\.mdx?$/, ""));
}

function readPost(slug: string): Post {
  const filePath = [".mdx", ".md"]
    .map(ext => path.join(postsDirectory, `${slug}${ext}`))
    .find(candidate => fs.existsSync(candidate));

  if (!filePath) throw new Error(`Post not found: ${slug}`);

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ? String(data.date) : "",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: data.readingTime ? String(data.readingTime) : estimateReadingTime(content),
    content,
  };
}

export function getPostSlugs() {
  return getSlugs();
}

export function getAllPosts(): PostMeta[] {
  return getSlugs()
    .map(slug => {
      const { content: _content, ...meta } = readPost(slug);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    return readPost(slug);
  } catch {
    return null;
  }
}

export function formatPostDate(date: string) {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(parsed);
}
