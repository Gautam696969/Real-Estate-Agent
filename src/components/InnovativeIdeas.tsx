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
    <section className="py-16 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-5"style={{padding:'40px 0 75px 0'}}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[26px] sm:text-[36px] md:text-[42px] font-cormorant font-normal text-gray-900 text-center mb-6"
        >
          INNOVATIVE IDEAS FOR YOUR STYLE
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[60px] h-[2px] bg-[#ddd] mb-6 mx-auto"
          style={{ transformOrigin: 'center' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[800px] mb-16 text-[16px] text-[#2d2e32] font-muli leading-loose text-center mx-auto"
        >
          I'm here to help you throughout your entire home buying and selling process. Trying to do it all on your own can be burdensome. I'll find you homes within your price range, help you find buyers, assist you with paperwork, and more. My dedication to exceptional client service does not cease with the completion of the sale.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              className="w-[80px] h-[80px] rounded-full border-[3px] border-[var(--color-2)] flex items-center justify-center cursor-pointer mx-auto md:mx-0"
              whileHover={{ scale: 1.1, rotate: 360, borderColor: 'var(--color-2)' }}
              transition={{ duration: 0.6 }}
            >
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5,2 22,15 5,28" fill="var(--color-2)" />
              </svg>
            </motion.div>
            <h3 className="text-[22px] font-cormorant font-semibold text-gray-900 mt-6 mb-3">
              Modern Designs, Timeless Appeal
            </h3>
            <p className="text-[15px] text-[#555] font-muli leading-relaxed max-w-[400px] mx-auto md:mx-0">
              From sleek contemporary kitchens to cozy living spaces, every detail is crafted to inspire. Watch our portfolio come to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 w-full min-w-0 md:min-w-[300px]"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_beige-kitchen-interior-with-dining-table_47795662+%281%29-808h.jpg"
              alt="Modern kitchen"
              className="w-full h-auto rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-[22px] font-cormorant font-semibold text-gray-900" style={{margin:'50px 0px 0px 0px'}}>
              Explore Our Featured Properties
            </h3>
            <p className="text-[15px] text-[#555] font-muli leading-relaxed max-w-[650px] mx-auto text-center" style={{margin:'20px 0px 10px 0px'}}>
              Browse through a handpicked selection of stunning homes that define luxury living.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <div className="relative h-[350px] md:h-[450px]">
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
                  alt={`Slide ${currentSlide + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </AnimatePresence>
            </div>

            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--color-2)] text-white border-none w-10 h-10 rounded-full cursor-pointer text-[18px] flex items-center justify-center hover:bg-opacity-90 transition-colors"
              aria-label="Previous slide"
            >
              <i className="fas fa-arrow-left" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--color-2)] text-white border-none w-10 h-10 rounded-full cursor-pointer text-[18px] flex items-center justify-center hover:bg-opacity-90 transition-colors"
              aria-label="Next slide"
            >
              <i className="fas fa-arrow-right" />
            </motion.button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => { setDirection(idx > currentSlide ? 1 : -1); setCurrentSlide(idx) }}
                  className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer ${idx === currentSlide ? 'bg-[var(--color-2)]' : 'bg-white/50'}`}
                  whileHover={{ scale: 1.3 }}
                  animate={idx === currentSlide ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
