import { createElement } from 'react'

import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'

import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

const HomeSocialMedias = () => {
  const socialMedias = [
    {
      title: 'Github',
      icon: BsGithub,
      link: 'https://github.com/viniciushvc',
    },
    {
      title: 'Twitter',
      icon: BsTwitter,
      link: 'https://twitter.com/viniciushvc',
    },
    {
      title: 'Linkedin',
      icon: BsLinkedin,
      link: 'https://www.linkedin.com/in/viniciushvc',
    },
    {
      title: 'Instagram',
      icon: BsInstagram,
      link: 'https://www.instagram.com/viniciushvc',
    },
  ]

  return (
    <Stack
      css={{
        $$gap: '$space$5',
        mt: '$5',
      }}
    >
      {socialMedias.map(({ title, icon, link }) => (
        <Link
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          title={`Visit my ${title}`}
        >
          {createElement(icon)}
        </Link>
      ))}
    </Stack>
  )
}

export default HomeSocialMedias
