import { COMPANIES } from '@/constants/companies'
import formatDate from '@/utils/formatDate'
import { Link } from '../ui/link'
import { Title } from '../ui/title'

interface WorkProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Work = (props: WorkProps) => {
  const { className, ...rest } = props

  return (
    <section className={className} {...rest}>
      <Title>Work</Title>

      <div className="flex flex-col space-y-1">
        {COMPANIES?.map((job) => {
          const formattedStartDate = formatDate(job.startDate)
          const formattedEndDate = job.endDate ? (
            formatDate(job.endDate)
          ) : (
            <span className="text-primary">Present</span>
          )

          return (
            <Link
              key={job.company}
              href={job.url}
              className="group w-full"
              isExternal
            >
              <div className="relative grid items-center rounded-lg py-3 duration-200 sm:grid-cols-2">
                <div>
                  <h3 className="text-muted">{job.title}</h3>

                  <p className="text-lg font-semibold">{job.company}</p>
                </div>

                <div className="mt-1 flex gap-1 text-muted sm:justify-end">
                  <time>{formattedStartDate}</time>
                  <span>•</span>
                  <time>{formattedEndDate}</time>
                </div>
              </div>

              <hr className="h-px w-full border-none bg-border duration-200 group-hover:bg-border-hover" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
