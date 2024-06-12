import React from 'react'
import { ExternalLink } from 'lucide-react'

import type { REPO_LINKS } from '@/content/repo'
import { cn } from '@/utils/cn'

interface RepoProps extends React.HTMLAttributes<HTMLDivElement> {
	data: (typeof REPO_LINKS)[number]
}

export const Repo = (props: RepoProps) => {
	const { data, className, ...rest } = props

	return (
		<article
			className={cn(
				'relative flex items-center gap-x-5 rounded-lg border border-white/5 bg-background p-4 drop-shadow-lg hover:border-white/10 transition',
				className,
			)}
			{...rest}
		>
			{React.createElement(data.icon, {
				size: 28,
				'aria-hidden': true,
			})}

			<div>
				<h1 className="mb-1 text-lg font-semibold tracking-wide">
					{data.title}
				</h1>

				<p className="line-clamp-2 text-sm text-muted">{data.description}</p>
			</div>

			<div className="absolute right-3 top-3">
				<ExternalLink
					size={12}
					className="opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100 transition"
				/>
			</div>
		</article>
	)
}
