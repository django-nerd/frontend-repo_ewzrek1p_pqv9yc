import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';

export default function DemoCTA() {
  return (
    <section id="demo" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-amber-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">See KidsHub in action</h2>
            <p className="mt-3 text-slate-600">Walk through the MVP journey: add a child, search nurseries, make a booking, and explore the dashboard with reports.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {["Add child & preferences","Find nurseries nearby","Book with mock checkout","View reports & milestones"].map((t)=> (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="text-amber-500" size={18}/><span>{t}</span></li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700">
                <Play size={18} />
                Launch demo
              </a>
              <a href="#community" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-slate-700 font-medium hover:border-indigo-300 hover:text-indigo-700">
                Community feed
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm"
          >
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-100 via-white to-amber-100" />
            <p className="mt-3 text-sm text-slate-600">This MVP uses mock data, static Q&A for ParentPal, and local sessions for quick demos.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
