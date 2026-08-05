import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function ProvenResults() {
  const items = [
    {
      title: 'DATA DRIVEN',
      description: 'Market knowledge goes beyond simply neighborhoods.',
      icon: (
        <svg width="120" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="45" width="10" height="10" rx="1" fill="#fff" />
          <rect x="20" y="35" width="10" height="20" rx="1" fill="#fff" />
          <rect x="35" y="25" width="10" height="30" rx="1" fill="#fff" />
          <rect x="50" y="15" width="10" height="40" rx="1" fill="#fff" />
          <line x1="2" y1="55" x2="58" y2="55" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'CLIENT-FOCUSED',
      description: 'Your time is valuable. That\'s why take the time upfront.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C15 22.268 21.268 16 29 16C36.732 16 43 22.268 43 30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 36L22 48" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M29 36L36 48" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="29" cy="16" r="5" stroke="#fff" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: 'MARKET EXPERTISE',
      description: 'You have questions and I have answers.',
      icon: (
        <svg width="60" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L50 30H10L30 5Z" fill="#fff" />
          <rect x="15" y="30" width="30" height="25" rx="1" fill="#fff" />
          <rect x="20" y="35" width="20" height="15" rx="1" fill="#111" />
          <path d="M25 50H35" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'REFERRAL NETWORK',
      description: 'This industry is all about who you know. I can connect you',
      icon: (
        <svg width="60" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="5" stroke="#fff" strokeWidth="3" />
          <circle cx="45" cy="15" r="5" stroke="#fff" strokeWidth="3" />
          <circle cx="30" cy="35" r="5" stroke="#fff" strokeWidth="3" />
          <line x1="19" y1="18" x2="41" y2="18" stroke="#fff" strokeWidth="2" />
          <line x1="17" y1="19" x2="28" y2="32" stroke="#fff" strokeWidth="2" />
          <line x1="43" y1="19" x2="32" y2="32" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  }

  return (
    <AnimatedSection className="bg-[#111] min-h-[800px] flex items-center py-[50px]" direction="none">
      <div className="container mx-auto px-5">
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white text-center text-[24px] sm:text-[36px] font-cormorant"
            style={{ color: '#fff', marginBottom: '60px' }}
          >
            Proven Results That Speak for Themselves<br />
            <span className="text-[#d6d6d6] font-muli text-[16px] sm:text-[18px]">Where proven results meet your real estate goals . Your success is our best testimonial.</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="text-center p-6 md:p-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center min-h-[200px] md:min-h-[240px]"
            >
              <motion.div
                className="mb-6 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="scale-125">{item.icon}</div>
              </motion.div>
              <h3 className="text-white mb-4 font-cormorant font-bold text-[28px] md:text-[30px]" style={{ color: '#fff' }}>
                {item.title}
              </h3>
              <p className="text-white text-[17px] md:text-[18px] leading-[1.9] mt-auto" style={{ color: '#fff' }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
