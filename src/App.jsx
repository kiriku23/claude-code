import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // IntersectionObserver for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all elements with the animate class
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
