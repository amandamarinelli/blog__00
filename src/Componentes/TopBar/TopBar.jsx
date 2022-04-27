import React from 'react';
import './topBar.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function TopBar() {
  const user = false;
  return (
    <div className="TopBar">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-whatsapp"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link" >HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link" >SOBRE</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link" >CONTATO</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link" >WRITE</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link" >LOGOUT</Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        {
          user ? (

            <img className='topImg'
              src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/chris-evans-capitao-america-1200x900-1.jpg"
              alt="Foto do usuario" />
          ) : (
            <ul className='topListItem'>
              <li className="topListItemRight">
                <Link to="/login" className="link" >
                  LOGIN
                </Link>
              </li>
              <li className="topListItemRight">
                <Link to="/register" className="link" >
                  REGISTER
                </Link>
              </li>
            </ul>

          )
        }

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

