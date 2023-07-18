import Image from "next/image"
import Link from "next/link"

import { getPosts } from "@/lib/api"
import { Button } from "@/components/ui/button"
import BlogPreviewList from "@/components/BlogPreviewList"

export default function AboutPage() {
  return (
    <>
      <section>
        <h1 className="mb-4 text-2xl font-bold">About</h1>

        <p>
          Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla
          eleifend augue, ac auctor orci leo non est. Vivamus quis mi. Proin
          viverra, ligula sit amet ultrices semper, ligula arcu tristique
          sapien, a accumsan nisi mauris ac eros. Phasellus magna. Vestibulum
          suscipit nulla quis orci.
        </p>

        <p>
          Pellentesque posuere. Sed hendrerit. Duis leo. Praesent adipiscing.
          Fusce vulputate eleifend sapien.
        </p>

        <p>
          Praesent nec nisl a purus blandit viverra.. Cras ultricies mi eu
          turpis hendrerit fringilla. Fusce fermentum. Sed mollis, eros et
          ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor
          urna a orci.
        </p>

        <p>
          Nunc interdum lacus sit amet orci. Ut id nisl quis enim dignissim
          sagittis. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Praesent congue erat at massa. Nullam
          accumsan lorem in dui.
        </p>

        <p>
          Fusce commodo aliquam arcu. Donec vitae sapien ut libero venenatis
          faucibus. Fusce egestas elit eget lorem. Cras sagittis. Etiam feugiat
          lorem non metus.
        </p>
      </section>

      <section>
        <h1 className="mb-4 text-2xl font-bold">Work</h1>

        <div className="flex flex-col gap-4 py-4">work 1</div>
      </section>

      <section>
        <h1 className="mb-4 text-2xl font-bold">Tech Stack</h1>

        <div className="flex flex-col gap-4 py-4">tech 1</div>
      </section>
    </>
  )
}
