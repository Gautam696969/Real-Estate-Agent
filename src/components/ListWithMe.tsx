import { useState } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stats = [
  { value: '12 Days', label: 'Avg. Days on Market' },
  { value: '98%', label: 'Avg. Sale-to-List Ratio' },
  { value: '250+', label: 'Homes Sold & Closed' },
  { value: '5.0', label: 'Client Rating' },
]

const benefits = [
  { icon: 'fas fa-bullhorn', title: 'Maximum Exposure', desc: 'Multi-channel marketing across portals, social media, and our exclusive network.' },
  { icon: 'fas fa-chart-line', title: 'Data-Driven Pricing', desc: 'Pricing powered by real market data, not guesswork, to sell fast and high.' },
  { icon: 'fas fa-handshake', title: 'Skilled Negotiation', desc: 'A proven negotiator who protects your interests from first offer to final close.' },
  { icon: 'fas fa-clipboard-check', title: 'Hassle-Free Process', desc: 'Staging, photography, paperwork, and closing — all handled for you.' },
]

const steps = [
  { icon: 'fas fa-comments', title: 'Free Consultation', desc: 'We sit down, value your home, and build a custom selling plan together.' },
  { icon: 'fas fa-tag', title: 'Pricing & Prep', desc: 'Strategic pricing, professional staging, and photography that wows buyers.' },
  { icon: 'fas fa-bullhorn', title: 'Marketing & Showings', desc: 'Your home gets maximum exposure with targeted ads and curated showings.' },
  { icon: 'fas fa-file-signature', title: 'Offer to Closing', desc: 'Sharp negotiation and smooth paperwork until the keys are in new hands.' },
]

const contacts = [
  { icon: 'fas fa-phone', label: 'Call or Text', value: '(224) 436-4201', href: 'tel:+12244364201' },
  { icon: 'fas fa-envelope', label: 'Email', value: 'taylorcalacci@gmail.com', href: 'mailto:taylorcalacci@gmail.com' },
  { icon: 'fas fa-map-marker-alt', label: 'Office', value: '3323 W. Diversey Ave., Chicago, IL 60647', href: null },
]

