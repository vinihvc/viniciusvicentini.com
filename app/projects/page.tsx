'use client'

import { motion } from 'framer-motion'

import { Link } from '@/components/link'
import { Repo } from '@/components/repo'
import { REPO_LINKS } from '@/constants/repo'

const transition = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
}

const ProjectsPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
        {REPO_LINKS?.map((item, index) => (
          <motion.div
            key={item.title}
            variants={transition}
            initial="hidden"
            animate="show"
            transition={{ delay: index * 0.1 }}
          >
            <Repo {...item} />
          </motion.div>
        ))}
      </div>

      <motion.h4
        className="py-10"
        variants={transition}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
      >
        {'Check out all my projects on '}

        <Link
          href="/github"
          className="text-primary hover:decoration-white"
          decorated
          isExternal
        >
          GitHub
        </Link>
      </motion.h4>
    </>
  )
}

export default ProjectsPage
