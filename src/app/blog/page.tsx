import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { FloatingCard } from "@/components/FloatingCard";
import { posts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Van Leer Consulting",
  description:
    "Practical insights on data infrastructure, AI implementation, and building systems that actually work — from the team at Van Leer Consulting.",
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 space-y-8 md:space-y-12 pb-8 md:pb-12">
        <FloatingCard>
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Blog
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Practical AI &amp; data insights
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                Real lessons from building data infrastructure and AI systems for
                multi-location operations. No theory — just what works.
              </p>

              <div className="mt-12 space-y-6">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        </FloatingCard>
      </main>
      <Footer />
    </>
  );
}
