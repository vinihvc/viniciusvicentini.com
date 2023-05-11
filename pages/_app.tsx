import { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'
import { LazyMotion, domAnimation } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import { Analytics } from '@/components/analytics'
import { GradientBg } from '@/components/gradient-bg'
import { Header } from '@/components/header'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Vinicius Vicentini</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Vinicius Vicentini" />
      </Head>

      <DefaultSeo {...SEO} />

      <LazyMotion features={domAnimation}>
        <Header />

        <main className="flex flex-1 flex-col">
          <Component {...pageProps} />
        </main>

        <GradientBg />

        <Analytics />
      </LazyMotion>
    </>
  )
}

export default App
