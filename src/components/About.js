import React from 'react'

const About = ({ mode }) => {

    return (
        <div className='container my-3' style={{ color: mode === "dark" ? "white" : "#042743", textAlign: 'center' }} >
            <h1> This is About page</h1>
        </div>
    )
}

export default About
