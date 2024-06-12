import { Title } from '@/components/ui/title'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

interface PostPageProps {
	params: {
		slug: string
	}
}

const PostPage = async (props: PostPageProps) => {
	const { params } = props

	const post = allPosts.find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<div className="container selection:bg-green-500">
			<div className="space-y-1">
				<Title className="from-green-500 to-teal-500">{post?.title}</Title>

				<h2 className="text-muted text-lg">All my blog posts.</h2>
			</div>

			<div
				className="prose prose-invert sm:gap-10 mt-10"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: post.body.html }}
			/>
		</div>
	)
}

export default PostPage
