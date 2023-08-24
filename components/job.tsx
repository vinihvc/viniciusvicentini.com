import * as React from 'react'

import { COMPANIES } from '@/constants/companies'
import { cn } from '@/utils/cn'
import formatDate from '@/utils/formatDate'

type JobProps = {
  job: (typeof COMPANIES)[0]
} & React.HTMLAttributes<HTMLAnchorElement>

export const Job = (props: JobProps) => {
  const { job, className, ...rest } = props

  const formattedStartDate = formatDate(job.startDate)
  const formattedEndDate = job.endDate ? formatDate(job.endDate) : 'Present'

  return (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('text-sm', className)}
      {...rest}
    >
      <div className="relative grid items-center rounded-lg py-3 duration-200 sm:grid-cols-2 sm:px-4 sm:hover:bg-white/5">
        <div>
          <h3 className="font-semibold text-muted">{job.title}</h3>

          <p className="text-lg font-semibold">{job.company}</p>
        </div>

        <div className="mt-1 flex gap-1 text-gray-500 sm:justify-end">
          <time>{formattedStartDate}</time>
          <span>–</span>
          <time>{formattedEndDate}</time>
        </div>
      </div>
    </a>
  )
}
