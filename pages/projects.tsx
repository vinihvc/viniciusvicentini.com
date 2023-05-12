import { REPO_LINKS } from '@/constants/repo'
import { ProjectCard } from 'components/project-card'
import { m } from 'framer-motion'
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
            {REPO_LINKS?.map((item, index) => (
              <m.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...item} />
              </m.div>
            ))}
          </div>

          <h4 className="py-10">
            {'Check out all my projects on '}

            <Link href="/github" decorated isExternal>
              GitHub
            </Link>
          </h4>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
