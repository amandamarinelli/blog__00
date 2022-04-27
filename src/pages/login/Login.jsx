import React from 'react'
import './login.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label >Email</label>
                <input type="email" placeholder="Enter your email" />

                <label >Password</label>
                <input type="password" placeholder="Enter your password" />

                <button className="loginButton">Login</button>

                <Link to="/register" className="link loginForm" >
                    <button className="loginButtonRegister">Register</button>
                </Link>

            </form>
        </div>
    )
}
