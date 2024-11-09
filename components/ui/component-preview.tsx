import fs from 'node:fs'
import React from 'react'
import { Component } from '@/.contentlayer/generated'
import { DEMO_COMPONENTS } from '@/registry/demo'
import { LoaderCircle } from 'lucide-react'
import { codeToHtml } from 'shiki'

import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CopyToClipboard } from './copy-clipboard'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './resizable'

interface ComponentPreviewProps extends React.ComponentProps<typeof Tabs> {
  name: string
  type: Component['category']
}

const readFile = (type: string, name: string) => {
  try {
    return fs.readFileSync(
      `${process.cwd()}/registry/code/${type}/${name}.tsx`,
      'utf-8',
    )
  } catch (error) {
    console.error(error)
    return null
  }
}

export const ComponentPreview = async (props: ComponentPreviewProps) => {
  const { name, type, className, ...rest } = props

  const code = readFile(type, name)

  if (!code) {
    return null
  }

  const html = await codeToHtml(code.trimEnd(), {
    lang: 'tsx',
    theme: 'material-theme-darker',
  })

  const PreviewComponent = DEMO_COMPONENTS[type][name]?.component

  return (
    <Tabs
      defaultValue="preview"
      className={cn(
        'grid relative rounded-md bg-background/20 border',
        className,
      )}
      {...rest}
    >
      <div className="relative">
        <TabsList className="w-full justify-start border-b">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:border-b-primary h-9 border-b-2 border-b-transparent"
          >
            Preview
          </TabsTrigger>

          <TabsTrigger
            value="code"
            className="data-[state=active]:border-b-primary h-9 border-b-2 border-b-transparent"
          >
            Code
          </TabsTrigger>
        </TabsList>

        <CopyToClipboard code={code} className="absolute right-1.5 top-1.5" />
      </div>

      <TabsContent value="preview">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={98} minSize={50}>
            <ScrollArea>
              <div className="flex min-h-[350px] w-full justify-center items-center p-1">
                <React.Suspense
                  fallback={
                    <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </div>
                  }
                >
                  <PreviewComponent />
                </React.Suspense>
                <ScrollBar orientation="horizontal" />
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel></ResizablePanel>
        </ResizablePanelGroup>
      </TabsContent>

      <TabsContent className="max-h-[650px]" value="code" asChild>
        <ScrollArea>
          <div
            className="p-1 text-xs leading-loose [&>pre]:!bg-transparent [&_pre]:my-0 [&_pre]:text-nowrap"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}
