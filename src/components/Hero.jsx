import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            A playful hub for parents, nurseries, and therapists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Discover nearby nurseries, manage bookings, view child reports, and chat with ParentPal — all in one friendly place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Try the demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-slate-700 font-medium hover:border-indigo-300 hover:text-indigo-700"
            >
              Explore features
            </a>
          </motion.div>
        </div>

        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-white to-indigo-50">
          <Spline
            scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40" />
        </div>
      </div>
    </section>
  );
}
