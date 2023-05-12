import Document, { Head, Html, Main, NextScript } from 'next/document'
import { cn } from '@/utils/cn'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className={cn(
            'overflow-x-hidden overflow-y-scroll font-sans antialiased',
            'flex h-full min-h-screen flex-col',
            'bg-neutral-950',
            'text-white',
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
