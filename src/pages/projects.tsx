import { NextSeo } from 'next-seo'

import { motion } from 'framer-motion'

import { Text } from '@primitives/text'
import { Grid } from '@primitives/grid'
import { Link } from '@primitives/link'

import { Container } from '@components/container'
import { Hero } from '@components/hero'
import { ProjectCard } from '@components/project-card'

import { projectLinks } from '@constants/project-links'

const ProjectsPage = () => {
  return (
    <>
      <NextSeo title="Projects" />

      <Container>
        <Hero start="#4568dc" end="#b06ab3">
          projects
        </Hero>

        <Text
          as={motion.h3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          size="2xl"
          weight="bold"
        >
          Featured Projects
        </Text>

        <Grid
          as={motion.div}
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
          {projectLinks?.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 * (i + 0.5) }}
            >
              <ProjectCard {...item} />
            </motion.article>
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
