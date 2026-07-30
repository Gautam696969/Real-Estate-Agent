export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '60px 0 0' }}>
      <div className="container">
        {/* Top Section */}
        <div style={{ display: 'flex', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{ color: 'var(--color_2)', fontWeight: 700, marginBottom: 12 }}>Contact Details</h3>
            <p style={{ color: '#fff', fontWeight: 700 }}>taylorcalacci@gmail.com</p>
            <p style={{ color: '#fff' }}>(224) 436-4201</p>
          </div>

          <div style={{ flex: 1, minWidth: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="225" height="84" viewBox="0 0 225 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M112.5 0L225 30V54L112.5 84L0 54V30L112.5 0Z" fill="#fff" />
              <path d="M112.5 15L172 36V48L112.5 63L53 48V36L112.5 15Z" fill="var(--color_2)" />
              <rect x="102" y="48" width="22" height="32" rx="2" fill="#fff" />
            </svg>
          </div>

          <div style={{ flex: 1, minWidth: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/equal-housing-opportunity-white-1920w-79h.webp"
              alt="Equal Housing Opportunity"
              style={{ height: 40, width: 'auto' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/DotRealEstate-URL-White-No+cursor+%281%29-158w.png"
              alt="Dot Real Estate"
              style={{ height: 40, width: 'auto' }}
            />
          </div>
        </div>

        {/* Address Section */}
        <div style={{ borderTop: '1px solid #333', paddingTop: 24, marginBottom: 24 }}>
          <h3 style={{ color: 'var(--color_2)', fontWeight: 700, marginBottom: 12 }}>Address</h3>
          <p style={{ color: '#fff' }}>3323 W. Diversey Ave.</p>
          <p style={{ color: '#fff' }}>Chicago, IL 60647</p>
        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid #333', paddingTop: 24, marginBottom: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
          <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="#list-with-me" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>List With Me</a>
            <a href="#find-a-home" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>FIND A HOME</a>
            <a href="#services" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>Services</a>
            <a href="#about" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>About</a>
            <a href="#testimonials" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>Testimonials</a>
            <a href="#blog" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>Blog</a>
            <a href="#videos" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>Videos</a>
            <a href="#contact" style={{ color: '#fff', fontSize: 14, textTransform: 'uppercase' }}>Contact</a>
          </nav>

          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#facebook" aria-label="Facebook" style={{ color: '#fff', fontSize: 20 }}>
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#twitter" aria-label="Twitter" style={{ color: '#fff', fontSize: 20 }}>
              <i className="fab fa-twitter" />
            </a>
            <a href="#instagram" aria-label="Instagram" style={{ color: '#fff', fontSize: 20 }}>
              <i className="fab fa-instagram" />
            </a>
            <a href="#youtube" aria-label="YouTube" style={{ color: '#fff', fontSize: 20 }}>
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}