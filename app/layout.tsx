import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Outfit as FontSans } from 'next/font/google'

import { MediaQueriesIndicator } from '@/components/debug/media-queries'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { SEO } from '@/constants/seo'
import { UmamiTracking } from '@/components/tracking/umami'
import { NoiseBg } from '@/components/layout/noise-bg'
import { createOgImage } from '@/utils/create-og-image'

const fontFamily = FontSans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-sans',
	display: 'swap',
})

export const viewport: Viewport = {
	themeColor: '#0E0F0F',
}

export const metadata: Metadata = {
	metadataBase: new URL(SEO.url),
	title: { default: SEO.title, template: `%s // ${SEO.title}` },
	applicationName: SEO.title,
	keywords: SEO.keywords,
	openGraph: {
		title: SEO.title,
		siteName: SEO.title,
		type: 'website',
		url: SEO.url,
		images: [
			{
				url: createOgImage(SEO.title, 80),
				width: 1600,
				height: 836,
				alt: 'Vinicius Vicentini',
			},
		],
	},
	twitter: {
		creator: SEO.twitter,
		card: 'summary_large_image',
	},
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={fontFamily.variable}>
				<Header />

				<NoiseBg />

				<main className="flex flex-1 flex-col pt-16 md:my-10">{children}</main>

				<Footer />

				<MediaQueriesIndicator />

				<UmamiTracking />
			</body>
		</html>
	)
}

export default RootLayout
