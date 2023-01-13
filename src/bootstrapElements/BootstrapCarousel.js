import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function BootstrapCarousel(props) {
    const carouselElements = props.images.map(image => {
        return (
            <Carousel.Item interval={5000} key={image}>
                <img
                    className= {props.fullSize ? "d-block w-100" : "carouselImg"}
                    src={image}
                />
            </Carousel.Item>
        )
    })
    return (
        <Carousel className="carousel">
            {carouselElements}
        </Carousel>
    )
}
