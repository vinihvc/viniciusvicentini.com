import { ComponentProps, forwardRef } from 'react'

type LogoProps = {}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ ...props }, ref) => (
    <div
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-2xl font-bold hover:bg-gray-800"
      ref={ref}
      {...props}
    >
      V
    </div>
  ),
)

Logo.displayName = 'Logo'
