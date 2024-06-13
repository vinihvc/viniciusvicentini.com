import type React from 'react'

import clsx from 'clsx'
import type { ImageProps } from 'next/image'
import NextLink from 'next/link'
import { BlurImage } from './blur-image'

export const components = {
	h1: (props: any) => (
		<h2
			className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-200/95 sm:text-3xl"
			{...props}
		/>
	),
	h2: (props: any) => (
		<h3
			className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-200/95 sm:text-2xl"
			{...props}
		/>
	),
	h3: (props: any) => (
		<h4 className="text-xl font-medium text-rose-200/95" {...props} />
	),
	h4: (props: any) => (
		<h5 className="text-lg font-medium text-rose-200/95" {...props} />
	),
	hr: (props: any) => (
		<hr className="border-t-2 border-rose-200/5" {...props} />
	),
	a: ({ href = '', ...props }) => {
		if (href.startsWith('http')) {
			return (
				<a
					className={clsx(
						'text-rose-200 underline decoration-rose-200/20 underline-offset-2 transition-all hover:text-rose-100 hover:decoration-rose-100/40',
						'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70',
					)}
					href={href}
					target="_blank"
					rel="noopener"
					{...props}
				/>
			)
		}

		return (
			<NextLink
				href={href}
				className={clsx(
					'text-rose-200 underline decoration-rose-200/20 underline-offset-2 transition-all hover:text-rose-100 hover:decoration-rose-100/40',
					'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70',
				)}
				{...props}
			/>
		)
	},
	ul: (props: any) => (
		<ul
			className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-2 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-200/20"
			{...props}
		/>
	),
	ol: (props: any) => (
		<ol className="list-decimal space-y-3 pl-10" {...props} />
	),
	strong: (props: any) => <strong className="font-semibold" {...props} />,
	Img: ({
		children,
		bleed,
		caption,
		...props
	}: {
		children: React.ReactNode
		bleed?: boolean
		caption?: string
	} & ImageProps) => {
		return (
			<>
				<div
					className={clsx({
						'xl:!col-start-2 xl:!col-end-4': bleed === true,
					})}
				>
					<BlurImage {...props} />
				</div>
				{caption ? (
					<div className="mt-2 border-l-2 border-rose-200/5 pl-3 text-sm">
						{caption}
					</div>
				) : null}
			</>
		)
	},
	// Since markdown blockquotes don't have native support for citations, we
	// reserve `<em>` to style citations.
	blockquote: (props: any) => (
		<blockquote
			className={clsx(
				"relative border-l-2 border-rose-200/5 pl-4 pt-8 before:absolute before:top-5 before:-ml-1 before:-mt-6 before:text-6xl before:text-rose-200/20 before:content-['“'] [&_em]:mt-3 [&_em]:block [&_em]:not-italic [&_em]:leading-none [&_em]:before:pr-1 [&_em]:before:content-['—']",
				'bg-gradient-to-br from-rose-200 to-rose-200/30 bg-clip-text text-transparent',
			)}
			{...props}
		/>
	),
	del: (props: any) => (
		<del className="text-rose-200/50 line-through" {...props} />
	),
}
