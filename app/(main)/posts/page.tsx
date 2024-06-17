import { allPosts } from 'contentlayer/generated'
import { PostCard } from '@/components/ui/post-card'
import { compareDesc } from 'date-fns'
import { Title } from '@/components/ui/title'
import { Link } from '@/components/ui/link'

const PostsPage = async () => {
	const posts = allPosts
		.filter((post) => post.status === 'published')
		.sort((a, b) =>
			compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
		)

	return (
		<div className="container selection:bg-green-500">
			<div className="space-y-1">
				<Title className="from-green-500 to-teal-500">Posts</Title>

				<h2 className="text-muted text-lg">All my blog posts.</h2>
			</div>

			<div className="grid gap-5 sm:gap-10 mt-10">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/posts/${post.slug}`}
						className="group ring-green-500 rounded-lg"
					>
						<PostCard data={post} />
					</Link>
				))}
			</div>
		</div>
	)
}

export default PostsPage
