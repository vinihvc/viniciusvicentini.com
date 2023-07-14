import { MouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { cn } from '@/utils/cn'

type SpotlightProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Spotlight = (props: SpotlightProps) => {
  const { className, children, ...rest } = props

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn(
        'group relative rounded border border-white/10 shadow-2xl',
        className,
      )}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-40 rounded opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(200, 200, 200, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {children}
    </div>
  )
}
