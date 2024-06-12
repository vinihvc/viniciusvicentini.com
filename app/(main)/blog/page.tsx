import { getPosts } from '@/lib/posts'

export const metadata = {
	title: 'Blog',
	description: 'Read my blog.',
}

export default async function Page() {
	const { posts, filters } = getPosts()

	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
		</section>
	)
}
