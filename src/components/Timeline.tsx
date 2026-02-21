"use client";

import { useInView } from "@/hooks/useInView";

const milestones = [
  {
    title: "Scattered Data",
    description: "Spreadsheets, siloed tools, manual processes",
  },
  {
    title: "Connected",
    description: "Systems integrated, single source of truth",
  },
  {
    title: "Automated",
    description: "Pipelines run themselves, alerts on exceptions",
    current: true,
  },
  {
    title: "AI-Powered",
    description: "Predictions, recommendations, autonomous decisions",
  },
  {
    title: "Continuous Optimization",
    description: "Self-improving systems that compound value",
  },
];

export function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              The Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Where are you on the AI adoption curve?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Most businesses are stuck in stage one. We meet you where you are
              and move you forward — fast.
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="mt-16 hidden md:block">
            <div className="relative">
              {/* Track background */}
              <div className="absolute left-0 right-0 top-4 h-1 rounded-full bg-slate-200" />

              {/* Animated fill */}
              <div
                className="absolute left-0 top-4 h-1 rounded-full bg-slate-950 transition-all duration-1000 ease-out"
                style={{
                  width: inView ? "50%" : "0%",
                }}
              />

              <div className="relative flex justify-between">
                {milestones.map((m, i) => (
                  <div key={m.title} className="flex flex-col items-center" style={{ width: "20%" }}>
                    {/* Dot */}
                    <div className="relative">
                      <div
                        className={`h-9 w-9 rounded-full border-[3px] transition-all duration-500 ${
                          m.current
                            ? "border-slate-950 bg-slate-950"
                            : i < 2
                            ? "border-slate-950 bg-white"
                            : "border-slate-300 bg-white"
                        }`}
                        style={{ transitionDelay: `${i * 150}ms` }}
                      />
                      {m.current && (
                        <div className="absolute -inset-2 animate-ping rounded-full bg-slate-950/20" />
                      )}
                    </div>

                    {/* Label */}
                    <div className="mt-4 text-center">
                      <p
                        className={`text-sm font-semibold ${
                          m.current ? "text-slate-950" : "text-slate-600"
                        }`}
                      >
                        {m.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {m.description}
                      </p>
                      {m.current && (
                        <span className="mt-2 inline-block rounded-full bg-slate-950 px-3 py-0.5 text-xs font-medium text-white">
                          You are here
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="mt-12 md:hidden">
            <div className="relative ml-4 border-l-2 border-slate-200 pl-8">
              {milestones.map((m, i) => (
                <div key={m.title} className="relative pb-10 last:pb-0">
                  {/* Dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-0">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        m.current
                          ? "bg-slate-950 ring-4 ring-slate-950/20"
                          : i < 2
                          ? "bg-slate-950"
                          : "bg-slate-300"
                      }`}
                    />
                  </div>

                  <p
                    className={`text-sm font-semibold ${
                      m.current ? "text-slate-950" : "text-slate-600"
                    }`}
                  >
                    {m.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{m.description}</p>
                  {m.current && (
                    <span className="mt-2 inline-block rounded-full bg-slate-950 px-3 py-0.5 text-xs font-medium text-white">
                      You are here
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
