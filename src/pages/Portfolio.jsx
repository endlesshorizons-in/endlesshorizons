import SectionHeading from '../components/common/SectionHeading'
import Seo from '../components/common/Seo'
import DestinationCard from '../components/portfolio/DestinationCard'
import TestimonialCard from '../components/portfolio/TestimonialCard'
import { destinations } from '../data/destinations'
import { testimonials } from '../data/testimonials'

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="See the most booked Kashmir route ideas and traveler feedback that show how Endless Horizons plans memorable trips."
        image={destinations[0]?.image}
      />
      <section className="mx-auto my-10 w-[min(1120px,92vw)]">
        <SectionHeading
          eyebrow="Popular Tours"
          title="Most Booked Route Ideas"
          subtitle="Short breaks, family packages, and extended valley circuits curated for comfort and flow."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </section>

      <section className="mx-auto my-10 w-[min(1120px,92vw)]">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="How The Experience Felt"
          subtitle="What travelers loved most: smooth coordination, safe travel, and memorable routes."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  )
}
