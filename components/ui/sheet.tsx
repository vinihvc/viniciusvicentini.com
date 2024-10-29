'use client'

import React from 'react'
import { cn } from '@/utils/cn'
import * as RDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from './button'

export const Sheet = RDialog.Root

export const SheetTrigger = RDialog.Trigger

export const SheetClose = RDialog.Close

export const SheetPortal = RDialog.Portal

export const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof RDialog.Overlay>,
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
        'fixed inset-y-0 left-0 z-50 h-full w-full gap-4 bg-background/50 p-4 backdrop-blur sm:w-3/4 sm:max-w-sm',
        'transition ease-in-out',
        'data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=open]:fade-in',
        'data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out',
        className,
      )}
      {...props}
    >
      {children}
      <RDialog.Close className="absolute right-3 top-4" asChild>
        <Button className="sm:hidden" variant="ghost" size="xs">
          <X className="size-8" />
          <span className="sr-only">Close</span>
        </Button>
      </RDialog.Close>
    </RDialog.Content>
  </SheetPortal>
))

SheetContent.displayName = RDialog.Content.displayName
