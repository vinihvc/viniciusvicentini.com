import { Box } from '@primitives/box'
import { Text } from '@primitives/text'
import { Link } from '@primitives/link'

type ProjectCardProps = {
  title: string
  description: string
  repo_url: string
  website_url: string
  icon: () => JSX.Element
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
