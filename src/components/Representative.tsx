import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Representative() {
  return (
    <AnimatedSection className="py-16 md:py-[50px] min-h-[90vh] flex flex-col justify-center" direction="none" style={{paddingBottom:70}}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className=" font-cormorant font-bold text-gray-900" style={{padding: '40px 0 20px 0', fontSize:'clamp(30px, 6vw, 52px)'}}>
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

        <div style={{ display: 'flex', gap: 40, alignItems: 'center', marginBottom: 60, flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: '1 1 300px', minWidth: 0 }}
          >
            <motion.img
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_portrait-of-happy-mature-couple-standing-in-front-of-their_23307566+%281%29-808h.jpg"
              alt="Buyers Representative"
              className="glass-shadow"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: '1 1 300px', minWidth: 0, padding: '40px 0 0' }}
          
          >
            <h2 style={{fontSize: 30}}>BUYERS REPRESENTATIVE</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 20, marginTop: 12, transformOrigin: 'left' }}
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

        <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: '1 1 300px', minWidth: 0 }}
          >
            <h2 style={{fontSize: 30}}>SELLERS REPRESENTATIVE</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ width: 60, height: 2, backgroundColor: 'var(--color_2)', marginBottom: 20, marginTop: 12, transformOrigin: 'left' }}
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
            style={{ flex: '1 1 300px', minWidth: 0 }}
          >
            <motion.img
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
              src="https://irp.cdn-website.com/b3b084dd/dms3rep/multi/opt/vecteezy_real-estate-agent-holding-house-key-to-his-client-after_8572449+%281%29-808h.jpg"
              alt="Sellers Representative"
              className="glass-shadow"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
