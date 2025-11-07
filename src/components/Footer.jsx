export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} KidsHub. For demo purposes only.</p>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          <a href="#features" className="hover:text-indigo-700">Features</a>
          <a href="#community" className="hover:text-indigo-700">Community</a>
          <a href="#" className="hover:text-indigo-700">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
