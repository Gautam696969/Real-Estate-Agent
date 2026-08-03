import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ListWithMe() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', price: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const inputClass =
    'w-full bg-white border border-[#ddd] rounded-md px-4 py-3 text-[14px] font-muli outline-none focus:border-[var(--color-2)] transition-colors text-[#111] placeholder:text-[#999]'
  const labelClass = 'block text-[13px] font-muli font-semibold text-[#555] mb-1.5'

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  }

  return (
    <section id="list-with-me" className="bg-white">
      {/* ===== Hero ===== */}
      <div className="relative flex items-center min-h-[70vh] overflow-hidden bg-[#111]">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8fDA%3D"
          alt="Beautiful home ready to list"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-5 py-20 md:py-28">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] text-[#ff8080] uppercase"
          >
            <span className="w-8 h-[2px] bg-[var(--color-2)]" />
            Sell Your Home
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-white text-[34px] sm:text-[46px] md:text-[58px] font-cormorant font-semibold max-w-[640px]"
          >
            List Your Home With <span className="text-[#ff6666] italic">Confidence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/90 font-muli text-[16px] md:text-[17px] leading-relaxed max-w-[560px]"
          >
            I'll position your property to attract the right buyers, sell for the highest price,
            and close on your timeline — with a seamless, stress-free process from start to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#valuation" className="btn text-center">
              Get Free Valuation
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-md border border-white/30 text-white font-muli uppercase text-[13px] font-semibold text-center hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[720px]"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[var(--color-2)] pl-4">
                <div className="text-white font-cormorant text-[30px] md:text-[36px] font-bold">{s.value}</div>
                <div className="text-white/60 font-muli text-[12px] uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== Benefits ===== */}
      <div className="container mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] text-[var(--color-2)] uppercase"
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
            className="mt-4 text-[28px] sm:text-[38px] font-cormorant font-semibold text-gray-900"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
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
              className="group rounded-xl bg-[#fafafa] border border-[#eee] hover:border-[var(--color-2)] p-7 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-2)]/10 text-[var(--color-2)] flex items-center justify-center text-[18px] group-hover:bg-[var(--color-2)] group-hover:text-white transition-colors">
                <i className={b.icon} />
              </div>
              <h4 className="mt-5 text-[18px] font-muli font-bold text-gray-900">{b.title}</h4>
              <p className="mt-2 text-[14px] text-[#666] font-muli leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== How It Works ===== */}
      <div id="how-it-works" className="bg-[#111] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[var(--color-2)] opacity-10 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-5 relative">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] text-[#ff8080] uppercase"
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
              className="mt-4 text-[28px] sm:text-[38px] font-cormorant font-semibold text-white"
            >
              How It Works
            </motion.h3>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div key={step.title} variants={cardVariants} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto lg:mx-0 w-16 h-16 rounded-full border-2 border-[var(--color-2)] bg-[#111] text-white flex items-center justify-center text-[20px]">
                  <i className={step.icon} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-2)] text-white text-[12px] font-muli font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 -z-0" />
                )}
                <h4 className="mt-5 text-[17px] font-muli font-bold text-white">{step.title}</h4>
                <p className="mt-2 text-[14px] text-[#bbb] font-muli leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== Valuation Form ===== */}
      <div id="valuation" className="container mx-auto px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] text-[var(--color-2)] uppercase"
            >
              <span className="w-8 h-[2px] bg-[var(--color-2)]" />
              Free Home Valuation
            </motion.span>
            <h3 className="mt-4 text-[28px] sm:text-[36px] font-cormorant font-semibold text-gray-900">
              Find out what your home is worth
            </h3>
            <p className="mt-4 text-[15px] text-[#666] font-muli leading-relaxed">
              Share a few details and I'll get back to you within 24 hours with a complimentary,
              no-obligation market analysis of your property.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-2)]/10 text-[var(--color-2)] flex items-center justify-center text-[15px] shrink-0">
                  <i className="fas fa-phone" />
                </div>
                <div>
                  <div className="text-[12px] font-muli uppercase tracking-wider text-[#888]">Call or Text</div>
                  <a href="tel:+12244364201" className="text-[16px] font-muli font-semibold text-gray-900 hover:text-[var(--color-2)]">(224) 436-4201</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-2)]/10 text-[var(--color-2)] flex items-center justify-center text-[15px] shrink-0">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <div className="text-[12px] font-muli uppercase tracking-wider text-[#888]">Email</div>
                  <a href="mailto:taylorcalacci@gmail.com" className="text-[16px] font-muli font-semibold text-gray-900 hover:text-[var(--color-2)]">taylorcalacci@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[var(--color-2)]/10 text-[var(--color-2)] flex items-center justify-center text-[15px] shrink-0">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <div className="text-[12px] font-muli uppercase tracking-wider text-[#888]">Office</div>
                  <div className="text-[16px] font-muli font-semibold text-gray-900">3323 W. Diversey Ave., Chicago, IL 60647</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#fafafa] border border-[#eee] rounded-2xl p-6 md:p-10"
          >
            <h4 className="text-[22px] font-cormorant font-semibold text-gray-900 mb-6">
              Request a Valuation
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="lwm-name">Full Name *</label>
                  <input id="lwm-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="lwm-email">Email Address *</label>
                  <input id="lwm-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" required className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                whileTap={{ scale: 0.97 }}
                className="w-full btn flex items-center justify-center gap-2"
              >
                Get My Free Valuation
                <i className="fas fa-paper-plane text-[12px]" />
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[14px] font-muli text-[#2e7d32] flex items-center gap-2"
                >
                  <i className="fas fa-check-circle" />
                  Thank you! Your request has been received. I'll be in touch within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
