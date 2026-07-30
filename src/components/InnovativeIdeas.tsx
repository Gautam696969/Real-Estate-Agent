import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function InnovativeIdeas() {
  const revealRef = useScrollReveal()
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderImages = [
    'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvbWV8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvbWV8ZW58MHx8MHx8fDA%3D',
  ]

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section ref={revealRef} className="py-[80px]">
      <div className="container mx-auto px-5">
        <h2 className="text-[36px] font-cormorant font-normal text-gray-900 reveal-up delay-1">INNOVATIVE IDEAS FOR YOUR STYLE</h2>
        <div className="w-[60px] h-[2px] bg-[#ddd] mb-6 reveal-up delay-2" />
        <p className="max-w-[800px] mb-10 text-[16px] text-[#2d2e32] font-muli leading-loose reveal-up delay-3">
          I'm here to help you throughout your entire home buying and selling process. Trying to do it all on your own can be burdensome. I'll find you homes within your price range, help you find buyers, assist you with paperwork, and more. My dedication to exceptional client service does not cease with the completion of the sale.
        </p>

        <div className="flex flex-wrap gap-10 items-center mb-12">
          <div className="flex-shrink-0 reveal-left delay-4">
            <div className="w-[80px] h-[80px] rounded-full border-[3px] border-[var(--color-2)] flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5,2 22,15 5,28" fill="var(--color-2)" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-[300px] reveal-right delay-4">
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_beige-kitchen-interior-with-dining-table_47795662+%281%29-808h.jpg"
              alt="Modern kitchen"
              className="w-full h-auto rounded-lg"
              style={{ WebkitBoxReflect: 'below 4px linear-gradient(transparent, transparent, rgba(0,0,0,0.2))' }}
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-[60px] reveal-up delay-4">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {sliderImages.map((img, idx) => (
              <div key={idx} className="min-w-full flex-shrink-0">
                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-auto block" />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--color-2)] text-white border-none w-10 h-10 rounded-full cursor-pointer text-[18px] flex items-center justify-center hover:bg-opacity-90 transition-colors"
            aria-label="Previous slide"
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--color-2)] text-white border-none w-10 h-10 rounded-full cursor-pointer text-[18px] flex items-center justify-center hover:bg-opacity-90 transition-colors"
            aria-label="Next slide"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}