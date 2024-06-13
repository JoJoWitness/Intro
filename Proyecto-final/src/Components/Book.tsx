
type book = {
  title: string,
  autor: string
  imag: string,
  link: string

}

export const Book = (props: book) =>{
  const {title, autor, imag, link} = props;
  return(
    <a href={link}>
      <div className="bookWidth me-5">
        
        <img className="bookImg w-100" src={imag}/>
        <div className="brown-umber fs-5 fw-medium">{title}</div>
        <div className="fs-5">{autor}</div>
      </div>
    </a>
  )
}