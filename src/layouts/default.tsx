import { domAnimation, LazyMotion } from 'framer-motion'

import { Analytics } from '@/components/analytics'
import { Container } from '@/components/container'
import { Header } from '@/components/header'
import { GradientBg } from '@/components/gradient-bg'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Header />

      <main>
        <Container>{children}</Container>
      </main>

      <GradientBg />

      <Analytics />
    </LazyMotion>
  )
}
