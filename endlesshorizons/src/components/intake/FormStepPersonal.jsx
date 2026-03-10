export default function FormStepPersonal({ formData, onChange }) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<div className="grid gap-1.5">
				<label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
					Full Name
				</label>
				<input
					id="fullName"
					name="fullName"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.fullName}
					onChange={onChange}
					placeholder="Aarav Sharma"
					required
				/>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="email" className="text-sm font-semibold text-slate-700">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.email}
					onChange={onChange}
					placeholder="you@email.com"
					required
				/>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="phone" className="text-sm font-semibold text-slate-700">
					Phone
				</label>
				<input
					id="phone"
					name="phone"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.phone}
					onChange={onChange}
					placeholder="+91"
					required
				/>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="city" className="text-sm font-semibold text-slate-700">
					City
				</label>
				<input
					id="city"
					name="city"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.city}
					onChange={onChange}
					placeholder="Bengaluru"
					required
				/>
			</div>
		</div>
	)
}