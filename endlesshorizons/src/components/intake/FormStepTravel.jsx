export default function FormStepTravel({ formData, onChange }) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<div className="grid gap-1.5">
				<label htmlFor="destinationType" className="text-sm font-semibold text-slate-700">
					Destination Type
				</label>
				<select
					id="destinationType"
					name="destinationType"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.destinationType}
					onChange={onChange}
				>
					<option value="Beach">Beach</option>
					<option value="Mountains">Mountains</option>
					<option value="Culture">Culture</option>
					<option value="Luxury">Luxury</option>
					<option value="Adventure">Adventure</option>
				</select>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="travelMonth" className="text-sm font-semibold text-slate-700">
					Preferred Month
				</label>
				<input
					id="travelMonth"
					name="travelMonth"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.travelMonth}
					onChange={onChange}
					placeholder="October"
					required
				/>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="travelers" className="text-sm font-semibold text-slate-700">
					No. of Travelers
				</label>
				<input
					id="travelers"
					name="travelers"
					type="number"
					min="1"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.travelers}
					onChange={onChange}
					required
				/>
			</div>
			<div className="grid gap-1.5">
				<label htmlFor="tripLength" className="text-sm font-semibold text-slate-700">
					Trip Length
				</label>
				<input
					id="tripLength"
					name="tripLength"
					className="rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.tripLength}
					onChange={onChange}
					placeholder="7 days"
				/>
			</div>
			<div className="grid gap-1.5 md:col-span-2">
				<label htmlFor="notes" className="text-sm font-semibold text-slate-700">
					Special Requests
				</label>
				<textarea
					id="notes"
					name="notes"
					className="min-h-28 rounded-2xl border border-teal-100 bg-white px-3 py-2 text-slate-800 outline-none ring-teal-500 transition focus:ring-2"
					value={formData.notes}
					onChange={onChange}
					placeholder="Food preferences, celebration details, visa support, etc."
				/>
			</div>
		</div>
	)
}