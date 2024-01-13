import { Star } from 'lucide-react'

import { cn } from '@/utils/cn'

interface StarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
}

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
          className={cn('text-gray-300 h-4 w-4 aria-checked:text-warning')}
          fill="currentColor"
          stroke="black"
        />
      ))}

      <span className="sr-only">Rating: {rating} out of 5 stars</span>
    </div>
  )
}
