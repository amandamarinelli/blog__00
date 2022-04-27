import React from 'react'
import './write.css'

export default function Write() {
    return (
        <div className='write'>
           <img src='https://images.unsplash.com/photo-1632594737623-bea601083890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt="capa do post" className="writeImg" />
            <form className="writeForm">
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Title" className='writeInput' autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder='Once Upon a time...'
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className='writeSubmit'>Publicar</button>

            </form>
        </div>
    )
}
