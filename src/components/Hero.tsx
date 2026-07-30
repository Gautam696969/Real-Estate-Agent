import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.3])
  const videoOpacity = useTransform(scrollY, [0, 400], [1, 0.6])
  const textY = useTransform(scrollY, [0, 500], [0, 200])
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#111',
      }}
    >
      <motion.div
        style={{ position: 'absolute', inset: 0, scale: videoScale, opacity: videoOpacity }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/3qnMI7RQW4DLRjW6uAAC_Untitled-1.v2.0000000-1920w.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://cdn.pixabay.com/video/2024/02/02/198888-909564511_large.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
      </motion.div>

      <motion.div
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px', y: textY, opacity: textOpacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 40 }}
        >
        Exclusive real estate By,
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: '#fff', textTransform: 'uppercase', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 40, marginTop: 8 }}
        >
          Sourav Mukherjee
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: '#fff', fontFamily: "'Muli', sans-serif", fontSize: 24, fontWeight: 300, marginTop: 24 }}
        >
          Find More then just a home, find a lifestyle...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ width: 80, height: 2, backgroundColor: 'var(--color-2)', margin: '30px auto 0', transformOrigin: 'center' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          style={{ marginTop: 40 }}
        >
          <a
            href="#featured"
            className="btn"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            Explore Listings
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ position: 'absolute', right: 40, bottom: 80, zIndex: 2, display: 'none' }}
        className="hero-window"
      >
        <img
          src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/window-67w.png"
          alt="window decoration"
          style={{ width: 80, height: 'auto' }}
        />
      </motion.div>

      <style>{`
        @media (min-width: 1025px) {
          .hero-window { display: block !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          h1 { font-size: 56px !important; }
        }
        @media (min-width: 1025px) {
          h1 { font-size: 72px !important; }
        }
      `}</style>
    </section>
  )
}
