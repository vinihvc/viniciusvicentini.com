import { allComponents } from '@/.contentlayer/generated'

import { MdxComponents } from '@/components/ui/mdx-components'

interface DevSlugPageProps {
  params: Promise<{
    slug: string
  }>
}

const DevSlugPage = async (props: DevSlugPageProps) => {
  const { slug } = await props.params

  const component = allComponents.find((item) => item.slugAsParams === slug)

  if (!component) {
    throw new Error(`Page not found: /dev/${slug}`)
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold capitalize">{component.title}</h1>

      <h2 className="text-muted-foreground">{component.description}</h2>

      <div dangerouslySetInnerHTML={{ __html: component.body.raw }} />

      <MdxComponents code={component.body.code} />
    </section>
  )
}

export default DevSlugPage
