import { NextSeo } from 'next-seo'

import HomeTemplate from '@templates/Home'

const HomePage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <HomeTemplate />
    </>
  )
}

export default HomePage
