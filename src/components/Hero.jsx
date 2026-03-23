export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-stone-50">
      {/* Subtle background gradient accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-brand-100/40 via-brand-50/20 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-0 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left - Copy */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-200/60 rounded-full">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-brand-700 tracking-wide uppercase">Premium Detailing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Your Car Deserves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
              Showroom
            </span>{' '}
            Perfection
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg">
            Expert ceramic coatings, paint correction, and full interior restoration. We don't just clean your car — we transform it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              id="hero-cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-base font-bold rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              Ready!
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 text-base font-semibold rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              See Our Services
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-2xl font-bold text-slate-900">2,500+</div>
              <div className="text-sm text-slate-500">Cars Detailed</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-slate-900">4.9 ★</div>
              <div className="text-sm text-slate-500">Average Rating</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-slate-900">8+</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="relative animate-slide-in-right">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
            <img
              src="/images/hero-car.png"
              alt="Freshly detailed luxury car with ceramic coating"
              className="w-full h-auto object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 px-5 py-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Certified</div>
              <div className="text-xs text-slate-500">IDA Approved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
