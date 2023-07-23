import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Blog {
  meta: BlogMeta
  slug: string
  content: string
}

export interface BlogMeta {
  title?: string
  date?: Date
  description?: string
  author?: string
  image?: string | string[]
}

// CONSTANTS
const blogDir = "notes"

const getBlogFiles = () =>
  fs.readdirSync(path.join(blogDir)).filter((x) => {
    const y = x.split(".")
    return y[y.length - 1] === "mdx"
  })

const readBlogFile = (filename: string) => {
  try {
    return fs.readFileSync(path.join(blogDir, filename), "utf-8")
  } catch {
    return null
  }
}

const getSlugFromFileName = (filename: string) => filename.replace(".mdx", "")

const getFileNameFromSlug = (slug: string) => slug + ".mdx"

const cleanMetaFromMatter = (meta: { [key: string]: any }): BlogMeta => {
  return {
    ...meta,
    author: meta.author ?? "Mustafa Alshammaa",
    image: meta.image ?? "/laptop.jpg",
    date: new Date(meta.date) ?? null,
  }
}

const getBlogFromFile = (filename: string): Blog | null => {
  const file = readBlogFile(filename)
  if (file == null) {
    return null
  }

  const { data, content } = matter(file)
  const slug = getSlugFromFileName(filename)

  const meta = cleanMetaFromMatter(data)

  return { meta, slug, content }
}

/*
 * Get a single blog post
 */
export function getBlog(slug: string): Blog | null {
  const filename = getFileNameFromSlug(slug)

  return getBlogFromFile(filename)
}

/*
 * Get all notes/blog posts
 */
export function getAllNotes() {
  const files = getBlogFiles()

  const blogs = files.map((filename) => {
    return getBlogFromFile(filename)
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
