import React from 'react'
import { cn } from '@/utils/cn'
import { MotionProps, m } from 'framer-motion'

type PageTitleProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps

export const PageTitle = (props: PageTitleProps) => {
  const { children, className, ...rest } = props

  return (
    <m.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        'inline-block bg-gradient-to-r bg-clip-text py-16 text-4xl font-bold text-transparent sm:text-5xl',
        className,
      )}
      {...rest}
    >
      {children}
    </m.h1>
  )
}
