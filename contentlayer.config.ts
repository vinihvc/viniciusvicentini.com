import {  makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
// esbuild doesn't support module aliases 😤🤌
// https://github.com/evanw/esbuild/issues/394
// https://github.com/contentlayerdev/contentlayer/issues/238

import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "./lib/rehypePrettyCode";
import { Post } from "./content/definitions/Post";


export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["before:content-['#'] before:absolute before:-ml-[1em] before:text-blue-100/0 hover:before:text-blue-200/50 pl-[1em] -ml-[1em] pt-10 -mt-10"],
          },
        },
      ],
    ],
  },
});
