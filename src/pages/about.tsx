import { NextSeo } from 'next-seo'

import AboutTemplate from '@templates/About'

const HomePage = () => {
  return (
    <>
      <NextSeo title="About" />

      <AboutTemplate />
    </>
  )
}

export default HomePage
