'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

export const Tabs = TabsPrimitive.Root

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center',
      'p-1',
      'text-muted-foreground',
      'bg-muted',
      className,
    )}
    {...props}
  />
))

TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center',
      'text-sm font-medium whitespace-nowrap',
      'px-5 py-1',
      'transition-all',
      'data-[state=active]:text-foreground data-[state=active]:bg-background',
      'disabled:pointer-events-none disabled:opacity-50',
      'outline-none focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background',
      className,
    )}
    {...props}
  />
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2',
      'outline-none focus-visible:ring-2 ring-ring ring-offset-background ring-offset-2',
      className,
    )}
    {...props}
  />
))

TabsContent.displayName = TabsPrimitive.Content.displayName
