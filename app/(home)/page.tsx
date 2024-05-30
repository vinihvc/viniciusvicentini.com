import { About } from '@/components/section/about'
import { Work } from '@/components/section/work'

const HomePage = () => {
	return (
		<div className="container max-w-2xl space-y-20 md:space-y-32">
			<About />

			<Work />
		</div>
	)
}

export default HomePage
