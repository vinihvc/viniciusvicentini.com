/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next'
import Image from 'next/image'

import { Title } from '@/components/title'

const PAGE_NAME = 'Bookshelf'

export const metadata: Metadata = {
  title: PAGE_NAME,
}

const getData = async () => {
  const books = [
    'zDsqDwAAQBAJ',
    'F4RNEAAAQBAJ',
    'TXXTDwAAQBAJ',
    'M94NEAAAQBAJ',
    '2CEJnm7PRtIC',
    'jEBdAwAAQBAJ',
    '1yYuB7N0HPIC',
    'JPwkDwAAQBAJ',
  ]

  const res = await Promise.all(
    books.map(async (book) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/volumes/${book}`,
      )
      return res
    }),
  )

  const data = await Promise.all(res.map((r) => r.json()))

  return data
}

const ReadingPage = async () => {
  const books = await getData()

  return (
    <div className="container max-w-3xl">
      <Title className="from-cyan-300 to-fuchsia-700">{PAGE_NAME}</Title>

      <div className="space-y-5">
        <div className="grid grid-cols-4 items-start gap-2">
          {books?.map((book, i) => (
            <article key={i} className="relative overflow-hidden rounded">
              <div className="aspect-[9/13]">
                <Image
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo?.title}
                  fill
                />
              </div>

              <div className="absolute inset-x-0 bottom-0">
                <div className="flex h-10 items-center bg-black/50 px-2 backdrop-blur-sm">
                  <div className="truncate text-sm font-bold">
                    {book.volumeInfo?.title}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReadingPage
