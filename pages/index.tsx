import { COMPANIES } from '@/constants/companies'
import { SocialLinks } from 'components/social-links'
import { m } from 'framer-motion'

import { Link } from '@/components/ui/link'

const HomePage = () => {
  const currentWork = COMPANIES.find((company) => !company.endDate) ?? null

  return (
    <section className="container flex flex-1 flex-col items-center justify-center">
      <div>
        <m.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl font-bold sm:text-4xl"
        >
          Vinicius Vicentini
        </m.h1>

        <m.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400"
        >
          Front-end engineer who loves UX, Performance and Design.
        </m.h2>

        <div className="my-5 ml-1 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <m.div
              key={i}
              layoutId={`dot-${i}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.6 + 0.1 * i }}
              viewport={{ once: true }}
              className="h-[3px] w-[3px] bg-white"
              aria-hidden
            />
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
          className="text-lg text-gray-400"
        >
          <p>Brazilian based in Dublin, Ireland.</p>

          {currentWork && (
            <p>
              {'Currently working at '}

              <Link
                href={currentWork?.url}
                target="_blank"
                rel="noreferrer noopener"
                decorated
              >
                {`${currentWork?.company}.`}
              </Link>
            </p>
          )}
        </m.div>

        <SocialLinks />
      </div>
    </section>
  )
}

export default HomePage
