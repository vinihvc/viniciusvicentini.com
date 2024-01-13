import React from 'react'
import Image from 'next/image'

import { COMPANIES } from '@/constants/companies'
import { SOCIAL_LINKS } from '@/constants/social'
import { BrFlag } from '../flags/br'
import { IeFlag } from '../flags/ie'
import { ItFlag } from '../flags/it'
import { Link } from '../ui/link'

export const About = () => {
  const currentWork = COMPANIES.find((company) => !company.endDate) ?? null

  const twitterLink = SOCIAL_LINKS.find((social) => social.title === 'Twitter')

  return (
    <div>
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-primary sm:text-4xl">
            Vinicius Vicentini
          </h1>

          <Link
            href={twitterLink?.link || ''}
            className="opacity-50 duration-200 hover:opacity-100"
            isExternal
          >
            {'@vinihvc'}
          </Link>
        </div>

        <h2>Front-end engineer who loves UX, Performance and Design.</h2>

        <div>
          {currentWork && (
            <p>
              {'Currently working at '}

              <Link href={currentWork?.url} isExternal decorated>
                {currentWork?.company}.
              </Link>
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 flex space-x-5">
        {SOCIAL_LINKS.map(({ title, icon, link }) => (
          <Link
            key={link}
            href={link}
            className="hover:text-primary"
            isExternal
          >
            <div className="rounded-full border border-border bg-background p-4 duration-200 hover:border-border-hover">
              {React.createElement(icon, {
                className: 'w-6 h-6',
                'aria-hidden': true,
              })}
            </div>

            <span className="sr-only">{`Visit my ${title}`}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
