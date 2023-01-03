import { Header } from '@/components/header'
import { ShadowBg } from '@/components/shadow-bg'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      {children}

      <ShadowBg />
    </>
  )
}
