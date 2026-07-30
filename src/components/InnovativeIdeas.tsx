import { useState } from 'react'

export default function InnovativeIdeas() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderImages = [
    'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/sl9aqvzehttywrraztnq-640w.png',
    'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/webnmdgbjleg1a1bfihz-640w.png',
    'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/cx2ywemwtmtdibnhfmfe-640w.png',
    'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/jtlnjt9jirpbg5z5adcg-640w.png',
    'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/fylow5pb7m1i9xm0gs48-1920w.png',
  ]

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section style={{ padding: '80px 0' }} className="section-padding">
      <div className="container">
        <h2>INNOVATIVE IDEAS FOR YOUR STYLE</h2>
        <div style={{ width: 60, height: 2, backgroundColor: '#ddd', marginBottom: 24 }} />
        <p style={{ maxWidth: 800, marginBottom: 40 }}>
          I'm here to help you throughout your entire home buying and selling process. Trying to do it all on your own can be burdensome. I'll find you homes within your price range, help you find buyers, assist you with paperwork, and more. My dedication to exceptional client service does not cease with the completion of the sale.
        </p>

        <div style={{ display: 'flex', gap: 40, alignItems: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid var(--color_2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5,2 22,15 5,28" fill="var(--color_2)" />
              </svg>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 300 }}>
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_beige-kitchen-interior-with-dining-table_47795662+%281%29-808h.jpg"
              alt="Modern kitchen"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
          <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentSlide * 100}%)` }}>
            {sliderImages.map((img, idx) => (
              <div key={idx} style={{ minWidth: '100%', flexShrink: 0 }}>
                <img src={img} alt={`Slide ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--color_2)',
              color: '#fff',
              border: 'none',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous slide"
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--color_2)',
              color: '#fff',
              border: 'none',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next slide"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}