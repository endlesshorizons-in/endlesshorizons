import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import IntakeForm from '../components/intake/IntakeForm'

export default function Intake() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Customer Intake"
        title="Tell Us About Your Dream Trip"
        subtitle="Answer a few guided questions so we can design a first itinerary concept."
      />
      <IntakeForm />
    </PageContainer>
  )
}
