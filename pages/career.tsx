import { COMPANIES } from '@/constants/companies'
import formatDate from '@/utils/formatDate'
import { m } from 'framer-motion'
import { NextSeo } from 'next-seo'

import { PageTitle } from '@/components/page-title'
import { Link } from '@/components/ui/link'

const AboutPage = () => {
  return (
    <>
      <NextSeo title="Career" />

      <div className="container max-w-3xl">
        <PageTitle className="from-pink-500 to-purple-500 ">career</PageTitle>

        <div className="flex flex-col space-y-8 pb-10">
          {COMPANIES?.map(
            (
              { startDate, endDate, company, title, url, city, state },
              index,
            ) => {
              const formattedStartDate = formatDate(startDate)
              const formattedEndDate = endDate ? formatDate(endDate) : 'Present'

              return (
                <m.article
                  key={company}
                  className="text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="font-semibold text-gray-400">{title}</h3>

                  <p className="text-lg">
                    <Link
                      href={url}
                      className="font-semibold"
                      decorated
                      isExternal
                    >
                      {company}
                    </Link>

                    <span className="font-light">{` • ${city}, ${state}`}</span>
                  </p>

                  <div className="mt-1 flex gap-2 text-gray-400">
                    <time>{formattedStartDate}</time>
                    <span>–</span>
                    <time>{formattedEndDate}</time>
                  </div>
                </m.article>
              )
            },
          )}
        </div>
      </div>
    </>
  )
}

export default AboutPage
