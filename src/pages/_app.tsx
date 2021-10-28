import { AppProps } from 'next/app'
import Head from 'next/head'

import { motion, AnimatePresence } from 'framer-motion'

import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import BaseTemplate from '@templates/Base'

import globalStyles from '@styles/global'

const App = ({ Component, pageProps, router }: AppProps) => {
  globalStyles()

  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Next Boilerplate" />
      </Head>

      <DefaultSeo {...SEO} />

      <BaseTemplate>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2
              }
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </BaseTemplate>
    </>
  )
}

export default App
