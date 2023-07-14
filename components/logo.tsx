import { forwardRef } from 'react'

type LogoProps = {}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ ...props }, ref) => (
    <div
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-2xl font-bold leading-loose duration-200 hover:bg-neutral-800"
      ref={ref}
      {...props}
    >
      <span className="relative top-1">V</span>
    </div>
  ),
)

Logo.displayName = 'Logo'
