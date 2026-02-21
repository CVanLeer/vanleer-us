import type { BlogPost } from "@/lib/blog";

export function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-12">
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
      <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
        {post.title}
      </h1>
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
    </header>
  );
}
