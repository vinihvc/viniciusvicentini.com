import { NextSeo } from 'next-seo'

import AboutTemplate from '@templates/About'

const AboutPage = () => {
  return (
    <>
      <NextSeo title="About me" />

      <AboutTemplate />
    </>
  )
}

export default AboutPage
