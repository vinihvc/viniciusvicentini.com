import dynamic from 'next/dynamic'
import { tv } from 'tailwind-variants'

import { HeaderLogo } from './header.logo'
import { HEADER_ROUTES } from './header.routes'

const HeaderDesktop = dynamic(() =>
  import('./header.desktop').then((mod) => ({
    default: mod.HeaderDesktop,
  })),
)

const HeaderMobile = dynamic(() =>
  import('./header.mobile').then((mod) => ({
    default: mod.HeaderMobile,
  })),
)

const headerStyle = tv({
  base: [
    'container z-50 h-16',
    'sticky inset-x-2 top-0 sm:top-5',
    'sm:rounded-xl',
    'flex items-center justify-between',
    'bg-black/30 px-3 backdrop-blur sm:px-5',
    'shadow-[0px_1px_1px_rgba(0,0,0,.95),0px_0px_1px_inset_#fffbed3c]',
    'transition-all selection:bg-pink-500',
  ],
})

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const getData = async () => {
  return {
    routes: HEADER_ROUTES,
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
