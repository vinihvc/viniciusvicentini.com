import NextLink from 'next/link'
import { HeaderLinks } from 'components/header/header.links'
import { HeaderMobile } from 'components/header/header.mobile'
import { Logo } from 'components/logo'

export const Header = () => {
  return (
    <header>
      <div className="container flex h-16 items-center justify-between">
        <NextLink href="/" aria-label="Back to homepage">
          <Logo />
        </NextLink>

        <nav className="hidden space-x-3 sm:flex">
          <HeaderLinks />
        </nav>

        <HeaderMobile className="sm:hidden" />
      </div>
    </header>
  )
}
