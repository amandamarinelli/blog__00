
import React from 'react'
import "./single.css"
import Sidebar from '../../Componentes/sidebar/Sidebar'
import SinglePost from '../../Componentes/singlePost/SinglePost'

export default function Single() {
    return (
        <div className='single'>
            <SinglePost/>
            <Sidebar />
        </div>
    )
}
