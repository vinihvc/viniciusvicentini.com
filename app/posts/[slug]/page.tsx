import { components } from '@/components/ui/post/mdx'
import { SEO } from '@/constants/seo'
import { createOgImage } from '@/utils/create-og-image'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

interface PostPageProps {
	params: {
		slug: string
	}
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

	const MDXContent = useMDXComponent(post.body.code)

	return (
		<div className="container selection:bg-sky-500">
			<div className="space-y-1">
				<h1 className="font-black text-5xl">
					<Balancer>{post.title}</Balancer>
				</h1>

				<h2 className="text-muted text-lg">{post.description}</h2>
			</div>

			<div className="prose prose-invert sm:gap-10 mt-10">
				<MDXContent components={components} />
			</div>
		</div>
	)
}

export default PostPage
