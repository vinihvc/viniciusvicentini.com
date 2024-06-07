'use client'

import { Button } from '@/components/ui/button'
import { CompanyCard } from '@/components/ui/company-card'
import { Link } from '@/components/ui/link'
import type { CompanyType } from '@/contents/companies'
import { cn } from '@/utils/cn'
import React from 'react'

interface CompaniesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	data: CompanyType[]
}

const MAX_COMPANIES = 3

export const CompaniesSection = (props: CompaniesSectionProps) => {
	const { className, data } = props

	const [showAll, setShowAll] = React.useState(false)

	return (
		<div className={cn('', className)}>
			<ul className="group space-y-2 sm:pl-6">
				{data.map((company, index) => {
					if (!showAll && index >= MAX_COMPANIES) {
						return null
					}

					return (
						<li key={company.company}>
							<Link
								className="block px-2 rounded ring-orange-500"
								key={company.company}
								href={company.url}
								isExternal
							>
								<CompanyCard data={company} />
							</Link>
						</li>
					)
				})}
			</ul>

			<div className="flex justify-end mt-5">
				<Button
					className="ring-orange-500"
					onClick={() => setShowAll((prev) => !prev)}
				>
					{`Show ${showAll ? 'less' : 'all'}`}
				</Button>
			</div>
		</div>
	)
}
