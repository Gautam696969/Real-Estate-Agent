import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const revealRef = useScrollReveal()
  return (
    <footer ref={revealRef} className="bg-[#111] pt-[60px]" style={{ color: '#fff' }}>
      <div className="container mx-auto px-5 reveal-up delay-1">
        {/* Top Section */}
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="flex-1 min-w-[240px]">
            <h3 style={{ color: 'var(--color-2)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 25, marginBottom: 12 }}>Contact Details</h3>
            <p style={{ color: '#fff', fontWeight: 700, fontFamily: "'Muli', sans-serif" }}>taylorcalacci@gmail.com</p>
            <p style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}>(224) 436-4201</p>
          </div>

          <div className="flex-1 min-w-[240px] flex items-center justify-center">
            <svg width="225" height="84" viewBox="0 0 225 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M112.5 0L225 30V54L112.5 84L0 54V30L112.5 0Z" fill="#fff" />
              <path d="M112.5 15L172 36V48L112.5 63L53 48V36L112.5 15Z" fill="var(--color-2)" />
              <rect x="102" y="48" width="22" height="32" rx="2" fill="#fff" />
            </svg>
          </div>

          <div className="flex-1 min-w-[240px] flex items-center justify-center">
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/equal-housing-opportunity-white-1920w-79h.webp"
              alt="Equal Housing Opportunity"
              className="h-10 w-auto"
            />
          </div>

          <div className="flex-1 min-w-[240px] flex items-center justify-center">
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/DotRealEstate-URL-White-No+cursor+%281%29-158w.png"
              alt="Dot Real Estate"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="border-t border-[#333] pt-6 mb-6">
          <h3 style={{ color: 'var(--color-2)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 25, marginBottom: 12 }}>Address</h3>
          <p style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}>3323 W. Diversey Ave.</p>
          <p style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}>Chicago, IL 60647</p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#333] py-6 flex flex-wrap justify-between items-center gap-5">
          <nav className="flex flex-wrap gap-6">
            <a href="#list-with-me" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">List With Me</a>
            <a href="#find-a-home" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">FIND A HOME</a>
            <a href="#services" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Services</a>
            <a href="#about" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">About</a>
            <a href="#testimonials" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Testimonials</a>
            <a href="#blog" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Blog</a>
            <a href="#videos" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Videos</a>
            <a href="#contact" style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Contact</a>
          </nav>

          <div className="flex gap-4">
            <a href="#facebook" style={{ color: '#fff', fontSize: 20, transition: 'transform 0.3s' }} className="transition-transform duration-300 hover:-translate-y-1" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#twitter" style={{ color: '#fff', fontSize: 20, transition: 'transform 0.3s' }} className="transition-transform duration-300 hover:-translate-y-1" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="#instagram" style={{ color: '#fff', fontSize: 20, transition: 'transform 0.3s' }} className="transition-transform duration-300 hover:-translate-y-1" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#youtube" style={{ color: '#fff', fontSize: 20, transition: 'transform 0.3s' }} className="transition-transform duration-300 hover:-translate-y-1" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}