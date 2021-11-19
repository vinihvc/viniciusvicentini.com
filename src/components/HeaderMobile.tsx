import React, { ComponentProps, useState } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { BsList, BsX } from 'react-icons/bs'

import { styled } from 'stitches.config'

import Stack from '@primitives/Stack'

import VisuallyHidden from '@components/VisuallyHidden'
import HeaderLinks from '@components/HeaderLinks'

const OverlayStyled = styled(DialogPrimitive.Overlay, {
  bg: 'rgba(0, 0, 0, 0.9)',
  position: 'fixed',
  inset: 0,
})

const ContentStyled = styled(DialogPrimitive.Content, {
  d: 'flex',
  align: 'center',
  justify: 'center',
  w: '100vw',
  h: '100vh',
})

const TriggerStyled = styled(DialogPrimitive.Trigger, {
  appearance: 'none',
  position: 'absolute',
  bg: 'none',
  color: '$white',
  fontSize: '$3xl',
  border: 0,
  top: 0,
  right: 0,
  p: '$4',
  cursor: 'pointer',
})

const CloseStyled = styled(TriggerStyled)

type HeaderMobileProps = ComponentProps<typeof TriggerStyled>

const HeaderMobile = ({ ...props }: HeaderMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={() => setIsOpen((e) => !e)}
    >
      <OverlayStyled />

      {!isOpen && (
        <TriggerStyled {...props}>
          <BsList />

          <VisuallyHidden>Open menu</VisuallyHidden>
        </TriggerStyled>
      )}

      <ContentStyled onInteractOutside={(e) => e.preventDefault()}>
        <CloseStyled>
          <BsX />

          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseStyled>

        <Stack direction="column">
          <HeaderLinks onClick={() => setIsOpen(false)} />
        </Stack>
      </ContentStyled>
    </DialogPrimitive.Root>
  )
}

export default HeaderMobile
