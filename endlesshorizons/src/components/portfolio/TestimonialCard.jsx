import Card from '../common/Card'

export default function TestimonialCard({ testimonial }) {
	return (
		<Card lift>
			<p className="text-slate-200">"{testimonial.quote}"</p>
			<p className="mt-3 text-slate-100">
				<strong>{testimonial.name}</strong> | {testimonial.trip}
			</p>
		</Card>
	)
}