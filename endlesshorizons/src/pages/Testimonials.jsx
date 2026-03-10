import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import TestimonialCard from '../components/portfolio/TestimonialCard'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="What Our Customers Say"
        title="Traveler Stories From The Valley"
        subtitle="Real feedback from families, couples, and solo travelers who explored Kashmir with us."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </PageContainer>
  )
}
