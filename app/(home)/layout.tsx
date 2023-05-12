import { Social } from '@/components/social'

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = (props: HomeLayoutProps) => {
  const { children } = props

  return (
    <section className="container flex flex-1 flex-col items-center justify-center">
      <div>
        {children}

        <Social />
      </div>
    </section>
  )
}

export default HomeLayout
