export default function SectionHeading({ eyebrow, title, subtitle }) {
	return (
		<div className="mb-5">
			{eyebrow ? (
				<span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-100">
					{eyebrow}
				</span>
			) : null}
			<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
				{title}
			</h2>
			{subtitle ? <p className="mt-2 ml-2 max-w-4xl text-slate-200  ">{subtitle}</p> : null}
		</div>
	)
}