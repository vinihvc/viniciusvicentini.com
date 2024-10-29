import { Sidebar } from './_components/sidebar'

const DevLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex flex-1 gap-10 selection:bg-white">
      <Sidebar className="w-[200px]" />

      <div className="flex w-full flex-col overflow-auto">{children}</div>
    </div>
  )
}

export default DevLayout
