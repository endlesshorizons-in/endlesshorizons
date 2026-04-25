import Card from '../components/common/Card'
import Seo from '../components/common/Seo'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import { assetUrl } from '../lib/assetUrls'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../lib/routes'

export default function About() {
  const [isCertificateFlipped, setIsCertificateFlipped] = useState(false)

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

        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/25 bg-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">About Us</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Personalized travel, built around your pace</h3>
            <p className="mt-3 text-slate-200">
              We design Kashmir itineraries that feel calm, practical, and well supported from arrival to drop-off.
            </p>
            <p className="mt-2 text-slate-200">
              Our focus is simple: clean planning, reliable coordination, and routes that match the season, budget, and comfort level of each traveler.
            </p>
            <p className="mt-2 text-slate-200">
              We are a government-registered Excursion Agency dedicated to showcasing the true beauty of Jammu, Kashmir, Ladakh and Manali. Unlike distant booking portals, we are locals who know every turn of the road to Gulmarg and every hidden gem in Pahalgam.
            </p>
          </Card>

          <button
            type="button"
            onClick={() => setIsCertificateFlipped((current) => !current)}
            className="group relative min-h-130 w-full text-left perspective-[1600px]"
            aria-pressed={isCertificateFlipped}
            aria-label="Flip registration certificate card"
          >
            <div
              className="relative h-full min-h-130 w-full transform-3d transition-transform duration-700"
              style={{ transform: isCertificateFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              <Card
                className="absolute inset-0 border-white/25 bg-white/10"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className="flex h-full min-h-120 flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Certificate View</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">Tap to view details</h3>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
                      Registered
                    </span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-3xl border border-white/20 bg-black/10 p-2">
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
                </div>
              </Card>

              <Card
                className="absolute inset-0 border-white/25 bg-white/10"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div className="flex h-full min-h-120 flex-col">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Registration</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Department of Tourism certificate</h3>
                    <p className="mt-3 text-sm text-slate-200">
                      Registered under the Jammu and Kashmir Tourist Trade Act, 1978/82/2011 as an Excursion Agent.
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cyan-100/90">
                      Click to return to the certificate image
                    </p>
                  </div>

                  <div className="mt-5 grid flex-1 content-start gap-3 sm:grid-cols-2">
                    {certificateDetails.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-3">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-100/90">{item.label}</p>
                        <p className="mt-1 text-sm text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </button>
        </div>
      </PageContainer>

      <section className="mx-auto my-10 grid w-[min(1120px,92vw)] gap-4 md:grid-cols-2">
        <Card className="border-white/25 bg-white/10">
          <h3 className="text-2xl font-semibold text-white">Our Approach</h3>
          <p className="mt-2 text-slate-200">
            Every plan starts with your pace, budget, and comfort level. Then we map the best valley sequence, season fit, and stay options.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-slate-200">
            <li>Local-ground partner network</li>
            <li>Clear package inclusions and exclusions</li>
            <li>Practical day-by-day movement planning</li>
            <li>
              24/7 On-Ground Support: We are here physically. If a road to Sonamarg gets closed due to snow, we are the first to know and re-route you immediately.
            </li>
            <li>
              No Middlemen: You are booking directly with the ground handling agency, ensuring the best rates for hotels and transport.
            </li>
            <li>
              Authentic Experiences: We do not just show you places; we help you experience the culture, food (Wazwan), and hospitality of J and K.
            </li>
          </ul>
        </Card>
        <Card className="border-white/25 bg-white/10">
          <h3 className="text-2xl font-semibold text-white">Safe & Honourable Tourism</h3>
          <p className="mt-2 text-slate-200">
            J and K Tourism places high value on safety and ethics.
          </p>
          <p className="mt-2 text-slate-200">
            The Pledge: We are committed to the safety and security of our guests. Our drivers are verified, our guides are registered, and we strictly follow all J and K Tourism safety guidelines.
          </p>
          <p className="mt-2 text-slate-200">
            Eco-Tourism Note: We pledge to keep Kashmir clean. We encourage eco-friendly travel practices.
          </p>
          <h3 className="mt-5 text-2xl font-semibold text-white">Who Travels With Us</h3>
          <p className="mt-2 text-slate-200">
            From families and honeymooners to solo explorers and corporate groups, we host travelers looking for memorable journeys across Kashmir, Ladakh, Manali and beyond.
          </p>
          <p className="mt-2 text-slate-200">
            With end-to-end support, we ensure every trip is smooth, comfortable, and truly unforgettable.
          </p>
        </Card>
      </section>

      <section className="mx-auto mb-12 w-[min(1120px,92vw)] text-center">
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
