import React from 'react'

import { cn } from '@/lib/utils'

interface RulerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Ruler = (props: RulerProps) => {
  const { className, style, ...rest } = props

  return (
    <article
      className={cn(
        'bg-black border border-border p-4 overflow-auto m-auto rounded flex items-center justify-center',
        className,
      )}
      style={{
        color: 'rgba(128, 128, 128, 0.5)',
        resize: 'horizontal',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'repeating-linear-gradient(to right, currentColor, currentColor 1px, transparent 1px, transparent 10px), repeating-linear-gradient(to right, currentColor, currentColor 1px, transparent 1px, transparent 60px)',
        backgroundSize: '100% 10px, 100% 20px',
        height: '64px',
        minWidth: '200px',
        ...style,
      }}
      {...rest}
    />
  )
}
