import '@/styles/globals.css'

import { Metadata } from 'next'
import { Josefin_Sans as FontSans } from 'next/font/google'
import Script from 'next/script'

import { MediaQueriesIndicator } from '@/components/debug/media-queries'
import { CustomBg } from '@/components/layout/custom-bg'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { SEO } from '@/constants/seo'
import { cn } from '@/utils/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { absolute: SEO.title, template: `%s // ${SEO.title}` },
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

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
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
          'text-foreground',
          fontSans.variable,
        )}
      >
        <Header />

        <CustomBg />

        <main className="flex flex-1 flex-col pt-24 md:pt-60">{children}</main>

        <Footer />

        <MediaQueriesIndicator />

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
