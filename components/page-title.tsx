import React from 'react'
import { cn } from '@/utils/cn'

type PageTitleProps = React.ComponentPropsWithoutRef<'h1'>

export const PageTitle = (props: PageTitleProps) => {
  const { children, className, ...rest } = props

  return (
    <h1
      className={cn(
        'inline-block bg-gradient-to-r bg-clip-text py-10 text-4xl font-bold text-transparent transition duration-200 sm:text-5xl',
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  )
}
