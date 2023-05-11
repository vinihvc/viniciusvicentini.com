import { projectLinks } from '@/constants/project-links'
import { ProjectCard } from 'components/project-card'
import { NextSeo } from 'next-seo'

import { PageTitle } from '@/components/page-title'
import { Link } from '@/components/ui/link'

const ProjectsPage = () => {
  return (
    <>
      <NextSeo title="Projects" />

      <div className="container max-w-3xl">
        <PageTitle className="from-blue-500 to-purple-500">projects</PageTitle>

        <div className="flex flex-col space-y-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
            {projectLinks?.map((item) => (
              <ProjectCard key={item.title} {...item} />
            ))}
          </div>

          <h4 className="py-10">
            {'Check out all my projects on '}

            <Link
              href="https://github.com/vinihvc?tab=repositories"
              decorated
              isExternal
            >
              GitHub
            </Link>
          </h4>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
