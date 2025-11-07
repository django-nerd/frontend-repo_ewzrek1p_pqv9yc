import { motion } from 'framer-motion';
import { ShieldCheck, Search, CalendarClock, MessageSquare, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Nursery search',
    desc: 'Find and filter nurseries by location, fees, and curriculum with delightful cards.',
  },
  {
    icon: CalendarClock,
    title: 'Bookings',
    desc: 'Smooth mock checkout and scheduling to confirm your spot in seconds.',
  },
  {
    icon: MessageSquare,
    title: 'ParentPal AI',
    desc: 'Built‑in Q&A for quick parenting tips using a static knowledge file.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards',
    desc: 'Simple, clear views for parents and nurseries with reports and insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Role based access',
    desc: 'Parent, Nursery, Therapist, and Admin flows for an end‑to‑end demo.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">All the essentials for the MVP</h2>
          <p className="mt-3 text-slate-600">Everything needed for a compelling demo: search, book, dashboards, community, and more.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
