import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Destinations from './pages/Destinations'
import Home from './pages/Home'
import Intake from './pages/Intake'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import ThankYou from './pages/ThankYou'
import { assetUrl } from './lib/assetUrls'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <BrowserRouter>
      <div
        className="flex min-h-screen flex-col text-slate-100"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 20, 27, 0.64), rgba(7, 20, 27, 0.72)), url(${assetUrl('Background.jpg')})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: `center ${-scrollY * 0.08}px`,
        }}
      >
        <Navbar />
        <main className="flex-1 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/intake" element={<Intake />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
