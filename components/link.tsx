'use client'

import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { VariantProps, tv } from 'tailwind-variants'

import { cn } from '@/utils/cn'

export const linkVariants = tv({
  base: 'cursor-pointer hover:text-white focus:text-white active:text-white transition duration-150',
  variants: {
    decorated: {
      true: 'text-white underline underline-offset-4 decoration-primary hover:text-primary font-medium',
    },
  },
})

type LinkProps = {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
} & VariantProps<typeof linkVariants> &
  NextLinkProps &
  React.HTMLAttributes<HTMLAnchorElement>

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, decorated, isExternal, className, children, ...rest } = props

  const pathname = usePathname()

  return (
    <NextLink
      className={cn(linkVariants({ decorated, className }))}
      href={href}
      aria-current={href === pathname || undefined}
      ref={ref}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      {...rest}
    >
      {children}
    </NextLink>
  )
})

Link.displayName = 'Link'
