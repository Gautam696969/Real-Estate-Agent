import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const revealRef = useScrollReveal()
  return (
    <footer ref={revealRef} className="bg-[#111] text-white pt-[60px]">
      <div className="container mx-auto px-5 reveal-up delay-1">
        {/* Top Section */}
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="flex-1 min-w-[240px]">
            <h3 className="text-[var(--color-2)] font-bold mb-3 font-cormorant text-[25px]">Contact Details</h3>
            <p className="text-white font-bold font-muli">taylorcalacci@gmail.com</p>
            <p className="text-white font-muli">(224) 436-4201</p>
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
          <h3 className="text-[var(--color-2)] font-bold mb-3 font-cormorant text-[25px]">Address</h3>
          <p className="text-white font-muli">3323 W. Diversey Ave.</p>
          <p className="text-white font-muli">Chicago, IL 60647</p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#333] py-6 flex flex-wrap justify-between items-center gap-5">
          <nav className="flex flex-wrap gap-6">
            <a href="#list-with-me" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">List With Me</a>
            <a href="#find-a-home" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">FIND A HOME</a>
            <a href="#services" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">Services</a>
            <a href="#about" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">About</a>
            <a href="#testimonials" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">Testimonials</a>
            <a href="#blog" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">Blog</a>
            <a href="#videos" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">Videos</a>
            <a href="#contact" className="text-white text-[14px] uppercase font-muli relative pb-1 nav-link">Contact</a>
          </nav>

          <div className="flex gap-4">
            <a href="#facebook" className="text-white text-[20px] transition-transform duration-300 hover:-translate-y-1" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#twitter" className="text-white text-[20px] transition-transform duration-300 hover:-translate-y-1" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="#instagram" className="text-white text-[20px] transition-transform duration-300 hover:-translate-y-1" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#youtube" className="text-white text-[20px] transition-transform duration-300 hover:-translate-y-1" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}