import { Link } from '@/components/ui/link'
import { Logo } from '@/components/ui/logo'

import { cn } from '@/utils/cn'

interface HeaderLogoProps extends React.HTMLAttributes<HTMLElement> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
	const { className, ...rest } = props

	return (
		<Link
			className={cn(
				'rounded-lg hover:bg-white/5 [&.active]:bg-white/5 transition-all',
				className,
			)}
			href="/"
			aria-label="Vinicius Vicentini, Back to homepage"
			{...rest}
		>
			<Logo />
		</Link>
	)
}
