import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full z-[1000] top-0 transition-all duration-300 ease-in-out ${
        scrolled ? 'fixed bg-[#111111f2] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md' : 'absolute bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-5">
        <a href="/" className="flex items-center gap-3">
          <svg width="73" height="78" viewBox="0 0 73 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.5 0L73 25V50L36.5 78L0 50V25L36.5 0Z" fill="#fff" />
            <path d="M36.5 12L58 30V42L36.5 54L15 42V30L36.5 12Z" fill="var(--color-2)" />
            <rect x="30" y="40" width="13" height="16" rx="1" fill="#fff" />
          </svg>
          <div className="flex flex-col">
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 18, fontFamily: "'Muli', sans-serif", letterSpacing: 1 }}>Taylor Calacci</span>
            <span style={{ color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: 2 }}>Kale Realty</span>
          </div>
        </a>

        <nav className={`md:flex items-center gap-8 ${menuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-[#111] md:bg-transparent p-5 md:p-0' : 'hidden'}`}>
          <a href="#list-with-me" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">List With Me</a>
          <a href="#find-a-home" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">FIND A HOME</a>

          <div className="relative group">
            <a href="#about" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">About Us</a>
            <div className="hidden lg:group-hover:block absolute top-full left-0 bg-[#111] min-w-[200px] p-2.5 z-[100] rounded">
              <a href="#team" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="block py-2 px-3 text-[14px] hover:text-[var(--color-2)]">Team</a>
              <a href="#mission" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="block py-2 px-3 text-[14px] hover:text-[var(--color-2)]">Mission</a>
              <a href="#experience" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="block py-2 px-3 text-[14px] hover:text-[var(--color-2)]">Experience</a>
            </div>
          </div>

          <div className="relative group">
            <a href="#resources" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Resources</a>
            <div className="hidden lg:group-hover:block absolute top-full left-0 bg-[#111] min-w-[200px] p-2.5 z-[100] rounded">
              <a href="#market" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="block py-2 px-3 text-[14px] hover:text-[var(--color-2)]">Market Report</a>
              <a href="#guides" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="block py-2 px-3 text-[14px] hover:text-[var(--color-2)]">Guides</a>
              <a href="#faq" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="block py-2 px-3 text-[14px] hover:text-[var(--color-2)]">FAQ</a>
            </div>
          </div>

          <a href="#contact" style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }} className="relative pb-1 nav-link">Contact</a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#fff', fontSize: 24, cursor: 'pointer' }}
          className="md:hidden bg-transparent border-none"
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </div>
    </header>
  )
}