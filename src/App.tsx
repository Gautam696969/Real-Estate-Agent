import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ListWithMe from './components/ListWithMe'
import FindAHome from './components/FindAHome'
import AboutUs from './components/AboutUs'
import ProvenResults from './components/ProvenResults'
import InnovativeIdeas from './components/InnovativeIdeas'
import FeaturedListings from './components/FeaturedListings'
import Representative from './components/Representative'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsApp'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    html.style.scrollBehavior = prev
  }, [pathname])

  return null
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`go-up fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-gradient-to-br from-[var(--color-2)] to-[#c0151b] text-white rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.3)] z-[99] transition-all duration-300 text-2xl hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(226,27,34,0.5)] border-none cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
    >
      <i className="fa fa-angle-double-up" />
    </button>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProvenResults />
      <InnovativeIdeas />
      <FeaturedListings />
      <Representative />
      <Testimonials />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-with-me" element={<ListWithMe />} />
        <Route path="/find-a-home" element={<FindAHome />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
      <WhatsAppButton/>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
