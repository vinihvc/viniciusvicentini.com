import * as VisuallyHiddenBase from '@radix-ui/react-visually-hidden'

type VisuallyHiddenProps = {
  children: React.ReactNode
}

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => (
  <VisuallyHiddenBase.Root>{children}</VisuallyHiddenBase.Root>
)
export default VisuallyHidden
