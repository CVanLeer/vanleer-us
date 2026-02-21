import Link from "next/link";

export function BlogCTA() {
  return (
    <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8 md:p-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-950">
          Ready to get your data AI-ready?
        </h3>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-600">
          We help businesses build the data infrastructure that makes AI
          actually work. No buzzwords — just systems that drive results.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/#contact"
            className="rounded-lg bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/#readiness"
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Take the AI Readiness Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
