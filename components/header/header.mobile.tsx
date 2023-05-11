import React, { ComponentProps, useState } from 'react'
import { HeaderLinks } from 'components/header/header.links'
import { Menu } from 'lucide-react'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

type HeaderMobileProps = React.HTMLAttributes<HTMLButtonElement>

export const HeaderMobile = ({ ...props }: HeaderMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((e) => !e)}>
      {!isOpen && (
        <DialogTrigger asChild {...props}>
          <Button variant="link">
            <Menu />

            <span className="sr-only">Open menu</span>
          </Button>
        </DialogTrigger>
      )}

      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <div className="flex flex-col space-y-10">
          <HeaderLinks onClick={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
