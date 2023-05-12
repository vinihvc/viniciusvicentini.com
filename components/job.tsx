import * as React from 'react'

import { Link } from '@/components/link'
import { COMPANIES } from '@/constants/companies'
import { cn } from '@/utils/cn'
import formatDate from '@/utils/formatDate'

type JobProps = {
  job: (typeof COMPANIES)[0]
} & React.HTMLAttributes<HTMLDivElement>

export const Job = (props: JobProps) => {
  const { job, className, ...rest } = props

  const formattedStartDate = formatDate(job.startDate)
  const formattedEndDate = job.endDate ? formatDate(job.endDate) : 'Present'

  return (
    <article className={cn('', className)} {...rest}>
      <h3 className="font-semibold text-muted">{job.title}</h3>

      <p className="text-lg">
        <Link href={job.url} className="font-semibold" decorated isExternal>
          {job.company}
        </Link>

        <span className="font-light">{` • ${job.city}, ${job.state}`}</span>
      </p>

      <div className="mt-1 flex gap-2 text-muted">
        <time>{formattedStartDate}</time>
        <span>–</span>
        <time>{formattedEndDate}</time>
      </div>
    </article>
  )
}
