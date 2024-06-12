import { makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { Post } from "./content/definitions/post"
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "@/lib/rehyePrettyCode"

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext"
      return options
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["before:content-['#'] before:absolute before:-ml-[1em] before:text-rose-100/0 hover:before:text-rose-200/50 pl-[1em] -ml-[1em]"],
          },
        },
      ],
    ],
  },
})
