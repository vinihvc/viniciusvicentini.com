import React from 'react'

import { cn } from '@/lib/utils'

interface RulerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Ruler = (props: RulerProps) => {
  const { className, style, ...rest } = props

  return (
    <article
      className={cn(
        'h-16 min-w-48 p-4',
        'flex items-center justify-center',
        'bg-white/90 bg-no-repeat',
        'border border-border',
        'rounded',
        'resize-x overflow-auto',
        '[--color:rgba(0,0,0,0.5)]',
        className,
      )}
      style={{
        backgroundImage:
          'repeating-linear-gradient(to right, var(--color), var(--color) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(to right, var(--color), var(--color) 1px, transparent 1px, transparent 60px)',
        backgroundSize: '100% 10px, 100% 20px',
        ...style,
      }}
      {...rest}
    />
  )
}
