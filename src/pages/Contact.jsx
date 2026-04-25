import { useState } from 'react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import Seo from '../components/common/Seo'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_QUERY_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (formspreeEndpoint.includes('YOUR_FORM_ID')) {
      setStatus({
        type: 'error',
        message: 'Please set VITE_FORMSPREE_ENDPOINT in your .env file before sending messages.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Your message was sent successfully. We will get back to you soon.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not send your message right now. Please try again in a minute.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageContainer>
      <Seo
        title="Contact"
        description="Start planning your Kashmir trip with Endless Horizons. Share your dates, route ideas, and group details, and the team will respond shortly."
      />
      <SectionHeading
        eyebrow="Contact"
        title="Let Us Start Planning"
        subtitle="Share your travel idea and our team will connect shortly."
      />

      <div className="grid w-full gap-4 md:grid-cols-2">
        <Card className="border-white/25 bg-white/10">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Reach Us</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Direct planning support</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <p>
              <span className="text-slate-100/80">Email:</span> endlesshorizons19@gmail.com
            </p>
            <p>
              <span className="text-slate-100/80">Phone:</span> +91 9149431835
            </p>
            <p>
              <span className="text-slate-100/80">Office:</span> Kalantra Baramulla, Jammu & Kashmir
            </p>
          </div>
          <div className="mt-5 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-100">
            24/7 Support
          </div>
        </Card>

        <Card className="border-white/25 bg-white/10">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-semibold text-slate-100">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                placeholder="Your name"
                className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none ring-cyan-500 transition focus:ring-2"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-semibold text-slate-100">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none ring-cyan-500 transition focus:ring-2"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-semibold text-slate-100">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Tell us what kind of trip you are planning"
                className="min-h-28 rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none ring-cyan-500 transition focus:ring-2"
              />
            </div>
            {status.message ? (
              <p className={status.type === 'error' ? 'text-sm text-rose-300' : 'text-sm text-emerald-300'}>
                {status.message}
              </p>
            ) : null}
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </div>
    </PageContainer>
  )
}
