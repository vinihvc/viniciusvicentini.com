import type { CompanyType } from '@/content/companies'
import { cn } from '@/utils/cn'
import Image from 'next/image'

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
			className={cn('grid items-center rounded-lg py-3 grid-cols-2', className)}
			{...rest}
		>
			<div className="flex gap-5 items-center whitespace-nowrap">
				<div className="shrink-0">
					<Image
						className="rounded-full border border-white/20 pointer-events-none"
						src={`/images/companies/${data.image}.webp`}
						width={48}
						height={48}
						alt={`${data.company} brand logo`}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>

				<div>
					<h1 className="font-medium">{data.title}</h1>

					<h2 className="text-muted">{data.company}</h2>
				</div>
			</div>

			<div className="sm:mt-1 flex gap-1 text-muted justify-end items-center">
				<span>{`${data.startDate} - `}</span>

				{data.endDate ? (
					<time> {data.endDate}</time>
				) : (
					<span className="text-white">Now</span>
				)}
			</div>
		</article>
	)
}
