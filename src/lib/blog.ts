export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "clean-data",
    title: "Why Your AI Project Will Fail Without Clean Data",
    description:
      "80% of AI projects fail — and it's almost never the AI's fault. The real killer? Dirty, disconnected, inconsistent data. Here's what that looks like in practice.",
    date: "2026-02-20",
    readTime: "6 min read",
    tags: ["Data Quality", "AI Strategy"],
  },
  {
    slug: "first-data-pipeline",
    title: "Building Your First Data Pipeline: From POS to Business Intelligence",
    description:
      "Your POS system, scheduling tool, and inventory tracker all have valuable data. The problem is they don't talk to each other. Here's how to connect them.",
    date: "2026-02-18",
    readTime: "8 min read",
    tags: ["Data Engineering", "Integration"],
  },
  {
    slug: "ai-agents-that-work",
    title: "AI Agents That Actually Work: Monitoring Your Business 24/7",
    description:
      "Forget the hype about AGI. Real AI agents are already running production monitoring, catching errors, and alerting operators — here's how we built ours.",
    date: "2026-02-15",
    readTime: "7 min read",
    tags: ["AI Agents", "Operations"],
  },
  {
    slug: "data-warehouse-decision",
    title: "The Data Warehouse Decision: BigQuery, Supabase, or Both?",
    description:
      "Choosing where to store your data is one of the most consequential early decisions. We've run both BigQuery and Supabase in production — here's when to use each.",
    date: "2026-02-12",
    readTime: "7 min read",
    tags: ["Architecture", "Data Infrastructure"],
  },
  {
    slug: "spreadsheets-to-ai-ready",
    title: "From Spreadsheets to AI-Ready: A Practical Migration Guide",
    description:
      "Every data-driven company started with spreadsheets. Here's a practical, step-by-step guide to migrating off manual processes without disrupting operations.",
    date: "2026-02-10",
    readTime: "9 min read",
    tags: ["Migration", "Data Strategy"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
