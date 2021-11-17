import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

import Container from '@components/Container'

import AboutHero from './components/Hero'
import formatDate from '@utils/formatDate'

const AboutTemplate = () => {
  const items = [
    {
      title: 'Front End Engineering',
      company: 'Foton Tech',
      url: 'https://foton.tech',
      city: 'Florianópolis',
      state: 'Santa Catarina',
      startDate: '2021-07-21T03:00:00.000Z',
      endDate: '',
    },
    {
      title: 'Front End Engineering',
      company: 'Insigna Consultoria',
      url: 'https://www.insignaconsultoria.com.br',
      city: 'Campinas',
      state: 'São Paulo',
      startDate: '2021-03-21T03:00:00.000Z',
      endDate: '2021-07-21T03:00:00.000Z',
    },
    {
      title: 'Front End Developer',
      company: 'Dryve Tecnologia',
      url: 'https://dryve.com.br',
      city: 'Ribeirão Preto',
      state: 'São Paulo',
      startDate: '2019-07-21T03:00:00.000Z',
      endDate: '2020-01-21T03:00:00.000Z',
    },
    {
      title: 'Full Stack Developer',
      company: 'Datamob',
      url: 'http://datamob.com.br',
      city: 'Ribeirão Preto',
      state: 'São Paulo',
      startDate: '2016-07-21T03:00:00.000Z',
      endDate: '2018-07-21T03:00:00.000Z',
    },
  ]

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

      {items?.map((item, i) => {
        const formattedStartDate = formatDate(item.startDate)
        const formattedEndDate = formatDate(item.endDate)

        return (
          <Box key={i} css={{ mb: '$10' }}>
            <Text as="h3">{item.title}</Text>

            <Text>
              <Link
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                css={{ d: 'inline' }}
                decorated
              >
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
