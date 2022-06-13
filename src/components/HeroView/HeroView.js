import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const HeroView = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/hero2.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/hero.webp"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HeroView