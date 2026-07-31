import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full z-[1000] top-0 transition-all duration-300 ease-in-out ${
        scrolled ? 'fixed bg-[#111111f2] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md' : 'absolute bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-5" style={{height:"100px"}}>
        <motion.a
          href="/"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/Rav -Mo-Yaan.svg"
            alt="Taylor Calacci Logo"
            style={{ height: 40, width: 'auto' }}
          />
        </motion.a>

        <nav className={`md:flex items-center gap-8 ${menuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-[#111] md:bg-transparent p-5 md:p-0' : 'hidden'}`}>
          {['List With Me', 'FIND A HOME', 'About Us', 'Resources', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }}
              className="relative pb-1 nav-link"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
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
            className="md:hidden bg-[#111] overflow-hidden"
          >
            <div className="px-5 pb-5 flex flex-col gap-4">
              {['List With Me', 'FIND A HOME', 'About Us', 'Resources', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Muli', sans-serif", textDecoration: 'none' }}
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
