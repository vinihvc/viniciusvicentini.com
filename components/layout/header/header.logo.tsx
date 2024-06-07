import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Logo } from '@/components/ui/logo'

import { cn } from '@/utils/cn'

interface HeaderLogoProps extends React.HTMLAttributes<HTMLElement> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
	const { className, ...rest } = props

	return (
		<Button asChild>
			<Link
				className={cn(
					'bg-transparent border-none hover:bg-white/5 [&.active]:bg-white/5 text-white size-auto p-0',
					className,
				)}
				href="/"
				aria-label="Vinicius Vicentini, Back to homepage"
				{...rest}
			>
				<Logo />
			</Link>
		</Button>
	)
}
