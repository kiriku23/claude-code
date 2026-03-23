import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div className="animate-on-scroll">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to make your car{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
                look its best
              </span>
              ?
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Tell us about your vehicle and what you're looking for. We'll get back to you within a few hours with a custom quote.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Visit Us</div>
                  <div className="text-sm text-slate-500">742 Detailing Lane, Suite 23, Automotive District</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Call Us</div>
                  <div className="text-sm text-slate-500">(555) 234-5678</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Hours</div>
                  <div className="text-sm text-slate-500">Mon – Sat: 8 AM – 6 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-on-scroll delay-200">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-900/5 border border-slate-100"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-stone-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-stone-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Tell Us About Your Car
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g., 2024 BMW M4 — looking for ceramic coating and full interior detail..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-stone-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className={`w-full py-4 rounded-xl text-base font-bold transition-all duration-300 ${
                    submitted
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5'
                  }`}
                >
                  {submitted ? '✓ Message Sent!' : 'Ready!'}
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                We typically respond within 2–4 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
