import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  //Get all Notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1OGE4MWQ3NjM3ZWVjYWQzMDk0MWFhIn0sImlhdCI6MTcxNzA4NjI4MH0.Ro0LiABuxSkEanKZXY89nkhelxO3AqqBF493QKs0uiA",
      }
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)

  }
    //Add a Note
    const addNote = async (title, description, tag) => {
      //API call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1OGE4MWQ3NjM3ZWVjYWQzMDk0MWFhIn0sImlhdCI6MTcxNzA4NjI4MH0.Ro0LiABuxSkEanKZXY89nkhelxO3AqqBF493QKs0uiA",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const note = await response.json();
      console.log("Adding a New Note")
      setNotes(notes.concat(note))
    }

    //Delete a Note:
    const deleteNote = (id) => {
      console.log("Deleting a Note with Id" + id)
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
    }

    //Edit a Note:
    const editNote = async (id, title, description, tag) => {
      //API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1OGE4MWQ3NjM3ZWVjYWQzMDk0MWFhIn0sImlhdCI6MTcxNzA4NjI4MH0.Ro0LiABuxSkEanKZXY89nkhelxO3AqqBF493QKs0uiA",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = response.json();

      //Logic to Edit a Note
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }

      }
    }
    return (<NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>)
  }


export default NoteState;