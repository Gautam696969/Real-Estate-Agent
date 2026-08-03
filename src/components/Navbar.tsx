import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sectionLinks = ['FIND A HOME', 'About Us', 'Resources', 'Contact']

  const linkStyle = {
    color: '#fff',
    textTransform: 'uppercase' as const,
    fontFamily: "'Muli', sans-serif",
    textDecoration: 'none',
  }

  const goToSection = (e: React.MouseEvent, label: string) => {
    e.preventDefault()
    const id = label.toLowerCase().replace(/\s+/g, '-')
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full z-[1000] top-0 transition-all duration-300 ease-in-out ${
        scrolled ? 'fixed bg-[#111111f2] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md' : 'absolute bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-5 h-[70px] md:h-[100px]">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <img
            src="/Rav -Mo-Yaan.svg"
            alt="Taylor Calacci Logo"
            style={{ height: 40, width: 'auto' }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/list-with-me"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className="relative pb-1 nav-link hover:scale-105 transition-transform"
          >
            List With Me
          </Link>
          {sectionLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => goToSection(e, item)}
              style={linkStyle}
              className="relative pb-1 nav-link hover:scale-105 transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#fff', fontSize: 24, cursor: 'pointer' }}
          className="md:hidden bg-transparent border-none"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-[#111] overflow-hidden border-t border-white/10"
          >
            <div className="px-5 pb-6 flex flex-col gap-5">
              <Link
                to="/list-with-me"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] py-1 border-b border-white/10 nav-link"
                style={linkStyle}
              >
                List With Me
              </Link>
              {sectionLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => goToSection(e, item)}
                  className="text-[15px] py-1 border-b border-white/10 nav-link"
                  style={linkStyle}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
