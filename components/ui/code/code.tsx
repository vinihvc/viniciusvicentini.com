import React from 'react'
import { codeToHtml, type BundledLanguage } from 'shiki'

import { cn } from '@/lib/utils'

import { MdxComponents } from '../mdx-components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs'
import { CopyToClipboard } from './code.clipboard'

export interface CodeProps extends React.ComponentProps<typeof Tabs> {
  body: {
    code: string
  }
  /**
   * Language of the code
   * @default tsx
   */
  lang?: BundledLanguage
}
export const Code = async (props: CodeProps) => {
  const { body, lang = 'tsx', className, ...rest } = props

  const html = await codeToHtml(body.code, {
    lang,
    theme: 'material-theme-darker',
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
      <CopyToClipboard code={html} className="absolute right-4 top-12" />

      <div className="flex justify-end">
        <TabsList className="w-full justify-start border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:border-b-primary h-9 border-b-2 border-b-transparent bg-transparent"
          >
            Preview
          </TabsTrigger>

          <TabsTrigger
            value="code"
            className="data-[state=active]:border-b-primary h-9 border-b-2 border-b-transparent bg-transparent"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="preview"
        className="flex min-h-[350px] w-full justify-center p-10 items-center"
      >
        <MdxComponents code={body.code} />
      </TabsContent>

      <TabsContent value="code" asChild>
        <div
          className="overflow-x-auto p-1 text-xs leading-loose [&>pre]:!bg-transparent [&_pre]:my-0 [&_pre]:max-h-[650px]"
          dangerouslySetInnerHTML={{ __html: html }}
          {...rest}
        />
      </TabsContent>
    </Tabs>
  )
}
