import Container from '@components/Container'

import HomeHero from './components/Hero'
import HomeServices from './components/Services'

const HomeTemplate = () => {
  return (
    <>
      <HomeHero />

      <Container>
        <HomeServices />
      </Container>
    </>
  )
}

export default HomeTemplate
