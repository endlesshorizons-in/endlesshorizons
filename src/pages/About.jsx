import Card from '../components/common/Card'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'

export default function About() {
  return (
    <>
      <PageContainer>
        <SectionHeading
          eyebrow="About Endless Horizons"
          title="Welcome to ENDLESS HORIZONS your host in the valley"
          subtitle="Trusted local guidance for comfortable, personalized, and memorable Kashmir journeys."
        />

        <Card>
          <h3 className="text-2xl font-semibold text-white">About Us</h3>
          <p className="mt-3 text-slate-200">
            Welcome to our Kashmir travel family. We are delighted to help you discover the breathtaking beauty of Kashmir, often called the Paradise on Earth.
          </p>
          <p className="mt-2 text-slate-200">
            From the peaceful waters of Dal Lake to the stunning valleys of Gulmarg, Pahalgam, Gurez, and Sonamarg, every journey here is filled with unforgettable moments.
          </p>
          <p className="mt-2 text-slate-200">
            Whether you are planning a family vacation, honeymoon, or adventure trip, we are here to make your Kashmir journey smooth, safe, and truly special.
          </p>
        </Card>
      </PageContainer>

      <section className="mx-auto my-10 grid w-[min(1120px,92vw)] gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-2xl font-semibold text-white">Our Approach</h3>
          <p className="mt-2 text-slate-200">
            Every plan starts with your pace, budget, and comfort level. Then we map the best valley sequence, season fit, and stay options.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-slate-200">
            <li>Local-ground partner network</li>
            <li>Clear package inclusions and exclusions</li>
            <li>Practical day-by-day movement planning</li>
          </ul>
        </Card>
        <Card>
          <h3 className="text-2xl font-semibold text-white">Who Travels With Us</h3>
          <p className="mt-2 text-slate-200">
            Families, honeymooners, corporate groups, and solo travelers looking for hassle-free Kashmir circuits.
          </p>
          <p className="mt-2 text-slate-200">
            From airport pickup to final drop, we focus on smooth execution and responsive support.
          </p>
        </Card>
      </section>
    </>
  )
}
