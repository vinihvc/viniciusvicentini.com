'use client'

import React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/utils/cn'

export const linkVariants = tv({
	base: [
		'cursor-pointer',
		'transition',
		'outline-none focus-visible:ring-2 ring-white/30 ring-offset-2 ring-offset-black',
	],
})

interface LinkProps
	extends VariantProps<typeof linkVariants>,
		NextLinkProps,
		React.HTMLAttributes<HTMLAnchorElement> {
	/**
	 *  If `true`, the link will open in new tab
	 */
	isExternal?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(props, ref) => {
		const { href, isExternal, className, children, ...rest } = props

		const pathname = usePathname()

		const isCurrent = href === pathname

		return (
			<NextLink
				className={cn(linkVariants({ className }), {
					active: isCurrent,
				})}
				href={href}
				aria-current={isCurrent || undefined}
				ref={ref}
				{...(isExternal && {
					target: '_blank',
					rel: 'noopener noreferrer',
					prefetch: false,
				})}
				{...rest}
			>
				{children}
			</NextLink>
		)
	},
)

Link.displayName = 'Link'
