export default function Button({
	type = 'button',
	variant = 'primary',
	onClick,
	children,
	disabled = false,
}) {
	const variantClass =
		variant === 'secondary'
			? 'bg-teal-50 text-teal-900 hover:bg-teal-100'
			: 'bg-gradient-to-r from-cyan-900 to-teal-600 text-white shadow-[0_9px_18px_rgba(8,47,73,0.24)] hover:brightness-105'

	return (
		<button
			type={type}
			className={`rounded-full px-4 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-60 ${variantClass}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}