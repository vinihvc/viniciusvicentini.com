import { Box } from '@primitives/box'

import { Header } from '@components/header'

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
    </>
  )
}
