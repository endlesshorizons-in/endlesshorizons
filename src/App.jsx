import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FloatingContactButtons from './components/layout/FloatingContactButtons'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { assetUrl } from './lib/assetUrls'
import { appRoutes } from './lib/routes'

function App() {
  const [isDesktopViewport, setIsDesktopViewport] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return window.matchMedia('(min-width: 768px)').matches
  })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const onMediaChange = (event) => {
      setIsDesktopViewport(event.matches)
    }

    setIsDesktopViewport(mediaQuery.matches)
    mediaQuery.addEventListener('change', onMediaChange)

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange)
    }
  }, [])

  useEffect(() => {
    if (!isDesktopViewport) {
      setScrollY(0)
      return
    }

    let rafId = null
    const onScroll = () => {
      if (rafId !== null) {
        return
      }

      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        rafId = null
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [isDesktopViewport])

  return (
    <BrowserRouter>
      <div
        className="flex min-h-screen flex-col text-slate-100"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 20, 27, 0.64), rgba(7, 20, 27, 0.72)), url(${assetUrl('Background.jpg')})`,
          backgroundSize: 'cover',
          backgroundAttachment: isDesktopViewport ? 'fixed' : 'scroll',
          backgroundPosition: isDesktopViewport ? `center ${-scrollY * 0.08}px` : 'center center',
        }}
      >
        <Navbar />
        <main className="flex-1 pb-8">
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <FloatingContactButtons />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
