import fs from "fs"
import path from "path"
import { Suspense } from "react"
import { MDXRemote } from "next-mdx-remote/rsc"

import { getPost } from "@/lib/api"
import { Button, type ButtonProps } from "@/components/ui/button"

const components = {
  Button: (props: ButtonProps) => <Button {...props}>{props.children}</Button>,
}
export async function generateMetadata({ params }: any) {
  const blog = getPost(params)

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"))

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))

  return paths
}

export default function Post({ params }: any) {
  const props = getPost(params)

  return (
    <article className="prose prose-sm !prose-invert prose-neutral mx-auto md:prose-base lg:prose-lg">
      <h1>{props.frontMatter.title}</h1>

      <MDXRemote
        {...props}
        source={props.content}
        components={{ ...components }}
      />
    </article>
  )
}
