import "../styles/scrollNode.scss"


type scrollNode = {
  title: string,
  year: string
  text: string,
  imag: string,

}

export const OddImage = (props: scrollNode) => {
  const {title, year, text, imag} = props;

    return (
        <div className="scrollNode d-flex justify-content-between align-items-centerW">
            <img className="oddImage my-5" src={imag} alt="Map" />
            <div className="scrollLine ">
      
              <div className="scrollSubLine "/> 
            </div>
            <div className="d-flex flex-column gap-3 scrollText py-5">
              <div className="d-flex flex-column gap-0 eventTitle">
                <h3 className="fs-4 fw-bold">{title}</h3>
                <h3 className="fs-5 fw-semibold">{year}</h3>
              </div>
                <p>
                  {text}
                </p>

            </div>
        </div>
    )
}

export const EvenImage = (props: scrollNode) => {
  const {title, year, text, imag} = props;

    return (
        <div className="scrollNode d-flex justify-content-between align-items-centerW">
              <div className="d-flex flex-column gap-3 scrollText py-5">
                <div className="d-flex flex-column gap-0 eventTitle">
                  <h3 className="fs-4 fw-bold">{title}</h3>
                  <h3 className="fs-5 fw-semibold">{year}</h3>
                </div>
                  <p>
                    {text}
                  </p>
            </div>
            <div className="scrollLine ">
              <div className="scrollSubLine "/> 
            </div>
            <img className="evenImage my-5" src={imag} alt="Map" />

        </div>
    )
}