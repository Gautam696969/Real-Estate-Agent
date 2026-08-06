import { useState } from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Buying a Property',
    preferredMethod: 'Phone',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Buying a Property',
        preferredMethod: 'Phone',
        budget: '',
        message: '',
      })
    }, 1200)
  }

  const eyebrowClass =
    'inline-flex items-center justify-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] uppercase'

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* ==================== HERO ==================== */}
      <section className="relative flex items-center min-h-[65vh] md:min-h-[75vh] overflow-hidden bg-[#0d0d0d] text-white pt-24 pb-16">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=80"
          alt="Chicago Luxury Real Estate Office"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[var(--color-2)] opacity-15 blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full container mx-auto px-5 text-center max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-2)]/20 border border-[var(--color-2)]/40 text-[var(--color-2)] text-[12px] md:text-[13px] font-muli uppercase tracking-[0.25em] font-bold mb-6"
          >
            <i className="fas fa-envelope-open-text" /> Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] sm:text-[54px] md:text-[68px] font-cormorant font-bold leading-[1.08] text-balance"
          >
            Let's Talk About Your <span className="text-[#ff6666] italic">Real Estate Goals</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-[640px] text-white/90 font-muli text-[16px] md:text-[18px] leading-relaxed"
          >
            Whether you are buying a dream residence, selling a high-value property, or requesting a market valuation, our team is at your service.
          </motion.p>
        </div>
      </section>

      {/* ==================== CONTACT INFO CARDS ==================== */}
      <section className="pb-12 md:py-16 relative z-20 container mx-auto px-5" style={{paddingBottom:'0px'}}>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {[
            {
              icon: 'fas fa-map-marker-alt',
              title: 'Main Office',
              content: (
                <>
                  1000 W Fulton Market, Suite 400<br />Chicago, IL 60607
                </>
              ),
            },
            {
              icon: 'fas fa-phone-alt',
              title: 'Direct Phone',
              content: (
                <>
                  <a href="tel:2247723760" className="hover:text-[var(--color-2)] transition-colors block">(224) 772 3760</a>
                  <a href="tel:2244364201" className="hover:text-[var(--color-2)] transition-colors block">(224) 772 3760</a>
                </>
              ),
            },
            {
              icon: 'fas fa-envelope',
              title: 'Email Address',
              content: (
                <>
                  <a href="mailto:sourav.mukherjee@ravmoyaanrealty.com" className="hover:text-[var(--color-2)] transition-colors block">sourav.mukherjee@ravmoyaanrealty.com</a>
                </>
              ),
            },
            {
              icon: 'fas fa-clock',
              title: 'Hours of Operation',
              content: (
                <>
                  Mon – Sun: 8:00 AM – 8:00 PM<br />
                  <span className="text-[var(--color-2)] font-semibold">24/7 Client Advisory</span>
                </>
              ),
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-[0_4px_20px_rgba(17,17,17,0.05)] hover:shadow-[0_20px_45px_rgba(226,27,34,0.14)] hover:border-[var(--color-2)] transition-all duration-300 p-6 md:p-8 flex flex-col"
            >
              <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-2)] via-[#ff5a5f] to-[var(--color-2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-2)] to-[#c0151b] text-white flex items-center justify-center text-[20px] shadow-[0_10px_22px_rgba(226,27,34,0.3)] group-hover:scale-105 transition-transform duration-300">
                <i className={card.icon} />
              </div>
              <h4 className="mt-6 text-[18px] font-muli font-bold text-gray-900">{card.title}</h4>
              <span className="w-9 h-[2px] bg-[var(--color-2)] mt-3 transition-all duration-300 group-hover:w-14" />
              <p className="mt-3 text-[14px] text-[#666] font-muli leading-relaxed flex-1 break-words">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== FORM & MAP SECTION ==================== */}
      <section className="py-12 md:py-20 container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <span className={`${eyebrowClass} text-[var(--color-2)]`}>
              <span className="w-8 h-[2px] bg-[var(--color-2)]" /> Send a Message
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-cormorant font-bold text-gray-900 mt-2">
              Start a Conversation
            </h2>
            <p className="font-muli text-[14px] text-gray-600 mt-2 mb-8">
              Fill out the form below and one of our senior real estate advisors will reach out within 2 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                  <i className="fas fa-check" />
                </div>
                <h3 className="font-cormorant text-[26px] font-bold">Message Received!</h3>
                <p className="font-muli text-[14px] text-green-700 mt-2 max-w-[400px] mx-auto">
                  Thank you for reaching out to Rav-Mo-Yaan Realty. A senior advisor will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-green-700 text-white rounded-xl font-muli text-[12px] font-bold uppercase tracking-wider hover:bg-green-800"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-muli text-[14px] text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-muli text-[14px] text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(312) 555-0199"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-muli text-[14px] text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-muli text-[14px] text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] transition-all cursor-pointer"
                    >
                      <option value="Buying a Property">Buying a Property</option>
                      <option value="Selling My Home">Selling My Home</option>
                      <option value="Free Property Valuation">Free Property Valuation</option>
                      <option value="Off-Market Access">Off-Market Access</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                      Target Budget / Price Range
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. $1M - $2M"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-muli text-[14px] text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-2 pt-1">
                      {['Phone', 'Email', 'Text', 'WhatsApp'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredMethod: method })}
                          className={`flex-1 py-2.5 rounded-xl text-[12px] font-muli font-bold transition-all ${
                            formData.preferredMethod === method
                              ? 'bg-gray-900 text-white shadow-sm'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-muli font-bold uppercase text-gray-700 mb-2">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property features, desired neighborhoods, or selling timeframe you have in mind..."
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 font-muli text-[14px] text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white py-4 rounded-xl font-muli text-[13px] font-bold uppercase tracking-wider shadow-[0_10px_25px_rgba(226,27,34,0.3)] hover:shadow-[0_15px_35px_rgba(226,27,34,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" /> Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map & Direct Advisor Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Map Embed Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="h-[300px] rounded-2xl overflow-hidden relative border border-gray-200">
                <iframe
                  title="Chicago Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.36629853926!2d-87.65345682348574!3d41.88603697124118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cd33a216667%3A0xb36a0d2fb08a706!2sFulton%20Market%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-muli font-bold text-gray-900 text-[15px]">Fulton Market Headquarters</h4>
                  <p className="text-[12px] font-muli text-gray-500">West Loop, Chicago IL</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl font-muli text-[12px] font-bold hover:bg-gray-200 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Direct Advisors */}
            <div className="bg-[#111] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="font-cormorant text-[26px] font-bold text-white">Direct Advisors</h3>

              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                <img
                  src="https://ravmoyaanrealty.com/images/team/sir.png"
                  alt="Sourav Mukherjee"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-2)]"
                />
                <div>
                  <h4 className="font-muli font-bold text-[16px]">Sourav Mukherjee</h4>
                  <p className="text-[12px] font-muli text-[#ff8080] font-semibold">Principal Broker</p>
                  <a href="tel:2247723760" className="text-[12px] text-gray-300 hover:text-white font-muli block mt-0.5">
                    (224) 772-3760
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="https://media.istockphoto.com/id/1250504146/photo/indian-businessman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=2n26sPvWJUr-1ywXpdRdM_-4AuTJJ2Iz4ECYMP6ipZ0="
                  alt="Hasmukh Shah"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-2)]"
                />
                <div>
                  <h4 className="font-muli font-bold text-[16px]">Hasmukh Shah</h4>
                  <p className="text-[12px] font-muli text-[#ff8080] font-semibold">Senior Luxury Advisor</p>
                  <a href="tel:2244364201" className="text-[12px] text-gray-300 hover:text-white font-muli block mt-0.5">
                    (224) 436-4201
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
