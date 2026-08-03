import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ListWithMe from './components/ListWithMe'
import ProvenResults from './components/ProvenResults'
import InnovativeIdeas from './components/InnovativeIdeas'
import FeaturedListings from './components/FeaturedListings'
import Representative from './components/Representative'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
