import { ButtonDemo } from '@/content/preview/components/button-preview'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import { codeToHtml } from 'shiki'
import type { BundledLanguage, BundledTheme } from 'shiki'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs'
import { CopyToClipboard } from './code.clipboard'

type CodeProps = {
  code: string
  lang?: BundledLanguage
  theme?: BundledTheme
  filename?: string
}
export const Code = async (props: CodeProps) => {
  const {
    code,
    lang = 'tsx',
    theme = 'material-theme-darker',
    filename,
  } = props

  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  })

  console.log(filename)

  return (
    <Tabs
      defaultValue="preview"
      className="relative max-h-[650px] overflow-hidden rounded-md bg-background/20"
    >
      <CopyToClipboard className="absolute right-6 top-12" code={code} />

      <div className="flex justify-end">
        <TabsList className="text-muted-foreground inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className=" focus-visible:ring-ring text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-none"
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

      <TabsContent
        value="preview"
        className="data-[state=inactive]:hidden flex min-h-[350px] w-full justify-center p-10 items-center"
      >
        <ButtonDemo />
      </TabsContent>

      <TabsContent className="data-[state=inactive]:hidden" value="raw" asChild>
        <div
          className="overflow-x-auto p-4 text-xs leading-loose [&>pre]:!bg-transparent [&_pre]:my-0 [&_pre]:max-h-[650px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </TabsContent>
    </Tabs>
  )
}
