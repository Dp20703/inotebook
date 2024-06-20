import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'


const AddNote = (props) => {
    const { showAlert } = props
    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setnote] = useState({ title: "", description: "", tag: "Default" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setnote({ title: "", description: "", tag: "" })
        showAlert("Added Successfully", "success")
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3'>
            <h2 style={{ color: props.mode === "dark" ? "white" : "#042743" }} >Add a Note</h2>

            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }} >Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange}  style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)" ,color: props.mode === "dark" ? "white" : "#042743" }}  required />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }} >Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}  style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)" ,color: props.mode === "dark" ? "white" : "#042743" }}  required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }} >Tag</label>
                    <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }}  />
                </div>

                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>

    )
}

export default AddNote
