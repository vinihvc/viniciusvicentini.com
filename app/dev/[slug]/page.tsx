import { ButtonCode } from '@/content/code/components/button-code'

import { Code } from '@/components/ui/code'

interface DevSlugPageProps {
  params: Promise<{
    slug: string
  }>
}

const DevSlugPage = async (props: DevSlugPageProps) => {
  const { slug } = await props.params

  return (
    <>
      <Code code={ButtonCode} lang="tsx" filename="app/page.tsx" />

      <pre>{JSON.stringify(slug, null, 2)}</pre>
    </>
  )
}

export default DevSlugPage
