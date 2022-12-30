import { Box } from './primitives/box'

export const ShadowBg = () => {
  return (
    <Box
      css={{
        position: 'absolute',
        inset: 0,
        h: '$full',
        minH: '100vh',
        zIndex: -1,
      }}
    >
      <Box
        css={{
          $$primary: '68, 3, 69, 0.13',
          $$secondary: '201, 44, 96 ,0.13',
          $$tertiary: '72, 104, 219 ,0.13',

          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s',
          position: 'fixed',
          w: '$full',
          h: '100vh',
          top: 0,
          filter: 'blur(100px)',
          backgroundImage:
            'linear-gradient(to bottom right, rgba($$primary), rgba($$secondary), rgba($$tertiary))',
        }}
      />
    </Box>
  )
}
