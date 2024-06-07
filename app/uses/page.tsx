import { Link } from '@/components/ui/link'
import { Title } from '@/components/ui/title'
import { USE_STACK } from '@/contents/uses'

const getData = async () => {
	return { uses: USE_STACK }
}

const UsesPage = async () => {
	const { uses } = await getData()

	return (
		<div className="container selection:bg-purple-500">
			<div className="space-y-1">
				<Title className="max-sm:text-4xl from-purple-500 to-blue-500">
					Personal Uses
				</Title>

				<h2 className="text-muted text-lg">
					Some of the tools, apps, and gear that I use on a daily basis.
				</h2>
			</div>

			<div className="space-y-10 mt-10">
				{uses.map((use) => (
					<div key={use.title} className="space-y-4">
						<h2 className="text-2xl font-black">{use.title}</h2>

						<ul className="space-y-2 list-disc list-inside pl-6 marker:text-muted">
							{use.items.map((item) => (
								<li key={item.title}>
									<Link
										href={`${item.link}?ref=viniciusvicentini.com`}
										className="underline underline-offset-4 hover:text-purple-500 transition ring-purple-500"
										isExternal
									>
										{item.title}
									</Link>

									<span className="text-muted"> - {item.description}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default UsesPage
