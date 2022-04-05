import React from 'react'
import { Button, Carousel } from 'react-bootstrap'

const Landing = () => {
    return (

        <>  
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 estiloCarousel"
                src="./images/slide1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 estiloCarousel"
                src="./images/fibra.jpeg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
            <h1>Landing page</h1>
            <Button variant="info">Info</Button>{' '}

        </>
    )
}


export default Landing