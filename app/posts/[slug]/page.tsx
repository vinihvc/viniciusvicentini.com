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
				<h1 className="font-bold text-5xl">
					<Balancer ratio={0}>{post.title}</Balancer>
				</h1>
			</div>

			<div className="prose prose-invert sm:gap-10 mt-10 text ">
				<MDXContent components={components} />
			</div>
		</div>
	)
}

export default PostPage
