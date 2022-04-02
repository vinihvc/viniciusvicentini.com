import React, { ComponentProps, useState } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { CloseIcon } from '@libs/icons/close'
import { MenuIcon } from '@libs/icons/menu'

import { AnimatePresence, motion } from 'framer-motion'

import { styled } from 'stitches.config'

import { Stack } from '@primitives/stack'

import { VisuallyHidden } from '@components/visually-hidden'
import { HeaderLinks } from '@components/header/header.links'

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
  position: 'absolute',
  inset: 0,
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

export const HeaderMobile = ({ ...props }: HeaderMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={() => setIsOpen((e) => !e)}
    >
      {!isOpen && (
        <TriggerStyled {...props}>
          <MenuIcon />

          <VisuallyHidden>Open menu</VisuallyHidden>
        </TriggerStyled>
      )}

      <DialogPrimitive.Portal>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <OverlayStyled />

            <ContentStyled onInteractOutside={(e) => e.preventDefault()}>
              <CloseStyled>
                <CloseIcon />

                <VisuallyHidden>Close menu</VisuallyHidden>
              </CloseStyled>

              <Stack direction="column">
                <HeaderLinks onClick={() => setIsOpen(false)} />
              </Stack>
            </ContentStyled>
          </motion.div>
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
