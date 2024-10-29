import type { BookType } from '@/contents/books'
import { cn } from '@/utils/cn'

import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { Rating } from '@/components/ui/rating'

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The book to be displayed
   */
  book: BookType
}

export const BookCard = async (props: BookCardProps) => {
  const { book, className, ...rest } = props

  return (
    <article
      title={book.title}
      className={cn(
        'group relative aspect-[9/13] overflow-hidden rounded-lg',
        className,
      )}
      {...rest}
    >
      <PlaceholderImage
        type="color"
        src={`/images/books/${book.thumbnail}.jpg`}
        alt={`Cover of ${book.title}`}
        className="pointer-events-none scale-105 rounded object-cover"
        quality={20}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="relative flex items-center justify-center transition-all group-hover:opacity-100 md:top-2 md:opacity-0 md:group-hover:-top-1">
          <Rating value={book.rate} />
        </div>

        <div className="flex h-10 items-center bg-black/70 px-1">
          <h1 className="line-clamp-2 font-mono text-xs font-semibold">
            {book.title}
          </h1>
        </div>
      </div>
    </article>
  )
}
