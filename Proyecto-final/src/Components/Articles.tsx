import "../styles/article.scss"
import { timeline } from "../data/timeline"
import React, { useEffect, useRef, useState } from "react"


export const Articles= () =>{

  return( 
  <div className="d-flex w-100 bookList gap-2 justify-content-evenly flex-wrap">
  {
  timeline.map((event)=>{
    return( 
      <div className="my-4 articleContainer d-flex align-items-center" >
        <div className="h-100 w-100 d-flex flex-row-reverse internalArticleContainer my-5 justify-content-between gap-3">
          <img className="articleImg " src={event.img.src}/>
          <a className="d-flex flex-column justify-content-center py-4 articleText" href={event.linkNav}>
            <h3 className="fs-4 fw-semibold">{event.title}</h3>
            <p className="fs-5 fw-semibold">{event.year}</p>
            <p className="fs-5 font-BlackJet">{event.textPreview}</p>
          </a>
        </div>
      </div>
    ) 
  })
  }
  </div>
  )
}