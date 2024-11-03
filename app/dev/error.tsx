'use client'

import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string }
}

const DevErrorPage = (props: ErrorProps) => {
  const { error } = props

  return (
    <div className="z-[2] flex flex-col items-center space-y-10">
      <div className="flex flex-col items-center space-y-4">
        <p className="font-thin text-7xl">😔</p>

        <div className="md:text-xl">
          <span className="bg-red-500 p-1">Don&apos;t panic</span> but an error
          occurred:
        </div>

        <pre className="text-xs bg-white/10 p-2 rounded">{error.message}</pre>
      </div>

      <Button size="xs" asChild>
        <Link href="/dev">Back to Beginning</Link>
      </Button>
    </div>
  )
}

export default DevErrorPage
