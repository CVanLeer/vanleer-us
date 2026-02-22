"use client";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="hero-mesh" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-600">
              AI Strategy &amp; Implementation
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl md:leading-[1.1]">
              AI is coming.{" "}
              <span className="text-slate-600">Is your data ready?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Most AI projects fail because the data underneath isn&apos;t ready.
              We build the infrastructure that makes AI actually work — then we
              stay to make sure it keeps working.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#readiness"
                className="rounded-lg bg-amber-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-700"
              >
                Check Your AI Readiness
              </a>
              <a
                href="#services"
                className="rounded-lg border border-slate-300 px-8 py-3.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                See How We Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
