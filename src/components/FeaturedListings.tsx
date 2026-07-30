import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FeaturedListings() {
  const revealRef = useScrollReveal()

  const properties = [
    {
      image: 'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/pexels-photo-323780-1920w.jpeg',
      price: '$1,250,000',
      title: 'Modern Luxury Villa',
      details: '4 Beds | 3 Baths | 3,200 sqft'
    },
    {
      image: 'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/pexels-photo-1396122-1920w.jpeg',
      price: '$850,000',
      title: 'Downtown Penthouse',
      details: '2 Beds | 2 Baths | 1,500 sqft'
    },
    {
      image: 'https://irp.cdn-website.com/2fc78bdd/dms3rep/multi/opt/pexels-photo-106399-1920w.jpeg',
      price: '$2,100,000',
      title: 'Seaside Estate',
      details: '5 Beds | 4.5 Baths | 5,000 sqft'
    }
  ]

  return (
    <section ref={revealRef} className="py-[80px] bg-[#f5f5f5]">
      <div className="container mx-auto px-5">
        <h2 className="text-[36px] font-cormorant font-normal text-gray-900 reveal-up delay-1">Featured Listings</h2>
        <div className="w-[60px] h-[2px] bg-[#ddd] mb-12 reveal-up delay-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <div key={idx} className={`reveal-up delay-${idx + 2} group bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]`}>
               <div className="relative overflow-hidden h-[240px]">
                 <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 ease-in-out flex items-end justify-center p-6 group-hover:opacity-100">
                    <button className="bg-[var(--color-2)] text-white py-3 px-8 rounded-full border-none font-muli uppercase text-[14px] cursor-pointer transform translate-y-5 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">View Details</button>
                 </div>
               </div>
               <div className="p-6">
                 <h3 className="text-[var(--color-2)] font-cormorant text-[24px] mb-2">{prop.price}</h3>
                 <h4 className="text-[18px] font-muli mb-2 font-normal text-gray-900">{prop.title}</h4>
                 <p className="text-[14px] text-[#666] font-muli leading-relaxed">{prop.details}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}