import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function InnovativeIdeas() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const sliderImages = [
    'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvbWV8ZW58MHx8MHx8fDA%3D',
  ]
  const sliderCaptions = [
    'Grand Open Spaces',
    'Cozy Contemporary Living',
    'Premium Finishes',
    'Architectural Detail',
    'Design That Inspires',
  ]

  const features = [
    { title: 'Curated Interiors', desc: 'Handpicked designs and premium finishes in every space.', icon: 'fas fa-couch' },
    { title: 'Bespoke Styling', desc: 'Personalized touches that reflect the way you truly live.', icon: 'fas fa-paint-brush' },
    { title: 'Effortless Guidance', desc: 'From first viewing to final walkthrough, we handle it all.', icon: 'fas fa-compass' },
  ]

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa] overflow-hidden">
      <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[var(--color-2)] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full bg-[#ffd6d6] opacity-50 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[220px] h-[220px] rounded-full bg-[#ffefef] opacity-70 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-5 relative">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] text-[var(--color-2)] uppercase"
          >
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            Our Approach
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[28px] sm:text-[38px] md:text-[46px] font-cormorant font-semibold text-gray-900"
          >
            Innovative Ideas For Your <span className="text-[var(--color-2)] italic">Style</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 w-16 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[var(--color-2)] to-transparent rounded-full"
            style={{ transformOrigin: 'center' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-[720px] mx-auto text-[15px] sm:text-[16px] text-[#555] font-muli leading-loose"
          >
            I'm here to help you throughout your entire home buying and selling process. Trying to do it all on your own can be burdensome. I'll find you homes within your price range, help you find buyers, assist you with paperwork, and more. My dedication to exceptional client service does not cease with the completion of the sale.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              className="relative w-[80px] h-[80px] mx-auto md:mx-0 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              aria-label="Watch video"
            >
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[var(--color-2)]"
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[var(--color-2)]"
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
              />
              <motion.div
                className="relative w-full h-full rounded-full bg-gradient-to-br from-[var(--color-2)] to-[#8f0d13] flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(226,27,34,0.5)',
                    '0 0 30px 8px rgba(226,27,34,0.35)',
                    '0 0 0 0 rgba(226,27,34,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.svg
                  width="34"
                  height="38"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <polygon points="5,2 22,15 5,28" fill="#fff" />
                </motion.svg>
              </motion.div>
            </motion.div>

            <h3 className="mt-7 text-[24px] font-cormorant font-semibold text-gray-900">
              Modern Designs, Timeless Appeal
            </h3>
            <p className="mt-4 text-[15px] text-[#555] font-muli leading-relaxed max-w-[420px] mx-auto md:mx-0">
              From sleek contemporary kitchens to cozy living spaces, every detail is crafted to inspire. Watch our portfolio come to life.
            </p>

            <ul className="mt-10 space-y-5 text-left max-w-[420px] mx-auto md:mx-0">
              {features.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="flex items-center gap-4"
                >
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-2)]/10 text-[var(--color-2)] flex items-center justify-center text-[14px]">
                    <i className={f.icon} />
                  </span>
                  <span>
                    <strong className="block text-[15px] font-muli font-bold text-gray-900">{f.title}</strong>
                    <span className="block text-[14px] text-[#666] font-muli">{f.desc}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-1 w-full min-w-0 md:min-w-[300px]"
          >
            <div className="absolute -inset-3 md:-inset-4 rounded-[20px] border-2 border-dashed border-[var(--color-2)]/30 pointer-events-none" />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_beige-kitchen-interior-with-dining-table_47795662+%281%29-808h.jpg"
              alt="Modern kitchen"
              className="relative w-full h-auto rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex items-center gap-3"
            >
              <span className="text-[22px] font-cormorant font-bold text-[var(--color-2)]">250+</span>
              <span className="text-[12px] font-muli text-[#555] uppercase tracking-wider leading-tight">Homes<br />Sold</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[var(--color-2)] text-white px-4 py-3 rounded-xl shadow-[0_15px_40px_rgba(226,27,34,0.4)] flex items-center gap-3"
            >
              <span className="text-[22px] font-cormorant font-bold">98%</span>
              <span className="text-[12px] font-muli uppercase tracking-wider leading-tight">Client<br />Satisfaction</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-10 md:mb-14">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-[12px] font-muli font-bold tracking-[0.3em] text-[var(--color-2)] uppercase"
            >
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
              Gallery
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            </motion.span>
            <h3 className="mt-5 text-[26px] md:text-[30px] font-cormorant font-semibold text-gray-900">
              Explore Our Featured Properties
            </h3>
            <p className="mt-4 text-[10px] text-[#555] font-muli leading-relaxed max-w-[600px] mx-auto text-center">
              Browse through a handpicked selection of stunning homes that define luxury living.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
            <div className="relative h-[360px] md:h-[500px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={sliderImages[currentSlide]}
                  alt={sliderCaptions[currentSlide]}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-14 left-5 right-5 md:bottom-16 md:left-10 md:right-10 flex items-end justify-between gap-4">
              <div>
                <div className="text-[11px] font-muli font-bold tracking-[0.25em] text-[#ff8080] uppercase mb-2">
                  Featured Property
                </div>
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={currentSlide}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="font-cormorant text-white text-[22px] md:text-[28px] font-medium"
                  >
                    {sliderCaptions[currentSlide]}
                  </motion.h4>
                </AnimatePresence>
              </div>
              <span className="font-cormorant text-white text-[16px] md:text-[18px] whitespace-nowrap">
                0{currentSlide + 1}
                <span className="text-white/50"> / 0{sliderImages.length}</span>
              </span>
            </div>

            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--color-2)' }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center cursor-pointer transition-colors text-[16px] z-10"
              aria-label="Previous slide"
            >
              <i className="fas fa-arrow-left" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--color-2)' }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center cursor-pointer transition-colors text-[16px] z-10"
              aria-label="Next slide"
            >
              <i className="fas fa-arrow-right" />
            </motion.button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
              {sliderImages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => { setDirection(idx > currentSlide ? 1 : -1); setCurrentSlide(idx) }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rounded-full border-none cursor-pointer ${idx === currentSlide ? 'bg-[var(--color-2)]' : 'bg-white/40'}`}
                  style={{ width: idx === currentSlide ? 24 : 10, height: 10, transition: 'all 0.3s' }}
                  animate={idx === currentSlide ? { width: 24 } : { width: 10 }}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
