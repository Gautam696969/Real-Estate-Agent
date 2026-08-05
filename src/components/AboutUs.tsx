import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stats = [
  { value: '$250M+', label: 'Total Volume Closed' },
  { value: '12+ Yrs', label: 'Chicago Market Expertise' },
  { value: '500+', label: 'Families Served' },
  { value: '99%', label: 'Client Satisfaction Rate' },
]

const coreValues = [
  {
    icon: 'fas fa-[#e21b22] fa-[#e21b22] fa-gem',
    title: 'Unmatched Excellence',
    desc: 'We hold every transaction to the highest standard of quality, discretion, and market precision.',
  },
  {
    icon: 'fas fa-[#e21b22] fa-handshake',
    title: 'Client-First Integrity',
    desc: 'Your goals dictate our strategy. We advocate for your interests with honesty and total transparency.',
  },
  {
    icon: 'fas fa-[#e21b22] fa-chart-line',
    title: 'Data-Driven Insights',
    desc: 'Leveraging real-time Chicago sub-market metrics, pricing trends, and neighborhood analytics.',
  },
  {
    icon: 'fas fa-[#e21b22] fa-bullhorn',
    title: 'Innovative Marketing',
    desc: 'High-definition video tours, targeted digital campaigns, and exclusive off-market placement.',
  },
]

const teamMembers = [
  {
    name: 'Sourav Mukherjee',
    role: 'Principal Broker & Founder',
    image: 'https://ravmoyaanrealty.com/images/team/sir.png',
    bio: 'Over 12 years of leadership in Chicago luxury residential properties, investment portfolio strategy, and high-stakes negotiation.',
    email: 'sourav.mukherjee@ravmoyaanrealty.com',
    phone: '(224) 772-3760',
  },
  {
    name: 'Sophia Williams',
    role: 'Senior Luxury Agent',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    bio: 'Specializing in West Loop, River North, and Gold Coast penthouses with a dedicated focus on seamless client experiences.',
    email: 'athens@gmail.com',
    phone: '(224) 436-4201',
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Property Staging & Design',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
    bio: 'Architectural consultant transforming properties into buyer magnets with high-impact spatial design and luxury staging.',
    email: 'marcus@ravmoyaanrealty.com',
    phone: '(312) 555-0188',
  },
]

const achievements = [
  'Top 1% Producing Brokerage in Chicagoland',
  'Exclusive Access to Off-Market Luxury Estates',
  'Full-Service Staging, Photography & Video Production',
  'Tailored Buyer & Seller Representation Plans',
]

