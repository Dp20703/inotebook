import React from 'react'

const Alert = (props) => {
  return (
    <div className='container' style={{ marginTop: "63px",marginBottom: "10px"}}>
      <div className="alert alert-primary" role="alert">
        {props.msg}
      </div>
    </div>
  )
}

export default Alert
