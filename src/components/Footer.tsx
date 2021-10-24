import { BsGithub, BsTwitter } from 'react-icons/bs'

import Box from '@primitives/Box'
import Grid from '@primitives/Grid'
import Text from '@primitives/Text'
import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

import Container from '@components/Container'

const Footer = () => {
  return (
    <Box as="footer" css={{ py: '$5' }}>
      <Container>
        <Grid
          css={{
            columns: 'repeat(1, 1fr)',
            '@md': {
              columns: 'repeat(2, 1fr)'
            },
            justify: 'space-between',
            align: 'space-around',
            gap: '$3'
          }}
        >
          <Text
            css={{
              textAlign: 'center',
              '@md': {
                textAlign: 'left'
              }
            }}
          >
            All rights reserved &copy; Vinicius Vicentini 2021
          </Text>

          <Stack
            css={{
              justify: 'center',
              '@md': {
                justify: 'flex-end'
              },
              fontSize: '$2xl'
            }}
          >
            <Link
              href="https://github.com/viniciushvc"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit my Github"
            >
              <BsGithub />
            </Link>

            <Link
              href="https://twitter.com/viniciushvc"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit my Twitter"
            >
              <BsTwitter />
            </Link>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
