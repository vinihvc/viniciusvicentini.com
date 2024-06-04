import Image from 'next/image'

import type { CompanyType } from '@/contents/companies'
import { cn } from '@/utils/cn'

interface CompanyCardProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Company data
	 */
	data: CompanyType
}

export const CompanyCard = (props: CompanyCardProps) => {
	const { data, className, ...rest } = props

	return (
		<article
			className={cn(
				'grid items-center rounded-lg py-3 sm:grid-cols-2',
				className,
			)}
			{...rest}
		>
			<div className="flex gap-5 items-center">
				<div className="shrink-0">
					<Image
						className="rounded-full border border-border pointer-events-none max-sm:relative top-4"
						src={`/images/companies/${data.image}.webp`}
						width={48}
						height={48}
						alt={`${data.company} logo`}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>

				<div>
					<h3>{data.title}</h3>

					<p className="text-muted">{data.company}</p>
				</div>
			</div>

			<div className="sm:mt-1 flex gap-1 text-muted sm:justify-end max-sm:ml-[67px]">
				<time>{data.startDate}</time>
				<span aria-hidden>•</span>

				{data.endDate ? (
					<time> {data.endDate}</time>
				) : (
					<span className="text-white">Now</span>
				)}
			</div>
		</article>
	)
}
