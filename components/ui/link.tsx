'use client'

import React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/utils/cn'

export const linkVariants = tv({
	base: [
		'cursor-pointer hover:text-foreground focus:text-foreground active:text-foreground transition duration-200',
	],
	variants: {
		decorated: {
			true: [
				'text-primary underline underline-offset-4 decoration-primary font-medium',
			],
		},
		showActive: {
			true: ['aria-[current=true]:text-primary hover:opacity-80'],
		},
	},
	defaultVariants: {
		decorated: false,
		showActive: false,
	},
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
		const {
			showActive,
			href,
			decorated,
			isExternal,
			className,
			children,
			...rest
		} = props

		const pathname = usePathname()

		return (
			<NextLink
				className={cn(linkVariants({ decorated, showActive, className }))}
				href={href}
				aria-current={href === pathname || undefined}
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
