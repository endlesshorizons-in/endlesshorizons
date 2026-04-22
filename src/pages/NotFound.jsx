import { Link } from 'react-router-dom'
import Card from '../components/common/Card'
import Seo from '../components/common/Seo'
import PageContainer from '../components/layout/PageContainer'
import { ROUTE_PATHS } from '../lib/routes'

export default function NotFound() {
  return (
    <PageContainer>
      <Seo title="Page Not Found" description="The requested page is not available on Endless Horizons." noIndex />
      <Card>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">404</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">This Route Is Off The Map</h2>
        <p className="mt-2 text-slate-600">The page you are looking for does not exist in this itinerary.</p>
        <Link
          to={ROUTE_PATHS.HOME}
          className="mt-3 inline-block rounded-full bg-gradient-to-r from-cyan-900 to-teal-600 px-4 py-3 text-sm font-bold text-white shadow-[0_9px_18px_rgba(8,47,73,0.24)] transition hover:brightness-105"
        >
          Return Home
        </Link>
      </Card>
    </PageContainer>
  )
}
