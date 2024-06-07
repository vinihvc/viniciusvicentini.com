import { Title } from '@/components/ui/title'
import { COMPANIES } from '@/contents/companies'
import { CompaniesSection } from './_components/companies'
import { DynamicImage } from '@/components/ui/dynamic-image'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { Link } from '@/components/ui/link'

const getData = async () => {
	return {
		companies: COMPANIES,
	}
}

const AboutPage = async () => {
	const { companies } = await getData()

	const firstJob = companies[companies.length - 1]
	const startYear = new Date(firstJob.startDate).getFullYear()

	return (
		<section className="container selection:bg-orange-500">
			<div className="space-y-1">
				<Title className="from-orange-500 to-yellow-500">About</Title>

				<h2 className="text-muted text-lg">
					Here's a little bit about me, my career, and what I do.
				</h2>
			</div>
			<div className="flex flex-col sm:flex-row gap-5 sm:gap-14 sm:items-center mt-10">
				<DynamicImage
					className="shrink-0 rounded aspect-square max-xs:w-full pointer-events-none"
					src="/images/me.webp"
					width={300}
					height={300}
					alt="Picture of Vinicius Vicentini, looking up and behind is the Rijksmuseum"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className="space-y-5 text-muted text-justify">
					<p>
						<strong className="text-white">Hi, I'm Vini</strong>, my first foray
						into programming came from editing <i>Mods</i> for Counter-Strike
						1.6. Then I had some websites and blogs and eventually decided to
						turn it into a career.
					</p>

					<p>
						I enjoy working where design meets code.
						<strong className="text-white">
							{' '}
							CSS, Design Systems, and Animation
						</strong>{' '}
						- these are my passion points. Crafting exceptional component APIs
						that users love to use.
					</p>

					<p>
						In my free time, I enjoy reading fiction books, cooking, and
						<strong className="text-white"> spending time with dogs.</strong>
					</p>
				</div>
			</div>
			<div className="mt-20">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-black">Career</h2>

						<h3 className="text-muted">
							{`${
								new Date().getFullYear() - startYear
							}+ years of experience in the industry`}
						</h3>
					</div>
				</div>

				<CompaniesSection className="mt-4" data={companies} />
			</div>
		</section>
	)
}

export default AboutPage
