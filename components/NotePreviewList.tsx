import { type Blog } from "@/lib/api"

import NotePreview from "./NotePreview"

export interface INotePreviewList {
  notes: (Blog | null)[]
}

const NotePreviewList = ({ notes }: INotePreviewList) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      {notes.map(
        (note, index) => note && <NotePreview key={index} note={note} />
      )}
    </div>
  )
}

export default NotePreviewList
