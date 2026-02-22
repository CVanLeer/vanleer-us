"use client";

import { useInView } from "@/hooks/useInView";

const comparison = [
  {
    aspect: "Engagement model",
    traditional: "Fixed scope, fixed timeline",
    vanleer: "Ongoing partnership that evolves",
  },
  {
    aspect: "Knowledge transfer",
    traditional: "Handoff document, then gone",
    vanleer: "We build it, run it, improve it together",
  },
  {
    aspect: "Risk",
    traditional: "You own all the risk after delivery",
    vanleer: "Shared accountability for outcomes",
  },
  {
    aspect: "Speed",
    traditional: "Months of discovery before any output",
    vanleer: "Working systems in weeks",
  },
  {
    aspect: "Focus",
    traditional: "Technology-first recommendations",
    vanleer: "Business outcomes drive every decision",
  },
  {
    aspect: "After launch",
    traditional: "Support contract (extra cost)",
    vanleer: "Continuous optimization included",
  },
];

export function Partnership() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              We ride the wave with you
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              AI isn&apos;t a one-time project — it&apos;s an ongoing
              transformation. We don&apos;t hand off and disappear. We stay in
              the boat.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
              <div className="p-4 md:p-6" />
              <div className="border-l border-slate-200 p-4 md:p-6">
                <p className="text-sm font-semibold text-slate-500">
                  Traditional Consulting
                </p>
              </div>
              <div className="border-l border-slate-200 bg-slate-950 p-4 md:p-6">
                <p className="text-sm font-semibold text-white">
                  Van Leer Partnership
                </p>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 ${
                  i < comparison.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <div className="p-4 md:p-6">
                  <p className="text-sm font-semibold text-slate-950">
                    {row.aspect}
                  </p>
                </div>
                <div className="border-l border-slate-200 p-4 md:p-6">
                  <p className="text-sm text-slate-500">{row.traditional}</p>
                </div>
                <div className="border-l border-slate-200 bg-slate-950/[0.03] p-4 md:p-6">
                  <p className="text-sm font-medium text-slate-900">
                    {row.vanleer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
