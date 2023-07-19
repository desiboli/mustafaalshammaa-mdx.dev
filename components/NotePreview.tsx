import Link from "next/link"

import { type Blog } from "@/lib/api"
import { timeSince } from "@/lib/helpers/dateHelper"

export interface INotePreview {
  note: Blog
}

const NotePreview = (params: INotePreview) => {
  const note = params.note

  return (
    <Link href={"/blogs/" + note?.slug} passHref key={note?.slug}>
      <div className="flex items-center justify-between gap-2 py-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold">{note?.meta.title}</h3>
          <p className="text-gray-400">{note?.meta.description}</p>
        </div>
        <div className="my-auto text-gray-400">
          <p>{timeSince(note?.meta?.date?.getTime())}</p>
        </div>
      </div>
    </Link>
  )
}

export default NotePreview
