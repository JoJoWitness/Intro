import "../styles/biblioteca.scss"
import { libros } from "../data/libros"
import React, { useEffect, useRef, useState } from "react"


export const Book = () =>{

  return( 
  <div className="d-flex w-100 bookList gap-5 justify-content-evenly flex-wrap">
  {
  libros.map((libro)=>{
    return( 
      <a className="my-4 bookContainer" href={libro.linkNav}>
        <div className="bookWidth my-5 ">
          <img className="bookImg w-100" src={libro.img.src}/>
          <div className="brown-umber fs-5 fw-medium">{libro.title}</div>
          <div className="fs-5">{libro.autor}</div>
        </div>
      </a>
    ) 
  })
  }
  </div>
  )
}