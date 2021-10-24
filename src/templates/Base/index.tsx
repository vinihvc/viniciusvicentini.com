import { IdProvider } from '@radix-ui/react-id'

import Header from '@components/Header'
import Footer from '@components/Footer'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children, ...props }: BaseLayoutProps) => {
  return (
    <IdProvider>
      <Header />

      <main {...props}>{children}</main>

      <Footer />
    </IdProvider>
  )
}

export default BaseLayout
