"use client";

import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Send to Formspree or similar — replace with your endpoint
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    }).then(() => {
      setSubmitted(true);
      form.reset();
    });
  }

  return (
    <section id="contact" className="bg-slate-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let&apos;s talk about what AI can do for your business
            </h2>
            <p className="mt-6 leading-relaxed text-slate-400">
              No pitch decks. No jargon. Just a direct conversation about your
              operations and where AI can make the biggest impact. We&apos;ll
              tell you honestly if we&apos;re the right fit.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:chris@vanleer.us" className="hover:text-white transition-colors">
                  chris@vanleer.us
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-8">
                <div className="text-center">
                  <p className="text-xl font-semibold text-white">
                    Message received
                  </p>
                  <p className="mt-2 text-slate-400">
                    I&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    What are you looking to solve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    placeholder="Tell us about your business challenge..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
