import Button from '../components/common/Button'
import Card from '../components/common/Card'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'

export default function Contact() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Contact"
        title="Let Us Start Planning"
        subtitle="Share your travel idea and our team will connect shortly."
      />

      <div className="grid w-full gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-2xl font-semibold text-green-100">Reach Us</h3>
          <p className="mt-2">
            Email: 
            <br />
            Phone: +91 9149431835
            <br />
            Office: Kalantra Baramulla, Jammu & Kashmir
          </p>
          <p className="mt-2 text-sm">24 * 7 Support</p>
        </Card>
        <Card>
          <form className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-semibold text-slate-700">
                Name
              </label>
              <input
                id="contact-name"
                placeholder="Your name"
                className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@email.com"
                className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Tell us what kind of trip you are planning"
                className="min-h-28 rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
              />
            </div>
            <Button variant="primary">Send Message</Button>
          </form>
        </Card>
      </div>
    </PageContainer>
  )
}
