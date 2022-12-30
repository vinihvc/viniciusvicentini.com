import { Box } from '@/components/primitives/box'

import { Header } from '@/components/header'
import { ShadowBg } from '@/components/shadow-bg'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children, ...props }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      <Box as="main" {...props}>
        {children}
      </Box>

      <ShadowBg />
    </>
  )
}
