import { Link } from '@/components/ui/link'
import { Repo } from '@/components/ui/repo-card'
import { Title } from '@/components/ui/title'
import { REPO_LINKS } from '@/contents/repo'
import { ExternalLink } from 'lucide-react'

const getData = async () => {
	return {
		repos: REPO_LINKS,
	}
}

const ProjectsPage = async () => {
	const { repos } = await getData()

	return (
		<div className="container selection:bg-green-500">
			<div className="space-y-1">
				<Title className="from-green-500 to-teal-500">Projects</Title>

				<h2 className="text-muted text-lg">
					My open-source projects and contributions.
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 mt-10">
				{repos.map((repo) => (
					<Link key={repo.title} href={repo.website_url} isExternal>
						<Repo data={repo} />
					</Link>
				))}
			</div>

			<div className="flex justify-end mt-5">
				<Link
					href="https://github.com/vinihvc?tab=repositories"
					className="inline-flex bg-white/5 px-4 py-1.5 hover:bg-white/10 rounded-md transition items-center gap-3 text-muted hover:text-white"
					isExternal
				>
					<span className="relative top-[1px]">Visit my GitHub</span>
					<ExternalLink className="size-4" />
				</Link>
			</div>
		</div>
	)
}

export default ProjectsPage
