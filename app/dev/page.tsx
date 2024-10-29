import { Clipboard } from 'lucide-react'

const DevPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5">
      <Clipboard className="text-muted-foreground size-10" />

      <h1 className="text-2xl font-semibold">Dev Area</h1>

      <div className="text-muted-foreground text-balance text-center">
        <p>Helpers, and other stuff I use to develop faster.</p>

        <p>Copy the code and paste it in your project.</p>
      </div>
    </div>
  )
}

export default DevPage
