import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  }

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'List With Me', href: '/list-with-me' },
    { label: 'Find a Home', href: '#find-a-home' },
    { label: 'Featured Listings', href: '#featured' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    { label: 'Buyers Representation', href: '#buyers' },
    { label: 'Sellers Representation', href: '#sellers' },
    { label: 'Market Reports', href: '#market' },
    { label: 'Home Valuation', href: '#valuation' },
    { label: 'Relocation Services', href: '#relocation' },
  ]

  const socialLinks = [
    { label: 'Facebook', icon: 'fab fa-facebook-f' },
    { label: 'Twitter', icon: 'fab fa-twitter' },
    { label: 'Instagram', icon: 'fab fa-instagram' },
    { label: 'YouTube', icon: 'fab fa-youtube' },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <AnimatedSection as="footer" className="bg-[#111] relative overflow-hidden" style={{ color: '#fff' }} direction="none">
      {/* Decorative gradient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-2)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="container mx-auto px-5 pt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Branding badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-8 mb-12">
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/Rav -Mo-Yaan.svg"
              alt="Rav-Mo-Yaan Logo"
              style={{ height: 36, width: 'auto', marginTop:'20px' }}
            />
          </motion.a>
           
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 22}}>
              About the Broker
            </h3>
            <p style={{ color: '#aaa', fontFamily: "'Muli', sans-serif", fontSize: 14, lineHeight: 1.9 }}>
              Chicago luxury real estate expert dedicated to helping you buy, sell, and invest with confidence. Where proven results meet your real estate goals.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 22, marginLeft:-38}}>
              Quick <span style={{ color: 'var(--color-2)' }}>Links</span>
            </h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="nav-link"
                    style={{ color: '#ccc', fontFamily: "'Muli', sans-serif", fontSize: 14, textDecoration: 'none' }}
                  >
                    <span className="text-[var(--color-2)]" style={{ marginRight: '12px' }}>●</span>{link.label}
                  </Link>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="nav-link"
                    style={{ color: '#ccc', fontFamily: "'Muli', sans-serif", fontSize: 14, textDecoration: 'none' }}
                    whileHover={{ x: 5, color: '#fff' }}
                  >
                    <span className="text-[var(--color-2)]" style={{ marginRight: '12px' }}>●</span>{link.label}
                  </motion.a>
                ),
              )}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 22 }}>
              Our <span style={{ color: 'var(--color-2)' }}>Services</span>
            </h3>
            <nav className="flex flex-col gap-2.5">
              {services.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  style={{ color: '#ccc', fontFamily: "'Muli', sans-serif", fontSize: 14, textDecoration: 'none' }}
                  whileHover={{ x: 5, color: '#fff' }}
                >
                  <span className="text-[var(--color-2)]" style={{marginRight:'12px'}}>●</span>{link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>


          {/* Contact + Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 22 }}>
              Get in <span style={{ color: 'var(--color-2)' }}>Touch</span>
            </h3>
            <div className="flex flex-col gap-2.5 mb-6" style={{ color: '#ccc', fontFamily: "'Muli', sans-serif", fontSize: 14 }}>
              <p className="flex items-center gap-2"style={{color:"#ff6666"}}>
                <i className="fas fa-envelope text-[var(--color-2)]" /> sourav.mukherjee@ravmoyaanrealty.com

              </p>
              <p className="flex items-center gap-2" style={{color:"#ff6666"}}>
                <i className="fas fa-phone text-[var(--color-2)]" /> (224) 772 3760
              </p>
              <p className="flex items-start gap-2"style={{color:"#ff6666"}}>
                <i className="fas fa-map-marker-alt text-[var(--color-2)]" style={{paddingTop:'8px'}} />
                <span>3323 W. Diversey Ave.<br />Chicago, IL 60647</span>
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white/5 border rounded-md border-white/15 px-4 py-2.5 text-[13px] outline-none focus:border-[var(--color-2)] transition-colors"
                style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-2)] text-white rounded-md px-4 py-2.5 border-none cursor-pointer flex items-center justify-center"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane" />
              </motion.button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-[13px]"
                style={{ color: '#ff6666', fontFamily: "'Muli', sans-serif" }}
              >
                ✓ Thanks for subscribing!
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Social bar */}
        <motion.div variants={itemVariants} className="border-t border-[#2a2a2a] py-6 flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              aria-label={link.label}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center"
              style={{ color: '#fff', fontSize: 16 }}
              whileHover={{ y: -4, scale: 1.1, borderColor: 'var(--color-2)', backgroundColor: 'rgba(255,49,49,0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <i className={link.icon} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div variants={itemVariants} className="border-t border-[#2a2a2a] py-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-[13px]" style={{ color: '#888', fontFamily: "'Muli', sans-serif" }}>
            &copy; {new Date().getFullYear()} Rav-Mo-Yaan Realty. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link"
                style={{ color: '#888', fontSize: 13, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }}
                whileHover={{ color: '#fff' }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
