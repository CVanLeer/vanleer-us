"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const questions = [
  {
    question: "Is your data in one place?",
    description: "Or is it scattered across spreadsheets, email, and disconnected tools?",
  },
  {
    question: "Do your systems talk to each other?",
    description: "Can your POS, scheduling, and inventory share data automatically?",
  },
  {
    question: "Can you answer business questions in minutes, not days?",
    description: "When leadership asks 'how did we do last week?', how long does it take?",
  },
  {
    question: "Do you trust your numbers?",
    description: "Are there discrepancies between reports? Do people question the data?",
  },
  {
    question: "Are your processes documented and repeatable?",
    description: "Could someone new follow your operations without tribal knowledge?",
  },
  {
    question: "Have you automated any manual workflows?",
    description: "Or is your team still copy-pasting, re-entering, and manually checking?",
  },
];

const tiers = [
  {
    range: [0, 1] as const,
    label: "Starting from scratch",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    message:
      "Your data infrastructure needs foundational work before AI can deliver value. The good news: this is exactly where we start with most clients, and the ROI on getting the basics right is enormous.",
  },
  {
    range: [2, 3] as const,
    label: "Building momentum",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    message:
      "You've made progress, but there are critical gaps that would cause an AI project to fail. A focused engagement to connect your systems and clean your data would unlock significant value.",
  },
  {
    range: [4, 5] as const,
    label: "Nearly ready",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    message:
      "You're closer than most. With targeted work on your remaining gaps, you could be running AI-powered operations within weeks. Let's talk about what that looks like.",
  },
  {
    range: [6, 6] as const,
    label: "AI-ready",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    message:
      "Your foundation is solid. You're in the rare position to deploy AI immediately and see results fast. Let's identify the highest-ROI opportunity and move.",
  },
];

function getTier(score: number) {
  return tiers.find((t) => score >= t.range[0] && score <= t.range[1])!;
}

export function AIReadiness() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const { ref, inView } = useInView();

  const answered = Object.keys(answers).length;
  const score = Object.values(answers).filter(Boolean).length;
  const allAnswered = answered === questions.length;
  const tier = getTier(score);

  function handleAnswer(index: number, value: boolean) {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  }

  function handleShowResults() {
    setShowResults(true);
  }

  function handleReset() {
    setAnswers({});
    setShowResults(false);
  }

  return (
    <section className="py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${
          inView ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Self-Assessment
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Is your data ready for AI?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Answer these 6 questions honestly. Most businesses score lower than
            they expect — and that&apos;s exactly where the opportunity is.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {questions.map((q, i) => (
            <div
              key={i}
              className={`rounded-xl border bg-white p-6 transition-all duration-300 ${
                answers[i] !== undefined
                  ? "border-slate-300"
                  : "border-slate-200"
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-slate-950">{q.question}</p>
                  <p className="mt-1 text-sm text-slate-500">{q.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleAnswer(i, true)}
                    className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                      answers[i] === true
                        ? "bg-slate-950 text-white"
                        : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(i, false)}
                    className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                      answers[i] === false
                        ? "bg-slate-950 text-white"
                        : "border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allAnswered && !showResults && (
          <div className="mt-8 text-center">
            <button
              onClick={handleShowResults}
              className="rounded-lg bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
            >
              See Your Score
            </button>
          </div>
        )}

        {showResults && (
          <div
            className={`mt-8 rounded-xl border p-8 ${tier.bg} animate-scale-in`}
          >
            <div className="text-center">
              <p className="text-5xl font-bold text-slate-950">
                {score}
                <span className="text-2xl text-slate-400">/{questions.length}</span>
              </p>
              <p className={`mt-2 text-lg font-semibold ${tier.color}`}>
                {tier.label}
              </p>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-700">
                {tier.message}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#contact"
                  className="rounded-lg bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
                >
                  Get Your Free Assessment
                </a>
                <button
                  onClick={handleReset}
                  className="text-sm font-medium text-slate-500 hover:text-slate-700"
                >
                  Retake quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
