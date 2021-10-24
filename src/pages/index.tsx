import { NextSeo } from 'next-seo'

import HomeLayout from '@templates/Home'

const HomePage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <HomeLayout />
    </>
  )
}

export default HomePage
