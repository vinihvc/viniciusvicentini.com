import { createElement } from 'react'

import { IconType } from 'react-icons'

import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

type PProjectCardProps = {
  title: string
  description: string
  repo_url: string
  website_url: string
  icon: IconType
}

const ProjectCard = ({
  title,
  description,
  repo_url,
  website_url,
  icon,
}: PProjectCardProps) => {
  return (
    <Box as="article">
      {createElement(icon, {
        size: 16,
      })}

      <Text as="h3" size="xl" weight="medium" css={{ mt: '$2' }}>
        {title}
      </Text>

      <Box>
        <Text weight="thin" css={{ color: '$grey', py: '$5' }}>
          {description}
        </Text>

        <Link href={repo_url} decorated isExternal>
          Repository
        </Link>

        {' • '}

        <Link href={website_url} decorated isExternal>
          Website
        </Link>
      </Box>
    </Box>
  )
}

export default ProjectCard
