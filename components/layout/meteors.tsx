'use client'

import React from 'react'

import { cn } from '@/utils/cn'

interface MeteorsProps {
  number?: number
}

export const Meteors = (props: MeteorsProps) => {
  const { number = 20 } = props

  const [meteorStyles, setMeteorStyles] = React.useState<React.CSSProperties[]>(
    [],
  )

  React.useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: `${Math.floor(Math.random() * window.innerWidth)}px`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    }))

    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {[...meteorStyles].map((style, index) => (
        <span
          key={index}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-muted shadow-[0_0_0_1px_#ffffff10]',
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-muted to-transparent" />
        </span>
      ))}
    </>
  )
}
