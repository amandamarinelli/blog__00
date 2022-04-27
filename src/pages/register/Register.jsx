import React from 'react'
import './register.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <input type="text" placeholder="Enter your username" />


                <label >Email</label>
                <input type="email" placeholder="Enter your email" />

                <label >Password</label>
                <input type="password" placeholder="Enter a password" />

                <button className="registerButton">Register</button>

                <Link to="/login" className="link loginForm" >
                    <button className="registerButtonLogin">Login</button>
                </Link>

            </form>
        </div>
    )
}
