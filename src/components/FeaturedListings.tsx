import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeaturedListings() {
  const [activeProperty, setActiveProperty] = useState<null | (typeof properties)[number]>(null)
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
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1746888841272-f4df63c840a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$1,450,000',
      neighborhood: 'Prestige Gardens',
      title: 'Urban Oasis',
      location: 'Chicago, IL',
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 5000,
    },
     {
      image: 'https://images.unsplash.com/photo-1755140584836-9771b5f51575?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1755140584836-9771b5f51575?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$890,000',
      neighborhood: 'Royal Enclave',
      title: 'The Victorian Charm',
      location: 'Chicago, IL',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
    },
     {
      image: 'https://plus.unsplash.com/premium_photo-1661938258255-ac0c52834c10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$1,470,000',
      neighborhood: 'Kingswood Manor',
      title: 'Kingswood Manor',
      location: 'Chicago, IL',
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 4100,
    },
     {
      image: 'https://plus.unsplash.com/premium_photo-1748729621216-573f9867e6ab?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$3,100,000',
      neighborhood: 'Gold Coast',
      title: 'Lakeside Estate',
      location: 'Chicago, IL',
      bedrooms: 5,
      bathrooms: 4.5,
      sqft: 4100,
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

  return (
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
                    <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-gray-100 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-gray-400 text-[14px] mb-0.5"><i className="fas fa-bed text-[var(--color-2)]" /></div>
                        <span className="text-[13px] font-muli font-bold text-gray-800">{prop.bedrooms} Beds</span>
                      </div>
                      <div className="flex flex-col items-center border-x border-gray-100">
                        <div className="text-gray-400 text-[14px] mb-0.5"><i className="fas fa-bath text-[var(--color-2)]" /></div>
                        <span className="text-[13px] font-muli font-bold text-gray-800">{prop.bathrooms} Baths</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-gray-400 text-[14px] mb-0.5"><i className="fas fa-ruler-combined text-[var(--color-2)]" /></div>
                        <span className="text-[13px] font-muli font-bold text-gray-800">{prop.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveProperty(prop)}
                      className="flex-1 bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white py-3 rounded-xl font-muli text-[12px] font-bold uppercase tracking-wider shadow-[0_8px_20px_rgba(226,27,34,0.25)] hover:brightness-110 transition-all text-center"
                    >
                      Schedule Tour
                    </button>
                    <button
                      onClick={() => setActiveProperty(prop)}
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-muli text-[12px] font-bold transition-colors"
                      title="View Full Details"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
