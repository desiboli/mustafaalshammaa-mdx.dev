import Link from "next/link"

import { type Blog } from "@/lib/api"
import { timeSince } from "@/lib/helpers/dateHelper"

export interface IBlogPreviewList {
  blog: Blog
}

const BlogPreviewList = (params: IBlogPreviewList) => {
  const blog = params.blog

  return (
    <Link href={"/blogs/" + blog?.slug} passHref key={blog?.slug}>
      <div className="flex items-center justify-between gap-2 py-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold">{blog?.meta.title}</h3>
          <p className="text-gray-400">{blog?.meta.description}</p>
        </div>
        <div className="my-auto text-gray-400">
          <p>{timeSince(blog?.meta?.date?.getTime())}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogPreviewList
