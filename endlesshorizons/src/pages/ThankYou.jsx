import { Link, useLocation } from 'react-router-dom'
import Card from '../components/common/Card'
import PageContainer from '../components/layout/PageContainer'

export default function ThankYou() {
  const location = useLocation()
  const leadId = location.state?.leadId

  return (
    <PageContainer>
      <Card>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">
          Request Received
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Thank You For Sharing Your Travel Preferences
        </h2>
        <p className="mt-2 text-slate-600">
          Our itinerary designers will review your details and reach out with a
          personalized first draft.
        </p>
        {leadId ? <p className="mt-2 text-slate-700"><strong>Reference:</strong> {leadId}</p> : null}
        <Link
          to="/"
          className="mt-3 inline-block rounded-full bg-teal-50 px-4 py-3 text-sm font-bold text-teal-900 transition hover:bg-teal-100"
        >
          Back To Home
        </Link>
      </Card>
    </PageContainer>
  )
}
