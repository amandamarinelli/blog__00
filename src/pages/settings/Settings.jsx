import React from 'react'
import Sidebar from '../../Componentes/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img className=''
              src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/chris-evans-capitao-america-1200x900-1.jpg"
              alt="Foto do usuario" />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon
              far fa-user-circle"></i>
            </label>
            <input type="file" id='fileInput' style={{ display: "none" }} />
          </div>

          <label>Username</label>
          <input type="text" placeholder='Safak' />

          <label>Email</label>
          <input type="email" placeholder='Safak@gmail.com' />

          <label>Password</label>
          <input type="password" />

          <button className='settingsSubmit'>
            Submit
          </button>
        </form>

      </div>
      <Sidebar />
    </div>
  )
}
