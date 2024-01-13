interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props

  return (
    <footer className="py-10 md:mt-20">
      <div className="container flex justify-end text-muted">
        &copy;{` ${new Date().getFullYear()} Vinicius Vicentini`}
      </div>
    </footer>
  )
}
