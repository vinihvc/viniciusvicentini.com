import { BookCard } from '@/components/ui/book'
import { Title } from '@/components/ui/title'
import { READ_BOOKS } from '@/contents/books'

const BookshelfPage = () => {
	return (
		<div className="container">
			<div className="space-y-10">
				<Title>Bookshelf</Title>

				<div className="grid grid-cols-3 items-start gap-2 sm:grid-cols-5 sm:gap-5">
					{READ_BOOKS?.map((book) => (
						<BookCard key={book.title} book={book} />
					))}
				</div>
			</div>
		</div>
	)
}

export default BookshelfPage
