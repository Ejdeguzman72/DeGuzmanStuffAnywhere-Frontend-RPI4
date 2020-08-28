import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { render } from "@testing-library/react";
import NYC_Picture from '../../assets/slideshow-pictures/nyc.jpg';
import ATL from '../../assets/slideshow-pictures/atl.jpg';
import Minneapolis from '../../assets/slideshow-pictures/minneapolis.jpg';
import Austin from '../../assets/slideshow-pictures/austin.jpg';
import '../../style-sheets/home-page.css';
import React from "react";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel"
          src={NYC_Picture}
          alt="NYC"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel"
          src={ATL}
          alt="Atlanta"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel"
          src={Minneapolis}
          alt="Minneapolis"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100 carousel"
          src={Austin}
          alt="Austin,Texas"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;