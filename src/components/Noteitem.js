import React from 'react'

const Noteitem = (props) => {
    const {note}=props;
  return (
    <div className='col-md-3'> 
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title} </h5>
    <p className="card-text">{note.description} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}

export default Noteitem
