export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-medium text-slate-950">Van Leer Consulting</p>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Van Leer Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
