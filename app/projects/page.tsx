'use client'

import { motion } from 'framer-motion'

import { Repo } from '@/components/repo'
import { REPO_LINKS } from '@/constants/repo'

const ProjectsPage = () => {
  return (
    <>
      {REPO_LINKS?.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Repo {...item} />
        </motion.div>
      ))}
    </>
  )
}

export default ProjectsPage
