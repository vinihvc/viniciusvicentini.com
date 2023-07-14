'use client'

import { motion } from 'framer-motion'

import { Link } from '@/components/link'
import { COMPANIES } from '@/constants/companies'

const HomePage = () => {
  const currentWork = COMPANIES.find((company) => !company.endDate) ?? null

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl font-bold sm:text-4xl"
      >
        Vinicius Vicentini
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-muted"
      >
        Front-end engineer who loves UX, Performance and Design
      </motion.h2>

      <div className="my-5 ml-1 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        className="text-muted"
      >
        <p>Brazilian based in Dublin, Ireland</p>

        {currentWork && (
          <p>
            {'Currently working at '}

            <Link href={currentWork?.url} isExternal decorated>
              {currentWork?.company}
            </Link>
          </p>
        )}
      </motion.div>
    </>
  )
}

export default HomePage
