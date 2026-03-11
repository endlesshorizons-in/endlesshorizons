import { NavLink } from 'react-router-dom'
import Button from '../common/Button'
import logo from '../../assets/icons/Logo.png'

const navItems = [
	{ to: '/', label: 'Home' },
	{ to: '/destinations', label: 'Destinations' },
	{ to: '/services', label: 'Services' },
	{ to: '/testimonials', label: 'Testimonials' },
	{ to: '/about', label: 'About Us' },
	{ to: '/contact', label: 'Contact' },
]

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/78 shadow-[0_14px_40px_rgba(2,6,23,0.52)] backdrop-blur-2xl supports-backdrop-filter:bg-slate-950/60">
			<nav className="mx-auto flex min-h-[5.8rem] w-[min(1120px,92vw)] flex-col gap-3 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
				<div className="flex justify-start">
					<NavLink to="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:text-2xl">
					<img src={logo} alt="Endless Horizons logo" className="h-11 w-11 rounded-full border border-white/20 bg-white/80 p-1 md:h-12 md:w-12" />
					Endless Horizons
				</NavLink>
				</div>

				<div className="flex justify-center">
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

				<div className="flex justify-start md:justify-end">
					<NavLink to="/intake">
						<Button variant="primary">Plan My Trip</Button>
					</NavLink>
				</div>
			</nav>
		</header>
	)
}