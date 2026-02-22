const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business inside and out. What are the pain points? Where is time being wasted? What data do you already have? This isn't a generic assessment — it's a deep dive into your specific operations.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We identify the 2-3 highest-impact opportunities and build a concrete implementation plan. You'll know exactly what we're building, why, and what results to expect.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We implement fast, iterating weekly with your team. No months-long development cycles. You'll see working systems within weeks, with each iteration directly informed by your feedback.",
  },
  {
    number: "04",
    title: "Operationalize",
    description:
      "We don't hand off a prototype and walk away. We ensure the system is running reliably, your team knows how to use it, and there's a clear path for ongoing optimization.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            From idea to production in weeks
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We move fast because we&apos;ve done this before. A proven process that
            minimizes risk and maximizes speed to value.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-bold text-slate-200">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
