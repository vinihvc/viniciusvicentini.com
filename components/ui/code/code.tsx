import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import { codeToHtml } from 'shiki'
import type { BundledLanguage } from 'shiki'

import { cn } from '@/lib/utils'

import { MdxComponents } from '../mdx-components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs'
import { CopyToClipboard } from './code.clipboard'

interface CodeProps extends React.ComponentProps<typeof Tabs> {
  body: {
    code: string
    raw: string
  }
  lang?: BundledLanguage
}
export const Code = async (props: CodeProps) => {
  const { body, lang = 'tsx', className, ...rest } = props

  const html = await codeToHtml(body.raw, {
    lang,
    theme: 'material-theme-darker',
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  })

  return (
    <Tabs
      defaultValue="preview"
      className={cn(
        'relative max-h-[650px] overflow-hidden rounded-md bg-background/20 border',
        className,
      )}
      {...rest}
    >
      <CopyToClipboard className="absolute right-4 top-12" code={body.code} />

      <div className="flex justify-end">
        <TabsList className="w-full justify-start border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:border-b-primary h-9 border-b-2 border-b-transparent bg-transparent"
          >
            Preview
          </TabsTrigger>

          <TabsTrigger
            value="raw"
            className="data-[state=active]:border-b-primary h-9 border-b-2 border-b-transparent bg-transparent"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="preview"
        className="data-[state=inactive]:hidden flex min-h-[350px] w-full justify-center p-10 items-center"
      >
        <MdxComponents code={body.code} />
      </TabsContent>

      <TabsContent className="data-[state=inactive]:hidden" value="raw" asChild>
        <div
          className="overflow-x-auto p-1 text-xs leading-loose [&>pre]:!bg-transparent [&_pre]:my-0 [&_pre]:max-h-[650px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </TabsContent>
    </Tabs>
  )
}
