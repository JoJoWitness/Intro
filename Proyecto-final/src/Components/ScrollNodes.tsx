import "../styles/scrollNode.scss"
import { timeline } from "../data/timeline"
import React, { useEffect, useRef, useState } from "react"

type scrollNode = {
  title: string,
  year: string
  text: string,
  imag: string,

}

export const AllNode = ()=>{
  const [nodeRefs, setNodeRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
  
  useEffect(() => {
    setNodeRefs(refs => Array(timeline.length).fill(0).map((_, i) => refs[i] || React.createRef()));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
          } else {
            entry.target.classList.remove('in-viewport');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    nodeRefs.forEach(ref => {
      console.log(ref.current);
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      nodeRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [nodeRefs]);


  return(
    <div className="container timelineContainer h-100 flex-column gap-0">
    {
      timeline.map((event, index) => {
        if(index % 2 !==0){
          return(
         
            <div className="scrollNode d-flex justify-content-between align-items-centerW">
            <a className="oddImage" href={event.linkNav}>
              <img className="w-100 my-5 roundImg" src={event.img.src} alt="Map" />
            </a>
            <div className="d-flex flex-column scrollLine justify-content-center align-items-center ">
              <div key={index} ref={nodeRefs[index]}  className="circle"/>
              <div className="scrollSubLine "/> 
            </div>
            <div className="d-flex flex-column gap-3 justify-content-center scrollText py-5">
              <div className="d-flex flex-column gap-0 eventTitle">
                <h3 className="fs-3 fw-bold">{event.title}</h3>
                <h3 className="fs-5 fw-semibold">{event.year}</h3>
              </div>
                <p className="fs-5">
                  {event.textPreview}
                </p>

            </div>
            </div>
         
          );
        }
        else{
          return(
            
              <div className="scrollNode d-flex justify-content-between align-items-centerW">
              <div className="d-flex flex-column gap-3 justify-content-center scrollText py-5">
                <div className="d-flex flex-column gap-0 eventTitle">
                  <h3 className="fs-3 fw-bold">{event.title}</h3>
                  <h3 className="fs-5 fw-semibold">{event.year}</h3>
                </div>
                  <p className="fs-5">
                    {event.textPreview}
                  </p>
              </div>
            <div className="d-flex flex-column scrollLine justify-content-center align-items-center  ">
            <div key={index} ref={nodeRefs[index]}  className="circle"/>
              <div className="scrollSubLine "/> 
            </div>
            <a className="evenImage " href={event.linkNav} >
              <img className="w-100 my-5 roundImg" src={event.img.src} alt="Map" />
            </a>
           
        </div>
            
          )          
        }
          
      })
  }
  </div>
  )
  

}

