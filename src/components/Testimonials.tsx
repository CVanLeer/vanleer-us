"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote:
      "Van Leer didn't just build us a system — they built us a competitive advantage. Our data now works for us instead of against us.",
    name: "Coming Soon",
    role: "Client testimonial",
    initials: "CS",
  },
  {
    quote:
      "In three weeks, we went from spreadsheets to real-time dashboards. The ROI was obvious within the first month.",
    name: "Coming Soon",
    role: "Client testimonial",
    initials: "CS",
  },
  {
    quote:
      "What sets them apart is they stay. Most consultants deliver a deck and disappear. Van Leer is in the trenches with us.",
    name: "Coming Soon",
    role: "Client testimonial",
    initials: "CS",
  },
];

export function Testimonials() {
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
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Results
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              What our clients say
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 p-8"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.6s ease-out ${i * 150}ms`,
                }}
              >
                <svg
                  className="h-8 w-8 text-slate-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-500">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