export default function AboutUs() {
  const eyebrowClass =
    'inline-flex items-center justify-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] uppercase'
  const btnPrimary =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] px-8 py-4 font-muli text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(226,27,34,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(226,27,34,0.45)] hover:brightness-110'

  return (
    <div className="bg-white min-h-screen">
      {/* ==================== HERO ==================== */}
      <section className="relative flex items-center min-h-[75vh] md:min-h-[85vh] overflow-hidden bg-[#0d0d0d] text-white pt-24 pb-16">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
          alt="Rav-Mo-Yaan Luxury Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[var(--color-2)] opacity-15 blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full container mx-auto px-5 text-center max-w-[1000px]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${eyebrowClass} text-[#ff8080] mb-4`}
          >
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[var(--color-2)]" />
            About Rav-Mo-Yaan Realty
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[var(--color-2)]" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] sm:text-[54px] md:text-[68px] font-cormorant font-bold leading-[1.08] text-balance"
          >
            Redefining Real Estate <span className="text-[#ff6666] italic">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-[660px] text-white/90 font-muli text-[16px] md:text-[18px] leading-relaxed"
          >
            We combine boutique personalized service with high-impact digital marketing, deep sub-market intelligence, and unwavering commitment to exceptional client outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[850px] mx-auto border-t border-white/10 pt-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="w-8 h-[2px] bg-[var(--color-2)] mb-3" />
                <div className="text-white font-cormorant text-[32px] sm:text-[40px] font-bold leading-none">{s.value}</div>
                <div className="text-white/60 font-muli text-[11px] sm:text-[12px] uppercase tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="py-16 md:py-24 container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
                alt="Rav-Mo-Yaan Realty Office & Team"
                className="w-full h-[450px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#111] to-[#222] text-white p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[240px] hidden sm:block">
              <div className="text-[var(--color-2)] font-cormorant text-[36px] font-bold leading-none">12+ Years</div>
              <div className="text-[12px] font-muli text-gray-300 mt-1 uppercase tracking-wider font-semibold">
                Serving Chicago's Finest Communities
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={`${eyebrowClass} text-[var(--color-2)]`}>
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
              Our Story
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[44px] font-cormorant font-bold text-gray-900 leading-tight">
              A Legacy Built On Trust, Innovation & Proven Results
            </h2>
            <p className="mt-5 text-[#555] font-muli text-[15px] md:text-[16px] leading-relaxed">
              Rav-Mo-Yaan Realty was founded with a singular purpose: to elevate the real estate experience for buyers and sellers across Chicago. Whether guiding a first-time homebuyer through closing or positioning a multi-million dollar estate for global reach, we approach every transaction with passion and meticulous care.
            </p>
            <p className="mt-4 text-[#555] font-muli text-[15px] md:text-[16px] leading-relaxed">
              Our team combines deep neighborhood roots in West Loop, River North, Gold Coast, and Lincoln Park with state-of-the-art digital tools to deliver seamless transactions from start to finish.
            </p>

            <div className="mt-8 space-y-3">
              {achievements.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[14px] font-muli font-semibold text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[var(--color-2)] flex items-center justify-center text-[11px] shrink-0">
                    <i className="fas fa-check" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/find-a-home" className={btnPrimary}>
                Explore Properties
              </Link>
              <Link
                to="/list-with-me"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-muli text-[13px] font-bold uppercase tracking-wider text-gray-800 transition-all hover:bg-gray-100"
              >
                List Your Property
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="bg-[#111] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-2)] opacity-10 blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-5 relative">
          <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
            <span className={`${eyebrowClass} text-[#ff8080]`}>
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
              What Guides Us
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[44px] font-cormorant font-bold text-white">
              Our Core Principles
            </h2>
            <p className="mt-3 text-[#aaa] font-muli text-[15px] leading-relaxed">
              Every decision we make is grounded in values designed to deliver maximum value and peace of mind to our clients.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((v) => (
              <motion.div
                key={v.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[var(--color-2)] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-2)] to-[#c0151b] text-white flex items-center justify-center text-[22px] shadow-[0_8px_20px_rgba(226,27,34,0.3)] mb-6">
                  <i className={v.icon} />
                </div>
                <h3 className="font-muli font-bold text-[18px] text-white">{v.title}</h3>
                <span className="block w-8 h-[2px] bg-[var(--color-2)] my-3" />
                <p className="font-muli text-[14px] text-[#aaa] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== TEAM MEMBERS ==================== */}
      <section className="py-16 md:py-24 container mx-auto px-5">
        <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
          <span className={`${eyebrowClass} text-[var(--color-2)]`}>
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            Our Experts
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-cormorant font-bold text-gray-900">
            Meet Our Leadership Team
          </h2>
          <p className="mt-3 text-[#666] font-muli text-[15px] leading-relaxed">
            Dedicated professionals bringing decades of real estate, design, and marketing excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(226,27,34,0.12)] hover:border-[var(--color-2)]/40 transition-all duration-300 flex flex-col"
            >
              <div className="h-[150px] sm:h-[400px] overflow-hidden relative bg-gray-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3.5 left-5 right-5 text-white">
                  <h3 className="font-cormorant text-[22px] sm:text-[24px] font-bold leading-tight">{member.name}</h3>
                  <p className="text-[11px] font-muli text-[#ff8080] uppercase font-bold tracking-wider">{member.role}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="font-muli text-[14px] text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="pt-4 border-t border-gray-100 space-y-2 text-[13px] font-muli">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-700 hover:text-[var(--color-2)] transition-colors">
                    <i className="fas fa-envelope text-[var(--color-2)] text-[12px]" /> {member.email}
                  </a>
                  <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-gray-700 hover:text-[var(--color-2)] transition-colors">
                    <i className="fas fa-phone text-[var(--color-2)] text-[12px]" /> {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-[#fafafa] py-16 md:py-20 border-t border-gray-200">
        <div className="container mx-auto px-5 text-center max-w-[760px]">
          <h2 className="font-cormorant text-[34px] sm:text-[48px] font-bold text-gray-900 leading-tight">
            Ready to Begin Your Real Estate Journey?
          </h2>
          <p className="mt-4 font-muli text-[16px] text-gray-600 leading-relaxed">
            Whether you are buying your dream home or listing your property for maximum return, our team is ready to deliver exceptional results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/find-a-home" className={btnPrimary}>
              Find A Home
            </Link>
            <Link
              to="/list-with-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-4 font-muli text-[13px] font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
            >
              List With Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
