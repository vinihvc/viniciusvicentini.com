import { styled } from 'stitches.config'

const VisuallyHidden = styled('div', {
  border: 0,
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: 1,
  width: 1,
  margin: -1,
  p: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
})

export default VisuallyHidden
