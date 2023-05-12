'use client'

import React, { useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/dialog'
import { HeaderLinks } from '@/components/header/header.links'

type HeaderMobileProps = React.HTMLAttributes<HTMLButtonElement>

export const HeaderMobile = (props: HeaderMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((e) => !e)}>
      {!isOpen && (
        <DialogTrigger asChild {...props}>
          <Button variant="ghost">
            <Menu />

            <span className="sr-only">Open menu</span>
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="bg-black/70 flex flex-col items-center justify-center">
        <HeaderLinks
          className="flex flex-col space-y-10"
          onClick={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
