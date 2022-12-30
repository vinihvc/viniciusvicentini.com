import { NextSeo } from 'next-seo'

import { motion } from 'framer-motion'

import { Box } from '@primitives/box'
import { Text } from '@primitives/text'
import { Link } from '@primitives/link'

import { careerCompanies } from '@constants/career-companies'

import { Container } from '@components/container'
import { Hero } from '@components/hero'

import formatDate from '@utils/formatDate'

const AboutPage = () => {
  return (
    <>
      <NextSeo title="Career" />

      <Container css={{ maxW: '$md' }}>
        <Hero start="#cc2b5e" end="#753a88">
          career
        </Hero>

        <motion.div transition={{ delayChildren: 0.4 }}>
          {careerCompanies?.map(
            ({ startDate, endDate, company, title, url, city, state }, i) => {
              const formattedStartDate = formatDate(startDate)
              const formattedEndDate = endDate ? formatDate(endDate) : 'Present'

              return (
                <Box
                  as={motion.article}
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  css={{ mb: '$10' }}
                >
                  <Text as="h3" weight="medium">
                    {title}
                  </Text>

                  <Text weight="thin">
                    <Link href={url} css={{ d: 'inline' }} decorated isExternal>
                      {company}
                    </Link>
                    {` • ${city}, ${state}`}
                  </Text>

                  <Text size="sm">
                    {formattedStartDate} – {formattedEndDate}
                  </Text>
                </Box>
              )
            },
          )}
        </motion.div>
      </Container>
    </>
  )
}

export default AboutPage
