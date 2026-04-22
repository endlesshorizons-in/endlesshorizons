import { useMemo, useState } from 'react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import Seo from '../components/common/Seo'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import { services } from '../data/services'

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'

  const packageMeta = useMemo(() => {
    if (!activeService) {
      return ''
    }

    const includes = (activeService.servicesIncluded ?? []).join(', ')
    return `${activeService.title} | ${activeService.summary} | Includes: ${includes}`
  }, [activeService])

  const closeModal = () => {
    setActiveService(null)
    setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!activeService) {
      return
    }

    if (formspreeEndpoint.includes('YOUR_FORM_ID')) {
      setStatus({
        type: 'error',
        message: 'Please set VITE_FORMSPREE_ENDPOINT in your .env file before sending inquiries.',
      })
      return
    }

    const formData = new FormData(form)
    formData.append('packageTitle', activeService.title)
    formData.append('packageDuration', activeService.summary)
    formData.append('packageIncludes', (activeService.servicesIncluded ?? []).join(', '))

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: `Your inquiry for ${activeService.title} was sent successfully.`,
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not send your inquiry right now. Please try again in a minute.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageContainer>
      <Seo
        title="Travel Packages"
        description="Browse curated Kashmir and Ladakh travel packages with transparent inclusions, practical planning, and quick inquiry support."
        image={services[0]?.image}
      />
      <SectionHeading
        title="Welcome to Endless Horizons Travel Services"
        subtitle="Operational strength, transparent pricing, and local expertise across every itinerary. Click any package to send an inquiry."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <button
            key={service.title}
            type="button"
            onClick={() => setActiveService(service)}
            className="text-left"
          >
            <Card className="group h-full overflow-hidden border-white/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/60 hover:shadow-[0_18px_30px_rgba(2,8,23,0.4)]">
              <img src={service.image} alt={service.title} loading="lazy" decoding="async" className="h-44 w-full rounded-2xl object-cover" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-cyan-200">Curated Package</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-200">Duration: {service.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(service.servicesIncluded ?? []).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold text-cyan-100/90">Tap to inquire</p>
            </Card>
          </button>
        ))}
      </div>

      {activeService && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-slate-950/75 p-4" onClick={closeModal}>
          <Card
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border-white/35 bg-slate-900/95"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Package Inquiry</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">{activeService.title}</h3>
                <p className="mt-1 text-sm text-slate-200">Duration: {activeService.summary}</p>
              </div>
              <Button variant="secondary" onClick={closeModal}>Close</Button>
            </div>

            <form className="grid gap-3" onSubmit={handleSubmit}>
              <input type="hidden" name="selectedPackage" value={packageMeta} />

              <div className="grid gap-1.5">
                <label htmlFor="inquiry-name" className="text-sm font-semibold text-slate-100">Name</label>
                <input
                  id="inquiry-name"
                  name="name"
                  required
                  className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 outline-none ring-cyan-500 transition focus:ring-2"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-1.5 md:grid-cols-2 md:gap-3">
                <div className="grid gap-1.5">
                  <label htmlFor="inquiry-email" className="text-sm font-semibold text-slate-100">Email</label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 outline-none ring-cyan-500 transition focus:ring-2"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="inquiry-phone" className="text-sm font-semibold text-slate-100">Phone</label>
                  <input
                    id="inquiry-phone"
                    name="phone"
                    required
                    className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 outline-none ring-cyan-500 transition focus:ring-2"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="grid gap-1.5 md:grid-cols-2 md:gap-3">
                <div className="grid gap-1.5">
                  <label htmlFor="inquiry-month" className="text-sm font-semibold text-slate-100">Preferred Month</label>
                  <input
                    id="inquiry-month"
                    name="travelMonth"
                    className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 outline-none ring-cyan-500 transition focus:ring-2"
                    placeholder="e.g. June"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="inquiry-travelers" className="text-sm font-semibold text-slate-100">Travelers</label>
                  <input
                    id="inquiry-travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 outline-none ring-cyan-500 transition focus:ring-2"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="inquiry-message" className="text-sm font-semibold text-slate-100">Message</label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  className="min-h-28 rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 outline-none ring-cyan-500 transition focus:ring-2"
                  placeholder="Any preferences, pickup point, or special requests"
                />
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/5 p-3 text-sm text-slate-200">
                <p className="font-semibold text-white">Package Details</p>
                <p className="mt-1">{activeService.title}</p>
                <p>Duration: {activeService.summary}</p>
                <p>Includes: {(activeService.servicesIncluded ?? []).join(', ')}</p>
              </div>

              {status.message ? (
                <p className={status.type === 'error' ? 'text-sm text-rose-300' : 'text-sm text-emerald-300'}>{status.message}</p>
              ) : null}

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </PageContainer>
  )
}
