import { BookCard } from '@/components/ui/book'
import { Title } from '@/components/ui/title'
import { READ_BOOKS } from '@/contents/books'

const BookshelfPage = () => {
	return (
		<section className="container selection:bg-amber-500 selection:text-black">
			<div className="space-y-1">
				<Title className="from-amber-500 to-red-500">Bookshelf</Title>

				<h2 className="text-muted text-lg">
					That's what I've been reading lately. Enjoy! 📚
				</h2>
			</div>

			<div className="grid grid-cols-3 items-start gap-2 sm:grid-cols-5 sm:gap-5 mt-10">
				{READ_BOOKS?.map((book) => (
					<BookCard key={book.title} book={book} />
				))}
			</div>
		</section>
	)
}

export default BookshelfPage
