import NextLink from 'next/link'

import type { RepoPageProps } from 'src/pages/repo'

import Grid from '@primitives/Grid'
import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'
import Heading from '@primitives/Heading'

import Container from '@components/Container'

import RepoHero from './components/Hero'

const RepoTemplate = ({ repos }: RepoPageProps) => {
  return (
    <Container>
      <RepoHero />

      <Heading as="h3">Pinned</Heading>

      <Grid css={{ columns: 'repeat(2, 1fr)', gap: '$5', my: '$10' }}>
        {repos?.map((repo) => (
          <NextLink key={repo.repo} href={repo.link} passHref>
            <Link target="_blank" rel="noreferrer noopener">
              <Box css={{ bg: '$black', p: '$10' }}>
                <Text>{repo.repo}</Text>
              </Box>
            </Link>
          </NextLink>
        ))}
      </Grid>
    </Container>
  )
}

export default RepoTemplate
