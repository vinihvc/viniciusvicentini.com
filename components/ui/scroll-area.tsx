'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...rest}
    >
      <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const scrollBarStyles = tv({
  base: ['flex touch-none select-none transition-colors'],
  variants: {
    orientation: {
      vertical: [
        'h-full w-2 border-l border-l-transparent p-0.5 hover:w-3.5 transition-all',
      ],
      horizontal: [
        'h-2 flex-col border-t border-t-transparent p-0.5 hover:h-3.5 transition-all',
      ],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})

interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<
      typeof ScrollAreaPrimitive.ScrollAreaScrollbar
    >,
    VariantProps<typeof scrollBarStyles> {}

export const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>((props, ref) => {
  const { className, orientation = 'vertical', ...rest } = props

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(scrollBarStyles({ orientation }), className)}
      {...rest}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
