import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_NUMBER, CONTACT_WHATSAPP_URL } from '../../lib/constants'

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
						<a href={`tel:${CONTACT_PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-white">
							<span aria-hidden="true">📞</span>
							{CONTACT_PHONE_DISPLAY}
						</a>
						<a href="mailto:endlesshorizons19@gmail.com" className="flex items-center gap-2 hover:text-white">
							<span aria-hidden="true">✉️</span>
							endlesshorizons19@gmail.com
						</a>
						<p className="flex items-center gap-2">
							<span aria-hidden="true">📍</span>
							Kalantra Baramulla, Jammu & Kashmir
						</p>
					</div>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-wider text-white/90">Social</p>
					<div className="mt-3 flex gap-3">
						<a
							href="https://www.instagram.com/endless.horizons__/"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
						>
							{/* Instagram */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
							</svg>
						</a>
						<a
							href="https://www.facebook.com/share/1Cd2LGRfbc/"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
							className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
						>
							{/* Facebook */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
						</a>
						<a
							href={CONTACT_WHATSAPP_URL}
							target="_blank"
							rel="noreferrer"
							aria-label="WhatsApp"
							className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
						>
							{/* WhatsApp */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
								<path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.428a.75.75 0 0 0 .916.916l5.573-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.953-1.355l-.355-.212-3.683.974.986-3.595-.232-.371A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
							</svg>
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