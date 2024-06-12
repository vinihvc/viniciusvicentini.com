import { allPosts } from 'contentlayer/generated'
import { PostCard } from '@/components/ui/post-card'
import { compareDesc } from 'date-fns'
import { Title } from '@/components/ui/title'
import Link from 'next/link'

const PostsPage = async () => {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
	)

	return (
		<div className="container selection:bg-green-500">
			<div className="space-y-1">
				<Title className="from-green-500 to-teal-500">Posts</Title>

				<h2 className="text-muted text-lg">All my blog posts.</h2>
			</div>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 mt-10">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/posts/${post.slug}`}
						className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
					>
						<PostCard {...post} />
					</Link>
				))}
			</div>
		</div>
	)
}

export default PostsPage
