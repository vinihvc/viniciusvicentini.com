import '@/styles/globals.css'

import { Metadata } from 'next'
import { Josefin_Sans as FontSans } from 'next/font/google'
import Script from 'next/script'

import { Header } from '@/components/header'
import { SEO } from '@/constants/seo'
import { cn } from '@/utils/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { absolute: SEO.title, template: `%s // ${SEO.title}` },
  applicationName: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    type: 'website',
    images: [
      {
        url: 'https://viniciusvicentini.com/images/thumb.png',
        width: 1200,
        height: 630,
        alt: 'Vinicius Vicentini, My personal website.',
      },
    ],
    siteName: SEO.title,
  },
  twitter: {
    site: SEO.twitter,
  },
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className="overflow-x-hidden overflow-y-scroll"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'font-sans antialiased',
          'flex h-full min-h-screen flex-col',
          'bg-background text-white',
          fontSans.variable,
        )}
      >
        <Header />

        <main className="flex flex-1 flex-col pb-10">{props.children}</main>

        <Script
          src="https://us.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

export default RootLayout
