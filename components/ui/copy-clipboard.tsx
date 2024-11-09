'use client'

import React from 'react'
import { Clipboard, ClipboardCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from './button'

interface CopyToClipboardProps extends React.HTMLAttributes<HTMLButtonElement> {
  code: string
}

export const CopyToClipboard = (props: CopyToClipboardProps) => {
  const { code, className, ...rest } = props

  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
    } catch (error) {
      console.error('Error copying to clipboard', error)
    } finally {
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }

  return (
    <Button
      className={cn('px-0 size-6 rounded-sm', className)}
      variant={isCopied ? 'success' : 'outline'}
      size="xs"
      onClick={copyToClipboard}
      {...rest}
    >
      {React.createElement(isCopied ? ClipboardCheck : Clipboard, {
        className: 'size-3.5',
      })}

      <span className="sr-only">
        {isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
      </span>
    </Button>
  )
}
