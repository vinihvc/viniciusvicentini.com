import { ComponentProps, useState } from 'react'

import { BsList, BsX } from 'react-icons/bs'

import { styled } from 'stitches.config'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

import VisuallyHidden from '@components/VisuallyHidden'

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bg: 'rgba(0,0,0, 0.9)',
  position: 'fixed',
  inset: 0
})

const StyledContent = styled(DialogPrimitive.Content, {
  d: 'flex',
  align: 'center',
  justify: 'center',
  h: '100vh',
  w: '100vw'
})

const DialogTrigger = styled(DialogPrimitive.Trigger, {
  appearance: 'none',
  position: 'absolute',
  bg: 'none',
  color: '$white',
  fontSize: '$2xl',
  border: 0,
  top: 20,
  right: 20
})

const DialogClose = styled(DialogTrigger)

type MobileMenuProps = ComponentProps<typeof DialogTrigger>

const MobileMenu = ({ ...props }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogPrimitive.Root onOpenChange={() => setIsOpen((e) => !e)}>
      <StyledOverlay />

      {!isOpen && (
        <DialogTrigger {...props}>
          <BsList />

          <VisuallyHidden>Open menu</VisuallyHidden>
        </DialogTrigger>
      )}

      <StyledContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogClose>
          <BsX />

          <VisuallyHidden>Close menu</VisuallyHidden>
        </DialogClose>

        <Stack direction="column">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
        </Stack>
      </StyledContent>
    </DialogPrimitive.Root>
  )
}

export default MobileMenu
