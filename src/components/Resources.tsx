import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ResourceArticle {
  id: number
  title: string
  category: 'Buying' | 'Selling' | 'Market Analysis' | 'Mortgage & Finance' | 'Neighborhood Guides'
  readTime: string
  date: string
  image: string
  excerpt: string
  content: string
  tags: string[]
  downloadable?: boolean
}

const ARTICLES: ResourceArticle[] = [
  {
    id: 1,
    title: 'The Ultimate Chicago Homebuyer’s Playbook for 2026',
    category: 'Buying',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Key strategies for navigating competitive bidding, pre-approval requirements, and finding off-market homes in Chicago’s top neighborhoods.',
    content: 'Buying a property in Chicago requires understanding localized sub-market trends. From West Loop modern lofts to historic Lincoln Park brownstones, getting pre-approved early and working with a dedicated buyer broker gives you a decisive advantage.',
    tags: ['Homebuying', 'Chicago Real Estate', 'Pre-Approval'],
    downloadable: true,
  },
  {
    id: 2,
    title: 'How to Stage & Price Your Property for Maximum Sales Price',
    category: 'Selling',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Proven staging techniques and pricing psychology that reduce days on market while maximizing seller net proceeds.',
    content: 'First impressions drive real estate offers. Professional photography, strategic decluttering, spatial flow optimization, and data-backed pricing ensure your listing attracts competitive multiple offers.',
    tags: ['Home Staging', 'Home Valuation', 'Seller ROI'],
    downloadable: true,
  },
  {
    id: 3,
    title: 'Understanding Interest Rates, Taxes & Closing Costs',
    category: 'Mortgage & Finance',
    readTime: '7 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Demystifying Cook County property taxes, transfer stamps, lender fees, and escrow requirements for buyers and sellers.',
    content: 'Closing costs typically range between 2% to 5% of the purchase price. Knowing how transfer taxes, title insurance, and escrow reserves affect your bottom line prevents surprises at the closing table.',
    tags: ['Mortgage', 'Closing Costs', 'Finance'],
    downloadable: true,
  },
  {
    id: 4,
    title: 'West Loop vs. River North: Neighborhood Spotlight',
    category: 'Neighborhood Guides',
    readTime: '4 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Comparing lifestyle, dining, walk scores, HOA amenities, and price-per-square-foot trends across Chicago’s hottest urban districts.',
    content: 'West Loop offers industrial timber lofts and Michelin-star dining along Fulton Market, while River North delivers high-rise glass luxury penthouses with direct river walk access.',
    tags: ['West Loop', 'River North', 'Chicago Living'],
  },
  {
    id: 5,
    title: '2026 Chicagoland Luxury Real Estate Market Report',
    category: 'Market Analysis',
    readTime: '8 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Comprehensive data analysis on inventory absorption rates, luxury median price growth, and buyer demographic shifts.',
    content: 'Demand for single-family residences in North Shore suburbs and luxury penthouses in downtown Chicago remains robust. Inventory trends indicate strong seller leverage in prime locations.',
    tags: ['Market Data', 'Luxury Real Estate', 'Analytics'],
    downloadable: true,
  },
  {
    id: 6,
    title: '10 Questions to Ask Before Hiring a Real Estate Broker',
    category: 'Buying',
    readTime: '4 min read',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Ensure your agent has verified track records, negotiation skills, local expertise, and full-time dedication.',
    content: 'Choosing the right agent can save or net you tens of thousands of dollars. Ask about their recent sale-to-list price ratios, average days on market, and access to private network listings.',
    tags: ['Broker Selection', 'Advice', 'Buying Tips'],
  },
]

