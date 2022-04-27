import React from 'react'
import Header from '../../Componentes/header/Header'
import Posts from '../../Componentes/posts/Posts';
import Sidebar from '../../Componentes/sidebar/Sidebar';
import "./home.css"

export default function Home() {
    return (
        <>
            <Header />
    
            <div className='home'>
             
                <Posts />
                <Sidebar />
            </div>
        </>

    );
}
