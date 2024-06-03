import Image from 'next/image'

import type { BookType } from '@/contents/books'
import { Rate } from './rate'

interface BookCardProps {
	book: BookType
}

export const BookCard = ({ book }: BookCardProps) => {
	return (
		<article className="relative aspect-[9/13] overflow-hidden rounded-lg border-2 border-border">
			<div className="absolute inset-x-0 -top-10 z-[1] h-32 w-full -rotate-45 rounded-full rounded-t-lg bg-white/20" />

			<Image
				src={`/images/books/${book.thumbnail}.jpg`}
				alt={`Cover of ${book.title}`}
				className="rounded bg-background"
				quality={20}
				sizes="(max-width: 640px) 100vw, 640px"
				fill
			/>

			<div className="absolute inset-x-0 bottom-0">
				<div className="relative -right-1 -top-1">
					<Rate value={book.rate} />
				</div>

				<div className="flex h-12 items-center bg-black/70 px-2">
					<div className="line-clamp-2 text-xs font-semibold">{book.title}</div>
				</div>
			</div>
		</article>
	)
}
