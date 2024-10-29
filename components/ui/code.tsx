import { codeToHtml } from 'shiki'
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers'
import type { BundledLanguage, BundledTheme } from 'shiki'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

type Props = {
  code: string
  lang?: BundledLanguage
  theme?: BundledTheme
  filename?: string
}
export default async function Code({
  code,
  lang = 'typescript',
  theme = 'monokai',
  filename,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  })

  console.log(filename)

  return (
    <Tabs
      defaultValue="preview"
      className="relative max-h-[650px] overflow-hidden rounded-md bg-black"
    >
      <div className="flex justify-end">
        <TabsList className="text-muted-foreground inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="focus-visible:ring-ring text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>

          <TabsTrigger
            value="raw"
            className="focus-visible:ring-ring text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview" asChild>
        <div
          className="w-full overflow-x-auto p-4 text-sm"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </TabsContent>

      <TabsContent value="raw" asChild>
        <div
          className="overflow-x-auto p-4 text-xs leading-relaxed [&>pre]:!bg-transparent [&_pre]:my-0 [&_pre]:max-h-[650px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </TabsContent>
    </Tabs>
  )
}
