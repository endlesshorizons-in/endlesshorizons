import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'
import { submitLead } from '../../services/leadService'
import Button from '../common/Button'
import FormStepBudget from './FormStepBudget'
import FormStepPersonal from './FormStepPersonal'
import FormStepReview from './FormStepReview'
import FormStepTravel from './FormStepTravel'

const initialState = {
	fullName: '',
	email: '',
	phone: '',
	city: '',
	destinationType: 'Beach',
	travelMonth: '',
	travelers: 2,
	tripLength: '',
	notes: '',
	budget: '',
	accommodation: '4-star',
	flightClass: 'Economy',
	pace: 'Balanced',
	consent: false,
}

export default function IntakeForm() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState(initialState)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const steps = [
		{
			label: 'Personal',
			component: <FormStepPersonal formData={formData} onChange={handleChange} />,
		},
		{
			label: 'Travel',
			component: <FormStepTravel formData={formData} onChange={handleChange} />,
		},
		{
			label: 'Budget',
			component: <FormStepBudget formData={formData} onChange={handleChange} />,
		},
		{
			label: 'Review',
			component: <FormStepReview formData={formData} onChange={handleChange} />,
		},
	]

	const { currentStep, next, back, isFirstStep, isLastStep } = useMultiStepForm(
		steps.length,
	)

	function handleChange(event) {
		const { name, value, type, checked } = event.target
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	async function handleSubmit(event) {
		event.preventDefault()

		if (!isLastStep) {
			next()
			return
		}

		if (!formData.consent) {
			return
		}

		setIsSubmitting(true)
		const response = await submitLead(formData)
		setIsSubmitting(false)

		if (response.ok) {
			navigate('/thank-you', { state: { leadId: response.leadId } })
		}
	}

	return (
		<form
			className="grid gap-4 rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.07)]"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-wrap items-center gap-2">
				{steps.map((step, index) => (
					<span
						key={step.label}
						title={step.label}
						className={`h-2.5 w-2.5 rounded-full ${
							index <= currentStep ? 'bg-teal-600' : 'bg-teal-200'
						}`}
					/>
				))}
				<span className="text-sm text-slate-500">
					Step {currentStep + 1} of {steps.length}
				</span>
			</div>

			<h3 className="text-2xl font-semibold text-slate-900">{steps[currentStep].label}</h3>
			{steps[currentStep].component}

			<div className="flex flex-wrap justify-between gap-3">
				<Button variant="secondary" onClick={back} disabled={isFirstStep || isSubmitting}>
					Back
				</Button>
				<Button type="submit" variant="primary" disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : isLastStep ? 'Submit Request' : 'Continue'}
				</Button>
			</div>
		</form>
	)
}