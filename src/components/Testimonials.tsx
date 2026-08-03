import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const testimonials = [
    {
      name: 'The Gallamores',
      quote: "I wanted to sell quickly and at a good price. In just a few weeks, I got the price I wanted.",
      image: 'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/pexels-photo-3763188-1920w.jpeg',
    },
    {
      name: 'The Braxtons',
      quote: "Glenda did a great job helping me find what I was looking for in a home. Organized, knowledgeable and friendly.",
      image: 'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/pexels-photo-415829-1920w.jpeg',
    },
    {
      name: 'The Mortons',
      quote: "I wanted to sell quickly and at a good price. In just a few weeks, I got the price I wanted.",
      image: 'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/pexels-photo-3785079-1920w.jpeg',
    },
  ]

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="py-16 md:py-[100px] bg-[#f5f5f5]">
      <div className="container mx-auto px-5"style={{padding:"27px 0px 35px 0px"}}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 20, fontSize: 'clamp(28px, 5vw, 36px)' }}

        >
          WHAT <span style={{ color: 'var(--color_2)', fontWeight: 700 }}>MY CLIENTS</span> SAY
        </motion.h2>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, rotateY: direction > 0 ? 15 : -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 100 : -100, rotateY: direction < 0 ? 15 : -15 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}
            >
              <div style={{ flex: '1 1 300px', minWidth: 0 }}>
                <motion.img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="glass-shadow"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div style={{ flex: '1 1 300px', minWidth: 0, padding: '0 20px' }}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, marginBottom: 16 }}
                >
                  {testimonials[currentSlide].name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  style={{ fontSize: 16, lineHeight: 1.8, color: '#2d2e32', fontStyle: 'italic' }}
                >
                  "{testimonials[currentSlide].quote}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 32}}
        >
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.15, backgroundColor: '#d42626' }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: 'var(--color_2)',
              color: '#fff',
              border: 'none',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-arrow-left" />
          </motion.button>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => { setDirection(idx > currentSlide ? 1 : -1); setCurrentSlide(idx) }}
                className={`border-none rounded-full cursor-pointer ${idx === currentSlide ? 'bg-[var(--color-2)]' : 'bg-gray-300'}`}
                style={{ width: idx === currentSlide ? 24 : 10, height: 10, transition: 'all 0.3s' }}
                animate={idx === currentSlide ? { width: 24 } : { width: 10 }}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.15, backgroundColor: '#d42626' }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: 'var(--color_2)',
              color: '#fff',
              border: 'none',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next testimonial"
          >
            <i className="fas fa-arrow-right" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
