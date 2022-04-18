import React from "react";
import { Carousel } from "react-bootstrap";

const CustomCarousel = () => {
  return (
    <Carousel className="container-fluid">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/7g7SpVT/1508014495-50462-020416-8.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Los Angeles</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/XW5SNcM/1508014500-857567-020416-9.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>NY City</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/HBhft5H/1508014739-471521-020416-49.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>New Mexico</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/fVgQ6ZN/1508014802-700063-020416-60.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Uzbekistan</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
