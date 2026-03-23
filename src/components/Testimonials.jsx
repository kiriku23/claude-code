import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "I've taken my M4 to a lot of places, but DetailCraft Pro is on another level. The ceramic coating still beads water perfectly after six months. My car literally looks better than the day I picked it up from the dealership.",
    name: 'Marcus Chen',
    title: 'BMW M4 Owner',
    image: '/images/testimonial-1.png',
    rating: 5,
  },
  {
    quote: "They did a full interior restoration on my Range Rover after years of kids, dogs, and coffee spills. I honestly thought I'd need to replace the leather. Now it smells and looks brand new. Absolutely worth every penny.",
    name: 'Sarah Williams',
    title: 'Range Rover Owner',
    image: '/images/testimonial-2.png',
    rating: 5,
  },
  {
    quote: "The paint correction on my 911 removed every swirl mark from the previous owner. The finish is like glass now. I showed it to my Porsche club and three guys immediately booked appointments.",
    name: 'David Morales',
    title: 'Porsche 911 Owner',
    image: '/images/testimonial-3.png',
    rating: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">Customer Stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Don't take our word for it
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Hear from real car owners who trusted us with their vehicles.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-stone-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-200/60 hover:shadow-lg hover:shadow-brand-500/5 transition-shadow duration-300"
            >
              <StarRating count={t.rating} />
              <blockquote className="mt-5 text-slate-600 text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
