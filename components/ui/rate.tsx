import { Star } from 'lucide-react'

import { cn } from '@/utils/cn'

interface RateProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The rating value
	 */
	value: number
}

export const Rate = (props: RateProps) => {
	const { value, ...rest } = props

	if (value > 5 || value < 0) {
		throw new Error('Rating must be between 0 and 5')
	}

	return (
		<div className="flex items-center" {...rest}>
			{[...Array(5)].map((star) => (
				<Star
					key={star}
					aria-checked={value > star}
					className={cn('text-gray-300 size-4 aria-checked:text-yellow-500')}
					fill="currentColor"
					stroke="black"
				/>
			))}

			<span className="sr-only">Rating: {value} out of 5 stars</span>
		</div>
	)
}
