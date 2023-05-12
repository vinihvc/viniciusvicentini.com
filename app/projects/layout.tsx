import { Metadata } from 'next'

import { Link } from '@/components/link'
import { Title } from '@/components/title'

const PAGE_NAME = 'Projects'

export const metadata: Metadata = {
  title: PAGE_NAME,
}

type ProjectsLayoutProps = {
  children: React.ReactNode
}

const ProjectsLayout = (props: ProjectsLayoutProps) => {
  const { children } = props

  return (
    <div className="container max-w-3xl">
      <Title className="from-blue to-purple">{PAGE_NAME}</Title>

      <div className="flex flex-col space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
          {children}
        </div>

        <h4 className="py-10">
          {'Check out all my projects on '}

          <Link href="/github" decorated isExternal>
            GitHub
          </Link>
        </h4>
      </div>
    </div>
  )
}

export default ProjectsLayout
