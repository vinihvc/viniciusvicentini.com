'use client'

import { motion } from 'framer-motion'

import { Job } from '@/components/job'
import { COMPANIES } from '@/constants/companies'

const CareerPage = () => {
  return (
    <>
      {COMPANIES?.map((company, index) => (
        <motion.div
          key={company.company}
          className="text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Job job={company} />
        </motion.div>
      ))}
    </>
  )
}

export default CareerPage
