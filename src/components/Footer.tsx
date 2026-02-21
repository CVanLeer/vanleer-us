import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-6">
            <p className="text-sm font-medium text-slate-950">Van Leer Consulting</p>
            <Link
              href="/blog"
              className="text-sm text-slate-500 transition-colors hover:text-slate-950"
            >
              Blog
            </Link>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Van Leer Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