export default function ListWithMe() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', price: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name.trim() && form.email.trim()) {
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', address: '', price: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }
  }

  const eyebrowClass =
    'inline-flex items-center justify-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] uppercase'
  const btnPrimary =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] px-8 py-4 font-muli text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(226,27,34,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(226,27,34,0.45)] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-2)]'
  const btnGhost =
    'inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-8 py-4 font-muli text-[13px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
  const inputClass =
    'w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3.5 text-[14px] font-muli text-[#111] placeholder:text-[#9ca3af] outline-none transition-all duration-200 focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15'
  const labelClass = 'block text-[13px] font-muli font-semibold text-[#555] mb-2'

  return (
    <section id="list-with-me" className="bg-white">
      {/* ==================== Hero ==================== */}
      <div className="relative flex items-center min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-[#111]">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8fDA%3D"
          alt="Beautiful home ready to list"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[var(--color-2)] opacity-15 blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full container mx-auto px-5 py-24 md:py-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${eyebrowClass} text-[#ff8080]`}
          >
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[var(--color-2)]" />
            Sell Your Home
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[var(--color-2)]" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 mx-auto max-w-[720px] text-white text-[34px] sm:text-[46px] md:text-[60px] font-cormorant font-semibold leading-[1.08] text-balance"
          >
            List Your Home With <span className="text-[#ff6666] italic">Confidence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-[560px] text-white/90 font-muli text-[16px] md:text-[17px] leading-relaxed"
          >
            I'll position your property to attract the right buyers, sell for the highest price,
            and close on your timeline — with a seamless, stress-free process from start to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="#valuation" className={`${btnPrimary} w-full sm:w-auto`}>
              Get Free Valuation
            </a>
            <a href="#how-it-works" className={`${btnGhost} w-full sm:w-auto`}>
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 max-w-[780px] mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="w-10 h-[2px] bg-[var(--color-2)] mb-4" />
                <div className="text-white font-cormorant text-[30px] sm:text-[34px] md:text-[38px] font-bold leading-none">{s.value}</div>
                <div className="text-white/60 font-muli text-[11px] sm:text-[12px] uppercase tracking-wider mt-2 max-w-[140px]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ==================== Benefits ==================== */}
      <div className="container mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${eyebrowClass} text-[var(--color-2)]`}
          >
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            The Advantage
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[28px] sm:text-[38px] font-cormorant font-semibold text-gray-900 text-balance"
          >
            Why List With Me
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-[600px] mx-auto text-[15px] text-[#666] font-muli leading-relaxed"
          >
            Selling is more than putting up a sign. It's a strategic process — and I've perfected it.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-[0_4px_20px_rgba(17,17,17,0.05)] hover:shadow-[0_20px_45px_rgba(226,27,34,0.14)] hover:border-[var(--color-2)] transition-all duration-300 p-6 md:p-8 flex flex-col"
            >
              <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-2)] via-[#ff5a5f] to-[var(--color-2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-2)] to-[#c0151b] text-white flex items-center justify-center text-[20px] shadow-[0_10px_22px_rgba(226,27,34,0.3)] group-hover:scale-105 transition-transform duration-300">
                <i className={b.icon} />
              </div>
              <h4 className="mt-6 text-[18px] font-muli font-bold text-gray-900">{b.title}</h4>
              <span className="w-9 h-[2px] bg-[var(--color-2)] mt-3 transition-all duration-300 group-hover:w-14" />
              <p className="mt-3 text-[14px] text-[#666] font-muli leading-relaxed flex-1">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ==================== How It Works ==================== */}
      <div id="how-it-works" className="bg-[#111] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[var(--color-2)] opacity-10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#ffd6d6] opacity-5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-5 relative">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${eyebrowClass} text-[#ff8080]`}
            >
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
              The Process
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[28px] sm:text-[38px] font-cormorant font-semibold text-white text-balance"
            >
              How It Works
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-[600px] mx-auto text-[15px] text-[#aaa] font-muli leading-relaxed"
            >
              A clear, proven path from first conversation to closing day.
            </motion.p>
          </div>

          <motion.div
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-white/10 via-[var(--color-2)]/40 to-white/10 pointer-events-none" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className="group relative rounded-2xl bg-white/[0.05] border border-white/10 p-6 sm:p-8 text-center backdrop-blur-sm hover:border-[var(--color-2)] transition-colors duration-300"
              >
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-2)] to-[#c0151b] text-white flex items-center justify-center text-[22px] shadow-[0_10px_25px_rgba(226,27,34,0.35)] group-hover:scale-110 transition-transform duration-300">
                  <i className={step.icon} />
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-white text-[var(--color-2)] text-[13px] font-muli font-bold flex items-center justify-center shadow-md border border-gray-100">
                    {i + 1}
                  </span>
                </div>
                <h4 className="mt-6 text-[17px] font-muli font-bold text-white">{step.title}</h4>
                <p className="mt-2.5 text-[14px] text-[#bbb] font-muli leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ==================== Valuation Form ==================== */}
      <div id="valuation" className="bg-[#fafafa] py-16 md:py-24 border-t border-gray-200/70 relative overflow-hidden">
        <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-[var(--color-2)] opacity-[0.06] blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-5 relative">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${eyebrowClass} text-[var(--color-2)]`}
            >
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
              Free Home Valuation
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[28px] sm:text-[38px] font-cormorant font-semibold text-gray-900 text-balance"
            >
              Find out what your home is worth
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-[620px] mx-auto text-[15px] text-[#666] font-muli leading-relaxed"
            >
              Share a few details and I'll get back to you within 24 hours with a complimentary,
              no-obligation market analysis of your property.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-[1040px] mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              {contacts.map((c) => {
                const inner = (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-2)]/10 text-[var(--color-2)] flex items-center justify-center text-[16px] shrink-0">
                      <i className={c.icon} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-muli uppercase tracking-[0.15em] text-[#888]">{c.label}</div>
                      <div className="mt-0.5 text-[16px] font-muli font-bold text-gray-900 [overflow-wrap:anywhere]">{c.value}</div>
                    </div>
                  </>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl bg-white border border-gray-200/80 p-5 shadow-sm hover:border-[var(--color-2)] hover:shadow-[0_12px_30px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl bg-white border border-gray-200/80 p-5 shadow-sm"
                  >
                    {inner}
                  </div>
                )
              })}

              <div className="relative rounded-2xl bg-[#111] p-6 sm:p-8 text-center overflow-hidden">
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[var(--color-2)] opacity-20 blur-[80px] pointer-events-none" />
                <h4 className="relative font-cormorant text-[22px] font-semibold text-white">Prefer instant answers?</h4>
                <p className="relative mt-2 text-[14px] text-[#bbb] font-muli leading-relaxed">
                  Skip the wait — get a ballpark figure and your selling plan in one conversation.
                </p>
                <a href="tel:+12244364201" className={`${btnPrimary} relative mt-5 w-full sm:w-auto`}>
                  Call (224) 436-4201
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl bg-white border border-gray-200/80 shadow-[0_20px_60px_rgba(17,17,17,0.08)] p-6 sm:p-8 md:p-10 overflow-hidden"
            >
              <span className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-2)] via-[#ff5a5f] to-[var(--color-2)]" />
              <h4 className="text-center font-cormorant text-[26px] font-semibold text-gray-900">
                Request a Valuation
              </h4>
              <p className="text-center mt-1 text-[13px] font-muli text-[#888]">
                No obligation. Response within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="lwm-name">Full Name *</label>
                    <input id="lwm-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lwm-email">Email Address *</label>
                    <input id="lwm-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="lwm-phone">Phone</label>
                    <input id="lwm-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(312) 555-0123" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="lwm-price">Asking Price</label>
                    <input id="lwm-price" name="price" type="text" value={form.price} onChange={handleChange} placeholder="$750,000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="lwm-address">Property Address</label>
                  <input id="lwm-address" name="address" type="text" value={form.address} onChange={handleChange} placeholder="1234 W. Elm St, Chicago, IL" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="lwm-message">Tell me about your home</label>
                  <textarea id="lwm-message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Bedrooms, condition, timeline to sell, etc." className={inputClass} />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${btnPrimary} w-full`}
                >
                  Get My Free Valuation
                  <i className="fas fa-paper-plane text-[12px]" />
                </motion.button>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[14px] font-muli text-[#2e7d32] flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-check-circle" />
                    Thank you! Your request has been received. I'll be in touch within 24 hours.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
