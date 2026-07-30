import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const revealRef = useScrollReveal()
  const [currentSlide, setCurrentSlide] = useState(0)
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
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section ref={revealRef} style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }} className="section-padding">
      <div className="container">
        <h2 className="reveal-up delay-1" style={{ textAlign: 'center', marginBottom: 8 }}>
          WHAT <span style={{ color: 'var(--color_2)', fontWeight: 700 }}>MY CLIENTS</span> SAY
        </h2>
        <div className="reveal-up delay-2" style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 48, marginLeft: 'auto', marginRight: 'auto' }} />

        <div className="reveal-up delay-3" style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="glass-shadow"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 300, padding: '0 20px' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, marginBottom: 16, transition: 'all 0.3s' }}>
              {testimonials[currentSlide].name}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#2d2e32', fontStyle: 'italic', transition: 'all 0.3s' }}>
              "{testimonials[currentSlide].quote}"
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 32 }}>
          <button
            onClick={prevSlide}
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
            className="hover-lift"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            onClick={nextSlide}
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
            className="hover-lift"
            aria-label="Next testimonial"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}