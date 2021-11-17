import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import { IdProvider } from '@radix-ui/react-id'

import BaseTemplate from '@layouts/Base'

import globalStyles from '@styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <IdProvider>
      <BaseTemplate>
        <Head>
          <title>Vinicius Vicentini</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="Vinicius Vicentini" />
        </Head>

        <DefaultSeo {...SEO} />

        <Component {...pageProps} />
      </BaseTemplate>
    </IdProvider>
  )
}

export default App
