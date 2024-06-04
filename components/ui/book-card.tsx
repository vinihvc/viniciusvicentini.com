import type { BookType } from '@/contents/books'
import { Rating } from './rating'
import { cn } from '@/utils/cn'
import Image from 'next/image'

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The book to be displayed
	 */
	book: BookType
}

export const BookCard = (props: BookCardProps) => {
	const { book, className, ...rest } = props

	return (
		<article
			title={book.title}
			className={cn(
				'group/book relative aspect-[9/13] overflow-hidden rounded-lg',
				className,
			)}
			{...rest}
		>
			<Image
				src={`/images/books/${book.thumbnail}.jpg`}
				alt={`Cover of ${book.title}`}
				className="rounded pointer-events-none object-cover scale-105"
				quality={50}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				fill
			/>

			<div className="absolute inset-x-0 bottom-0">
				<div className="flex items-center justify-center relative md:top-2 md:group-hover/book:-top-1 md:opacity-0 group-hover/book:opacity-100 transition-all">
					<Rating value={book.rate} />
				</div>

				<div className="flex h-10 items-center bg-black/70 px-1">
					<h1 className="line-clamp-2 text-xs font-semibold font-mono">
						{book.title}
					</h1>
				</div>
			</div>
		</article>
	)
}
