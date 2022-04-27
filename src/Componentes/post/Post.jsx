import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://images.unsplash.com/photo-1632594737623-bea601083890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt="capa do post"
      />

      <div className='postInfo'>
        <div className='postCats'>
          <span className="postCat">Sobre Mim</span>
          <span className="postCat">Resumos</span>
        </div>
        <span className='postTitle'>O começo</span>
        <hr />
        <span className='postDate'>2 hour ago</span>
      </div>

      <p className='postDesc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Qui veritatis perspiciatis, repudiandae aperiam veniam ullam
        ratione consequatur pariatur fugiat nostrum a distinctio consectetur saepe,
        repellat iste, reiciendis vitae recusandae itaque?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Qui veritatis perspiciatis, repudiandae aperiam veniam ullam
        ratione consequatur pariatur fugiat nostrum a distinctio consectetur saepe,
        repellat iste, reiciendis vitae recusandae itaque?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Qui veritatis perspiciatis, repudiandae aperiam veniam ullam
        ratione consequatur pariatur fugiat nostrum a distinctio consectetur saepe,
        repellat iste, reiciendis vitae recusandae itaque?
      </p>

    </div>
  )
}
