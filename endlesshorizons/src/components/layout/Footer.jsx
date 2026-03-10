export default function Footer() {
	return (
		<footer className="mt-12 border-t border-white/20 bg-slate-950/55 backdrop-blur-2xl">
			<div className="mx-auto grid w-[min(1120px,92vw)] gap-6 py-8 md:grid-cols-[1.3fr_1fr_1fr]">
				<div>
					<p className="text-lg font-semibold text-white">Endless Horizons</p>
					<p className="mt-2 max-w-md text-sm text-slate-300">
						Curated journeys across Jammu, Kashmir, and Ladakh with local support,
						practical planning, and memorable routes.
					</p>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</p>
					<div className="mt-3 space-y-2 text-sm text-slate-200">
						<a href="tel:+918888877777" className="flex items-center gap-2 hover:text-white">
							<span aria-hidden="true">📞</span>
							+91 88888 77777
						</a>
						<a href="mailto:hello@endlesshorizons.travel" className="flex items-center gap-2 hover:text-white">
							<span aria-hidden="true">✉️</span>
							hello@endlesshorizons.travel
						</a>
						<p className="flex items-center gap-2">
							<span aria-hidden="true">📍</span>
							Indiranagar, Bengaluru
						</p>
					</div>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-wider text-white/90">Social</p>
					<div className="mt-3 flex flex-wrap gap-2">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white hover:bg-white/20"
						>
							Instagram
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
							className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white hover:bg-white/20"
						>
							Facebook
						</a>
						<a
							href="https://wa.me/918888877777"
							target="_blank"
							rel="noreferrer"
							aria-label="WhatsApp"
							className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white hover:bg-white/20"
						>
							WhatsApp
						</a>
					</div>
				</div>
			</div>

			<div className="border-t border-white/15">
				<div className="mx-auto flex w-[min(1120px,92vw)] flex-wrap items-center justify-between gap-2 py-4 text-xs text-slate-300">
					<span>© {new Date().getFullYear()} Endless Horizons. All rights reserved.</span>
					<span>Serenity in every step.</span>
				</div>
			</div>
		</footer>
	)
}