const logos = [
  { name: 'Tesla', letters: 'TESLA' },
  { name: 'BMW', letters: 'BMW' },
  { name: 'Mercedes', letters: 'MERCEDES' },
  { name: 'Porsche', letters: 'PORSCHE' },
  { name: 'Audi', letters: 'AUDI' },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by owners of
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors duration-300 tracking-[0.2em] cursor-default select-none"
            >
              {logo.letters}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
