import { IconType } from 'react-icons'

import { Box } from '@/components/primitives/box'
import { Text } from '@/components/primitives/text'
import { Link } from '@/components/primitives/link'
import { Stack } from './primitives/stack'

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
    <Stack as="article" direction="column" css={{ $$gap: '$space$5' }}>
      <Box as={icon} aria-hidden />

      <Text as="h3" size="lg" weight="medium">
        {title}
      </Text>

      <Text weight="normal" color="grey">
        {description}
      </Text>

      <Box>
        <Link href={repo_url} decorated isExternal>
          Repository
        </Link>

        {' • '}

        <Link href={website_url} decorated isExternal>
          Website
        </Link>
      </Box>
    </Stack>
  )
}
