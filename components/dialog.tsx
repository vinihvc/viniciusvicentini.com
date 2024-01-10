'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import * as RDialog from '@radix-ui/react-dialog'

import { cn } from '@/utils/cn'

export const Dialog = RDialog.Root

export const DialogTrigger = RDialog.Trigger

export const DialogPortal = ({
  className,
  children,
  ...props
}: RDialog.DialogPortalProps & { className?: string }) => (
  <RDialog.Portal>
    <div
      className={cn(
        'fixed inset-0 z-40 flex items-start justify-center sm:items-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  </RDialog.Portal>
)

DialogPortal.displayName = RDialog.Portal.displayName

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof RDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RDialog.Overlay>
>(({ className, ...props }, ref) => (
  <RDialog.Overlay
    ref={ref}
    className={cn(
      'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-100',
      className,
    )}
    {...props}
  />
))

DialogOverlay.displayName = RDialog.Overlay.displayName

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RDialog.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />

    <RDialog.Content
      ref={ref}
      className={cn(
        'fixed z-40 grid h-full w-full',
        'animate-in data-[state=open]:fade-in-90 gap-4 rounded-b-lg border border-foreground p-6 shadow-lg',
        'data-[state=open]:slide-in-from-bottom-10',
        'sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 sm:max-w-lg sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}

      <RDialog.Close className="data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-foreground">
        <X className="h-8 w-8" />
        <span className="sr-only">Close</span>
      </RDialog.Close>
    </RDialog.Content>
  </DialogPortal>
))

DialogContent.displayName = RDialog.Content.displayName

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RDialog.Title>
>(({ className, ...props }, ref) => (
  <RDialog.Title
    ref={ref}
    className={cn('text-lg font-medium leading-none tracking-tight', className)}
    {...props}
  />
))

DialogTitle.displayName = RDialog.Title.displayName

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RDialog.Description>
>(({ className, ...props }, ref) => (
  <RDialog.Description
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
))

DialogDescription.displayName = RDialog.Description.displayName
