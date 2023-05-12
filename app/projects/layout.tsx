import { Metadata } from 'next'

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
      <Title className="from-blue-500 to-purple-500">{PAGE_NAME}</Title>

      <div className="flex flex-col space-y-4 md:space-y-10">{children}</div>
    </div>
  )
}

export default ProjectsLayout
