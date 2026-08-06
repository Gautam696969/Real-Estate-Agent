import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FeaturedListings() {
  const [activeProperty, setActiveProperty] = useState<null | (typeof properties)[number]>(null)
  const [tourSubmitted, setTourSubmitted] = useState(false)
  const [tourForm, setTourForm] = useState({ name: '', email: '', phone: '', date: '' })
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1660361339436-ddd4b85372da?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$1,850,000',
      neighborhood: 'Lakeview',
      title: 'Skyline Manor',
      location: 'Chicago, IL',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4200,
      category: 'Luxury Estates',
      description: 'An architectural masterpiece with floor-to-ceiling windows framing stunning skyline views. Featuring an open-concept chef\u2019s kitchen, private terrace, and resort-grade amenities throughout.',
      features: ['Skyline Views', 'Chef\u2019s Kitchen', 'Private Terrace', 'Smart Home', '2-Car Garage'],
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664303906236-057fc3eb9fc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$2,200,000',
      neighborhood: 'Elysian Estates',
      title: 'Ocean Breeze District',
      location: 'Chicago, IL',
      bedrooms: 5,
      bathrooms: 5,
      sqft: 4500,
      category: 'Luxury Estates',
      description: 'A serene retreat in the exclusive Elysian Estates. Enjoy five generous suites, an expansive great room, and meticulous finishes designed for effortless entertaining.',
      features: ['Gated Community', 'Home Theater', 'Infinity Pool', 'Wine Cellar', 'Guest House'],
    },
    {
      image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$1,450,000',
      neighborhood: 'Prestige Gardens',
      title: 'Urban Oasis',
      location: 'Chicago, IL',
      bedrooms: 4,
      bathrooms: 4,
      sqft: 5000,
      category: 'Modern Condos',
      description: 'A tranquil urban oasis wrapped in greenery. Soaring ceilings, a landscaped private courtyard, and designer interiors create a calm escape in the heart of the city.',
      features: ['Private Courtyard', 'Rooftop Deck', 'Gym', 'Concierge', 'EV Charging'],
    },
     {
      image: 'https://images.unsplash.com/photo-1755140584836-9771b5f51575?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$890,000',
      neighborhood: 'Royal Enclave',
      title: 'The Victorian Charm',
      location: 'Chicago, IL',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      category: 'Single Family',
      description: 'Thoughtfully restored Victorian home blending original character with modern comforts. Crown moldings, bay windows, and a sun-drenched kitchen you\u2019ll love.',
      features: ['Original Details', 'Fireplace', 'Sunroom', 'Fenced Yard', 'Walk-in Closets'],
    },
     {
      image: 'https://plus.unsplash.com/premium_photo-1661938258255-ac0c52834c10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$1,470,000',
      neighborhood: 'Kingswood Manor',
      title: 'Kingswood Manor',
      location: 'Chicago, IL',
      bedrooms: 4,
      bathrooms: 4,
      sqft: 4100,
      category: 'Single Family',
      description: 'Grand brick manor in prestigious Kingswood. Formal entertaining spaces, a library, and a primary suite with spa bath deliver refined everyday luxury.',
      features: ['Library', 'Spa Bath', 'Formal Dining', 'Butler\u2019s Pantry', 'Attached Garage'],
    },
     {
      image: 'https://plus.unsplash.com/premium_photo-1748729621216-573f9867e6ab?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$3,100,000',
      neighborhood: 'Gold Coast',
      title: 'Lakeside Estate',
      location: 'Chicago, IL',
      bedrooms: 5,
      bathrooms: 5,
      sqft: 4100,
      category: 'Luxury Estates',
      description: 'Waterfront living at its finest on the Gold Coast. Sweeping lake views, walls of glass, and premium craftsmanship throughout this one-of-a-kind estate.',
      features: ['Lakefront', 'Boat Dock', 'Pool & Spa', 'Home Office', 'Smart Security'],
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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  }

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (tourForm.name && tourForm.email) {
      setTourSubmitted(true)
      setTimeout(() => {
        setTourSubmitted(false)
        setActiveProperty(null)
        setTourForm({ name: '', email: '', phone: '', date: '' })
      }, 3000)
    }
  }

  return (
    <>
    <section id="featured" className="bg-[#f5f5f5] flex flex-col py-16 md:py-24">
    
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-[45px] font-cormorant font-normal py-8 text-gray-900"
          style={{ color: "black", margin: "27px 0 13px 0" }}
        >
          Featured Listings
        </motion.h2>
      </div>

      <div className="flex items-center">
        <div className="container mx-auto px-5" style={{padding: '27px 0 40px 0'}}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {properties.map((prop, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -14, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
                className="group bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col"
              >
                <div className="relative overflow-hidden h-[240px] md:h-[300px]" >
                  <motion.img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6"
                  >
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setActiveProperty(prop)}
                      className="bg-[var(--color-2)] text-white py-3 px-8 rounded-full border-none font-muli uppercase text-[14px] cursor-pointer"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[12px] font-muli text-[var(--color-2)] font-bold uppercase tracking-wider mb-1.5">
                      <i className="fas fa-map-marker-alt text-[11px]" />
                      <span>{prop.neighborhood}</span>
                    </div>

                    <h3 className="font-muli text-[19px] font-bold text-gray-900 group-hover:text-[var(--color-2)] transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <p className="text-[13px] font-muli text-gray-500 mt-1 line-clamp-1">
                      {prop.location}
                    </p>

                    <div className="flex items-baseline gap-2 mt-4">
                      <span className="text-[var(--color-2)] font-cormorant text-[20px] md:text-[22px] font-bold">
                        {prop.price}
                      </span>
                    </div>

                    {/* Key Specs */}
                
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveProperty(prop)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-muli text-[12px] font-bold uppercase tracking-wider shadow-[0_8px_20px_rgba(107,114,128,0.25)] hover:brightness-110 transition-all text-center cursor-pointer"
                    >
                      Schedule Tour
                    </button>
                   
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

      {/* ==================== PROPERTY MODAL & TOUR BOOKING ==================== */}
      <AnimatePresence>
        {activeProperty && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProperty(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[900px] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setActiveProperty(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <i className="fas fa-xmark text-lg" />
              </button>

              <div className="overflow-y-auto flex-1">
                <div className="relative h-[300px] sm:h-[380px] bg-gray-900">
                  <img
                    src={activeProperty.image}
                    alt={activeProperty.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-[var(--color-2)] px-3 py-1 rounded-full text-[11px] font-muli font-bold uppercase tracking-wider">
                      {activeProperty.category}
                    </span>
                    <h2 className="text-[28px] sm:text-[36px] font-cormorant font-bold mt-2 leading-tight">
                      {activeProperty.title}
                    </h2>
                    <p className="text-[14px] font-muli text-gray-300 flex items-center gap-1.5 mt-1">
                      <i className="fas fa-map-marker-alt text-[var(--color-2)]" /> {activeProperty.location}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div>
                        <span className="text-[12px] font-muli uppercase tracking-wider text-gray-500">Price</span>
                        <div className="text-[32px] font-cormorant font-bold text-[var(--color-2)] leading-none">
                          {activeProperty.price}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[14px] font-muli font-bold text-gray-800">
                        <span><i className="fas fa-bed text-[var(--color-2)] mr-1.5" />{activeProperty.bedrooms} Beds</span>
                        <span><i className="fas fa-bath text-[var(--color-2)] mr-1.5" />{activeProperty.bathrooms} Baths</span>
                        <span><i className="fas fa-ruler-combined text-[var(--color-2)] mr-1.5" />{activeProperty.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-muli font-bold text-[16px] text-gray-900 mb-2">Property Description</h4>
                      <p className="font-muli text-[14px] text-gray-600 leading-relaxed">
                        {activeProperty.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-muli font-bold text-[16px] text-gray-900 mb-3">Key Amenities & Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProperty.features.map((feat) => (
                          <span
                            key={feat}
                            className="bg-red-50 text-[var(--color-2)] border border-red-100 px-3 py-1.5 rounded-xl text-[12px] font-muli font-semibold flex items-center gap-1.5"
                          >
                            <i className="fas fa-check text-[10px]" /> {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
                    <div>
                      <h4 className="font-cormorant text-[22px] font-bold text-gray-900">
                        Schedule a Tour
                      </h4>
                      <p className="text-[12px] font-muli text-gray-500 mt-1">
                        Book a private walkthrough with our Chicago agent.
                      </p>

                      <form onSubmit={handleTourSubmit} className="mt-5 space-y-3">
                        <div>
                          <label className="block text-[11px] font-muli font-bold text-gray-700 uppercase mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={tourForm.name}
                            onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
                            placeholder="John Smith"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-[13px] font-muli outline-none focus:border-[var(--color-2)]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-muli font-bold text-gray-700 uppercase mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={tourForm.email}
                            onChange={(e) => setTourForm({ ...tourForm, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-[13px] font-muli outline-none focus:border-[var(--color-2)]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-muli font-bold text-gray-700 uppercase mb-1">Phone</label>
                          <input
                            type="tel"
                            value={tourForm.phone}
                            onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                            placeholder="(312) 555-0123"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-[13px] font-muli outline-none focus:border-[var(--color-2)]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-muli font-bold text-gray-700 uppercase mb-1">Preferred Date</label>
                          <input
                            type="date"
                            value={tourForm.date}
                            onChange={(e) => setTourForm({ ...tourForm, date: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-[13px] font-muli outline-none focus:border-[var(--color-2)]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 bg-[var(--color-2)] text-black py-3 rounded-xl text-[12px] font-muli font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                        >
                          <i className="fas fa-calendar-check" /> Confirm Showing
                        </button>

                        {tourSubmitted && (
                          <div className="p-3 rounded-xl bg-green-100 text-green-800 text-[12px] font-muli text-center">
                            Tour request sent successfully!
                          </div>
                        )}
                      </form>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                      <a href="tel:+12247723760" className="text-[12px] font-muli font-bold text-[var(--color-2)] hover:underline flex items-center justify-center gap-1.5">
                        <i className="fas fa-phone" /> Call (224) 772-3760
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
