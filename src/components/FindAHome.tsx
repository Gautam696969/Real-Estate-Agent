import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Property {
  id: number
  title: string
  price: number
  formattedPrice: string
  location: string
  neighborhood: string
  category: 'Luxury Estates' | 'Modern Condos' | 'Single Family' | 'Townhouses'
  bedrooms: number
  bathrooms: number
  sqft: number
  image: string
  gallery: string[]
  badge?: string
  description: string
  features: string[]
  mapCoordinates: { lat: number; lng: number }
}

const PROPERTIES_DATA: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    price: 1250000,
    formattedPrice: '$1,250,000',
    location: '332 West Loop Way, Chicago, IL',
    neighborhood: 'West Loop',
    category: 'Luxury Estates',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Stunning architectural masterpiece in the heart of West Loop. Features double-height ceilings, chef grade kitchen, private rooftop terrace, and smart home automation.',
    features: ['Rooftop Terrace', 'Chef Kitchen', 'Smart Home', '2-Car Garage', 'Wine Cellar'],
    mapCoordinates: { lat: 41.8825, lng: -87.654 }
  },
  {
    id: 2,
    title: 'Downtown Skyline Penthouse',
    price: 850000,
    formattedPrice: '$850,000',
    location: '88 River North Blvd, Chicago, IL',
    neighborhood: 'River North',
    category: 'Modern Condos',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    badge: 'New Listing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Floor-to-ceiling glass windows offering panoramic views of the Chicago skyline. Premium hardwood finishes, private balcony, full-service concierge, and indoor pool.',
    features: ['Panoramic Skyline Views', 'Concierge Service', 'Private Balcony', 'Indoor Pool', 'Fitness Center'],
    mapCoordinates: { lat: 41.8923, lng: -87.634 }
  },
  {
    id: 3,
    title: 'Seaside Waterfront Estate',
    price: 2100000,
    formattedPrice: '$2,100,000',
    location: '120 Gold Coast Ave, Chicago, IL',
    neighborhood: 'Gold Coast',
    category: 'Luxury Estates',
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 5000,
    badge: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Unmatched elegance on the Gold Coast shore. Expansive grounds, heated infinity pool, spa, custom wine room, and custom designer finishes throughout.',
    features: ['Infinity Pool', 'Lakefront Access', 'Spa & Sauna', 'Custom Wine Room', 'Guest House'],
    mapCoordinates: { lat: 41.9056, lng: -87.625 }
  },
  {
    id: 4,
    title: 'Historic Lincoln Park Townhouse',
    price: 980000,
    formattedPrice: '$980,000',
    location: '412 Armitage Ave, Chicago, IL',
    neighborhood: 'Lincoln Park',
    category: 'Townhouses',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2400,
    badge: 'Price Reduced',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Charming brownstone blend of classic brick craftsmanship and modern interior luxury. Located steps away from parks, top schools, and boutique dining.',
    features: ['Private Courtyard', 'Exposed Brick Work', 'Fireplace', 'Custom Millwork', 'Walkable Location'],
    mapCoordinates: { lat: 41.9182, lng: -87.648 }
  },
  {
    id: 5,
    title: 'Contemporary Urban Residence',
    price: 675000,
    formattedPrice: '$675,000',
    location: '715 S Michigan Ave, Chicago, IL',
    neighborhood: 'South Loop',
    category: 'Modern Condos',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1350,
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Sleek open-concept condo with floor-to-ceiling windows, quartz countertops, high-end stainless steel appliances, and private balcony overlooking Grant Park.',
    features: ['Grant Park View', 'Quartz Countertops', 'EV Charging', 'Dog Park Access', '24/7 Security'],
    mapCoordinates: { lat: 41.8732, lng: -87.624 }
  },
  {
    id: 6,
    title: 'Modernist Suburban Family Villa',
    price: 1750000,
    formattedPrice: '$1,750,000',
    location: '520 Sheridan Rd, Evanston, IL',
    neighborhood: 'Evanston',
    category: 'Single Family',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4100,
    badge: 'Virtual Tour',
    image: 'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Expansive family retreat with open floorplan, lush landscaped gardens, outdoor kitchen, heated swimming pool, and proximity to lakefront trails.',
    features: ['Heated Pool', 'Outdoor Kitchen', 'Landscaped Yard', 'Basement Theater', 'Top Rated District'],
    mapCoordinates: { lat: 42.0451, lng: -87.677 }
  },
  {
    id: 7,
    title: 'Fulton Market Designer Loft',
    price: 790000,
    formattedPrice: '$790,000',
    location: '1020 Fulton Market, Chicago, IL',
    neighborhood: 'West Loop',
    category: 'Modern Condos',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Industrial chic loft with soaring 14ft timber ceilings, polished concrete floors, custom Italian cabinetry, and huge south-facing windows.',
    features: ['14ft Timber Ceilings', 'Italian Cabinetry', 'Polished Concrete', 'Freight Elevator', 'Private Storage'],
    mapCoordinates: { lat: 41.8867, lng: -87.653 }
  },
  {
    id: 8,
    title: 'Grand Lakefront Mansion',
    price: 3400000,
    formattedPrice: '$3,400,000',
    location: '98 Lake Ave, Winnetka, IL',
    neighborhood: 'Winnetka',
    category: 'Luxury Estates',
    bedrooms: 6,
    bathrooms: 6,
    sqft: 6500,
    badge: 'Trophy Home',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'A magnificent estate set on 1.5 manicured acres. Includes private beach access, tennis court, wine cellar, 4-car heated garage, and smart security.',
    features: ['Private Beach', 'Tennis Court', '4-Car Garage', 'Wine Cellar', 'Elevator'],
    mapCoordinates: { lat: 42.1081, lng: -87.735 }
  }
]

