import Box from '@primitives/Box'

import Header from '@components/Header'

type BaseTemplateProps = {
  children?: React.ReactNode
}

const BaseTemplate = ({ children, ...props }: BaseTemplateProps) => {
  return (
    <>
      <Header />

      <Box as="main" {...props}>
        {children}
      </Box>
    </>
  )
}

export default BaseTemplate
