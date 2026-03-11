export default function FormStepReview({ formData, onChange }) {
	return (
		<div className="rounded-3xl border border-dashed border-teal-200 bg-teal-50/40 p-5">
			<p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">
				Review Details
			</p>
			<p className="text-slate-700">
				<strong>{formData.fullName}</strong> | {formData.email} | {formData.phone}
			</p>
			<p className="mt-2 text-slate-700">
				<strong>Trip:</strong> {formData.destinationType}, {formData.travelMonth},
				{` `}
				{formData.travelers} travelers, {formData.tripLength}
			</p>
			<p className="mt-2 text-slate-700">
				<strong>Budget:</strong> {formData.budget} | <strong>Stay:</strong>{' '}
				{formData.accommodation} | <strong>Flight:</strong> {formData.flightClass}
			</p>
			<div className="mt-4 grid gap-1.5">
				<label htmlFor="consent" className="flex items-start gap-2 text-sm text-slate-700">
					<input
						id="consent"
						name="consent"
						type="checkbox"
						checked={formData.consent}
						onChange={onChange}
						className="mt-0.5 h-4 w-4 rounded border-teal-300 text-teal-700 focus:ring-teal-500"
					/>
					I agree to be contacted by Endless Horizons for my itinerary.
				</label>
			</div>
		</div>
	)
}