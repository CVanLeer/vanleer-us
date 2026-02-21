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
              AI Consulting
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl md:leading-[1.1]">
              Turn AI into a{" "}
              <span className="text-slate-600">competitive advantage</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              We help businesses implement AI systems that drive measurable
              results — not science projects. Strategy, automation, and custom
              solutions built for your operations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-slate-950 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Book a Consultation
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
