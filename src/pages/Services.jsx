import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import DestinationCard from '../components/portfolio/DestinationCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <PageContainer>
      <SectionHeading
        title="Welcome to Endless Horizons Travel Services"
        subtitle="Operational strength, transparent pricing, and local expertise across every itinerary."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <DestinationCard
            key={service.title}
            destination={{
              name: service.title,
              region: 'Curated Package',
              description: `Duration: ${service.summary}`,
              duration: service.summary,
              bestSeason: 'All seasons',
              image: service.image,
              highlights: service.servicesIncluded ?? [],
            }}
          />
        ))}
      </div>
    </PageContainer>
  )
}
