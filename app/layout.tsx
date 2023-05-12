import '@/styles/globals.css'
import { Metadata } from 'next'
import { Josefin_Sans as FontSans } from 'next/font/google'

import { Analytics } from '@/components/analytics'
import { Header } from '@/components/header'
import { SEO } from '@/constants/seo'
import { cn } from '@/utils/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: { absolute: SEO.title, template: `%s // ${SEO.title}` },
  applicationName: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  manifest: '/manifest.json',
  themeColor: '#0A0A0A',
  openGraph: {
    locale: 'en',
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    type: 'website',
    images: [
      {
        url: 'https://viniciusvicentini.com/images/thumb.png',
        width: 1200,
        height: 630,
        alt: 'Vinicius Vicentini, My personal website',
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

        <main className="flex flex-1 flex-col">{props.children}</main>

        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
