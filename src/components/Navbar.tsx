import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkStyle = {
    fontFamily: "'Muli', sans-serif",
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
  }

  const navLinkClass =
    'group relative inline-block text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#ffb0b3] after:absolute after:inset-x-0 after:-bottom-[3px] after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[#e21b22] after:to-[#ff5a5f] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full max-w-full inset-x-0 top-0 z-[1000] transition-all duration-300 ease-in-out ${
        scrolled ? 'fixed bg-[#111111f2] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md' : 'absolute bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[70px] w-full max-w-[1200px] items-center justify-between px-5 py-3 md:h-[100px]">
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="flex shrink-0 items-center gap-3"
          aria-label="Home"
        >
          <img
            src="/RMY Icon.svg"
            alt="RMY Logo"
            style={{ height: 50, width: 'auto', maxWidth: '40vw' }}
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className={navLinkClass}
          >
            Home
          </Link>
          <Link
            to="/list-with-me"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className={navLinkClass}
          >
            List With Me
          </Link>
          <Link
            to="/find-a-home"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className={navLinkClass}
          >
            Find A Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className={navLinkClass}
          >
            About Us
          </Link>
          <Link
            to="/resources"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className={navLinkClass}
          >
            Resources
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={linkStyle}
            className={navLinkClass}
          >
            Contact
          </Link>
        </nav>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#fff', fontSize: 24, cursor: 'pointer' }}
          className="lg:hidden shrink-0 bg-transparent border-none"
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
            className="lg:hidden bg-[#111] overflow-hidden border-t border-white/10"
          >
            <div className="px-5 pb-6 flex flex-col gap-5">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                style={linkStyle}
                className="text-[15px] py-1 pt-5 border-b border-white/10 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffb0b3]"
              >
                Home
              </Link>
              <Link
                to="/list-with-me"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] py-1 border-b border-white/10 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffb0b3]"
                style={linkStyle}
              >
                List With Me
              </Link>
              <Link
                to="/find-a-home"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] py-1 border-b border-white/10 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffb0b3]"
                style={linkStyle}
              >
                Find A Home
              </Link>
              <Link
                to="/about-us"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] py-1 border-b border-white/10 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffb0b3]"
                style={linkStyle}
              >
                About Us
              </Link>
              <Link
                to="/resources"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] py-1 border-b border-white/10 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffb0b3]"
                style={linkStyle}
              >
                Resources
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-[15px] py-1 border-b border-white/10 text-white transition-all duration-300 hover:translate-x-1 hover:text-[#ffb0b3]"
                style={linkStyle}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
