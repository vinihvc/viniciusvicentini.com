import { IconType } from 'react-icons'

import { Box } from '@/components/primitives/box'
import { Text } from '@/components/primitives/text'
import { Link } from '@/components/primitives/link'

type ProjectCardProps = {
  title: string
  description: string
  repo_url: string
  website_url: string
  icon: IconType
}

export const ProjectCard = ({
  title,
  description,
  repo_url,
  website_url,
  icon,
}: ProjectCardProps) => {
  return (
    <Box>
      <Box as={icon} />

      <Text as="h3" size="lg" weight="medium" css={{ mt: '$2' }}>
        {title}
      </Text>

      <Box>
        <Text weight="normal" css={{ color: '$grey', py: '$5' }}>
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
