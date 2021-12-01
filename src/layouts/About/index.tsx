import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'
import Stack from '@primitives/Stack'

import Container from '@components/Container'
import Hero from '@components/Hero'

import formatDate from '@utils/formatDate'

import carrerCompanies from '@configs/carrer-companies'

const AboutTemplate = () => {
  return (
    <Container css={{ maxW: '$md' }}>
      <Hero start="#cc2b5e" end="#753a88">
        about me
      </Hero>

      <Stack direction="column" css={{ $$gap: '$space$2' }}>
        <Text size="lg">
          I am a software engineer with a passion for building things that make
          people&apos;s lives better. Graduated in computer and started working
          as a software engineer back in 2016.
        </Text>
      </Stack>

      <Text size="2xl" weight="bold" css={{ my: '$5' }}>
        Bio
      </Text>

      <Stack as="blockquote" direction="column" css={{ $$gap: '$space$2' }}>
        <Text size="lg">
          Vinicius Henrique Vicentini Cardozo, born on March 30, 1995 in
          Brodowski, São Paulo, Brazil, studied computer science at Universidade
          Barão de Mauá, and worked as a software engineer at Blockade Games, a
          leading blockchain video game development studio. In his spare time he
          likes to play video games, study new technologies, read books and ride
          your bike around the town. He also loves drink beer with friends. His
          interest in development started because of electronic games. Already
          created mods for Counter Strike 1.6, also created a software download
          blog.
        </Text>
      </Stack>

      <Text size="2xl" weight="bold" css={{ my: '$5' }}>
        Career
      </Text>

      {carrerCompanies?.map(
        ({ startDate, endDate, company, title, url, city, state }, i) => {
          const formattedStartDate = formatDate(startDate)
          const formattedEndDate = endDate ? formatDate(endDate) : 'Present'

          return (
            <Box key={i} css={{ mb: '$10' }}>
              <Text as="h3" weight="medium">
                {title}
              </Text>

              <Text>
                <Link href={url} css={{ d: 'inline' }} decorated isExternal>
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
    </Container>
  )
}

export default AboutTemplate
