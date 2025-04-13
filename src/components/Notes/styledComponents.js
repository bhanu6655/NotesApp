// Style your elements here
import styled from 'styled-components'

export const Notesappbgcontainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-weight: bold;
  font-family: 'Bree Serif';
  text-align: center;
`
export const NoteCardContainer = styled.form`
  box-shadow: 0px 4px 16px 0px;
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 80%;
  margin: 30px;
`

export const Titletext = styled.input`
  padding: 8px;
  border: 2px solid #d3d9e0;
  width: 85%;
  margin: 15px;
  border: 0px none transparent;
`
export const Notetext = styled.textarea`
  padding: 8px;
  border: 2px solid #d3d9e0;
  width: 85%;
  margin: 15px;
  outline: none;
  resize: none;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
`

export const ButtonEl = styled.button`
background-color:  #4c63b6;
height: 35px;
width: 45px;
border-radius: 8px
padding: 18px;
align-self: flex-end;
margin-right: 45px;
color: white;
border-width: 0px;

`

export const NotesCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const Imgele = styled.img`
  height: 150px;
  width: 200px;
`
export const NoNotesYetHeading = styled.h1`
  font-family: 'Roboto';
  color: aab8c8;
`
export const Notesyouaddwillappearhere = styled.p`
  font-family: 'Roboto';
  color: aab8c8;
`
