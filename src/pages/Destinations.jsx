import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'
import DestinationMosaic from '../components/portfolio/DestinationMosaic'
import { destinationGallery, destinations } from '../data/destinations'

export default function Destinations() {
  return (
    <PageContainer>
      <SectionHeading
        eyebrow="Featured Destinations"
        title="Explore The Valley Highlights"
        subtitle="From lakes and meadows to glacier viewpoints, pick the route that fits your season."
      />
      <div className="flex flex-col gap-4">
        <DestinationMosaic destinations={destinations.slice(0, 3)} />
        <DestinationMosaic destinations={destinations.slice(3)} />
      </div>

      <section className="mt-8">
        <SectionHeading
          eyebrow="More Views"
          title="Extra Scenic Corners"
          subtitle="A few more snapshots from your possible route map."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {destinationGallery.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-md"
            >
              <img src={item.image} alt={item.name} className="h-52 w-full rounded-2xl object-cover" />
              <p className="mt-2 text-sm text-slate-100">{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
