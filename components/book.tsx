import Image from 'next/image'

import { READ_BOOKS } from '@/constants/books'
import { Spotlight } from './spotlight'
import { Stars } from './stars'

type BookCardProps = {
  book: (typeof READ_BOOKS)[0]
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Spotlight>
      <div className="relative aspect-[9/13]">
        <div className="absolute inset-x-0 top-0 z-10 h-10 rounded bg-white/10" />

        <Image
          src={`/books/${book.thumbnail}.jpg`}
          alt={book.title}
          className="rounded"
          sizes="(max-width: 640px) 100vw, 640px"
          fill
        />
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="relative -right-1 -top-1 z-10">
          <Stars rating={book.rate} />
        </div>

        <div className="flex h-14 items-center bg-black/70 px-2 backdrop-blur-sm">
          <div className="text-sm font-bold">{book.title}</div>
        </div>
      </div>
    </Spotlight>
  )
}
