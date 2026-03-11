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
		<header className="sticky top-0 z-50 border-b border-white/25 bg-slate-950/72 shadow-[0_10px_30px_rgba(2,6,23,0.45)] backdrop-blur-2xl supports-backdrop-filter:bg-slate-950/55">
			<nav className="mx-auto flex min-h-[4.8rem] w-[min(1120px,92vw)] flex-col gap-3 py-2 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
				<div className="flex justify-start">
					<NavLink to="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
					<img src={logo} alt="Endless Horizons logo" className="h-9 w-9 rounded-full border border-white/20 bg-white/80 p-1" />
					Endless Horizons
				</NavLink>
				</div>

				<div className="flex justify-center">
					<div className="flex flex-wrap justify-center gap-2 rounded-full border border-white/15 bg-white/5 p-1">
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) =>
								`rounded-full px-3 py-2 text-sm font-semibold transition ${
									isActive
										? 'bg-white text-slate-900 shadow-[0_4px_14px_rgba(255,255,255,0.28)]'
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