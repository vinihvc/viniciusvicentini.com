import React from 'react'

import { SOCIAL_LINKS } from '@/constants/social'
import { Link } from '@/components/ui/link'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/button'
import { SEO } from '@/constants/seo'

const getData = async () => {
	return { about: SEO, links: SOCIAL_LINKS }
}

const HomePage = async () => {
	const { about, links } = await getData()

	return (
		<div className="flex-1 container selection:bg-blue-500 flex flex-col justify-center">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold sm:text-4xl">{about.title}</h1>

				<h2 className="text-muted text-lg">{about.description}</h2>
			</div>

			<div className="flex gap-2 sm:gap-5 mt-5">
				{links.map((link) => (
					<Button key={link.link} className="p-4 size-auto" asChild>
						<Link href={link.link} isExternal>
							{React.createElement(link.icon, {
								className: 'size-6',
								'aria-hidden': true,
							})}

							<span className="sr-only">{`Visit my ${link.title}`}</span>
						</Link>
					</Button>
				))}
			</div>
		</div>
	)
}

export default HomePage
