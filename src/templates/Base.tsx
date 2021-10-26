import { IdProvider } from '@radix-ui/react-id'

import Box from '@primitives/Box'

import Header from '@components/Header'
import Footer from '@components/Footer'

type BaseTemplateProps = {
  children?: React.ReactNode
}

const BaseTemplate = ({ children, ...props }: BaseTemplateProps) => {
  return (
    <IdProvider>
      <Header />

      <Box as="main" {...props}>
        {children}
      </Box>

      <Footer />
    </IdProvider>
  )
}

export default BaseTemplate
