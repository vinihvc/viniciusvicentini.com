import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import Box from '@primitives/Box'
import Heading from '@primitives/Heading'
import Grid from '@primitives/Grid'

import Card from '@components/Card'

const HomeServices = () => {
  const { ref, inView } = useInView()

  return (
    <Box
      as={motion.section}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 300
      }}
      transition={{
        delay: 1
      }}
    >
      <Heading css={{ textAlign: 'center' }}>Services</Heading>

      <Grid ref={ref} css={{ columns: 'repeat(2, 1fr)', gap: '$5', my: '$10' }}>
        <Card title="UI/UX">
          Beauty is important, it’s the first thing we notice. They exist
          absolute practices to make the design more beautiful, it is essential
          to have a clean, fluid, responsive, easy to understand, and pleasing
          design the user with a great experience.
        </Card>

        <Card title="Performance">
          Research indicates that if the initial loading of the site takes more
          than 3 seconds, half of users close the site. Speed is essential, no
          one will like and recommend your site to other people if it is slow
          and heavy.
        </Card>

        <Card title="SEO">
          Who is not seen is not remembered. If your site doesn’t have a good
          one indexing on Google, will reach few people. but there are
          techniques and best practices to stay on the first page and in the
          first survey results.
        </Card>

        <Card title="Web Development">
          Working with modern technologies is essential, it is important to have
          a good and modern website. It is important to have a good
        </Card>
      </Grid>
    </Box>
  )
}

export default HomeServices
