import { motion } from 'framer-motion'

export default function FeaturedListings() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D',
      price: '$1,250,000',
      title: 'Modern Luxury Villa',
      details: '4 Beds | 3 Baths | 3,200 sqft'
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D',
      price: '$850,000',
      title: 'Downtown Penthouse',
      details: '2 Beds | 2 Baths | 1,500 sqft'
    },
    {
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8fDA%3D',
      price: '$2,100,000',
      title: 'Seaside Estate',
      details: '5 Beds | 4.5 Baths | 5,000 sqft'
    }
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
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
    
      <div className="container mx-auto px-5 pt-[120px]">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] font-cormorant font-normal text-gray-900"
        >
          <h2
            className="text-[45px] font-cormorant font-normal py-8"
            style={{ color: "black" }}
          >
            Featured Listings
          </h2>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[60px] h-[2px] bg-[#ddd] mb-12"
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-5 pt-[60px]">
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
                className="group bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <div className="relative overflow-hidden h-[300px]">
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
                <div className="p-8">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[var(--color-2)] font-cormorant text-[26px] mb-2"
                  >
                    {prop.price}
                  </motion.h3>
                  <h4 className="text-[20px] font-muli mb-2 font-normal text-gray-900">{prop.title}</h4>
                  <p className="text-[15px] text-[#666] font-muli leading-relaxed">{prop.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
