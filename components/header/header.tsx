import NextLink from 'next/link'

import { HeaderLinks } from '@/components/header/header.links'
import { HeaderMobile } from '@/components/header/header.mobile'
import { Logo } from '@/components/logo'

export const Header = () => {
  return (
    <header className="container z-30 max-w-5xl backdrop-blur-sm sm:sticky sm:top-5">
      <div className="p flex h-14 items-center justify-between rounded-full bg-neutral-950/90 backdrop-blur-sm sm:pr-8">
        <NextLink href="/" aria-label="Vinicius Vicentini, Back to homepage">
          <Logo />
        </NextLink>

        <nav className="flex items-center">
          <HeaderLinks className="hidden space-x-5 sm:flex" />

          <HeaderMobile className="sm:hidden" />
        </nav>
      </div>
    </header>
  )
}
