import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/common/Card'
import Seo from '../components/common/Seo'
import { assetUrl } from '../lib/assetUrls'
import { ROUTE_PATHS } from '../lib/routes'
import { destinations } from '../data/destinations'

export default function Home() {
  const [progress, setProgress] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const slideTimer = setInterval(() => {
      setCurrentSlide(i => (i + 1) % destinations.length)
    }, 3500)
    return () => clearInterval(slideTimer)
  }, [isPaused])

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
      <Seo
        title="Kashmir Travel Planning"
        description="Plan curated Kashmir, Jammu, and Ladakh journeys with local guides, transparent itineraries, and responsive support from Endless Horizons."
        image={assetUrl('Mountains.jpg')}
      />
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
                to={ROUTE_PATHS.DESTINATIONS}
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
                src={assetUrl('Mountains.jpg')}
                alt="Snow-capped mountains"
                loading="eager"
                decoding="async"
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
                  src={assetUrl('Forest.jpg')}
                  alt="Forest path"
                  loading="lazy"
                  decoding="async"
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
                  src={assetUrl('Gulmarg.jpg')}
                  alt="Gulmarg valley"
                  loading="lazy"
                  decoding="async"
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
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Why Endless Horizons
        </p>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <Card
            className="overflow-hidden"
            style={{ transform: `translateY(${22 - lift * 0.45}px)` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Image slider */}
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {destinations.map((dest) => (
                  <img
                    key={dest.name}
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    decoding="async"
                    className="h-72 w-full shrink-0 object-cover"
                  />
                ))}
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Featured destination
              </span>
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-0 flex w-full justify-center gap-1.5">
                {destinations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Destination info */}
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                {destinations[currentSlide].region}
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                {destinations[currentSlide].name}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {destinations[currentSlide].description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {destinations[currentSlide].highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-2.5 py-1 text-xs text-slate-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <Card className="flex flex-col justify-between"
            style={{ transform: `translateY(${22 - lift * 0.45}px)` }}
          >
            <div>
              <img
                src={assetUrl('Logo.png')}
                alt="Endless Horizons symbol"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-full bg-white/85 p-1"
              />
              <p className="mt-5 text-base font-semibold text-white">
                Local knowledge. Transparent planning.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Every route is designed by people who live here — no cookie-cutter packages,
                no hidden costs, and a single point of contact from booking to return.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { value: '20+', label: 'Trips done' },
                  { value: '1 yr', label: 'Operating' },
                  { value: '100%', label: 'Local guides' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/[0.07] px-3 py-3 text-center"
                  >
                    <p className="text-lg font-bold text-white">{value}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="https://wa.me/919149431835"
              className="mt-8 inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Talk to us
            </Link>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-24 w-[min(1120px,92vw)] pb-6">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          Your Journey
        </p>
        <div className="relative">
          {/* Road strip — desktop */}
          <div className="pointer-events-none absolute inset-x-0 top-1.5 hidden h-8 overflow-hidden rounded-full md:block">
            <div className="absolute inset-0 bg-white/[0.07]" />
            <div className="absolute inset-x-0 top-0 h-px bg-white/25" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
            <div className="absolute inset-y-0 flex w-full items-center px-24">
              <div className="w-full border-t-2 border-dashed border-white/20" />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              { num: '01', title: 'Share your dates and routes', desc: 'Tell us your preferred dates, group size, and the regions you want to explore.' },
              { num: '02', title: 'Get your route plan', desc: 'We craft a bespoke itinerary with hand-picked stays and local-first logistics.' },
              { num: '03', title: 'Travel with support', desc: 'Your dedicated local team is with you from first call to return journey.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex flex-row items-start gap-4 md:flex-col md:items-center">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-slate-900/70 text-sm font-bold text-white shadow-[0_0_0_5px_rgba(255,255,255,0.04)] backdrop-blur-md">
                  {num}
                </div>
                <div className="hidden h-5 w-px bg-linear-to-b from-white/25 to-transparent md:block" />
                <div className="flex-1 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:w-full md:text-center">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-slate-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
