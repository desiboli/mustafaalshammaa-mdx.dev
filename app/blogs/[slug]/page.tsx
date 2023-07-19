import fs from "fs"
import path from "path"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight"

import "@/styles/highlight-js/github-dark.css"

import remarkGfm from "remark-gfm"

import { getBlog } from "@/lib/api"
import { Button, type ButtonProps } from "@/components/ui/button"

const components = {
  Button: (props: ButtonProps) => <Button {...props}>{props.children}</Button>,
}

export async function generateMetadata({ params }: any) {
  const blog = getBlog(params)

  return {
    title: blog?.meta?.title,
    description: blog?.meta?.description,
    openGraph: {
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"))

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))

  return paths
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
}

export default function Post({ params }: any) {
  const blog = getBlog(params.slug)

  if (!blog) {
    return notFound
  }

  return (
    <article className="prose prose-sm prose-neutral w-full dark:prose-invert md:prose-base">
      <h1>{blog.meta.title}</h1>

      <MDXRemote
        source={blog.content}
        components={{ ...components }}
        options={options}
      />
    </article>
  )
}
