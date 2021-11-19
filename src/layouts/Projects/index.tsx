import Grid from '@primitives/Grid'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

import Container from '@components/Container'
import ProjectCard from '@components/ProjectCard'
import Hero from '@components/Hero'

import projectLinks from '@configs/project-links'

const ProjectsTemplate = () => {
  return (
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
          <ProjectCard key={item.title} {...item} />
        ))}
      </Grid>

      <Text as="h4" size="lg" css={{ pt: '$10' }}>
        {'Check out all my projects on '}
        <Link
          href="https://github.com/viniciushvc?tab=repositories"
          decorated
          isExternal
        >
          Github
        </Link>
      </Text>
    </Container>
  )
}

export default ProjectsTemplate
