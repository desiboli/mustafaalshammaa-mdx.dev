import Link from "next/link"

import { getPostsPreview } from "@/lib/api"

const BlogPreviewList = () => {
  const blogs = getPostsPreview()

  return (
    <>
      {blogs && (
        <div className="py-2">
          {blogs.map((blog) => (
            <Link href={"/blogs/" + blog?.slug} passHref key={blog?.slug}>
              <div className="flex justify-between gap-2 py-2 align-middle">
                <div>
                  <h3 className="text-lg font-bold">{blog?.meta.title}</h3>
                  <p className="text-gray-400">{blog?.meta.description}</p>
                </div>
                <div className="my-auto text-gray-400">
                  <p>{blog?.meta.date?.toString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default BlogPreviewList
