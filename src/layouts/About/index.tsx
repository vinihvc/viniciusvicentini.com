import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

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

      <Box>Soon</Box>

      <Text size="2xl" weight="bold" css={{ my: '$5' }}>
        Bio
      </Text>

      <Text as="blockquote">Soon</Text>

      <Text size="2xl" weight="bold" css={{ my: '$5' }}>
        Career
      </Text>

      {carrerCompanies?.map((item, i) => {
        const formattedStartDate = formatDate(item.startDate)
        const formattedEndDate = formatDate(item.endDate)

        return (
          <Box key={i} css={{ mb: '$10' }}>
            <Text as="h3">{item.title}</Text>

            <Text>
              <Link href={item.url} css={{ d: 'inline' }} decorated isExternal>
                {item.company}
              </Link>{' '}
              • {item.city}, {item.state}
            </Text>

            <Text>
              {formattedStartDate} – {formattedEndDate || 'Present'}
            </Text>
          </Box>
        )
      })}
    </Container>
  )
}

export default AboutTemplate
