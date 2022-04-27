import React from 'react'
import './sidebar.css'
import foto from './aboutMeImg.jpg'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <img className='sidebarImg' src={foto} alt="foto" />
            <div className='sidebarItem About'>
                <p> Desenvolvedora Full Stack em formação.
                    Tenho 22 anos, sou casada e compartilho aqui minha jornada no mundo da tecnologia.</p>
                <p>
                    No meu tempo livre gosto de sair, pegar uma praia ou tomar um café especial.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIAS</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Sobre mim</li>
                    <li className='sidebarListItem'>Resumos</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CONTATO</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div >
    )
}
