import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const {showAlert}=props
    const [credentails, setcredentails] = useState({ email: '', password: '' })
    let history = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        //API call
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentails.email, password: credentails.password }),
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save the auth token and redirect:
            localStorage.setItem('token', json.Authtoken);
            showAlert('Logged in Successfully','success')
            history('/')
        }
        else {
            showAlert('Invaild Credentails','danger')
        }
    }

    const onChange = (e) => {
        setcredentails({ ...credentails, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mt-3'>
            <h2 className='my-2 d-flex justify-content-center'>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit} >
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={credentails.email} className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={onChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentails.password} className="form-control" name='password' id="password" onChange={onChange} minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
