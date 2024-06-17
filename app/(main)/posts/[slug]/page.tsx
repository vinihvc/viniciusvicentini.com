import { Link } from '@/components/ui/link'
import { components } from '@/components/ui/post/mdx'
import { SEO } from '@/constants/seo'
import { createOgImage } from '@/utils/create-og-image'
import { formatPost, readTime } from '@/utils/formatter'
import { allPosts } from 'contentlayer/generated'
import { Calendar, ChevronLeft, Clock, Eye } from 'lucide-react'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

interface PostPageProps {
	params: {
		slug: string
	}
}

export const generateStaticParams = () => {
	return allPosts
		.filter((post) => post.status === 'published')
		.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async (
	props: PostPageProps,
): Promise<Metadata> => {
	const { params } = props

	const post = allPosts.find((post) => post.slug === params.slug)

	const url = `${SEO.url}/posts/${post?.slug}`

	return {
		title: post?.title,
		description: post?.description,
		alternates: { canonical: url },
		openGraph: {
			title: post?.title,
			description: post?.description,
			url,
			images: [
				{
					url: createOgImage(post?.title || ''),
					width: 1600,
					height: 836,
					alt: post?.title,
				},
			],
		},
	}
}

const PostPage = async (props: PostPageProps) => {
	const { params } = props

	const post = allPosts.find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const formattedPost = formatPost(post)

	const MDXContent = useMDXComponent(formattedPost.body.code)

	return (
		<div className="container selection:bg-sky-500">
			<Link
				className="inline-flex gap-2 items-center text-muted hover:text-white focus-visible:text-white ring-blue-500"
				href="/posts"
			>
				<span className="p-1 bg-white/10 rounded-full">
					<ChevronLeft className="!stroke-2" />
				</span>
				All Posts
			</Link>

			<div className="space-y-2 mt-5 border-b-2 border-white/5 pb-4">
				<h1 className="font-bold text-4xl">
					<Balancer ratio={0}>{formattedPost.title}</Balancer>
				</h1>

				<h2 className="text-muted text-xl">{formattedPost.description}</h2>
			</div>

			<div className="flex gap-5 mt-4 text-muted">
				<div className="flex gap-2 items-center">
					<Calendar className="size-4" />
					{formattedPost.publishedAt}
				</div>

				<div className="flex gap-2 items-center">
					<Clock className="size-4" />
					{`~${readTime(formattedPost.body.raw)} min`}
				</div>

				<div className="flex gap-2 items-center">
					<Eye className="size-4" />
					{`${10} views`}
				</div>
			</div>

			<div className="prose prose-invert sm:gap-10 mt-10 text">
				{formattedPost.updatedAt && (
					<blockquote className="text-muted">
						This post was updated on{' '}
						<time dateTime={formattedPost.publishedAt}>
							{formattedPost.publishedAt}
						</time>
					</blockquote>
				)}

				<MDXContent components={components} />
			</div>
		</div>
	)
}

export default PostPage
