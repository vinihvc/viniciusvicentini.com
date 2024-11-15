import { Metadata } from 'next'
import { createOgImage } from '@/utils/create-og-image'
import { Clipboard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dev Area',
  description: 'Helpers, and other stuff I use to develop faster.',
  openGraph: {
    title: 'Dev Area',
    description: 'Helpers, and other stuff I use to develop faster.',
    images: [
      {
        url: createOgImage('Dev Area'),
        width: 1600,
        height: 836,
        alt: 'Dev Area',
      },
    ],
  },
}

const DevPage = () => {
  return (
    <div className="flex flex-col items-center gap-5 pt-20">
      <Clipboard className="text-muted-foreground size-10" />

      <h1 className="text-2xl font-semibold">Dev Area</h1>

      <div className="text-muted-foreground text-balance text-center">
        <p className="max-md:hidden">
          Helpers, and other stuff I use to develop faster.
        </p>

        <p className="max-md:hidden">
          Copy the code and paste it in your project.
        </p>

        <p className="md:hidden">
          Please open this page on a bigger screen to see the full list.
        </p>
      </div>
    </div>
  )
}

export default DevPage
