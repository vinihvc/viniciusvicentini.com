import { Link } from '@/components/ui/link'
import { Repo } from '@/components/ui/repo'
import { Title } from '@/components/ui/title'
import { REPO_LINKS } from '@/constants/repo'

const ProjectsPage = () => {
  return (
    <div className="container max-w-2xl space-y-20">
      <div className="space-y-10">
        <Title>Projects</Title>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
          {REPO_LINKS?.map((repo) => (
            <Link key={repo.title} href={repo.website_url} isExternal>
              <Repo data={repo} />
            </Link>
          ))}
        </div>
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
