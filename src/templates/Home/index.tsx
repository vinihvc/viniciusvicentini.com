import BaseLayout from '@templates/Base'

import Heading from '@primitives/Heading'
import Grid from '@primitives/Grid'

import Hero from '@components/Hero'
import Container from '@components/Container'
import Card from '@components/Card'

const HomeLayout = () => {
  return (
    <BaseLayout>
      <Hero />

      <Container>
        <Heading css={{ textAlign: 'center' }}>Services</Heading>

        <Grid css={{ columns: 'repeat(2, 1fr)', gap: '$5', my: '$10' }}>
          <Card title="UI/UX">
            Beauty is important, it’s the first thing we notice. They exist
            absolute practices to make the design more beautiful, it is
            essential to have a clean, fluid, responsive, easy to understand,
            and pleasing design the user with a great experience.
          </Card>

          <Card title="Performance">
            Research indicates that if the initial loading of the site takes
            more than 3 seconds, half of users close the site. Speed is
            essential, no one will like and recommend your site to other people
            if it is slow and heavy.
          </Card>

          <Card title="SEO">
            Who is not seen is not remembered. If your site doesn’t have a good
            one indexing on Google, will reach few people. but there are
            techniques and best practices to stay on the first page and in the
            first survey results.
          </Card>

          <Card title="Web Development">
            Working with modern technologies is essential, it is important to
            have a good and modern website. It is important to have a good
          </Card>
        </Grid>
      </Container>
    </BaseLayout>
  )
}

export default HomeLayout
