
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentails, setcredentails] = useState({ name: '', email: '', password: '', cpassword: '' })
    let history = useNavigate()
    const { name, email, password, cpassword } = credentails

    const handleSubmit = async (e) => {
        e.preventDefault();
        //API call
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save the auth token and redirect:
            // console.log(json.Authtoken)
            localStorage.setItem('token', json.Authtoken);
            props.showAlert('Account Created Successfully', 'success')
            history('/')

        }
        else {
            props.showAlert('Invaild Details', 'danger')
        }
    }

    const onChange = (e) => {
        setcredentails({ ...credentails, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mt-3'>
            <h2 className='my-2 d-flex justify-content-center' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit} >
                <div className="my-3">
                    <label htmlFor="name" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>Name</label>
                    <input type="text" value={name} className="form-control" name='name' id="name" aria-describedby="emailHelp" onChange={onChange} minLength={3} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>Email address</label>
                    <input type="email" value={email} className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={onChange} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} required />
                    <div id="emailHelp" className="form-text" style={{ color: props.mode === "dark" ? "white" : "rgb(9 48 80)" }}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>Password</label>
                    <input type="password" value={password} className="form-control" name='password' id="password" onChange={onChange} minLength={5} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>Confirm Password</label>
                    <input type="password" value={cpassword} className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={5} style={{ backgroundColor: props.mode === "light" ? "white" : "rgb(9 48 80)", color: props.mode === "dark" ? "white" : "#042743" }} required />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}


export default Signup
