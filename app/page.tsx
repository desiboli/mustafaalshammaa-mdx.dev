import Image from "next/image"

import { Button } from "@/components/ui/button"
import BlogPreviewList from "@/components/BlogPreviewList"

export default function Home() {
  return (
    <>
      <section>
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex-1">
            <h1 className="mb-4 text-2xl font-bold">Hey! I'm Musse</h1>
            <p>
              My name is Mustafa Alshammaa, a Senior Frontend Developer and the
              Co-founder of{" "}
              <Button variant="link" className="p-0" asChild>
                <a href="https://pluckmarket.io/" className="text-base">
                  Pluck
                </a>
              </Button>
              . This is my platform for sharing thoughts and lessons learned
              along the way.
            </p>
          </div>

          <div className="relative h-64 w-64 max-w-full overflow-hidden rounded-xl">
            <Image
              src="/me.jpg"
              alt="Me"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section>
        <BlogPreviewList />
      </section>
    </>
  )
}
