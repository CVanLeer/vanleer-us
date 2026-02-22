export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Built by an operator, not a vendor
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Van Leer Consulting was founded by Chris Van Leer, a systems
              architect who builds AI into real business operations every day —
              not as a side project, but as the core of how his companies run.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              With experience spanning multi-location operations, data platform
              engineering, and end-to-end AI implementation, we bring a rare
              combination: deep technical expertise and real operational context.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We&apos;ve built demand forecasting systems, automated data
              pipelines across dozens of integrations, deployed AI agents that
              monitor operations 24/7, and designed the infrastructure that
              makes it all work reliably at scale.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-950">
              Why work with us
            </h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Operator mindset",
                  text: "We think in business outcomes, not technology buzzwords. Every recommendation ties back to revenue, cost savings, or operational efficiency.",
                },
                {
                  title: "Battle-tested systems",
                  text: "Everything we recommend, we've built and run ourselves. No theoretical frameworks — only approaches proven in production.",
                },
                {
                  title: "Speed to value",
                  text: "We deliver working systems in weeks, not quarters. Fast iteration with real feedback beats big-bang launches every time.",
                },
                {
                  title: "Full-stack capability",
                  text: "From data infrastructure to AI models to user-facing applications — we handle the entire stack so nothing falls through the cracks.",
                },
              ].map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
