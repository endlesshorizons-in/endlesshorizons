import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { assetUrl } from './lib/assetUrls'
import { appRoutes } from './lib/routes'

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
            {appRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
