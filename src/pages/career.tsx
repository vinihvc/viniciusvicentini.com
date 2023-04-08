import { NextSeo } from 'next-seo'

import { Text } from '@/components/primitives/text'
import { Link } from '@/components/primitives/link'

import { COMPANIES } from '@/constants/companies'

import { Hero } from '@/components/hero'

import formatDate from '@/utils/formatDate'
import { Stack } from '@/components/primitives/stack'

const AboutPage = () => {
  return (
    <>
      <NextSeo title="Career" />

      <Hero start="#cc2b5e" end="#753a88">
        career
      </Hero>

      <Stack direction="column" css={{ $$gap: '$space$8', pb: '$10' }}>
        {COMPANIES?.map(
          ({ startDate, endDate, company, title, url, city, state }) => {
            const formattedStartDate = formatDate(startDate)
            const formattedEndDate = endDate ? formatDate(endDate) : 'Present'

            return (
              <Text key={company} as="article" size="sm">
                <Text as="h3" color="grey">
                  {title}
                </Text>

                <Text weight="thin" size="md">
                  <Link
                    href={url}
                    css={{
                      d: 'inline',
                      fontWeight: '$medium',
                      fontSize: '$lg',
                    }}
                    decorated
                    isExternal
                  >
                    {company}
                  </Link>
                  {` • ${city}, ${state}`}
                </Text>

                <Text color="grey" css={{ d: 'flex', gap: '$2', mt: '$1' }}>
                  <Text as="time">{formattedStartDate}</Text>
                  <span>–</span>
                  <Text as="time">{formattedEndDate}</Text>
                </Text>
              </Text>
            )
          },
        )}
      </Stack>
    </>
  )
}

export default AboutPage
