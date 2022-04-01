import { NextSeo } from 'next-seo'

import { motion } from 'framer-motion'

import { Box } from '@primitives/box'
import { Stack } from '@primitives/stack'
import { Text } from '@primitives/text'
import { Link } from '@primitives/link'

import { carrerCompanies } from '@constants/carrer-companies'

import { Container } from '@components/container'
import { Hero } from '@components/hero'

import formatDate from '@utils/formatDate'

const AboutPage = () => {
  return (
    <>
      <NextSeo title="About me" />

      <Container css={{ maxW: '$md' }}>
        <Hero start="#cc2b5e" end="#753a88">
          about me
        </Hero>

        <Stack direction="column" css={{ $$gap: '$space$2' }}>
          <Text
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            size="lg"
          >
            I am a software engineer with a passion for building things that
            make people&apos;s lives better. Graduated in Computer Science and
            started working as a software engineer back in 2016.
          </Text>
        </Stack>

        <Text
          as={motion.h3}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          size="2xl"
          weight="bold"
          css={{ my: '$5' }}
        >
          Bio
        </Text>

        <Stack as="blockquote" direction="column" css={{ $$gap: '$space$2' }}>
          <Text
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            size="lg"
          >
            Vinicius Henrique Vicentini Cardozo, born on March 30, 1995 in
            Brodowski, São Paulo, Brazil, studied computer science at
            Universidade Barão de Mauá, and worked as a software engineer at
            Blockade Games, a leading blockchain video game development studio.
            In his spare time he likes to play video games, study new
            technologies, read books and ride your bike around the town. He also
            loves drink beer with friends. His interest in development started
            because of electronic games. Already created mods for Counter Strike
            1.6, also was the owner of a popular download website in 2008-2010.
          </Text>
        </Stack>

        <Text
          as={motion.h3}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          size="2xl"
          weight="bold"
          css={{ my: '$5' }}
        >
          Career
        </Text>

        <motion.div transition={{ delayChildren: 0.4 }}>
          {carrerCompanies?.map(
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

                  <Text>
                    <Link
                      href={url}
                      css={{ d: 'inline', color: '$primary' }}
                      decorated
                      isExternal
                    >
                      {company}
                    </Link>{' '}
                    • {city}, {state}
                  </Text>

                  <Text>
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
