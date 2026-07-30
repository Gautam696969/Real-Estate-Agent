import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'transparent',
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, paddingBottom: 12 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="73" height="78" viewBox="0 0 73 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.5 0L73 25V50L36.5 78L0 50V25L36.5 0Z" fill="#fff" />
            <path d="M36.5 12L58 30V42L36.5 54L15 42V30L36.5 12Z" fill="var(--color_2)" />
            <rect x="30" y="40" width="13" height="16" rx="1" fill="#fff" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, fontFamily: "'Muli', sans-serif", letterSpacing: 1 }}>Taylor Calacci</span>
            <span style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: 2 }}>Kale Realty</span>
          </div>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          <a href="#list-with-me" style={{ color: '#fff', fontSize: 16, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase', textDecoration: 'none', position: 'relative', paddingBottom: 4 }}>List With Me</a>
          <a href="#find-a-home" style={{ color: '#fff', fontSize: 16, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase', textDecoration: 'none', position: 'relative', paddingBottom: 4 }}>FIND A HOME</a>

          <div style={{ position: 'relative' }}>
            <a href="#about" style={{ color: '#fff', fontSize: 16, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase', textDecoration: 'none', position: 'relative', paddingBottom: 4 }}>About Us</a>
            <div style={{ display: 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: '#111', minWidth: 200, padding: 10, zIndex: 100, borderRadius: 4 }} className="dropdown">
              <a href="#team" style={{ display: 'block', color: '#fff', padding: '8px 12px', fontSize: 14, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase' }}>Team</a>
              <a href="#mission" style={{ display: 'block', color: '#fff', padding: '8px 12px', fontSize: 14, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase' }}>Mission</a>
              <a href="#experience" style={{ display: 'block', color: '#fff', padding: '8px 12px', fontSize: 14, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase' }}>Experience</a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <a href="#resources" style={{ color: '#fff', fontSize: 16, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase', textDecoration: 'none', position: 'relative', paddingBottom: 4 }}>Resources</a>
            <div style={{ display: 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: '#111', minWidth: 200, padding: 10, zIndex: 100, borderRadius: 4 }} className="dropdown">
              <a href="#market" style={{ display: 'block', color: '#fff', padding: '8px 12px', fontSize: 14, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase' }}>Market Report</a>
              <a href="#guides" style={{ display: 'block', color: '#fff', padding: '8px 12px', fontSize: 14, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase' }}>Guides</a>
              <a href="#faq" style={{ display: 'block', color: '#fff', padding: '8px 12px', fontSize: 14, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase' }}>FAQ</a>
            </div>
          </div>

          <a href="#contact" style={{ color: '#fff', fontSize: 16, fontFamily: "'Muli', sans-serif", textTransform: 'uppercase', textDecoration: 'none', position: 'relative', paddingBottom: 4 }}>Contact</a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 24,
            cursor: 'pointer',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hamburger { display: block !important; }
          .desktop-nav {
            display: ${menuOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
             background: transparent;
             padding: 20px;
             gap: 16px;
             box-shadow: none;
          }
          .dropdown { display: none !important; }
        }
        @media (min-width: 1025px) {
          .desktop-nav > div:hover .dropdown { display: block !important; }
          .desktop-nav > div:hover > a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--color_2);
          }
        }
        .desktop-nav > a:hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color_2);
        }
      `}</style>
    </header>
  )
}