import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assetUrl } from '../../lib/assetUrls'

const navItems = [
	{ to: '/', label: 'Home' },
	{ to: '/destinations', label: 'Destinations' },
	{ to: '/services', label: 'Services' },
	{ to: '/about', label: 'About Us' },
	{ to: '/contact', label: 'Contact' },
]

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/78 shadow-[0_14px_40px_rgba(2,6,23,0.52)] backdrop-blur-2xl supports-backdrop-filter:bg-slate-950/60">
			<nav className="mx-auto w-[min(1120px,92vw)] py-3 md:grid md:min-h-[5.8rem] md:grid-cols-[1fr_auto_1fr] md:items-center">
				<div className="flex items-center justify-between md:justify-start">
					<NavLink to="/" onClick={closeMobileMenu} className="flex items-center gap-3 text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:text-2xl">
						<img src={assetUrl('Logo.png')} alt="Endless Horizons logo" className="h-11 w-11 rounded-full border border-white/20 bg-white/80 p-1 md:h-12 md:w-12" />
						Endless Horizons
					</NavLink>

					<button
						type="button"
						onClick={() => setIsMobileMenuOpen((current) => !current)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white md:hidden"
						aria-label="Toggle navigation menu"
						aria-expanded={isMobileMenuOpen}
					>
						<span className="text-lg leading-none">{isMobileMenuOpen ? 'x' : '='}</span>
					</button>
				</div>

				<div className="hidden justify-center md:flex">
					<div className="flex flex-wrap justify-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									`rounded-full px-4 py-2 text-sm font-semibold transition md:px-5 md:py-2.5 ${
										isActive
											? 'bg-white text-slate-900 shadow-[0_5px_18px_rgba(255,255,255,0.3)]'
											: 'text-white/95 hover:bg-white/18 hover:text-white'
									}`
								}
							>
								{item.label}
							</NavLink>
						))}
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="mt-3 grid gap-2 rounded-2xl border border-white/20 bg-slate-950/95 p-2 md:hidden">
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								onClick={closeMobileMenu}
								className={({ isActive }) =>
									`rounded-xl px-3 py-2 text-sm font-semibold transition ${
										isActive
											? 'bg-white text-slate-900'
											: 'text-white/95 hover:bg-white/12'
									}`
								}
							>
								{item.label}
							</NavLink>
						))}
					</div>
				)}

				<div className="hidden md:block" />
			</nav>
		</header>
	)
}