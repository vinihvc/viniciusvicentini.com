import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ ...props }, ref) => (
    <div
      className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-border text-2xl font-bold leading-loose duration-200 "
      ref={ref}
      {...props}
    >
      <span className="relative top-1">V</span>
    </div>
  ),
)

Logo.displayName = 'Logo'
