import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import reactIcon from '../assets/react.svg'
import logo from '../assets/icons/Logo.png'
import forestImage from '../assets/images/Forest.jpg'
import gulmargImage from '../assets/images/Gulmarg.jpg'
import mountainsImage from '../assets/images/Mountains.jpg'
import srinagarImage from '../assets/images/Srinagar scapes.jpg'
import Card from '../components/common/Card'

export default function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      const value = total > 0 ? Math.min(window.scrollY / total, 1) : 0
      setProgress(value)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const lift = progress * 42

  return (
    <>
      <section className="mx-auto mt-8 w-[min(1120px,92vw)]">
        <div className="grid min-h-[65vh] items-start gap-10 md:grid-cols-[0.5fr_1.1fr]">
          <div className="md:sticky md:top-24">
            <p className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Serenity In Every Step
            </p>
            <h1 className="mt-5 max-w-lg text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Kashmir,
              <br />
              <span className="italic font-light opacity-90">as it was</span>
              <br />
              meant to be seen.
            </h1>
            <p className="mt-5 max-w-sm text-base text-slate-200">
              Explore Jammu, Kashmir, and Ladakh with curated routes, safe
              travel, and local-first planning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/intake"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Start Intake
              </Link>
              <Link
                to="/portfolio"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <Card
              lift
              className="overflow-hidden"
              style={{ transform: `translateY(${6 - lift}px)` }}
            >
              <img
                src={mountainsImage}
                alt="Snow-capped mountains"
                className="h-72 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-slate-100">
                  Jammu | Kashmir | Ladakh
                </p>
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card
                lift
                className="overflow-hidden"
                style={{ transform: `translateY(${18 - lift * 0.75}px)` }}
              >
                <img
                  src={forestImage}
                  alt="Forest path"
                  className="h-56 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-sm text-slate-100">
                  Pahalgam Forest Trails
                </p>
              </Card>

              <Card
                lift
                className="overflow-hidden"
                style={{ transform: `translateY(${18 - lift * 0.65}px)` }}
              >
                <img
                  src={gulmargImage}
                  alt="Gulmarg valley"
                  className="h-56 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-sm text-slate-100">
                  Gulmarg Snow Routes
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-[min(1120px,92vw)]">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <Card
            className="overflow-hidden"
            style={{ transform: `translateY(${22 - lift * 0.45}px)` }}
          >
            <img
              src={srinagarImage}
              alt="Srinagar landscape"
              className="h-72 w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-semibold text-white">
                Srinagar Scapes
              </h2>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-slate-100">
                Featured destination
              </span>
            </div>
          </Card>

          <Card className="flex flex-col justify-between">
            <div>
              <img
                src={logo}
                alt="Endless Horizons symbol"
                className="h-14 w-14 rounded-full bg-white/85 p-1"
              />
              <p className="mt-5 text-base text-slate-200">
                Popular tours, trusted drivers, and transparent package flow
                from first call to return journey.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Talk to us
            </Link>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[min(1120px,92vw)] pb-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-4xl font-semibold text-white">01</p>
            <p className="mt-2 text-slate-200">Share your dates</p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-4xl font-semibold text-white">02</p>
            <p className="mt-2 text-slate-200">Get your route plan</p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-4xl font-semibold text-white">03</p>
            <p className="mt-2 text-slate-200">Travel with support</p>
          </div>
        </div>
      </section>
    </>
  );
}
