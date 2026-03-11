import Card from '../components/common/Card'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import { services } from '../data/services'

export default function Services() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Why Choose Us"
        title="What Makes Our Routes Reliable"
        subtitle="Operational strength, transparent pricing, and local expertise across every itinerary."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} lift>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-slate-200">{service.summary}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  )
}
