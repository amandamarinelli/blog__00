import React from 'react'
import './Header.css';
import capa from './cover.jpg'

export default function Header() {
    return (
        <div className='header'>
            <img className="headerImg"
                src={capa}
                alt="capa"
            />
            <div className="headerTitles">
                <span className="headerTitleLg">AMANDA FERREIRA</span>
                <span className="headerTitleSm">My Blog</span>
            </div>


        </div>
    )
}
