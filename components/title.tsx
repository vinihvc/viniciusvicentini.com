'use client'

import React from 'react'
import { MotionProps, motion } from 'framer-motion'

import { cn } from '@/utils/cn'

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps

export const Title = (props: TitleProps) => {
  const { children, className, ...rest } = props

  return (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        'inline-block bg-gradient-to-r bg-clip-text py-10 text-4xl font-bold lowercase text-transparent sm:text-5xl md:py-16',
        className,
      )}
      {...rest}
    >
      {children}
    </motion.h1>
  )
}
