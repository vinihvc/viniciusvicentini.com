import { Link } from '@/components/ui/link'
import { Repo } from '@/components/ui/repo'
import { Title } from '@/components/ui/title'
import { REPO_LINKS } from '@/contents/repo'

const ProjectsPage = () => {
	return (
		<div className="container selection:bg-green-500 selection:text-black">
			<div className="space-y-1">
				<Title className="from-green-500 to-teal-500">Projects</Title>

				<h2 className="text-muted text-lg">
					Here are some of the projects I have worked on.
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 mt-10">
				{REPO_LINKS?.map((repo) => (
					<Link key={repo.title} href={repo.website_url} isExternal>
						<Repo data={repo} />
					</Link>
				))}
			</div>

			<h4 className="py-10">
				{'Check out all my projects on '}

				<Link
					href="/github"
					className="text-primary hover:decoration-white"
					decorated
					isExternal
				>
					GitHub
				</Link>
			</h4>
		</div>
	)
}

export default ProjectsPage
