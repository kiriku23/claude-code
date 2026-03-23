import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <CustomCursor />
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