export default function FindAHome() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All')
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>('All')

  // Selected property for Modal showing details & tour booking
  const [activeProperty, setActiveProperty] = useState<Property | null>(null)
  const [tourSubmitted, setTourSubmitted] = useState(false)
  const [tourForm, setTourForm] = useState({ name: '', email: '', phone: '', date: '', time: '10:00 AM' })

  // Custom Search Request Form
  const [requestForm, setRequestForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredArea: '',
    budget: '$750k - $1.5M',
    bedrooms: '3+',
    notes: ''
  })
  const [requestSubmitted, setRequestSubmitted] = useState(false)

  // Filtering logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      // Search term filter
      const matchesSearch =
        searchTerm === '' ||
        prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory === 'All' || prop.category === selectedCategory

      // Neighborhood filter
      const matchesNeighborhood = selectedNeighborhood === 'All' || prop.neighborhood === selectedNeighborhood

      // Bedrooms filter
      const matchesBedrooms =
        selectedBedrooms === 'All' ||
        (selectedBedrooms === '1+' && prop.bedrooms >= 1) ||
        (selectedBedrooms === '2+' && prop.bedrooms >= 2) ||
        (selectedBedrooms === '3+' && prop.bedrooms >= 3) ||
        (selectedBedrooms === '4+' && prop.bedrooms >= 4)

      // Price filter
      let matchesPrice = true
      if (selectedPriceRange === '<1M') matchesPrice = prop.price < 1000000
      else if (selectedPriceRange === '1M-2M') matchesPrice = prop.price >= 1000000 && prop.price <= 2000000
      else if (selectedPriceRange === '>2M') matchesPrice = prop.price > 2000000

      return matchesSearch && matchesCategory && matchesNeighborhood && matchesBedrooms && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedNeighborhood, selectedPriceRange, selectedBedrooms])

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (tourForm.name && tourForm.email) {
      setTourSubmitted(true)
      setTimeout(() => {
        setTourSubmitted(false)
        setActiveProperty(null)
        setTourForm({ name: '', email: '', phone: '', date: '', time: '10:00 AM' })
      }, 3000)
    }
  }

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (requestForm.name && requestForm.email) {
      setRequestSubmitted(true)
      setTimeout(() => {
        setRequestSubmitted(false)
        setRequestForm({ name: '', email: '', phone: '', preferredArea: '', budget: '$750k - $1.5M', bedrooms: '3+', notes: '' })
      }, 5000)
    }
  }

  const categories = ['All', 'Luxury Estates', 'Modern Condos', 'Single Family', 'Townhouses']
  const neighborhoods = ['All', 'West Loop', 'River North', 'Gold Coast', 'Lincoln Park', 'South Loop', 'Evanston', 'Winnetka']

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* ==================== HERO SEARCH SECTION ==================== */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-[#0d0d0d] overflow-hidden pt-24 pb-16">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=80"
          alt="Search homes background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />

        <div className="relative z-10 container mx-auto px-5 text-center max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-2)]/20 border border-[var(--color-2)]/40 text-[var(--color-2)] text-[12px] md:text-[13px] font-muli uppercase tracking-[0.25em] font-bold mb-6"
          >
            <i className="fas fa-[#e21b22] fa-search-location" /> Real Estate Property Finder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white font-cormorant text-[36px] sm:text-[52px] md:text-[68px] font-bold leading-[1.1] tracking-tight text-balance"
          >
            Discover Exclusive <span className="text-[#ff6666] italic">Homes & Estates</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-[#ccc] font-muli text-[16px] md:text-[18px] max-w-[680px] mx-auto leading-relaxed"
          >
            Search luxury houses, modern condos, and premium townhomes across Chicago's finest neighborhoods.
          </motion.p>

          {/* Interactive Search & Filter Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-gray-100 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Keyword Search */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-muli font-bold uppercase tracking-wider text-[#777]">Search Keyword / City</label>
                <div className="relative flex items-center">
                  <i className="fas fa-search absolute left-3.5 text-gray-400 text-[14px]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="e.g. West Loop, Villa, River..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 placeholder:text-gray-400 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all"
                  />
                </div>
              </div>

              {/* Neighborhood Select */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-muli font-bold uppercase tracking-wider text-[#777]">Neighborhood</label>
                <div className="relative flex items-center">
                  <i className="fas fa-[#e21b22] fa-map-marker-alt absolute left-3.5 text-gray-400 text-[14px]" />
                  <select
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all cursor-pointer"
                  >
                    {neighborhoods.map((n) => (
                      <option key={n} value={n}>{n === 'All' ? 'All Neighborhoods' : n}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-muli font-bold uppercase tracking-wider text-[#777]">Price Range</label>
                <div className="relative flex items-center">
                  <i className="fas fa-tag absolute left-3.5 text-gray-400 text-[14px]" />
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all cursor-pointer"
                  >
                    <option value="All">Any Price</option>
                    <option value="<1M">Under $1,000,000</option>
                    <option value="1M-2M">$1,000,000 - $2,000,000</option>
                    <option value=">2M">$2,000,000+</option>
                  </select>
                </div>
              </div>

              {/* Bedrooms */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-muli font-bold uppercase tracking-wider text-[#777]">Bedrooms</label>
                <div className="relative flex items-center">
                  <i className="fas fa-bed absolute left-3.5 text-gray-400 text-[14px]" />
                  <select
                    value={selectedBedrooms}
                    onChange={(e) => setSelectedBedrooms(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all cursor-pointer"
                  >
                    <option value="All">Any Bedrooms</option>
                    <option value="1+">1+ Bedroom</option>
                    <option value="2+">2+ Bedrooms</option>
                    <option value="3+">3+ Bedrooms</option>
                    <option value="4+">4+ Bedrooms</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[13px] font-muli text-gray-600 font-semibold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span>Showing <strong className="text-[var(--color-2)]">{filteredProperties.length}</strong> available property matches</span>
              </div>

              {(searchTerm || selectedCategory !== 'All' || selectedNeighborhood !== 'All' || selectedPriceRange !== 'All' || selectedBedrooms !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                    setSelectedNeighborhood('All')
                    setSelectedPriceRange('All')
                    setSelectedBedrooms('All')
                  }}
                  className="text-[12px] font-muli font-bold text-[var(--color-2)] hover:underline flex items-center gap-1.5 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 transition-colors"
                >
                  <i className="fas fa-times" /> Reset Filters
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CATEGORY FILTER TABS & HOUSES GALLERY ==================== */}
      <section className="py-16 md:py-24 container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-muli font-bold uppercase tracking-[0.25em] text-[var(--color-2)]">
              <span className="w-6 h-[2px] bg-[var(--color-2)]" /> Available Homes
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-cormorant font-bold text-gray-900 mt-2">
              Featured Property Listings
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[13px] font-muli font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* HOUSES GRID */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-[600px] mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-red-50 text-[var(--color-2)] flex items-center justify-center mx-auto text-2xl mb-4">
              <i className="fas fa-search-minus" />
            </div>
            <h3 className="font-cormorant text-[26px] font-bold text-gray-900">No properties matched your criteria</h3>
            <p className="font-muli text-[14px] text-gray-500 mt-2">
              Try broadening your price range, location, or bedroom count to discover available homes.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedNeighborhood('All')
                setSelectedPriceRange('All')
                setSelectedBedrooms('All')
              }}
              className="mt-6 inline-flex items-center gap-2 bg-[var(--color-2)] text-white px-6 py-3 rounded-xl text-[13px] font-muli font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
            >
              View All Properties
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(226,27,34,0.12)] hover:border-[var(--color-2)]/50 transition-all duration-300 flex flex-col"
              >
                {/* Image & Badges */}
                <div className="relative h-[260px] overflow-hidden bg-gray-900">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  {property.badge && (
                    <span className="absolute top-4 left-4 bg-[var(--color-2)] text-white text-[11px] font-muli font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {property.badge}
                    </span>
                  )}

                  {/* Category Tag */}
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-muli font-medium px-3 py-1 rounded-full border border-white/20">
                    {property.category}
                  </span>

                  {/* Price Banner */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-muli uppercase tracking-wider text-white/80">Asking Price</span>
                      <div className="text-white font-cormorant text-[28px] font-bold leading-none">{property.formattedPrice}</div>
                    </div>
                    <button
                      onClick={() => setActiveProperty(property)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[12px] font-muli font-semibold transition-colors flex items-center gap-1.5 border border-white/30"
                    >
                      <i className="fas fa-eye text-[11px]" /> Quick View
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[12px] font-muli text-[var(--color-2)] font-bold uppercase tracking-wider mb-1.5">
                      <i className="fas fa-[#e21b22] fa-map-marker-alt text-[11px]" />
                      <span>{property.neighborhood}</span>
                    </div>

                    <h3 className="font-muli text-[19px] font-bold text-gray-900 group-hover:text-[var(--color-2)] transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-[13px] font-muli text-gray-500 mt-1 line-clamp-1">
                      {property.location}
                    </p>

                    {/* Key Specs */}
                    <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-gray-100 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-gray-400 text-[14px] mb-0.5"><i className="fas fa-bed text-[var(--color-2)]" /></div>
                        <span className="text-[13px] font-muli font-bold text-gray-800">{property.bedrooms} Beds</span>
                      </div>
                      <div className="flex flex-col items-center border-x border-gray-100">
                        <div className="text-gray-400 text-[14px] mb-0.5"><i className="fas fa-bath text-[var(--color-2)]" /></div>
                        <span className="text-[13px] font-muli font-bold text-gray-800">{property.bathrooms} Baths</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-gray-400 text-[14px] mb-0.5"><i className="fas fa-ruler-combined text-[var(--color-2)]" /></div>
                        <span className="text-[13px] font-muli font-bold text-gray-800">{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveProperty(property)}
                      className="flex-1 bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white py-3 rounded-xl font-muli text-[12px] font-bold uppercase tracking-wider shadow-[0_8px_20px_rgba(226,27,34,0.25)] hover:brightness-110 transition-all text-center"
                    >
                      Schedule Tour
                    </button>
                    <button
                      onClick={() => setActiveProperty(property)}
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-muli text-[12px] font-bold transition-colors"
                      title="View Full Details"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ==================== INTERACTIVE GOOGLE MAP SECTION ==================== */}
      <section className="py-16 md:py-24 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-2)] opacity-10 blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-5">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-[12px] font-muli font-bold uppercase tracking-[0.25em] text-[#ff8080]">
              <span className="w-6 h-[2px] bg-[var(--color-2)]" /> Location Map Explorer
            </span>
            <h2 className="text-[32px] sm:text-[46px] font-cormorant font-bold mt-2">
              Explore Homes on Google Map
            </h2>
            <p className="mt-3 text-[#aaa] font-muli text-[15px] leading-relaxed">
              Browse property locations across top Chicago neighborhoods and discover nearby parks, schools, and city landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Neighborhood Location Selector List */}
            <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-cormorant text-[22px] font-bold text-white mb-2 flex items-center gap-2">
                  <i className="fas fa-[#e21b22] fa-map-marked-alt text-[var(--color-2)]" /> Key Neighborhoods
                </h3>
                <p className="text-[13px] font-muli text-[#888] mb-4">
                  Click a neighborhood to view matching houses:
                </p>

                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                  {neighborhoods.filter(n => n !== 'All').map((n) => {
                    const count = PROPERTIES_DATA.filter(p => p.neighborhood === n).length
                    const isSelected = selectedNeighborhood === n
                    return (
                      <button
                        key={n}
                        onClick={() => setSelectedNeighborhood(isSelected ? 'All' : n)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                          isSelected
                            ? 'bg-[var(--color-2)]/15 border-[var(--color-2)] text-white shadow-md'
                            : 'bg-white/5 border-white/5 text-[#ccc] hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[13px] ${isSelected ? 'bg-[var(--color-2)] text-white' : 'bg-white/10 text-[#aaa]'}`}>
                            <i className="fas fa-[#e21b22] fa-building" />
                          </div>
                          <div>
                            <div className="font-muli font-semibold text-[14px]">{n}</div>
                            <div className="text-[11px] text-[#888]">Chicago Region</div>
                          </div>
                        </div>
                        <span className={`text-[11px] font-muli font-bold px-2.5 py-1 rounded-full ${isSelected ? 'bg-[var(--color-2)] text-white' : 'bg-white/10 text-[#888]'}`}>
                          {count} {count === 1 ? 'Home' : 'Homes'}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <a
                  href="#search-form"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl text-[13px] font-muli font-bold uppercase tracking-wider transition-colors border border-white/15"
                >
                  <i className="fas fa-filter" /> Filter Map Properties
                </a>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[420px] bg-[#222]">
              <iframe
                title="Google Map Chicago Real Estate"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.8441113009!2d-87.87204558231573!3d41.83390416972418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px', filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/15 shadow-xl max-w-[280px]">
                <div className="flex items-center gap-2 text-[12px] font-muli font-bold text-[var(--color-2)] uppercase">
                  <i className="fas fa-[#e21b22] fa-map-pin animate-bounce" /> Chicago Real Estate Map
                </div>
                <div className="text-[13px] font-muli text-gray-300 mt-1">
                  Showing active listings in {selectedNeighborhood === 'All' ? 'all Chicago neighborhoods' : selectedNeighborhood}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CUSTOM HOME REQUEST CONSULTATION ==================== */}
      <section id="search-form" className="py-16 md:py-24 container mx-auto px-5">
        <div className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-[#111] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[var(--color-2)] opacity-20 blur-[90px] pointer-events-none" />

              <div>
                <span className="text-[12px] font-muli font-bold uppercase tracking-[0.25em] text-[#ff8080]">
                  Off-Market Search
                </span>
                <h3 className="text-[28px] sm:text-[36px] font-cormorant font-bold mt-3 leading-tight">
                  Can't Find Your Ideal Home?
                </h3>
                <p className="mt-4 text-[#bbb] font-muli text-[14px] leading-relaxed">
                  Let us search unlisted private pocket listings, coming-soon properties, and off-market deals specifically for you.
                </p>
              </div>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-2)]/20 text-[var(--color-2)] flex items-center justify-center text-[15px] shrink-0 mt-0.5">
                    <i className="fas fa-[#e21b22] fa-[#e21b22] fa-check-circle" />
                  </div>
                  <div>
                    <h4 className="font-muli font-bold text-[15px]">Personalized Home Matches</h4>
                    <p className="text-[12px] text-[#999] font-muli">Matching homes delivered directly to your inbox.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-2)]/20 text-[var(--color-2)] flex items-center justify-center text-[15px] shrink-0 mt-0.5">
                    <i className="fas fa-[#e21b22] fa-[#e21b22] fa-key" />
                  </div>
                  <div>
                    <h4 className="font-muli font-bold text-[15px]">Early Buyer Access</h4>
                    <p className="text-[12px] text-[#999] font-muli">Tour houses before public open houses occur.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[13px] font-muli text-[#aaa]">
                Need immediate help? Call us at <a href="tel:+12247723760" className="text-white font-bold underline">(224) 772-3760</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <h3 className="font-cormorant text-[28px] font-bold text-gray-900">
                Request Custom Home Search
              </h3>
              <p className="text-[13px] font-muli text-gray-500 mt-1">
                Fill in your wishlist details and our agent team will get to work.
              </p>

              <form onSubmit={handleRequestSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-muli font-semibold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={requestForm.name}
                      onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-muli font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={requestForm.email}
                      onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-muli font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={requestForm.phone}
                      onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })}
                      placeholder="(312) 555-0199"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-muli font-semibold text-gray-700 mb-1">Preferred Neighborhood</label>
                    <input
                      type="text"
                      value={requestForm.preferredArea}
                      onChange={(e) => setRequestForm({ ...requestForm, preferredArea: e.target.value })}
                      placeholder="e.g. West Loop, Lincoln Park"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-muli font-semibold text-gray-700 mb-1">Wishlist & Special Requirements</label>
                  <textarea
                    rows={3}
                    value={requestForm.notes}
                    onChange={(e) => setRequestForm({ ...requestForm, notes: e.target.value })}
                    placeholder="Describe your desired layout, parking needs, school district, budget, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-2)]/15 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white py-4 rounded-xl font-muli text-[13px] font-bold uppercase tracking-wider shadow-[0_10px_25px_rgba(226,27,34,0.3)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane" /> Send Custom Home Request
                </button>

                {requestSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-green-50 text-green-800 border border-green-200 text-[13px] font-muli flex items-center gap-2"
                  >
                    <i className="fas fa-check-circle text-green-600 text-lg" />
                    Thank you! Your custom search request has been submitted. An agent will contact you shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROPERTY MODAL & TOUR BOOKING ==================== */}
      <AnimatePresence>
        {activeProperty && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProperty(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[900px] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProperty(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <i className="fas fa-xmark text-lg" />
              </button>

              <div className="overflow-y-auto flex-1">
                {/* Modal Header Image */}
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
                      <i className="fas fa-[#e21b22] fa-map-marker-alt text-[var(--color-2)]" /> {activeProperty.location}
                    </p>
                  </div>
                </div>

                {/* Modal Body Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Specs & Overview */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div>
                        <span className="text-[12px] font-muli uppercase tracking-wider text-gray-500">Price</span>
                        <div className="text-[32px] font-cormorant font-bold text-[var(--color-2)] leading-none">
                          {activeProperty.formattedPrice}
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

                  {/* Right Tour Booking Form */}
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
                          className="w-full mt-2 bg-[var(--color-2)] text-white py-3 rounded-xl text-[12px] font-muli font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
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
    </div>
  )
}
