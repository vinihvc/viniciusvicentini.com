import { tv } from 'tailwind-variants'

import { HeaderLogo } from './header.logo'
import { APP_ROUTES } from './header.routes'

import dynamic from 'next/dynamic'

const HeaderDesktop = dynamic(() =>
	import('./header.desktop').then((mod) => mod.HeaderDesktop),
)

const HeaderMobile = dynamic(() =>
	import('./header.mobile').then((mod) => mod.HeaderMobile),
)

const headerStyle = tv({
	base: [
		'z-50 h-16 container',
		'sticky inset-x-2 top-0 sm:top-5',
		'sm:rounded-xl',
		'flex items-center justify-between',
		'px-3 sm:px-5 bg-black/30 backdrop-blur-lg',
		'shadow-[0px_1px_1px_rgba(0,0,0,.95),0px_0px_1px_inset_#fffbed3c]',
		'selection:bg-pink-500 transition-all',
	],
})

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const getData = async () => {
	return {
		routes: APP_ROUTES,
	}
}

export const Header = async (props: HeaderProps) => {
	const { className, ...rest } = props

	const { routes } = await getData()

	return (
		<header className={headerStyle({ className })} {...rest}>
			<HeaderLogo />

			<HeaderDesktop className="max-sm:hidden" routes={routes} />

			<HeaderMobile className="sm:hidden" routes={routes} />
		</header>
	)
}
