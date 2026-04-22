import SectionHeading from '../components/common/SectionHeading'
import Seo from '../components/common/Seo'
import PageContainer from '../components/layout/PageContainer'
import DestinationMosaic from '../components/portfolio/DestinationMosaic'
import { destinationGallery, destinations } from '../data/destinations'

export default function Destinations() {
  const destinationChunks = []

  for (let i = 0; i < destinations.length; i += 3) {
    destinationChunks.push(destinations.slice(i, i + 3))
  }

  return (
    <PageContainer>
      <Seo
        title="Destinations"
        description="Explore handpicked Kashmir destination highlights, scenic route ideas, and the places travelers ask for most."
        image={destinationGallery[0]?.image}
      />
      <SectionHeading
        eyebrow="Featured Destinations"
        title="Explore Official Tourist Highlights"
        subtitle="Handpicked place notes are based on official Divisional Commissioner Kashmir tourism listings."
      />
      <div className="flex flex-col gap-4">
        {destinationChunks.map((chunk) => (
          <DestinationMosaic key={chunk.map((item) => item.name).join('-')} destinations={chunk} />
        ))}
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
              <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-52 w-full rounded-2xl object-cover" />
              <p className="mt-2 text-sm text-slate-100">{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
