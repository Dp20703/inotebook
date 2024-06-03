import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6658ae5edd95f1f81f152b96b",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:37.409Z",
      "__v": 0
    },
    {
      "_id": "6658ae5e3ed95f1f81f152b96d",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:38.052Z",
      "__v": 0
    },
    {
      "_id": "6658b0becb5d6a81f28938affd",
      "user": "6658a81d7637eecad30941aa",
      "title": "new note",
      "description": "my note",
      "tag": "personal",
      "date": "2024-05-30T17:00:43.023Z",
      "__v": 0
    },
    {
      "_id": "6658ae5eddc95f1f81f152b96b",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:37.409Z",
      "__v": 0
    },
    {
      "_id": "6658aee5ed95fc1f81f152b96d",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:38.052Z",
      "__v": 0
    },
    {
      "_id": "6658bc0b3b5d6a81f28938affd",
      "user": "6658a81d7637eecad30941aa",
      "title": "new note",
      "description": "my note",
      "tag": "personal",
      "date": "2024-05-30T17:00:43.023Z",
      "__v": 0
    },
    {
      "_id": "6658ae5d3d95cf1f81f152b96b",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:37.409Z",
      "__v": 0
    },
    {
      "_id": "66583ae5edc95f1f81f152b96d",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:38.052Z",
      "__v": 0
    },
    {
      "_id": "6658b30bb5d6a81f2c8938affd",
      "user": "6658a81d7637eecad30941aa",
      "title": "new note",
      "description": "my note",
      "tag": "personal",
      "date": "2024-05-30T17:00:43.023Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial)

  //Add a Note
const addNote=(title,description,tag)=>{
  console.log("Adding a New Note")
  //ToDo api call
  const note=[{
    "_id": "6658b30bb5dtt6a81f2c8938affd",
    "user": "6658a81d7637eecad30941aa",
    "title": title,
    "description":description,
    "tag":tag,
    "date": "2024-05-30T17:00:43.023Z",
    "__v": 0
  }]
setNotes(notes.concat(note))
}
  //Delete a Note
  const deleteNote=(id)=>{
  console.log("Deleting a Note with Id"+ id)
  const newNotes=notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)
}
  //Edit a Note
  const editNote=()=>{
  
  }
  return (<NoteContext.Provider value={{ notes,addNote,deleteNote,editNote }}>
    {props.children}
  </NoteContext.Provider>)
}

export default NoteState;