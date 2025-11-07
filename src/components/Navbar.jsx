import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-indigo-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-white shadow-sm">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-lg tracking-tight text-indigo-700">KidsHub</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-indigo-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <User size={16} />
              Sign in
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-indigo-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow"
              >
                <User size={16} />
                Sign in
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
