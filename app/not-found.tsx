import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'

const NotFoundPage = () => {
	return (
		<div className="flex flex-1 items-center justify-center selection:bg-red-500">
			<div className="absolute inset-0 overflow-x-hidden overflow-hidden">
				<Meteors number={30} />
			</div>

			<div className="z-[2] flex flex-col items-center space-y-10">
				<div className="flex flex-col items-center space-y-2">
					<p className="text-[150px] font-semibold">404</p>

					<div className="md:text-xl">
						<strong className="bg-purple p-1">Don&apos;t panic</strong>, but
						this page doesn&apos;t exist.
					</div>
				</div>

				<Button size="lg" asChild>
					<Link href="/">Back to Beginning</Link>
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
