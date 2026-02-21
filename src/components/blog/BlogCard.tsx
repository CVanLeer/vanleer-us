import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-slate-200 p-8 transition-colors hover:border-slate-300 hover:bg-slate-50/50"
    >
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-slate-700">
        {post.title}
      </h3>
      <p className="mt-2 leading-relaxed text-slate-600">{post.description}</p>
      <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span className="text-slate-300">|</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
