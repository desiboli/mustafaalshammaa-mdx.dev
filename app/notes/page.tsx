import { getAllNotes } from "@/lib/api"
import NotePreviewList from "@/components/NotePreviewList"

export default function NotesPage() {
  const notes = getAllNotes()

  return (
    <>
      <section>
        <h1 className="mb-4 text-2xl font-bold">Notes</h1>

        <NotePreviewList notes={notes} />
      </section>
    </>
  )
}
