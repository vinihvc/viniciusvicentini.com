import { Analytics } from '@/components/analytics'
import { Header } from '@/components/header'
import { ShadowBg } from '@/components/shadow-bg'
import { domAnimation, LazyMotion } from 'framer-motion'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Header />

      {children}

      <ShadowBg />

      <Analytics />
    </LazyMotion>
  )
}
