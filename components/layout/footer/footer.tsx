import React from 'react'

import { ItFlag } from '@/components/flags/it'
import { TRAVElING_COUNTRIES } from '@/content/traveling'
import { cn } from '@/utils/cn'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
	const { className, ...rest } = props

	const livingCountry = TRAVElING_COUNTRIES.at(0)

	return (
		<footer className={cn('py-10 md:mt-20', className)} {...rest}>
			<div className="container flex justify-between text-muted">
				<span>
					<div className="flex items-center space-x-2">
						<span className="relative flex size-2">
							<span className="absolute size-full animate-ping rounded-full bg-success opacity-75" />
							<span className="relative size-2 rounded-full bg-success" />
						</span>

						{livingCountry && (
							<>
								<span className="text-xs">Living in {livingCountry.name}</span>

								{React.createElement(livingCountry.flag)}
							</>
						)}
					</div>
				</span>

				<span>&copy;{` ${new Date().getFullYear()} Vinicius Vicentini`}</span>
			</div>
		</footer>
	)
}
