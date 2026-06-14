import Seo from '../components/common/Seo'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import { assetUrl } from '../lib/assetUrls'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../lib/routes'

export default function About() {
  const [isCertificateExpanded, setIsCertificateExpanded] = useState(false)

  const certificateDetails = [
    { label: 'Agency', value: 'Endless Horizons' },
    { label: 'Registration No.', value: 'JKEA00005744' },
    { label: 'Registration Date', value: '09/02/2026' },
    { label: 'Proprietor', value: 'Arfat Rehman Lone' },
  ]

  return (
    <>
      <Seo
        title="About Endless Horizons"
        description="Learn how Endless Horizons plans Kashmir journeys with local expertise, official registration, and a clear, traveler-first approach."
        image={assetUrl('certificate.png')}
      />
      <PageContainer>
        <SectionHeading
          eyebrow="About Endless Horizons"
          title="Welcome to Endless Horizons - Your host for unforgettable journeys"
          subtitle="Trusted local guidance, clear planning, and official registration with the Department of Tourism, Government of Jammu and Kashmir."
        />

        <div>
          <section className="rounded-2xl border border-white/15 bg-white/7 p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">About Us</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Personalized travel, built around your pace</h3>
            <p className="mt-4 text-slate-200">
              We design Kashmir itineraries that feel calm, practical, and well supported from arrival to drop-off.
            </p>
            <p className="mt-3 text-slate-200">
              Our focus is simple: clean planning, reliable coordination, and routes that match the season, budget, and comfort level of each traveler.
            </p>
            <p className="mt-3 text-slate-200">
              We are a government-registered Excursion Agency dedicated to showcasing the true beauty of Jammu, Kashmir, Ladakh, Manali and beyond. Unlike distant booking portals, we are locals who know every turn of the road to Gulmarg and every hidden gem in Pahalgam.
            </p>
            <p className="mt-3 text-slate-200">
              From first inquiry to final drop-off, we stay involved at every stage of your journey. We help you choose the right route sequence, realistic day plans, and stay options that match your expectations instead of overselling impractical schedules.
            </p>
            <p className="mt-3 text-slate-200">
              Our team is based on the ground, so decisions are made with real local context: road movement, weather shifts, seasonal crowd flow, and what actually works for families, couples, and group travelers.
            </p>
            <p className="mt-3 text-slate-200">
              The result is an all-inclusive travel experience that balances comfort, local authenticity, and dependable support so your Kashmir journey feels smooth, memorable, and worry-free.
            </p>
          </section>
        </div>
      </PageContainer>

      <section className="mx-auto my-14 w-[min(1120px,92vw)]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Our Approach</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">Clear planning that flows from inquiry to return</h3>
          <p className="mt-4 text-slate-200">
            Every plan starts with your pace, budget, and comfort level. Then we map the best valley sequence, season fit, and stay options.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {[
            {
              title: '24/7 On-Ground Support',
              text: 'We are here physically. If a road to Sonamarg gets closed due to snow, we are the first to know and re-route you immediately.',
            },
            {
              title: 'No Middlemen',
              text: 'You are booking directly with the ground handling agency, ensuring the best rates for hotels and transport.',
            },
            {
              title: 'Authentic Experiences',
              text: 'We do not just show you places; we help you experience the culture, food (Wazwan), and hospitality of J and K.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/15 bg-white/8 p-5 md:p-6">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto my-14 w-[min(1120px,92vw)]">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 md:p-8">
          <h3 className="text-3xl font-semibold text-white">Safe & Honourable Tourism</h3>
          <p className="mt-4 text-slate-200">
            J and K Tourism places high value on safety and ethics.
          </p>
          <p className="mt-3 text-slate-200">
            The Pledge: We are committed to the safety and security of our guests. Our drivers are verified, our guides are registered, and we strictly follow all J and K Tourism safety guidelines.
          </p>
          <p className="mt-3 text-slate-200">
            Eco-Tourism Note: We pledge to keep Kashmir clean. We encourage eco-friendly travel practices.
          </p>

          <div className="mt-8 border-t border-white/15 pt-6">
            <h4 className="text-2xl font-semibold text-white">Who Travels With Us</h4>
            <p className="mt-3 text-slate-200">
              From families and honeymooners to solo explorers and corporate groups, we host travelers looking for memorable journeys across Kashmir, Ladakh, Manali and beyond.
            </p>
            <p className="mt-3 text-slate-200">
              With end-to-end support, we ensure every trip is smooth, comfortable, and truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-14 w-[min(1120px,92vw)]">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 md:p-8">
          <button
            type="button"
            onClick={() => setIsCertificateExpanded((current) => !current)}
            className="flex w-full items-center justify-between gap-3 text-left"
            aria-expanded={isCertificateExpanded}
            aria-controls="certificate-panel"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Government Authorized & Recognized</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Department of Tourism certificate</h3>
            </div>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
              {isCertificateExpanded ? 'Hide' : 'View'}
            </span>
          </button>

          <div
            id="certificate-panel"
            className={`overflow-hidden transition-all duration-300 ${isCertificateExpanded ? 'mt-5 max-h-300 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-black/10 p-2">
              <img
                src={assetUrl('certificate.png')}
                alt="Department of Tourism registration certificate"
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

            <p className="mt-4 text-sm text-slate-200">
              Department of Tourism, Government of Jammu and Kashmir. Form VI registration certificate for Endless Horizons.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {certificateDetails.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-100/90">{item.label}</p>
                  <p className="mt-1 text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-14 w-[min(1120px,92vw)] text-center">
        <p className="text-xl font-bold text-white">Ready to plan a safe and memorable trip?</p>
        <Link
          to={ROUTE_PATHS.CONTACT}
          className="mt-4 inline-flex rounded-full bg-linear-to-r from-cyan-900 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-[0_9px_18px_rgba(8,47,73,0.24)] transition hover:brightness-105"
        >
          Contact Our Team
        </Link>
      </section>
    </>
  )
}
