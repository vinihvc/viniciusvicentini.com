import { NextSeo } from 'next-seo'

import type { RepositoriesTypes } from '../types/repositories'

import RepoTemplate from '@templates/Repo'

import { fetchPinnedRepos } from '@services/api'

export const getServerSideProps = async () => {
  const repos = await fetchPinnedRepos()

  return {
    props: {
      repos
    }
  }
}

export type RepoPageProps = {
  repos: RepositoriesTypes[]
}

const RepoPage = ({ ...props }: RepoPageProps) => {
  return (
    <>
      <NextSeo title="My repositories" />

      <RepoTemplate {...props} />
    </>
  )
}

export default RepoPage
