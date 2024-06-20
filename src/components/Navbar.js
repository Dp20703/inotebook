import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props) => {
    const { showAlert } = props
    let history = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        showAlert('Logged out Successfully', 'success')
        history('/login')
    }
    let location = useLocation();
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""} `} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <div
                            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-2`}>
                            <input onClick={props.toggleStyle}
                                className="form-check-input"
                                type="checkbox"
                                role="switch" id="flexSwitchCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                            >{props.mode === "dark" ? "Enable light Mode" : "Enable Dark Mode"}
                            </label>

                        </div>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> : <button className="btn btn-primary" onClick={handleLogout}>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

