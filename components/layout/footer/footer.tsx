interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props

  return (
    <footer className="mt-20 py-10">
      <div className="container flex justify-end text-muted">
        &copy;{` ${new Date().getFullYear()} Vinicius Vicentini`}
      </div>
    </footer>
  )
}
