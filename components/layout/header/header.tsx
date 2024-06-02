import { tv } from 'tailwind-variants'

import { Link } from '@/components/ui/link'
import { Logo } from '@/components/ui/logo'

import { HeaderNav } from './header.nav'

const headerStyle = tv({
	base: [
		'z-10 h-16 container',
		'sticky inset-x-2 top-0 sm:top-5',
		'sm:rounded-xl max-sm:border-b',
		'flex items-center justify-between',
		'px-5 bg-black/20',
		'backdrop-blur drop-shadow',
		'transition-all',
	],
})

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = (props: HeaderProps) => {
	const { className, ...rest } = props

	return (
		<header className={headerStyle({ className })} {...rest}>
			<Link href="/" aria-label="Vinicius Vicentini, Back to homepage">
				<Logo />
			</Link>

			<HeaderNav />
		</header>
	)
}
