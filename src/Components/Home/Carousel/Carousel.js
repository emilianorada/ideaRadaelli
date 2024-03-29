import React from 'react'

const Carousel = () => {
  return (
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                    <div className="carousel-item imgnormalizada  active" data-bs-interval="8000" >
                        <img src="images/slide1.jpg" className='d-block w-100 img-fluid' alt="..." />
                    </div>
                    <div className="carousel-item imgnormalizada" data-bs-interval="5000">
                        <img src="images/fibra.jpeg" className='d-block w-100 img-fluid' alt="..." />
                    </div>
                    <div className="carousel-item imgnormalizada " data-bs-interval="4000">
                        <img src="images/banner3.jpg" className='d-block w-100 img-fluid' alt="..." />
                    </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    </div>

  )
}

export default Carousel