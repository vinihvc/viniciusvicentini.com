import { NextSeo } from 'next-seo'

import RepoTemplate from '@layouts/Repo'

const RepoPage = ({ ...props }) => {
  return (
    <>
      <NextSeo title="My projects" />

      <RepoTemplate {...props} />
    </>
  )
}

export default RepoPage
