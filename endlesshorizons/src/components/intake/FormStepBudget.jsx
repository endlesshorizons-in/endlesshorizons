export default function FormStepBudget({ formData, onChange }) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<div className="grid gap-1.5">
				<label htmlFor="budget" className="text-sm font-semibold text-slate-700">
					Estimated Budget (INR)
				</label>
				<input
					id="budget"
					name="budget"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.budget}
					onChange={onChange}
					placeholder="2,50,000"
					required
				/>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="accommodation" className="text-sm font-semibold text-slate-700">
					Accommodation Style
				</label>
				<select
					id="accommodation"
					name="accommodation"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.accommodation}
					onChange={onChange}
				>
					<option value="4-star">4-star</option>
					<option value="5-star">5-star</option>
					<option value="Boutique">Boutique</option>
					<option value="Private Villa">Private Villa</option>
				</select>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="flightClass" className="text-sm font-semibold text-slate-700">
					Flight Class
				</label>
				<select
					id="flightClass"
					name="flightClass"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.flightClass}
					onChange={onChange}
				>
					<option value="Economy">Economy</option>
					<option value="Premium Economy">Premium Economy</option>
					<option value="Business">Business</option>
					<option value="First">First</option>
				</select>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="pace" className="text-sm font-semibold text-slate-700">
					Travel Pace
				</label>
				<select
					id="pace"
					name="pace"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.pace}
					onChange={onChange}
				>
					<option value="Slow">Slow</option>
					<option value="Balanced">Balanced</option>
					<option value="Packed">Packed</option>
				</select>
			</div>
		</div>
	)
}