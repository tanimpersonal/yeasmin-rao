import React from "react";
import { Container } from "react-bootstrap";

import Contact from "../Contact/Contact";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

import useData from "../Utility/useData";

import "./Home.css";
const Home = () => {
  const datas = useData();

  return (
    <div>
      <div className="carousel">
        <CustomCarousel></CustomCarousel>
      </div>
      <div className="service">
        <div className="service-heading d-flex justify-content-center my-4">
          <h1>Services</h1>
        </div>

        <div className="services">
          {datas.map((data) => (
            <Services key={data.id} data={data}></Services>
          ))}
        </div>
      </div>
      <div className="contact">
        <div className="contact-heading d-flex justify-content-center my-4">
          <h1>Contact Me</h1>
        </div>
        <div className="my-5 ">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Home;
