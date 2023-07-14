import { Star } from 'lucide-react'

import { cn } from '@/utils/cn'

type StarsProps = {
  rating: number
} & React.HTMLAttributes<HTMLDivElement>

export const Stars = (props: StarsProps) => {
  const { rating, ...rest } = props

  if (rating > 5 && rating < 0) {
    throw new Error('Rating must be between 0 and 5')
  }

  return (
    <div className="flex items-center" {...rest}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          aria-checked={rating > i}
          className={cn('h-5 w-5 text-gray-300 aria-checked:text-yellow-500')}
          fill="currentColor"
          stroke="black"
        />
      ))}

      <span className="sr-only">Rating: {rating} out of 5 stars</span>
    </div>
  )
}
