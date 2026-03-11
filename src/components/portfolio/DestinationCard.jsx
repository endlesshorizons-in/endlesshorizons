import Card from '../common/Card'

export default function DestinationCard({ destination }) {
	return (
		<Card className="group relative overflow-hidden transition duration-300 md:hover:z-20 md:hover:-translate-y-2 md:hover:scale-[1.02] md:hover:shadow-[0_24px_40px_rgba(2,8,23,0.45)]">
			<img
				src={destination.image}
				alt={destination.name}
				className="h-44 w-full rounded-2xl object-cover"
			/>
			<div className="mt-3 flex flex-wrap gap-2 mb-2">
				<span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] text-slate-100">
					{destination.duration}
				</span>
				<span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] text-slate-100">
					Best: {destination.bestSeason}
				</span>
			</div>
			<p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-200">
				{destination.region}
			</p>
			<h3 className="mb-2 text-xl font-semibold text-white">{destination.name}</h3>
			<div className="overflow-hidden transition-all duration-300 md:max-h-0 md:translate-y-2 md:opacity-0 md:delay-75 md:group-hover:max-h-64 md:group-hover:translate-y-0 md:group-hover:opacity-100">
				<p className="mb-2 text-slate-200">{destination.description}</p>
				<p className="mb-1 text-slate-100">
					<strong>Ideal For:</strong> {destination.idealFor}
				</p>
				{destination.priceRange && (
					<p className="text-slate-100">
						<strong>Starting From:</strong> {destination.priceRange}
					</p>
				)}
				<ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-200">
					{destination.highlights.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
		</Card>
	)
}