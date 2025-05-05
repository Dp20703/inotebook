import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom'
const Notes = (props) => {
    let history = useNavigate()
    const { showAlert, mode, reference } = props
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            // showAlert("You are a User",'success')
            getNotes()
        }
        else {
            showAlert("You are not a User", 'danger')
            history('/login')
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleClick = (e) => {
        // console.log("updating the note.....", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        showAlert("Update Successfully", "success")
        refClose.current.click();
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote showAlert={showAlert} mode={mode} />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={note.etitle} id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.edescription} id="edescription" name="edescription" onChange={onChange} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" value={note.etag} id="etag" name="etag" onChange={onChange} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "black" }} />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>Your Notes</h2>
                <div className="container mx-2" style={{ color: props.mode === "dark" ? "white" : "#042743" }} >
                    {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={showAlert} mode={mode} reference={reference} />
                })}
            </div>
        </>
    )
}

export default Notes
