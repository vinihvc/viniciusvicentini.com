import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

import Container from '@components/Container'

import formatDate from '@utils/formatDate'

import carrerCompanies from '@configs/carrer-companies'

import AboutHero from './components/Hero'

const AboutTemplate = () => {
  return (
    <Container css={{ maxW: '$md' }}>
      <AboutHero />

      <Box>
        <Text>
          Hey, I`m Zeno Rocha. I started as a software engineer back in 2009,
          working with Flash.
        </Text>

        <Text>
          I`m currently the VP of Developer Experience at WorkOS. Before that, I
          was the CPO at Liferay Cloud. I`m originally from Brazil and now
          living in sunny California with my amazing wife and beautiful
          daughter.
        </Text>

        <Text>
          I love dark mode, open source, and side projects. When I`m not
          working, I like running, watching movies, and eating cheese.
        </Text>
      </Box>

      <Text size="2xl" weight="bold" css={{ my: '$5' }}>
        Bio
      </Text>

      <Text as="blockquote">
        Zeno Rocha is a Brazilian creator and programmer. He currently lives in
        Los Angeles, California, where he`s the VP of Developer Experience at
        WorkOS. His lifelong appreciation for building software and sharing
        knowledge led him to speak in over 110 conferences worldwide. His
        passion for open source put him on the top 20 most active users on
        GitHub at age 22. Before moving to the US, Zeno developed multiple
        applications, mentored startups, and worked at major companies in Latin
        America, such as Globo and Petrobras.
      </Text>

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
