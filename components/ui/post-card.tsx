import { format, parseISO } from 'date-fns'
import type { Post } from 'contentlayer/generated'
import { cn } from '@/utils/cn'

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
	data: Post
}

export const PostCard = (props: PostCardProps) => {
	const { data, className, ...rest } = props

	return (
		<article
			className={cn(
				'p-4 space-y-1 bg-background rounded-lg group-hover:bg-white/5 transition',
				className,
			)}
			{...rest}
		>
			<h1 className="text-xl">{data.title}</h1>

			<time dateTime={data.publishedAt} className="block text-muted text-lg">
				{format(parseISO(data.publishedAt), 'LLLL d, yyyy')}
			</time>
		</article>
	)
}
