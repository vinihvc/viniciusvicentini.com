import { Metadata } from 'next'

import { Title } from '@/components/title'

const PAGE_NAME = 'Bookshelf'

export const metadata: Metadata = {
  title: PAGE_NAME,
}

type BookshelfLayoutProps = {
  children: React.ReactNode
}

const BookshelfLayout = async ({ children }: BookshelfLayoutProps) => {
  return (
    <div className="container max-w-3xl">
      <Title className="from-cyan-300 to-fuchsia-700">{PAGE_NAME}</Title>

      {children}
    </div>
  )
}

export default BookshelfLayout
