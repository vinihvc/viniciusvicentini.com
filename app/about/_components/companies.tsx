'use client'

import { CompanyCard } from '@/components/ui/company-card'
import { Link } from '@/components/ui/link'
import type { CompanyType } from '@/contents/companies'
import React from 'react'

interface CompaniesSectionProps {
	data: CompanyType[]
}

const MAX_COMPANIES = 3

export const CompaniesSection = (props: CompaniesSectionProps) => {
	const { data } = props

	const [showAll, setShowAll] = React.useState(false)

	return (
		<div>
			<ul className="group space-y-2 pl-6">
				{data.map((company, index) => {
					if (!showAll && index >= MAX_COMPANIES) {
						return null
					}

					return (
						<li
							key={company.company}
							className="group-hover:opacity-50 w-full hover:!opacity-100 transition animate-in fade-in slide-in-from-bottom-10"
						>
							<Link key={company.company} href={company.url} isExternal>
								<CompanyCard data={company} />
							</Link>
						</li>
					)
				})}
			</ul>

			<div className="flex justify-end mt-5">
				<button
					type="button"
					className="bg-white/5 px-4 py-1.5 hover:bg-white/10 rounded-md transition"
					onClick={() => setShowAll((prev) => !prev)}
				>
					{showAll ? 'Show less' : 'Show all'}
				</button>
			</div>
		</div>
	)
}
