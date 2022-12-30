import { NextSeo } from 'next-seo'

import { Text } from '@/components/primitives/text'
import { Grid } from '@/components/primitives/grid'
import { Link } from '@/components/primitives/link'

import { Container } from '@/components/container'
import { Hero } from '@/components/hero'
import { ProjectCard } from '@/components/project-card'

import { projectLinks } from '@/constants/project-links'
import { Box } from '@/components/primitives/box'

const ProjectsPage = () => {
  return (
    <>
      <NextSeo title="Projects" />

      <Container>
        <Hero start="#4568dc" end="#b06ab3">
          projects
        </Hero>

        <Text as="h3" size="2xl" weight="bold">
          Featured Projects
        </Text>

        <Grid
          css={{
            columns: 'repeat(1, 1fr)',
            gap: 80,
            my: '$10',
            '@md': {
              columns: 'repeat(3, 1fr)',
              gap: '$5',
            },
          }}
        >
          {projectLinks?.map((item) => (
            <Box as="article" key={item.title}>
              <ProjectCard {...item} />
            </Box>
          ))}
        </Grid>

        <Text as="h4" weight="normal" css={{ py: '$10' }}>
          {'Check out all my projects on '}

          <Link
            href="https://github.com/vinihvc?tab=repositories"
            decorated
            isExternal
            css={{
              color: '$primary',
              '&:hover': {
                color: '$primary',
              },
            }}
          >
            GitHub
          </Link>
        </Text>
      </Container>
    </>
  )
}

export default ProjectsPage
