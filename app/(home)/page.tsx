import React from 'react'
import { SEO } from '@/config/seo'
import { SOCIAL_LINKS } from '@/config/social'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'

const getData = async () => {
  return { about: SEO, links: SOCIAL_LINKS }
}

const HomePage = async () => {
  const { about, links } = await getData()

  return (
    <div className="container flex flex-1 flex-col justify-center selection:bg-blue-500">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{about.title}</h1>

        <h2 className="text-muted-foreground text-lg">{about.description}</h2>
      </div>

      <div className="mt-5 flex gap-2 sm:gap-5">
        {links.map((link) => (
          <Button
            key={link.link}
            className="size-auto p-4 ring-blue-500"
            asChild
          >
            <NavLink href={link.link} isExternal>
              {React.createElement(link.icon, {
                className: 'size-6',
                'aria-hidden': true,
              })}

              <span className="sr-only">{`Visit my ${link.title}`}</span>
            </NavLink>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default HomePage
