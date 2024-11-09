import {
  JetBrains_Mono as FontMono,
  Outfit as FontSans,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})
