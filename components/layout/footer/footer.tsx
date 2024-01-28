import { ItFlag } from '@/components/flags/it'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props

  return (
    <footer className="py-10 md:mt-20">
      <div className="container flex justify-between text-muted">
        <span>
          <div className="flex items-center space-x-2">
            <span className="relative flex size-2">
              <span className="absolute size-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative size-2 rounded-full bg-success" />
            </span>

            <span className="text-xs">Living in</span>

            <ItFlag />
          </div>
        </span>

        <span>&copy;{` ${new Date().getFullYear()} Vinicius Vicentini`}</span>
      </div>
    </footer>
  )
}
