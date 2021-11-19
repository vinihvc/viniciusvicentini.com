import { NextSeo } from 'next-seo'

import ProjectsTemplate from '@layouts/Projects'

const ProjectsPage = ({ ...props }) => {
  return (
    <>
      <NextSeo title="Projects" />

      <ProjectsTemplate {...props} />
    </>
  )
}

export default ProjectsPage
