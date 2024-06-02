import React from 'react'

import { SOCIAL_LINKS } from '@/constants/social'
import { Link } from '@/components/ui/link'
import { cn } from '@/utils/cn'

const HomePage = () => {
	return (
		<div className="flex-1 container selection:bg-blue-500 selection:text-black flex flex-col justify-center">
			<div className="animate-in fade-in-0 slide-in-from-bottom-10 zoom-in-95 origin-left">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold sm:text-4xl">Vinicius Vicentini</h1>

					<h2 className="text-muted">
						Software engineer who loves UX, Performance and Design.
					</h2>
				</div>

				<div className="mt-5 flex space-x-5">
					{SOCIAL_LINKS.map((link) => (
						<Link
							key={link.link}
							href={link.link}
							className={cn(
								'text-muted hover:text-white border border-border hover:border-border-hover bg-white/5 p-4 rounded-lg drop-shadow transition-all',
								link.className,
							)}
							isExternal
						>
							{React.createElement(link.icon, {
								className: 'size-6',
								'aria-hidden': true,
							})}

							<span className="sr-only">{`Visit my ${link.title}`}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomePage
