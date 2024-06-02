import { Title } from '@/components/ui/title'

const CraftPage = () => {
	return (
		<section className="container selection:bg-amber-500 selection:text-black">
			<div className="space-y-1">
				<Title className="from-amber-500 to-red-500">Craft</Title>

				<h2 className="text-muted text-lg">
					Experiments and projects I've been working on. 🛠️
				</h2>
			</div>

			<div className="mt-10">
				<p>Soon</p>
			</div>
		</section>
	)
}

export default CraftPage
