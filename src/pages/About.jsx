import Card from '../components/common/Card'
import SectionHeading from '../components/common/SectionHeading'
import PageContainer from '../components/layout/PageContainer'

export default function About() {
  return (
    <>
      <PageContainer>
        <SectionHeading
          eyebrow="About Endless Horizons"
          title="Mountain Journeys Planned With Local Insight"
          subtitle="We design routes across Jammu, Kashmir, and Ladakh with comfort, safety, and clarity in mind."
        />
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
