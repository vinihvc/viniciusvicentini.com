import { Metadata } from 'next'

import { Title } from '@/components/title'

const PAGE_NAME = 'Career'

export const metadata: Metadata = {
  title: PAGE_NAME,
}

type CareerLayoutProps = {
  children: React.ReactNode
}

const CareerLayout = (props: CareerLayoutProps) => {
  const { children } = props

  return (
    <div className="container max-w-3xl">
      <Title className="from-primary to-purple-500">{PAGE_NAME}</Title>

      <div className="flex max-w-xl flex-col">{children}</div>
    </div>
  )
}

export default CareerLayout
