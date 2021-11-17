import { NextSeo } from 'next-seo'

import HomeTemplate from '@layouts/Home'

const HomePage = () => {
  return (
    <>
      <NextSeo />

      <HomeTemplate />
    </>
  )
}

export default HomePage
