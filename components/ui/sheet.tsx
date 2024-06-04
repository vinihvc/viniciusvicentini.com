'use client'

import React from 'react'
import * as RDialog from '@radix-ui/react-dialog'
import { cn } from '@/utils/cn'
import { X } from 'lucide-react'

export const Sheet = RDialog.Root

export const SheetTrigger = RDialog.Trigger

export const SheetClose = RDialog.Close

export const SheetPortal = RDialog.Portal

export const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof RDialog.Overlay>,
	React.ComponentPropsWithoutRef<typeof RDialog.Overlay>
>(({ className, ...props }, ref) => (
	<RDialog.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-black/80',
			'data-[state=open]:animate-in data-[state=open]:fade-in-0',
			'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
			className,
		)}
		{...props}
		ref={ref}
	/>
))

SheetOverlay.displayName = RDialog.Overlay.displayName

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof RDialog.Content> {}

export const SheetContent = React.forwardRef<
	React.ElementRef<typeof RDialog.Content>,
	SheetContentProps
>(({ className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<RDialog.Content
			ref={ref}
			className={cn(
				'fixed z-50 gap-4 bg-background/50 backdrop-blur p-4 inset-y-0 left-0 h-full w-full sm:w-3/4 sm:max-w-sm',
				'transition ease-in-out',
				'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:duration-500',
				'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:duration-300',
				className,
			)}
			{...props}
		>
			{children}
			<RDialog.Close className="absolute right-3 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white">
				<X className="size-8" />
				<span className="sr-only">Close</span>
			</RDialog.Close>
		</RDialog.Content>
	</SheetPortal>
))

SheetContent.displayName = RDialog.Content.displayName
