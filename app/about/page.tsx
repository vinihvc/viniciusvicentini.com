import { Link } from '@/components/ui/link'
import { Title } from '@/components/ui/title'
import { COMPANIES } from '@/contents/companies'
import Image from 'next/image'

const AboutPage = () => {
	return (
		<section className="container selection:bg-orange-500 selection:text-black">
			<div className="space-y-1">
				<Title className="from-orange-500 to-yellow-500">About</Title>

				<h2 className="text-muted text-lg">
					Here's a little bit about me, my career, and what I do.
				</h2>
			</div>

			<div className="flex gap-14 items-center mt-10">
				<div className="relative aspect-square w-2/5 rounded overflow-hidden shrink-0">
					<Image
						className="animate-in fade-in bg-background"
						src="/images/me.webp"
						placeholder="blur"
						blurDataURL="/images/me.jpg"
						alt="Picture of Vinicius Vicentini, looking up and behind is the Rijksmuseum"
						fill
					/>
				</div>

				<div className="space-y-5 text-muted text-justify">
					<p>
						<strong className="text-white">Hi, I'm Vini</strong>, my first foray
						into programming came from managing the editing of mods for
						Counter-Strike 1.6. Then I had some websites and blogs, and finally
						decided to make a career out of it.
					</p>

					<p>
						I thrive in the space where design meets code.
						<strong className="text-white">
							{' '}
							CSS, Design Systems, Animation
						</strong>{' '}
						- these are my passion points. Crafting exceptional component APIs
						that users love is what I do best.
					</p>

					<p>
						In my free time, I enjoy reading fiction books, cooking, and
						<strong className="text-white"> spending time with dogs.</strong>
					</p>
				</div>
			</div>

			<div className="space-y-4 mt-16">
				<div>
					<h2 className="text-2xl font-black">Carrer</h2>

					<h3 className="text-muted">
						{new Date().getFullYear() - 2016} years of experience in the
						industry
					</h3>
				</div>

				<ul className="group space-y-2 pl-6">
					{COMPANIES?.map((company) => (
						<li
							key={company.company}
							className="group-hover:opacity-50 w-full hover:!opacity-100 transition"
						>
							<Link key={company.company} href={company.url} isExternal>
								<div className="grid items-center rounded-lg py-3 duration-200 sm:grid-cols-2">
									<div className="flex gap-5 items-center">
										<div className="shrink-0">
											<Image
												className="rounded-full border border-border"
												src={`/images/companies/${company.image}.webp`}
												width={48}
												height={48}
												alt={`${company.company} logo`}
											/>
										</div>

										<div>
											<h3>{company.title}</h3>

											<p className="text-muted">{company.company}</p>
										</div>
									</div>

									<div className="mt-1 flex gap-1 text-muted sm:justify-end">
										<time>{company.startDate}</time>
										<span aria-hidden>•</span>

										{company.endDate ? (
											<time> {company.endDate}</time>
										) : (
											<span className="text-white">Now</span>
										)}
									</div>
								</div>

								<hr className="h-px w-full border-none bg-border duration-200" />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default AboutPage
