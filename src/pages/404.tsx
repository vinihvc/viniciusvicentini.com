import Link from 'next/link'

import { Box } from '@/components/primitives/box'
import { Button } from '@/components/primitives/button'
import { Flex } from '@/components/primitives/flex'
import { Stack } from '@/components/primitives/stack'
import { Text } from '@/components/primitives/text'

const NotFoundPage = () => {
  return (
    <Flex
      css={{
        w: '$full',
        h: 'calc(100vh - 100px)',
        justify: 'center',
        align: 'center',
      }}
    >
      <Box
        css={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          height: '1px',
          width: '1px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          boxShadow:
            '-24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff',
          animation: 'zoom 10s alternate infinite',
        }}
      />

      <Stack direction="column" css={{ align: 'center', zIndex: 2 }}>
        <Stack direction="column" css={{ $$gap: '$space$2', align: 'center' }}>
          <Text
            weight="thin"
            css={{
              fontSize: 150,
            }}
          >
            404
          </Text>

          <Text size={{ '@md': 'xl' }}>
            <Text as="b" css={{ bg: '$secondary', p: '$1' }}>
              Don&apos;t panic
            </Text>
            , but this page doesn&apos;t exist.
          </Text>
        </Stack>

        <Button as={Link} href="/">
          Back to Beginning
        </Button>
      </Stack>
    </Flex>
  )
}

export default NotFoundPage
