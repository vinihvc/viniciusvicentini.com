import { createElement } from 'react'

import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

import socialLinks from '@configs/social-links'

const HomeSocialMedias = () => {
  return (
    <Stack
      css={{
        $$gap: '$space$5',
        mt: '$5',
      }}
    >
      {socialLinks.map(({ title, icon, link }) => (
        <Link key={link} href={link} title={`Visit my ${title}`} isExternal>
          {createElement(icon, {
            'aria-hidden': true,
          })}
        </Link>
      ))}
    </Stack>
  )
}

export default HomeSocialMedias
