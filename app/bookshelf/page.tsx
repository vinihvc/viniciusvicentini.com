'use client'

import { motion } from 'framer-motion'

import { BookCard } from '@/components/book'
import { READ_BOOKS } from '@/constants/books'

const BookshelfPage = () => {
  return (
    <motion.div
      className="grid grid-cols-2 items-start gap-2 sm:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {READ_BOOKS?.map((book) => <BookCard key={book.title} book={book} />)}
    </motion.div>
  )
}

export default BookshelfPage
