import { useState } from 'react'

export function useMultiStepForm(totalSteps) {
	const [currentStep, setCurrentStep] = useState(0)

	const next = () => {
		setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev))
	}

	const back = () => {
		setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
	}

	const goTo = (index) => {
		if (index >= 0 && index < totalSteps) {
			setCurrentStep(index)
		}
	}

	return {
		currentStep,
		next,
		back,
		goTo,
		isFirstStep: currentStep === 0,
		isLastStep: currentStep === totalSteps - 1,
	}
}