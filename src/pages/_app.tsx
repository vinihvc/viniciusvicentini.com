import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import { m } from 'framer-motion'

import { DefaultLayout } from '@/layouts/default'

import globalStyles from '@/styles/global'
import { Container } from '@/components/container'

const App = ({ Component, pageProps, router }: AppProps) => {
  globalStyles()

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

      <DefaultLayout>
        <m.main
          key={router.route}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </m.main>
      </DefaultLayout>
    </>
  )
}

export default App
