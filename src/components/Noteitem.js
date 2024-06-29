import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'


const Noteitem = (props) => {
  const { showAlert } = props
  const context = useContext(noteContext)
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body"  style={{ backgroundColor: props.mode === "light" ? "white" : " rgb(4 37 64)" ,color: props.mode === "dark" ? "white" : "#042743" }} >
          <div className="d-flex align-items-center">

            <h5 className="card-title" >{note.title} </h5>
            <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id); showAlert("Delete Successfully", "success") }}></i>
            <i className="fa-solid fa-file-pen mx-2" onClick={() => { updateNote(note) }} ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
