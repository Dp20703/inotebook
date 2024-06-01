import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
const notesInitial=[
    {
      "_id": "6658ae5dd95f1f81f152b96b",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:37.409Z",
      "__v": 0
    },
    {
      "_id": "6658ae5ed95f1f81f152b96d",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:38.052Z",
      "__v": 0
    },
    {
      "_id": "6658b0bb5d6a81f28938affd",
      "user": "6658a81d7637eecad30941aa",
      "title": "new note",
      "description": "my note",
      "tag": "personal",
      "date": "2024-05-30T17:00:43.023Z",
      "__v": 0
    },
    {
      "_id": "6658ae5dd95f1f81f152b96b",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:37.409Z",
      "__v": 0
    },
    {
      "_id": "6658ae5ed95f1f81f152b96d",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:38.052Z",
      "__v": 0
    },
    {
      "_id": "6658b0bb5d6a81f28938affd",
      "user": "6658a81d7637eecad30941aa",
      "title": "new note",
      "description": "my note",
      "tag": "personal",
      "date": "2024-05-30T17:00:43.023Z",
      "__v": 0
    },
    {
      "_id": "6658ae5dd95f1f81f152b96b",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:37.409Z",
      "__v": 0
    },
    {
      "_id": "6658ae5ed95f1f81f152b96d",
      "user": "6658a81d7637eecad30941aa",
      "title": "mytitle",
      "description": "my description",
      "tag": "personal",
      "date": "2024-05-30T16:50:38.052Z",
      "__v": 0
    },
    {
      "_id": "6658b0bb5d6a81f28938affd",
      "user": "6658a81d7637eecad30941aa",
      "title": "new note",
      "description": "my note",
      "tag": "personal",
      "date": "2024-05-30T17:00:43.023Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial)
    return (<NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>)
}

export default NoteState;