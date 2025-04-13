import {useState} from 'react'
import {Noteitemcontainer, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {title, note} = eachNote
  return (
    <Noteitemcontainer>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </Noteitemcontainer>
  )
}

export default NoteItem
