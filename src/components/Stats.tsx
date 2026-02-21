"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 80, suffix: "%", label: "of AI projects fail without clean data" },
  { value: 40, suffix: "%", label: "efficiency gains from connected systems" },
  { value: 3, suffix: "x", label: "faster decisions with real-time data" },
  { value: 24, suffix: "/7", label: "monitoring with AI agents" },
];

function StatItem({
  value,
  suffix,
  label,
  inView,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      <p className="text-4xl font-bold text-white md:text-5xl">
        {count}
        <span className="text-slate-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{label}</p>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="bg-slate-950 py-20 md:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:gap-8"
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            inView={inView}
            delay={i * 150}
          />
        ))}
      </div>
    </section>
  );
}
