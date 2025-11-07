import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoCTA from './components/DemoCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoCTA />
        <section id="community" className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Community vibes</h2>
              <p className="mt-3 text-slate-600">A friendly feed for parents to share tips and celebrate milestones. Comments and likes are mocked for demo flow.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <article key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="h-28 rounded-lg bg-gradient-to-br from-indigo-100 via-white to-amber-100" />
                  <h3 className="mt-3 font-semibold">Parent story #{i}</h3>
                  <p className="mt-1 text-sm text-slate-600">Today we tried a new sensory game and it was a hit! 🧩✨</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>12 comments</span>
                    <button className="rounded-full px-3 py-1 bg-indigo-50 text-indigo-700">Like</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
