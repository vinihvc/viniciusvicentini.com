import React from 'react'

import { cn } from '@/utils/cn'

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Title = (props: TitleProps) => {
  const { children, className, ...rest } = props

  return (
    <div
      className={cn(
        'text-xs font-bold uppercase tracking-widest text-primary',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
