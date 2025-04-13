import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Notesappbgcontainer,
  NotesHeading,
  NoteCardContainer,
  Titletext,
  Notetext,
  ButtonEl,
  NotesCards,
  Imgele,
  NoNotesYetHeading,
  Notesyouaddwillappearhere,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])
  const [emptynotes, setinitalstate] = useState(true)

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNotes => [...prevNotes, newNote])
    setTitle('')
    setNote('')
  }

  const lengthnoteslist = notesList.length

  return (
    <Notesappbgcontainer>
      <NotesHeading>Notes</NotesHeading>
      <NoteCardContainer onSubmit={onAddNote}>
        <Titletext
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <Notetext
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeNotes}
          value={note}
        />
        <ButtonEl type="submit">Add</ButtonEl>
      </NoteCardContainer>

      {notesList.length > 0 ? (
        <NotesCards>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} eachNote={eachNote} />
          ))}
        </NotesCards>
      ) : (
        <>
          <Imgele
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesYetHeading>No Notes Yet</NoNotesYetHeading>
          <Notesyouaddwillappearhere>
            Notes you add will appear here
          </Notesyouaddwillappearhere>
        </>
      )}
    </Notesappbgcontainer>
  )
}

export default Notes
