import { Flex } from '@/components/primitives/flex'

import { SocialLinks } from '@/components/social-links'
import { Text } from '@/components/primitives/text'
import { Box } from '@/components/primitives/box'

import { m } from 'framer-motion'
import { Link } from '@/components/primitives/link'
import { COMPANIES } from '@/constants/companies'

const HomePage = () => {
  const currentWork = COMPANIES.find((company) => !company.endDate)

  return (
    <Flex
      css={{
        w: '$full',
        h: 'calc(100vh - 100px)',
        justify: 'center',
        align: 'center',
      }}
    >
      <Box>
        <Text
          as={m.h1}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          size={{ '@initial': '2xl', '@sm': '4xl' }}
          weight="bold"
        >
          Vinicius Vicentini
        </Text>

        <Text
          as={m.h2}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          size="lg"
          weight="normal"
          color="grey"
        >
          Front-end engineer who loves UX, Performance and Design.
        </Text>

        <Flex css={{ gap: '$1', ml: '$1', my: '$5' }}>
          {[...Array(5)].map((_, i) => (
            <Box
              as={m.div}
              key={i}
              layoutId={`dot-${i}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.6 + 0.1 * i }}
              viewport={{ once: true }}
              css={{
                size: 3,
                bg: '$white',
              }}
              aria-hidden
            />
          ))}
        </Flex>

        <Text
          as={m.div}
          color="grey"
          size="lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
        >
          <Text as="p">Brazilian based in Ribeirão Preto, Brazil.</Text>

          <Text as="p">
            {'Currently working at '}

            <Link
              href={currentWork?.url}
              target="_blank"
              rel="noreferrer noopener"
              decorated
            >
              {`${currentWork?.company}.`}
            </Link>
          </Text>
        </Text>

        <SocialLinks />
      </Box>
    </Flex>
  )
}

export default HomePage
