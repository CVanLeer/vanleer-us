import { Carousel } from "./Carousel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 md:pt-24">
      {/* Carousel */}
      <Carousel />

      {/* Content overlay */}
      <div className="relative bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
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
                className="rounded-lg bg-slate-950 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-800"
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
