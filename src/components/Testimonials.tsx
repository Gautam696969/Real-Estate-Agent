import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const testimonials = [
    {
      name: 'Sourav Mukherjee',
     quote: "Professional service, expert guidance, and a seamless experience from start to finish. I couldn't have asked for a better team to handle my property sale.", 
      image: 'https://ravmoyaanrealty.com/images/team/sir.png',
    },
    {
      name: 'Ankita Ghosh',
      quote: "The team did an amazing job helping me find the perfect home. They were professional, knowledgeable, organized, and always available to answer my questions. I couldn't have asked for a better experience.",
      image: 'https://ravmoyaanrealty.com/images/team/ankita1.png',
    },
    {
      name: 'Vishwendra Singh Yadav',
      quote: "Highly recommend this realty team! Their attention to detail, market knowledge, and dedication made selling my home stress-free and efficient. I received multiple offers and achieved my target price with their expert guidance.",
      image: 'https://ravmoyaanrealty.com/images/team/vish.png',
    },

    {
      name: 'Tapas Nayak',
      quote: "From the moment I met the team, I knew I was in good hands. They are passionate, dedicated, and genuinely care about their clients' success. Highly recommend!",
      image: 'https://ravmoyaanrealty.com/images/team/tapas.png',
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
              <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <motion.div
                  className="glass-shadow relative overflow-hidden rounded-2xl bg-white border border-gray-100"
                  style={{ width: 'min(100%, 340px)', aspectRatio: '4 / 5' }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </motion.div>
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
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.15 }}
            className="
              relative w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-2)] to-[#8f0d13] text-white border-none cursor-pointer text-base flex items-center justify-center
            "
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
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.15 }}
            className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-2)] to-[#8f0d13] text-white border-none cursor-pointer text-base flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <i className="fas fa-arrow-right" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
