export async function submitLead(formData) {
	await new Promise((resolve) => setTimeout(resolve, 600))

	return {
		ok: true,
		leadId: `EH-${Date.now()}`,
		data: formData,
	}
}