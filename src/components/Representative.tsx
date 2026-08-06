import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Representative() {
  return (
    <AnimatedSection className="py-16 md:py-[50px] min-h-[90vh] flex flex-col justify-center" direction="none" style={{paddingBottom:70}}>
      <div className="container mx-auto px-5 md:px-0">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mt-5 text-[28px] sm:text-[38px] md:text-[46px] font-cormorant font-semibold text-gray-900" style={{ fontSize:'clamp(30px, 6vw, 52px)' }}>
            Expert <span style={{ color: 'var(--color-2)' }}>Real Estate Solutions</span>
          </h2>
          <p
            className="font-muli"
            style={{ maxWidth: 720, margin: '0 auto', fontSize: 17, lineHeight: 1.8, color: '#555' }}
          > 
            From your first home to your final sale, I provide dedicated, full-service representation
            at every step — combining market insight, strategic marketing, and skilled negotiation so
            you get the results you deserve.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full md:w-1/2"
          >
            <motion.img
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_portrait-of-happy-mature-couple-standing-in-front-of-their_23307566+%281%29-808h.jpg"
              alt="Buyers Representative"
              className="glass-shadow w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: 420 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 style={{ fontSize: 'clamp(22px, 4.5vw, 30px)' }}>BUYERS REPRESENTATIVE</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 20, marginTop: 12, transformOrigin: 'left' }}
              className="mx-auto md:mx-0"
            />
            <p style={{ marginBottom: 24 }}>
              Navigating the home buying process can be overwhelming, but with the right representation, it becomes a seamless experience. As your buyers representative, I will guide you through every step from property search to closing, ensuring you find the perfect home that meets your needs and budget.
            </p>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,49,49,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
          >
            <h2 style={{ fontSize: 'clamp(22px, 4.5vw, 30px)' }}>SELLERS REPRESENTATIVE</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 20, marginTop: 12, transformOrigin: 'left' }}
              className="mx-auto md:mx-0"
            />
            <p style={{ marginBottom: 24 }}>
              Selling a home requires strategic marketing and expert negotiation. I will work tirelessly to position your property in the best light, attract qualified buyers, and secure the highest possible price in the shortest time frame.
            </p>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,49,49,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <motion.img
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_real-estate-agent-holding-house-key-to-his-client-after_8572449+%281%29-808h.jpg"
              alt="Sellers Representative"
              className="glass-shadow w-full h-auto rounded-lg object-cover"
              style={{ maxHeight: 420 }}
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
