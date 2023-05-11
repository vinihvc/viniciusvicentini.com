import { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/utils/cn'
import { VariantProps, tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: 'cursor-pointer hover:text-white focus:text-white active:text-white transition duration-150',
  variants: {
    decorated: {
      true: 'text-white underline underline-offset-4 decoration-pink-500',
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
  React.ComponentPropsWithoutRef<'a'>

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, decorated, isExternal, className, children, ...rest } = props

  const { pathname } = useRouter()

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
