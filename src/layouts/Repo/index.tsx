import Grid from '@primitives/Grid'
import Text from '@primitives/Text'

import Container from '@components/Container'

import RepoHero from './components/Hero'

const RepoTemplate = () => {
  return (
    <Container>
      <RepoHero />

      <Text as="h3">Featured Projects</Text>

      <Grid
        css={{
          columns: 'repeat(1, 1fr)',
          gap: '$5',
          my: '$10',
          '@md': {
            columns: 'repeat(3, 1fr)',
          },
        }}
      >
        <a href="https://github.com/viniciushvc/summer-eletrohits">
          <div>summer-eletrohits</div>
        </a>

        <a href="https://github.com/viniciushvc/frontend-challenge">
          <div>frontend-challenge</div>
        </a>

        <a href="https://github.com/viniciushvc/next-boilerplate">
          <div>next-boilerplate</div>
        </a>
      </Grid>
    </Container>
  )
}

export default RepoTemplate
