import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allComponents } from '@/.contentlayer/generated'
import { createOgImage } from '@/utils/create-og-image'

import { MdxComponents } from '@/components/ui/mdx-components'

interface DevSlugPageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => {
  return allComponents
    .filter((item) => item.published)
    .map((item) => ({ slug: item.slugAsParams }))
}

export const generateMetadata = async (
  props: DevSlugPageProps,
): Promise<Metadata> => {
  const { slug } = await props.params

  const component = allComponents
    .filter((item) => item.published)
    .find((item) => item.slugAsParams === slug)

  if (!component) {
    notFound()
  }

  return {
    title: component.title,
    description: component.description,
    openGraph: {
      title: component.title,
      description: component.description,
      images: [
        {
          url: createOgImage(component.title),
          width: 1600,
          height: 836,
          alt: component.title,
        },
      ],
    },
  }
}

const DevSlugPage = async (props: DevSlugPageProps) => {
  const { slug } = await props.params

  const component = allComponents.find((item) => item.slugAsParams === slug)

  if (!component) {
    notFound()
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold capitalize">{component.title}</h1>

      <h2 className="text-muted-foreground">{component.description}</h2>

      <MdxComponents code={component.body.code} />
    </section>
  )
}

export default DevSlugPage
