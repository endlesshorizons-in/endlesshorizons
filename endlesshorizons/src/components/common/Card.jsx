export default function Card({ children, className = '', lift = false, ...props }) {
	const cardClass = `rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-[0_12px_24px_rgba(2,8,23,0.28)] ${
		lift
			? 'transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_28px_rgba(15,23,42,0.13)]'
			: ''
	} ${className}`.trim()

	return (
		<article className={cardClass} {...props}>
			{children}
		</article>
	)
}