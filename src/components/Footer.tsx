import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
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

  return (
    <AnimatedSection as="footer" className="bg-[#111] pt-[60px]" style={{ color: '#fff' }} direction="none">
      <motion.div
        className="container mx-auto px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="flex flex-wrap gap-10 mb-10">
          <motion.div variants={itemVariants} className="flex-1 min-w-[240px]">
            <motion.h3
              whileHover={{ x: 5, color: '#ff6666' }}
              style={{ color: 'var(--color-2)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 25, marginBottom: 12 }}
            >
              Contact Details
            </motion.h3>
            <p style={{ color: '#fff', fontWeight: 700, fontFamily: "'Muli', sans-serif" }}>taylorcalacci@gmail.com</p>
            <p style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}>(224) 436-4201</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1 min-w-[240px] flex items-center justify-center">
            <motion.img
              src="https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/Untitled+design+%2810%29+%281%29-270w.png"
              alt="Taylor Calacci Logo"
              style={{ height: 80, width: 'auto' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1 min-w-[240px] flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.08, filter: 'brightness(1.2)' }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/equal-housing-opportunity-white-1920w-79h.webp"
              alt="Equal Housing Opportunity"
              className="h-10 w-auto"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1 min-w-[240px] flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.08 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/DotRealEstate-URL-White-No+cursor+%281%29-158w.png"
              alt="Dot Real Estate"
              className="h-10 w-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="border-t border-[#333] pt-6 mb-6">
          <motion.h3
            whileHover={{ x: 5, color: '#ff6666' }}
            style={{ color: 'var(--color-2)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 25, marginBottom: 12 }}
          >
            Address
          </motion.h3>
          <p style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}>3323 W. Diversey Ave.</p>
          <p style={{ color: '#fff', fontFamily: "'Muli', sans-serif" }}>Chicago, IL 60647</p>
        </motion.div>

        <motion.div variants={itemVariants} className="border-t border-[#333] py-6 flex flex-wrap justify-between items-center gap-5">
          <nav className="flex flex-wrap gap-6">
            {['List With Me', 'FIND A HOME', 'Services', 'About', 'Testimonials', 'Blog', 'Videos', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ color: '#fff', textTransform: 'uppercase', fontSize: 14, fontFamily: "'Muli', sans-serif", textDecoration: 'none' }}
                className="relative pb-1 nav-link"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div className="flex gap-4" variants={itemVariants}>
            {['facebook-f', 'twitter', 'instagram', 'youtube'].map((icon) => (
              <motion.a
                key={icon}
                href={`#${icon}`}
                style={{ color: '#fff', fontSize: 20 }}
                whileHover={{ y: -4, color: 'var(--color-2)', scale: 1.2 }}
                transition={{ duration: 0.2 }}
                aria-label={icon.charAt(0).toUpperCase() + icon.slice(1).replace('-f', '')}
              >
                <i className={`fab fa-${icon}`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
