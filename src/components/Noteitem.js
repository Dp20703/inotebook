import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'


const Noteitem = (props) => {
  const {showAlert}=props
  const context = useContext(noteContext)
  const { deleteNote } = context;
    const {note,updateNote}=props;
  return (
    <div className='col-md-3'> 
      <div className="card my-3">
  <div className="card-body">
    <div className="d-flex align-items-center">

    <h5 className="card-title">{note.title} </h5>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);showAlert("Delete Successfully","success")}}></i>
    <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}} ></i>
    </div>
    <p className="card-text">{note.description} <br></br>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}

export default Noteitem
