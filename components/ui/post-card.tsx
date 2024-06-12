import { format, parseISO } from 'date-fns'
import type { Post } from 'contentlayer/generated'

export const PostCard = (post: Post) => {
	return (
		<article className="p-5 rounded-lg border border-white/5 bg-background p-4 drop-shadow-lg hover:border-white/10 transition bg-black text-white shad">
			<h2 className="mb-1 text-xl">{post.title}</h2>

			<time dateTime={post.publishedAt} className="block text-xs">
				{format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
			</time>
		</article>
	)
}
