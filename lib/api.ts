import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Blog {
  meta: BlogMeta
  slug: string
}

export interface BlogMeta {
  title?: string
  date?: Date
  description?: string
  author?: string
  image?: string | string[]
}

export function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  )

  const { data: frontMatter, content } = matter(markdownFile)

  return {
    frontMatter,
    slug,
    content,
  }
}

export function getPostsPreview() {
  // 1) Set blogs directory
  const blogDir = "blogs"

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir))

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8")

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent)

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    }
  })

  return filterNewToOld(blogs)
}

const filterNewToOld = (blogs: (Blog | null)[]) => {
  return blogs.sort(
    (a, b) =>
      new Date(b?.meta?.date ?? new Date()).getTime() -
      new Date(a?.meta?.date ?? new Date()).getTime()
  )
}
