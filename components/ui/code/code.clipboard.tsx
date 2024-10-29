'use client'

import { Clipboard } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '../button'

interface CopyToClipboardProps extends React.HTMLAttributes<HTMLButtonElement> {
  code: string
}

export const CopyToClipboard = (props: CopyToClipboardProps) => {
  const { code, className, ...rest } = props

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      console.log('Copied to clipboard')
    } catch (error) {
      console.error('Error copying to clipboard', error)
    } finally {
      setTimeout(() => {
        // do something
      }, 2000)
    }
  }

  return (
    <Button
      className={cn(className)}
      variant="solid"
      size="xs"
      onClick={copyToClipboard}
      {...rest}
    >
      <Clipboard className="size-4" />
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  )
}
