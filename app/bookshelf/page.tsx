/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next'
import Image from 'next/image'

import { Stars } from '@/components/stars'
import { Title } from '@/components/title'
import { BOOKS } from '@/constants/books'

const PAGE_NAME = 'Bookshelf'

export const metadata: Metadata = {
  title: PAGE_NAME,
}

const ReadingPage = async () => {
  return (
    <div className="container max-w-3xl">
      <Title className="from-cyan-300 to-fuchsia-700">{PAGE_NAME}</Title>

      <div className="space-y-5">
        <div className="grid grid-cols-4 items-start gap-4">
          {BOOKS?.map((book) => (
            <article
              key={book.title}
              className="relative overflow-hidden rounded"
            >
              <div className="relative aspect-[9/13]">
                <div
                  className="absolute inset-x-0 top-0 z-10 h-10"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(0.3px)',
                  }}
                ></div>

                <Image
                  src={`/books/${book.thumbnail}.jpg`}
                  alt={book.title}
                  fill
                />
              </div>

              <div className="absolute inset-x-0 bottom-0">
                <div className="flex h-10 items-center bg-black/50 px-2 backdrop-blur-sm">
                  <div>
                    <div className="truncate text-sm font-bold">
                      {book.title}
                    </div>

                    <Stars rating={book.rate} />
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
