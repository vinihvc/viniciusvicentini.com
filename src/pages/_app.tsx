import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import { motion } from 'framer-motion'

import { DefaultLayout } from '@layouts/default'

import { Analytics } from '@components/analytics'

import globalStyles from '@styles/global'

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
        <motion.div
          key={router.route}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>

        <Analytics />
      </DefaultLayout>
    </>
  )
}

export default App