const FAQS = [
  {
    question: 'How much down payment do I really need to buy a home in Chicago?',
    answer: 'While 20% down eliminates Private Mortgage Insurance (PMI), conventional loan options start as low as 3% to 5% down for qualified buyers, and FHA loans start at 3.5%. We help connect you with trusted lenders to find your best options.',
  },
  {
    question: 'What is the average time it takes to sell a property?',
    answer: 'Properties listed with Rav-Mo-Yaan Realty average just 12 days on market due to strategic pricing, professional staging, and targeted digital marketing. Overall Chicago market average ranges between 25-45 days.',
  },
  {
    question: 'What are closing costs and who pays them?',
    answer: 'Closing costs include lender fees, title insurance, attorney fees, property tax escrows, and municipal transfer stamps. Both buyers and sellers have specific closing costs outlined during contract negotiation.',
  },
  {
    question: 'What is an off-market or pocket listing?',
    answer: 'An off-market listing is a property available for purchase that is not publicly advertised on MLS or public portals. Our exclusive network gives our buyers private access to these unique opportunities.',
  },
]

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  // Interactive Mortgage Calculator State
  const [homePrice, setHomePrice] = useState<number>(650000)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20)
  const [interestRate, setInterestRate] = useState<number>(6.5)
  const [loanTermYears, setLoanTermYears] = useState<number>(30)

  // Calculated Mortgage Payment
  const calculatedMortgage = useMemo(() => {
    const principal = homePrice * (1 - downPaymentPercent / 100)
    const monthlyRate = interestRate / 100 / 12
    const totalMonths = loanTermYears * 12

    let monthlyPrincipalInterest = 0
    if (monthlyRate > 0) {
      monthlyPrincipalInterest =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
    } else {
      monthlyPrincipalInterest = principal / totalMonths
    }

    const estimatedTax = (homePrice * 0.0175) / 12 // Cook County avg tax est.
    const estimatedInsurance = (homePrice * 0.0035) / 12
    const totalMonthly = monthlyPrincipalInterest + estimatedTax + estimatedInsurance

    return {
      principalLoan: Math.round(principal),
      monthlyPI: Math.round(monthlyPrincipalInterest),
      monthlyTax: Math.round(estimatedTax),
      monthlyInsurance: Math.round(estimatedInsurance),
      totalMonthly: Math.round(totalMonthly),
    }
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears])

  // Guide Request Form State
  const [guideForm, setGuideForm] = useState({ name: '', email: '', guideType: 'First-Time Homebuyer Guide' })
  const [guideSubmitted, setGuideSubmitted] = useState(false)

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (guideForm.name && guideForm.email) {
      setGuideSubmitted(true)
      setTimeout(() => {
        setGuideSubmitted(false)
        setGuideForm({ name: '', email: '', guideType: 'First-Time Homebuyer Guide' })
      }, 4000)
    }
  }

  const categories = ['All', 'Buying', 'Selling', 'Market Analysis', 'Mortgage & Finance', 'Neighborhood Guides']

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCat = selectedCategory === 'All' || art.category === selectedCategory
      const matchesSearch =
        searchQuery === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCat && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const eyebrowClass =
    'inline-flex items-center justify-center gap-3 text-[12px] sm:text-[13px] font-muli font-bold tracking-[0.3em] uppercase'
  const btnPrimary =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] px-8 py-4 font-muli text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(226,27,34,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(226,27,34,0.45)] hover:brightness-110'

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative flex items-center min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-[#0d0d0d] text-white pt-24 pb-16">
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&auto=format&fit=crop&q=80"
          alt="Real Estate Resources & Calculators"
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
            <i className="fas fa-book-open" /> Real Estate Knowledge Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] sm:text-[54px] md:text-[68px] font-cormorant font-bold leading-[1.08] text-balance"
          >
            Real Estate <span className="text-[#ff6666] italic">Resources & Guides</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-[640px] text-white/90 font-muli text-[16px] md:text-[18px] leading-relaxed"
          >
            Empowering your buying and selling decisions with mortgage calculators, market analytics, neighborhood guides, and expert advice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 max-w-[600px] mx-auto flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-gray-200"
          >
            <i className="fas fa-search text-gray-400 ml-4 text-[16px]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, topics, mortgage tips, or neighborhood..."
              className="w-full px-3 py-3 text-[14px] font-muli text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 text-gray-400 hover:text-gray-700 text-sm font-bold"
              >
                Clear
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ==================== MORTGAGE CALCULATOR SECTION ==================== */}
      <section className="py-16 md:py-24 container mx-auto px-5">
        <div className="max-w-[1100px] mx-auto bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="bg-[#111] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
            <div>
              <span className="text-[12px] font-muli font-bold uppercase tracking-[0.25em] text-[#ff8080]">
                Interactive Tool
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-cormorant font-bold mt-1">
                Mortgage Payment Calculator
              </h2>
            </div>
            <p className="text-[13px] font-muli text-[#aaa] max-w-[400px]">
              Estimate your monthly principal, interest, tax, and insurance payments in real time.
            </p>
          </div>

          <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Home Price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[13px] font-muli font-bold text-gray-800 uppercase">Home Purchase Price</label>
                  <span className="text-[18px] font-cormorant font-bold text-[var(--color-2)]">${homePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={3000000}
                  step={25000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-[var(--color-2)] cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-muli mt-1">
                  <span>$200k</span>
                  <span>$1.5M</span>
                  <span>$3.0M+</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[13px] font-muli font-bold text-gray-800 uppercase">Down Payment ({downPaymentPercent}%)</label>
                  <span className="text-[16px] font-muli font-bold text-gray-900">${(homePrice * (downPaymentPercent / 100)).toLocaleString()}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  {[5, 10, 15, 20, 25, 30].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setDownPaymentPercent(pct)}
                      className={`flex-1 py-2 rounded-xl text-[12px] font-muli font-bold transition-all ${
                        downPaymentPercent === pct
                          ? 'bg-black text-white shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate & Term */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-muli font-bold text-gray-800 uppercase mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="3.0"
                    max="12.0"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[14px] font-muli font-bold text-gray-900 outline-none focus:bg-white focus:border-[var(--color-2)]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-muli font-bold text-gray-800 uppercase mb-2">Loan Term</label>
                  <div className="flex gap-2">
                    {[15, 30].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTermYears(term)}
                        className={`flex-1 py-3 rounded-xl text-[13px] font-muli font-bold transition-all ${
                          loanTermYears === term
                            ? 'bg-gray-900 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {term} Years
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[var(--color-2)] opacity-20 blur-[80px] pointer-events-none" />

              <div>
                <span className="text-[11px] font-muli uppercase tracking-[0.2em] text-[#ff8080]">
                  Estimated Monthly Payment
                </span>
                <div className="text-[42px] sm:text-[50px] font-cormorant font-bold text-white leading-tight mt-1">
                  ${calculatedMortgage.totalMonthly.toLocaleString()}<span className="text-[18px] text-gray-400 font-muli font-normal">/mo</span>
                </div>
              </div>

              {/* Payment Breakdown Bars */}
              <div className="space-y-3 my-6">
                <div className="flex justify-between text-[13px] font-muli">
                  <span className="flex items-center gap-2 text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-[var(--color-2)]" /> Principal & Interest
                  </span>
                  <span className="font-bold text-white">${calculatedMortgage.monthlyPI.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[13px] font-muli">
                  <span className="flex items-center gap-2 text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-blue-500" /> Est. Property Taxes
                  </span>
                  <span className="font-bold text-white">${calculatedMortgage.monthlyTax.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-[13px] font-muli">
                  <span className="flex items-center gap-2 text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-amber-500" /> Est. Home Insurance
                  </span>
                  <span className="font-bold text-white">${calculatedMortgage.monthlyInsurance.toLocaleString()}</span>
                </div>
              </div>

              <Link
                to="/find-a-home"
                className="w-full bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white py-3.5 rounded-xl font-muli text-[12px] font-bold uppercase tracking-wider shadow-md hover:brightness-110 transition-all text-center"
              >
                Search Homes in Your Budget
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ARTICLES & GUIDES GRID ==================== */}
      <section className="py-16 md:py-24 container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className={`${eyebrowClass} text-[var(--color-2)]`}>
              <span className="w-8 h-[2px] bg-[var(--color-2)]" /> Articles & Guides
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-cormorant font-bold text-gray-900 mt-2">
              Expert Real Estate Library
            </h2>
          </div>

          {/* Category Tabs */}
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

        {/* ARTICLES GRID */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-[500px] mx-auto my-8">
            <h3 className="font-cormorant text-[24px] font-bold text-gray-900">No articles found matching "{searchQuery}"</h3>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="mt-4 bg-[var(--color-2)] text-white px-6 py-2.5 rounded-xl text-[13px] font-muli font-bold uppercase"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(226,27,34,0.12)] hover:border-[var(--color-2)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-[220px] overflow-hidden relative bg-gray-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-muli font-medium px-3 py-1 rounded-full border border-white/20">
                      {article.category}
                    </span>
                    {article.downloadable && (
                      <span className="absolute top-4 right-4 bg-[var(--color-2)] text-white text-[11px] font-muli font-bold uppercase px-3 py-1 rounded-full shadow-md">
                        PDF Guide
                      </span>
                    )}
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between text-[12px] font-muli text-gray-400 mb-2">
                      <span>{article.date}</span>
                      <span><i className="far fa-clock mr-1" />{article.readTime}</span>
                    </div>

                    <h3 className="font-cormorant text-[24px] font-bold text-gray-900 leading-snug hover:text-[var(--color-2)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-muli text-[14px] text-gray-600 leading-relaxed mt-2.5 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-gray-100 mt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[11px] font-muli text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="text-[13px] font-muli font-bold text-[var(--color-2)] hover:underline flex items-center gap-1 shrink-0"
                  >
                    Read Guide <i className="fas fa-arrow-right text-[11px]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ==================== FREE GUIDE REQUEST SECTION ==================== */}
      <section className="py-16 md:py-24 bg-[#111] text-white relative overflow-hidden">
        <div className="container mx-auto px-5 relative">
          <div className="max-w-[900px] mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[12px] font-muli font-bold uppercase tracking-[0.25em] text-[#ff8080]">
                  Free Homeowner Kit
                </span>
                <h2 className="text-[30px] sm:text-[40px] font-cormorant font-bold text-white mt-2 leading-tight">
                  Download Free Chicago Buyers & Sellers Guide
                </h2>
                <p className="mt-4 text-[#aaa] font-muli text-[14px] leading-relaxed">
                  Get our comprehensive 2026 Chicago Real Estate PDF packed with closing cost worksheets, neighborhood comparisons, and seller ROI checklists.
                </p>
              </div>

              <form onSubmit={handleGuideSubmit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-muli font-semibold text-gray-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={guideForm.name}
                    onChange={(e) => setGuideForm({ ...guideForm, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-[14px] font-muli outline-none focus:border-[var(--color-2)]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-muli font-semibold text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={guideForm.email}
                    onChange={(e) => setGuideForm({ ...guideForm, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-[14px] font-muli outline-none focus:border-[var(--color-2)]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-muli font-semibold text-gray-300 mb-1">Select Guide</label>
                  <select
                    value={guideForm.guideType}
                    onChange={(e) => setGuideForm({ ...guideForm, guideType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] font-muli outline-none focus:border-[var(--color-2)] cursor-pointer"
                  >
                    <option value="First-Time Homebuyer Guide" className="text-gray-900">First-Time Homebuyer Guide</option>
                    <option value="Seller ROI & Staging Kit" className="text-gray-900">Seller ROI & Staging Kit</option>
                    <option value="2026 Chicago Market Report" className="text-gray-900">2026 Chicago Market Report</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--color-2)] to-[#c0151b] text-white py-3.5 rounded-xl font-muli text-[13px] font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fas fa-download" /> Get Free PDF Guide
                </button>

                {guideSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-green-900/50 text-green-300 border border-green-700/50 text-[13px] font-muli text-center"
                  >
                    Thank you! Your guide has been sent to your email.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FREQUENTLY ASKED QUESTIONS ==================== */}
      <section className="py-16 md:py-24 container mx-auto px-5">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className={`${eyebrowClass} text-[var(--color-2)]`}>
            <span className="w-8 h-[2px] bg-[var(--color-2)]" /> Common Questions
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-cormorant font-bold text-gray-900">
            Real Estate FAQ
          </h2>
          <p className="mt-3 text-[#666] font-muli text-[15px] leading-relaxed">
            Answers to key questions about buying, selling, financing, and closing in Chicago.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-muli font-bold text-[17px] text-gray-900 hover:text-[var(--color-2)] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-red-50 text-[var(--color-2)]' : ''}`}>
                    <i className="fas fa-chevron-down text-[12px]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-[14px] font-muli text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* ==================== ARTICLE MODAL ==================== */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[800px] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <i className="fas fa-times text-lg" />
              </button>

              <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-6">
                <div className="relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden bg-gray-900 mb-6">
                  <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex items-center gap-3 text-[12px] font-muli text-[var(--color-2)] font-bold uppercase tracking-wider">
                  <span>{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2 className="font-cormorant text-[30px] sm:text-[40px] font-bold text-gray-900 leading-tight">
                  {activeArticle.title}
                </h2>

                <p className="font-muli text-[15px] text-gray-700 leading-relaxed font-semibold">
                  {activeArticle.excerpt}
                </p>

                <div className="font-muli text-[14px] text-gray-600 leading-relaxed space-y-4 pt-4 border-t border-gray-100">
                  <p>{activeArticle.content}</p>
                  <p>
                    For detailed advisory tailored to your specific Chicago address or buying timeframe, contact our advisory team today.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/find-a-home"
                    onClick={() => setActiveArticle(null)}
                    className={btnPrimary}
                  >
                    Find A Home Now
                  </Link>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-6 py-3 rounded-xl border border-gray-300 font-muli text-[13px] font-bold text-gray-700 hover:bg-gray-100"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
