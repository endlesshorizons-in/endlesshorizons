import SectionHeading from '../components/common/SectionHeading'
import Seo from '../components/common/Seo'
import PageContainer from '../components/layout/PageContainer'
import IntakeForm from '../components/intake/IntakeForm'

export default function Intake() {
  return (
    <PageContainer>
      <Seo
        title="Trip Intake"
        description="Share your travel details through a guided intake form so Endless Horizons can draft a first itinerary concept."
      />
      <SectionHeading
        eyebrow="Customer Intake"
        title="Tell Us About Your Dream Trip"
        subtitle="Answer a few guided questions so we can design a first itinerary concept."
      />
      <IntakeForm />
    </PageContainer>
  )
}
