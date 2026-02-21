import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { getPost, getAllSlugs } from "@/lib/blog";
import { CleanDataPost } from "@/components/blog/posts/clean-data";
import { FirstDataPipelinePost } from "@/components/blog/posts/first-data-pipeline";
import { AIAgentsThatWorkPost } from "@/components/blog/posts/ai-agents-that-work";
import { DataWarehouseDecisionPost } from "@/components/blog/posts/data-warehouse-decision";
import { SpreadsheetsToAIReadyPost } from "@/components/blog/posts/spreadsheets-to-ai-ready";

const postComponents: Record<string, React.ComponentType> = {
  "clean-data": CleanDataPost,
  "first-data-pipeline": FirstDataPipelinePost,
  "ai-agents-that-work": AIAgentsThatWorkPost,
  "data-warehouse-decision": DataWarehouseDecisionPost,
  "spreadsheets-to-ai-ready": SpreadsheetsToAIReadyPost,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Van Leer Consulting`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <article className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <BlogHeader post={post} />
            <PostContent />
            <BlogCTA />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
