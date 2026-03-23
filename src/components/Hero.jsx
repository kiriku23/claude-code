import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Spring-smoothed progress for buttery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Clip-path: reveals clean car from left to right
  const clipRight = useTransform(smoothProgress, [0, 0.7], [100, 0])

  // Text + CTA fade in after 70% scroll
  const textOpacity = useTransform(smoothProgress, [0.65, 0.85], [0, 1])
  const textY = useTransform(smoothProgress, [0.65, 0.85], [40, 0])

  // Badge scale
  const badgeScale = useTransform(smoothProgress, [0.7, 0.85], [0, 1])

  return (
    <section ref={containerRef} className="relative" style={{ height: '300vh' }}>
      {/* Sticky viewport container — white background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

        {/* Car transformation area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-auto px-6">
            {/* Dirty car (base layer) */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/car-dirty.png"
                alt="Car before detailing - slightly dirty"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Clean car (reveal layer with clip-path) */}
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                clipPath: useTransform(clipRight, (v) => `inset(0 ${v}% 0 0)`),
              }}
            >
              <img
                src="/images/car-clean.png"
                alt="Car after detailing - pristine ceramic coating"
                className="w-full h-auto object-cover"
              />
              {/* Shine sweep effect on the clean car */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  x: useTransform(smoothProgress, [0.4, 0.75], ['-100%', '200%']),
                }}
              />
            </motion.div>

            {/* "Before → After" labels */}
            <motion.div
              className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-red-500/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg"
              style={{ opacity: useTransform(smoothProgress, [0, 0.6, 0.75], [1, 1, 0]) }}
            >
              Before
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg"
              style={{ opacity: useTransform(smoothProgress, [0.5, 0.7], [0, 1]) }}
            >
              After
            </motion.div>
          </div>
        </div>

        {/* Text overlay — fades in after transformation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 pb-24 sm:pb-28"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4">
              Your Car Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                Showroom
              </span>{' '}
              Perfection
            </h1>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-8">
              Expert ceramic coatings, paint correction, and full interior restoration. We don't just clean — we transform.
            </p>
            <a
              href="#contact"
              id="hero-cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-base font-bold rounded-2xl shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              Ready!
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Scroll hint — fades out as user starts scrolling */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll to reveal</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-brand-500 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Floating stats badge — appears after transformation */}
        <motion.div
          className="absolute bottom-24 right-6 sm:bottom-32 sm:right-12 hidden sm:flex"
          style={{ scale: badgeScale, opacity: badgeScale }}
        >
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl px-6 py-4 flex items-center gap-6">
            <div className="text-center">
              <div className="text-xl font-bold text-white">2,500+</div>
              <div className="text-xs text-slate-400">Cars Detailed</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center">
              <div className="text-xl font-bold text-white">4.9 ★</div>
              <div className="text-xs text-slate-400">Rating</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center">
              <div className="text-xl font-bold text-white">8+</div>
              <div className="text-xs text-slate-400">Years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
