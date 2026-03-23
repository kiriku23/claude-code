import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#features' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-brand-500/30 transition-shadow">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            DetailCraft<span className="text-brand-500">Pro</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                scrolled ? 'text-slate-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Ready!
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 bg-white/95 backdrop-blur-md border-t border-slate-100 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-slate-600 hover:text-brand-600 py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-xl shadow-md mt-2"
          >
            Ready!
          </a>
        </div>
      </div>
    </nav>
  )
}
