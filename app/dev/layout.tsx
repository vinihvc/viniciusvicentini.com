import { Sidebar } from './_components/sidebar'

const DevLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex flex-1 gap-5 selection:bg-white">
      <Sidebar className="w-32 max-md:hidden" />

      <div className="w-full">{children}</div>
    </div>
  )
}

export default DevLayout
